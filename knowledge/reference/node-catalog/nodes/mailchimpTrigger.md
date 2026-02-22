# Mailchimp Trigger

- Node name: `mailchimpTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mailchimp/MailchimpTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Mailchimp events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `mailchimpApi` (required)
- `mailchimpOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `apiKey` |  |
| List Name or ID | `list` | `options` | yes |  | The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Events | `events` | `multiOptions` | yes | `[]` | The events that can trigger the webhook and whether they are enabled |
| Sources | `sources` | `multiOptions` | yes | `[]` | The possible sources of any events that can trigger the webhook and whether they are enabled |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "API Key",
        "value": "apiKey"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "apiKey"
  },
  {
    "displayName": "List Name or ID",
    "name": "list",
    "type": "options",
    "required": true,
    "default": "",
    "description": "The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "typeOptions": {
      "loadOptionsMethod": "getLists"
    },
    "options": []
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "description": "The events that can trigger the webhook and whether they are enabled",
    "options": [
      {
        "name": "Campaign Sent",
        "value": "campaign",
        "description": "Whether the webhook is triggered when a campaign is sent or cancelled"
      },
      {
        "name": "Cleaned",
        "value": "cleaned",
        "description": "Whether the webhook is triggered when a subscriber's email address is cleaned from the list"
      },
      {
        "name": "Email Address Updated",
        "value": "upemail",
        "description": "Whether the webhook is triggered when a subscriber's email address is changed"
      },
      {
        "name": "Profile Updated",
        "value": "profile",
        "description": "Whether the webhook is triggered when a subscriber's profile is updated"
      },
      {
        "name": "Subscribe",
        "value": "subscribe",
        "description": "Whether the webhook is triggered when a list subscriber is added"
      },
      {
        "name": "Unsubscribe",
        "value": "unsubscribe",
        "description": "Whether the webhook is triggered when a list member unsubscribes"
      }
    ]
  },
  {
    "displayName": "Sources",
    "name": "sources",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "description": "The possible sources of any events that can trigger the webhook and whether they are enabled",
    "options": [
      {
        "name": "User",
        "value": "user",
        "description": "Whether the webhook is triggered by subscriber-initiated actions"
      },
      {
        "name": "Admin",
        "value": "admin",
        "description": "Whether the webhook is triggered by admin-initiated actions in the web interface"
      },
      {
        "name": "API",
        "value": "api",
        "description": "Whether the webhook is triggered by actions initiated via the API"
      }
    ]
  }
]
```
