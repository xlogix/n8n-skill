# Uplead

- Node name: `uplead`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Uplead/Uplead.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Uplead API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `upleadApi` (required)

## Resource and Operation Coverage
### Resources
- Company (`company`) - Company API lets you lookup company data via a domain name or company name
- Person (`person`) - Person API lets you lookup a person based on an email address OR based on a domain name + first name + last name

### Operations
- resource `company`: `enrich`
- resource `person`: `enrich`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `company` |  |
| Operation | `operation` | `options` | no | `enrich` |  |
| Company | `company` | `string` | no |  | The name of the company (e.g – amazon) |
| Domain | `domain` | `string` | no |  | The domain name (e.g – amazon.com) |
| Operation | `operation` | `options` | no | `enrich` |  |
| Email | `email` | `string` | no |  | Email address (e.g – mbenioff@salesforce.com) |
| First Name | `firstname` | `string` | no |  | First name of the person (e.g – Marc) |
| Last Name | `lastname` | `string` | no |  | Last name of the person (e.g – Benioff) |
| Domain | `domain` | `string` | no |  | The domain name (e.g – salesforce.com) |

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
        "name": "Company",
        "value": "company",
        "description": "Company API lets you lookup company data via a domain name or company name"
      },
      {
        "name": "Person",
        "value": "person",
        "description": "Person API lets you lookup a person based on an email address OR based on a domain name + first name + last name"
      }
    ],
    "default": "company"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "company"
        ]
      }
    },
    "options": [
      {
        "name": "Enrich",
        "value": "enrich",
        "action": "Enrich a company"
      }
    ],
    "default": "enrich"
  },
  {
    "displayName": "Company",
    "name": "company",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "company"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "The name of the company (e.g – amazon)"
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "company"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "The domain name (e.g – amazon.com)"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "person"
        ]
      }
    },
    "options": [
      {
        "name": "Enrich",
        "value": "enrich",
        "action": "Enrich a person"
      }
    ],
    "default": "enrich"
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "person"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "Email address (e.g – mbenioff@salesforce.com)"
  },
  {
    "displayName": "First Name",
    "name": "firstname",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "person"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "First name of the person (e.g – Marc)"
  },
  {
    "displayName": "Last Name",
    "name": "lastname",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "person"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "Last name of the person (e.g – Benioff)"
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "person"
        ],
        "operation": [
          "enrich"
        ]
      }
    },
    "description": "The domain name (e.g – salesforce.com)"
  }
]
```
