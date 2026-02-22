# Eventbrite Trigger

- Node name: `eventbriteTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Eventbrite/EventbriteTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Eventbrite events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `eventbriteApi` (required)
- `eventbriteOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `privateKey` |  |
| Organization Name or ID | `organization` | `options` | yes |  | The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Event Name or ID | `event` | `options` | yes |  | Limit the triggers to this event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Actions | `actions` | `multiOptions` | yes | `[]` | One or more action to subscribe to |
| Resolve Data | `resolveData` | `boolean` | no | `true` | By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Private Key",
        "value": "privateKey"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "privateKey"
  },
  {
    "displayName": "Organization Name or ID",
    "name": "organization",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getOrganizations"
    },
    "default": "",
    "description": "The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Event Name or ID",
    "name": "event",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsDependsOn": [
        "organization"
      ],
      "loadOptionsMethod": "getEvents"
    },
    "default": "",
    "description": "Limit the triggers to this event. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Actions",
    "name": "actions",
    "type": "multiOptions",
    "options": [
      {
        "name": "attendee.checked_in",
        "value": "attendee.checked_in"
      },
      {
        "name": "attendee.checked_out",
        "value": "attendee.checked_out"
      },
      {
        "name": "attendee.updated",
        "value": "attendee.updated"
      },
      {
        "name": "event.created",
        "value": "event.created"
      },
      {
        "name": "event.published",
        "value": "event.published"
      },
      {
        "name": "event.unpublished",
        "value": "event.unpublished"
      },
      {
        "name": "event.updated",
        "value": "event.updated"
      },
      {
        "name": "order.placed",
        "value": "order.placed"
      },
      {
        "name": "order.refunded",
        "value": "order.refunded"
      },
      {
        "name": "order.updated",
        "value": "order.updated"
      },
      {
        "name": "organizer.updated",
        "value": "organizer.updated"
      },
      {
        "name": "ticket_class.created",
        "value": "ticket_class.created"
      },
      {
        "name": "ticket_class.deleted",
        "value": "ticket_class.deleted"
      },
      {
        "name": "ticket_class.updated",
        "value": "ticket_class.updated"
      },
      {
        "name": "venue.updated",
        "value": "venue.updated"
      }
    ],
    "required": true,
    "default": [],
    "description": "One or more action to subscribe to"
  },
  {
    "displayName": "Resolve Data",
    "name": "resolveData",
    "type": "boolean",
    "default": true,
    "description": "By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically."
  }
]
```
