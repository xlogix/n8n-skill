# Formstack Trigger

- Node name: `formstackTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Formstack/FormstackTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow on a Formstack form submission.

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `formstackApi` (required)
- `formstackOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Form Name or ID | `formId` | `options` | yes |  | The Formstack form to monitor for new submissions. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |

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
    "default": "",
    "required": true,
    "description": "The Formstack form to monitor for new submissions. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  }
]
```
