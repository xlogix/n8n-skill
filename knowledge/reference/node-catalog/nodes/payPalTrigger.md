# PayPal Trigger

- Node name: `payPalTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/PayPal/PayPalTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle PayPal events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `payPalApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event Names or IDs | `events` | `multiOptions` | yes | `[]` | The event to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event Names or IDs",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "description": "The event to listen to. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "typeOptions": {
      "loadOptionsMethod": "getEvents"
    },
    "options": []
  }
]
```
