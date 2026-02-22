# Toggl Trigger

- Node name: `togglTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Toggl/TogglTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Toggl events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `togglApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes | `newTimeEntry` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "options": [
      {
        "name": "New Time Entry",
        "value": "newTimeEntry"
      }
    ],
    "required": true,
    "default": "newTimeEntry"
  }
]
```
