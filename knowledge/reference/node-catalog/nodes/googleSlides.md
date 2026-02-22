# Google Slides

- Node name: `googleSlides`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/Slides/GoogleSlides.node.js`
- Node version: `[1,2]`
- Groups: `input`, `output`
- Description: Consume the Google Slides API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `googleApi` (required)
- `googleSlidesOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Page (`page`)
- Presentation (`presentation`)

### Operations
- resource `page`: `get`, `getThumbnail`
- resource `presentation`: `create`, `get`, `getSlides`, `replaceText`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `serviceAccount` |  |
| Authentication | `authentication` | `options` | no | `oAuth2` |  |
| Resource | `resource` | `options` | no | `presentation` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Title | `title` | `string` | yes |  | Title of the presentation to create |
| Presentation ID | `presentationId` | `string` | yes |  | ID of the presentation to retrieve. Found in the presentation URL: <code>https://docs.google.com/presentation/d/PRESENTATION_ID/edit</code> |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Page Object ID | `pageObjectId` | `string` | yes |  | ID of the page object to retrieve |
| Texts To Replace | `textUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Download | `download` | `boolean` | no | `false` | Name of the binary property to which to write the data of the read page |
| Put Output File in Field | `binaryProperty` | `string` | yes | `data` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "OAuth2",
        "value": "oAuth2"
      },
      {
        "name": "Service Account",
        "value": "serviceAccount"
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
        "name": "Page",
        "value": "page"
      },
      {
        "name": "Presentation",
        "value": "presentation"
      }
    ],
    "default": "presentation"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a presentation",
        "action": "Create a presentation"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a presentation",
        "action": "Get a presentation"
      },
      {
        "name": "Get Slides",
        "value": "getSlides",
        "description": "Get presentation slides",
        "action": "Get slides from a presentation"
      },
      {
        "name": "Replace Text",
        "value": "replaceText",
        "description": "Replace text in a presentation",
        "action": "Replace text in a presentation"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "presentation"
        ]
      }
    },
    "default": "create"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a page",
        "action": "Get a page"
      },
      {
        "name": "Get Thumbnail",
        "value": "getThumbnail",
        "description": "Get a thumbnail",
        "action": "Get the thumbnail for a page"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "page"
        ]
      }
    },
    "default": "get"
  },
  {
    "displayName": "Title",
    "name": "title",
    "description": "Title of the presentation to create",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "presentation"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Presentation ID",
    "name": "presentationId",
    "description": "ID of the presentation to retrieve. Found in the presentation URL: <code>https://docs.google.com/presentation/d/PRESENTATION_ID/edit</code>",
    "placeholder": "1wZtNFZ8MO-WKrxhYrOLMvyiqSgFwdSz5vn8_l_7eNqw",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "presentation",
          "page"
        ],
        "operation": [
          "get",
          "getThumbnail",
          "getSlides",
          "replaceText"
        ]
      }
    }
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "getSlides"
        ],
        "resource": [
          "presentation"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "operation": [
          "getSlides"
        ],
        "resource": [
          "presentation"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 500
    },
    "default": 100,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Page Object ID",
    "name": "pageObjectId",
    "description": "ID of the page object to retrieve",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "page"
        ],
        "operation": [
          "get",
          "getThumbnail"
        ]
      }
    }
  },
  {
    "displayName": "Texts To Replace",
    "name": "textUi",
    "placeholder": "Add Text",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "presentation"
        ],
        "operation": [
          "replaceText"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "textValues",
        "displayName": "Text",
        "values": [
          {
            "displayName": "Match Case",
            "name": "matchCase",
            "type": "boolean",
            "default": false,
            "description": "Whether the search should respect case. True : the search is case sensitive. False : the search is case insensitive."
          },
          {
            "displayName": "Slide Names or IDs",
            "name": "pageObjectIds",
            "type": "multiOptions",
            "default": [],
            "typeOptions": {
              "loadOptionsMethod": "getPages",
              "loadOptionsDependsOn": [
                "presentationId"
              ]
            },
            "description": "If non-empty, limits the matches to slide elements only on the given slides. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          },
          {
            "displayName": "Search For",
            "name": "text",
            "type": "string",
            "default": "",
            "description": "The text to search for in the slide"
          },
          {
            "displayName": "Replace With",
            "name": "replaceText",
            "type": "string",
            "default": "",
            "description": "The text that will replace the matched text"
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
    "displayOptions": {
      "show": {
        "operation": [
          "replaceText"
        ],
        "resource": [
          "presentation"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Revision ID",
        "name": "revisionId",
        "type": "string",
        "default": "",
        "description": "The revision ID of the presentation required for the write request. If specified and the requiredRevisionId doesn't exactly match the presentation's current revisionId, the request will not be processed and will return a 400 bad request error."
      }
    ]
  },
  {
    "displayName": "Download",
    "name": "download",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "page"
        ],
        "operation": [
          "getThumbnail"
        ]
      }
    },
    "description": "Name of the binary property to which to write the data of the read page"
  },
  {
    "displayName": "Put Output File in Field",
    "name": "binaryProperty",
    "type": "string",
    "required": true,
    "default": "data",
    "hint": "The name of the output binary field to put the file in",
    "displayOptions": {
      "show": {
        "resource": [
          "page"
        ],
        "operation": [
          "getThumbnail"
        ],
        "download": [
          true
        ]
      }
    }
  }
]
```
