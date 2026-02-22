# Mailcheck

- Node name: `mailcheck`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Mailcheck/Mailcheck.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume Mailcheck API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `mailcheckApi` (required)

## Resource and Operation Coverage
### Resources
- Email (`email`)

### Operations
- resource `email`: `check`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `email` |  |
| Operation | `operation` | `options` | no | `check` |  |
| Email | `email` | `string` | no |  | Email address to check |

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
        "name": "Email",
        "value": "email"
      }
    ],
    "default": "email"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "email"
        ]
      }
    },
    "options": [
      {
        "name": "Check",
        "value": "check",
        "action": "Check an email"
      }
    ],
    "default": "check"
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "resource": [
          "email"
        ],
        "operation": [
          "check"
        ]
      }
    },
    "default": "",
    "description": "Email address to check"
  }
]
```
