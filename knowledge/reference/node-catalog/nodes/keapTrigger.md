# Keap Trigger

- Node name: `keapTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Keap/KeapTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Infusionsoft events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `keapOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event Name or ID | `eventId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| RAW Data | `rawData` | `boolean` | no | `false` | Whether to return the data exactly in the way it got received from the API |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event Name or ID",
    "name": "eventId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getEvents"
    },
    "default": "",
    "required": true
  },
  {
    "displayName": "RAW Data",
    "name": "rawData",
    "type": "boolean",
    "default": false,
    "description": "Whether to return the data exactly in the way it got received from the API"
  }
]
```
