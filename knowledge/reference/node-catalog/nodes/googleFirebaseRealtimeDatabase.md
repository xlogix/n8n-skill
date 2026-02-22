# Google Cloud Realtime Database

- Node name: `googleFirebaseRealtimeDatabase`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Firebase/RealtimeDatabase/GoogleFirebaseRealtimeDatabase.node.js`
- Node version: `1`
- Groups: `input`
- Description: Interact with Google Firebase - Realtime Database API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googleFirebaseRealtimeDatabaseOAuth2Api` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `create`, `delete`, `get`, `push`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Operation | `operation` | `options` | yes | `create` |  |
| Object Path | `path` | `string` | yes |  | Object path on database. Do not append .json. |
| Object Path | `path` | `string` | no |  | Object path on database. Do not append .json. |
| Columns / Attributes | `attributes` | `string` | yes |  | Attributes to save |

## Full Parameter Schema
```json
[
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Write data to a database",
        "action": "Write data to a database"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete data from a database",
        "action": "Delete data from a database"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a record from a database",
        "action": "Get a record from a database"
      },
      {
        "name": "Push",
        "value": "push",
        "description": "Append to a list of data",
        "action": "Append to a list of data"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update item on a database",
        "action": "Update item in a database"
      }
    ],
    "default": "create",
    "required": true
  },
  {
    "displayName": "Object Path",
    "name": "path",
    "type": "string",
    "default": "",
    "placeholder": "e.g. /app/users",
    "description": "Object path on database. Do not append .json.",
    "required": true,
    "displayOptions": {
      "hide": {
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Object Path",
    "name": "path",
    "type": "string",
    "default": "",
    "placeholder": "e.g. /app/users",
    "description": "Object path on database. Do not append .json.",
    "hint": "Leave blank to get a whole database object",
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Columns / Attributes",
    "name": "attributes",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "create",
          "push",
          "update"
        ]
      }
    },
    "description": "Attributes to save",
    "required": true,
    "placeholder": "age, name, city"
  }
]
```
