# Twilio Trigger

- Node name: `twilioTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Twilio/TwilioTrigger.node.js`
- Node version: `[1]`
- Groups: `trigger`
- Description: Starts the workflow on a Twilio update

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `twilioApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Trigger On | `updates` | `multiOptions` | yes | `[]` |  |
| The 'New Call' event may take up to thirty minutes to be triggered | `callTriggerNotice` | `notice` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Trigger On",
    "name": "updates",
    "type": "multiOptions",
    "options": [
      {
        "name": "New SMS",
        "value": "com.twilio.messaging.inbound-message.received",
        "description": "When an SMS message is received"
      },
      {
        "name": "New Call",
        "value": "com.twilio.voice.insights.call-summary.complete",
        "description": "When a call is received"
      }
    ],
    "required": true,
    "default": []
  },
  {
    "displayName": "The 'New Call' event may take up to thirty minutes to be triggered",
    "name": "callTriggerNotice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "updates": [
          "com.twilio.voice.insights.call-summary.complete"
        ]
      }
    }
  }
]
```
