# Linear Trigger

- Node name: `linearTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Linear/LinearTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Linear events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `linearApi` (required)
- `linearOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `apiToken` |  |
| Make sure your credential has the "Admin" scope to create webhooks. | `notice` | `notice` | no |  |  |
| Team Name or ID | `teamId` | `options` | no |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Listen to Resources | `resources` | `multiOptions` | yes | `[]` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "API Token",
        "value": "apiToken"
      },
      {
        "name": "OAuth2",
        "value": "oAuth2"
      }
    ],
    "default": "apiToken"
  },
  {
    "displayName": "Make sure your credential has the \"Admin\" scope to create webhooks.",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Team Name or ID",
    "name": "teamId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getTeams"
    },
    "default": ""
  },
  {
    "displayName": "Listen to Resources",
    "name": "resources",
    "type": "multiOptions",
    "options": [
      {
        "name": "Comment Reaction",
        "value": "reaction"
      },
      {
        "name": "Cycle",
        "value": "cycle"
      },
      {
        "name": "Issue",
        "value": "issue"
      },
      {
        "name": "Issue Comment",
        "value": "comment"
      },
      {
        "name": "Issue Label",
        "value": "issueLabel"
      },
      {
        "name": "Project",
        "value": "project"
      }
    ],
    "default": [],
    "required": true
  }
]
```
