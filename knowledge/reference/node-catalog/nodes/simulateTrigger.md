# Simulate Trigger

- Node name: `simulateTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Simulate/SimulateTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Simulate a trigger node

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Icon to Display on Canvas | `icon` | `options` | no | `n8n-nodes-base.manualTrigger` | Select a type of node to show corresponding icon |
| Subtitle | `subtitle` | `string` | no |  |  |
| Output (JSON) | `jsonOutput` | `json` | no | `[
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
    "default": "n8n-nodes-base.manualTrigger",
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
    "displayName": "Output (JSON)",
    "name": "jsonOutput",
    "type": "json",
    "typeOptions": {
      "rows": 5
    },
    "default": "[\n  {\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n  }\n]",
    "validateType": "array"
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
