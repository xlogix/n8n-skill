# LingvaNex

- Node name: `lingvaNex`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/LingvaNex/LingvaNex.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume LingvaNex API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `lingvaNexApi` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `translate`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `translate` |  |
| Text | `text` | `string` | yes |  | The input text to translate |
| Translate To | `translateTo` | `options` | yes |  | The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Additional Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Translate",
        "value": "translate",
        "description": "Translate data",
        "action": "Translate data"
      }
    ],
    "default": "translate"
  },
  {
    "displayName": "Text",
    "name": "text",
    "type": "string",
    "default": "",
    "description": "The input text to translate",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "translate"
        ]
      }
    }
  },
  {
    "displayName": "Translate To",
    "name": "translateTo",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getLanguages"
    },
    "default": "",
    "description": "The language to use for translation of the input text, set to one of the language codes listed in <a href=\"https://cloud.google.com/translate/docs/languages\">Language Support</a>. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "translate"
        ]
      }
    }
  },
  {
    "displayName": "Additional Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "displayOptions": {
      "show": {
        "operation": [
          "translate"
        ]
      }
    },
    "options": [
      {
        "displayName": "From",
        "name": "from",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getLanguages"
        },
        "default": "",
        "description": "The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Platform",
        "name": "platform",
        "type": "string",
        "default": "api"
      },
      {
        "displayName": "Translate Mode",
        "name": "translateMode",
        "type": "string",
        "default": "",
        "description": "Describe the input text format. Possible value is \"html\" for translating and preserving html structure. If value is not specified or is other than \"html\" than plain text is translating."
      }
    ]
  }
]
```
