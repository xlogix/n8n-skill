# Gmail Trigger

- Node name: `gmailTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Gmail/GmailTrigger.node.js`
- Node version: `[1,1.1,1.2,1.3]`
- Groups: `trigger`
- Description: Fetches emails from Gmail and starts the workflow on specified polling intervals.

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `googleApi` (required)
- `gmailOAuth2` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `oAuth2` |  |
| Event | `event` | `options` | no | `messageReceived` |  |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |
| Filters | `filters` | `collection` | no | `{}` |  |
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
        "name": "OAuth2 (recommended)",
        "value": "oAuth2"
      },
      {
        "name": "Service Account",
        "value": "serviceAccount"
      }
    ],
    "default": "oAuth2"
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "default": "messageReceived",
    "options": [
      {
        "name": "Message Received",
        "value": "messageReceived"
      }
    ]
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Include Spam and Trash",
        "name": "includeSpamTrash",
        "type": "boolean",
        "default": false,
        "description": "Whether to include messages from SPAM and TRASH in the results"
      },
      {
        "displayName": "Include Drafts",
        "name": "includeDrafts",
        "type": "boolean",
        "default": false,
        "description": "Whether to include email drafts in the results"
      },
      {
        "displayName": "Label Names or IDs",
        "name": "labelIds",
        "type": "multiOptions",
        "typeOptions": {
          "loadOptionsMethod": "getLabels"
        },
        "default": [],
        "description": "Only return messages with labels that match all of the specified label IDs. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Search",
        "name": "q",
        "type": "string",
        "default": "",
        "placeholder": "has:attachment",
        "hint": "Use the same format as in the Gmail search box. <a href=\"https://support.google.com/mail/answer/7190?hl=en\">More info</a>.",
        "description": "Only return messages matching the specified query"
      },
      {
        "displayName": "Read Status",
        "name": "readStatus",
        "type": "options",
        "default": "unread",
        "hint": "Filter emails by whether they have been read or not",
        "options": [
          {
            "name": "Unread and read emails",
            "value": "both"
          },
          {
            "name": "Unread emails only",
            "value": "unread"
          },
          {
            "name": "Read emails only",
            "value": "read"
          }
        ]
      },
      {
        "displayName": "Sender",
        "name": "sender",
        "type": "string",
        "default": "",
        "description": "Sender name or email to filter by",
        "hint": "Enter an email or part of a sender name"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "displayOptions": {
      "hide": {
        "simple": [
          true
        ]
      }
    },
    "options": [
      {
        "displayName": "Attachment Prefix",
        "name": "dataPropertyAttachmentsPrefixName",
        "type": "string",
        "default": "attachment_",
        "description": "Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'."
      },
      {
        "displayName": "Download Attachments",
        "name": "downloadAttachments",
        "type": "boolean",
        "default": false,
        "description": "Whether the email's attachments will be downloaded"
      }
    ]
  }
]
```
