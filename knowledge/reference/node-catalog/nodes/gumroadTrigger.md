# Gumroad Trigger

- Node name: `gumroadTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Gumroad/GumroadTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Gumroad events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `gumroadApi` (required)

## Resource and Operation Coverage
### Resources
- Cancellation (`cancellation`) - When subscribed to this resource, you will be notified of cancellations of the user's subscribers
- Dispute (`dispute`) - When subscribed to this resource, you will be notified of the disputes raised against user's sales
- Dispute Won (`dispute_won`) - When subscribed to this resource, you will be notified of the sale disputes won
- Refund (`refund`) - When subscribed to this resource, you will be notified of refunds to the user's sales
- Sale (`sale`) - When subscribed to this resource, you will be notified of the user's sales


## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes |  | The resource is gonna fire the event |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Cancellation",
        "value": "cancellation",
        "description": "When subscribed to this resource, you will be notified of cancellations of the user's subscribers"
      },
      {
        "name": "Dispute",
        "value": "dispute",
        "description": "When subscribed to this resource, you will be notified of the disputes raised against user's sales"
      },
      {
        "name": "Dispute Won",
        "value": "dispute_won",
        "description": "When subscribed to this resource, you will be notified of the sale disputes won"
      },
      {
        "name": "Refund",
        "value": "refund",
        "description": "When subscribed to this resource, you will be notified of refunds to the user's sales"
      },
      {
        "name": "Sale",
        "value": "sale",
        "description": "When subscribed to this resource, you will be notified of the user's sales"
      }
    ],
    "description": "The resource is gonna fire the event"
  }
]
```
