# Microsoft OneDrive

- Node name: `microsoftOneDrive`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Microsoft/OneDrive/MicrosoftOneDrive.node.js`
- Node version: `[1,1.1]`
- Groups: `input`
- Description: Consume Microsoft OneDrive API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `microsoftOneDriveOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- File (`file`)
- Folder (`folder`)

### Operations
- resource `file`: `copy`, `delete`, `download`, `get`, `rename`, `search`, `share`, `upload`
- resource `folder`: `create`, `delete`, `getChildren`, `rename`, `search`, `share`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `file` |  |
| Operation | `operation` | `options` | no | `upload` |  |
| File ID | `fileId` | `string` | no |  |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Parent Reference | `parentReference` | `collection` | no | `{}` | Reference to the parent item the copy will be created in <a href="https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/itemreference?view=odsp-graph-online"> Details </a> |
| File ID | `fileId` | `string` | no |  | Field ID |
| File ID | `fileId` | `string` | no |  |  |
| Put Output File in Field | `binaryPropertyName` | `string` | yes | `data` |  |
| File ID | `fileId` | `string` | no |  | Field ID |
| Item ID | `itemId` | `string` | no |  | ID of the file |
| New Name | `newName` | `string` | no |  | New name for file |
| Query | `query` | `string` | no |  | The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content. |
| File ID | `fileId` | `string` | no |  |  |
| Type | `type` | `options` | no |  | The type of sharing link to create |
| Scope | `scope` | `options` | no |  | The type of sharing link to create |
| File Name | `fileName` | `string` | no |  | The name the file should be saved as |
| Parent ID | `parentId` | `string` | yes |  | ID of the parent folder that will contain the file |
| Binary File | `binaryData` | `boolean` | yes | `false` | Whether the data to upload should be taken from binary field |
| File Content | `fileContent` | `string` | yes |  | The text content of the file |
| Input Binary Field | `binaryPropertyName` | `string` | yes | `data` |  |
| Operation | `operation` | `options` | no | `getChildren` |  |
| Name | `name` | `string` | yes |  | The name or path of the folder |
| Options | `options` | `collection` | no | `{}` |  |
| Folder ID | `folderId` | `string` | no |  |  |
| Item ID | `itemId` | `string` | no |  | ID of the folder |
| New Name | `newName` | `string` | no |  | New name for folder |
| Query | `query` | `string` | no |  | The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content. |
| Folder ID | `folderId` | `string` | no |  | File ID |
| Type | `type` | `options` | no |  | The type of sharing link to create |
| Scope | `scope` | `options` | no |  | The type of sharing link to create |

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
        "name": "File",
        "value": "file"
      },
      {
        "name": "Folder",
        "value": "folder"
      }
    ],
    "default": "file"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "file"
        ]
      }
    },
    "options": [
      {
        "name": "Copy",
        "value": "copy",
        "description": "Copy a file",
        "action": "Copy a file"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a file",
        "action": "Delete a file"
      },
      {
        "name": "Download",
        "value": "download",
        "description": "Download a file",
        "action": "Download a file"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a file",
        "action": "Get a file"
      },
      {
        "name": "Rename",
        "value": "rename",
        "description": "Rename a file",
        "action": "Rename a file"
      },
      {
        "name": "Search",
        "value": "search",
        "description": "Search a file",
        "action": "Search a file"
      },
      {
        "name": "Share",
        "value": "share",
        "description": "Share a file",
        "action": "Share a file"
      },
      {
        "name": "Upload",
        "value": "upload",
        "description": "Upload a file up to 4MB in size",
        "action": "Upload a file"
      }
    ],
    "default": "upload"
  },
  {
    "displayName": "File ID",
    "name": "fileId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "copy"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "copy"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "The new name for the copy. If this isn't provided, the same name will be used as the original."
      }
    ]
  },
  {
    "displayName": "Parent Reference",
    "name": "parentReference",
    "type": "collection",
    "placeholder": "Add Parent Reference",
    "description": "Reference to the parent item the copy will be created in <a href=\"https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/itemreference?view=odsp-graph-online\"> Details </a>",
    "displayOptions": {
      "show": {
        "operation": [
          "copy"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Drive ID",
        "name": "driveId",
        "type": "string",
        "default": "",
        "description": "Identifier of the drive instance that contains the item"
      },
      {
        "displayName": "Drive Type",
        "name": "driveType",
        "type": "string",
        "default": "",
        "description": "Identifies the type of drive"
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "default": "",
        "description": "Identifier of the item in the drive"
      },
      {
        "displayName": "List ID",
        "name": "listId",
        "type": "string",
        "default": "",
        "description": "Identifier of the list"
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "The name of the item being referenced"
      },
      {
        "displayName": "Path",
        "name": "path",
        "type": "string",
        "default": "",
        "description": "Path that can be used to navigate to the item"
      },
      {
        "displayName": "Share ID",
        "name": "shareId",
        "type": "string",
        "default": "",
        "description": "Identifier for a shared resource that can be accessed via the Shares API"
      },
      {
        "displayName": "Site ID",
        "name": "siteId",
        "type": "string",
        "default": "",
        "description": "Identifier of the site"
      }
    ]
  },
  {
    "displayName": "File ID",
    "name": "fileId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "delete"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "Field ID"
  },
  {
    "displayName": "File ID",
    "name": "fileId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "download"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Put Output File in Field",
    "name": "binaryPropertyName",
    "type": "string",
    "required": true,
    "default": "data",
    "displayOptions": {
      "show": {
        "operation": [
          "download"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "hint": "The name of the output binary field to put the file in"
  },
  {
    "displayName": "File ID",
    "name": "fileId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "Field ID"
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "rename"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "ID of the file"
  },
  {
    "displayName": "New Name",
    "name": "newName",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "rename"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "New name for file"
  },
  {
    "displayName": "Query",
    "name": "query",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "search"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content."
  },
  {
    "displayName": "File ID",
    "name": "fileId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "options": [
      {
        "name": "View",
        "value": "view"
      },
      {
        "name": "Edit",
        "value": "edit"
      },
      {
        "name": "Embed",
        "value": "embed"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "The type of sharing link to create"
  },
  {
    "displayName": "Scope",
    "name": "scope",
    "type": "options",
    "options": [
      {
        "name": "Anonymous",
        "value": "anonymous"
      },
      {
        "name": "Organization",
        "value": "organization"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "The type of sharing link to create"
  },
  {
    "displayName": "File Name",
    "name": "fileName",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "The name the file should be saved as"
  },
  {
    "displayName": "Parent ID",
    "name": "parentId",
    "required": true,
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "default": "",
    "description": "ID of the parent folder that will contain the file"
  },
  {
    "displayName": "Binary File",
    "name": "binaryData",
    "type": "boolean",
    "default": false,
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "description": "Whether the data to upload should be taken from binary field"
  },
  {
    "displayName": "File Content",
    "name": "fileContent",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "binaryData": [
          false
        ],
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "placeholder": "",
    "description": "The text content of the file"
  },
  {
    "displayName": "Input Binary Field",
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "displayOptions": {
      "show": {
        "binaryData": [
          true
        ],
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "placeholder": "",
    "hint": "The name of the input binary field containing the file to be written"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "folder"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a folder",
        "action": "Create a folder"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a folder",
        "action": "Delete a folder"
      },
      {
        "name": "Get Children",
        "value": "getChildren",
        "description": "Get items inside a folder",
        "action": "Get items in a folder"
      },
      {
        "name": "Rename",
        "value": "rename",
        "description": "Rename a folder",
        "action": "Rename a folder"
      },
      {
        "name": "Search",
        "value": "search",
        "description": "Search a folder",
        "action": "Search a folder"
      },
      {
        "name": "Share",
        "value": "share",
        "description": "Share a folder",
        "action": "Share a folder"
      }
    ],
    "default": "getChildren"
  },
  {
    "displayName": "Name",
    "name": "name",
    "required": true,
    "type": "string",
    "placeholder": "/Pictures/2021",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "The name or path of the folder"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": {},
    "placeholder": "Add Field",
    "options": [
      {
        "displayName": "Parent Folder ID",
        "name": "parentFolderId",
        "type": "string",
        "default": "",
        "description": "ID of the folder you want to crate the new folder in"
      }
    ]
  },
  {
    "displayName": "Folder ID",
    "name": "folderId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "delete",
          "getChildren"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Item ID",
    "name": "itemId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "rename"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "ID of the folder"
  },
  {
    "displayName": "New Name",
    "name": "newName",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "rename"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "New name for folder"
  },
  {
    "displayName": "Query",
    "name": "query",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "search"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content."
  },
  {
    "displayName": "Folder ID",
    "name": "folderId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "File ID"
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "options": [
      {
        "name": "View",
        "value": "view"
      },
      {
        "name": "Edit",
        "value": "edit"
      },
      {
        "name": "Embed",
        "value": "embed"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "The type of sharing link to create"
  },
  {
    "displayName": "Scope",
    "name": "scope",
    "type": "options",
    "options": [
      {
        "name": "Anonymous",
        "value": "anonymous"
      },
      {
        "name": "Organization",
        "value": "organization"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "share"
        ],
        "resource": [
          "folder"
        ]
      }
    },
    "default": "",
    "description": "The type of sharing link to create"
  }
]
```
