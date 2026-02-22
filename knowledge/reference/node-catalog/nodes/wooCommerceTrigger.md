# WooCommerce Trigger

- Node name: `wooCommerceTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/WooCommerce/WooCommerceTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle WooCommerce events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `wooCommerceApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes |  | Determines which resource events the webhook is triggered for |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "coupon.created",
        "value": "coupon.created"
      },
      {
        "name": "coupon.deleted",
        "value": "coupon.deleted"
      },
      {
        "name": "coupon.updated",
        "value": "coupon.updated"
      },
      {
        "name": "customer.created",
        "value": "customer.created"
      },
      {
        "name": "customer.deleted",
        "value": "customer.deleted"
      },
      {
        "name": "customer.updated",
        "value": "customer.updated"
      },
      {
        "name": "order.created",
        "value": "order.created"
      },
      {
        "name": "order.deleted",
        "value": "order.deleted"
      },
      {
        "name": "order.updated",
        "value": "order.updated"
      },
      {
        "name": "product.created",
        "value": "product.created"
      },
      {
        "name": "product.deleted",
        "value": "product.deleted"
      },
      {
        "name": "product.updated",
        "value": "product.updated"
      }
    ],
    "description": "Determines which resource events the webhook is triggered for"
  }
]
```
