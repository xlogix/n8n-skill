# Cal.com Trigger

- Node name: `calTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Cal/CalTrigger.node.js`
- Node version: `[1,2]`
- Groups: `trigger`
- Description: Handle Cal.com events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `calApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Events | `events` | `multiOptions` | yes | `[]` |  |
| API Version | `version` | `options` | no | `1` |  |
| API Version | `version` | `options` | no | `2` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Booking Cancelled",
        "value": "BOOKING_CANCELLED",
        "description": "Receive notifications when a Cal event is canceled"
      },
      {
        "name": "Booking Created",
        "value": "BOOKING_CREATED",
        "description": "Receive notifications when a new Cal event is created"
      },
      {
        "name": "Booking Rescheduled",
        "value": "BOOKING_RESCHEDULED",
        "description": "Receive notifications when a Cal event is rescheduled"
      },
      {
        "name": "Meeting Ended",
        "value": "MEETING_ENDED",
        "description": "Receive notifications when a Cal event or meeting has ended"
      }
    ],
    "default": [],
    "required": true
  },
  {
    "displayName": "API Version",
    "name": "version",
    "type": "options",
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    },
    "isNodeSetting": true,
    "options": [
      {
        "name": "Before v2.0",
        "value": 1
      },
      {
        "name": "v2.0 Onwards",
        "value": 2
      }
    ],
    "default": 1
  },
  {
    "displayName": "API Version",
    "name": "version",
    "type": "options",
    "displayOptions": {
      "show": {
        "@version": [
          2
        ]
      }
    },
    "isNodeSetting": true,
    "options": [
      {
        "name": "Before v2.0",
        "value": 1
      },
      {
        "name": "v2.0 Onwards",
        "value": 2
      }
    ],
    "default": 2
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "App ID",
        "name": "appId",
        "type": "string",
        "description": "The ID of the App to monitor",
        "default": ""
      },
      {
        "displayName": "EventType Name or ID",
        "name": "eventTypeId",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getEventTypes"
        },
        "description": "The EventType to monitor. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
        "default": ""
      },
      {
        "displayName": "Payload Template",
        "name": "payloadTemplate",
        "type": "string",
        "description": "Template to customize the webhook payload",
        "default": "",
        "typeOptions": {
          "rows": 4
        }
      }
    ]
  }
]
```
