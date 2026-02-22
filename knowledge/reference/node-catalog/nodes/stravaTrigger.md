# Strava Trigger

- Node name: `stravaTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Strava/StravaTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Strava events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `stravaOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Object | `object` | `options` | no | `*` |  |
| Event | `event` | `options` | no | `*` |  |
| Resolve Data | `resolveData` | `boolean` | no | `true` | By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically. |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Object",
    "name": "object",
    "type": "options",
    "options": [
      {
        "name": "[All]",
        "value": "*"
      },
      {
        "name": "Activity",
        "value": "activity"
      },
      {
        "name": "Athlete",
        "value": "athlete"
      }
    ],
    "default": "*"
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "options": [
      {
        "name": "[All]",
        "value": "*"
      },
      {
        "name": "Created",
        "value": "create"
      },
      {
        "name": "Deleted",
        "value": "delete"
      },
      {
        "name": "Updated",
        "value": "update"
      }
    ],
    "default": "*"
  },
  {
    "displayName": "Resolve Data",
    "name": "resolveData",
    "type": "boolean",
    "default": true,
    "description": "By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically."
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Delete If Exist",
        "name": "deleteIfExist",
        "type": "boolean",
        "default": false,
        "description": "Strava allows just one subscription at all times. If you want to delete the current subscription to make room for a new subscription with the current parameters, set this parameter to true. Keep in mind this is a destructive operation."
      }
    ]
  }
]
```
