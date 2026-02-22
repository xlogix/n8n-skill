# Read Binary File

- Node name: `readBinaryFile`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ReadBinaryFile/ReadBinaryFile.node.js`
- Node version: `1`
- Groups: `input`
- Description: Reads a binary file from disk

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
| File Path | `filePath` | `string` | yes |  | Path of the file to read |
| Property Name | `dataPropertyName` | `string` | yes | `data` | Name of the binary property to which to write the data of the read file |

## Full Parameter Schema
```json
[
  {
    "displayName": "File Path",
    "name": "filePath",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "/data/example.jpg",
    "description": "Path of the file to read"
  },
  {
    "displayName": "Property Name",
    "name": "dataPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "description": "Name of the binary property to which to write the data of the read file"
  }
]
```
