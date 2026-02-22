# Yourls

- Node name: `yourls`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Yourls/Yourls.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume Yourls API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `yourlsApi` (required)

## Resource and Operation Coverage
### Resources
- URL (`url`)

### Operations
- resource `url`: `expand`, `shorten`, `stats`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `url` |  |
| Operation | `operation` | `options` | no | `shorten` |  |
| URL | `url` | `string` | yes |  | The URL to shorten |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Short URL | `shortUrl` | `string` | yes |  | The short URL to expand |
| Short URL | `shortUrl` | `string` | yes |  | The short URL for which to get stats |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "URL",
        "value": "url"
      }
    ],
    "default": "url"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "url"
        ]
      }
    },
    "options": [
      {
        "name": "Expand",
        "value": "expand",
        "description": "Expand a URL",
        "action": "Expand a URL"
      },
      {
        "name": "Shorten",
        "value": "shorten",
        "description": "Shorten a URL",
        "action": "Shorten a URL"
      },
      {
        "name": "Stats",
        "value": "stats",
        "description": "Get stats about one short URL",
        "action": "Get stats for a URL"
      }
    ],
    "default": "shorten"
  },
  {
    "displayName": "URL",
    "name": "url",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "url"
        ],
        "operation": [
          "shorten"
        ]
      }
    },
    "default": "",
    "description": "The URL to shorten"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "url"
        ],
        "operation": [
          "shorten"
        ]
      }
    },
    "options": [
      {
        "displayName": "Keyword",
        "name": "keyword",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": "",
        "description": "Title for custom short URLs"
      }
    ]
  },
  {
    "displayName": "Short URL",
    "name": "shortUrl",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "url"
        ],
        "operation": [
          "expand"
        ]
      }
    },
    "default": "",
    "description": "The short URL to expand"
  },
  {
    "displayName": "Short URL",
    "name": "shortUrl",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "url"
        ],
        "operation": [
          "stats"
        ]
      }
    },
    "default": "",
    "description": "The short URL for which to get stats"
  }
]
```
