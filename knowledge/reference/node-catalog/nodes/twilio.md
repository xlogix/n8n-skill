# Twilio

- Node name: `twilio`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Twilio/Twilio.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Send SMS and WhatsApp messages or make phone calls

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `twilioApi` (required)

## Resource and Operation Coverage
### Resources
- Call (`call`)
- SMS (`sms`)

### Operations
- resource `call`: `make`
- resource `sms`: `send`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `sms` |  |
| Operation | `operation` | `options` | no | `send` |  |
| Operation | `operation` | `options` | no | `make` |  |
| From | `from` | `string` | yes |  | The number from which to send the message |
| To | `to` | `string` | yes |  | The number to which to send the message |
| To Whatsapp | `toWhatsapp` | `boolean` | no | `false` | Whether the message should be sent to WhatsApp |
| Message | `message` | `string` | yes |  | The message to send |
| Use TwiML | `twiml` | `boolean` | no | `false` | Whether to use the <a href="https://www.twilio.com/docs/voice/twiml">Twilio Markup Language</a> in the message |
| Message | `message` | `string` | yes |  |  |
| Options | `options` | `collection` | no | `{}` |  |

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
        "name": "Call",
        "value": "call"
      },
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
        "description": "Send SMS/MMS/WhatsApp message",
        "action": "Send an SMS/MMS/WhatsApp message"
      }
    ],
    "default": "send"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "call"
        ]
      }
    },
    "options": [
      {
        "name": "Make",
        "value": "make",
        "action": "Make a call"
      }
    ],
    "default": "make"
  },
  {
    "displayName": "From",
    "name": "from",
    "type": "string",
    "default": "",
    "placeholder": "+14155238886",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send",
          "make"
        ],
        "resource": [
          "sms",
          "call"
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
          "send",
          "make"
        ],
        "resource": [
          "sms",
          "call"
        ]
      }
    },
    "description": "The number to which to send the message"
  },
  {
    "displayName": "To Whatsapp",
    "name": "toWhatsapp",
    "type": "boolean",
    "default": false,
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
    "description": "Whether the message should be sent to WhatsApp"
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
  },
  {
    "displayName": "Use TwiML",
    "name": "twiml",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "operation": [
          "make"
        ],
        "resource": [
          "call"
        ]
      }
    },
    "description": "Whether to use the <a href=\"https://www.twilio.com/docs/voice/twiml\">Twilio Markup Language</a> in the message"
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
          "make"
        ],
        "resource": [
          "call"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "Status Callback",
        "name": "statusCallback",
        "type": "string",
        "default": "",
        "description": "Status Callbacks allow you to receive events related to the REST resources managed by Twilio: Rooms, Recordings and Compositions"
      }
    ]
  }
]
```
