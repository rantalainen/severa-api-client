# example-api-client

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
    scope: ['users:read', 'activities:read']
  }
);

// Access token needs to be manually fetched/refreshed before making any scoped requests.
await severa.refreshAccessToken();
```

Available methods can be found in the [API documentation](https://api.severa.visma.com/psapublicrest/doc/index.html#/).
