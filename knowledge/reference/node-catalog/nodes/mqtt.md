# MQTT

- Node name: `mqtt`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/MQTT/Mqtt.node.js`
- Node version: `1`
- Groups: `input`
- Description: Push messages to MQTT

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `mqtt` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Topic | `topic` | `string` | yes |  | The topic to publish to |
| Send Input Data | `sendInputData` | `boolean` | no | `true` | Whether to send the data the node receives as JSON |
| Message | `message` | `string` | yes |  | The message to publish |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Topic",
    "name": "topic",
    "type": "string",
    "required": true,
    "default": "",
    "description": "The topic to publish to"
  },
  {
    "displayName": "Send Input Data",
    "name": "sendInputData",
    "type": "boolean",
    "default": true,
    "description": "Whether to send the data the node receives as JSON"
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "sendInputData": [
          false
        ]
      }
    },
    "default": "",
    "description": "The message to publish"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "QoS",
        "name": "qos",
        "type": "options",
        "options": [
          {
            "name": "Received at Most Once",
            "value": 0
          },
          {
            "name": "Received at Least Once",
            "value": 1
          },
          {
            "name": "Exactly Once",
            "value": 2
          }
        ],
        "default": 0,
        "description": "QoS subscription level"
      },
      {
        "displayName": "Retain",
        "name": "retain",
        "type": "boolean",
        "default": false,
        "description": "Normally if a publisher publishes a message to a topic, and no one is subscribed to that topic the message is simply discarded by the broker. However the publisher can tell the broker to keep the last message on that topic by setting the retain flag to true."
      }
    ]
  }
]
```
