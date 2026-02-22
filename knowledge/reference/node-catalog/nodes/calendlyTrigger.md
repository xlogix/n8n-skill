# Calendly Trigger

- Node name: `calendlyTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Calendly/CalendlyTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Calendly events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `calendlyApi` (required)
- `calendlyOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `apiKey` |  |
| Action required: Calendly will discontinue API Key authentication on May 31, 2025. Update node to use OAuth2 authentication now to ensure your workflows continue to work. | `deprecationNotice` | `notice` | no |  |  |
| Scope | `scope` | `options` | yes | `user` |  |
| Events | `events` | `multiOptions` | yes | `[]` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "OAuth2 (recommended)",
        "value": "oAuth2"
      },
      {
        "name": "API Key or Personal Access Token",
        "value": "apiKey"
      }
    ],
    "default": "apiKey"
  },
  {
    "displayName": "Action required: Calendly will discontinue API Key authentication on May 31, 2025. Update node to use OAuth2 authentication now to ensure your workflows continue to work.",
    "name": "deprecationNotice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "authentication": [
          "apiKey"
        ]
      }
    }
  },
  {
    "displayName": "Scope",
    "name": "scope",
    "type": "options",
    "default": "user",
    "required": true,
    "hint": "Ignored if you are using an API Key",
    "options": [
      {
        "name": "Organization",
        "value": "organization",
        "description": "Triggers the webhook for all subscribed events within the organization"
      },
      {
        "name": "User",
        "value": "user",
        "description": "Triggers the webhook for subscribed events that belong to the current user"
      }
    ]
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Event Created",
        "value": "invitee.created",
        "description": "Receive notifications when a new Calendly event is created"
      },
      {
        "name": "Event Canceled",
        "value": "invitee.canceled",
        "description": "Receive notifications when a Calendly event is canceled"
      }
    ],
    "default": [],
    "required": true
  }
]
```
