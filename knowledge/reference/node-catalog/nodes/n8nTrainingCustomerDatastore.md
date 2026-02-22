# Customer Datastore (n8n training)

- Node name: `n8nTrainingCustomerDatastore`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/N8nTrainingCustomerDatastore/N8nTrainingCustomerDatastore.node.js`
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
### Operations
- default/all resources: `getAllPeople`, `getOnePerson`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `getOnePerson` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `5` | Max number of results to return |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Get One Person",
        "value": "getOnePerson"
      },
      {
        "name": "Get All People",
        "value": "getAllPeople"
      }
    ],
    "default": "getOnePerson"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "getAllPeople"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "operation": [
          "getAllPeople"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 10
    },
    "default": 5,
    "description": "Max number of results to return"
  }
]
```
