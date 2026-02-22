# AMQP Trigger

- Node name: `amqpTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Amqp/AmqpTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Listens to AMQP 1.0 Messages

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `amqp` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Queue / Topic | `sink` | `string` | no |  | Name of the queue of topic to listen to |
| Clientname | `clientname` | `string` | no |  | Leave empty for non-durable topic subscriptions or queues |
| Subscription | `subscription` | `string` | no |  | Leave empty for non-durable topic subscriptions or queues |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Queue / Topic",
    "name": "sink",
    "type": "string",
    "default": "",
    "placeholder": "topic://sourcename.something",
    "description": "Name of the queue of topic to listen to"
  },
  {
    "displayName": "Clientname",
    "name": "clientname",
    "type": "string",
    "default": "",
    "placeholder": "e.g. n8n",
    "description": "Leave empty for non-durable topic subscriptions or queues",
    "hint": "for durable/persistent topic subscriptions"
  },
  {
    "displayName": "Subscription",
    "name": "subscription",
    "type": "string",
    "default": "",
    "placeholder": "e.g. order-worker",
    "description": "Leave empty for non-durable topic subscriptions or queues",
    "hint": "for durable/persistent topic subscriptions"
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
        "displayName": "Convert Body To String",
        "name": "jsonConvertByteArrayToString",
        "type": "boolean",
        "default": false,
        "description": "Whether to convert JSON Body content ([\"body\"][\"content\"]) from Byte Array to string. Needed for Azure Service Bus."
      },
      {
        "displayName": "JSON Parse Body",
        "name": "jsonParseBody",
        "type": "boolean",
        "default": false,
        "description": "Whether to parse the body to an object"
      },
      {
        "displayName": "Messages per Cicle",
        "name": "pullMessagesNumber",
        "type": "number",
        "default": 100,
        "description": "Number of messages to pull from the bus for every cicle"
      },
      {
        "displayName": "Only Body",
        "name": "onlyBody",
        "type": "boolean",
        "default": false,
        "description": "Whether to return only the body property"
      },
      {
        "displayName": "Parallel Processing",
        "name": "parallelProcessing",
        "type": "boolean",
        "default": true,
        "description": "Whether to process messages in parallel"
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
        "displayName": "Sleep Time",
        "name": "sleepTime",
        "type": "number",
        "default": 10,
        "description": "Milliseconds to sleep after every cicle"
      }
    ]
  }
]
```
