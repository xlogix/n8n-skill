# Email Trigger (IMAP)

- Node name: `emailReadImap`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/EmailReadImap/EmailReadImap.node.js`
- Node version: `[2,2.1]`
- Groups: `trigger`
- Description: Triggers the workflow when a new email is received

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `imap` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Mailbox Name | `mailbox` | `string` | no | `INBOX` |  |
| Action | `postProcessAction` | `options` | no | `read` | What to do after the email has been received. If "nothing" gets selected it will be processed multiple times. |
| Download Attachments | `downloadAttachments` | `boolean` | no | `false` | Whether attachments of emails should be downloaded. Only set if needed as it increases processing. |
| Format | `format` | `options` | no | `simple` | The format to return the message in |
| Property Prefix Name | `dataPropertyAttachmentsPrefixName` | `string` | no | `attachment_` | Prefix for name of the binary property to which to write the attachments. An index starting with 0 will be added. So if name is "attachment_" the first attachment is saved to "attachment_0" |
| Property Prefix Name | `dataPropertyAttachmentsPrefixName` | `string` | no | `attachment_` | Prefix for name of the binary property to which to write the attachments. An index starting with 0 will be added. So if name is "attachment_" the first attachment is saved to "attachment_0" |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Mailbox Name",
    "name": "mailbox",
    "type": "string",
    "default": "INBOX"
  },
  {
    "displayName": "Action",
    "name": "postProcessAction",
    "type": "options",
    "options": [
      {
        "name": "Mark as Read",
        "value": "read"
      },
      {
        "name": "Nothing",
        "value": "nothing"
      }
    ],
    "default": "read",
    "description": "What to do after the email has been received. If \"nothing\" gets selected it will be processed multiple times."
  },
  {
    "displayName": "Download Attachments",
    "name": "downloadAttachments",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "format": [
          "simple"
        ]
      }
    },
    "description": "Whether attachments of emails should be downloaded. Only set if needed as it increases processing."
  },
  {
    "displayName": "Format",
    "name": "format",
    "type": "options",
    "options": [
      {
        "name": "RAW",
        "value": "raw",
        "description": "Returns the full email message data with body content in the raw field as a base64url encoded string; the payload field is not used"
      },
      {
        "name": "Resolved",
        "value": "resolved",
        "description": "Returns the full email with all data resolved and attachments saved as binary data"
      },
      {
        "name": "Simple",
        "value": "simple",
        "description": "Returns the full email; do not use if you wish to gather inline attachments"
      }
    ],
    "default": "simple",
    "description": "The format to return the message in"
  },
  {
    "displayName": "Property Prefix Name",
    "name": "dataPropertyAttachmentsPrefixName",
    "type": "string",
    "default": "attachment_",
    "displayOptions": {
      "show": {
        "format": [
          "resolved"
        ]
      }
    },
    "description": "Prefix for name of the binary property to which to write the attachments. An index starting with 0 will be added. So if name is \"attachment_\" the first attachment is saved to \"attachment_0\""
  },
  {
    "displayName": "Property Prefix Name",
    "name": "dataPropertyAttachmentsPrefixName",
    "type": "string",
    "default": "attachment_",
    "displayOptions": {
      "show": {
        "format": [
          "simple"
        ],
        "downloadAttachments": [
          true
        ]
      }
    },
    "description": "Prefix for name of the binary property to which to write the attachments. An index starting with 0 will be added. So if name is \"attachment_\" the first attachment is saved to \"attachment_0\""
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Custom Email Rules",
        "name": "customEmailConfig",
        "type": "string",
        "default": "[\"UNSEEN\"]",
        "description": "Custom email fetching rules. See <a href=\"https://github.com/mscdex/node-imap\">node-imap</a>'s search function for more details."
      },
      {
        "displayName": "Force Reconnect Every Minutes",
        "name": "forceReconnect",
        "type": "number",
        "default": 60,
        "description": "Sets an interval (in minutes) to force a reconnection"
      },
      {
        "displayName": "Fetch Only New Emails",
        "name": "trackLastMessageId",
        "type": "boolean",
        "default": true,
        "description": "Whether to fetch only new emails since the last run, or all emails that match the \"Custom Email Rules\" ([\"UNSEEN\"] by default)",
        "displayOptions": {
          "show": {
            "@version": [
              {
                "_cnd": {
                  "gte": 2.1
                }
              }
            ]
          }
        }
      }
    ]
  }
]
```
