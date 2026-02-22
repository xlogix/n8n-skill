# Stackby

- Node name: `stackby`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Stackby/Stackby.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Read, write, and delete data in Stackby

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `stackbyApi` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `append`, `delete`, `list`, `read`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `append` |  |
| Stack ID | `stackId` | `string` | yes |  | The ID of the stack to access |
| Table | `table` | `string` | yes |  | Enter Table Name |
| ID | `id` | `string` | yes |  | ID of the record to return |
| Return All | `returnAll` | `boolean` | no | `true` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `1000` | Max number of results to return |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Columns | `columns` | `string` | yes |  | Comma-separated list of the properties which should used as columns for the new rows |

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
        "name": "Append",
        "value": "append"
      },
      {
        "name": "Delete",
        "value": "delete"
      },
      {
        "name": "List",
        "value": "list"
      },
      {
        "name": "Read",
        "value": "read"
      }
    ],
    "default": "append",
    "placeholder": "Action to perform"
  },
  {
    "displayName": "Stack ID",
    "name": "stackId",
    "type": "string",
    "default": "",
    "required": true,
    "description": "The ID of the stack to access"
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "string",
    "default": "",
    "placeholder": "Stories",
    "required": true,
    "description": "Enter Table Name"
  },
  {
    "displayName": "ID",
    "name": "id",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "read",
          "delete"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "ID of the record to return"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "list"
        ]
      }
    },
    "default": true,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "operation": [
          "list"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 1000
    },
    "default": 1000,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "displayOptions": {
      "show": {
        "operation": [
          "list"
        ]
      }
    },
    "default": {},
    "placeholder": "Add Field",
    "options": [
      {
        "displayName": "View",
        "name": "view",
        "type": "string",
        "default": "",
        "placeholder": "All Stories",
        "description": "The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view."
      }
    ]
  },
  {
    "displayName": "Columns",
    "name": "columns",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "append"
        ]
      }
    },
    "default": "",
    "required": true,
    "placeholder": "id,name,description",
    "description": "Comma-separated list of the properties which should used as columns for the new rows"
  }
]
```
