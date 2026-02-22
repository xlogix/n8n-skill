# Sendy

- Node name: `sendy`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Sendy/Sendy.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume Sendy API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `sendyApi` (required)

## Resource and Operation Coverage
### Resources
- Campaign (`campaign`)
- Subscriber (`subscriber`)

### Operations
- resource `campaign`: `create`
- resource `subscriber`: `add`, `count`, `delete`, `remove`, `status`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `subscriber` |  |
| Operation | `operation` | `options` | no | `create` |  |
| From Name | `fromName` | `string` | no |  | The 'From name' of your campaign |
| From Email | `fromEmail` | `string` | no |  | The 'From email' of your campaign |
| Reply To | `replyTo` | `string` | no |  | The 'Reply to' of your campaign |
| Title | `title` | `string` | no |  | The 'Title' of your campaign |
| Subject | `subject` | `string` | no |  | The 'Subject' of your campaign |
| HTML Text | `htmlText` | `string` | no |  | The 'HTML version' of your campaign |
| Send Campaign | `sendCampaign` | `boolean` | no | `false` | Whether to send the campaign as well and not just create a draft. Default is false. |
| Brand ID | `brandId` | `string` | yes |  |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `add` |  |
| Email | `email` | `string` | no |  | Email address of the subscriber |
| List ID | `listId` | `string` | no |  | The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| List ID | `listId` | `string` | no |  | The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. |
| Email | `email` | `string` | no |  | Email address of the subscriber |
| List ID | `listId` | `string` | no |  | The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. |
| Email | `email` | `string` | no |  | Email address of the subscriber |
| List ID | `listId` | `string` | no |  | The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. |
| Email | `email` | `string` | no |  | Email address of the subscriber |
| List ID | `listId` | `string` | no |  | The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. |

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
        "name": "Campaign",
        "value": "campaign"
      },
      {
        "name": "Subscriber",
        "value": "subscriber"
      }
    ],
    "default": "subscriber"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a campaign",
        "action": "Create a campaign"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "From Name",
    "name": "fromName",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'From name' of your campaign"
  },
  {
    "displayName": "From Email",
    "name": "fromEmail",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'From email' of your campaign"
  },
  {
    "displayName": "Reply To",
    "name": "replyTo",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'Reply to' of your campaign"
  },
  {
    "displayName": "Title",
    "name": "title",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'Title' of your campaign"
  },
  {
    "displayName": "Subject",
    "name": "subject",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'Subject' of your campaign"
  },
  {
    "displayName": "HTML Text",
    "name": "htmlText",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The 'HTML version' of your campaign"
  },
  {
    "displayName": "Send Campaign",
    "name": "sendCampaign",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": false,
    "description": "Whether to send the campaign as well and not just create a draft. Default is false."
  },
  {
    "displayName": "Brand ID",
    "name": "brandId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "campaign"
        ],
        "sendCampaign": [
          false
        ]
      }
    },
    "required": true,
    "default": ""
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
          "campaign"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "displayName": "Exclude List IDs",
        "name": "excludeListIds",
        "type": "string",
        "default": "",
        "description": "Lists to exclude from your campaign. List IDs should be single or comma-separated."
      },
      {
        "displayName": "Exclude Segment IDs",
        "name": "excludeSegmentIds",
        "type": "string",
        "default": "",
        "description": "Segments to exclude from your campaign. Segment IDs should be single or comma-separated."
      },
      {
        "displayName": "List IDs",
        "name": "listIds",
        "type": "string",
        "default": "",
        "description": "List IDs should be single or comma-separated"
      },
      {
        "displayName": "Plain Text",
        "name": "plainText",
        "type": "string",
        "default": "",
        "description": "The 'Plain text version' of your campaign"
      },
      {
        "displayName": "Querystring",
        "name": "queryString",
        "type": "string",
        "default": "",
        "description": "Google Analytics tags"
      },
      {
        "displayName": "Segment IDs",
        "name": "segmentIds",
        "type": "string",
        "default": "",
        "description": "Segment IDs should be single or comma-separated"
      },
      {
        "displayName": "Track Clicks",
        "name": "trackClicks",
        "type": "boolean",
        "default": true,
        "description": "Whether to disable clicks tracking. Default is true."
      },
      {
        "displayName": "Track Opens",
        "name": "trackOpens",
        "type": "boolean",
        "default": true,
        "description": "Whether to disable opens tracking. Default is true."
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ]
      }
    },
    "options": [
      {
        "name": "Add",
        "value": "add",
        "description": "Add a subscriber to a list",
        "action": "Add a subscriber"
      },
      {
        "name": "Count",
        "value": "count",
        "description": "Count subscribers",
        "action": "Count a subscriber"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a subscriber from a list",
        "action": "Delete a subscriber"
      },
      {
        "name": "Remove",
        "value": "remove",
        "description": "Unsubscribe user from a list",
        "action": "Remove a subscriber"
      },
      {
        "name": "Status",
        "value": "status",
        "description": "Get the status of subscriber",
        "action": "Get subscriber's status"
      }
    ],
    "default": "add"
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "Email address of the subscriber"
  },
  {
    "displayName": "List ID",
    "name": "listId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID."
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
          "subscriber"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "options": [
      {
        "displayName": "Country",
        "name": "country",
        "type": "string",
        "default": "",
        "description": "User's 2 letter country code"
      },
      {
        "displayName": "GDPR",
        "name": "gdpr",
        "type": "boolean",
        "default": false,
        "description": "Whether you're signing up EU users in a GDPR compliant manner"
      },
      {
        "displayName": "Honeypot",
        "name": "hp",
        "type": "boolean",
        "default": false,
        "description": "Include this 'honeypot' field to prevent spambots from signing up via this API call. When spambots fills in this field, this API call will exit, preventing them from signing up fake addresses to your form. This parameter is only supported in Sendy 3.0 onwards."
      },
      {
        "displayName": "IP Address",
        "name": "ipaddress",
        "type": "string",
        "default": "",
        "description": "User's IP address"
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "User's name"
      },
      {
        "displayName": "Referrer",
        "name": "referrer",
        "type": "string",
        "default": "",
        "description": "The URL where the user signed up from"
      },
      {
        "displayName": "Silent",
        "name": "silent",
        "type": "boolean",
        "default": false,
        "description": "Set to \"true\" if your list is 'Double opt-in' but you want to bypass that and signup the user to the list as 'Single Opt-in instead' (optional)"
      }
    ]
  },
  {
    "displayName": "List ID",
    "name": "listId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "count"
        ]
      }
    },
    "default": "",
    "description": "The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID."
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "default": "",
    "description": "Email address of the subscriber"
  },
  {
    "displayName": "List ID",
    "name": "listId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "default": "",
    "description": "The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID."
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "Email address of the subscriber"
  },
  {
    "displayName": "List ID",
    "name": "listId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID."
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "status"
        ]
      }
    },
    "default": "",
    "description": "Email address of the subscriber"
  },
  {
    "displayName": "List ID",
    "name": "listId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "subscriber"
        ],
        "operation": [
          "status"
        ]
      }
    },
    "default": "",
    "description": "The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID."
  }
]
```
