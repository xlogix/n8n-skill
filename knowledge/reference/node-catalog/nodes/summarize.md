# Summarize

- Node name: `summarize`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Transform/Summarize/Summarize.node.js`
- Node version: `[1,1.1]`
- Groups: `transform`
- Description: Sum, count, max, etc. across items

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
| Fields to Summarize | `fieldsToSummarize` | `fixedCollection` | no | `{"values":[{"aggregation":"count","field":""}]}` |  |
| Fields to Split By | `fieldsToSplitBy` | `string` | no |  | The name of the input fields that you want to split the summary by |
| Fields to Group By | `fieldsToSplitBy` | `string` | no |  | The name of the input fields that you want to split the summary by |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Fields to Summarize",
    "name": "fieldsToSummarize",
    "type": "fixedCollection",
    "placeholder": "Add Field",
    "default": {
      "values": [
        {
          "aggregation": "count",
          "field": ""
        }
      ]
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "displayName": "",
        "name": "values",
        "values": [
          {
            "displayName": "Aggregation",
            "name": "aggregation",
            "type": "options",
            "options": [
              {
                "name": "Append",
                "value": "append"
              },
              {
                "name": "Average",
                "value": "average"
              },
              {
                "name": "Concatenate",
                "value": "concatenate"
              },
              {
                "name": "Count",
                "value": "count"
              },
              {
                "name": "Count Unique",
                "value": "countUnique"
              },
              {
                "name": "Max",
                "value": "max"
              },
              {
                "name": "Min",
                "value": "min"
              },
              {
                "name": "Sum",
                "value": "sum"
              }
            ],
            "default": "count",
            "description": "How to combine the values of the field you want to summarize"
          },
          {
            "displayName": "Field",
            "name": "field",
            "type": "string",
            "default": "",
            "description": "The name of an input field that you want to summarize",
            "placeholder": "e.g. cost",
            "hint": " Enter the field name as text",
            "displayOptions": {
              "hide": {
                "aggregation": [
                  "average",
                  "sum",
                  "countUnique",
                  "count",
                  "max",
                  "min"
                ]
              }
            },
            "requiresDataPath": "single"
          },
          {
            "displayName": "Field",
            "name": "field",
            "type": "string",
            "default": "",
            "description": "The name of an input field that you want to summarize. The field should contain numerical values; null, undefined, empty strings would be ignored.",
            "placeholder": "e.g. cost",
            "hint": " Enter the field name as text",
            "displayOptions": {
              "show": {
                "aggregation": [
                  "average",
                  "sum"
                ]
              }
            },
            "requiresDataPath": "single"
          },
          {
            "displayName": "Field",
            "name": "field",
            "type": "string",
            "default": "",
            "description": "The name of an input field that you want to summarize; null, undefined, empty strings would be ignored",
            "placeholder": "e.g. cost",
            "hint": " Enter the field name as text",
            "displayOptions": {
              "show": {
                "aggregation": [
                  "countUnique",
                  "count",
                  "max",
                  "min"
                ]
              }
            },
            "requiresDataPath": "single"
          },
          {
            "displayName": "Include Empty Values",
            "name": "includeEmpty",
            "type": "boolean",
            "default": false,
            "displayOptions": {
              "show": {
                "aggregation": [
                  "append",
                  "concatenate",
                  "count",
                  "countUnique"
                ]
              }
            }
          },
          {
            "displayName": "Separator",
            "name": "separateBy",
            "type": "options",
            "default": ",",
            "options": [
              {
                "name": "Comma",
                "value": ","
              },
              {
                "name": "Comma and Space",
                "value": ", "
              },
              {
                "name": "New Line",
                "value": "\n"
              },
              {
                "name": "None",
                "value": ""
              },
              {
                "name": "Space",
                "value": " "
              },
              {
                "name": "Other",
                "value": "other"
              }
            ],
            "hint": "What to insert between values",
            "displayOptions": {
              "show": {
                "aggregation": [
                  "concatenate"
                ]
              }
            }
          },
          {
            "displayName": "Custom Separator",
            "name": "customSeparator",
            "type": "string",
            "default": "",
            "displayOptions": {
              "show": {
                "aggregation": [
                  "concatenate"
                ],
                "separateBy": [
                  "other"
                ]
              }
            }
          }
        ]
      }
    ]
  },
  {
    "displayName": "Fields to Split By",
    "name": "fieldsToSplitBy",
    "type": "string",
    "placeholder": "e.g. country, city",
    "default": "",
    "description": "The name of the input fields that you want to split the summary by",
    "hint": "Enter the name of the fields as text (separated by commas)",
    "displayOptions": {
      "hide": {
        "/options.outputFormat": [
          "singleItem"
        ]
      }
    },
    "requiresDataPath": "multiple"
  },
  {
    "displayName": "Fields to Group By",
    "name": "fieldsToSplitBy",
    "type": "string",
    "placeholder": "e.g. country, city",
    "default": "",
    "description": "The name of the input fields that you want to split the summary by",
    "hint": "Enter the name of the fields as text (separated by commas)",
    "displayOptions": {
      "show": {
        "/options.outputFormat": [
          "singleItem"
        ]
      }
    },
    "requiresDataPath": "multiple"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Continue if Field Not Found",
        "name": "continueIfFieldNotFound",
        "type": "boolean",
        "default": false,
        "description": "Whether to continue if field to summarize can't be found in any items and return single empty item, otherwise an error would be thrown",
        "displayOptions": {
          "hide": {
            "@version": [
              {
                "_cnd": {
                  "gte": 1.1
                }
              }
            ]
          }
        }
      },
      {
        "displayName": "Disable Dot Notation",
        "name": "disableDotNotation",
        "type": "boolean",
        "default": false,
        "description": "Whether to disallow referencing child fields using `parent.child` in the field name"
      },
      {
        "displayName": "Output Format",
        "name": "outputFormat",
        "type": "options",
        "default": "separateItems",
        "options": [
          {
            "name": "Each Split in a Separate Item",
            "value": "separateItems"
          },
          {
            "name": "All Splits in a Single Item",
            "value": "singleItem"
          }
        ]
      },
      {
        "displayName": "Ignore items without valid fields to group by",
        "name": "skipEmptySplitFields",
        "type": "boolean",
        "default": false
      }
    ]
  }
]
```
