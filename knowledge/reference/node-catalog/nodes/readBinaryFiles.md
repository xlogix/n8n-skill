# Read Binary Files

- Node name: `readBinaryFiles`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ReadBinaryFiles/ReadBinaryFiles.node.js`
- Node version: `1`
- Groups: `input`
- Description: Reads binary files from disk

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
| File Selector | `fileSelector` | `string` | yes |  | Pattern for files to read |
| Property Name | `dataPropertyName` | `string` | yes | `data` | Name of the binary property to which to write the data of the read files |

## Full Parameter Schema
```json
[
  {
    "displayName": "File Selector",
    "name": "fileSelector",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "*.jpg",
    "description": "Pattern for files to read"
  },
  {
    "displayName": "Property Name",
    "name": "dataPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "description": "Name of the binary property to which to write the data of the read files"
  }
]
```
