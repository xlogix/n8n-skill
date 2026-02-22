# Customer Messenger (n8n training)

- Node name: `n8nTrainingCustomerMessenger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/N8nTrainingCustomerMessenger/N8nTrainingCustomerMessenger.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Dummy node used for n8n training

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Customer ID | `customerId` | `string` | yes |  |  |
| Message | `message` | `string` | yes |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Customer ID",
    "name": "customerId",
    "type": "string",
    "required": true,
    "default": ""
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "required": true,
    "typeOptions": {
      "rows": 4
    },
    "default": ""
  }
]
```
