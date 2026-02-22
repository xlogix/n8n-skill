# Clearbit

- Node name: `clearbit`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Clearbit/Clearbit.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Clearbit API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `clearbitApi` (required)

## Resource and Operation Coverage
### Resources
- Company (`company`) - The Company API allows you to look up a company by their domain
- Person (`person`) - The Person API lets you retrieve social information associated with an email address, such as a person’s name, location and Twitter handle

### Operations
- resource `company`: `autocomplete`, `enrich`
- resource `person`: `enrich`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `company` |  |
| Operation | `operation` | `options` | no | `enrich` |  |
| Domain | `domain` | `string` | yes |  | The domain to look up |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Name | `name` | `string` | yes |  | Name is the partial name of the company |
| Operation | `operation` | `options` | no | `enrich` |  |
| Email | `email` | `string` | yes |  | The email address to look up |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |

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
        "description": "The Company API allows you to look up a company by their domain"
      },
      {
        "name": "Person",
        "value": "person",
        "description": "The Person API lets you retrieve social information associated with an email address, such as a person’s name, location and Twitter handle"
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
        "name": "Autocomplete",
        "value": "autocomplete",
        "description": "Auto-complete company names and retrieve logo and domain",
        "action": "Autocomplete a company"
      },
      {
        "name": "Enrich",
        "value": "enrich",
        "description": "Look up person and company data based on an email or domain",
        "action": "Enrich a company"
      }
    ],
    "default": "enrich"
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "default": "",
    "required": true,
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
    "description": "The domain to look up"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
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
    "options": [
      {
        "displayName": "Company Name",
        "name": "companyName",
        "type": "string",
        "default": "",
        "description": "The name of the company"
      },
      {
        "displayName": "Facebook",
        "name": "facebook",
        "type": "string",
        "default": "",
        "description": "The Facebook URL for the company"
      },
      {
        "displayName": "Linkedin",
        "name": "linkedin",
        "type": "string",
        "default": "",
        "description": "The LinkedIn URL for the company"
      },
      {
        "displayName": "Twitter",
        "name": "twitter",
        "type": "string",
        "default": "",
        "description": "The Twitter handle for the company"
      }
    ]
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "company"
        ],
        "operation": [
          "autocomplete"
        ]
      }
    },
    "description": "Name is the partial name of the company"
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
        "description": "Look up a person and company data based on an email or domain",
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
    "required": true,
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
    "description": "The email address to look up"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
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
    "options": [
      {
        "displayName": "Company",
        "name": "company",
        "type": "string",
        "default": "",
        "description": "The name of the person’s employer"
      },
      {
        "displayName": "Company Domain",
        "name": "companyDomain",
        "type": "string",
        "default": "",
        "description": "The domain for the person’s employer"
      },
      {
        "displayName": "Facebook",
        "name": "facebook",
        "type": "string",
        "default": "",
        "description": "The Facebook URL for the person"
      },
      {
        "displayName": "Family Name",
        "name": "familyName",
        "type": "string",
        "default": "",
        "description": "Last name of person. If you have this, passing this is strongly recommended to improve match rates."
      },
      {
        "displayName": "Given Name",
        "name": "givenName",
        "type": "string",
        "default": "",
        "description": "First name of person"
      },
      {
        "displayName": "IP Address",
        "name": "ipAddress",
        "type": "string",
        "default": "",
        "description": "IP address of the person. If you have this, passing this is strongly recommended to improve match rates."
      },
      {
        "displayName": "Location",
        "name": "location",
        "type": "string",
        "default": "",
        "description": "The city or country where the person resides"
      },
      {
        "displayName": "LinkedIn",
        "name": "linkedIn",
        "type": "string",
        "default": "",
        "description": "The LinkedIn URL for the person"
      },
      {
        "displayName": "Twitter",
        "name": "twitter",
        "type": "string",
        "default": "",
        "description": "The Twitter handle for the person"
      }
    ]
  }
]
```
