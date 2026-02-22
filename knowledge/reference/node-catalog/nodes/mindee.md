# Mindee

- Node name: `mindee`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mindee/Mindee.node.js`
- Node version: `[1,2,3]`
- Groups: `input`
- Description: Consume Mindee API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `mindeeReceiptApi` (required)
- `mindeeInvoiceApi` (required)

## Resource and Operation Coverage
### Resources
- Invoice (`invoice`)
- Receipt (`receipt`)

### Operations
- default/all resources: `predict`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| API Version | `apiVersion` | `options` | no | `1` | Which Mindee API Version to use |
| API Version | `apiVersion` | `options` | no | `3` | Which Mindee API Version to use |
| API Version | `apiVersion` | `options` | no | `4` | Which Mindee API Version to use |
| Resource | `resource` | `options` | no | `receipt` |  |
| Operation | `operation` | `options` | no | `predict` |  |
| Input Binary Field | `binaryPropertyName` | `string` | yes | `data` |  |
| RAW Data | `rawData` | `boolean` | no | `false` | Whether to return the data exactly in the way it got received from the API |

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
        "name": "1",
        "value": 1
      },
      {
        "name": "3",
        "value": 3
      },
      {
        "name": "4",
        "value": 4
      }
    ],
    "default": 1,
    "description": "Which Mindee API Version to use"
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
        "name": "1",
        "value": 1
      },
      {
        "name": "3",
        "value": 3
      },
      {
        "name": "4",
        "value": 4
      }
    ],
    "default": 3,
    "description": "Which Mindee API Version to use"
  },
  {
    "displayName": "API Version",
    "name": "apiVersion",
    "type": "options",
    "isNodeSetting": true,
    "displayOptions": {
      "show": {
        "@version": [
          3
        ]
      }
    },
    "options": [
      {
        "name": "1",
        "value": 1
      },
      {
        "name": "3",
        "value": 3
      },
      {
        "name": "4",
        "value": 4
      }
    ],
    "default": 4,
    "description": "Which Mindee API Version to use"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Invoice",
        "value": "invoice"
      },
      {
        "name": "Receipt",
        "value": "receipt"
      }
    ],
    "default": "receipt"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Predict",
        "value": "predict"
      }
    ],
    "default": "predict"
  },
  {
    "displayName": "Input Binary Field",
    "name": "binaryPropertyName",
    "type": "string",
    "required": true,
    "default": "data",
    "displayOptions": {
      "show": {
        "operation": [
          "predict"
        ],
        "resource": [
          "receipt",
          "invoice"
        ]
      }
    },
    "hint": "The name of the input binary field containing the file to be uploaded"
  },
  {
    "displayName": "RAW Data",
    "name": "rawData",
    "type": "boolean",
    "default": false,
    "description": "Whether to return the data exactly in the way it got received from the API"
  }
]
```
