# HTML Extract

- Node name: `htmlExtract`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/HtmlExtract/HtmlExtract.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Extracts data from HTML

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
| Source Data | `sourceData` | `options` | no | `json` | If HTML should be read from binary or JSON data |
| Input Binary Field | `dataPropertyName` | `string` | yes | `data` |  |
| JSON Property | `dataPropertyName` | `string` | yes | `data` | Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings. |
| Extraction Values | `extractionValues` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Source Data",
    "name": "sourceData",
    "type": "options",
    "options": [
      {
        "name": "Binary",
        "value": "binary"
      },
      {
        "name": "JSON",
        "value": "json"
      }
    ],
    "default": "json",
    "description": "If HTML should be read from binary or JSON data"
  },
  {
    "displayName": "Input Binary Field",
    "name": "dataPropertyName",
    "type": "string",
    "displayOptions": {
      "show": {
        "sourceData": [
          "binary"
        ]
      }
    },
    "default": "data",
    "required": true,
    "hint": "The name of the input binary field containing the file to be extracted"
  },
  {
    "displayName": "JSON Property",
    "name": "dataPropertyName",
    "type": "string",
    "displayOptions": {
      "show": {
        "sourceData": [
          "json"
        ]
      }
    },
    "default": "data",
    "required": true,
    "description": "Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings."
  },
  {
    "displayName": "Extraction Values",
    "name": "extractionValues",
    "placeholder": "Add Value",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "default": {},
    "options": [
      {
        "name": "values",
        "displayName": "Values",
        "values": [
          {
            "displayName": "Key",
            "name": "key",
            "type": "string",
            "default": "",
            "description": "The key under which the extracted value should be saved"
          },
          {
            "displayName": "CSS Selector",
            "name": "cssSelector",
            "type": "string",
            "default": "",
            "placeholder": ".price",
            "description": "The CSS selector to use"
          },
          {
            "displayName": "Return Value",
            "name": "returnValue",
            "type": "options",
            "options": [
              {
                "name": "Attribute",
                "value": "attribute",
                "description": "Get an attribute value like \"class\" from an element"
              },
              {
                "name": "HTML",
                "value": "html",
                "description": "Get the HTML the element contains"
              },
              {
                "name": "Text",
                "value": "text",
                "description": "Get only the text content of the element"
              },
              {
                "name": "Value",
                "value": "value",
                "description": "Get value of an input, select or textarea"
              }
            ],
            "default": "text",
            "description": "What kind of data should be returned"
          },
          {
            "displayName": "Attribute",
            "name": "attribute",
            "type": "string",
            "displayOptions": {
              "show": {
                "returnValue": [
                  "attribute"
                ]
              }
            },
            "default": "",
            "placeholder": "class",
            "description": "The name of the attribute to return the value off"
          },
          {
            "displayName": "Return Array",
            "name": "returnArray",
            "type": "boolean",
            "default": false,
            "description": "Whether to return the values as an array so if multiple ones get found they also get returned separately. If not set all will be returned as a single string."
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
        "displayName": "Trim Values",
        "name": "trimValues",
        "type": "boolean",
        "default": true,
        "description": "Whether to remove automatically all spaces and newlines from the beginning and end of the values"
      }
    ]
  }
]
```
