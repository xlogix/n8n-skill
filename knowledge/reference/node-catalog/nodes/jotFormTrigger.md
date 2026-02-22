# Jotform Trigger

- Node name: `jotFormTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/JotForm/JotFormTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Jotform events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `jotFormApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Form Name or ID | `form` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Resolve Data | `resolveData` | `boolean` | no | `true` | By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names. |
| Only Answers | `onlyAnswers` | `boolean` | no | `true` | Whether to return only the answers of the form and not any of the other data |

## Full Parameter Schema
```json
[
  {
    "displayName": "Form Name or ID",
    "name": "form",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getForms"
    },
    "default": "",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>"
  },
  {
    "displayName": "Resolve Data",
    "name": "resolveData",
    "type": "boolean",
    "default": true,
    "description": "By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names."
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
