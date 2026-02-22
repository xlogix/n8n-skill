# Taiga Trigger

- Node name: `taigaTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Taiga/TaigaTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Taiga events via webhook

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `taigaApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Project Name or ID | `projectId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Resources | `resources` | `multiOptions` | yes | `["all"]` | Resources to listen to |
| Operations | `operations` | `multiOptions` | yes | `["all"]` | Operations to listen to |

## Full Parameter Schema
```json
[
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getUserProjects"
    },
    "default": "",
    "required": true
  },
  {
    "displayName": "Resources",
    "name": "resources",
    "type": "multiOptions",
    "required": true,
    "default": [
      "all"
    ],
    "options": [
      {
        "name": "All",
        "value": "all"
      },
      {
        "name": "Issue",
        "value": "issue"
      },
      {
        "name": "Milestone (Sprint)",
        "value": "milestone"
      },
      {
        "name": "Task",
        "value": "task"
      },
      {
        "name": "User Story",
        "value": "userstory"
      },
      {
        "name": "Wikipage",
        "value": "wikipage"
      }
    ],
    "description": "Resources to listen to"
  },
  {
    "displayName": "Operations",
    "name": "operations",
    "type": "multiOptions",
    "required": true,
    "default": [
      "all"
    ],
    "description": "Operations to listen to",
    "options": [
      {
        "name": "All",
        "value": "all"
      },
      {
        "name": "Create",
        "value": "create"
      },
      {
        "name": "Delete",
        "value": "delete"
      },
      {
        "name": "Update",
        "value": "change"
      }
    ]
  }
]
```
