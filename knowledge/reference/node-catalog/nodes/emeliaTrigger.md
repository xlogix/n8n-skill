# Emelia Trigger

- Node name: `emeliaTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Emelia/EmeliaTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Emelia campaign activity events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `emeliaApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Campaign Name or ID | `campaignId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Events | `events` | `multiOptions` | yes | `[]` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Campaign Name or ID",
    "name": "campaignId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getCampaigns"
    },
    "required": true,
    "default": ""
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "options": [
      {
        "name": "Email Bounced",
        "value": "bounced"
      },
      {
        "name": "Email Opened",
        "value": "opened"
      },
      {
        "name": "Email Replied",
        "value": "replied"
      },
      {
        "name": "Email Sent",
        "value": "sent"
      },
      {
        "name": "Link Clicked",
        "value": "clicked"
      },
      {
        "name": "Unsubscribed Contact",
        "value": "unsubscribed"
      }
    ]
  }
]
```
