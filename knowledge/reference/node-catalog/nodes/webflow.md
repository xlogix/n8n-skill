# Webflow

- Node name: `webflow`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Webflow/Webflow.node.js`
- Node version: `[2]`
- Groups: `transform`
- Description: Consume the Webflow API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `webflowOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Item (`item`)

### Operations
- resource `item`: `create`, `deleteItem`, `get`, `getAll`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `item` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Site Name or ID | `siteId` | `options` | yes |  | ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Collection Name or ID | `collectionId` | `options` | yes |  | ID of the collection to add an item to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Live | `live` | `boolean` | yes | `false` | Whether the item should be published on the live site |
| Fields | `fieldsUi` | `fixedCollection` | no | `{}` |  |
| Site Name or ID | `siteId` | `options` | yes |  | ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Collection Name or ID | `collectionId` | `options` | yes |  | ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Item ID | `itemId` | `string` | yes |  | ID of the item to operate on |
| Site Name or ID | `siteId` | `options` | yes |  | ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Collection Name or ID | `collectionId` | `options` | yes |  | ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Item ID | `itemId` | `string` | yes |  | ID of the item to operate on |
| Site Name or ID | `siteId` | `options` | yes |  | ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Collection Name or ID | `collectionId` | `options` | yes |  | ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Site Name or ID | `siteId` | `options` | yes |  | ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Collection Name or ID | `collectionId` | `options` | yes |  | ID of the collection to add an item to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Item ID | `itemId` | `string` | yes |  | ID of the item to update |
| Live | `live` | `boolean` | yes | `false` | Whether the item should be published on the live site |
| Fields | `fieldsUi` | `fixedCollection` | no | `{}` |  |

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
        "name": "Item",
        "value": "item"
      }
    ],
    "default": "item"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "get",
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create an item"
      },
      {
        "name": "Delete",
        "value": "deleteItem",
        "action": "Delete an item"
      },
      {
        "name": "Get",
        "value": "get",
        "action": "Get an item"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many items"
      },
      {
        "name": "Update",
        "value": "update",
        "action": "Update an item"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ]
      }
    }
  },
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "default": "",
    "description": "ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Collection Name or ID",
    "name": "collectionId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getCollections",
      "loadOptionsDependsOn": [
        "siteId"
      ]
    },
    "default": "",
    "description": "ID of the collection to add an item to. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Live",
    "name": "live",
    "type": "boolean",
    "required": true,
    "default": false,
    "description": "Whether the item should be published on the live site",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Fields",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "fieldValues",
        "values": [
          {
            "displayName": "Field Name or ID",
            "name": "fieldId",
            "type": "options",
            "typeOptions": {
              "loadOptionsMethod": "getFields",
              "loadOptionsDependsOn": [
                "collectionId"
              ]
            },
            "default": "",
            "description": "Field to set for the item to create. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          },
          {
            "displayName": "Field Value",
            "name": "fieldValue",
            "type": "string",
            "default": "",
            "description": "Value to set for the item to create"
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "default": "",
    "description": "ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "deleteItem"
        ]
      }
    }
  },
  {
    "displayName": "Collection Name or ID",
    "name": "collectionId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getCollections",
      "loadOptionsDependsOn": [
        "siteId"
      ]
    },
    "default": "",
    "description": "ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "deleteItem"
        ]
      }
    }
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "required": true,
    "default": "",
    "description": "ID of the item to operate on",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "deleteItem"
        ]
      }
    }
  },
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "default": "",
    "description": "ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Collection Name or ID",
    "name": "collectionId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getCollections",
      "loadOptionsDependsOn": [
        "siteId"
      ]
    },
    "default": "",
    "description": "ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "required": true,
    "default": "",
    "description": "ID of the item to operate on",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "default": "",
    "description": "ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Collection Name or ID",
    "name": "collectionId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getCollections",
      "loadOptionsDependsOn": [
        "siteId"
      ]
    },
    "default": "",
    "description": "ID of the collection whose items to operate on. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
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
    "default": false,
    "description": "Whether to return all results or only up to a given limit",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "typeOptions": {
      "minValue": 1,
      "maxValue": 100
    },
    "displayOptions": {
      "show": {
        "returnAll": [
          false
        ],
        "resource": [
          "item"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "default": 100,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Site Name or ID",
    "name": "siteId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getSites"
    },
    "default": "",
    "description": "ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Collection Name or ID",
    "name": "collectionId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getCollections",
      "loadOptionsDependsOn": [
        "siteId"
      ]
    },
    "default": "",
    "description": "ID of the collection to add an item to. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "required": true,
    "default": "",
    "description": "ID of the item to update",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Live",
    "name": "live",
    "type": "boolean",
    "required": true,
    "default": false,
    "description": "Whether the item should be published on the live site",
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Fields",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "fieldValues",
        "values": [
          {
            "displayName": "Field Name or ID",
            "name": "fieldId",
            "type": "options",
            "typeOptions": {
              "loadOptionsMethod": "getFields",
              "loadOptionsDependsOn": [
                "collectionId"
              ]
            },
            "default": "",
            "description": "Field to set for the item to create. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          },
          {
            "displayName": "Field Value",
            "name": "fieldValue",
            "type": "string",
            "default": "",
            "description": "Value to set for the item to create"
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "item"
        ],
        "operation": [
          "update"
        ]
      }
    }
  }
]
```
