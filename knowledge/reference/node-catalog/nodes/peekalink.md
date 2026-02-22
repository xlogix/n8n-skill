# Peekalink

- Node name: `peekalink`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Peekalink/Peekalink.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume the Peekalink API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `peekalinkApi` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `isAvailable`, `preview`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `preview` |  |
| URL | `url` | `string` | yes |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Is Available",
        "value": "isAvailable",
        "description": "Check whether preview for a given link is available",
        "action": "Check whether the preview for a given link is available"
      },
      {
        "name": "Preview",
        "value": "preview",
        "description": "Return the preview for a link",
        "action": "Return the preview for a link"
      }
    ],
    "default": "preview"
  },
  {
    "displayName": "URL",
    "name": "url",
    "type": "string",
    "default": "",
    "required": true
  }
]
```
