# Write Binary File

- Node name: `writeBinaryFile`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/WriteBinaryFile/WriteBinaryFile.node.js`
- Node version: `1`
- Groups: `output`
- Description: Writes a binary file to disk

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
| File Name | `fileName` | `string` | yes |  | Path to which the file should be written |
| Property Name | `dataPropertyName` | `string` | yes | `data` | Name of the binary property which contains the data for the file to be written |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "File Name",
    "name": "fileName",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "/data/example.jpg",
    "description": "Path to which the file should be written"
  },
  {
    "displayName": "Property Name",
    "name": "dataPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "description": "Name of the binary property which contains the data for the file to be written"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Append",
        "name": "append",
        "type": "boolean",
        "default": false,
        "description": "Whether to append to an existing file"
      }
    ]
  }
]
```
