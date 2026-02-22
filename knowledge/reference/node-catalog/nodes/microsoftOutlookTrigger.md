# Microsoft Outlook Trigger

- Node name: `microsoftOutlookTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Microsoft/Outlook/MicrosoftOutlookTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals.

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `microsoftOutlookOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Trigger On | `event` | `options` | no | `messageReceived` |  |
| Output | `output` | `options` | no | `simple` |  |
| Fields | `fields` | `multiOptions` | no | `[]` | The fields to add to the output |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Trigger On",
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
    "displayName": "Output",
    "name": "output",
    "type": "options",
    "default": "simple",
    "options": [
      {
        "name": "Simplified",
        "value": "simple"
      },
      {
        "name": "Raw",
        "value": "raw"
      },
      {
        "name": "Select Included Fields",
        "value": "fields"
      }
    ]
  },
  {
    "displayName": "Fields",
    "name": "fields",
    "type": "multiOptions",
    "description": "The fields to add to the output",
    "displayOptions": {
      "show": {
        "output": [
          "fields"
        ]
      }
    },
    "options": [
      {
        "name": "bccRecipients",
        "value": "bccRecipients"
      },
      {
        "name": "body",
        "value": "body"
      },
      {
        "name": "bodyPreview",
        "value": "bodyPreview"
      },
      {
        "name": "categories",
        "value": "categories"
      },
      {
        "name": "ccRecipients",
        "value": "ccRecipients"
      },
      {
        "name": "changeKey",
        "value": "changeKey"
      },
      {
        "name": "conversationId",
        "value": "conversationId"
      },
      {
        "name": "createdDateTime",
        "value": "createdDateTime"
      },
      {
        "name": "flag",
        "value": "flag"
      },
      {
        "name": "from",
        "value": "from"
      },
      {
        "name": "hasAttachments",
        "value": "hasAttachments"
      },
      {
        "name": "importance",
        "value": "importance"
      },
      {
        "name": "inferenceClassification",
        "value": "inferenceClassification"
      },
      {
        "name": "internetMessageId",
        "value": "internetMessageId"
      },
      {
        "name": "isDeliveryReceiptRequested",
        "value": "isDeliveryReceiptRequested"
      },
      {
        "name": "isDraft",
        "value": "isDraft"
      },
      {
        "name": "isRead",
        "value": "isRead"
      },
      {
        "name": "isReadReceiptRequested",
        "value": "isReadReceiptRequested"
      },
      {
        "name": "lastModifiedDateTime",
        "value": "lastModifiedDateTime"
      },
      {
        "name": "parentFolderId",
        "value": "parentFolderId"
      },
      {
        "name": "receivedDateTime",
        "value": "receivedDateTime"
      },
      {
        "name": "replyTo",
        "value": "replyTo"
      },
      {
        "name": "sender",
        "value": "sender"
      },
      {
        "name": "sentDateTime",
        "value": "sentDateTime"
      },
      {
        "name": "subject",
        "value": "subject"
      },
      {
        "name": "toRecipients",
        "value": "toRecipients"
      },
      {
        "name": "webLink",
        "value": "webLink"
      }
    ],
    "default": []
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Filter Query",
        "name": "custom",
        "type": "string",
        "default": "",
        "placeholder": "e.g. isRead eq false",
        "hint": "Search query to filter messages. <a href=\"https://learn.microsoft.com/en-us/graph/filter-query-parameter\">More info</a>."
      },
      {
        "displayName": "Has Attachments",
        "name": "hasAttachments",
        "type": "boolean",
        "default": false
      },
      {
        "displayName": "Folders to Exclude",
        "name": "foldersToExclude",
        "type": "multiOptions",
        "typeOptions": {
          "loadOptionsMethod": "getFolders"
        },
        "default": [],
        "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>"
      },
      {
        "displayName": "Folders to Include",
        "name": "foldersToInclude",
        "type": "multiOptions",
        "typeOptions": {
          "loadOptionsMethod": "getFolders"
        },
        "default": [],
        "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>"
      },
      {
        "displayName": "Read Status",
        "name": "readStatus",
        "type": "options",
        "default": "unread",
        "hint": "Filter messages by whether they have been read or not",
        "options": [
          {
            "name": "Unread and read messages",
            "value": "both"
          },
          {
            "name": "Unread messages only",
            "value": "unread"
          },
          {
            "name": "Read messages only",
            "value": "read"
          }
        ]
      },
      {
        "displayName": "Sender",
        "name": "sender",
        "type": "string",
        "default": "",
        "description": "Sender name or email to filter by"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Attachments Prefix",
        "name": "attachmentsPrefix",
        "type": "string",
        "default": "attachment_",
        "description": "Prefix for name of the output fields to put the binary files data in. An index starting from 0 will be added. So if name is \"attachment_\" the first attachment is saved to \"attachment_0\"."
      },
      {
        "displayName": "Download Attachments",
        "name": "downloadAttachments",
        "type": "boolean",
        "default": false,
        "description": "Whether the message's attachments will be downloaded and included in the output"
      }
    ]
  }
]
```
