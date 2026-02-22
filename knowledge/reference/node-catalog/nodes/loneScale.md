# LoneScale

- Node name: `loneScale`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/LoneScale/LoneScale.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Create List, add / delete items

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `loneScaleApi` (required)

## Resource and Operation Coverage
### Resources
- List (`list`) - Manipulate list
- Item (`item`) - Manipulate item

### Operations
- resource `item`: `add`
- resource `list`: `create`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes | `list` | Create a new list |
| Operation | `operation` | `options` | no | `create` |  |
| Operation | `operation` | `options` | no | `add` |  |
| Type | `type` | `options` | yes | `PEOPLE` | Type of your list |
| List Name or ID | `list` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| First Name | `first_name` | `string` | yes |  | Contact first name |
| Last Name | `last_name` | `string` | yes |  | Contact last name |
| Company Name | `company_name` | `string` | no |  | Contact company name |
| Additional Fields | `peopleAdditionalFields` | `collection` | no | `{}` |  |
| Additional Fields | `companyAdditionalFields` | `collection` | no | `{}` |  |
| Name | `name` | `string` | yes |  | Name of your list |
| Type | `type` | `options` | yes | `COMPANY` | Type of your list |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "options": [
      {
        "name": "List",
        "value": "list",
        "description": "Manipulate list"
      },
      {
        "name": "Item",
        "value": "item",
        "description": "Manipulate item"
      }
    ],
    "default": "list",
    "noDataExpression": true,
    "required": true,
    "description": "Create a new list"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "displayOptions": {
      "show": {
        "resource": [
          "list"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a list",
        "action": "Create a list"
      }
    ],
    "default": "create",
    "noDataExpression": true
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "add",
        "description": "Create an item",
        "action": "Create a item"
      }
    ],
    "default": "add",
    "noDataExpression": true
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ]
      }
    },
    "options": [
      {
        "name": "Company",
        "value": "COMPANY",
        "description": "List of company"
      },
      {
        "name": "Contact",
        "value": "PEOPLE",
        "description": "List of contact"
      }
    ],
    "default": "PEOPLE",
    "description": "Type of your list",
    "noDataExpression": true
  },
  {
    "displayName": "List Name or ID",
    "name": "list",
    "type": "options",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getLists",
      "loadOptionsDependsOn": [
        "type"
      ]
    },
    "default": "",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "required": true
  },
  {
    "displayName": "First Name",
    "name": "first_name",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "add"
        ],
        "resource": [
          "item"
        ],
        "type": [
          "PEOPLE"
        ]
      }
    },
    "default": "",
    "description": "Contact first name",
    "required": true
  },
  {
    "displayName": "Last Name",
    "name": "last_name",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "add"
        ],
        "resource": [
          "item"
        ],
        "type": [
          "PEOPLE"
        ]
      }
    },
    "default": "",
    "description": "Contact last name",
    "required": true
  },
  {
    "displayName": "Company Name",
    "name": "company_name",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "add"
        ],
        "resource": [
          "item"
        ],
        "type": [
          "COMPANY"
        ]
      }
    },
    "default": "",
    "description": "Contact company name"
  },
  {
    "displayName": "Additional Fields",
    "name": "peopleAdditionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "operation": [
          "add"
        ],
        "resource": [
          "item"
        ],
        "type": [
          "PEOPLE"
        ]
      }
    },
    "options": [
      {
        "displayName": "Full Name",
        "name": "full_name",
        "type": "string",
        "default": "",
        "description": "Contact full name"
      },
      {
        "displayName": "Contact Email",
        "name": "email",
        "type": "string",
        "placeholder": "name@email.com",
        "default": ""
      },
      {
        "displayName": "Company Name",
        "name": "company_name",
        "type": "string",
        "default": "",
        "description": "Contact company name"
      },
      {
        "displayName": "Current Position",
        "name": "current_position",
        "type": "string",
        "default": "",
        "description": "Contact current position"
      },
      {
        "displayName": "Company Domain",
        "name": "domain",
        "type": "string",
        "default": "",
        "description": "Contact company domain"
      },
      {
        "displayName": "Linkedin Url",
        "name": "linkedin_url",
        "type": "string",
        "default": "",
        "description": "Contact Linkedin URL"
      },
      {
        "displayName": "Contact Location",
        "name": "location",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Contact ID",
        "name": "contact_id",
        "type": "string",
        "default": "",
        "description": "Contact ID from your source"
      }
    ]
  },
  {
    "displayName": "Additional Fields",
    "name": "companyAdditionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "operation": [
          "add"
        ],
        "resource": [
          "item"
        ],
        "type": [
          "COMPANY"
        ]
      }
    },
    "options": [
      {
        "displayName": "Linkedin Url",
        "name": "linkedin_url",
        "type": "string",
        "default": "",
        "description": "Company Linkedin URL"
      },
      {
        "displayName": "Company Domain",
        "name": "domain",
        "type": "string",
        "default": "",
        "description": "Company company domain"
      },
      {
        "displayName": "Contact Location",
        "name": "location",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Contact ID",
        "name": "contact_id",
        "type": "string",
        "default": "",
        "description": "Contact ID from your source"
      }
    ]
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "list"
        ]
      }
    },
    "default": "",
    "placeholder": "list name",
    "description": "Name of your list"
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "list"
        ]
      }
    },
    "options": [
      {
        "name": "Company",
        "value": "COMPANY",
        "description": "Create a list of companies",
        "action": "Create a list of companies"
      },
      {
        "name": "Contact",
        "value": "PEOPLE",
        "description": "Create a list of contacts",
        "action": "Create a list of contacts"
      }
    ],
    "default": "COMPANY",
    "description": "Type of your list",
    "noDataExpression": true
  }
]
```
