# APITemplate.io

- Node name: `apiTemplateIo`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ApiTemplateIo/ApiTemplateIo.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume the APITemplate.io API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `apiTemplateIoApi` (required)

## Resource and Operation Coverage
### Resources
- Account (`account`)
- Image (`image`)
- PDF (`pdf`)

### Operations
- resource `account`: `get`
- resource `image`: `create`
- resource `pdf`: `create`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `image` |  |
| Operation | `operation` | `options` | yes | `create` |  |
| Operation | `operation` | `options` | yes | `create` |  |
| Operation | `operation` | `options` | yes | `get` |  |
| Template Name or ID | `imageTemplateId` | `options` | yes |  | ID of the image template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Template Name or ID | `pdfTemplateId` | `options` | yes |  | ID of the PDF template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| JSON Parameters | `jsonParameters` | `boolean` | no | `false` |  |
| Download | `download` | `boolean` | no | `false` | Name of the binary property to which to write the data of the read file |
| Put Output File in Field | `binaryProperty` | `string` | yes | `data` |  |
| Overrides (JSON) | `overridesJson` | `json` | no |  |  |
| Properties (JSON) | `propertiesJson` | `json` | no |  |  |
| Overrides | `overridesUi` | `fixedCollection` | no | `{}` |  |
| Properties | `propertiesUi` | `fixedCollection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Account",
        "value": "account"
      },
      {
        "name": "Image",
        "value": "image"
      },
      {
        "name": "PDF",
        "value": "pdf"
      }
    ],
    "default": "image"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "create",
    "required": true,
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create an image"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "image"
        ]
      }
    }
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "create",
    "required": true,
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create a pdf"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "pdf"
        ]
      }
    }
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "get",
    "required": true,
    "options": [
      {
        "name": "Get",
        "value": "get",
        "action": "Get an account"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "account"
        ]
      }
    }
  },
  {
    "displayName": "Template Name or ID",
    "name": "imageTemplateId",
    "type": "options",
    "required": true,
    "default": "",
    "description": "ID of the image template to use. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "typeOptions": {
      "loadOptionsMethod": "getImageTemplates"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "image"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Template Name or ID",
    "name": "pdfTemplateId",
    "type": "options",
    "required": true,
    "default": "",
    "description": "ID of the PDF template to use. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>.",
    "typeOptions": {
      "loadOptionsMethod": "getPdfTemplates"
    },
    "displayOptions": {
      "show": {
        "resource": [
          "pdf"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "JSON Parameters",
    "name": "jsonParameters",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "pdf",
          "image"
        ],
        "operation": [
          "create"
        ]
      }
    }
  },
  {
    "displayName": "Download",
    "name": "download",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "pdf",
          "image"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "description": "Name of the binary property to which to write the data of the read file"
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
          "pdf",
          "image"
        ],
        "operation": [
          "create"
        ],
        "download": [
          true
        ]
      }
    }
  },
  {
    "displayName": "Overrides (JSON)",
    "name": "overridesJson",
    "type": "json",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "image"
        ],
        "operation": [
          "create"
        ],
        "jsonParameters": [
          true
        ]
      }
    },
    "placeholder": "[ {\"name\": \"text_1\", \"text\": \"hello world\", \"textBackgroundColor\": \"rgba(246, 243, 243, 0)\" } ]"
  },
  {
    "displayName": "Properties (JSON)",
    "name": "propertiesJson",
    "type": "json",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "pdf"
        ],
        "operation": [
          "create"
        ],
        "jsonParameters": [
          true
        ]
      }
    },
    "placeholder": "{ \"name\": \"text_1\" }"
  },
  {
    "displayName": "Overrides",
    "name": "overridesUi",
    "placeholder": "Add Override",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "image"
        ],
        "operation": [
          "create"
        ],
        "jsonParameters": [
          false
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "overrideValues",
        "displayName": "Override",
        "values": [
          {
            "displayName": "Properties",
            "name": "propertiesUi",
            "placeholder": "Add Property",
            "type": "fixedCollection",
            "typeOptions": {
              "multipleValues": true
            },
            "default": {},
            "options": [
              {
                "name": "propertyValues",
                "displayName": "Property",
                "values": [
                  {
                    "displayName": "Key",
                    "name": "key",
                    "type": "string",
                    "default": "",
                    "description": "Name of the property"
                  },
                  {
                    "displayName": "Value",
                    "name": "value",
                    "type": "string",
                    "default": "",
                    "description": "Value to the property"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "displayName": "Properties",
    "name": "propertiesUi",
    "placeholder": "Add Property",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "pdf"
        ],
        "operation": [
          "create"
        ],
        "jsonParameters": [
          false
        ]
      }
    },
    "options": [
      {
        "name": "propertyValues",
        "displayName": "Property",
        "values": [
          {
            "displayName": "Key",
            "name": "key",
            "type": "string",
            "default": "",
            "description": "Name of the property"
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Value to the property"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "pdf",
          "image"
        ],
        "download": [
          true
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "File Name",
        "name": "fileName",
        "type": "string",
        "default": "",
        "description": "The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf"
      }
    ]
  }
]
```
