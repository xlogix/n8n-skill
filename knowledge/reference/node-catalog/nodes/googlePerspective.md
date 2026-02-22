# Google Perspective

- Node name: `googlePerspective`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Perspective/GooglePerspective.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume Google Perspective API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googlePerspectiveOAuth2Api` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `analyzeComment`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `analyzeComment` |  |
| Text | `text` | `string` | yes |  |  |
| Attributes to Analyze | `requestedAttributesUi` | `fixedCollection` | yes | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

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
        "name": "Analyze Comment",
        "value": "analyzeComment"
      }
    ],
    "default": "analyzeComment"
  },
  {
    "displayName": "Text",
    "name": "text",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "analyzeComment"
        ]
      }
    }
  },
  {
    "displayName": "Attributes to Analyze",
    "name": "requestedAttributesUi",
    "type": "fixedCollection",
    "default": {},
    "typeOptions": {
      "multipleValues": true
    },
    "placeholder": "Add Atrribute",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "analyzeComment"
        ]
      }
    },
    "options": [
      {
        "displayName": "Properties",
        "name": "requestedAttributesValues",
        "values": [
          {
            "displayName": "Attribute Name",
            "name": "attributeName",
            "type": "options",
            "options": [
              {
                "name": "Flirtation",
                "value": "flirtation"
              },
              {
                "name": "Identity Attack",
                "value": "identity_attack"
              },
              {
                "name": "Insult",
                "value": "insult"
              },
              {
                "name": "Profanity",
                "value": "profanity"
              },
              {
                "name": "Severe Toxicity",
                "value": "severe_toxicity"
              },
              {
                "name": "Sexually Explicit",
                "value": "sexually_explicit"
              },
              {
                "name": "Threat",
                "value": "threat"
              },
              {
                "name": "Toxicity",
                "value": "toxicity"
              }
            ],
            "description": "Attribute to analyze in the text. Details <a href=\"https://developers.perspectiveapi.com/s/about-the-api-attributes-and-languages\">here</a>.",
            "default": "flirtation"
          },
          {
            "displayName": "Score Threshold",
            "name": "scoreThreshold",
            "type": "number",
            "typeOptions": {
              "numberPrecision": 2,
              "minValue": 0,
              "maxValue": 1
            },
            "description": "Score above which to return results. At zero, all scores are returned.",
            "default": 0
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "displayOptions": {
      "show": {
        "operation": [
          "analyzeComment"
        ]
      }
    },
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Language Name or ID",
        "name": "languages",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getLanguages"
        },
        "default": "",
        "description": "Languages of the text input. If unspecified, the API will auto-detect the comment language. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      }
    ]
  }
]
```
