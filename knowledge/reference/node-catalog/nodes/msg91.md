# MSG91

- Node name: `msg91`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Msg91/Msg91.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Sends transactional SMS via MSG91

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `msg91Api` (required)

## Resource and Operation Coverage
### Resources
- SMS (`sms`)

### Operations
- resource `sms`: `send`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `sms` |  |
| Operation | `operation` | `options` | no | `send` |  |
| Sender ID | `from` | `string` | yes |  | The number from which to send the message |
| To | `to` | `string` | yes |  | The number, with coutry code, to which to send the message |
| Message | `message` | `string` | yes |  | The message to send |

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
        "name": "SMS",
        "value": "sms"
      }
    ],
    "default": "sms"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "sms"
        ]
      }
    },
    "options": [
      {
        "name": "Send",
        "value": "send",
        "description": "Send SMS",
        "action": "Send an SMS"
      }
    ],
    "default": "send"
  },
  {
    "displayName": "Sender ID",
    "name": "from",
    "type": "string",
    "default": "",
    "placeholder": "4155238886",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ],
        "resource": [
          "sms"
        ]
      }
    },
    "description": "The number from which to send the message"
  },
  {
    "displayName": "To",
    "name": "to",
    "type": "string",
    "default": "",
    "placeholder": "+14155238886",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ],
        "resource": [
          "sms"
        ]
      }
    },
    "description": "The number, with coutry code, to which to send the message"
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ],
        "resource": [
          "sms"
        ]
      }
    },
    "description": "The message to send"
  }
]
```
