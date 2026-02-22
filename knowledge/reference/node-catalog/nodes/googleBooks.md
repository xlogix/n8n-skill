# Google Books

- Node name: `googleBooks`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Books/GoogleBooks.node.js`
- Node version: `[1,2]`
- Groups: `input`, `output`
- Description: Read data from Google Books

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googleApi` (required)
- `googleBooksOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Bookshelf (`bookshelf`)
- Bookshelf Volume (`bookshelfVolume`)
- Volume (`volume`)

### Operations
- resource `bookshelf`: `get`, `getAll`
- resource `bookshelfVolume`: `add`, `clear`, `getAll`, `move`, `remove`
- resource `volume`: `get`, `getAll`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `serviceAccount` |  |
| Authentication | `authentication` | `options` | no | `oAuth2` |  |
| Resource | `resource` | `options` | no | `bookshelf` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Operation | `operation` | `options` | no | `get` |  |
| My Library | `myLibrary` | `boolean` | yes | `false` |  |
| Search Query | `searchQuery` | `string` | yes |  | Full-text search query string |
| User ID | `userId` | `string` | yes |  | ID of user |
| Bookshelf ID | `shelfId` | `string` | yes |  | ID of the bookshelf |
| Bookshelf ID | `shelfId` | `string` | yes |  | ID of the bookshelf |
| Volume ID | `volumeId` | `string` | yes |  | ID of the volume |
| Volume Position | `volumePosition` | `string` | yes |  | Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on) |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `40` | Max number of results to return |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Service Account",
        "value": "serviceAccount"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "serviceAccount",
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    }
  },
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "OAuth2 (recommended)",
        "value": "oAuth2"
      },
      {
        "name": "Service Account",
        "value": "serviceAccount"
      }
    ],
    "default": "oAuth2",
    "displayOptions": {
      "show": {
        "@version": [
          2
        ]
      }
    }
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Bookshelf",
        "value": "bookshelf"
      },
      {
        "name": "Bookshelf Volume",
        "value": "bookshelfVolume"
      },
      {
        "name": "Volume",
        "value": "volume"
      }
    ],
    "default": "bookshelf"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Retrieve a specific bookshelf resource for the specified user",
        "action": "Get a bookshelf"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many public bookshelf resource for the specified user",
        "action": "Get many bookshelves"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "bookshelf"
        ]
      }
    },
    "default": "get"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Add",
        "value": "add",
        "description": "Add a volume to a bookshelf",
        "action": "Add a bookshelf volume"
      },
      {
        "name": "Clear",
        "value": "clear",
        "description": "Clears all volumes from a bookshelf",
        "action": "Clear a bookshelf volume"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many volumes in a specific bookshelf for the specified user",
        "action": "Get many bookshelf volumes"
      },
      {
        "name": "Move",
        "value": "move",
        "description": "Moves a volume within a bookshelf",
        "action": "Move a bookshelf volume"
      },
      {
        "name": "Remove",
        "value": "remove",
        "description": "Removes a volume from a bookshelf",
        "action": "Remove a bookshelf volume"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "bookshelfVolume"
        ]
      }
    },
    "default": "getAll"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a volume resource based on ID",
        "action": "Get a volume"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many volumes filtered by query",
        "action": "Get many volumes"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "volume"
        ]
      }
    },
    "default": "get"
  },
  {
    "displayName": "My Library",
    "name": "myLibrary",
    "type": "boolean",
    "default": false,
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "get",
          "getAll"
        ],
        "resource": [
          "bookshelf",
          "bookshelfVolume"
        ]
      }
    }
  },
  {
    "displayName": "Search Query",
    "name": "searchQuery",
    "type": "string",
    "description": "Full-text search query string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "getAll"
        ],
        "resource": [
          "volume"
        ]
      }
    }
  },
  {
    "displayName": "User ID",
    "name": "userId",
    "type": "string",
    "description": "ID of user",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "get",
          "getAll"
        ],
        "resource": [
          "bookshelf",
          "bookshelfVolume"
        ]
      },
      "hide": {
        "myLibrary": [
          true
        ]
      }
    }
  },
  {
    "displayName": "Bookshelf ID",
    "name": "shelfId",
    "type": "string",
    "description": "ID of the bookshelf",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "get",
          "add",
          "clear",
          "move",
          "remove"
        ],
        "resource": [
          "bookshelf",
          "bookshelfVolume"
        ]
      }
    }
  },
  {
    "displayName": "Bookshelf ID",
    "name": "shelfId",
    "type": "string",
    "description": "ID of the bookshelf",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "getAll"
        ],
        "resource": [
          "bookshelfVolume"
        ]
      }
    }
  },
  {
    "displayName": "Volume ID",
    "name": "volumeId",
    "type": "string",
    "description": "ID of the volume",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "add",
          "move",
          "remove",
          "get"
        ],
        "resource": [
          "bookshelfVolume",
          "volume"
        ]
      }
    }
  },
  {
    "displayName": "Volume Position",
    "name": "volumePosition",
    "type": "string",
    "description": "Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on)",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "move"
        ],
        "resource": [
          "bookshelfVolume"
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
      "maxValue": 40
    },
    "default": 40,
    "description": "Max number of results to return"
  }
]
```
