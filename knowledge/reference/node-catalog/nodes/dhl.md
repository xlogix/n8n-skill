# DHL

- Node name: `dhl`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Dhl/Dhl.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume DHL API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `dhlApi` (required)

## Resource and Operation Coverage
### Resources
- Shipment (`shipment`)

### Operations
- resource `shipment`: `get`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `hidden` | no | `shipment` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Tracking Number | `trackingNumber` | `string` | yes |  |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "noDataExpression": true,
    "type": "hidden",
    "options": [
      {
        "name": "Shipment",
        "value": "shipment"
      }
    ],
    "default": "shipment"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "shipment"
        ]
      }
    },
    "options": [
      {
        "name": "Get Tracking Details",
        "value": "get",
        "action": "Get tracking details for a shipment"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Tracking Number",
    "name": "trackingNumber",
    "type": "string",
    "required": true,
    "default": ""
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Recipient's Postal Code",
        "name": "recipientPostalCode",
        "type": "string",
        "default": "",
        "description": "DHL will return more detailed information on the shipment when you provide the Recipient's Postal Code - it acts as a verification step"
      }
    ]
  }
]
```
