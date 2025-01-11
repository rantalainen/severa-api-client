import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import * as https from 'https';

export interface SeveraApiClientOptions {
  /** A client ID of the API credentials used for connection */
  clientId: string;
  /** A client secret of the API credentials used for connection */
  clientSecret: string;
  /** A scope for the API access */
  scope?: string[];
}

export interface SeveraApiClientConfig extends ApiConfig<any> {
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
