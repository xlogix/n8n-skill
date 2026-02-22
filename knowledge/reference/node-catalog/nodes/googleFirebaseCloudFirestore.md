# Google Cloud Firestore

- Node name: `googleFirebaseCloudFirestore`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Firebase/CloudFirestore/GoogleFirebaseCloudFirestore.node.js`
- Node version: `[1,1.1]`
- Groups: `input`
- Description: Interact with Google Firebase - Cloud Firestore API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googleFirebaseCloudFirestoreOAuth2Api` (required)
- `googleApi` (required)

## Resource and Operation Coverage
### Resources
- Document (`document`)
- Collection (`collection`)

### Operations
- resource `collection`: `getAll`
- resource `document`: `create`, `delete`, `get`, `getAll`, `query`, `upsert`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `googleFirebaseCloudFirestoreOAuth2Api` |  |
| Resource | `resource` | `options` | no | `document` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Collection | `collection` | `string` | yes |  | Collection name |
| Document ID | `documentId` | `string` | no |  |  |
| Columns / Attributes | `columns` | `string` | yes |  | List of attributes to save |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Collection | `collection` | `string` | yes |  | Collection name |
| Document ID | `documentId` | `string` | yes |  |  |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Collection | `collection` | `string` | yes |  | Collection name |
| Return All | `returnAll` | `boolean` | yes | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Collection | `collection` | `string` | yes |  | Collection name |
| Document ID | `documentId` | `string` | yes |  |  |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Collection | `collection` | `string` | yes |  | Collection name |
| Update Key | `updateKey` | `string` | yes |  | Name of the field in an input item that contains the document ID |
| Columns /Attributes | `columns` | `string` | yes |  | Columns to insert |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Query JSON | `query` | `string` | yes |  | JSON query to execute |
| Simplify | `simple` | `boolean` | no | `true` | Whether to return a simplified version of the response instead of the raw data |
| Operation | `operation` | `options` | no | `getAll` |  |
| Project Name or ID | `projectId` | `options` | yes |  | As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Database | `database` | `string` | yes | `(default)` | Usually the provided default value will work |
| Return All | `returnAll` | `boolean` | yes | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "OAuth2 (recommended)",
        "value": "googleFirebaseCloudFirestoreOAuth2Api"
      },
      {
        "name": "Service Account",
        "value": "serviceAccount"
      }
    ],
    "default": "googleFirebaseCloudFirestoreOAuth2Api"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Document",
        "value": "document"
      },
      {
        "name": "Collection",
        "value": "collection"
      }
    ],
    "default": "document"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a document",
        "action": "Create a document"
      },
      {
        "name": "Create or Update",
        "value": "upsert",
        "description": "Create a new document, or update the current one if it already exists (upsert)",
        "action": "Create or update a document"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a document",
        "action": "Delete a document"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a document",
        "action": "Get a document"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many documents from a collection",
        "action": "Get many documents"
      },
      {
        "name": "Query",
        "value": "query",
        "description": "Runs a query against your documents",
        "action": "Query a document"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Collection",
    "name": "collection",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "description": "Collection name",
    "required": true
  },
  {
    "displayName": "Document ID",
    "name": "documentId",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Columns / Attributes",
    "name": "columns",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "description": "List of attributes to save",
    "required": true,
    "placeholder": "productId, modelName, description"
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Collection",
    "name": "collection",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "Collection name",
    "required": true
  },
  {
    "displayName": "Document ID",
    "name": "documentId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": "",
    "required": true
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Collection",
    "name": "collection",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Collection name",
    "required": true
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Whether to return all results or only up to a given limit",
    "required": true
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
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
      "maxValue": 500
    },
    "default": 100,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "getAll"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Collection",
    "name": "collection",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "description": "Collection name",
    "required": true
  },
  {
    "displayName": "Document ID",
    "name": "documentId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "delete"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": "",
    "required": true
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Collection",
    "name": "collection",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "description": "Collection name",
    "required": true
  },
  {
    "displayName": "Update Key",
    "name": "updateKey",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "default": "",
    "description": "Name of the field in an input item that contains the document ID",
    "required": true,
    "placeholder": "documentId"
  },
  {
    "displayName": "Columns /Attributes",
    "name": "columns",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "description": "Columns to insert",
    "required": true,
    "placeholder": "age, city, location"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "query"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "query"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Query JSON",
    "name": "query",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "document"
        ],
        "operation": [
          "query"
        ]
      }
    },
    "description": "JSON query to execute",
    "required": true,
    "placeholder": "{\"structuredQuery\": {\"where\": {\"fieldFilter\": {\"field\": {\"fieldPath\": \"age\"},\"op\": \"EQUAL\", \"value\": {\"integerValue\": 28}}}, \"from\": [{\"collectionId\": \"users-collection\"}]}}"
  },
  {
    "displayName": "Simplify",
    "name": "simple",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "query"
        ],
        "resource": [
          "document"
        ]
      }
    },
    "default": true,
    "description": "Whether to return a simplified version of the response instead of the raw data"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "collection"
        ]
      }
    },
    "options": [
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many root collections",
        "action": "Get many collections"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Project Name or ID",
    "name": "projectId",
    "type": "options",
    "default": "",
    "typeOptions": {
      "loadOptionsMethod": "getProjects"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "collection"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true
  },
  {
    "displayName": "Database",
    "name": "database",
    "type": "string",
    "default": "(default)",
    "displayOptions": {
      "show": {
        "resource": [
          "collection"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Usually the provided default value will work",
    "required": true
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "collection"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Whether to return all results or only up to a given limit",
    "required": true
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "collection"
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
      "maxValue": 500
    },
    "default": 100,
    "description": "Max number of results to return"
  }
]
```
