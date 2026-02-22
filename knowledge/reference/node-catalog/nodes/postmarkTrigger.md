# Postmark Trigger

- Node name: `postmarkTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Postmark/PostmarkTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Postmark events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `postmarkApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Events | `events` | `multiOptions` | yes | `[]` | Webhook events that will be enabled for that endpoint |
| First Open | `firstOpen` | `boolean` | no | `false` | Only fires on first open for event "Open" |
| Include Content | `includeContent` | `boolean` | no | `false` | Whether to include message content for events "Bounce" and "Spam Complaint" |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Bounce",
        "value": "bounce",
        "description": "Trigger on bounce"
      },
      {
        "name": "Click",
        "value": "click",
        "description": "Trigger on click"
      },
      {
        "name": "Delivery",
        "value": "delivery",
        "description": "Trigger on delivery"
      },
      {
        "name": "Open",
        "value": "open",
        "description": "Trigger webhook on open"
      },
      {
        "name": "Spam Complaint",
        "value": "spamComplaint",
        "description": "Trigger on spam complaint"
      },
      {
        "name": "Subscription Change",
        "value": "subscriptionChange",
        "description": "Trigger on subscription change"
      }
    ],
    "default": [],
    "required": true,
    "description": "Webhook events that will be enabled for that endpoint"
  },
  {
    "displayName": "First Open",
    "name": "firstOpen",
    "description": "Only fires on first open for event \"Open\"",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "events": [
          "open"
        ]
      }
    }
  },
  {
    "displayName": "Include Content",
    "name": "includeContent",
    "description": "Whether to include message content for events \"Bounce\" and \"Spam Complaint\"",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "events": [
          "bounce",
          "spamComplaint"
        ]
      }
    }
  }
]
```
