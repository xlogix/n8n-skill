# Typeform Trigger

- Node name: `typeformTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Typeform/TypeformTrigger.node.js`
- Node version: `[1,1.1]`
- Groups: `trigger`
- Description: Starts the workflow on a Typeform form submission

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `typeformApi` (required)
- `typeformOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Form Name or ID | `formId` | `options` | yes |  | Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Simplify Answers | `simplifyAnswers` | `boolean` | no | `true` | Whether to convert the answers to a key:value pair ("FIELD_TITLE":"USER_ANSER") to be easily processable |
| Only Answers | `onlyAnswers` | `boolean` | no | `true` | Whether to return only the answers of the form and not any of the other data |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Access Token",
        "value": "accessToken"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "accessToken"
  },
  {
    "displayName": "Form Name or ID",
    "name": "formId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getForms"
    },
    "options": [],
    "default": "",
    "required": true,
    "description": "Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Simplify Answers",
    "name": "simplifyAnswers",
    "type": "boolean",
    "default": true,
    "description": "Whether to convert the answers to a key:value pair (\"FIELD_TITLE\":\"USER_ANSER\") to be easily processable"
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
