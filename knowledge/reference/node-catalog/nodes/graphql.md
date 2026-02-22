# GraphQL

- Node name: `graphql`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/GraphQL/GraphQL.node.js`
- Node version: `[1,1.1]`
- Groups: `input`
- Description: Makes a GraphQL request and returns the received data

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `httpBasicAuth` (required)
- `httpCustomAuth` (required)
- `httpDigestAuth` (required)
- `httpHeaderAuth` (required)
- `httpQueryAuth` (required)
- `oAuth1Api` (required)
- `oAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `none` | The way to authenticate |
| HTTP Request Method | `requestMethod` | `options` | no | `POST` | The underlying HTTP request method to use |
| Endpoint | `endpoint` | `string` | yes |  | The GraphQL endpoint |
| Ignore SSL Issues (Insecure) | `allowUnauthorizedCerts` | `boolean` | no | `false` | Whether to download the response even if SSL certificate validation is not possible |
| Request Format | `requestFormat` | `options` | yes | `graphql` | The format for the query payload |
| Request Format | `requestFormat` | `options` | yes | `json` | The request format for the query payload |
| Query | `query` | `string` | yes |  | GraphQL query |
| Variables | `variables` | `json` | no |  | Query variables as JSON object |
| Operation Name | `operationName` | `string` | no |  | Name of operation to execute |
| Response Format | `responseFormat` | `options` | no | `json` | The format in which the data gets returned from the URL |
| Response Data Property Name | `dataPropertyName` | `string` | yes | `data` | Name of the property to which to write the response data |
| Headers | `headerParametersUi` | `fixedCollection` | no | `{}` | The headers to send |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Basic Auth",
        "value": "basicAuth"
      },
      {
        "name": "Custom Auth",
        "value": "customAuth"
      },
      {
        "name": "Digest Auth",
        "value": "digestAuth"
      },
      {
        "name": "Header Auth",
        "value": "headerAuth"
      },
      {
        "name": "None",
        "value": "none"
      },
      {
        "name": "OAuth1",
        "value": "oAuth1"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      },
      {
        "name": "Query Auth",
        "value": "queryAuth"
      }
    ],
    "default": "none",
    "description": "The way to authenticate"
  },
  {
    "displayName": "HTTP Request Method",
    "name": "requestMethod",
    "type": "options",
    "options": [
      {
        "name": "GET",
        "value": "GET"
      },
      {
        "name": "POST",
        "value": "POST"
      }
    ],
    "default": "POST",
    "description": "The underlying HTTP request method to use"
  },
  {
    "displayName": "Endpoint",
    "name": "endpoint",
    "type": "string",
    "default": "",
    "placeholder": "http://example.com/graphql",
    "description": "The GraphQL endpoint",
    "required": true
  },
  {
    "displayName": "Ignore SSL Issues (Insecure)",
    "name": "allowUnauthorizedCerts",
    "type": "boolean",
    "default": false,
    "description": "Whether to download the response even if SSL certificate validation is not possible"
  },
  {
    "displayName": "Request Format",
    "name": "requestFormat",
    "type": "options",
    "required": true,
    "options": [
      {
        "name": "GraphQL (Raw)",
        "value": "graphql"
      },
      {
        "name": "JSON",
        "value": "json"
      }
    ],
    "displayOptions": {
      "show": {
        "requestMethod": [
          "POST"
        ],
        "@version": [
          1
        ]
      }
    },
    "default": "graphql",
    "description": "The format for the query payload"
  },
  {
    "displayName": "Request Format",
    "name": "requestFormat",
    "type": "options",
    "required": true,
    "options": [
      {
        "name": "JSON (Recommended)",
        "value": "json",
        "description": "JSON object with query, variables, and operationName properties. The standard and most widely supported format for GraphQL requests."
      },
      {
        "name": "GraphQL (Raw)",
        "value": "graphql",
        "description": "Raw GraphQL query string. Not all servers support this format. Use JSON for better compatibility."
      }
    ],
    "displayOptions": {
      "show": {
        "requestMethod": [
          "POST"
        ],
        "@version": [
          {
            "_cnd": {
              "gte": 1.1
            }
          }
        ]
      }
    },
    "default": "json",
    "description": "The request format for the query payload"
  },
  {
    "displayName": "Query",
    "name": "query",
    "type": "string",
    "default": "",
    "description": "GraphQL query",
    "required": true,
    "typeOptions": {
      "rows": 6
    }
  },
  {
    "displayName": "Variables",
    "name": "variables",
    "type": "json",
    "default": "",
    "description": "Query variables as JSON object",
    "displayOptions": {
      "show": {
        "requestFormat": [
          "json"
        ],
        "requestMethod": [
          "POST"
        ]
      }
    }
  },
  {
    "displayName": "Operation Name",
    "name": "operationName",
    "type": "string",
    "default": "",
    "description": "Name of operation to execute",
    "displayOptions": {
      "show": {
        "requestFormat": [
          "json"
        ],
        "requestMethod": [
          "POST"
        ]
      }
    }
  },
  {
    "displayName": "Response Format",
    "name": "responseFormat",
    "type": "options",
    "options": [
      {
        "name": "JSON",
        "value": "json"
      },
      {
        "name": "String",
        "value": "string"
      }
    ],
    "default": "json",
    "description": "The format in which the data gets returned from the URL"
  },
  {
    "displayName": "Response Data Property Name",
    "name": "dataPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "displayOptions": {
      "show": {
        "responseFormat": [
          "string"
        ]
      }
    },
    "description": "Name of the property to which to write the response data"
  },
  {
    "displayName": "Headers",
    "name": "headerParametersUi",
    "placeholder": "Add Header",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "description": "The headers to send",
    "default": {},
    "options": [
      {
        "name": "parameter",
        "displayName": "Header",
        "values": [
          {
            "displayName": "Name",
            "name": "name",
            "type": "string",
            "default": "",
            "description": "Name of the header"
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Value to set for the header"
          }
        ]
      }
    ]
  }
]
```
