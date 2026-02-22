# Bitbucket Trigger

- Node name: `bitbucketTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Bitbucket/BitbucketTrigger.node.js`
- Node version: `[1,1.1]`
- Groups: `trigger`
- Description: Handle Bitbucket events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `bitbucketApi` (required)
- `bitbucketAccessTokenApi` (required)

## Resource and Operation Coverage
### Resources
- Repository (`repository`)
- Workspace (`workspace`)


## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `password` |  |
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Resource | `resource` | `options` | yes | `workspace` |  |
| Workspace Name or ID | `workspace` | `options` | yes |  | The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Event Names or IDs | `events` | `multiOptions` | yes | `[]` | The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Repository Name or ID | `repository` | `options` | yes |  | The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Event Names or IDs | `events` | `multiOptions` | yes | `[]` | The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Password (Deprecated)",
        "value": "password"
      },
      {
        "name": "Access Token",
        "value": "accessToken"
      }
    ],
    "default": "password",
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    }
  },
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "Password (Deprecated)",
        "value": "password"
      },
      {
        "name": "Access Token",
        "value": "accessToken"
      }
    ],
    "default": "accessToken",
    "displayOptions": {
      "show": {
        "@version": [
          1.1
        ]
      }
    }
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "required": true,
    "options": [
      {
        "name": "Repository",
        "value": "repository"
      },
      {
        "name": "Workspace",
        "value": "workspace"
      }
    ],
    "default": "workspace"
  },
  {
    "displayName": "Workspace Name or ID",
    "name": "workspace",
    "type": "options",
    "displayOptions": {
      "show": {
        "resource": [
          "workspace",
          "repository"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getWorkspaces"
    },
    "required": true,
    "default": "",
    "description": "The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Event Names or IDs",
    "name": "events",
    "type": "multiOptions",
    "displayOptions": {
      "show": {
        "resource": [
          "workspace"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getWorkspaceEvents"
    },
    "options": [],
    "required": true,
    "default": [],
    "description": "The events to listen to. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Repository Name or ID",
    "name": "repository",
    "type": "options",
    "displayOptions": {
      "show": {
        "resource": [
          "repository"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getRepositories",
      "loadOptionsDependsOn": [
        "workspace"
      ]
    },
    "required": true,
    "default": "",
    "description": "The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Event Names or IDs",
    "name": "events",
    "type": "multiOptions",
    "displayOptions": {
      "show": {
        "resource": [
          "repository"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getRepositoriesEvents"
    },
    "options": [],
    "required": true,
    "default": [],
    "description": "The events to listen to. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  }
]
```
