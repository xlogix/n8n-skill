# Brandfetch

- Node name: `Brandfetch`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Brandfetch/Brandfetch.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Brandfetch API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `brandfetchApi` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `color`, `company`, `font`, `industry`, `logo`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `logo` |  |
| Domain | `domain` | `string` | yes |  | The domain name of the company |
| Download | `download` | `boolean` | yes | `false` | Name of the binary property to which to write the data of the read file |
| Image Type | `imageTypes` | `multiOptions` | yes | `["logo","icon"]` |  |
| Image Format | `imageFormats` | `multiOptions` | yes | `["png"]` | The image format in which the logo should be returned as |

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
        "name": "Color",
        "value": "color",
        "description": "Return a company's colors",
        "action": "Return a company's colors"
      },
      {
        "name": "Company",
        "value": "company",
        "description": "Return a company's data",
        "action": "Return a company's data"
      },
      {
        "name": "Font",
        "value": "font",
        "description": "Return a company's fonts",
        "action": "Return a company's fonts"
      },
      {
        "name": "Industry",
        "value": "industry",
        "description": "Return a company's industry",
        "action": "Return a company's industry"
      },
      {
        "name": "Logo",
        "value": "logo",
        "description": "Return a company's logo & icon",
        "action": "Return a company's logo & icon"
      }
    ],
    "default": "logo"
  },
  {
    "displayName": "Domain",
    "name": "domain",
    "type": "string",
    "default": "",
    "description": "The domain name of the company",
    "required": true
  },
  {
    "displayName": "Download",
    "name": "download",
    "type": "boolean",
    "default": false,
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "logo"
        ]
      }
    },
    "description": "Name of the binary property to which to write the data of the read file"
  },
  {
    "displayName": "Image Type",
    "name": "imageTypes",
    "type": "multiOptions",
    "displayOptions": {
      "show": {
        "operation": [
          "logo"
        ],
        "download": [
          true
        ]
      }
    },
    "options": [
      {
        "name": "Icon",
        "value": "icon"
      },
      {
        "name": "Logo",
        "value": "logo"
      }
    ],
    "default": [
      "logo",
      "icon"
    ],
    "required": true
  },
  {
    "displayName": "Image Format",
    "name": "imageFormats",
    "type": "multiOptions",
    "displayOptions": {
      "show": {
        "operation": [
          "logo"
        ],
        "download": [
          true
        ]
      }
    },
    "options": [
      {
        "name": "PNG",
        "value": "png"
      },
      {
        "name": "SVG",
        "value": "svg"
      }
    ],
    "default": [
      "png"
    ],
    "description": "The image format in which the logo should be returned as",
    "required": true
  }
]
```
