# Venafi TLS Protect Cloud Trigger

- Node name: `venafiTlsProtectCloudTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Venafi/ProtectCloud/VenafiTlsProtectCloudTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Venafi events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `venafiTlsProtectCloudApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes | `[]` | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Trigger On | `triggerOn` | `multiOptions` | yes | `[]` | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "typeOptions": {
      "loadOptionsMethod": "getActivityTypes"
    },
    "required": true,
    "default": [],
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Trigger On",
    "name": "triggerOn",
    "type": "multiOptions",
    "typeOptions": {
      "loadOptionsMethod": "getActivitySubTypes",
      "loadOptionsDependsOn": [
        "resource"
      ]
    },
    "required": true,
    "default": [],
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  }
]
```
