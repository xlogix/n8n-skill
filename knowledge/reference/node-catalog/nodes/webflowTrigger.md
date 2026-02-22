# Webflow Trigger

- Node name: `webflowTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Webflow/WebflowTrigger.node.js`
- Node version: `2`
- Groups: `trigger`
- Description: Handle Webflow events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `webflowOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Site Name or ID | `site` | `options` | yes |  | Site that will trigger the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Event | `event` | `options` | yes | `form_submission` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Site Name or ID",
    "name": "site",
    "type": "options",
    "required": true,
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "description": "Site that will trigger the events. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "options": [
      {
        "name": "Collection Item Created",
        "value": "collection_item_created"
      },
      {
        "name": "Collection Item Deleted",
        "value": "collection_item_deleted"
      },
      {
        "name": "Collection Item Updated",
        "value": "collection_item_changed"
      },
      {
        "name": "Ecomm Inventory Changed",
        "value": "ecomm_inventory_changed"
      },
      {
        "name": "Ecomm New Order",
        "value": "ecomm_new_order"
      },
      {
        "name": "Ecomm Order Changed",
        "value": "ecomm_order_changed"
      },
      {
        "name": "Form Submission",
        "value": "form_submission"
      },
      {
        "name": "Site Publish",
        "value": "site_publish"
      }
    ],
    "default": "form_submission"
  }
]
```
