# Track Time Saved

- Node name: `timeSaved`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/TimeSaved/TimeSaved.node.js`
- Node version: `1`
- Groups: `organization`
- Description: Dynamically track time saved based on the workflow’s execution path and the number of items processed

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| For each run, time saved is the sum of all Time Saved nodes that execute. Use this when different execution paths or items save different amounts of time. | `notice` | `notice` | no |  |  |
| Calculation Mode | `mode` | `options` | no | `once` |  |
| Minutes Saved | `minutesSaved` | `number` | no | `0` | Number of minutes saved by this workflow execution |

## Full Parameter Schema
```json
[
  {
    "displayName": "For each run, time saved is the sum of all Time Saved nodes that execute. Use this when different execution paths or items save different amounts of time.",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Calculation Mode",
    "name": "mode",
    "type": "options",
    "default": "once",
    "noDataExpression": true,
    "options": [
      {
        "name": "Once For All Items",
        "value": "once",
        "description": "Counts minutes saved once for all input items"
      },
      {
        "name": "Per Item",
        "value": "perItem",
        "description": "Multiply minutes saved by the number of input items"
      }
    ]
  },
  {
    "displayName": "Minutes Saved",
    "name": "minutesSaved",
    "type": "number",
    "default": 0,
    "noDataExpression": true,
    "typeOptions": {
      "minValue": 0
    },
    "description": "Number of minutes saved by this workflow execution"
  }
]
```
