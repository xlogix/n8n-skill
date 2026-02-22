# Aggregate

- Node name: `aggregate`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Transform/Aggregate/Aggregate.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Combine a field from many items into a list in a single item

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Aggregate | `aggregate` | `options` | no | `aggregateIndividualFields` |  |
| Fields To Aggregate | `fieldsToAggregate` | `fixedCollection` | no | `{"fieldToAggregate":[{"fieldToAggregate":"","renameField":false}]}` |  |
| Put Output in Field | `destinationFieldName` | `string` | no | `data` | The name of the output field to put the data in |
| Include | `include` | `options` | no | `allFields` |  |
| Fields To Exclude | `fieldsToExclude` | `string` | no |  |  |
| Fields To Include | `fieldsToInclude` | `string` | no |  |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Aggregate",
    "name": "aggregate",
    "type": "options",
    "default": "aggregateIndividualFields",
    "options": [
      {
        "name": "Individual Fields",
        "value": "aggregateIndividualFields"
      },
      {
        "name": "All Item Data (Into a Single List)",
        "value": "aggregateAllItemData"
      }
    ]
  },
  {
    "displayName": "Fields To Aggregate",
    "name": "fieldsToAggregate",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "placeholder": "Add Field To Aggregate",
    "default": {
      "fieldToAggregate": [
        {
          "fieldToAggregate": "",
          "renameField": false
        }
      ]
    },
    "displayOptions": {
      "show": {
        "aggregate": [
          "aggregateIndividualFields"
        ]
      }
    },
    "options": [
      {
        "displayName": "",
        "name": "fieldToAggregate",
        "values": [
          {
            "displayName": "Input Field Name",
            "name": "fieldToAggregate",
            "type": "string",
            "default": "",
            "description": "The name of a field in the input items to aggregate together",
            "placeholder": "e.g. id",
            "hint": " Enter the field name as text",
            "requiresDataPath": "single"
          },
          {
            "displayName": "Rename Field",
            "name": "renameField",
            "type": "boolean",
            "default": false,
            "description": "Whether to give the field a different name in the output"
          },
          {
            "displayName": "Output Field Name",
            "name": "outputFieldName",
            "displayOptions": {
              "show": {
                "renameField": [
                  true
                ]
              }
            },
            "type": "string",
            "default": "",
            "description": "The name of the field to put the aggregated data in. Leave blank to use the input field name.",
            "requiresDataPath": "single"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Put Output in Field",
    "name": "destinationFieldName",
    "type": "string",
    "displayOptions": {
      "show": {
        "aggregate": [
          "aggregateAllItemData"
        ]
      }
    },
    "default": "data",
    "description": "The name of the output field to put the data in"
  },
  {
    "displayName": "Include",
    "name": "include",
    "type": "options",
    "default": "allFields",
    "options": [
      {
        "name": "All Fields",
        "value": "allFields"
      },
      {
        "name": "Specified Fields",
        "value": "specifiedFields"
      },
      {
        "name": "All Fields Except",
        "value": "allFieldsExcept"
      }
    ],
    "displayOptions": {
      "show": {
        "aggregate": [
          "aggregateAllItemData"
        ]
      }
    }
  },
  {
    "displayName": "Fields To Exclude",
    "name": "fieldsToExclude",
    "type": "string",
    "placeholder": "e.g. email, name",
    "default": "",
    "requiresDataPath": "multiple",
    "displayOptions": {
      "show": {
        "aggregate": [
          "aggregateAllItemData"
        ],
        "include": [
          "allFieldsExcept"
        ]
      }
    }
  },
  {
    "displayName": "Fields To Include",
    "name": "fieldsToInclude",
    "type": "string",
    "placeholder": "e.g. email, name",
    "default": "",
    "requiresDataPath": "multiple",
    "displayOptions": {
      "show": {
        "aggregate": [
          "aggregateAllItemData"
        ],
        "include": [
          "specifiedFields"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "Disable Dot Notation",
        "name": "disableDotNotation",
        "type": "boolean",
        "default": false,
        "description": "Whether to disallow referencing child fields using `parent.child` in the field name",
        "displayOptions": {
          "hide": {
            "/aggregate": [
              "aggregateAllItemData"
            ]
          }
        }
      },
      {
        "displayName": "Merge Lists",
        "name": "mergeLists",
        "type": "boolean",
        "default": false,
        "description": "Whether to merge the output into a single flat list (rather than a list of lists), if the field to aggregate is a list",
        "displayOptions": {
          "hide": {
            "/aggregate": [
              "aggregateAllItemData"
            ]
          }
        }
      },
      {
        "displayName": "Include Binaries",
        "name": "includeBinaries",
        "type": "boolean",
        "default": false,
        "description": "Whether to include the binary data in the new item"
      },
      {
        "displayName": "Keep Only Unique Binaries",
        "name": "keepOnlyUnique",
        "type": "boolean",
        "default": false,
        "description": "Whether to keep only unique binaries by comparing mime types, file types, file sizes and file extensions",
        "displayOptions": {
          "show": {
            "includeBinaries": [
              true
            ]
          }
        }
      },
      {
        "displayName": "Keep Missing And Null Values",
        "name": "keepMissing",
        "type": "boolean",
        "default": false,
        "description": "Whether to add a null entry to the aggregated list when there is a missing or null value",
        "displayOptions": {
          "hide": {
            "/aggregate": [
              "aggregateAllItemData"
            ]
          }
        }
      }
    ]
  }
]
```
