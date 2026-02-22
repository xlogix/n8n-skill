# Microsoft Excel 365

- Node name: `microsoftExcel`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Microsoft/Excel/MicrosoftExcel.node.js`
- Node version: `[2,2.1,2.2]`
- Groups: `input`
- Description: Consume Microsoft Excel API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `microsoftExcelOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Table (`table`) - Represents an Excel table
- Workbook (`workbook`) - A workbook is the top level object which contains one or more worksheets
- Sheet (`worksheet`) - A sheet is a grid of cells which can contain data, tables, charts, etc

### Operations
- resource `table`: `addTable`, `append`, `convertToRange`, `deleteTable`, `getColumns`, `getRows`, `lookup`
- resource `workbook`: `addWorksheet`, `deleteWorkbook`, `getAll`
- resource `worksheet`: `append`, `clear`, `deleteWorksheet`, `getAll`, `readRows`, `update`, `upsert`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| This node connects to the Microsoft 365 cloud platform. Use the 'Extract from File' and 'Convert to File' nodes to directly manipulate spreadsheet files (.xls, .csv, etc). <a href="https://n8n.io/workflows/890-read-in-an-excel-spreadsheet-file/" target="_blank">More info</a>. | `notice` | `notice` | no |  |  |
| Resource | `resource` | `options` | no | `workbook` |  |
| Operation | `operation` | `options` | no | `append` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Data Mode | `dataMode` | `options` | no | `define` |  |
| Data | `data` | `json` | yes |  | Raw values for the specified range as array of string arrays in JSON format |
| Values to Send | `fieldsUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Select Range | `selectRange` | `options` | no | `auto` |  |
| Range | `range` | `string` | no |  | The range of cells that will be converted to a table |
| Has Headers | `hasHeaders` | `boolean` | no | `true` | Whether the range has column labels. When this property set to false Excel will automatically generate header shifting the data down by one row. |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| RAW Data | `rawData` | `boolean` | no | `false` | Whether the data should be returned RAW instead of parsed into keys according to their header |
| Data Property | `dataProperty` | `string` | no | `data` | The name of the property into which to write the RAW data |
| Filters | `filters` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| RAW Data | `rawData` | `boolean` | no | `false` | Whether the data should be returned RAW instead of parsed into keys according to their header |
| Data Property | `dataProperty` | `string` | no | `data` | The name of the property into which to write the RAW data |
| Filters | `filters` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Table | `table` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Lookup Column | `lookupColumn` | `string` | yes |  | The name of the column in which to look for value |
| Lookup Value | `lookupValue` | `string` | yes |  | The value to look for in column |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Options | `additionalFields` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Data Mode | `dataMode` | `options` | no | `define` |  |
| Data | `data` | `json` | yes |  | Raw values for the specified range as array of string arrays in JSON format |
| Values to Send | `fieldsUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Apply To | `applyTo` | `options` | no | `All` |  |
| Select a Range | `useRange` | `boolean` | no | `false` |  |
| Range | `range` | `string` | no |  | The sheet range that would be cleared, specified using a A1-style notation |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Select a Range | `useRange` | `boolean` | no | `false` |  |
| Range | `range` | `string` | no |  | The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported |
| Header Row | `keyRow` | `number` | no | `0` | Relative to selected 'Range', first row index is 0 |
| First Data Row | `dataStartRow` | `number` | no | `1` | Relative to selected 'Range', first row index is 0 |
| Options | `options` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Select a Range | `useRange` | `boolean` | no | `false` |  |
| Range | `range` | `string` | no |  | The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported. Leave blank to use whole used range in the sheet. |
| Range | `range` | `string` | no |  | The sheet range to read the data from specified using a A1-style notation |
| Data Mode | `dataMode` | `options` | no | `define` |  |
| Data | `data` | `json` | yes |  | Raw values for the specified range as array of string arrays in JSON format. Should match the specified range: one array item for each row. |
| Column to match on | `columnToMatchOn` | `options` | no |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Value of Column to Match On | `valueToMatchOn` | `string` | no |  |  |
| Values to Send | `fieldsUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Workbook | `workbook` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Sheet | `worksheet` | `resourceLocator` | yes | `{"mode":"list","value":""}` |  |
| Select a Range | `useRange` | `boolean` | no | `false` |  |
| Range | `range` | `string` | no |  | The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported. Leave blank to use whole used range in the sheet. |
| Data Mode | `dataMode` | `options` | no | `define` |  |
| Column to match on | `columnToMatchOn` | `options` | no |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Value of Column to Match On | `valueToMatchOn` | `string` | no |  |  |
| Values to Send | `fieldsUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "This node connects to the Microsoft 365 cloud platform. Use the 'Extract from File' and 'Convert to File' nodes to directly manipulate spreadsheet files (.xls, .csv, etc). <a href=\"https://n8n.io/workflows/890-read-in-an-excel-spreadsheet-file/\" target=\"_blank\">More info</a>.",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Table",
        "value": "table",
        "description": "Represents an Excel table"
      },
      {
        "name": "Workbook",
        "value": "workbook",
        "description": "A workbook is the top level object which contains one or more worksheets"
      },
      {
        "name": "Sheet",
        "value": "worksheet",
        "description": "A sheet is a grid of cells which can contain data, tables, charts, etc"
      }
    ],
    "default": "workbook"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ]
      }
    },
    "options": [
      {
        "name": "Append",
        "value": "append",
        "description": "Add rows to the end of the table",
        "action": "Append rows to table"
      },
      {
        "name": "Convert to Range",
        "value": "convertToRange",
        "description": "Convert a table to a range",
        "action": "Convert to range"
      },
      {
        "name": "Create",
        "value": "addTable",
        "description": "Add a table based on range",
        "action": "Create a table"
      },
      {
        "name": "Delete",
        "value": "deleteTable",
        "description": "Delete a table",
        "action": "Delete a table"
      },
      {
        "name": "Get Columns",
        "value": "getColumns",
        "description": "Retrieve a list of table columns",
        "action": "Get columns"
      },
      {
        "name": "Get Rows",
        "value": "getRows",
        "description": "Retrieve a list of table rows",
        "action": "Get rows"
      },
      {
        "name": "Lookup",
        "value": "lookup",
        "description": "Look for rows that match a given value in a column",
        "action": "Lookup a column"
      }
    ],
    "default": "append"
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Data Mode",
    "name": "dataMode",
    "type": "options",
    "default": "define",
    "options": [
      {
        "name": "Auto-Map Input Data to Columns",
        "value": "autoMap",
        "description": "Use when node input properties match destination column names"
      },
      {
        "name": "Map Each Column Below",
        "value": "define",
        "description": "Set the value for each destination column"
      },
      {
        "name": "Raw",
        "value": "raw",
        "description": "Send raw data as JSON"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Data",
    "name": "data",
    "type": "json",
    "default": "",
    "required": true,
    "placeholder": "e.g. [[\"Sara\",\"1/2/2006\",\"Berlin\"],[\"George\",\"5/3/2010\",\"Paris\"]]",
    "description": "Raw values for the specified range as array of string arrays in JSON format",
    "displayOptions": {
      "show": {
        "dataMode": [
          "raw"
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Values to Send",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "values",
        "values": [
          {
            "displayName": "Column",
            "name": "column",
            "type": "options",
            "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
            "typeOptions": {
              "loadOptionsDependsOn": [
                "table.value",
                "worksheet.value",
                "workbook.value"
              ],
              "loadOptionsMethod": "getTableColumns"
            },
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "fieldValue",
            "type": "string",
            "default": "",
            "requiresDataPath": "single"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Index",
        "name": "index",
        "type": "number",
        "default": 0,
        "typeOptions": {
          "minValue": 0
        },
        "description": "Specifies the relative position of the new row. If not defined, the addition happens at the end. Any row below the inserted row will be shifted downwards. First row index is 0."
      },
      {
        "displayName": "RAW Data",
        "name": "rawData",
        "type": "boolean",
        "default": 0,
        "description": "Whether the data should be returned RAW instead of parsed into keys according to their header"
      },
      {
        "displayName": "Data Property",
        "name": "dataProperty",
        "type": "string",
        "default": "data",
        "required": true,
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        },
        "description": "The name of the property into which to write the RAW data"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "addTable"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "addTable"
        ]
      }
    }
  },
  {
    "displayName": "Select Range",
    "name": "selectRange",
    "type": "options",
    "options": [
      {
        "name": "Automatically",
        "value": "auto",
        "description": "The whole used range on the selected sheet will be converted into a table"
      },
      {
        "name": "Manually",
        "value": "manual",
        "description": "Select a range that will be converted into a table"
      }
    ],
    "default": "auto",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "addTable"
        ]
      }
    }
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "default": "",
    "placeholder": "A1:B2",
    "description": "The range of cells that will be converted to a table",
    "displayOptions": {
      "show": {
        "selectRange": [
          "manual"
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "addTable"
        ]
      }
    }
  },
  {
    "displayName": "Has Headers",
    "name": "hasHeaders",
    "type": "boolean",
    "default": true,
    "description": "Whether the range has column labels. When this property set to false Excel will automatically generate header shifting the data down by one row.",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "addTable"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "convertToRange"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "convertToRange"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "convertToRange"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "deleteTable"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "deleteTable"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "deleteTable"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
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
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "returnAll": [
          false
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
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
    "displayName": "RAW Data",
    "name": "rawData",
    "type": "boolean",
    "default": false,
    "description": "Whether the data should be returned RAW instead of parsed into keys according to their header",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    }
  },
  {
    "displayName": "Data Property",
    "name": "dataProperty",
    "type": "string",
    "default": "data",
    "displayOptions": {
      "show": {
        "rawData": [
          true
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    },
    "description": "The name of the property into which to write the RAW data"
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "displayOptions": {
      "show": {
        "rawData": [
          true
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "getColumns"
        ]
      }
    },
    "options": [
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "A comma-separated list of the fields to include in the response"
      }
    ]
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
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
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "returnAll": [
          false
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
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
    "displayName": "RAW Data",
    "name": "rawData",
    "type": "boolean",
    "default": false,
    "description": "Whether the data should be returned RAW instead of parsed into keys according to their header",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    }
  },
  {
    "displayName": "Data Property",
    "name": "dataProperty",
    "type": "string",
    "default": "data",
    "displayOptions": {
      "show": {
        "rawData": [
          true
        ],
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    },
    "description": "The name of the property into which to write the RAW data"
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "A comma-separated list of the fields to include in the response",
        "displayOptions": {
          "show": {
            "/rawData": [
              true
            ]
          }
        }
      },
      {
        "displayName": "Column Names or IDs",
        "name": "column",
        "type": "multiOptions",
        "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
        "typeOptions": {
          "loadOptionsDependsOn": [
            "table.value",
            "worksheet.value",
            "workbook.value"
          ],
          "loadOptionsMethod": "getTableColumns"
        },
        "default": [],
        "displayOptions": {
          "show": {
            "/rawData": [
              false
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "getRows"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
        ]
      }
    }
  },
  {
    "displayName": "Table",
    "name": "table",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetTables"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Table ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
        ]
      }
    }
  },
  {
    "displayName": "Lookup Column",
    "name": "lookupColumn",
    "type": "string",
    "default": "",
    "placeholder": "Email",
    "required": true,
    "description": "The name of the column in which to look for value",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
        ]
      }
    }
  },
  {
    "displayName": "Lookup Value",
    "name": "lookupValue",
    "type": "string",
    "default": "",
    "placeholder": "frank@example.com",
    "required": true,
    "description": "The value to look for in column",
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Return All Matches",
        "name": "returnAllMatches",
        "type": "boolean",
        "default": false,
        "description": "By default only the first result gets returned. If options gets set all found matches get returned."
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "table"
        ],
        "operation": [
          "lookup"
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
          "workbook"
        ]
      }
    },
    "options": [
      {
        "name": "Add Sheet",
        "value": "addWorksheet",
        "description": "Add a new sheet to the workbook",
        "action": "Add a sheet to a workbook"
      },
      {
        "name": "Delete",
        "value": "deleteWorkbook",
        "description": "Delete workbook",
        "action": "Delete workbook"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get workbooks",
        "action": "Get workbooks"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "workbook"
        ],
        "operation": [
          "addWorksheet"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "The name of the sheet to be added. The name should be unique. If not specified, Excel will determine the name of the new worksheet."
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "workbook"
        ],
        "operation": [
          "addWorksheet"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "workbook"
        ],
        "operation": [
          "deleteWorkbook"
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
          "workbook"
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
    "displayOptions": {
      "show": {
        "returnAll": [
          false
        ],
        "resource": [
          "workbook"
        ],
        "operation": [
          "getAll"
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
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "A comma-separated list of the fields to include in the response"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "workbook"
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
          "worksheet"
        ]
      }
    },
    "options": [
      {
        "name": "Append",
        "value": "append",
        "description": "Append data to sheet",
        "action": "Append data to sheet"
      },
      {
        "name": "Append or Update",
        "value": "upsert",
        "description": "Append a new row or update the current one if it already exists (upsert)",
        "action": "Append or update a sheet"
      },
      {
        "name": "Clear",
        "value": "clear",
        "description": "Clear sheet",
        "action": "Clear sheet"
      },
      {
        "name": "Delete",
        "value": "deleteWorksheet",
        "description": "Delete sheet",
        "action": "Delete sheet"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get a list of sheets",
        "action": "Get sheets"
      },
      {
        "name": "Get Rows",
        "value": "readRows",
        "description": "Retrieve a list of sheet rows",
        "action": "Get rows from sheet"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update rows of a sheet or sheet range",
        "action": "Update sheet"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Data Mode",
    "name": "dataMode",
    "type": "options",
    "default": "define",
    "options": [
      {
        "name": "Auto-Map Input Data to Columns",
        "value": "autoMap",
        "description": "Use when node input properties match destination column names"
      },
      {
        "name": "Map Each Column Below",
        "value": "define",
        "description": "Set the value for each destination column"
      },
      {
        "name": "Raw",
        "value": "raw",
        "description": "Send raw data as JSON"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Data",
    "name": "data",
    "type": "json",
    "default": "",
    "required": true,
    "placeholder": "e.g. [[\"Sara\",\"1/2/2006\",\"Berlin\"],[\"George\",\"5/3/2010\",\"Paris\"]]",
    "description": "Raw values for the specified range as array of string arrays in JSON format",
    "displayOptions": {
      "show": {
        "dataMode": [
          "raw"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Values to Send",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "values",
        "values": [
          {
            "displayName": "Column",
            "name": "column",
            "type": "options",
            "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
            "typeOptions": {
              "loadOptionsDependsOn": [
                "worksheet.value"
              ],
              "loadOptionsMethod": "getWorksheetColumnRow"
            },
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "fieldValue",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "RAW Data",
        "name": "rawData",
        "type": "boolean",
        "default": 0,
        "description": "Whether the data should be returned RAW instead of parsed into keys according to their header"
      },
      {
        "displayName": "Data Property",
        "name": "dataProperty",
        "type": "string",
        "default": "data",
        "required": true,
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        },
        "description": "The name of the property into which to write the RAW data"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "append"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "clear"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "clear"
        ]
      }
    }
  },
  {
    "displayName": "Apply To",
    "name": "applyTo",
    "type": "options",
    "options": [
      {
        "name": "All",
        "value": "All",
        "description": "Clear data in cells and remove all formatting"
      },
      {
        "name": "Formats",
        "value": "Formats",
        "description": "Clear formatting(e.g. font size, color) of cells"
      },
      {
        "name": "Contents",
        "value": "Contents",
        "description": "Clear data contained in cells"
      }
    ],
    "default": "All",
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "clear"
        ]
      }
    }
  },
  {
    "displayName": "Select a Range",
    "name": "useRange",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "clear"
        ]
      }
    }
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "displayOptions": {
      "show": {
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "clear"
        ]
      }
    },
    "placeholder": "e.g. A1:B2",
    "default": "",
    "description": "The sheet range that would be cleared, specified using a A1-style notation",
    "hint": "Leave blank for entire worksheet"
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "deleteWorksheet"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "deleteWorksheet"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
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
          "worksheet"
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
    "displayOptions": {
      "show": {
        "returnAll": [
          false
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "getAll"
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
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "options": [
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "A comma-separated list of the fields to include in the response"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Select a Range",
    "name": "useRange",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "placeholder": "e.g. A1:B2",
    "default": "",
    "description": "The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported",
    "hint": "Leave blank to return entire sheet",
    "displayOptions": {
      "show": {
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Header Row",
    "name": "keyRow",
    "type": "number",
    "typeOptions": {
      "minValue": 0
    },
    "default": 0,
    "hint": "Index of the row which contains the column names",
    "description": "Relative to selected 'Range', first row index is 0",
    "displayOptions": {
      "show": {
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "First Data Row",
    "name": "dataStartRow",
    "type": "number",
    "typeOptions": {
      "minValue": 0
    },
    "default": 1,
    "hint": "Index of first row which contains the actual data",
    "description": "Relative to selected 'Range', first row index is 0",
    "displayOptions": {
      "show": {
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "RAW Data",
        "name": "rawData",
        "type": "boolean",
        "default": 0,
        "description": "Whether the data should be returned RAW instead of parsed into keys according to their header"
      },
      {
        "displayName": "Data Property",
        "name": "dataProperty",
        "type": "string",
        "default": "data",
        "required": true,
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        },
        "description": "The name of the property into which to write the RAW data"
      },
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "Fields the response will containt. Multiple can be added separated by ,.",
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "readRows"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Select a Range",
    "name": "useRange",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "displayOptions": {
      "show": {
        "dataMode": [
          "autoMap",
          "define"
        ],
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "placeholder": "e.g. A1:B2",
    "default": "",
    "description": "The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported. Leave blank to use whole used range in the sheet.",
    "hint": "First row must contain column names"
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "displayOptions": {
      "show": {
        "dataMode": [
          "raw"
        ],
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "placeholder": "e.g. A1:B2",
    "default": "",
    "description": "The sheet range to read the data from specified using a A1-style notation",
    "hint": "Leave blank for entire worksheet"
  },
  {
    "displayName": "Data Mode",
    "name": "dataMode",
    "type": "options",
    "default": "define",
    "options": [
      {
        "name": "Auto-Map Input Data to Columns",
        "value": "autoMap",
        "description": "Use when node input properties match destination column names"
      },
      {
        "name": "Map Each Column Below",
        "value": "define",
        "description": "Set the value for each destination column"
      },
      {
        "name": "Raw",
        "value": "raw",
        "description": "Send raw data as JSON, the whole selected range would be updated with the new values"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Data",
    "name": "data",
    "type": "json",
    "default": "",
    "required": true,
    "placeholder": "e.g. [[\"Sara\",\"1/2/2006\",\"Berlin\"],[\"George\",\"5/3/2010\",\"Paris\"]]",
    "description": "Raw values for the specified range as array of string arrays in JSON format. Should match the specified range: one array item for each row.",
    "displayOptions": {
      "show": {
        "dataMode": [
          "raw"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Column to match on",
    "name": "columnToMatchOn",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsDependsOn": [
        "worksheet.value",
        "workbook.value",
        "range"
      ],
      "loadOptionsMethod": "getWorksheetColumnRow"
    },
    "default": "",
    "hint": "Used to find the correct row to update. Doesn't get changed.",
    "displayOptions": {
      "show": {
        "dataMode": [
          "autoMap",
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Value of Column to Match On",
    "name": "valueToMatchOn",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Values to Send",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "values",
        "values": [
          {
            "displayName": "Column",
            "name": "column",
            "type": "options",
            "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
            "typeOptions": {
              "loadOptionsDependsOn": [
                "columnToMatchOn",
                "range"
              ],
              "loadOptionsMethod": "getWorksheetColumnRowSkipColumnToMatchOn"
            },
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "fieldValue",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "RAW Data",
        "name": "rawData",
        "type": "boolean",
        "default": 0,
        "description": "Whether the data should be returned RAW instead of parsed into keys according to their header"
      },
      {
        "displayName": "Data Property",
        "name": "dataProperty",
        "type": "string",
        "default": "data",
        "required": true,
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        },
        "description": "The name of the property into which to write the RAW data"
      },
      {
        "displayName": "Fields",
        "name": "fields",
        "type": "string",
        "default": "",
        "description": "Fields the response will containt. Multiple can be added separated by ,.",
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        }
      },
      {
        "displayName": "Update All Matches",
        "name": "updateAll",
        "type": "boolean",
        "default": false,
        "description": "Whether to update all matching rows or just the first match",
        "displayOptions": {
          "hide": {
            "/dataMode": [
              "raw"
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Workbook",
    "name": "workbook",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchWorkbooks",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[a-zA-Z0-9]{2,}",
              "errorMessage": "Not a valid Workbook ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Sheet",
    "name": "worksheet",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "getWorksheetsList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "{[a-zA-Z0-9\\-_]{2,}}",
              "errorMessage": "Not a valid Sheet ID"
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Select a Range",
    "name": "useRange",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Range",
    "name": "range",
    "type": "string",
    "displayOptions": {
      "show": {
        "dataMode": [
          "autoMap",
          "define"
        ],
        "useRange": [
          true
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "placeholder": "e.g. A1:B2",
    "default": "",
    "description": "The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported. Leave blank to use whole used range in the sheet.",
    "hint": "First row must contain column names"
  },
  {
    "displayName": "Data Mode",
    "name": "dataMode",
    "type": "options",
    "default": "define",
    "options": [
      {
        "name": "Auto-Map Input Data to Columns",
        "value": "autoMap",
        "description": "Use when node input properties match destination column names"
      },
      {
        "name": "Map Each Column Below",
        "value": "define",
        "description": "Set the value for each destination column"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Column to match on",
    "name": "columnToMatchOn",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsDependsOn": [
        "worksheet.value",
        "workbook.value",
        "range"
      ],
      "loadOptionsMethod": "getWorksheetColumnRow"
    },
    "default": "",
    "hint": "Used to find the correct row to update. Doesn't get changed.",
    "displayOptions": {
      "show": {
        "dataMode": [
          "autoMap",
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Value of Column to Match On",
    "name": "valueToMatchOn",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  },
  {
    "displayName": "Values to Send",
    "name": "fieldsUi",
    "placeholder": "Add Field",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "dataMode": [
          "define"
        ],
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Field",
        "name": "values",
        "values": [
          {
            "displayName": "Column",
            "name": "column",
            "type": "options",
            "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
            "typeOptions": {
              "loadOptionsDependsOn": [
                "columnToMatchOn",
                "range"
              ],
              "loadOptionsMethod": "getWorksheetColumnRowSkipColumnToMatchOn"
            },
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "fieldValue",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Append After Selected Range",
        "name": "appendAfterSelectedRange",
        "type": "boolean",
        "default": false,
        "description": "Whether to append data after the selected range or used range",
        "displayOptions": {
          "show": {
            "/dataMode": [
              "autoMap",
              "define"
            ],
            "/useRange": [
              true
            ]
          }
        }
      },
      {
        "displayName": "RAW Data",
        "name": "rawData",
        "type": "boolean",
        "default": 0,
        "description": "Whether the data should be returned RAW instead of parsed into keys according to their header"
      },
      {
        "displayName": "Data Property",
        "name": "dataProperty",
        "type": "string",
        "default": "data",
        "required": true,
        "displayOptions": {
          "show": {
            "rawData": [
              true
            ]
          }
        },
        "description": "The name of the property into which to write the RAW data"
      },
      {
        "displayName": "Update All Matches",
        "name": "updateAll",
        "type": "boolean",
        "default": false,
        "description": "Whether to update all matching rows or just the first match"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "worksheet"
        ],
        "operation": [
          "upsert"
        ]
      }
    }
  }
]
```
