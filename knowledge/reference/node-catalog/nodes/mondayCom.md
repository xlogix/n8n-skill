# Monday.com

- Node name: `mondayCom`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/MondayCom/MondayCom.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Monday.com API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `mondayComApi` (required)
- `mondayComOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Board (`board`)
- Board Column (`boardColumn`)
- Board Group (`boardGroup`)
- Board Item (`boardItem`)

### Operations
- resource `board`: `archive`, `create`, `get`, `getAll`
- resource `boardColumn`: `create`, `getAll`
- resource `boardGroup`: `create`, `delete`, `getAll`
- resource `boardItem`: `addUpdate`, `changeColumnValue`, `changeMultipleColumnValues`, `create`, `delete`, `get`, `getAll`, `getByColumnValue`, `move`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Resource | `resource` | `options` | no | `board` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Board Name or ID | `boardId` | `options` | yes |  | Board unique identifiers. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Name | `name` | `string` | yes |  | The board's name |
| Kind | `kind` | `options` | yes |  | The board's kind (public / private / share) |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Board Name or ID | `boardId` | `options` | yes |  | Board unique identifiers. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Operation | `operation` | `options` | no | `create` |  |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Title | `title` | `string` | yes |  |  |
| Column Type | `columnType` | `options` | yes |  |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Operation | `operation` | `options` | no | `create` |  |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Name | `name` | `string` | yes |  | The group name |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Group Name or ID | `groupId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Operation | `operation` | `options` | no | `create` |  |
| Item ID | `itemId` | `string` | yes |  | The unique identifier of the item to add update to |
| Update Text | `value` | `string` | yes |  | The update text to add |
| Board Name or ID | `boardId` | `options` | yes |  | The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Item ID | `itemId` | `string` | yes |  | The unique identifier of the item to change column of |
| Column Name or ID | `columnId` | `options` | yes |  | The column's unique identifier. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Value | `value` | `json` | yes |  | The column value in JSON format. Documentation can be found <a href="https://monday.com/developers/v2#mutations-section-columns-change-column-value">here</a>. |
| Board Name or ID | `boardId` | `options` | yes |  | The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Item ID | `itemId` | `string` | yes |  | Item's ID |
| Column Values | `columnValues` | `json` | yes |  | The column fields and values in JSON format. Documentation can be found <a href="https://monday.com/developers/v2#mutations-section-columns-change-multiple-column-values">here</a>. |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Group Name or ID | `groupId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Name | `name` | `string` | yes |  | The new item's name |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Item ID | `itemId` | `string` | yes |  | Item's ID |
| Item ID | `itemId` | `string` | yes |  | Item's ID (Multiple can be added separated by comma) |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Group Name or ID | `groupId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Board Name or ID | `boardId` | `options` | yes |  | The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Column Name or ID | `columnId` | `options` | yes |  | The column's unique identifier. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Column Value | `columnValue` | `string` | yes |  | The column value to search items by |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Board Name or ID | `boardId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Item ID | `itemId` | `string` | yes |  | The item's ID |
| Group Name or ID | `groupId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Access Token",
        "value": "accessToken"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "accessToken"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Board",
        "value": "board"
      },
      {
        "name": "Board Column",
        "value": "boardColumn"
      },
      {
        "name": "Board Group",
        "value": "boardGroup"
      },
      {
        "name": "Board Item",
        "value": "boardItem"
      }
    ],
    "default": "board"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "board"
        ]
      }
    },
    "options": [
      {
        "name": "Archive",
        "value": "archive",
        "description": "Archive a board",
        "action": "Archive a board"
      },
      {
        "name": "Create",
        "value": "create",
        "description": "Create a new board",
        "action": "Create a board"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a board",
        "action": "Get a board"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many boards",
        "action": "Get many boards"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "board"
        ],
        "operation": [
          "archive"
        ]
      }
    },
    "description": "Board unique identifiers. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
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
          "board"
        ]
      }
    },
    "default": "",
    "description": "The board's name"
  },
  {
    "displayName": "Kind",
    "name": "kind",
    "type": "options",
    "options": [
      {
        "name": "Share",
        "value": "share"
      },
      {
        "name": "Public",
        "value": "public"
      },
      {
        "name": "Private",
        "value": "private"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "board"
        ]
      }
    },
    "default": "",
    "description": "The board's kind (public / private / share)"
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
          "board"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Template ID",
        "name": "templateId",
        "type": "number",
        "typeOptions": {
          "minValue": 0
        },
        "default": 0,
        "description": "Optional board template ID"
      }
    ]
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "board"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "Board unique identifiers. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "board"
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
          "board"
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
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a new column",
        "action": "Create a board column"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many columns",
        "action": "Get many board columns"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Title",
    "name": "title",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Column Type",
    "name": "columnType",
    "type": "options",
    "default": "",
    "options": [
      {
        "name": "Checkbox",
        "value": "checkbox"
      },
      {
        "name": "Country",
        "value": "country"
      },
      {
        "name": "Date",
        "value": "date"
      },
      {
        "name": "Dropdown",
        "value": "dropdown"
      },
      {
        "name": "Email",
        "value": "email"
      },
      {
        "name": "Hour",
        "value": "hour"
      },
      {
        "name": "Link",
        "value": "Link"
      },
      {
        "name": "Long Text",
        "value": "longText"
      },
      {
        "name": "Numbers",
        "value": "numbers"
      },
      {
        "name": "People",
        "value": "people"
      },
      {
        "name": "Person",
        "value": "person"
      },
      {
        "name": "Phone",
        "value": "phone"
      },
      {
        "name": "Rating",
        "value": "rating"
      },
      {
        "name": "Status",
        "value": "status"
      },
      {
        "name": "Tags",
        "value": "tags"
      },
      {
        "name": "Team",
        "value": "team"
      },
      {
        "name": "Text",
        "value": "text"
      },
      {
        "name": "Timeline",
        "value": "timeline"
      },
      {
        "name": "Timezone",
        "value": "timezone"
      },
      {
        "name": "Week",
        "value": "week"
      },
      {
        "name": "World Clock",
        "value": "worldClock"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Defauls",
        "name": "defaults",
        "type": "json",
        "typeOptions": {
          "alwaysOpenEditWindow": true
        },
        "default": "",
        "description": "The new column's defaults"
      }
    ]
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardColumn"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardGroup"
        ]
      }
    },
    "options": [
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a group in a board",
        "action": "Delete a board group"
      },
      {
        "name": "Create",
        "value": "create",
        "description": "Create a group in a board",
        "action": "Create a board group"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get list of groups in a board",
        "action": "Get many board groups"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardGroup"
        ],
        "operation": [
          "create"
        ]
      }
    }
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
          "boardGroup"
        ]
      }
    },
    "default": "",
    "description": "The group name"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardGroup"
        ],
        "operation": [
          "delete"
        ]
      }
    }
  },
  {
    "displayName": "Group Name or ID",
    "name": "groupId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getGroups",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardGroup"
        ],
        "operation": [
          "delete"
        ]
      }
    }
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardGroup"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ]
      }
    },
    "options": [
      {
        "name": "Add Update",
        "value": "addUpdate",
        "description": "Add an update to an item",
        "action": "Add an update to an item"
      },
      {
        "name": "Change Column Value",
        "value": "changeColumnValue",
        "description": "Change a column value for a board item",
        "action": "Change a column value for a board item"
      },
      {
        "name": "Change Multiple Column Values",
        "value": "changeMultipleColumnValues",
        "description": "Change multiple column values for a board item",
        "action": "Change multiple column values for a board item"
      },
      {
        "name": "Create",
        "value": "create",
        "description": "Create an item in a board's group",
        "action": "Create an item in a board's group"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete an item",
        "action": "Delete an item"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get an item",
        "action": "Get an item"
      },
      {
        "name": "Get By Column Value",
        "value": "getByColumnValue",
        "description": "Get items by column value",
        "action": "Get items item by column value"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many items",
        "action": "Get many items"
      },
      {
        "name": "Move",
        "value": "move",
        "description": "Move item to group",
        "action": "Move an item to a group"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "addUpdate"
        ]
      }
    },
    "description": "The unique identifier of the item to add update to"
  },
  {
    "displayName": "Update Text",
    "name": "value",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "addUpdate"
        ]
      }
    },
    "description": "The update text to add"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeColumnValue"
        ]
      }
    },
    "description": "The unique identifier of the board. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeColumnValue"
        ]
      }
    },
    "description": "The unique identifier of the item to change column of"
  },
  {
    "displayName": "Column Name or ID",
    "name": "columnId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getColumns",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeColumnValue"
        ]
      }
    },
    "description": "The column's unique identifier. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Value",
    "name": "value",
    "type": "json",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeColumnValue"
        ]
      }
    },
    "description": "The column value in JSON format. Documentation can be found <a href=\"https://monday.com/developers/v2#mutations-section-columns-change-column-value\">here</a>."
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeMultipleColumnValues"
        ]
      }
    },
    "description": "The unique identifier of the board. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeMultipleColumnValues"
        ]
      }
    },
    "description": "Item's ID"
  },
  {
    "displayName": "Column Values",
    "name": "columnValues",
    "type": "json",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "changeMultipleColumnValues"
        ]
      }
    },
    "description": "The column fields and values in JSON format. Documentation can be found <a href=\"https://monday.com/developers/v2#mutations-section-columns-change-multiple-column-values\">here</a>.",
    "typeOptions": {
      "alwaysOpenEditWindow": true
    }
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Group Name or ID",
    "name": "groupId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getGroups",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "create"
        ]
      }
    }
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
          "boardItem"
        ]
      }
    },
    "default": "",
    "description": "The new item's name"
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
          "boardItem"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Column Values",
        "name": "columnValues",
        "type": "json",
        "typeOptions": {
          "alwaysOpenEditWindow": true
        },
        "default": "",
        "description": "The column values of the new item"
      }
    ]
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "description": "Item's ID"
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "Item's ID (Multiple can be added separated by comma)"
  },
  {
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Group Name or ID",
    "name": "groupId",
    "default": "",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getGroups",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
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
          "boardItem"
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
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getByColumnValue"
        ]
      }
    },
    "description": "The unique identifier of the board. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Column Name or ID",
    "name": "columnId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getColumns",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getByColumnValue"
        ]
      }
    },
    "description": "The column's unique identifier. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Column Value",
    "name": "columnValue",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getByColumnValue"
        ]
      }
    },
    "description": "The column value to search items by"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "getByColumnValue"
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
          "boardItem"
        ],
        "operation": [
          "getByColumnValue"
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
    "displayName": "Board Name or ID",
    "name": "boardId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getBoards"
    },
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "move"
        ]
      }
    }
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "move"
        ],
        "resource": [
          "boardItem"
        ]
      }
    },
    "default": "",
    "description": "The item's ID"
  },
  {
    "displayName": "Group Name or ID",
    "name": "groupId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getGroups",
      "loadOptionsDependsOn": [
        "boardId"
      ]
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "boardItem"
        ],
        "operation": [
          "move"
        ]
      }
    }
  }
]
```
