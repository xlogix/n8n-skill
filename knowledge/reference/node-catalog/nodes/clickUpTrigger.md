# ClickUp Trigger

- Node name: `clickUpTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ClickUp/ClickUpTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle ClickUp events via webhooks (Beta)

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `clickUpApi` (required)
- `clickUpOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Team Name or ID | `team` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Events | `events` | `multiOptions` | yes | `[]` |  |
| Filters | `filters` | `collection` | no | `{}` |  |

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
    "displayName": "Team Name or ID",
    "name": "team",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "typeOptions": {
      "loadOptionsMethod": "getTeams"
    },
    "required": true,
    "default": ""
  },
  {
    "displayName": "Events",
    "name": "events",
    "type": "multiOptions",
    "required": true,
    "default": [],
    "options": [
      {
        "name": "*",
        "value": "*"
      },
      {
        "name": "folder.created",
        "value": "folderCreated"
      },
      {
        "name": "folder.deleted",
        "value": "folderDeleted"
      },
      {
        "name": "folder.updated",
        "value": "folderUpdated"
      },
      {
        "name": "goal.created",
        "value": "goalCreated"
      },
      {
        "name": "goal.deleted",
        "value": "goalDeleted"
      },
      {
        "name": "goal.updated",
        "value": "goalUpdated"
      },
      {
        "name": "keyResult.created",
        "value": "keyResultCreated"
      },
      {
        "name": "keyResult.deleted",
        "value": "keyResultDelete"
      },
      {
        "name": "keyResult.updated",
        "value": "keyResultUpdated"
      },
      {
        "name": "list.created",
        "value": "listCreated"
      },
      {
        "name": "list.deleted",
        "value": "listDeleted"
      },
      {
        "name": "list.updated",
        "value": "listUpdated"
      },
      {
        "name": "space.created",
        "value": "spaceCreated"
      },
      {
        "name": "space.deleted",
        "value": "spaceDeleted"
      },
      {
        "name": "space.updated",
        "value": "spaceUpdated"
      },
      {
        "name": "task.assignee.updated",
        "value": "taskAssigneeUpdated"
      },
      {
        "name": "task.comment.posted",
        "value": "taskCommentPosted"
      },
      {
        "name": "task.comment.updated",
        "value": "taskCommentUpdated"
      },
      {
        "name": "task.created",
        "value": "taskCreated"
      },
      {
        "name": "task.deleted",
        "value": "taskDeleted"
      },
      {
        "name": "task.dueDate.updated",
        "value": "taskDueDateUpdated"
      },
      {
        "name": "task.moved",
        "value": "taskMoved"
      },
      {
        "name": "task.status.updated",
        "value": "taskStatusUpdated"
      },
      {
        "name": "task.tag.updated",
        "value": "taskTagUpdated"
      },
      {
        "name": "task.timeEstimate.updated",
        "value": "taskTimeEstimateUpdated"
      },
      {
        "name": "task.timeTracked.updated",
        "value": "taskTimeTrackedUpdated"
      },
      {
        "name": "task.updated",
        "value": "taskUpdated"
      }
    ]
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "Folder ID",
        "name": "folderId",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "List ID",
        "name": "listId",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Space ID",
        "name": "spaceId",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Task ID",
        "name": "taskId",
        "type": "string",
        "default": ""
      }
    ]
  }
]
```
