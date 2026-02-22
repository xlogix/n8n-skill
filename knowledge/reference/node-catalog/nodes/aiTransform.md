# AI Transform

- Node name: `aiTransform`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/AiTransform/AiTransform.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Modify data based on instructions written in plain english

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
| Instructions | `instructions` | `button` | no |  | Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street). |
| Code Generated For Prompt | `codeGeneratedForPrompt` | `hidden` | no |  |  |
| Generated JavaScript | `jsCode` | `string` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Instructions",
    "name": "instructions",
    "type": "button",
    "default": "",
    "description": "Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).",
    "placeholder": "Example: Merge 'firstname' and 'lastname' into a field 'details.name' and sort by 'email'",
    "typeOptions": {
      "buttonConfig": {
        "label": "Generate code",
        "hasInputField": true,
        "inputFieldMaxLength": 500,
        "action": {
          "type": "askAiCodeGeneration",
          "target": "jsCode"
        }
      }
    }
  },
  {
    "displayName": "Code Generated For Prompt",
    "name": "codeGeneratedForPrompt",
    "type": "hidden",
    "default": ""
  },
  {
    "displayName": "Generated JavaScript",
    "name": "jsCode",
    "type": "string",
    "typeOptions": {
      "editor": "jsEditor",
      "editorIsReadOnly": true
    },
    "default": "",
    "hint": "Read-only. To edit this code, adjust the instructions or copy and paste it into a Code node.",
    "noDataExpression": true
  }
]
```
