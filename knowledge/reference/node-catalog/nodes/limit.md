# Limit

- Node name: `limit`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Transform/Limit/Limit.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Restrict the number of items

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
| Max Items | `maxItems` | `number` | no | `1` | If there are more items than this number, some are removed |
| Keep | `keep` | `options` | no | `firstItems` | When removing items, whether to keep the ones at the start or the ending |

## Full Parameter Schema
```json
[
  {
    "displayName": "Max Items",
    "name": "maxItems",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "default": 1,
    "description": "If there are more items than this number, some are removed"
  },
  {
    "displayName": "Keep",
    "name": "keep",
    "type": "options",
    "options": [
      {
        "name": "First Items",
        "value": "firstItems"
      },
      {
        "name": "Last Items",
        "value": "lastItems"
      }
    ],
    "default": "firstItems",
    "description": "When removing items, whether to keep the ones at the start or the ending"
  }
]
```
