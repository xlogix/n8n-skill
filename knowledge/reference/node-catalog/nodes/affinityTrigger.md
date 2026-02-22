# Affinity Trigger

- Node name: `affinityTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Affinity/AffinityTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Affinity events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `affinityApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Events | `events` | `multiOptions` | yes | `[]` | Webhook events that will be enabled for that endpoint |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "field_value.created",
        "value": "field_value.created"
      },
      {
        "name": "field_value.deleted",
        "value": "field_value.deleted"
      },
      {
        "name": "field_value.updated",
        "value": "field_value.updated"
      },
      {
        "name": "field.created",
        "value": "field.created"
      },
      {
        "name": "field.deleted",
        "value": "field.deleted"
      },
      {
        "name": "field.updated",
        "value": "field.updated"
      },
      {
        "name": "file.created",
        "value": "file.created"
      },
      {
        "name": "file.deleted",
        "value": "file.deleted"
      },
      {
        "name": "list_entry.created",
        "value": "list_entry.created"
      },
      {
        "name": "list_entry.deleted",
        "value": "list_entry.deleted"
      },
      {
        "name": "list.created",
        "value": "list.created"
      },
      {
        "name": "list.deleted",
        "value": "list.deleted"
      },
      {
        "name": "list.updated",
        "value": "list.updated"
      },
      {
        "name": "note.created",
        "value": "note.created"
      },
      {
        "name": "note.deleted",
        "value": "note.deleted"
      },
      {
        "name": "note.updated",
        "value": "note.updated"
      },
      {
        "name": "opportunity.created",
        "value": "opportunity.created"
      },
      {
        "name": "opportunity.deleted",
        "value": "opportunity.deleted"
      },
      {
        "name": "opportunity.updated",
        "value": "opportunity.updated"
      },
      {
        "name": "organization.created",
        "value": "organization.created"
      },
      {
        "name": "organization.deleted",
        "value": "organization.deleted"
      },
      {
        "name": "organization.updated",
        "value": "organization.updated"
      },
      {
        "name": "person.created",
        "value": "person.created"
      },
      {
        "name": "person.deleted",
        "value": "person.deleted"
      },
      {
        "name": "person.updated",
        "value": "person.updated"
      }
    ],
    "default": [],
    "required": true,
    "description": "Webhook events that will be enabled for that endpoint"
  }
]
```
