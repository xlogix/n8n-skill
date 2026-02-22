# GetResponse Trigger

- Node name: `getResponseTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/GetResponse/GetResponseTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when GetResponse events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `getResponseApi` (required)
- `getResponseOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `apiKey` |  |
| Events | `events` | `multiOptions` | yes | `[]` |  |
| List Names or IDs | `listIds` | `multiOptions` | no | `[]` | Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Options | `options` | `collection` | no | `{}` |  |

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
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "options": [
      {
        "name": "Customer Subscribed",
        "value": "subscribe",
        "description": "Receive notifications when a customer is subscribed to a list"
      },
      {
        "name": "Customer Unsubscribed",
        "value": "unsubscribe",
        "description": "Receive notifications when a customer is unsubscribed from a list"
      },
      {
        "name": "Email Clicked",
        "value": "click",
        "description": "Receive notifications when a email is clicked"
      },
      {
        "name": "Email Opened",
        "value": "open",
        "description": "Receive notifications when a email is opened"
      },
      {
        "name": "Survey Submitted",
        "value": "survey",
        "description": "Receive notifications when a survey is submitted"
      }
    ],
    "default": [],
    "required": true
  },
  {
    "displayName": "List Names or IDs",
    "name": "listIds",
    "type": "multiOptions",
    "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getLists"
    },
    "default": []
  },
  {
    "displayName": "Options",
    "name": "options",
    "placeholder": "Add option",
    "type": "collection",
    "default": {},
    "options": [
      {
        "displayName": "Delete Current Subscription",
        "name": "delete",
        "type": "boolean",
        "default": false,
        "description": "Whether to delete the current subscription"
      }
    ]
  }
]
```
