# Discourse

- Node name: `discourse`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Discourse/Discourse.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume Discourse API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `discourseApi` (required)

## Resource and Operation Coverage
### Resources
- Category (`category`)
- Group (`group`)
- Post (`post`)
- User (`user`)
- User Group (`userGroup`)

### Operations
- resource `category`: `create`, `getAll`, `update`
- resource `group`: `create`, `get`, `getAll`, `update`
- resource `post`: `create`, `get`, `getAll`, `update`
- resource `user`: `create`, `get`, `getAll`
- resource `userGroup`: `add`, `remove`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `post` |  |
| Operation | `operation` | `options` | yes | `create` | Choose an operation |
| Name | `name` | `string` | yes |  | Name of the category |
| Color | `color` | `color` | yes | `0000FF` | Color of the category |
| Text Color | `textColor` | `color` | yes | `0000FF` | Text color of the category |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Category ID | `categoryId` | `string` | yes |  | ID of the category |
| Name | `name` | `string` | yes |  | New name of the category |
| Update Fields | `updateFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | yes | `create` | Choose an operation |
| Name | `name` | `string` | yes |  | Name of the group |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Group ID | `groupId` | `string` | yes |  | ID of the group to update |
| Name | `name` | `string` | yes |  | New name of the group |
| Operation | `operation` | `options` | yes | `create` | Choose an operation |
| Title | `title` | `string` | no |  | Title of the post |
| Content | `content` | `string` | yes |  | Content of the post |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Post ID | `postId` | `string` | yes |  | ID of the post |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Post ID | `postId` | `string` | yes |  | ID of the post |
| Content | `content` | `string` | yes |  | Content of the post. HTML is supported. |
| Update Fields | `updateFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | yes | `create` | Choose an operation |
| Name | `name` | `string` | yes |  | Name of the user to create |
| Email | `email` | `string` | yes |  | Email of the user to create |
| Username | `username` | `string` | yes |  | The username of the user to create |
| Password | `password` | `string` | yes |  | The password of the user to create |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| By | `by` | `options` | yes | `username` | What to search by |
| Username | `username` | `string` | yes |  | The username of the user to return |
| SSO External ID | `externalId` | `string` | yes |  | Discourse SSO external ID |
| Flag | `flag` | `options` | no |  | User flags to search for |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | yes | `add` | Choose an operation |
| Usernames | `usernames` | `string` | yes |  | Usernames to add to group. Multiples can be defined separated by comma. |
| Group ID | `groupId` | `string` | yes |  | ID of the group |
| Usernames | `usernames` | `string` | yes |  | Usernames to remove from group. Multiples can be defined separated by comma. |
| Group ID | `groupId` | `string` | yes |  | ID of the group to remove |

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
        "name": "Category",
        "value": "category"
      },
      {
        "name": "Group",
        "value": "group"
      },
      {
        "name": "Post",
        "value": "post"
      },
      {
        "name": "User",
        "value": "user"
      },
      {
        "name": "User Group",
        "value": "userGroup"
      }
    ],
    "default": "post"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "description": "Choose an operation",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a category",
        "action": "Create a category"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many categories",
        "action": "Get many categories"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update a category",
        "action": "Update a category"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "Name of the category"
  },
  {
    "displayName": "Color",
    "name": "color",
    "type": "color",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "0000FF",
    "description": "Color of the category"
  },
  {
    "displayName": "Text Color",
    "name": "textColor",
    "type": "color",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "0000FF",
    "description": "Text color of the category"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "category"
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
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "getAll"
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
    "default": 50,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Category ID",
    "name": "categoryId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "ID of the category"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "New name of the category"
  },
  {
    "displayName": "Update Fields",
    "name": "updateFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "category"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "options": [
      {
        "displayName": "Color",
        "name": "color",
        "type": "color",
        "default": "0000FF",
        "description": "Color of the category"
      },
      {
        "displayName": "Text Color",
        "name": "textColor",
        "type": "color",
        "default": "0000FF",
        "description": "Text color of the category"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "description": "Choose an operation",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "group"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a group",
        "action": "Create a group"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a group",
        "action": "Get a group"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many groups",
        "action": "Get many groups"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update a group",
        "action": "Update a group"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "group"
        ],
        "operation": [
          "get",
          "create"
        ]
      }
    },
    "default": "",
    "description": "Name of the group"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "group"
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
    "displayOptions": {
      "show": {
        "resource": [
          "group"
        ],
        "operation": [
          "getAll"
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
    "default": 50,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Group ID",
    "name": "groupId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "group"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "ID of the group to update"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "group"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "New name of the group"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "description": "Choose an operation",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a post",
        "action": "Create a post"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a post",
        "action": "Get a post"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many posts",
        "action": "Get many posts"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update a post",
        "action": "Update a post"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Title",
    "name": "title",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "Title of the post"
  },
  {
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "Content of the post"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "post"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Category Name or ID",
        "name": "category",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getCategories"
        },
        "default": "",
        "description": "ID of the category. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Reply To Post Number",
        "name": "reply_to_post_number",
        "type": "string",
        "default": "",
        "description": "The number of the post to reply to"
      },
      {
        "displayName": "Topic ID",
        "name": "topic_id",
        "type": "string",
        "default": "",
        "description": "ID of the topic"
      }
    ]
  },
  {
    "displayName": "Post ID",
    "name": "postId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "default": "",
    "description": "ID of the post"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "post"
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
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "getAll"
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
    "default": 50,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Post ID",
    "name": "postId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "ID of the post"
  },
  {
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": "",
    "description": "Content of the post. HTML is supported."
  },
  {
    "displayName": "Update Fields",
    "name": "updateFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "post"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "options": [
      {
        "displayName": "Edit Reason",
        "name": "edit_reason",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Cooked",
        "name": "cooked",
        "type": "boolean",
        "default": false
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "description": "Choose an operation",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a user",
        "action": "Create a user"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a user",
        "action": "Get a user"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many users",
        "action": "Get many users"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "Name of the user to create"
  },
  {
    "displayName": "Email",
    "name": "email",
    "type": "string",
    "placeholder": "name@email.com",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "Email of the user to create"
  },
  {
    "displayName": "Username",
    "name": "username",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The username of the user to create"
  },
  {
    "displayName": "Password",
    "name": "password",
    "type": "string",
    "typeOptions": {
      "password": true
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The password of the user to create"
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
          "user"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "displayName": "Active",
        "name": "active",
        "type": "boolean",
        "default": false
      },
      {
        "displayName": "Approved",
        "name": "approved",
        "type": "boolean",
        "default": false
      }
    ]
  },
  {
    "displayName": "By",
    "name": "by",
    "type": "options",
    "options": [
      {
        "name": "Username",
        "value": "username"
      },
      {
        "name": "SSO External ID",
        "value": "externalId"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "default": "username",
    "description": "What to search by"
  },
  {
    "displayName": "Username",
    "name": "username",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "get"
        ],
        "by": [
          "username"
        ]
      }
    },
    "default": "",
    "description": "The username of the user to return"
  },
  {
    "displayName": "SSO External ID",
    "name": "externalId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "get"
        ],
        "by": [
          "externalId"
        ]
      }
    },
    "default": "",
    "description": "Discourse SSO external ID"
  },
  {
    "displayName": "Flag",
    "name": "flag",
    "type": "options",
    "options": [
      {
        "name": "Active",
        "value": "active"
      },
      {
        "name": "Blocked",
        "value": "blocked"
      },
      {
        "name": "New",
        "value": "new"
      },
      {
        "name": "Staff",
        "value": "staff"
      },
      {
        "name": "Suspect",
        "value": "suspect"
      },
      {
        "name": "Suspended",
        "value": "suspended"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "default": "",
    "description": "User flags to search for"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "user"
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
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "getAll"
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
    "default": 50,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "user"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Ascending",
        "name": "asc",
        "type": "boolean",
        "default": true,
        "description": "Whether to sort ascending"
      },
      {
        "displayName": "Order",
        "name": "order",
        "type": "options",
        "options": [
          {
            "name": "Created",
            "value": "created"
          },
          {
            "name": "Days Visited",
            "value": "days_visited"
          },
          {
            "name": "Email",
            "value": "email"
          },
          {
            "name": "Last Emailed",
            "value": "last_emailed"
          },
          {
            "name": "Posts",
            "value": "posts"
          },
          {
            "name": "Posts Read",
            "value": "posts_read"
          },
          {
            "name": "Read Time",
            "value": "read_time"
          },
          {
            "name": "Seen",
            "value": "seen"
          },
          {
            "name": "Topics Viewed",
            "value": "topics_viewed"
          },
          {
            "name": "Trust Level",
            "value": "trust_level"
          },
          {
            "name": "Username",
            "value": "username"
          }
        ],
        "default": "created",
        "description": "What to order by"
      },
      {
        "displayName": "Show Emails",
        "name": "showEmails",
        "type": "boolean",
        "default": false,
        "description": "Whether to include user email addresses"
      },
      {
        "displayName": "Stats",
        "name": "stats",
        "type": "boolean",
        "default": false,
        "description": "Whether to return user stats"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "description": "Choose an operation",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "userGroup"
        ]
      }
    },
    "options": [
      {
        "name": "Add",
        "value": "add",
        "description": "Create a user to group",
        "action": "Add a user to a group"
      },
      {
        "name": "Remove",
        "value": "remove",
        "description": "Remove user from group",
        "action": "Remove a user from a group"
      }
    ],
    "default": "add"
  },
  {
    "displayName": "Usernames",
    "name": "usernames",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "userGroup"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "Usernames to add to group. Multiples can be defined separated by comma."
  },
  {
    "displayName": "Group ID",
    "name": "groupId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "userGroup"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "ID of the group"
  },
  {
    "displayName": "Usernames",
    "name": "usernames",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "userGroup"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "Usernames to remove from group. Multiples can be defined separated by comma."
  },
  {
    "displayName": "Group ID",
    "name": "groupId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "userGroup"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "ID of the group to remove"
  }
]
```
