# Redis Trigger

- Node name: `redisTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Redis/RedisTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Subscribe to redis channel

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `redis` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Channels | `channels` | `string` | yes |  | Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported. |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Channels",
    "name": "channels",
    "type": "string",
    "default": "",
    "required": true,
    "description": "Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported."
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "JSON Parse Body",
        "name": "jsonParseBody",
        "type": "boolean",
        "default": false,
        "description": "Whether to try to parse the message to an object"
      },
      {
        "displayName": "Only Message",
        "name": "onlyMessage",
        "type": "boolean",
        "default": false,
        "description": "Whether to return only the message property"
      }
    ]
  }
]
```
