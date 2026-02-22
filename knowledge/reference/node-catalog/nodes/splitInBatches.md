# Loop Over Items (Split in Batches)

- Node name: `splitInBatches`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/SplitInBatches/SplitInBatches.node.js`
- Node version: `3`
- Groups: `organization`
- Description: Split data into batches and iterate over each batch

## Inputs
- `main`

## Outputs
- `main`
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| You may not need this node — n8n nodes automatically run once for each input item. <a href="https://docs.n8n.io/getting-started/key-concepts/looping.html#using-loops-in-n8n" target="_blank">More info</a> | `splitInBatchesNotice` | `notice` | no |  |  |
| Batch Size | `batchSize` | `number` | no | `1` | The number of items to return with each call |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "You may not need this node — n8n nodes automatically run once for each input item. <a href=\"https://docs.n8n.io/getting-started/key-concepts/looping.html#using-loops-in-n8n\" target=\"_blank\">More info</a>",
    "name": "splitInBatchesNotice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Batch Size",
    "name": "batchSize",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "default": 1,
    "description": "The number of items to return with each call"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Reset",
        "name": "reset",
        "type": "boolean",
        "default": false,
        "description": "Whether the node starts again from the beginning of the input items. This will treat incoming data as a new set rather than continuing with the previous items."
      }
    ]
  }
]
```
