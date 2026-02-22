# MailerLite Trigger

- Node name: `mailerLiteTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/MailerLite/MailerLiteTrigger.node.js`
- Node version: `[2]`
- Groups: `trigger`
- Description: Starts the workflow when MailerLite events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `mailerLiteApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Events | `events` | `multiOptions` | yes | `[]` | The events to listen to |

## Full Parameter Schema
```json
[
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Campaign Sent",
        "value": "campaign.sent",
        "description": "Fired when campaign is sent"
      },
      {
        "name": "Subscriber Added to Group",
        "value": "subscriber.added_to_group",
        "description": "Fired when a subscriber is added to a group"
      },
      {
        "name": "Subscriber Automation Completed",
        "value": "subscriber.automation_completed",
        "description": "Fired when subscriber finishes automation"
      },
      {
        "name": "Subscriber Automation Triggered",
        "value": "subscriber.automation_triggered",
        "description": "Fired when subscriber starts automation"
      },
      {
        "name": "Subscriber Bounced",
        "value": "subscriber.bounced",
        "description": "Fired when an email address bounces"
      },
      {
        "name": "Subscriber Created",
        "value": "subscriber.created",
        "description": "Fired when a new subscriber is added to an account"
      },
      {
        "name": "Subscriber Removed From Group",
        "value": "subscriber.removed_from_group",
        "description": "Fired when a subscriber is removed from a group"
      },
      {
        "name": "Subscriber Spam Reported",
        "value": "subscriber.spam_reported",
        "description": "Fired when subscriber marks a campaign as a spam"
      },
      {
        "name": "Subscriber Unsubscribe",
        "value": "subscriber.unsubscribed",
        "description": "Fired when a subscriber becomes unsubscribed"
      },
      {
        "name": "Subscriber Updated",
        "value": "subscriber.updated",
        "description": "Fired when any of the subscriber's custom fields are updated"
      }
    ],
    "required": true,
    "default": [],
    "description": "The events to listen to"
  }
]
```
