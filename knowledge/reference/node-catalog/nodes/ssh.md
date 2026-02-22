# SSH

- Node name: `ssh`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Ssh/Ssh.node.js`
- Node version: `1`
- Groups: `input`
- Description: Execute commands via SSH

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `sshPassword` (required)
- `sshPrivateKey` (required)

## Resource and Operation Coverage
### Resources
- Command (`command`)
- File (`file`)

### Operations
- resource `command`: `execute`
- resource `file`: `download`, `upload`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `password` |  |
| Resource | `resource` | `options` | no | `command` |  |
| Operation | `operation` | `options` | no | `execute` |  |
| Command | `command` | `string` | no |  | The command to be executed on a remote device |
| Working Directory | `cwd` | `string` | yes | `/` |  |
| Operation | `operation` | `options` | no | `upload` |  |
| Input Binary Field | `binaryPropertyName` | `string` | yes | `data` |  |
| Target Directory | `path` | `string` | yes |  | The directory to upload the file to. The name of the file does not need to be specified, it's taken from the binary data file name. To override this behavior, set the parameter "File Name" under options. |
| Path | `path` | `string` | yes |  | The file path of the file to download. Has to contain the full path including file name. |
| File Property | `binaryPropertyName` | `string` | yes | `data` | Object property name which holds binary data |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Password",
        "value": "password"
      },
      {
        "name": "Private Key",
        "value": "privateKey"
      }
    ],
    "default": "password"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Command",
        "value": "command"
      },
      {
        "name": "File",
        "value": "file"
      }
    ],
    "default": "command"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "command"
        ]
      }
    },
    "options": [
      {
        "name": "Execute",
        "value": "execute",
        "description": "Execute a command",
        "action": "Execute a command"
      }
    ],
    "default": "execute"
  },
  {
    "displayName": "Command",
    "name": "command",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "command"
        ],
        "operation": [
          "execute"
        ]
      }
    },
    "default": "",
    "description": "The command to be executed on a remote device"
  },
  {
    "displayName": "Working Directory",
    "name": "cwd",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "command"
        ],
        "operation": [
          "execute"
        ]
      }
    },
    "default": "/",
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
          "file"
        ]
      }
    },
    "options": [
      {
        "name": "Download",
        "value": "download",
        "description": "Download a file",
        "action": "Download a file"
      },
      {
        "name": "Upload",
        "value": "upload",
        "description": "Upload a file",
        "action": "Upload a file"
      }
    ],
    "default": "upload"
  },
  {
    "displayName": "Input Binary Field",
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "upload"
        ],
        "resource": [
          "file"
        ]
      }
    },
    "placeholder": "",
    "hint": "The name of the input binary field containing the file to be uploaded"
  },
  {
    "displayName": "Target Directory",
    "name": "path",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "file"
        ],
        "operation": [
          "upload"
        ]
      }
    },
    "default": "",
    "required": true,
    "placeholder": "/home/user",
    "description": "The directory to upload the file to. The name of the file does not need to be specified, it's taken from the binary data file name. To override this behavior, set the parameter \"File Name\" under options."
  },
  {
    "displayName": "Path",
    "displayOptions": {
      "show": {
        "resource": [
          "file"
        ],
        "operation": [
          "download"
        ]
      }
    },
    "name": "path",
    "type": "string",
    "default": "",
    "placeholder": "/home/user/invoice.txt",
    "description": "The file path of the file to download. Has to contain the full path including file name.",
    "required": true
  },
  {
    "displayName": "File Property",
    "displayOptions": {
      "show": {
        "resource": [
          "file"
        ],
        "operation": [
          "download"
        ]
      }
    },
    "name": "binaryPropertyName",
    "type": "string",
    "default": "data",
    "description": "Object property name which holds binary data",
    "required": true
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "resource": [
          "file"
        ],
        "operation": [
          "upload",
          "download"
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
        "description": "Overrides the binary data file name"
      }
    ]
  }
]
```
