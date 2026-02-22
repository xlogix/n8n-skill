# AWS Lambda

- Node name: `awsLambda`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Aws/AwsLambda.node.js`
- Node version: `1`
- Groups: `output`
- Description: Invoke functions on AWS Lambda

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `aws` (required)
- `awsAssumeRole` (required)

## Resource and Operation Coverage
### Operations
- default/all resources: `invoke`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `iam` |  |
| Operation | `operation` | `options` | no | `invoke` |  |
| Function Name or ID | `function` | `options` | yes |  | The function you want to invoke. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Qualifier | `qualifier` | `string` | yes | `$LATEST` | Specify a version or alias to invoke a published version of the function |
| Invocation Type | `invocationType` | `options` | no | `RequestResponse` | Specify if the workflow should wait for the function to return the results |
| JSON Input | `payload` | `string` | no |  | The JSON that you want to provide to your Lambda function as input |

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
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Invoke",
        "value": "invoke",
        "description": "Invoke a function",
        "action": "Invoke a function"
      }
    ],
    "default": "invoke"
  },
  {
    "displayName": "Function Name or ID",
    "name": "function",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getFunctions"
    },
    "displayOptions": {
      "show": {
        "operation": [
          "invoke"
        ]
      }
    },
    "options": [],
    "default": "",
    "required": true,
    "description": "The function you want to invoke. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Qualifier",
    "name": "qualifier",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "invoke"
        ]
      }
    },
    "required": true,
    "default": "$LATEST",
    "description": "Specify a version or alias to invoke a published version of the function"
  },
  {
    "displayName": "Invocation Type",
    "name": "invocationType",
    "type": "options",
    "options": [
      {
        "name": "Wait for Results",
        "value": "RequestResponse",
        "description": "Invoke the function synchronously and wait for the response"
      },
      {
        "name": "Continue Workflow",
        "value": "Event",
        "description": "Invoke the function and immediately continue the workflow"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "invoke"
        ]
      }
    },
    "default": "RequestResponse",
    "description": "Specify if the workflow should wait for the function to return the results"
  },
  {
    "displayName": "JSON Input",
    "name": "payload",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "invoke"
        ]
      }
    },
    "default": "",
    "description": "The JSON that you want to provide to your Lambda function as input"
  }
]
```
