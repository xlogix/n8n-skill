# Pushcut Trigger

- Node name: `pushcutTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Pushcut/PushcutTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Pushcut events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `pushcutApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Action Name | `actionName` | `string` | no |  | Choose any name you would like. It will show up as a server action in the app. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Action Name",
    "name": "actionName",
    "type": "string",
    "description": "Choose any name you would like. It will show up as a server action in the app.",
    "default": ""
  }
]
```
