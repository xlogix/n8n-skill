# Asana Trigger

- Node name: `asanaTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Asana/AsanaTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Asana events occur.

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `asanaApi` (required)
- `asanaOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Resource | `resource` | `string` | yes |  | The resource ID to subscribe to. The resource can be a task or project. |
| Workspace Name or ID | `workspace` | `options` | no |  | The workspace ID the resource is registered under. This is only required if you want to allow overriding existing webhooks. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Access Token",
        "value": "accessToken"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "accessToken"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "string",
    "default": "",
    "required": true,
    "description": "The resource ID to subscribe to. The resource can be a task or project."
  },
  {
    "displayName": "Workspace Name or ID",
    "name": "workspace",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getWorkspaces"
    },
    "options": [],
    "default": "",
    "description": "The workspace ID the resource is registered under. This is only required if you want to allow overriding existing webhooks. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  }
]
```
