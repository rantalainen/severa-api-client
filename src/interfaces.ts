import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface IExampleApiClientOptions {
  /** An API key is a token that you provide when making API calls */
  apiKey: string;
}

export interface IExampleApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://example.com`.
   * Use `https://dev.example.com` for testing.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
