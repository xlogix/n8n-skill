# Sort

- Node name: `sort`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Transform/Sort/Sort.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Change items order

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
| Type | `type` | `options` | no | `simple` | The type of sorting to perform |
| Fields To Sort By | `sortFieldsUi` | `fixedCollection` | no | `{}` | The fields of the input items to sort by |
| Code | `code` | `string` | no | `// The two items to compare are in the variables a and b
	// Access the fields in a.json and b.json
	// Return -1 if a should go before b
	// Return 1 if b should go before a
	// Return 0 if there's no difference

	fieldName = 'myField';

	if (a.json[fieldName] < b.json[fieldName]) {
	return -1;
	}
	if (a.json[fieldName] > b.json[fieldName]) {
	return 1;
	}
	return 0;` | Javascript code to determine the order of any two items |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "options": [
      {
        "name": "Simple",
        "value": "simple"
      },
      {
        "name": "Random",
        "value": "random"
      },
      {
        "name": "Code",
        "value": "code"
      }
    ],
    "default": "simple",
    "description": "The type of sorting to perform"
  },
  {
    "displayName": "Fields To Sort By",
    "name": "sortFieldsUi",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "placeholder": "Add Field To Sort By",
    "options": [
      {
        "displayName": "",
        "name": "sortField",
        "values": [
          {
            "displayName": "Field Name",
            "name": "fieldName",
            "type": "string",
            "required": true,
            "default": "",
            "description": "The field to sort by",
            "placeholder": "e.g. id",
            "hint": " Enter the field name as text",
            "requiresDataPath": "single"
          },
          {
            "displayName": "Order",
            "name": "order",
            "type": "options",
            "options": [
              {
                "name": "Ascending",
                "value": "ascending"
              },
              {
                "name": "Descending",
                "value": "descending"
              }
            ],
            "default": "ascending",
            "description": "The order to sort by"
          }
        ]
      }
    ],
    "default": {},
    "description": "The fields of the input items to sort by",
    "displayOptions": {
      "show": {
        "type": [
          "simple"
        ]
      }
    }
  },
  {
    "displayName": "Code",
    "name": "code",
    "type": "string",
    "typeOptions": {
      "alwaysOpenEditWindow": true,
      "editor": "jsEditor",
      "rows": 10
    },
    "default": "// The two items to compare are in the variables a and b\n\t// Access the fields in a.json and b.json\n\t// Return -1 if a should go before b\n\t// Return 1 if b should go before a\n\t// Return 0 if there's no difference\n\n\tfieldName = 'myField';\n\n\tif (a.json[fieldName] < b.json[fieldName]) {\n\treturn -1;\n\t}\n\tif (a.json[fieldName] > b.json[fieldName]) {\n\treturn 1;\n\t}\n\treturn 0;",
    "description": "Javascript code to determine the order of any two items",
    "displayOptions": {
      "show": {
        "type": [
          "code"
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
    "displayOptions": {
      "show": {
        "type": [
          "simple"
        ]
      }
    },
    "options": [
      {
        "displayName": "Disable Dot Notation",
        "name": "disableDotNotation",
        "type": "boolean",
        "default": false,
        "description": "Whether to disallow referencing child fields using `parent.child` in the field name"
      }
    ]
  }
]
```
