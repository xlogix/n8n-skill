# Split Out

- Node name: `splitOut`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Transform/SplitOut/SplitOut.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Turn a list inside item(s) into separate items

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
| Fields To Split Out | `fieldToSplitOut` | `string` | yes |  | The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary. |
| Include | `include` | `options` | no | `noOtherFields` | Whether to copy any other fields into the new items |
| Fields To Include | `fieldsToInclude` | `string` | no |  | Fields in the input items to aggregate together |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Fields To Split Out",
    "name": "fieldToSplitOut",
    "type": "string",
    "default": "",
    "required": true,
    "placeholder": "Drag fields from the left or type their names",
    "description": "The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary.",
    "requiresDataPath": "multiple",
    "hint": "Use $binary to split out the input item by binary data"
  },
  {
    "displayName": "Include",
    "name": "include",
    "type": "options",
    "options": [
      {
        "name": "No Other Fields",
        "value": "noOtherFields"
      },
      {
        "name": "All Other Fields",
        "value": "allOtherFields"
      },
      {
        "name": "Selected Other Fields",
        "value": "selectedOtherFields"
      }
    ],
    "default": "noOtherFields",
    "description": "Whether to copy any other fields into the new items"
  },
  {
    "displayName": "Fields To Include",
    "name": "fieldsToInclude",
    "type": "string",
    "placeholder": "e.g. email, name",
    "requiresDataPath": "multiple",
    "description": "Fields in the input items to aggregate together",
    "default": "",
    "displayOptions": {
      "show": {
        "include": [
          "selectedOtherFields"
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
        "description": "Whether to disallow referencing child fields using `parent.child` in the field name"
      },
      {
        "displayName": "Destination Field Name",
        "name": "destinationFieldName",
        "type": "string",
        "requiresDataPath": "multiple",
        "default": "",
        "description": "The field in the output under which to put the split field contents"
      },
      {
        "displayName": "Include Binary",
        "name": "includeBinary",
        "type": "boolean",
        "default": false,
        "description": "Whether to include the binary data in the new items"
      }
    ]
  }
]
```
