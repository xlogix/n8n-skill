# Stop and Error

- Node name: `stopAndError`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/StopAndError/StopAndError.node.js`
- Node version: `1`
- Groups: `input`
- Description: Throw an error in the workflow

## Inputs
- `main`

## Outputs
- None declared

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Error Type | `errorType` | `options` | no | `errorMessage` | Type of error to throw |
| Error Message | `errorMessage` | `string` | yes |  |  |
| Error Object | `errorObject` | `json` | yes |  | Object containing error properties |

## Full Parameter Schema
```json
[
  {
    "displayName": "Error Type",
    "name": "errorType",
    "type": "options",
    "options": [
      {
        "name": "Error Message",
        "value": "errorMessage"
      },
      {
        "name": "Error Object",
        "value": "errorObject"
      }
    ],
    "default": "errorMessage",
    "description": "Type of error to throw"
  },
  {
    "displayName": "Error Message",
    "name": "errorMessage",
    "type": "string",
    "placeholder": "An error occurred!",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "errorType": [
          "errorMessage"
        ]
      }
    }
  },
  {
    "displayName": "Error Object",
    "name": "errorObject",
    "type": "json",
    "description": "Object containing error properties",
    "default": "",
    "typeOptions": {
      "alwaysOpenEditWindow": true
    },
    "placeholder": "{\n\t\"code\": \"404\",\n\t\"description\": \"The resource could not be fetched\"\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "errorType": [
          "errorObject"
        ]
      }
    }
  }
]
```
