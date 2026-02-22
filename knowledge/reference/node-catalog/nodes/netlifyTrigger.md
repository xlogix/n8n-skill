# Netlify Trigger

- Node name: `netlifyTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Netlify/NetlifyTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle netlify events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `netlifyApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Site Name or ID | `siteId` | `options` | yes |  | Select the Site ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Event | `event` | `options` | yes |  |  |
| Form Name or ID | `formId` | `options` | yes |  | Select a form. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |

## Full Parameter Schema
```json
[
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "required": true,
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "description": "Select the Site ID. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Deploy Building",
        "value": "deployBuilding"
      },
      {
        "name": "Deploy Failed",
        "value": "deployFailed"
      },
      {
        "name": "Deploy Created",
        "value": "deployCreated"
      },
      {
        "name": "Form Submitted",
        "value": "submissionCreated"
      }
    ]
  },
  {
    "displayName": "Form Name or ID",
    "name": "formId",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "event": [
          "submissionCreated"
        ]
      }
    },
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getForms"
    },
    "description": "Select a form. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "event": [
          "submissionCreated"
        ]
      }
    },
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  }
]
```
