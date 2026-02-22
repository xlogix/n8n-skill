# Read PDF

- Node name: `readPDF`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ReadPdf/ReadPDF.node.js`
- Node version: `1`
- Groups: `input`
- Description: Reads a PDF and extracts its content

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
| Input Binary Field | `binaryPropertyName` | `string` | yes | `data` | Name of the binary property from which to read the PDF file |
| Encrypted | `encrypted` | `boolean` | yes | `false` |  |
| Password | `password` | `string` | no |  | Password to decrypt the PDF file with |

## Full Parameter Schema
```json
[
  {
    "displayName": "Input Binary Field",
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "description": "Name of the binary property from which to read the PDF file"
  },
  {
    "displayName": "Encrypted",
    "name": "encrypted",
    "type": "boolean",
    "default": false,
    "required": true
  },
  {
    "displayName": "Password",
    "name": "password",
    "type": "string",
    "typeOptions": {
      "password": true
    },
    "default": "",
    "description": "Password to decrypt the PDF file with",
    "displayOptions": {
      "show": {
        "encrypted": [
          true
        ]
      }
    }
  }
]
```
