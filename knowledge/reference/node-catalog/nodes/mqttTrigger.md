# MQTT Trigger

- Node name: `mqttTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/MQTT/MqttTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Listens to MQTT events

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `mqtt` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Topics | `topics` | `string` | no |  | Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2 |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Topics",
    "name": "topics",
    "type": "string",
    "default": "",
    "description": "Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2"
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
        "description": "Whether to try parse the message to an object"
      },
      {
        "displayName": "Only Message",
        "name": "onlyMessage",
        "type": "boolean",
        "default": false,
        "description": "Whether to return only the message property"
      },
      {
        "displayName": "Parallel Processing",
        "name": "parallelProcessing",
        "type": "boolean",
        "default": true,
        "description": "Whether to process messages in parallel or by keeping the message in order"
      }
    ]
  }
]
```
