# Copper Trigger

- Node name: `copperTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Copper/CopperTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Copper events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `copperApi` (required)

## Resource and Operation Coverage
### Resources
- Company (`company`)
- Lead (`lead`)
- Opportunity (`opportunity`)
- Person (`person`)
- Project (`project`)
- Task (`task`)


## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes |  | The resource which will fire the event |
| Event | `event` | `options` | yes |  | The event to listen to |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Company",
        "value": "company"
      },
      {
        "name": "Lead",
        "value": "lead"
      },
      {
        "name": "Opportunity",
        "value": "opportunity"
      },
      {
        "name": "Person",
        "value": "person"
      },
      {
        "name": "Project",
        "value": "project"
      },
      {
        "name": "Task",
        "value": "task"
      }
    ],
    "description": "The resource which will fire the event"
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Delete",
        "value": "delete",
        "description": "An existing record is removed"
      },
      {
        "name": "New",
        "value": "new",
        "description": "A new record is created"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Any field in the existing entity record is changed"
      }
    ],
    "description": "The event to listen to"
  }
]
```
