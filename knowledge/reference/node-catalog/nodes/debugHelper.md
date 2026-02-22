# DebugHelper

- Node name: `debugHelper`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/DebugHelper/DebugHelper.node.js`
- Node version: `1`
- Groups: `output`
- Description: Causes problems intentionally and generates useful data for debugging

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Category | `category` | `options` | no | `throwError` |  |
| Error Type | `throwErrorType` | `options` | no | `NodeApiError` |  |
| Error Message | `throwErrorMessage` | `string` | no | `Node has thrown an error` | The message to send as part of the error |
| Memory Size to Generate | `memorySizeValue` | `number` | no | `10` | The approximate amount of memory to generate. Be generous... |
| Data Type | `randomDataType` | `options` | no | `user` |  |
| NanoId Alphabet | `nanoidAlphabet` | `string` | no | `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ` | The alphabet to use for generating the nanoIds |
| NanoId Length | `nanoidLength` | `string` | no | `16` | The length of each nanoIds |
| Seed | `randomDataSeed` | `string` | no |  | If set, seed to use for generating the data (same seed will generate the same data) |
| Number of Items to Generate | `randomDataCount` | `number` | no | `10` | The number of random data items to generate into an array |
| Output as Single Array | `randomDataSingleArray` | `boolean` | no | `false` | Whether to output a single array instead of multiple items |

## Full Parameter Schema
```json
[
  {
    "displayName": "Category",
    "name": "category",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Do Nothing",
        "value": "doNothing",
        "description": "Does nothing"
      },
      {
        "name": "Throw Error",
        "value": "throwError",
        "description": "Throws an error with the specified type and message"
      },
      {
        "name": "Out Of Memory",
        "value": "oom",
        "description": "Generates a large amount of memory to cause an out of memory error"
      },
      {
        "name": "Generate Random Data",
        "value": "randomData",
        "description": "Generates random data sets"
      }
    ],
    "default": "throwError"
  },
  {
    "displayName": "Error Type",
    "name": "throwErrorType",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "NodeApiError",
        "value": "NodeApiError"
      },
      {
        "name": "NodeOperationError",
        "value": "NodeOperationError"
      },
      {
        "name": "Error",
        "value": "Error"
      }
    ],
    "default": "NodeApiError",
    "displayOptions": {
      "show": {
        "category": [
          "throwError"
        ]
      }
    }
  },
  {
    "displayName": "Error Message",
    "name": "throwErrorMessage",
    "type": "string",
    "default": "Node has thrown an error",
    "description": "The message to send as part of the error",
    "displayOptions": {
      "show": {
        "category": [
          "throwError"
        ]
      }
    }
  },
  {
    "displayName": "Memory Size to Generate",
    "name": "memorySizeValue",
    "type": "number",
    "default": 10,
    "description": "The approximate amount of memory to generate. Be generous...",
    "displayOptions": {
      "show": {
        "category": [
          "oom"
        ]
      }
    }
  },
  {
    "displayName": "Data Type",
    "name": "randomDataType",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Address",
        "value": "address"
      },
      {
        "name": "Coordinates",
        "value": "latLong"
      },
      {
        "name": "Credit Card",
        "value": "creditCard"
      },
      {
        "name": "Email",
        "value": "email"
      },
      {
        "name": "IPv4",
        "value": "ipv4"
      },
      {
        "name": "IPv6",
        "value": "ipv6"
      },
      {
        "name": "MAC",
        "value": "macAddress"
      },
      {
        "name": "NanoIds",
        "value": "nanoid"
      },
      {
        "name": "URL",
        "value": "url"
      },
      {
        "name": "User Data",
        "value": "user"
      },
      {
        "name": "UUID",
        "value": "uuid"
      },
      {
        "name": "Version",
        "value": "semver"
      }
    ],
    "default": "user",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ]
      }
    }
  },
  {
    "displayName": "NanoId Alphabet",
    "name": "nanoidAlphabet",
    "type": "string",
    "default": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "description": "The alphabet to use for generating the nanoIds",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ],
        "randomDataType": [
          "nanoid"
        ]
      }
    }
  },
  {
    "displayName": "NanoId Length",
    "name": "nanoidLength",
    "type": "string",
    "default": "16",
    "description": "The length of each nanoIds",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ],
        "randomDataType": [
          "nanoid"
        ]
      }
    }
  },
  {
    "displayName": "Seed",
    "name": "randomDataSeed",
    "type": "string",
    "default": "",
    "placeholder": "Leave empty for random seed",
    "description": "If set, seed to use for generating the data (same seed will generate the same data)",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ]
      }
    }
  },
  {
    "displayName": "Number of Items to Generate",
    "name": "randomDataCount",
    "type": "number",
    "default": 10,
    "description": "The number of random data items to generate into an array",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ]
      }
    }
  },
  {
    "displayName": "Output as Single Array",
    "name": "randomDataSingleArray",
    "type": "boolean",
    "default": false,
    "description": "Whether to output a single array instead of multiple items",
    "displayOptions": {
      "show": {
        "category": [
          "randomData"
        ]
      }
    }
  }
]
```
