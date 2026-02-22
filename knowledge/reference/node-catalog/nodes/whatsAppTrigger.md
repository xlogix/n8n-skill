# WhatsApp Trigger

- Node name: `whatsAppTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/WhatsApp/WhatsAppTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle WhatsApp events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `whatsAppTriggerApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Due to Facebook API limitations, you can use just one WhatsApp trigger for each Facebook App | `whatsAppNotice` | `notice` | no |  |  |
| Trigger On | `updates` | `multiOptions` | yes | `[]` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Due to Facebook API limitations, you can use just one WhatsApp trigger for each Facebook App",
    "name": "whatsAppNotice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Trigger On",
    "name": "updates",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "options": [
      {
        "name": "Account Review Update",
        "value": "account_review_update"
      },
      {
        "name": "Account Update",
        "value": "account_update"
      },
      {
        "name": "Business Capability Update",
        "value": "business_capability_update"
      },
      {
        "name": "Message Template Quality Update",
        "value": "message_template_quality_update"
      },
      {
        "name": "Message Template Status Update",
        "value": "message_template_status_update"
      },
      {
        "name": "Messages",
        "value": "messages"
      },
      {
        "name": "Phone Number Name Update",
        "value": "phone_number_name_update"
      },
      {
        "name": "Phone Number Quality Update",
        "value": "phone_number_quality_update"
      },
      {
        "name": "Security",
        "value": "security"
      },
      {
        "name": "Template Category Update",
        "value": "template_category_update"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Receive Message Status Updates",
        "name": "messageStatusUpdates",
        "type": "multiOptions",
        "default": [
          "all"
        ],
        "description": "WhatsApp sends notifications to the Trigger when the status of a message changes (for example from Sent to Delivered and from Delivered to Read). To avoid multiple executions for one WhatsApp message, you can set the Trigger to execute only on selected message status updates.",
        "options": [
          {
            "name": "All",
            "value": "all"
          },
          {
            "name": "Deleted",
            "value": "deleted"
          },
          {
            "name": "Delivered",
            "value": "delivered"
          },
          {
            "name": "Failed",
            "value": "failed"
          },
          {
            "name": "Read",
            "value": "read"
          },
          {
            "name": "Sent",
            "value": "sent"
          }
        ]
      }
    ]
  }
]
```
