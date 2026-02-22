# Flow Trigger

- Node name: `flowTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Flow/FlowTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Flow events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `flowApi` (required)

## Resource and Operation Coverage
### Resources
- Project (`list`)
- Task (`task`)


## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no |  | Resource that triggers the webhook |
| Project ID | `listIds` | `string` | yes |  | Lists IDs, perhaps known better as "Projects" separated by a comma (,) |
| Task ID | `taskIds` | `string` | yes |  | Task IDs separated by a comma (,) |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "default": "",
    "options": [
      {
        "name": "Project",
        "value": "list"
      },
      {
        "name": "Task",
        "value": "task"
      }
    ],
    "description": "Resource that triggers the webhook"
  },
  {
    "displayName": "Project ID",
    "name": "listIds",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "list"
        ]
      },
      "hide": {
        "resource": [
          "task"
        ]
      }
    },
    "description": "Lists IDs, perhaps known better as \"Projects\" separated by a comma (,)"
  },
  {
    "displayName": "Task ID",
    "name": "taskIds",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "task"
        ]
      },
      "hide": {
        "resource": [
          "list"
        ]
      }
    },
    "description": "Task IDs separated by a comma (,)"
  }
]
```
