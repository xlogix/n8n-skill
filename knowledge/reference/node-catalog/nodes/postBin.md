# PostBin

- Node name: `postBin`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/PostBin/PostBin.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume PostBin API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
### Resources
- Bin (`bin`)
- Request (`request`)

### Operations
- resource `bin`: `create`, `delete`, `get`
- resource `request`: `get`, `removeFirst`, `send`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | yes | `bin` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Bin ID | `binId` | `string` | yes |  | Unique identifier for each bin |
| Operation | `operation` | `options` | no | `get` |  |
| Bin ID | `binId` | `string` | yes |  | Unique identifier for each bin |
| Bin Content | `binContent` | `string` | no |  |  |
| Request ID | `requestId` | `string` | yes |  | Unique identifier for each request |

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
        "name": "Bin",
        "value": "bin"
      },
      {
        "name": "Request",
        "value": "request"
      }
    ],
    "default": "bin",
    "required": true
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "bin"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create bin",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/bin"
          },
          "output": {
            "postReceive": [
              null
            ]
          }
        },
        "action": "Create a bin"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a bin",
        "routing": {
          "request": {
            "method": "GET"
          },
          "output": {
            "postReceive": [
              null
            ]
          },
          "send": {
            "preSend": [
              null
            ]
          }
        },
        "action": "Get a bin"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a bin",
        "routing": {
          "request": {
            "method": "DELETE"
          },
          "send": {
            "preSend": [
              null
            ]
          }
        },
        "action": "Delete a bin"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Bin ID",
    "name": "binId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "bin"
        ],
        "operation": [
          "get",
          "delete"
        ]
      }
    },
    "description": "Unique identifier for each bin"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "request"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a request",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/bin/{{$parameter[\"binId\"]}}/req/{{$parameter[\"requestId\"]}}"
          },
          "send": {
            "preSend": [
              null
            ]
          }
        },
        "action": "Get a request"
      },
      {
        "name": "Remove First",
        "value": "removeFirst",
        "description": "Remove the first request from bin",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/bin/{{$parameter[\"binId\"]}}/req/shift"
          },
          "send": {
            "preSend": [
              null
            ]
          }
        },
        "action": "Remove First a request"
      },
      {
        "name": "Send",
        "value": "send",
        "description": "Send a test request to the bin",
        "routing": {
          "request": {
            "method": "POST"
          },
          "send": {
            "preSend": [
              null
            ]
          },
          "output": {
            "postReceive": [
              {
                "type": "set",
                "properties": {
                  "value": "={{ { \"requestId\": $response.body } }}"
                }
              }
            ]
          }
        },
        "action": "Send a request"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Bin ID",
    "name": "binId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "request"
        ],
        "operation": [
          "get",
          "removeFirst",
          "send"
        ]
      }
    },
    "description": "Unique identifier for each bin"
  },
  {
    "displayName": "Bin Content",
    "name": "binContent",
    "type": "string",
    "default": "",
    "typeOptions": {
      "rows": 5
    },
    "displayOptions": {
      "show": {
        "resource": [
          "request"
        ],
        "operation": [
          "send"
        ]
      }
    },
    "routing": {
      "send": {
        "property": "content",
        "type": "body"
      }
    }
  },
  {
    "displayName": "Request ID",
    "name": "requestId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "request"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "Unique identifier for each request"
  }
]
```
