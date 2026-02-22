# Interval

- Node name: `interval`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Interval/Interval.node.js`
- Node version: `1`
- Groups: `trigger`, `schedule`
- Description: Triggers the workflow in a given interval

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
| This workflow will run on the schedule you define here once you publish it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking 'execute workflow' | `notice` | `notice` | no |  |  |
| Interval | `interval` | `number` | no | `1` | Interval value |
| Unit | `unit` | `options` | no | `seconds` | Unit of the interval value |

## Full Parameter Schema
```json
[
  {
    "displayName": "This workflow will run on the schedule you define here once you publish it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking 'execute workflow'",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Interval",
    "name": "interval",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "default": 1,
    "description": "Interval value"
  },
  {
    "displayName": "Unit",
    "name": "unit",
    "type": "options",
    "options": [
      {
        "name": "Seconds",
        "value": "seconds"
      },
      {
        "name": "Minutes",
        "value": "minutes"
      },
      {
        "name": "Hours",
        "value": "hours"
      }
    ],
    "default": "seconds",
    "description": "Unit of the interval value"
  }
]
```
