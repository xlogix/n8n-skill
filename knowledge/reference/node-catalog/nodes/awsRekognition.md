# AWS Rekognition

- Node name: `awsRekognition`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Aws/Rekognition/AwsRekognition.node.js`
- Node version: `1`
- Groups: `output`
- Description: Sends data to AWS Rekognition

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `aws` (required)
- `awsAssumeRole` (required)

## Resource and Operation Coverage
### Resources
- Image (`image`)

### Operations
- default/all resources: `analyze`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `iam` |  |
| Resource | `resource` | `options` | no | `image` |  |
| Operation | `operation` | `options` | no | `analyze` |  |
| Type | `type` | `options` | no | `detectFaces` |  |
| Binary File | `binaryData` | `boolean` | yes | `false` | Whether the image to analyze should be taken from binary field |
| Input Binary Field | `binaryPropertyName` | `string` | yes | `data` |  |
| Bucket | `bucket` | `string` | yes |  | Name of the S3 bucket |
| Name | `name` | `string` | yes |  | S3 object key name |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "AWS (IAM)",
        "value": "iam"
      },
      {
        "name": "AWS (Assume Role)",
        "value": "assumeRole"
      }
    ],
    "default": "iam"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Image",
        "value": "image"
      }
    ],
    "default": "image"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Analyze",
        "value": "analyze"
      }
    ],
    "default": "analyze"
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ]
      }
    },
    "options": [
      {
        "name": "Detect Faces",
        "value": "detectFaces"
      },
      {
        "name": "Detect Labels",
        "value": "detectLabels"
      },
      {
        "name": "Detect Moderation Labels",
        "value": "detectModerationLabels"
      },
      {
        "name": "Detect Text",
        "value": "detectText"
      },
      {
        "name": "Recognize Celebrity",
        "value": "recognizeCelebrity"
      }
    ],
    "default": "detectFaces"
  },
  {
    "displayName": "Binary File",
    "name": "binaryData",
    "type": "boolean",
    "default": false,
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ]
      }
    },
    "description": "Whether the image to analyze should be taken from binary field"
  },
  {
    "displayName": "Input Binary Field",
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ],
        "binaryData": [
          true
        ]
      }
    },
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "hint": "The name of the input binary field containing the file to be written",
    "required": true
  },
  {
    "displayName": "Bucket",
    "name": "bucket",
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ],
        "binaryData": [
          false
        ]
      }
    },
    "type": "string",
    "default": "",
    "required": true,
    "description": "Name of the S3 bucket"
  },
  {
    "displayName": "Name",
    "name": "name",
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ],
        "binaryData": [
          false
        ]
      }
    },
    "type": "string",
    "default": "",
    "required": true,
    "description": "S3 object key name"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "analyze"
        ],
        "resource": [
          "image"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Regions of Interest",
        "name": "regionsOfInterestUi",
        "type": "fixedCollection",
        "default": {},
        "placeholder": "Add Region of Interest",
        "displayOptions": {
          "show": {
            "/type": [
              "detectText"
            ]
          }
        },
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "name": "regionsOfInterestValues",
            "displayName": "Region of Interest",
            "values": [
              {
                "displayName": "Height",
                "name": "height",
                "type": "number",
                "description": "Height of the bounding box as a ratio of the overall image height",
                "default": 0
              },
              {
                "displayName": "Left",
                "name": "left",
                "type": "number",
                "description": "Left coordinate of the bounding box as a ratio of overall image width",
                "default": 0
              },
              {
                "displayName": "Top",
                "name": "top",
                "type": "number",
                "description": "Top coordinate of the bounding box as a ratio of overall image height",
                "default": 0
              },
              {
                "displayName": "Width",
                "name": "Width",
                "type": "number",
                "description": "Width of the bounding box as a ratio of the overall image width",
                "default": 0
              }
            ]
          }
        ]
      },
      {
        "displayName": "Version",
        "name": "version",
        "displayOptions": {
          "show": {
            "/binaryData": [
              false
            ]
          }
        },
        "type": "string",
        "default": "",
        "description": "If the bucket is versioning enabled, you can specify the object version"
      },
      {
        "displayName": "Word Filter",
        "name": "wordFilterUi",
        "type": "collection",
        "default": {},
        "placeholder": "Add Word Filter",
        "displayOptions": {
          "show": {
            "/type": [
              "detectText"
            ]
          }
        },
        "typeOptions": {
          "multipleValues": false
        },
        "options": [
          {
            "displayName": "Min Bounding Box Height",
            "name": "MinBoundingBoxHeight",
            "type": "number",
            "description": "Sets the minimum height of the word bounding box. Words with bounding box heights lesser than this value will be excluded from the result. Value is relative to the video frame height.",
            "default": 0
          },
          {
            "displayName": "Min Bounding Box Width",
            "name": "MinBoundingBoxWidth",
            "type": "number",
            "description": "Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than this value will be excluded from the result. Value is relative to the video frame width.",
            "default": 0
          },
          {
            "displayName": "Min Confidence",
            "name": "MinConfidence",
            "type": "number",
            "description": "Sets the confidence of word detection. Words with detection confidence below this will be excluded from the result. Values should be between 50 and 100 as Text in Video will not return any result below 50.",
            "default": 0
          }
        ]
      },
      {
        "displayName": "Max Labels",
        "name": "maxLabels",
        "type": "number",
        "displayOptions": {
          "show": {
            "/type": [
              "detectModerationLabels",
              "detectLabels"
            ]
          }
        },
        "default": 0,
        "typeOptions": {
          "minValue": 0
        },
        "description": "Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels."
      },
      {
        "displayName": "Min Confidence",
        "name": "minConfidence",
        "type": "number",
        "displayOptions": {
          "show": {
            "/type": [
              "detectModerationLabels",
              "detectLabels"
            ]
          }
        },
        "default": 0,
        "typeOptions": {
          "minValue": 0,
          "maxValue": 100
        },
        "description": "Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value."
      },
      {
        "displayName": "Attributes",
        "name": "attributes",
        "type": "multiOptions",
        "displayOptions": {
          "show": {
            "/type": [
              "detectFaces"
            ]
          }
        },
        "options": [
          {
            "name": "All",
            "value": "all"
          },
          {
            "name": "Default",
            "value": "default"
          }
        ],
        "default": [],
        "description": "An array of facial attributes you want to be returned"
      }
    ]
  }
]
```
