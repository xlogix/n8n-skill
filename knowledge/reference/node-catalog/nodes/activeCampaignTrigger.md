# ActiveCampaign Trigger

- Node name: `activeCampaignTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ActiveCampaign/ActiveCampaignTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle ActiveCampaign events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `activeCampaignApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event Names or IDs | `events` | `multiOptions` | no | `[]` | Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Source | `sources` | `multiOptions` | no | `[]` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event Names or IDs",
    "name": "events",
    "type": "multiOptions",
    "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getEvents"
    },
    "default": [],
    "options": []
  },
  {
    "displayName": "Source",
    "name": "sources",
    "type": "multiOptions",
    "options": [
      {
        "name": "Public",
        "value": "public",
        "description": "Run the hooks when a contact triggers the action"
      },
      {
        "name": "Admin",
        "value": "admin",
        "description": "Run the hooks when an admin user triggers the action"
      },
      {
        "name": "Api",
        "value": "api",
        "description": "Run the hooks when an API call triggers the action"
      },
      {
        "name": "System",
        "value": "system",
        "description": "Run the hooks when automated systems triggers the action"
      }
    ],
    "default": []
  }
]
```
