# Wufoo Trigger

- Node name: `wufooTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Wufoo/WufooTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Wufoo events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `wufooApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Forms Name or ID | `form` | `options` | yes |  | The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Only Answers | `onlyAnswers` | `boolean` | no | `true` | Whether to return only the answers of the form and not any of the other data |

## Full Parameter Schema
```json
[
  {
    "displayName": "Forms Name or ID",
    "name": "form",
    "type": "options",
    "required": true,
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getForms"
    },
    "description": "The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Only Answers",
    "name": "onlyAnswers",
    "type": "boolean",
    "default": true,
    "description": "Whether to return only the answers of the form and not any of the other data"
  }
]
```
