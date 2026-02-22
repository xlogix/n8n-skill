# SeaTable Trigger

- Node name: `seaTableTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/SeaTable/SeaTableTrigger.node.js`
- Node version: `2`
- Groups: `trigger`
- Description: Starts the workflow when SeaTable events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `seaTableApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | no | `newRow` |  |
| Table Name | `tableName` | `options` | yes |  | The name of SeaTable table to access. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. |
| View Name | `viewName` | `options` | no |  | The name of SeaTable view to access. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. |
| Signature Column | `assetColumn` | `options` | yes |  | Select the digital-signature column that should be tracked. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. |
| Options | `options` | `collection` | no | `{}` |  |
| "Fetch Test Event" returns max. three items of the last hour. | `notice` | `notice` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "options": [
      {
        "name": "New Row",
        "value": "newRow",
        "description": "Trigger on newly created rows"
      },
      {
        "name": "New or Updated Row",
        "value": "updatedRow",
        "description": "Trigger has recently created or modified rows"
      },
      {
        "name": "New Signature",
        "value": "newAsset",
        "description": "Trigger on new signatures"
      }
    ],
    "default": "newRow"
  },
  {
    "displayName": "Table Name",
    "name": "tableName",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getTableNames"
    },
    "default": "",
    "description": "The name of SeaTable table to access. Choose from the list, or specify the name using an <a href=\"https://docs.n8n.io/code-examples/expressions/\">expression</a>."
  },
  {
    "displayName": "View Name",
    "name": "viewName",
    "type": "options",
    "displayOptions": {
      "show": {
        "event": [
          "newRow",
          "updatedRow"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsDependsOn": [
        "tableName"
      ],
      "loadOptionsMethod": "getTableViews"
    },
    "default": "",
    "description": "The name of SeaTable view to access. Choose from the list, or specify the name using an <a href=\"https://docs.n8n.io/code-examples/expressions/\">expression</a>."
  },
  {
    "displayName": "Signature Column",
    "name": "assetColumn",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "event": [
          "newAsset"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsDependsOn": [
        "tableName"
      ],
      "loadOptionsMethod": "getSignatureColumns"
    },
    "default": "",
    "description": "Select the digital-signature column that should be tracked. Choose from the list, or specify the name using an <a href=\"https://docs.n8n.io/code-examples/expressions/\">expression</a>."
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "options": [
      {
        "displayName": "Simplify",
        "name": "simple",
        "type": "boolean",
        "default": true,
        "description": "Whether to return a simplified version of the response instead of the raw data"
      },
      {
        "displayName": "Return Column Names",
        "name": "convert",
        "type": "boolean",
        "default": true,
        "description": "Whether to return the column keys (false) or the column names (true)",
        "displayOptions": {
          "show": {
            "/event": [
              "newRow",
              "updatedRow"
            ]
          }
        }
      }
    ]
  },
  {
    "displayName": "\"Fetch Test Event\" returns max. three items of the last hour.",
    "name": "notice",
    "type": "notice",
    "default": ""
  }
]
```
