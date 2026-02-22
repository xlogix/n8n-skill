# SSE Trigger

- Node name: `sseTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/SseTrigger/SseTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Triggers the workflow when Server-Sent Events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| URL | `url` | `string` | yes |  | The URL to receive the SSE from |

## Full Parameter Schema
```json
[
  {
    "displayName": "URL",
    "name": "url",
    "type": "string",
    "default": "",
    "placeholder": "http://example.com",
    "description": "The URL to receive the SSE from",
    "required": true
  }
]
```
