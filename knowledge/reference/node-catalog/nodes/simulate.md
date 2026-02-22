# Simulate

- Node name: `simulate`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Simulate/Simulate.node.js`
- Node version: `1`
- Groups: `organization`
- Description: Simulate a node

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
| Icon to Display on Canvas | `icon` | `options` | no | `n8n-nodes-base.noOp` | Select a type of node to show corresponding icon |
| Subtitle | `subtitle` | `string` | no |  |  |
| Output | `output` | `options` | no | `all` |  |
| Number of Items | `numberOfItems` | `number` | no | `1` | Number input of items to return, if greater then input length all items will be returned |
| JSON | `jsonOutput` | `json` | no | `[
  {
  "my_field_1": "value",
  "my_field_2": 1
  }
]` |  |
| Execution Duration (MS) | `executionDuration` | `number` | no | `150` | Execution duration in milliseconds |

## Full Parameter Schema
```json
[
  {
    "displayName": "Icon to Display on Canvas",
    "name": "icon",
    "type": "options",
    "description": "Select a type of node to show corresponding icon",
    "default": "n8n-nodes-base.noOp",
    "typeOptions": {
      "loadOptionsMethod": "getNodeTypes"
    }
  },
  {
    "displayName": "Subtitle",
    "name": "subtitle",
    "type": "string",
    "default": "",
    "placeholder": "e.g. 'record: read'"
  },
  {
    "displayName": "Output",
    "name": "output",
    "type": "options",
    "default": "all",
    "noDataExpression": true,
    "options": [
      {
        "name": "Returns all input items",
        "value": "all"
      },
      {
        "name": "Specify how many of input items to return",
        "value": "specify"
      },
      {
        "name": "Specify output as JSON",
        "value": "custom"
      }
    ]
  },
  {
    "displayName": "Number of Items",
    "name": "numberOfItems",
    "type": "number",
    "default": 1,
    "description": "Number input of items to return, if greater then input length all items will be returned",
    "displayOptions": {
      "show": {
        "output": [
          "specify"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1
    }
  },
  {
    "displayName": "JSON",
    "name": "jsonOutput",
    "type": "json",
    "typeOptions": {
      "rows": 5
    },
    "default": "[\n  {\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n  }\n]",
    "validateType": "array",
    "displayOptions": {
      "show": {
        "output": [
          "custom"
        ]
      }
    }
  },
  {
    "displayName": "Execution Duration (MS)",
    "name": "executionDuration",
    "type": "number",
    "default": 150,
    "description": "Execution duration in milliseconds",
    "typeOptions": {
      "minValue": 0
    }
  }
]
```
