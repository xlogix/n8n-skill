# Filter

- Node name: `filter`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Filter/Filter.node.js`
- Node version: `[2,2.1,2.2,2.3]`
- Groups: `transform`
- Description: Remove items matching a condition

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
| Conditions | `conditions` | `filter` | no | `{}` |  |
| Convert types where required | `looseTypeValidation` | `boolean` | no | `false` | If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>"false"</code> or <code>0</code> will be cast to <code>false</code> |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Conditions",
    "name": "conditions",
    "placeholder": "Add Condition",
    "type": "filter",
    "default": {},
    "typeOptions": {
      "filter": {
        "caseSensitive": "={{!$parameter.options.ignoreCase}}",
        "typeValidation": "={{ ($nodeVersion < 2.1 ? $parameter.options.looseTypeValidation :  $parameter.looseTypeValidation) ? \"loose\" : \"strict\" }}",
        "version": "={{ $nodeVersion >= 2.3 ? 3 : $nodeVersion >= 2.2 ? 2 : 1 }}"
      }
    }
  },
  {
    "displayName": "Convert types where required",
    "description": "If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>\"false\"</code> or <code>0</code> will be cast to <code>false</code>",
    "name": "looseTypeValidation",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "gte": 2.1
            }
          }
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
        "displayName": "Ignore Case",
        "description": "Whether to ignore letter case when evaluating conditions",
        "name": "ignoreCase",
        "type": "boolean",
        "default": true
      },
      {
        "displayName": "Convert types where required",
        "description": "If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>\"false\"</code> or <code>0</code> will be cast to <code>false</code>",
        "name": "looseTypeValidation",
        "type": "boolean",
        "default": true,
        "displayOptions": {
          "show": {
            "@version": [
              {
                "_cnd": {
                  "lt": 2.1
                }
              }
            ]
          }
        }
      }
    ]
  }
]
```
