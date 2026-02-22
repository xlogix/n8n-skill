# Gotify

- Node name: `gotify`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Gotify/Gotify.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume Gotify API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `gotifyApi` (required)

## Resource and Operation Coverage
### Resources
- Message (`message`)

### Operations
- resource `message`: `create`, `delete`, `getAll`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `message` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Message | `message` | `string` | yes |  | The message to send, If using Markdown add the Content Type option |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Message ID | `messageId` | `string` | yes |  |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `20` | Max number of results to return |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Message",
        "value": "message"
      }
    ],
    "default": "message"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create a message"
      },
      {
        "name": "Delete",
        "value": "delete",
        "action": "Delete a message"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many messages"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The message to send, If using Markdown add the Content Type option"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Priority",
        "name": "priority",
        "type": "number",
        "default": 1,
        "description": "The priority of the message"
      },
      {
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": "",
        "description": "The title of the message"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Content Type",
        "name": "contentType",
        "type": "options",
        "default": "text/plain",
        "description": "The message content type",
        "options": [
          {
            "name": "Plain",
            "value": "text/plain"
          },
          {
            "name": "Markdown",
            "value": "text/markdown"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Message ID",
    "name": "messageId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "description": "Max number of results to return",
    "default": 20,
    "displayOptions": {
      "show": {
        "resource": [
          "message"
        ],
        "operation": [
          "getAll"
        ],
        "returnAll": [
          false
        ]
      }
    }
  }
]
```
