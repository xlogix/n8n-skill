# Workable Trigger

- Node name: `workableTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Workable/WorkableTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Workable events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `workableApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Trigger On | `triggerOn` | `options` | yes |  |  |
| Filters | `filters` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Trigger On",
    "name": "triggerOn",
    "type": "options",
    "options": [
      {
        "name": "Candidate Created",
        "value": "candidateCreated"
      },
      {
        "name": "Candidate Moved",
        "value": "candidateMoved"
      }
    ],
    "default": "",
    "required": true
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Job Name or ID",
        "name": "job",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getJobs"
        },
        "default": "",
        "description": "Get notifications only for one job. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Stage Name or ID",
        "name": "stage",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getStages"
        },
        "default": "",
        "description": "Get notifications for specific stages. e.g. 'hired'. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      }
    ]
  }
]
```
