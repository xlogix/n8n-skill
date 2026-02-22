# Mailgun

- Node name: `mailgun`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mailgun/Mailgun.node.js`
- Node version: `1`
- Groups: `output`
- Description: Sends an email via Mailgun

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `mailgunApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| From Email | `fromEmail` | `string` | yes |  | Email address of the sender optional with name |
| To Email | `toEmail` | `string` | yes |  | Email address of the recipient. Multiple ones can be separated by comma. |
| Cc Email | `ccEmail` | `string` | no |  | Cc Email address of the recipient. Multiple ones can be separated by comma. |
| Bcc Email | `bccEmail` | `string` | no |  | Bcc Email address of the recipient. Multiple ones can be separated by comma. |
| Subject | `subject` | `string` | no |  | Subject line of the email |
| Text | `text` | `string` | no |  | Plain text message of email |
| HTML | `html` | `string` | no |  | HTML text message of email |
| Attachments | `attachments` | `string` | no |  | Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated. |

## Full Parameter Schema
```json
[
  {
    "displayName": "From Email",
    "name": "fromEmail",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "Admin <admin@example.com>",
    "description": "Email address of the sender optional with name"
  },
  {
    "displayName": "To Email",
    "name": "toEmail",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "info@example.com",
    "description": "Email address of the recipient. Multiple ones can be separated by comma."
  },
  {
    "displayName": "Cc Email",
    "name": "ccEmail",
    "type": "string",
    "default": "",
    "placeholder": "",
    "description": "Cc Email address of the recipient. Multiple ones can be separated by comma."
  },
  {
    "displayName": "Bcc Email",
    "name": "bccEmail",
    "type": "string",
    "default": "",
    "placeholder": "",
    "description": "Bcc Email address of the recipient. Multiple ones can be separated by comma."
  },
  {
    "displayName": "Subject",
    "name": "subject",
    "type": "string",
    "default": "",
    "placeholder": "My subject line",
    "description": "Subject line of the email"
  },
  {
    "displayName": "Text",
    "name": "text",
    "type": "string",
    "typeOptions": {
      "rows": 5
    },
    "default": "",
    "description": "Plain text message of email"
  },
  {
    "displayName": "HTML",
    "name": "html",
    "type": "string",
    "typeOptions": {
      "rows": 5,
      "editor": "htmlEditor"
    },
    "default": "",
    "description": "HTML text message of email"
  },
  {
    "displayName": "Attachments",
    "name": "attachments",
    "type": "string",
    "default": "",
    "description": "Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated."
  }
]
```
