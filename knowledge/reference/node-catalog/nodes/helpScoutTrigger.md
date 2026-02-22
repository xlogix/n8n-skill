# Help Scout Trigger

- Node name: `helpScoutTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/HelpScout/HelpScoutTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Help Scout events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `helpScoutOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Events | `events` | `multiOptions` | yes | `[]` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Conversation - Assigned",
        "value": "convo.assigned"
      },
      {
        "name": "Conversation - Created",
        "value": "convo.created"
      },
      {
        "name": "Conversation - Deleted",
        "value": "convo.deleted"
      },
      {
        "name": "Conversation - Merged",
        "value": "convo.merged"
      },
      {
        "name": "Conversation - Moved",
        "value": "convo.moved"
      },
      {
        "name": "Conversation - Status",
        "value": "convo.status"
      },
      {
        "name": "Conversation - Tags",
        "value": "convo.tags"
      },
      {
        "name": "Conversation Agent Reply - Created",
        "value": "convo.agent.reply.created"
      },
      {
        "name": "Conversation Customer Reply - Created",
        "value": "convo.customer.reply.created"
      },
      {
        "name": "Conversation Note - Created",
        "value": "convo.note.created"
      },
      {
        "name": "Customer - Created",
        "value": "customer.created"
      },
      {
        "name": "Rating - Received",
        "value": "satisfaction.ratings"
      }
    ],
    "default": [],
    "required": true
  }
]
```
