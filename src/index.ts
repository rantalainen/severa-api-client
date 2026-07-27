import { Api, ApiConfig } from './api';
import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import { RateLimiter } from './rate-limiter';
import { SeveraApiClientConfig, SeveraApiClientOptions } from './interfaces';
import { FileBuffer } from './file-buffer';
import * as https from 'https';
import CacheableLookup from 'cacheable-lookup';
import FormData from 'form-data';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class SeveraApiClient {
  options: SeveraApiClientOptions;
  config: Omit<SeveraApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: SeveraApiClientInstance;
  private accessToken: string | undefined = undefined;
  private rateLimiter: RateLimiter;
  private maxRetriesOn429: number;

  constructor(options: SeveraApiClientOptions, config: SeveraApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://api.severa.visma.com/rest-api';
    config.timeout = config.timeout || 120000;

    if (!options.clientId) throw new Error('Example error: Missing options.clientId');
    if (!options.clientSecret) throw new Error('Example error: Missing options.clientSecret');

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Severa does not return rate limit headers, so the limiter runs on fixed defaults
    this.rateLimiter = new RateLimiter(options.replenishRate, options.burstCapacity);
    this.maxRetriesOn429 = options.maxRetriesOn429 ?? 5;

    // Initialize Example Api Client Instance
    this.api = new SeveraApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });
    this.api.setSecurityData(this);

    // Install rate limiter interceptor
    this.installRateLimiter();

    // Install axios error handler
    this.installErrorHandler();
  }

  // Create a rate limiter interceptor that waits for tokens before allowing requests
  private installRateLimiter() {
    this.api.instance.interceptors.request.use(async (axiosRequestConfig: InternalAxiosRequestConfig) => {
      // Wait for rate limiter to allow the request
      await this.rateLimiter.waitUntilAvailable();
      return axiosRequestConfig;
    });
  }

  /**
   * Resolves how long to wait before retrying a request that was rejected with 429.
   * Uses the `Retry-After` header when the API provides one (seconds or HTTP date),
   * otherwise falls back to exponential backoff capped at 30 seconds.
   */
  private resolveRetryDelay(error: any, retryCount: number): number {
    const retryAfter = error.response?.headers?.['retry-after'];

    if (retryAfter !== undefined) {
      const retryAfterSeconds = Number(retryAfter);
      if (!isNaN(retryAfterSeconds) && retryAfterSeconds > 0) {
        return retryAfterSeconds * 1000;
      }

      const retryAfterDate = Date.parse(retryAfter);
      if (!isNaN(retryAfterDate)) {
        const waitMilliseconds = retryAfterDate - Date.now();
        if (waitMilliseconds > 0) return waitMilliseconds;
      }
    }

    return Math.min(1000 * Math.pow(2, retryCount), 30000);
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 429 && error.config) {
          const retryCount: number = error.config.__retryCount || 0;

          // Drain the bucket so that the retry and any concurrent requests are spaced out
          this.rateLimiter.backOff(this.resolveRetryDelay(error, retryCount));

          if (retryCount < this.maxRetriesOn429) {
            error.config.__retryCount = retryCount + 1;
            // The rate limiter request interceptor holds the retry back until the backoff has passed
            return this.api.instance.request(error.config);
          }
        }

        if (error.response) {
          error.message = `HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        }

        throw error;
      }
    );
  }

  public async refreshAccessToken() {
    // Get a new access token if it's not currently set
    if (!this.accessToken) {
      const accessTokenResponse = await this.api.v1.publicBearerAuthenticationGetLoginToken({
        client_id: this.options.clientId,
        client_secret: this.options.clientSecret,
        scope: this.options.scope?.join(',') || undefined
      });

      if (!accessTokenResponse.data.access_token) throw new Error('Access token is missing from the response');
      if (!accessTokenResponse.data.access_token_expires_in) throw new Error('Access token expiration time is missing from the response');

      this.accessToken = accessTokenResponse.data.access_token;
    }
  }

  private async securityWorker(severa: SeveraApiClient) {
    const axiosRequestConfig: AxiosRequestConfig = {};

    axiosRequestConfig.headers = {
      Authorization: severa.accessToken ? `Bearer ${severa.accessToken}` : undefined,
      client_id: severa.options.clientId
    };

    return axiosRequestConfig;
  }
}

class SeveraApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer;

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type
          });
        } else {
          formData.append(key, this.stringifyFormItem(formItem));
        }
      }

      return formData;
    }, new FormData());
  }

  helpers = {};
}
