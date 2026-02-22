# Plivo

- Node name: `plivo`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Plivo/Plivo.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Send SMS/MMS messages or make phone calls

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `plivoApi` (required)

## Resource and Operation Coverage
### Resources
- Call (`call`)
- MMS (`mms`)
- SMS (`sms`)

### Operations
- resource `call`: `make`
- resource `mms`: `send`
- resource `sms`: `send`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes | `sms` |  |
| Operation | `operation` | `options` | no | `send` |  |
| From | `from` | `string` | yes |  | Plivo Number to send the SMS from |
| To | `to` | `string` | yes |  | Phone number to send the message to |
| Message | `message` | `string` | yes |  | Message to send |
| Operation | `operation` | `options` | no | `send` |  |
| From | `from` | `string` | yes |  | Plivo Number to send the MMS from |
| To | `to` | `string` | yes |  | Phone number to send the MMS to |
| Message | `message` | `string` | no |  | Message to send |
| Media URLs | `media_urls` | `string` | no |  | Comma-separated list of media URLs of the files from your file server |
| Operation | `operation` | `options` | no | `make` |  |
| From | `from` | `string` | yes |  | Caller ID for the call to make |
| To | `to` | `string` | yes |  | Phone number to make the call to |
| Answer Method | `answer_method` | `options` | yes | `POST` | HTTP verb to be used when invoking the Answer URL |
| Answer URL | `answer_url` | `string` | yes |  | URL to be invoked by Plivo once the call is answered. It should return the XML to handle the call once answered. |

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
        "name": "MMS",
        "value": "mms"
      },
      {
        "name": "SMS",
        "value": "sms"
      }
    ],
    "default": "sms",
    "required": true
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
        "description": "Send an SMS message",
        "action": "Send an SMS"
      }
    ],
    "default": "send"
  },
  {
    "displayName": "From",
    "name": "from",
    "type": "string",
    "default": "",
    "description": "Plivo Number to send the SMS from",
    "placeholder": "+14156667777",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "sms"
        ],
        "operation": [
          "send"
        ]
      }
    }
  },
  {
    "displayName": "To",
    "name": "to",
    "type": "string",
    "default": "",
    "description": "Phone number to send the message to",
    "placeholder": "+14156667778",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "sms"
        ],
        "operation": [
          "send"
        ]
      }
    }
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "default": "",
    "description": "Message to send",
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
    }
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "mms"
        ]
      }
    },
    "options": [
      {
        "name": "Send",
        "value": "send",
        "description": "Send an MMS message (US/Canada only)",
        "action": "Send an MMS"
      }
    ],
    "default": "send"
  },
  {
    "displayName": "From",
    "name": "from",
    "type": "string",
    "default": "",
    "description": "Plivo Number to send the MMS from",
    "placeholder": "+14156667777",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "mms"
        ],
        "operation": [
          "send"
        ]
      }
    }
  },
  {
    "displayName": "To",
    "name": "to",
    "type": "string",
    "default": "",
    "description": "Phone number to send the MMS to",
    "placeholder": "+14156667778",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "send"
        ],
        "resource": [
          "mms"
        ]
      }
    }
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "default": "",
    "description": "Message to send",
    "displayOptions": {
      "show": {
        "resource": [
          "mms"
        ],
        "operation": [
          "send"
        ]
      }
    }
  },
  {
    "displayName": "Media URLs",
    "name": "media_urls",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "mms"
        ],
        "operation": [
          "send"
        ]
      }
    },
    "description": "Comma-separated list of media URLs of the files from your file server"
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
        "description": "Make a voice call",
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
    "placeholder": "+14156667777",
    "description": "Caller ID for the call to make",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "call"
        ],
        "operation": [
          "make"
        ]
      }
    }
  },
  {
    "displayName": "To",
    "name": "to",
    "type": "string",
    "default": "",
    "placeholder": "+14156667778",
    "required": true,
    "description": "Phone number to make the call to",
    "displayOptions": {
      "show": {
        "resource": [
          "call"
        ],
        "operation": [
          "make"
        ]
      }
    }
  },
  {
    "displayName": "Answer Method",
    "name": "answer_method",
    "type": "options",
    "required": true,
    "description": "HTTP verb to be used when invoking the Answer URL",
    "default": "POST",
    "options": [
      {
        "name": "GET",
        "value": "GET"
      },
      {
        "name": "POST",
        "value": "POST"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "call"
        ],
        "operation": [
          "make"
        ]
      }
    }
  },
  {
    "displayName": "Answer URL",
    "name": "answer_url",
    "type": "string",
    "default": "",
    "description": "URL to be invoked by Plivo once the call is answered. It should return the XML to handle the call once answered.",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "call"
        ],
        "operation": [
          "make"
        ]
      }
    }
  }
]
```
