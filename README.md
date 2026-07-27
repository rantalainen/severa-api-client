# severa-api-client

**SeveraApiClient** is a third party [Severa API](https://api.severa.visma.com/psapublicrest/doc/index.html#/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://example.com/openapi.json) provided by Severa.

## Installation

Add to project's package.json:

```
npm install @rantalainen/severa-api-client
```

### Import

```javascript
const SeveraApiClient = require('@rantalainen/example-api-client').SeveraApiClient;
```

## Setup client with options

Severa REST API credentials can be obtained from Severa. More information [here](https://support.severa.com/en/support/solutions/articles/77000546834-how-to-get-started-with-rest-api)

```javascript
const severa = new SeveraApiClient(
  {
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    scope: ['users:read', 'activities:read'],
    // Optional arguments related to rate limiting
    replenishRate: 8,
    burstCapacity: 8,
    maxRetriesOn429: 5
  }
);

// Access token needs to be manually fetched/refreshed before making any scoped requests.
await severa.refreshAccessToken();
```

Available methods can be found in the [API documentation](https://api.severa.visma.com/psapublicrest/doc/index.html#/).

## Rate limiting

Severa limits API usage to 10 requests per second and answers with `429 Too Many Requests`
(`API calls quota exceeded! maximum admitted 10 per 1s.`) when the quota is exceeded. The client
handles this automatically, so callers do not need to add their own delays when looping through
paginated results:

- Outgoing requests are paced with a token bucket, by default 8 requests per second with a burst
  capacity of 8. The defaults leave headroom below the quota and can be changed with the
  `replenishRate` and `burstCapacity` options.
- A request that still gets a 429 is retried up to `maxRetriesOn429` times (5 by default, set to 0
  to disable). The wait is taken from the `Retry-After` response header when Severa provides one,
  otherwise it uses exponential backoff capped at 30 seconds. While waiting, all other requests are
  held back as well, so a burst of parallel requests backs off as a whole.

If retrying does not help, the original error is thrown with the usual rewritten error message.
