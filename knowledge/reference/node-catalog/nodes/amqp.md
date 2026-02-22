# AMQP Sender

- Node name: `amqp`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Amqp/Amqp.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Sends a raw-message via AMQP 1.0, executed once per item

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `amqp` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Queue / Topic | `sink` | `string` | no |  | Name of the queue of topic to publish to |
| Headers | `headerParametersJson` | `json` | no |  | Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info. |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Queue / Topic",
    "name": "sink",
    "type": "string",
    "default": "",
    "placeholder": "e.g. topic://sourcename.something",
    "description": "Name of the queue of topic to publish to"
  },
  {
    "displayName": "Headers",
    "name": "headerParametersJson",
    "type": "json",
    "default": "",
    "description": "Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info."
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Container ID",
        "name": "containerId",
        "type": "string",
        "default": "",
        "description": "Will be used to pass to the RHEA Backend as container_id"
      },
      {
        "displayName": "Data as Object",
        "name": "dataAsObject",
        "type": "boolean",
        "default": false,
        "description": "Whether to send the data as an object"
      },
      {
        "displayName": "Reconnect",
        "name": "reconnect",
        "type": "boolean",
        "default": true,
        "description": "Whether to automatically reconnect if disconnected"
      },
      {
        "displayName": "Reconnect Limit",
        "name": "reconnectLimit",
        "type": "number",
        "default": 50,
        "description": "Maximum number of reconnect attempts"
      },
      {
        "displayName": "Send Property",
        "name": "sendOnlyProperty",
        "type": "string",
        "default": "",
        "description": "The only property to send. If empty the whole item will be sent."
      }
    ]
  }
]
```
