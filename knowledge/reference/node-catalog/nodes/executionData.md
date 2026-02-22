# Execution Data

- Node name: `executionData`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ExecutionData/ExecutionData.node.js`
- Node version: `[1,1.1]`
- Groups: `input`
- Description: Add execution data for search

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
### Operations
- default/all resources: `save`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Save important data using this node. It will be displayed on each execution for easy reference and you can filter by it.<br />Filtering is available on Pro and Enterprise plans. <a href='https://n8n.io/pricing/' target='_blank'>More Info</a> | `notice` | `notice` | no |  |  |
| Operation | `operation` | `options` | no | `save` |  |
| Data to Save | `dataToSave` | `fixedCollection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Save important data using this node. It will be displayed on each execution for easy reference and you can filter by it.<br />Filtering is available on Pro and Enterprise plans. <a href='https://n8n.io/pricing/' target='_blank'>More Info</a>",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "default": "save",
    "noDataExpression": true,
    "options": [
      {
        "name": "Save Highlight Data (for Search/review)",
        "value": "save",
        "action": "Save Highlight Data (for search/review)"
      }
    ]
  },
  {
    "displayName": "Data to Save",
    "name": "dataToSave",
    "placeholder": "Add Saved Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValueButtonText": "Add Saved Field",
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "save"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Values",
        "name": "values",
        "values": [
          {
            "displayName": "Key",
            "name": "key",
            "type": "string",
            "default": "",
            "placeholder": "e.g. myKey",
            "requiresDataPath": "single"
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "placeholder": "e.g. myValue"
          }
        ]
      }
    ]
  }
]
```
