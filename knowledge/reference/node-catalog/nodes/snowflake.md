# Snowflake

- Node name: `snowflake`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Snowflake/Snowflake.node.js`
- Node version: `1`
- Groups: `input`
- Description: Get, add and update data in Snowflake

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `snowflake` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `executeQuery`, `insert`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `insert` |  |
| Query | `query` | `string` | yes |  | The SQL query to execute |
| Table | `table` | `string` | yes |  | Name of the table in which to insert data to |
| Columns | `columns` | `string` | no |  | Comma-separated list of the properties which should used as columns for the new rows |
| Table | `table` | `string` | yes |  | Name of the table in which to update data in |
| Update Key | `updateKey` | `string` | yes | `id` | Name of the property which decides which rows in the database should be updated. Normally that would be "id". |
| Columns | `columns` | `string` | no |  | Comma-separated list of the properties which should used as columns for rows to update |

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
        "name": "Execute Query",
        "value": "executeQuery",
        "description": "Execute an SQL query",
        "action": "Execute a SQL query"
      },
      {
        "name": "Insert",
        "value": "insert",
        "description": "Insert rows in database",
        "action": "Insert rows in database"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update rows in database",
        "action": "Update rows in database"
      }
    ],
    "default": "insert"
  },
  {
    "displayName": "Query",
    "name": "query",
    "type": "string",
    "noDataExpression": true,
    "typeOptions": {
      "editor": "sqlEditor"
    },
    "displayOptions": {
      "show": {
        "operation": [
          "executeQuery"
        ]
      }
    },
    "default": "",
    "placeholder": "SELECT id, name FROM product WHERE id < 40",
    "required": true,
    "description": "The SQL query to execute"
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "insert"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "Name of the table in which to insert data to"
  },
  {
    "displayName": "Columns",
    "name": "columns",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "insert"
        ]
      }
    },
    "default": "",
    "placeholder": "id,name,description",
    "description": "Comma-separated list of the properties which should used as columns for the new rows"
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "Name of the table in which to update data in"
  },
  {
    "displayName": "Update Key",
    "name": "updateKey",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "update"
        ]
      }
    },
    "default": "id",
    "required": true,
    "description": "Name of the property which decides which rows in the database should be updated. Normally that would be \"id\"."
  },
  {
    "displayName": "Columns",
    "name": "columns",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "placeholder": "name,description",
    "description": "Comma-separated list of the properties which should used as columns for rows to update"
  }
]
```
