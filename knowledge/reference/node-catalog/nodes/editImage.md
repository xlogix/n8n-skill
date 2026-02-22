# Edit Image

- Node name: `editImage`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/EditImage/EditImage.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Edits an image like blur, resize or adding border and text

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
### Operations
- default/all resources: `blur`, `border`, `composite`, `create`, `crop`, `draw`, `information`, `multiStep`, `resize`, `rotate`, `shear`, `text`, `transparent`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `border` |  |
| Property Name | `dataPropertyName` | `string` | no | `data` | Name of the binary property in which the image data can be found |
| Operations | `operations` | `fixedCollection` | no | `{}` | The operations to perform |
| Background Color | `backgroundColor` | `color` | no | `#ffffff00` | The background color of the image to create |
| Image Width | `width` | `number` | no | `50` | The width of the image to create |
| Image Height | `height` | `number` | no | `50` | The height of the image to create |
| Primitive | `primitive` | `options` | no | `rectangle` | The primitive to draw |
| Color | `color` | `color` | no | `#ff000000` | The color of the primitive to draw |
| Start Position X | `startPositionX` | `number` | no | `50` | X (horizontal) start position of the primitive |
| Start Position Y | `startPositionY` | `number` | no | `50` | Y (horizontal) start position of the primitive |
| End Position X | `endPositionX` | `number` | no | `250` | X (horizontal) end position of the primitive |
| End Position Y | `endPositionY` | `number` | no | `250` | Y (horizontal) end position of the primitive |
| Corner Radius | `cornerRadius` | `number` | no | `0` | The radius of the corner to create round corners |
| Text | `text` | `string` | no |  | Text to write on the image |
| Font Size | `fontSize` | `number` | no | `18` | Size of the text |
| Font Color | `fontColor` | `color` | no | `#000000` | Color of the text |
| Position X | `positionX` | `number` | no | `50` | X (horizontal) position of the text |
| Position Y | `positionY` | `number` | no | `50` | Y (vertical) position of the text |
| Max Line Length | `lineLength` | `number` | no | `80` | Max amount of characters in a line before a line-break should get added |
| Blur | `blur` | `number` | no | `5` | How strong the blur should be |
| Sigma | `sigma` | `number` | no | `2` | The sigma of the blur |
| Border Width | `borderWidth` | `number` | no | `10` | The width of the border |
| Border Height | `borderHeight` | `number` | no | `10` | The height of the border |
| Border Color | `borderColor` | `color` | no | `#000000` | Color of the border |
| Composite Image Property | `dataPropertyNameComposite` | `string` | no |  | The name of the binary property which contains the data of the image to composite on top of image which is found in Property Name |
| Operator | `operator` | `options` | no | `Over` | The operator to use to combine the images |
| Position X | `positionX` | `number` | no | `0` | X (horizontal) position of composite image |
| Position Y | `positionY` | `number` | no | `0` | Y (vertical) position of composite image |
| Width | `width` | `number` | no | `500` | Crop width |
| Height | `height` | `number` | no | `500` | Crop height |
| Position X | `positionX` | `number` | no | `0` | X (horizontal) position to crop from |
| Position Y | `positionY` | `number` | no | `0` | Y (vertical) position to crop from |
| Width | `width` | `number` | no | `500` | New width of the image |
| Height | `height` | `number` | no | `500` | New height of the image |
| Option | `resizeOption` | `options` | no | `maximumArea` | How to resize the image |
| Rotate | `rotate` | `number` | no | `0` | How much the image should be rotated |
| Background Color | `backgroundColor` | `color` | no | `#ffffffff` | The color to use for the background when image gets rotated by anything which is not a multiple of 90 |
| Degrees X | `degreesX` | `number` | no | `0` | X (horizontal) shear degrees |
| Degrees Y | `degreesY` | `number` | no | `0` | Y (vertical) shear degrees |
| Color | `color` | `color` | no | `#ff0000` | The color to make transparent |
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
        "name": "Blur",
        "value": "blur",
        "description": "Adds a blur to the image and so makes it less sharp",
        "action": "Blur Image"
      },
      {
        "name": "Border",
        "value": "border",
        "description": "Adds a border to the image",
        "action": "Border Image"
      },
      {
        "name": "Composite",
        "value": "composite",
        "description": "Composite image on top of another one",
        "action": "Composite Image"
      },
      {
        "name": "Create",
        "value": "create",
        "description": "Create a new image",
        "action": "Create Image"
      },
      {
        "name": "Crop",
        "value": "crop",
        "description": "Crops the image",
        "action": "Crop Image"
      },
      {
        "name": "Draw",
        "value": "draw",
        "description": "Draw on image",
        "action": "Draw Image"
      },
      {
        "name": "Get Information",
        "value": "information",
        "description": "Returns image information like resolution"
      },
      {
        "name": "Multi Step",
        "value": "multiStep",
        "description": "Perform multiple operations"
      },
      {
        "name": "Resize",
        "value": "resize",
        "description": "Change the size of image",
        "action": "Resize Image"
      },
      {
        "name": "Rotate",
        "value": "rotate",
        "description": "Rotate image",
        "action": "Rotate Image"
      },
      {
        "name": "Shear",
        "value": "shear",
        "description": "Shear image along the X or Y axis",
        "action": "Shear Image"
      },
      {
        "name": "Text",
        "value": "text",
        "description": "Adds text to image",
        "action": "Apply Text to Image"
      },
      {
        "name": "Transparent",
        "value": "transparent",
        "description": "Make a color in image transparent",
        "action": "Add Transparency to Image"
      }
    ],
    "default": "border"
  },
  {
    "displayName": "Property Name",
    "name": "dataPropertyName",
    "type": "string",
    "default": "data",
    "description": "Name of the binary property in which the image data can be found"
  },
  {
    "displayName": "Operations",
    "name": "operations",
    "placeholder": "Add Operation",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true,
      "sortable": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "multiStep"
        ]
      }
    },
    "description": "The operations to perform",
    "default": {},
    "options": [
      {
        "name": "operations",
        "displayName": "Operations",
        "values": [
          {
            "displayName": "Operation",
            "name": "operation",
            "type": "options",
            "noDataExpression": true,
            "options": [
              {
                "name": "Blur",
                "value": "blur",
                "description": "Adds a blur to the image and so makes it less sharp",
                "action": "Blur Image"
              },
              {
                "name": "Border",
                "value": "border",
                "description": "Adds a border to the image",
                "action": "Border Image"
              },
              {
                "name": "Composite",
                "value": "composite",
                "description": "Composite image on top of another one",
                "action": "Composite Image"
              },
              {
                "name": "Create",
                "value": "create",
                "description": "Create a new image",
                "action": "Create Image"
              },
              {
                "name": "Crop",
                "value": "crop",
                "description": "Crops the image",
                "action": "Crop Image"
              },
              {
                "name": "Draw",
                "value": "draw",
                "description": "Draw on image",
                "action": "Draw Image"
              },
              {
                "name": "Rotate",
                "value": "rotate",
                "description": "Rotate image",
                "action": "Rotate Image"
              },
              {
                "name": "Resize",
                "value": "resize",
                "description": "Change the size of image",
                "action": "Resize Image"
              },
              {
                "name": "Shear",
                "value": "shear",
                "description": "Shear image along the X or Y axis",
                "action": "Shear Image"
              },
              {
                "name": "Text",
                "value": "text",
                "description": "Adds text to image",
                "action": "Apply Text to Image"
              },
              {
                "name": "Transparent",
                "value": "transparent",
                "description": "Make a color in image transparent",
                "action": "Add Transparency to Image"
              }
            ],
            "default": ""
          },
          {
            "displayName": "Background Color",
            "name": "backgroundColor",
            "type": "color",
            "default": "#ffffff00",
            "typeOptions": {
              "showAlpha": true
            },
            "displayOptions": {
              "show": {
                "operation": [
                  "create"
                ]
              }
            },
            "description": "The background color of the image to create"
          },
          {
            "displayName": "Image Width",
            "name": "width",
            "type": "number",
            "default": 50,
            "typeOptions": {
              "minValue": 1
            },
            "displayOptions": {
              "show": {
                "operation": [
                  "create"
                ]
              }
            },
            "description": "The width of the image to create"
          },
          {
            "displayName": "Image Height",
            "name": "height",
            "type": "number",
            "default": 50,
            "typeOptions": {
              "minValue": 1
            },
            "displayOptions": {
              "show": {
                "operation": [
                  "create"
                ]
              }
            },
            "description": "The height of the image to create"
          },
          {
            "displayName": "Primitive",
            "name": "primitive",
            "type": "options",
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ]
              }
            },
            "options": [
              {
                "name": "Circle",
                "value": "circle"
              },
              {
                "name": "Line",
                "value": "line"
              },
              {
                "name": "Rectangle",
                "value": "rectangle"
              }
            ],
            "default": "rectangle",
            "description": "The primitive to draw"
          },
          {
            "displayName": "Color",
            "name": "color",
            "type": "color",
            "default": "#ff000000",
            "typeOptions": {
              "showAlpha": true
            },
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ]
              }
            },
            "description": "The color of the primitive to draw"
          },
          {
            "displayName": "Start Position X",
            "name": "startPositionX",
            "type": "number",
            "default": 50,
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ],
                "primitive": [
                  "circle",
                  "line",
                  "rectangle"
                ]
              }
            },
            "description": "X (horizontal) start position of the primitive"
          },
          {
            "displayName": "Start Position Y",
            "name": "startPositionY",
            "type": "number",
            "default": 50,
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ],
                "primitive": [
                  "circle",
                  "line",
                  "rectangle"
                ]
              }
            },
            "description": "Y (horizontal) start position of the primitive"
          },
          {
            "displayName": "End Position X",
            "name": "endPositionX",
            "type": "number",
            "default": 250,
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ],
                "primitive": [
                  "circle",
                  "line",
                  "rectangle"
                ]
              }
            },
            "description": "X (horizontal) end position of the primitive"
          },
          {
            "displayName": "End Position Y",
            "name": "endPositionY",
            "type": "number",
            "default": 250,
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ],
                "primitive": [
                  "circle",
                  "line",
                  "rectangle"
                ]
              }
            },
            "description": "Y (horizontal) end position of the primitive"
          },
          {
            "displayName": "Corner Radius",
            "name": "cornerRadius",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "draw"
                ],
                "primitive": [
                  "rectangle"
                ]
              }
            },
            "description": "The radius of the corner to create round corners"
          },
          {
            "displayName": "Text",
            "name": "text",
            "typeOptions": {
              "rows": 5
            },
            "type": "string",
            "default": "",
            "placeholder": "Text to render",
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "Text to write on the image"
          },
          {
            "displayName": "Font Size",
            "name": "fontSize",
            "type": "number",
            "default": 18,
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "Size of the text"
          },
          {
            "displayName": "Font Color",
            "name": "fontColor",
            "type": "color",
            "default": "#000000",
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "Color of the text"
          },
          {
            "displayName": "Position X",
            "name": "positionX",
            "type": "number",
            "default": 50,
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "X (horizontal) position of the text"
          },
          {
            "displayName": "Position Y",
            "name": "positionY",
            "type": "number",
            "default": 50,
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "Y (vertical) position of the text"
          },
          {
            "displayName": "Max Line Length",
            "name": "lineLength",
            "type": "number",
            "typeOptions": {
              "minValue": 1
            },
            "default": 80,
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "description": "Max amount of characters in a line before a line-break should get added"
          },
          {
            "displayName": "Blur",
            "name": "blur",
            "type": "number",
            "typeOptions": {
              "minValue": 0,
              "maxValue": 1000
            },
            "default": 5,
            "displayOptions": {
              "show": {
                "operation": [
                  "blur"
                ]
              }
            },
            "description": "How strong the blur should be"
          },
          {
            "displayName": "Sigma",
            "name": "sigma",
            "type": "number",
            "typeOptions": {
              "minValue": 0,
              "maxValue": 1000
            },
            "default": 2,
            "displayOptions": {
              "show": {
                "operation": [
                  "blur"
                ]
              }
            },
            "description": "The sigma of the blur"
          },
          {
            "displayName": "Border Width",
            "name": "borderWidth",
            "type": "number",
            "default": 10,
            "displayOptions": {
              "show": {
                "operation": [
                  "border"
                ]
              }
            },
            "description": "The width of the border"
          },
          {
            "displayName": "Border Height",
            "name": "borderHeight",
            "type": "number",
            "default": 10,
            "displayOptions": {
              "show": {
                "operation": [
                  "border"
                ]
              }
            },
            "description": "The height of the border"
          },
          {
            "displayName": "Border Color",
            "name": "borderColor",
            "type": "color",
            "default": "#000000",
            "displayOptions": {
              "show": {
                "operation": [
                  "border"
                ]
              }
            },
            "description": "Color of the border"
          },
          {
            "displayName": "Composite Image Property",
            "name": "dataPropertyNameComposite",
            "type": "string",
            "default": "",
            "placeholder": "data2",
            "displayOptions": {
              "show": {
                "operation": [
                  "composite"
                ]
              }
            },
            "description": "The name of the binary property which contains the data of the image to composite on top of image which is found in Property Name"
          },
          {
            "displayName": "Operator",
            "name": "operator",
            "type": "options",
            "displayOptions": {
              "show": {
                "operation": [
                  "composite"
                ]
              }
            },
            "options": [
              {
                "name": "Add",
                "value": "Add"
              },
              {
                "name": "Atop",
                "value": "Atop"
              },
              {
                "name": "Bumpmap",
                "value": "Bumpmap"
              },
              {
                "name": "Copy",
                "value": "Copy"
              },
              {
                "name": "Copy Black",
                "value": "CopyBlack"
              },
              {
                "name": "Copy Blue",
                "value": "CopyBlue"
              },
              {
                "name": "Copy Cyan",
                "value": "CopyCyan"
              },
              {
                "name": "Copy Green",
                "value": "CopyGreen"
              },
              {
                "name": "Copy Magenta",
                "value": "CopyMagenta"
              },
              {
                "name": "Copy Opacity",
                "value": "CopyOpacity"
              },
              {
                "name": "Copy Red",
                "value": "CopyRed"
              },
              {
                "name": "Copy Yellow",
                "value": "CopyYellow"
              },
              {
                "name": "Difference",
                "value": "Difference"
              },
              {
                "name": "Divide",
                "value": "Divide"
              },
              {
                "name": "In",
                "value": "In"
              },
              {
                "name": "Minus",
                "value": "Minus"
              },
              {
                "name": "Multiply",
                "value": "Multiply"
              },
              {
                "name": "Out",
                "value": "Out"
              },
              {
                "name": "Over",
                "value": "Over"
              },
              {
                "name": "Plus",
                "value": "Plus"
              },
              {
                "name": "Subtract",
                "value": "Subtract"
              },
              {
                "name": "Xor",
                "value": "Xor"
              }
            ],
            "default": "Over",
            "description": "The operator to use to combine the images"
          },
          {
            "displayName": "Position X",
            "name": "positionX",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "composite"
                ]
              }
            },
            "description": "X (horizontal) position of composite image"
          },
          {
            "displayName": "Position Y",
            "name": "positionY",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "composite"
                ]
              }
            },
            "description": "Y (vertical) position of composite image"
          },
          {
            "displayName": "Width",
            "name": "width",
            "type": "number",
            "default": 500,
            "displayOptions": {
              "show": {
                "operation": [
                  "crop"
                ]
              }
            },
            "description": "Crop width"
          },
          {
            "displayName": "Height",
            "name": "height",
            "type": "number",
            "default": 500,
            "displayOptions": {
              "show": {
                "operation": [
                  "crop"
                ]
              }
            },
            "description": "Crop height"
          },
          {
            "displayName": "Position X",
            "name": "positionX",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "crop"
                ]
              }
            },
            "description": "X (horizontal) position to crop from"
          },
          {
            "displayName": "Position Y",
            "name": "positionY",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "crop"
                ]
              }
            },
            "description": "Y (vertical) position to crop from"
          },
          {
            "displayName": "Width",
            "name": "width",
            "type": "number",
            "default": 500,
            "displayOptions": {
              "show": {
                "operation": [
                  "resize"
                ]
              }
            },
            "description": "New width of the image"
          },
          {
            "displayName": "Height",
            "name": "height",
            "type": "number",
            "default": 500,
            "displayOptions": {
              "show": {
                "operation": [
                  "resize"
                ]
              }
            },
            "description": "New height of the image"
          },
          {
            "displayName": "Option",
            "name": "resizeOption",
            "type": "options",
            "options": [
              {
                "name": "Ignore Aspect Ratio",
                "value": "ignoreAspectRatio",
                "description": "Ignore aspect ratio and resize exactly to specified values"
              },
              {
                "name": "Maximum Area",
                "value": "maximumArea",
                "description": "Specified values are maximum area"
              },
              {
                "name": "Minimum Area",
                "value": "minimumArea",
                "description": "Specified values are minimum area"
              },
              {
                "name": "Only if Larger",
                "value": "onlyIfLarger",
                "description": "Resize only if image is larger than width or height"
              },
              {
                "name": "Only if Smaller",
                "value": "onlyIfSmaller",
                "description": "Resize only if image is smaller than width or height"
              },
              {
                "name": "Percent",
                "value": "percent",
                "description": "Width and height are specified in percents"
              }
            ],
            "default": "maximumArea",
            "displayOptions": {
              "show": {
                "operation": [
                  "resize"
                ]
              }
            },
            "description": "How to resize the image"
          },
          {
            "displayName": "Rotate",
            "name": "rotate",
            "type": "number",
            "typeOptions": {
              "minValue": -360,
              "maxValue": 360
            },
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "rotate"
                ]
              }
            },
            "description": "How much the image should be rotated"
          },
          {
            "displayName": "Background Color",
            "name": "backgroundColor",
            "type": "color",
            "default": "#ffffffff",
            "typeOptions": {
              "showAlpha": true
            },
            "displayOptions": {
              "show": {
                "operation": [
                  "rotate"
                ]
              }
            },
            "description": "The color to use for the background when image gets rotated by anything which is not a multiple of 90"
          },
          {
            "displayName": "Degrees X",
            "name": "degreesX",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "shear"
                ]
              }
            },
            "description": "X (horizontal) shear degrees"
          },
          {
            "displayName": "Degrees Y",
            "name": "degreesY",
            "type": "number",
            "default": 0,
            "displayOptions": {
              "show": {
                "operation": [
                  "shear"
                ]
              }
            },
            "description": "Y (vertical) shear degrees"
          },
          {
            "displayName": "Color",
            "name": "color",
            "type": "color",
            "default": "#ff0000",
            "displayOptions": {
              "show": {
                "operation": [
                  "transparent"
                ]
              }
            },
            "description": "The color to make transparent"
          },
          {
            "displayName": "Font Name or ID",
            "name": "font",
            "type": "options",
            "displayOptions": {
              "show": {
                "operation": [
                  "text"
                ]
              }
            },
            "typeOptions": {
              "loadOptionsMethod": "getFonts"
            },
            "default": "",
            "description": "The font to use. Defaults to Arial. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Background Color",
    "name": "backgroundColor",
    "type": "color",
    "default": "#ffffff00",
    "typeOptions": {
      "showAlpha": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ]
      }
    },
    "description": "The background color of the image to create"
  },
  {
    "displayName": "Image Width",
    "name": "width",
    "type": "number",
    "default": 50,
    "typeOptions": {
      "minValue": 1
    },
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ]
      }
    },
    "description": "The width of the image to create"
  },
  {
    "displayName": "Image Height",
    "name": "height",
    "type": "number",
    "default": 50,
    "typeOptions": {
      "minValue": 1
    },
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ]
      }
    },
    "description": "The height of the image to create"
  },
  {
    "displayName": "Primitive",
    "name": "primitive",
    "type": "options",
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ]
      }
    },
    "options": [
      {
        "name": "Circle",
        "value": "circle"
      },
      {
        "name": "Line",
        "value": "line"
      },
      {
        "name": "Rectangle",
        "value": "rectangle"
      }
    ],
    "default": "rectangle",
    "description": "The primitive to draw"
  },
  {
    "displayName": "Color",
    "name": "color",
    "type": "color",
    "default": "#ff000000",
    "typeOptions": {
      "showAlpha": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ]
      }
    },
    "description": "The color of the primitive to draw"
  },
  {
    "displayName": "Start Position X",
    "name": "startPositionX",
    "type": "number",
    "default": 50,
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ],
        "primitive": [
          "circle",
          "line",
          "rectangle"
        ]
      }
    },
    "description": "X (horizontal) start position of the primitive"
  },
  {
    "displayName": "Start Position Y",
    "name": "startPositionY",
    "type": "number",
    "default": 50,
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ],
        "primitive": [
          "circle",
          "line",
          "rectangle"
        ]
      }
    },
    "description": "Y (horizontal) start position of the primitive"
  },
  {
    "displayName": "End Position X",
    "name": "endPositionX",
    "type": "number",
    "default": 250,
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ],
        "primitive": [
          "circle",
          "line",
          "rectangle"
        ]
      }
    },
    "description": "X (horizontal) end position of the primitive"
  },
  {
    "displayName": "End Position Y",
    "name": "endPositionY",
    "type": "number",
    "default": 250,
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ],
        "primitive": [
          "circle",
          "line",
          "rectangle"
        ]
      }
    },
    "description": "Y (horizontal) end position of the primitive"
  },
  {
    "displayName": "Corner Radius",
    "name": "cornerRadius",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "draw"
        ],
        "primitive": [
          "rectangle"
        ]
      }
    },
    "description": "The radius of the corner to create round corners"
  },
  {
    "displayName": "Text",
    "name": "text",
    "typeOptions": {
      "rows": 5
    },
    "type": "string",
    "default": "",
    "placeholder": "Text to render",
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "Text to write on the image"
  },
  {
    "displayName": "Font Size",
    "name": "fontSize",
    "type": "number",
    "default": 18,
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "Size of the text"
  },
  {
    "displayName": "Font Color",
    "name": "fontColor",
    "type": "color",
    "default": "#000000",
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "Color of the text"
  },
  {
    "displayName": "Position X",
    "name": "positionX",
    "type": "number",
    "default": 50,
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "X (horizontal) position of the text"
  },
  {
    "displayName": "Position Y",
    "name": "positionY",
    "type": "number",
    "default": 50,
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "Y (vertical) position of the text"
  },
  {
    "displayName": "Max Line Length",
    "name": "lineLength",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "default": 80,
    "displayOptions": {
      "show": {
        "operation": [
          "text"
        ]
      }
    },
    "description": "Max amount of characters in a line before a line-break should get added"
  },
  {
    "displayName": "Blur",
    "name": "blur",
    "type": "number",
    "typeOptions": {
      "minValue": 0,
      "maxValue": 1000
    },
    "default": 5,
    "displayOptions": {
      "show": {
        "operation": [
          "blur"
        ]
      }
    },
    "description": "How strong the blur should be"
  },
  {
    "displayName": "Sigma",
    "name": "sigma",
    "type": "number",
    "typeOptions": {
      "minValue": 0,
      "maxValue": 1000
    },
    "default": 2,
    "displayOptions": {
      "show": {
        "operation": [
          "blur"
        ]
      }
    },
    "description": "The sigma of the blur"
  },
  {
    "displayName": "Border Width",
    "name": "borderWidth",
    "type": "number",
    "default": 10,
    "displayOptions": {
      "show": {
        "operation": [
          "border"
        ]
      }
    },
    "description": "The width of the border"
  },
  {
    "displayName": "Border Height",
    "name": "borderHeight",
    "type": "number",
    "default": 10,
    "displayOptions": {
      "show": {
        "operation": [
          "border"
        ]
      }
    },
    "description": "The height of the border"
  },
  {
    "displayName": "Border Color",
    "name": "borderColor",
    "type": "color",
    "default": "#000000",
    "displayOptions": {
      "show": {
        "operation": [
          "border"
        ]
      }
    },
    "description": "Color of the border"
  },
  {
    "displayName": "Composite Image Property",
    "name": "dataPropertyNameComposite",
    "type": "string",
    "default": "",
    "placeholder": "data2",
    "displayOptions": {
      "show": {
        "operation": [
          "composite"
        ]
      }
    },
    "description": "The name of the binary property which contains the data of the image to composite on top of image which is found in Property Name"
  },
  {
    "displayName": "Operator",
    "name": "operator",
    "type": "options",
    "displayOptions": {
      "show": {
        "operation": [
          "composite"
        ]
      }
    },
    "options": [
      {
        "name": "Add",
        "value": "Add"
      },
      {
        "name": "Atop",
        "value": "Atop"
      },
      {
        "name": "Bumpmap",
        "value": "Bumpmap"
      },
      {
        "name": "Copy",
        "value": "Copy"
      },
      {
        "name": "Copy Black",
        "value": "CopyBlack"
      },
      {
        "name": "Copy Blue",
        "value": "CopyBlue"
      },
      {
        "name": "Copy Cyan",
        "value": "CopyCyan"
      },
      {
        "name": "Copy Green",
        "value": "CopyGreen"
      },
      {
        "name": "Copy Magenta",
        "value": "CopyMagenta"
      },
      {
        "name": "Copy Opacity",
        "value": "CopyOpacity"
      },
      {
        "name": "Copy Red",
        "value": "CopyRed"
      },
      {
        "name": "Copy Yellow",
        "value": "CopyYellow"
      },
      {
        "name": "Difference",
        "value": "Difference"
      },
      {
        "name": "Divide",
        "value": "Divide"
      },
      {
        "name": "In",
        "value": "In"
      },
      {
        "name": "Minus",
        "value": "Minus"
      },
      {
        "name": "Multiply",
        "value": "Multiply"
      },
      {
        "name": "Out",
        "value": "Out"
      },
      {
        "name": "Over",
        "value": "Over"
      },
      {
        "name": "Plus",
        "value": "Plus"
      },
      {
        "name": "Subtract",
        "value": "Subtract"
      },
      {
        "name": "Xor",
        "value": "Xor"
      }
    ],
    "default": "Over",
    "description": "The operator to use to combine the images"
  },
  {
    "displayName": "Position X",
    "name": "positionX",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "composite"
        ]
      }
    },
    "description": "X (horizontal) position of composite image"
  },
  {
    "displayName": "Position Y",
    "name": "positionY",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "composite"
        ]
      }
    },
    "description": "Y (vertical) position of composite image"
  },
  {
    "displayName": "Width",
    "name": "width",
    "type": "number",
    "default": 500,
    "displayOptions": {
      "show": {
        "operation": [
          "crop"
        ]
      }
    },
    "description": "Crop width"
  },
  {
    "displayName": "Height",
    "name": "height",
    "type": "number",
    "default": 500,
    "displayOptions": {
      "show": {
        "operation": [
          "crop"
        ]
      }
    },
    "description": "Crop height"
  },
  {
    "displayName": "Position X",
    "name": "positionX",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "crop"
        ]
      }
    },
    "description": "X (horizontal) position to crop from"
  },
  {
    "displayName": "Position Y",
    "name": "positionY",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "crop"
        ]
      }
    },
    "description": "Y (vertical) position to crop from"
  },
  {
    "displayName": "Width",
    "name": "width",
    "type": "number",
    "default": 500,
    "displayOptions": {
      "show": {
        "operation": [
          "resize"
        ]
      }
    },
    "description": "New width of the image"
  },
  {
    "displayName": "Height",
    "name": "height",
    "type": "number",
    "default": 500,
    "displayOptions": {
      "show": {
        "operation": [
          "resize"
        ]
      }
    },
    "description": "New height of the image"
  },
  {
    "displayName": "Option",
    "name": "resizeOption",
    "type": "options",
    "options": [
      {
        "name": "Ignore Aspect Ratio",
        "value": "ignoreAspectRatio",
        "description": "Ignore aspect ratio and resize exactly to specified values"
      },
      {
        "name": "Maximum Area",
        "value": "maximumArea",
        "description": "Specified values are maximum area"
      },
      {
        "name": "Minimum Area",
        "value": "minimumArea",
        "description": "Specified values are minimum area"
      },
      {
        "name": "Only if Larger",
        "value": "onlyIfLarger",
        "description": "Resize only if image is larger than width or height"
      },
      {
        "name": "Only if Smaller",
        "value": "onlyIfSmaller",
        "description": "Resize only if image is smaller than width or height"
      },
      {
        "name": "Percent",
        "value": "percent",
        "description": "Width and height are specified in percents"
      }
    ],
    "default": "maximumArea",
    "displayOptions": {
      "show": {
        "operation": [
          "resize"
        ]
      }
    },
    "description": "How to resize the image"
  },
  {
    "displayName": "Rotate",
    "name": "rotate",
    "type": "number",
    "typeOptions": {
      "minValue": -360,
      "maxValue": 360
    },
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "rotate"
        ]
      }
    },
    "description": "How much the image should be rotated"
  },
  {
    "displayName": "Background Color",
    "name": "backgroundColor",
    "type": "color",
    "default": "#ffffffff",
    "typeOptions": {
      "showAlpha": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "rotate"
        ]
      }
    },
    "description": "The color to use for the background when image gets rotated by anything which is not a multiple of 90"
  },
  {
    "displayName": "Degrees X",
    "name": "degreesX",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "shear"
        ]
      }
    },
    "description": "X (horizontal) shear degrees"
  },
  {
    "displayName": "Degrees Y",
    "name": "degreesY",
    "type": "number",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "shear"
        ]
      }
    },
    "description": "Y (vertical) shear degrees"
  },
  {
    "displayName": "Color",
    "name": "color",
    "type": "color",
    "default": "#ff0000",
    "displayOptions": {
      "show": {
        "operation": [
          "transparent"
        ]
      }
    },
    "description": "The color to make transparent"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "displayOptions": {
      "hide": {
        "operation": [
          "information"
        ]
      }
    },
    "options": [
      {
        "displayName": "Destination Output Field",
        "name": "destinationKey",
        "type": "string",
        "default": "data",
        "placeholder": "e.g image",
        "description": "The name of the output field that will contain the file data"
      },
      {
        "displayName": "File Name",
        "name": "fileName",
        "type": "string",
        "default": "",
        "description": "File name to set in binary data"
      },
      {
        "displayName": "Font Name or ID",
        "name": "font",
        "type": "options",
        "displayOptions": {
          "show": {
            "/operation": [
              "text"
            ]
          }
        },
        "typeOptions": {
          "loadOptionsMethod": "getFonts"
        },
        "default": "",
        "description": "The font to use. Defaults to Arial. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Format",
        "name": "format",
        "type": "options",
        "options": [
          {
            "name": "bmp",
            "value": "bmp"
          },
          {
            "name": "gif",
            "value": "gif"
          },
          {
            "name": "jpeg",
            "value": "jpeg"
          },
          {
            "name": "png",
            "value": "png"
          },
          {
            "name": "tiff",
            "value": "tiff"
          },
          {
            "name": "WebP",
            "value": "webp"
          }
        ],
        "default": "jpeg",
        "description": "Set the output image format"
      },
      {
        "displayName": "Quality",
        "name": "quality",
        "type": "number",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 100
        },
        "default": 100,
        "displayOptions": {
          "show": {
            "format": [
              "jpeg",
              "png",
              "tiff"
            ]
          }
        },
        "description": "Sets the jpeg|png|tiff compression level from 0 to 100 (best)"
      }
    ]
  }
]
```
