# n8n Trigger

- Node name: `n8nTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/N8nTrigger/N8nTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle events and perform actions on your n8n instance

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
| Events | `events` | `multiOptions` | yes | `[]` | Specifies under which conditions an execution should happen: 				<ul> 					<li><b>Published Workflow Updated</b>: Triggers when workflow version is published from a published state (workflow was already published)</li> 					<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li> 					<li><b>Workflow Published</b>: Triggers when workflow version is published from an unpublished state (workflow was unpublished)</li> 				</ul> |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "description": "Specifies under which conditions an execution should happen:\n\t\t\t\t<ul>\n\t\t\t\t\t<li><b>Published Workflow Updated</b>: Triggers when workflow version is published from a published state (workflow was already published)</li>\n\t\t\t\t\t<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li>\n\t\t\t\t\t<li><b>Workflow Published</b>: Triggers when workflow version is published from an unpublished state (workflow was unpublished)</li>\n\t\t\t\t</ul>",
    "options": [
      {
        "name": "Published Workflow Updated",
        "value": "update",
        "description": "Triggers when workflow version is published from a published state (workflow was already published)"
      },
      {
        "name": "Instance Started",
        "value": "init",
        "description": "Triggers when this n8n instance is started or re-started"
      },
      {
        "name": "Workflow Published",
        "value": "activate",
        "description": "Triggers when workflow version is published from an unpublished state (workflow was not published)"
      }
    ]
  }
]
```
