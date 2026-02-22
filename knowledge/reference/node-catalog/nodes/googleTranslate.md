# Google Translate

- Node name: `googleTranslate`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Translate/GoogleTranslate.node.js`
- Node version: `[1,2]`
- Groups: `input`, `output`
- Description: Translate data using Google Translate

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googleApi` (required)
- `googleTranslateOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Language (`language`)

### Operations
- resource `language`: `translate`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `serviceAccount` |  |
| Authentication | `authentication` | `options` | no | `oAuth2` |  |
| Resource | `resource` | `options` | no | `language` |  |
| Operation | `operation` | `options` | no | `translate` |  |
| Text | `text` | `string` | yes |  | The input text to translate |
| Translate To | `translateTo` | `options` | yes |  | The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Service Account",
        "value": "serviceAccount"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "serviceAccount",
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    }
  },
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "OAuth2 (recommended)",
        "value": "oAuth2"
      },
      {
        "name": "Service Account",
        "value": "serviceAccount"
      }
    ],
    "default": "oAuth2",
    "displayOptions": {
      "show": {
        "@version": [
          2
        ]
      }
    }
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Language",
        "value": "language"
      }
    ],
    "default": "language"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "language"
        ]
      }
    },
    "options": [
      {
        "name": "Translate",
        "value": "translate",
        "description": "Translate data",
        "action": "Translate a language"
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
  }
]
```
