# Mautic Trigger

- Node name: `mauticTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mautic/MauticTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Mautic events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `mauticApi` (required)
- `mauticOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `credentials` |  |
| Event Names or IDs | `events` | `multiOptions` | yes | `[]` | Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Events Order | `eventsOrder` | `options` | no | `ASC` | Order direction for queued events in one webhook. Can be “DESC” or “ASC”. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Credentials",
        "value": "credentials"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "credentials"
  },
  {
    "displayName": "Event Names or IDs",
    "name": "events",
    "type": "multiOptions",
    "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getEvents"
    },
    "default": []
  },
  {
    "displayName": "Events Order",
    "name": "eventsOrder",
    "type": "options",
    "default": "ASC",
    "options": [
      {
        "name": "ASC",
        "value": "ASC"
      },
      {
        "name": "DESC",
        "value": "DESC"
      }
    ],
    "description": "Order direction for queued events in one webhook. Can be “DESC” or “ASC”."
  }
]
```
