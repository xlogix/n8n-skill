# Invoice Ninja Trigger

- Node name: `invoiceNinjaTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/InvoiceNinja/InvoiceNinjaTrigger.node.js`
- Node version: `[1,2]`
- Groups: `trigger`
- Description: Starts the workflow when Invoice Ninja events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `invoiceNinjaApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| API Version | `apiVersion` | `options` | no | `v4` |  |
| API Version | `apiVersion` | `options` | no | `v5` |  |
| Event | `event` | `options` | yes |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "API Version",
    "name": "apiVersion",
    "type": "options",
    "isNodeSetting": true,
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    },
    "options": [
      {
        "name": "Version 4",
        "value": "v4"
      },
      {
        "name": "Version 5",
        "value": "v5"
      }
    ],
    "default": "v4"
  },
  {
    "displayName": "API Version",
    "name": "apiVersion",
    "type": "options",
    "isNodeSetting": true,
    "displayOptions": {
      "show": {
        "@version": [
          2
        ]
      }
    },
    "options": [
      {
        "name": "Version 4",
        "value": "v4"
      },
      {
        "name": "Version 5",
        "value": "v5"
      }
    ],
    "default": "v5"
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "options": [
      {
        "name": "Client Created",
        "value": "create_client"
      },
      {
        "name": "Invoice Created",
        "value": "create_invoice"
      },
      {
        "name": "Payment Created",
        "value": "create_payment"
      },
      {
        "name": "Quote Created",
        "value": "create_quote"
      },
      {
        "name": "Vendor Created",
        "value": "create_vendor"
      }
    ],
    "default": "",
    "required": true
  }
]
```
