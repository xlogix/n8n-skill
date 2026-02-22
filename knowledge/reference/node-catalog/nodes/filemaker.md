# FileMaker

- Node name: `filemaker`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/FileMaker/FileMaker.node.js`
- Node version: `1`
- Groups: `input`
- Description: Retrieve data from the FileMaker data API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `fileMaker` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Action | `action` | `options` | no | `record` |  |
| Layout Name or ID | `layout` | `options` | yes |  | FileMaker Layout Name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Record ID | `recid` | `number` | yes |  | Internal Record ID returned by get (recordid) |
| Offset | `offset` | `number` | no | `1` | The record number of the first record in the range of records |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Get Portals | `getPortals` | `boolean` | no | `false` | Whether to get portal data as well |
| Portals Name or ID | `portals` | `options` | no | `[]` | The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Response Layout Name or ID | `responseLayout` | `options` | no |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Queries | `queries` | `fixedCollection` | no | `{}` |  |
| Sort Data? | `setSort` | `boolean` | no | `false` | Whether to sort data |
| Sort | `sortParametersUi` | `fixedCollection` | no | `{}` | Sort rules |
| Before Find Script | `setScriptBefore` | `boolean` | no | `false` | Whether to define a script to be run before the action specified by the API call and after the subsequent sort |
| Script Name or ID | `scriptBefore` | `options` | yes |  | The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Script Parameter | `scriptBeforeParam` | `string` | no |  | A parameter for the FileMaker script |
| Before Sort Script | `setScriptSort` | `boolean` | no | `false` | Whether to define a script to be run after the action specified by the API call but before the subsequent sort |
| Script Name or ID | `scriptSort` | `options` | yes |  | The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Script Parameter | `scriptSortParam` | `string` | no |  | A parameter for the FileMaker script |
| After Sort Script | `setScriptAfter` | `boolean` | no | `false` | Whether to define a script to be run after the action specified by the API call but before the subsequent sort |
| Script Name or ID | `scriptAfter` | `options` | yes |  | The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Script Parameter | `scriptAfterParam` | `string` | no |  | A parameter for the FileMaker script |
| Mod ID | `modId` | `number` | no |  | The last modification ID. When you use modId, a record is edited only when the modId matches. |
| Fields | `fieldsParametersUi` | `fixedCollection` | no | `{}` | Fields to define |
| Script Name or ID | `script` | `options` | yes |  | The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Script Parameter | `scriptParam` | `string` | no |  | A parameter for the FileMaker script |

## Full Parameter Schema
```json
[
  {
    "displayName": "Action",
    "name": "action",
    "type": "options",
    "default": "record",
    "options": [
      {
        "name": "Create Record",
        "value": "create"
      },
      {
        "name": "Delete Record",
        "value": "delete"
      },
      {
        "name": "Duplicate Record",
        "value": "duplicate"
      },
      {
        "name": "Edit Record",
        "value": "edit"
      },
      {
        "name": "Find Records",
        "value": "find"
      },
      {
        "name": "Get Records",
        "value": "records"
      },
      {
        "name": "Get Records By ID",
        "value": "record"
      },
      {
        "name": "Perform Script",
        "value": "performscript"
      }
    ]
  },
  {
    "displayName": "Layout Name or ID",
    "name": "layout",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getLayouts"
    },
    "options": [],
    "default": "",
    "required": true,
    "displayOptions": {},
    "placeholder": "Layout Name",
    "description": "FileMaker Layout Name. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Record ID",
    "name": "recid",
    "type": "number",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "action": [
          "record",
          "edit",
          "delete",
          "duplicate"
        ]
      }
    },
    "placeholder": "Record ID",
    "description": "Internal Record ID returned by get (recordid)"
  },
  {
    "displayName": "Offset",
    "name": "offset",
    "placeholder": "0",
    "description": "The record number of the first record in the range of records",
    "type": "number",
    "default": 1,
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "placeholder": "100",
    "description": "Max number of results to return",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "default": 100,
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Get Portals",
    "name": "getPortals",
    "type": "boolean",
    "default": false,
    "description": "Whether to get portal data as well",
    "displayOptions": {
      "show": {
        "action": [
          "record",
          "records",
          "find"
        ]
      }
    }
  },
  {
    "displayName": "Portals Name or ID",
    "name": "portals",
    "type": "options",
    "typeOptions": {
      "multipleValues": true,
      "multipleValueButtonText": "Add portal",
      "loadOptionsMethod": "getPortals"
    },
    "options": [],
    "default": [],
    "displayOptions": {
      "show": {
        "action": [
          "record",
          "records",
          "find"
        ],
        "getPortals": [
          true
        ]
      }
    },
    "placeholder": "Portals",
    "description": "The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Response Layout Name or ID",
    "name": "responseLayout",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getResponseLayouts"
    },
    "options": [],
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "find"
        ]
      }
    }
  },
  {
    "displayName": "Queries",
    "name": "queries",
    "placeholder": "Add query",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "action": [
          "find"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "query",
        "displayName": "Query",
        "values": [
          {
            "displayName": "Fields",
            "name": "fields",
            "placeholder": "Add field",
            "type": "fixedCollection",
            "default": {},
            "typeOptions": {
              "multipleValues": true
            },
            "options": [
              {
                "name": "field",
                "displayName": "Field",
                "values": [
                  {
                    "displayName": "Field Name or ID",
                    "name": "name",
                    "type": "options",
                    "default": "",
                    "typeOptions": {
                      "loadOptionsMethod": "getFields"
                    },
                    "options": [],
                    "description": "Search Field. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
                  },
                  {
                    "displayName": "Value",
                    "name": "value",
                    "type": "string",
                    "default": "",
                    "description": "Value to search"
                  }
                ]
              }
            ],
            "description": "Field Name"
          },
          {
            "displayName": "Omit",
            "name": "omit",
            "type": "boolean",
            "default": false
          }
        ]
      }
    ]
  },
  {
    "displayName": "Sort Data?",
    "name": "setSort",
    "type": "boolean",
    "default": false,
    "description": "Whether to sort data",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Sort",
    "name": "sortParametersUi",
    "placeholder": "Add Sort Rules",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "setSort": [
          true
        ],
        "action": [
          "find",
          "records"
        ]
      }
    },
    "description": "Sort rules",
    "default": {},
    "options": [
      {
        "name": "rules",
        "displayName": "Rules",
        "values": [
          {
            "displayName": "Field Name or ID",
            "name": "name",
            "type": "options",
            "default": "",
            "typeOptions": {
              "loadOptionsMethod": "getFields"
            },
            "options": [],
            "description": "Field Name. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          },
          {
            "displayName": "Order",
            "name": "value",
            "type": "options",
            "default": "ascend",
            "options": [
              {
                "name": "Ascend",
                "value": "ascend"
              },
              {
                "name": "Descend",
                "value": "descend"
              }
            ],
            "description": "Sort order"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Before Find Script",
    "name": "setScriptBefore",
    "type": "boolean",
    "default": false,
    "description": "Whether to define a script to be run before the action specified by the API call and after the subsequent sort",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Script Name or ID",
    "name": "scriptBefore",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getScripts"
    },
    "options": [],
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptBefore": [
          true
        ]
      }
    },
    "placeholder": "Script Name",
    "description": "The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Script Parameter",
    "name": "scriptBeforeParam",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptBefore": [
          true
        ]
      }
    },
    "placeholder": "Script Parameters",
    "description": "A parameter for the FileMaker script"
  },
  {
    "displayName": "Before Sort Script",
    "name": "setScriptSort",
    "type": "boolean",
    "default": false,
    "description": "Whether to define a script to be run after the action specified by the API call but before the subsequent sort",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Script Name or ID",
    "name": "scriptSort",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getScripts"
    },
    "options": [],
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptSort": [
          true
        ]
      }
    },
    "placeholder": "Script Name",
    "description": "The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Script Parameter",
    "name": "scriptSortParam",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptSort": [
          true
        ]
      }
    },
    "placeholder": "Script Parameters",
    "description": "A parameter for the FileMaker script"
  },
  {
    "displayName": "After Sort Script",
    "name": "setScriptAfter",
    "type": "boolean",
    "default": false,
    "description": "Whether to define a script to be run after the action specified by the API call but before the subsequent sort",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ]
      }
    }
  },
  {
    "displayName": "Script Name or ID",
    "name": "scriptAfter",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getScripts"
    },
    "options": [],
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptAfter": [
          true
        ]
      }
    },
    "placeholder": "Script Name",
    "description": "The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Script Parameter",
    "name": "scriptAfterParam",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "find",
          "record",
          "records"
        ],
        "setScriptAfter": [
          true
        ]
      }
    },
    "placeholder": "Script Parameters",
    "description": "A parameter for the FileMaker script"
  },
  {
    "displayName": "Mod ID",
    "name": "modId",
    "description": "The last modification ID. When you use modId, a record is edited only when the modId matches.",
    "type": "number",
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "edit"
        ]
      }
    }
  },
  {
    "displayName": "Fields",
    "name": "fieldsParametersUi",
    "placeholder": "Add field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "action": [
          "create",
          "edit"
        ]
      }
    },
    "description": "Fields to define",
    "default": {},
    "options": [
      {
        "name": "fields",
        "displayName": "Fields",
        "values": [
          {
            "displayName": "Field Name or ID",
            "name": "name",
            "type": "options",
            "default": "",
            "typeOptions": {
              "loadOptionsMethod": "getFields"
            },
            "options": [],
            "description": "Field Name. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Script Name or ID",
    "name": "script",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getScripts"
    },
    "options": [],
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "action": [
          "performscript"
        ]
      }
    },
    "placeholder": "Script Name",
    "description": "The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Script Parameter",
    "name": "scriptParam",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "action": [
          "performscript"
        ]
      }
    },
    "placeholder": "Script Parameters",
    "description": "A parameter for the FileMaker script"
  }
]
```
