# Hunter

- Node name: `hunter`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Hunter/Hunter.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Hunter API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `hunterApi` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `domainSearch`, `emailFinder`, `emailVerifier`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `domainSearch` | Operation to consume |
| Domain | `domain` | `string` | yes |  | Domain name from which you want to find the email addresses. For example, "stripe.com". |
| Only Emails | `onlyEmails` | `boolean` | no | `true` | Whether to return only the found emails |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Domain | `domain` | `string` | yes |  | Domain name from which you want to find the email addresses. For example, "stripe.com". |
| First Name | `firstname` | `string` | yes |  | The person's first name. It doesn't need to be in lowercase. |
| Last Name | `lastname` | `string` | yes |  | The person's last name. It doesn't need to be in lowercase. |
| Email | `email` | `string` | yes |  | The email address you want to verify |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Domain Search",
        "value": "domainSearch",
        "description": "Get every email address found on the internet using a given domain name, with sources",
        "action": "Get every email address found on the internet using a given domain name, with sources"
      },
      {
        "name": "Email Finder",
        "value": "emailFinder",
        "description": "Generate or retrieve the most likely email address from a domain name, a first name and a last name",
        "action": "Generate or retrieve the most likely email address from a domain name, a first name and a last name"
      },
      {
        "name": "Email Verifier",
        "value": "emailVerifier",
        "description": "Verify the deliverability of an email address",
        "action": "Verify the deliverability of an email address"
      }
    ],
    "default": "domainSearch",
    "description": "Operation to consume"
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "domainSearch"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "Domain name from which you want to find the email addresses. For example, \"stripe.com\"."
  },
  {
    "displayName": "Only Emails",
    "name": "onlyEmails",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "domainSearch"
        ]
      }
    },
    "default": true,
    "description": "Whether to return only the found emails"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "domainSearch"
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
    "displayOptions": {
      "show": {
        "operation": [
          "domainSearch"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 100
    },
    "default": 100,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "displayOptions": {
      "show": {
        "operation": [
          "domainSearch"
        ]
      }
    },
    "options": [
      {
        "displayName": "Type",
        "name": "type",
        "type": "options",
        "default": "",
        "options": [
          {
            "name": "Personal",
            "value": "personal"
          },
          {
            "name": "Generic",
            "value": "generic"
          }
        ]
      },
      {
        "displayName": "Seniority",
        "name": "seniority",
        "type": "multiOptions",
        "default": [],
        "options": [
          {
            "name": "Junior",
            "value": "junior"
          },
          {
            "name": "Senior",
            "value": "senior"
          },
          {
            "name": "Executive",
            "value": "executive"
          }
        ]
      },
      {
        "displayName": "Department",
        "name": "department",
        "type": "multiOptions",
        "default": [],
        "options": [
          {
            "name": "Communication",
            "value": "communication"
          },
          {
            "name": "Executive",
            "value": "executive"
          },
          {
            "name": "Finance",
            "value": "finance"
          },
          {
            "name": "HR",
            "value": "hr"
          },
          {
            "name": "IT",
            "value": "it"
          },
          {
            "name": "Legal",
            "value": "legal"
          },
          {
            "name": "Management",
            "value": "management"
          },
          {
            "name": "Marketing",
            "value": "marketing"
          },
          {
            "name": "Sales",
            "value": "sales"
          },
          {
            "name": "Support",
            "value": "support"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "emailFinder"
        ]
      }
    },
    "required": true,
    "description": "Domain name from which you want to find the email addresses. For example, \"stripe.com\"."
  },
  {
    "displayName": "First Name",
    "name": "firstname",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "emailFinder"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "The person's first name. It doesn't need to be in lowercase."
  },
  {
    "displayName": "Last Name",
    "name": "lastname",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "emailFinder"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "The person's last name. It doesn't need to be in lowercase."
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "operation": [
          "emailVerifier"
        ]
      }
    },
    "default": "",
    "required": true,
    "description": "The email address you want to verify"
  }
]
```
