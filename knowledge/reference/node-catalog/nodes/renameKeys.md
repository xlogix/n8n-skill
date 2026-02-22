# Rename Keys

- Node name: `renameKeys`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/RenameKeys/RenameKeys.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Update item field names

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
| Keys | `keys` | `fixedCollection` | no | `{}` | Adds a key which should be renamed |
| Additional Options | `additionalOptions` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Keys",
    "name": "keys",
    "placeholder": "Add new key",
    "description": "Adds a key which should be renamed",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true,
      "sortable": true
    },
    "default": {},
    "options": [
      {
        "displayName": "Key",
        "name": "key",
        "values": [
          {
            "displayName": "Current Key Name",
            "name": "currentKey",
            "type": "string",
            "default": "",
            "placeholder": "currentKey",
            "requiresDataPath": "single",
            "description": "The current name of the key. It is also possible to define deep keys by using dot-notation like for example: \"level1.level2.currentKey\"."
          },
          {
            "displayName": "New Key Name",
            "name": "newKey",
            "type": "string",
            "default": "",
            "placeholder": "newKey",
            "description": "The name the key should be renamed to. It is also possible to define deep keys by using dot-notation like for example: \"level1.level2.newKey\"."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Additional Options",
    "name": "additionalOptions",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Regex",
        "name": "regexReplacement",
        "placeholder": "Add new regular expression",
        "description": "Adds a regular expression",
        "type": "fixedCollection",
        "typeOptions": {
          "multipleValues": true,
          "sortable": true
        },
        "default": {},
        "options": [
          {
            "displayName": "Replacement",
            "name": "replacements",
            "values": [
              {
                "displayName": "Be aware that by using regular expression previously renamed keys can be affected",
                "name": "regExNotice",
                "type": "notice",
                "default": ""
              },
              {
                "displayName": "Regular Expression",
                "name": "searchRegex",
                "type": "string",
                "default": "",
                "placeholder": "e.g. [N-n]ame",
                "description": "Regex to match the key name",
                "hint": "Learn more and test RegEx <a href=\"https://regex101.com/\">here</a>"
              },
              {
                "displayName": "Replace With",
                "name": "replaceRegex",
                "type": "string",
                "default": "",
                "placeholder": "replacedName",
                "description": "The name the key/s should be renamed to. It's possible to use regex captures e.g. $1, $2, ..."
              },
              {
                "displayName": "Options",
                "name": "options",
                "type": "collection",
                "default": {},
                "placeholder": "Add Regex Option",
                "options": [
                  {
                    "displayName": "Case Insensitive",
                    "name": "caseInsensitive",
                    "type": "boolean",
                    "description": "Whether to use case insensitive match",
                    "default": false
                  },
                  {
                    "displayName": "Max Depth",
                    "name": "depth",
                    "type": "number",
                    "default": -1,
                    "description": "Maximum depth to replace keys",
                    "hint": "Specify number for depth level (-1 for unlimited, 0 for top level only)"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
```
