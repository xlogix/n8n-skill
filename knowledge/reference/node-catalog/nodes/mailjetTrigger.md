# Mailjet Trigger

- Node name: `mailjetTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mailjet/MailjetTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Mailjet events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `mailjetEmailApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes | `open` | Determines which resource events the webhook is triggered for |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "open",
    "options": [
      {
        "name": "email.blocked",
        "value": "blocked"
      },
      {
        "name": "email.bounce",
        "value": "bounce"
      },
      {
        "name": "email.open",
        "value": "open"
      },
      {
        "name": "email.sent",
        "value": "sent"
      },
      {
        "name": "email.spam",
        "value": "spam"
      },
      {
        "name": "email.unsub",
        "value": "unsub"
      }
    ],
    "description": "Determines which resource events the webhook is triggered for"
  }
]
```
