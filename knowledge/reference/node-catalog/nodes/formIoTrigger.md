# Form.io Trigger

- Node name: `formIoTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/FormIo/FormIoTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle form.io events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `formIoApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Project Name or ID | `projectId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Form Name or ID | `formId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Trigger Events | `events` | `multiOptions` | yes | `[]` |  |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |

## Full Parameter Schema
```json
[
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "required": true,
    "default": "",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>"
  },
  {
    "displayName": "Form Name or ID",
    "name": "formId",
    "type": "options",
    "typeOptions": {
      "loadOptionsDependsOn": [
        "projectId"
      ],
      "loadOptionsMethod": "getForms"
    },
    "required": true,
    "default": "",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>"
  },
  {
    "displayName": "Trigger Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Submission Created",
        "value": "create"
      },
      {
        "name": "Submission Updated",
        "value": "update"
      }
    ],
    "required": true,
    "default": []
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
