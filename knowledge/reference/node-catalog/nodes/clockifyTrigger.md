# Clockify Trigger

- Node name: `clockifyTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Clockify/ClockifyTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Listens to Clockify events

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `clockifyApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Workspace Name or ID | `workspaceId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Trigger | `watchField` | `options` | yes | `0` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Workspace Name or ID",
    "name": "workspaceId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "listWorkspaces"
    },
    "required": true,
    "default": ""
  },
  {
    "displayName": "Trigger",
    "name": "watchField",
    "type": "options",
    "options": [
      {
        "name": "New Time Entry",
        "value": 0
      }
    ],
    "required": true,
    "default": 0
  }
]
```
