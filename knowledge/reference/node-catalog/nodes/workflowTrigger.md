# Workflow Trigger

- Node name: `workflowTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/WorkflowTrigger/WorkflowTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Triggers based on various lifecycle events, like when a workflow is activated

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| This node is deprecated and would not be updated in the future. Please use 'n8n Trigger' node instead. | `oldVersionNotice` | `notice` | no |  |  |
| Events | `events` | `multiOptions` | yes | `[]` | Specifies under which conditions an execution should happen: 					<ul> 						<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li> 						<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li> 					</ul> |

## Full Parameter Schema
```json
[
  {
    "displayName": "This node is deprecated and would not be updated in the future. Please use 'n8n Trigger' node instead.",
    "name": "oldVersionNotice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "description": "Specifies under which conditions an execution should happen:\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>\n\t\t\t\t\t\t<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>\n\t\t\t\t\t</ul>",
    "options": [
      {
        "name": "Active Workflow Updated",
        "value": "update",
        "description": "Triggers when this workflow is updated"
      },
      {
        "name": "Workflow Activated",
        "value": "activate",
        "description": "Triggers when this workflow is activated"
      }
    ]
  }
]
```
