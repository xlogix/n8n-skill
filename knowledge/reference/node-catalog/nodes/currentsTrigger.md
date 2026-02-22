# Currents Trigger

- Node name: `currentsTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Currents/CurrentsTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Currents events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `currentsApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Currents sends separate webhook events for each group in a run. If your run has multiple groups, you will receive separate events for each group. | `noticeGroups` | `notice` | no |  |  |
| Events | `events` | `multiOptions` | yes | `[]` | The events to listen to |

## Full Parameter Schema
```json
[
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "description": "The Currents project",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ]
  },
  {
    "displayName": "Currents sends separate webhook events for each group in a run. If your run has multiple groups, you will receive separate events for each group.",
    "name": "noticeGroups",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Run Canceled",
        "value": "RUN_CANCELED",
        "description": "Triggered when a run is manually canceled"
      },
      {
        "name": "Run Finished",
        "value": "RUN_FINISH",
        "description": "Triggered when a run completes"
      },
      {
        "name": "Run Started",
        "value": "RUN_START",
        "description": "Triggered when a new run begins"
      },
      {
        "name": "Run Timeout",
        "value": "RUN_TIMEOUT",
        "description": "Triggered when a run exceeds the time limit"
      }
    ],
    "required": true,
    "default": [],
    "description": "The events to listen to"
  }
]
```
