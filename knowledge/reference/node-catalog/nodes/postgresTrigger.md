# Postgres Trigger

- Node name: `postgresTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Postgres/PostgresTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Listens to Postgres messages

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `postgres` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Listen For | `triggerMode` | `options` | no | `createTrigger` |  |
| Schema Name | `schema` | `resourceLocator` | yes | `{"mode":"list","value":"public"}` |  |
| Table Name | `tableName` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Channel Name | `channelName` | `string` | yes |  | Name of the channel to listen to |
| Event to listen for | `firesOn` | `options` | no | `INSERT` |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Listen For",
    "name": "triggerMode",
    "type": "options",
    "options": [
      {
        "name": "Table Row Change Events",
        "value": "createTrigger",
        "description": "Insert, update or delete"
      },
      {
        "name": "Advanced",
        "value": "listenTrigger",
        "description": "Listen to existing Postgres channel"
      }
    ],
    "default": "createTrigger"
  },
  {
    "displayName": "Schema Name",
    "name": "schema",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": "public"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "triggerMode": [
          "createTrigger"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a schema",
        "typeOptions": {
          "searchListMethod": "searchSchema",
          "searchFilterRequired": false
        }
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "placeholder": "e.g. public"
      }
    ]
  },
  {
    "displayName": "Table Name",
    "name": "tableName",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "triggerMode": [
          "createTrigger"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a table",
        "typeOptions": {
          "searchListMethod": "searchTables",
          "searchFilterRequired": false
        }
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "placeholder": "e.g. table_name"
      }
    ]
  },
  {
    "displayName": "Channel Name",
    "name": "channelName",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "e.g. n8n_channel",
    "description": "Name of the channel to listen to",
    "displayOptions": {
      "show": {
        "triggerMode": [
          "listenTrigger"
        ]
      }
    }
  },
  {
    "displayName": "Event to listen for",
    "name": "firesOn",
    "type": "options",
    "displayOptions": {
      "show": {
        "triggerMode": [
          "createTrigger"
        ]
      }
    },
    "options": [
      {
        "name": "Insert",
        "value": "INSERT"
      },
      {
        "name": "Update",
        "value": "UPDATE"
      },
      {
        "name": "Delete",
        "value": "DELETE"
      }
    ],
    "default": "INSERT"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "triggerMode": [
          "createTrigger"
        ]
      }
    },
    "options": [
      {
        "displayName": "Channel Name",
        "name": "channelName",
        "type": "string",
        "placeholder": "e.g. n8n_channel",
        "description": "Name of the channel to listen to",
        "default": ""
      },
      {
        "displayName": "Function Name",
        "name": "functionName",
        "type": "string",
        "description": "Name of the function to create",
        "placeholder": "e.g. n8n_trigger_function()",
        "default": ""
      },
      {
        "displayName": "Replace if Exists",
        "name": "replaceIfExists",
        "type": "boolean",
        "description": "Whether to replace an existing function and trigger with the same name",
        "default": false
      },
      {
        "displayName": "Trigger Name",
        "name": "triggerName",
        "type": "string",
        "description": "Name of the trigger to create",
        "placeholder": "e.g. n8n_trigger",
        "default": ""
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Connection Timeout",
        "name": "connectionTimeout",
        "type": "number",
        "default": 30,
        "description": "Number of seconds reserved for connecting to the database"
      },
      {
        "displayName": "Delay Closing Idle Connection",
        "name": "delayClosingIdleConnection",
        "type": "number",
        "default": 0,
        "description": "Number of seconds to wait before idle connection would be eligible for closing",
        "typeOptions": {
          "minValue": 0
        }
      }
    ]
  }
]
```
