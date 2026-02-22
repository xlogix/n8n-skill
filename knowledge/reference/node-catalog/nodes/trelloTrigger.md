# Trello Trigger

- Node name: `trelloTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Trello/TrelloTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Trello events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `trelloApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Model ID | `id` | `string` | yes |  | ID of the model of which to subscribe to events |

## Full Parameter Schema
```json
[
  {
    "displayName": "Model ID",
    "name": "id",
    "type": "string",
    "default": "",
    "placeholder": "4d5ea62fd76aa1136000000c",
    "required": true,
    "description": "ID of the model of which to subscribe to events"
  }
]
```
