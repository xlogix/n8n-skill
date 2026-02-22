# LoneScale Trigger

- Node name: `loneScaleTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/LoneScale/LoneScaleTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Trigger LoneScale Workflow

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `loneScaleApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Workflow Name | `workflow` | `options` | yes |  | Select one workflow. Choose from the list |

## Full Parameter Schema
```json
[
  {
    "displayName": "Workflow Name",
    "name": "workflow",
    "type": "options",
    "noDataExpression": true,
    "typeOptions": {
      "loadOptionsMethod": "getWorkflows"
    },
    "default": "",
    "description": "Select one workflow. Choose from the list",
    "required": true
  }
]
```
