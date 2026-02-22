# RSS Read

- Node name: `rssFeedRead`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/RssFeedRead/RssFeedRead.node.js`
- Node version: `[1,1.1,1.2]`
- Groups: `input`
- Description: Reads data from an RSS Feed

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| URL | `url` | `string` | yes |  | URL of the RSS feed |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "URL",
    "name": "url",
    "type": "string",
    "default": "",
    "required": true,
    "description": "URL of the RSS feed"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Custom Fields",
        "name": "customFields",
        "type": "string",
        "default": "",
        "description": "A comma-separated list of custom fields to include in the output. For example, \"author, contentSnippet\"."
      },
      {
        "displayName": "Ignore SSL Issues (Insecure)",
        "name": "ignoreSSL",
        "type": "boolean",
        "default": false,
        "description": "Whether to ignore SSL/TLS certificate issues or not"
      }
    ]
  }
]
```
