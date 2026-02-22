# Autopilot Trigger

- Node name: `autopilotTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Autopilot/AutopilotTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Autopilot events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `autopilotApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Contact Added",
        "value": "contactAdded"
      },
      {
        "name": "Contact Added To List",
        "value": "contactAddedToList"
      },
      {
        "name": "Contact Entered Segment",
        "value": "contactEnteredSegment"
      },
      {
        "name": "Contact Left Segment",
        "value": "contactLeftSegment"
      },
      {
        "name": "Contact Removed From List",
        "value": "contactRemovedFromList"
      },
      {
        "name": "Contact Unsubscribed",
        "value": "contactUnsubscribed"
      },
      {
        "name": "Contact Updated",
        "value": "contactUpdated"
      }
    ]
  }
]
```
