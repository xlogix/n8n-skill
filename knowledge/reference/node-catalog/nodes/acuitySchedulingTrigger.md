# Acuity Scheduling Trigger

- Node name: `acuitySchedulingTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/AcuityScheduling/AcuitySchedulingTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Acuity Scheduling events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `acuitySchedulingApi` (required)
- `acuitySchedulingOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `apiKey` |  |
| Event | `event` | `options` | yes |  |  |
| Resolve Data | `resolveData` | `boolean` | no | `true` | By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "API Key",
        "value": "apiKey"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "apiKey"
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "appointment.canceled",
        "value": "appointment.canceled",
        "description": "Is called whenever an appointment is canceled"
      },
      {
        "name": "appointment.changed",
        "value": "appointment.changed",
        "description": "Is called when the appointment is changed in any way"
      },
      {
        "name": "appointment.rescheduled",
        "value": "appointment.rescheduled",
        "description": "Is called when the appointment is rescheduled to a new time"
      },
      {
        "name": "appointment.scheduled",
        "value": "appointment.scheduled",
        "description": "Is called once when an appointment is initially booked"
      },
      {
        "name": "order.completed",
        "value": "order.completed",
        "description": "Is called when an order is completed"
      }
    ]
  },
  {
    "displayName": "Resolve Data",
    "name": "resolveData",
    "type": "boolean",
    "default": true,
    "description": "By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically."
  }
]
```
