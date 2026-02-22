# Execute Command

- Node name: `executeCommand`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ExecuteCommand/ExecuteCommand.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Executes a command on the host

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
| Execute Once | `executeOnce` | `boolean` | no | `true` | Whether to execute only once instead of once for each entry |
| Command | `command` | `string` | yes |  | The command to execute |

## Full Parameter Schema
```json
[
  {
    "displayName": "Execute Once",
    "name": "executeOnce",
    "type": "boolean",
    "default": true,
    "description": "Whether to execute only once instead of once for each entry"
  },
  {
    "displayName": "Command",
    "name": "command",
    "typeOptions": {
      "rows": 5
    },
    "type": "string",
    "default": "",
    "placeholder": "echo \"test\"",
    "description": "The command to execute",
    "required": true
  }
]
```
