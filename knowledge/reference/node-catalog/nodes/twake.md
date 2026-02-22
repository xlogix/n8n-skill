# Twake

- Node name: `twake`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Twake/Twake.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume Twake API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `twakeCloudApi` (required)

## Resource and Operation Coverage
### Resources
- Message (`message`) - Send data to the message app

### Operations
- resource `message`: `send`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `message` |  |
| Operation | `operation` | `options` | no | `send` |  |
| Channel Name or ID | `channelId` | `options` | no |  | Channel's ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Content | `content` | `string` | yes |  | Message content |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |

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
        "name": "Message",
        "value": "message",
        "description": "Send data to the message app"
      }
    ],
    "default": "message"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ]
      }
    },
    "options": [
      {
        "name": "Send",
        "value": "send",
        "description": "Send a message",
        "action": "Send a message"
      }
    ],
    "default": "send"
  },
  {
    "displayName": "Channel Name or ID",
    "name": "channelId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getChannels"
    },
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ]
      }
    },
    "default": "",
    "description": "Channel's ID. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ]
      }
    },
    "default": "",
    "description": "Message content"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Sender Icon",
        "name": "senderIcon",
        "type": "string",
        "default": "",
        "description": "URL of the image/icon"
      },
      {
        "displayName": "Sender Name",
        "name": "senderName",
        "type": "string",
        "default": ""
      }
    ]
  }
]
```
