# TravisCI

- Node name: `travisCi`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/TravisCi/TravisCi.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume TravisCI API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `travisCiApi` (required)

## Resource and Operation Coverage
### Resources
- Build (`build`)

### Operations
- resource `build`: `cancel`, `get`, `getAll`, `restart`, `trigger`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `build` |  |
| Operation | `operation` | `options` | no | `cancel` |  |
| Build ID | `buildId` | `string` | no |  | Value uniquely identifying the build |
| Build ID | `buildId` | `string` | no |  | Value uniquely identifying the build |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Build ID | `buildId` | `string` | no |  | Value uniquely identifying the build |
| Slug | `slug` | `string` | no |  | Same as {ownerName}/{repositoryName} |
| Branch | `branch` | `string` | no |  | Branch requested to be built |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |

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
        "name": "Build",
        "value": "build"
      }
    ],
    "default": "build"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "build"
        ]
      }
    },
    "options": [
      {
        "name": "Cancel",
        "value": "cancel",
        "description": "Cancel a build",
        "action": "Cancel a build"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a build",
        "action": "Get a build"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many builds",
        "action": "Get many builds"
      },
      {
        "name": "Restart",
        "value": "restart",
        "description": "Restart a build",
        "action": "Restart a build"
      },
      {
        "name": "Trigger",
        "value": "trigger",
        "description": "Trigger a build",
        "action": "Trigger a build"
      }
    ],
    "default": "cancel"
  },
  {
    "displayName": "Build ID",
    "name": "buildId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "cancel"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "default": "",
    "description": "Value uniquely identifying the build"
  },
  {
    "displayName": "Build ID",
    "name": "buildId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "default": "",
    "description": "Value uniquely identifying the build"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "build"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "options": [
      {
        "displayName": "Include",
        "name": "include",
        "type": "string",
        "default": "",
        "placeholder": "build.commit",
        "description": "List of attributes to eager load"
      }
    ]
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "operation": [
          "getAll"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "operation": [
          "getAll"
        ],
        "resource": [
          "build"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 500
    },
    "default": 100,
    "description": "Max number of results to return"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "build"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Include",
        "name": "include",
        "type": "string",
        "default": "",
        "placeholder": "build.commit",
        "description": "List of attributes to eager load"
      },
      {
        "displayName": "Order",
        "name": "order",
        "type": "options",
        "options": [
          {
            "name": "ASC",
            "value": "asc"
          },
          {
            "name": "DESC",
            "value": "desc"
          }
        ],
        "default": "asc",
        "description": "You may specify order to sort your response"
      },
      {
        "displayName": "Sort By",
        "name": "sortBy",
        "type": "options",
        "options": [
          {
            "name": "Created At",
            "value": "created_at"
          },
          {
            "name": "Finished At",
            "value": "finished_at"
          },
          {
            "name": "ID",
            "value": "id"
          },
          {
            "name": "Number",
            "value": "number"
          },
          {
            "name": "Started At",
            "value": "started_at"
          }
        ],
        "default": "number"
      }
    ]
  },
  {
    "displayName": "Build ID",
    "name": "buildId",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "restart"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "default": "",
    "description": "Value uniquely identifying the build"
  },
  {
    "displayName": "Slug",
    "name": "slug",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "trigger"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "placeholder": "n8n-io/n8n",
    "default": "",
    "description": "Same as {ownerName}/{repositoryName}"
  },
  {
    "displayName": "Branch",
    "name": "branch",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "trigger"
        ],
        "resource": [
          "build"
        ]
      }
    },
    "default": "",
    "placeholder": "master",
    "description": "Branch requested to be built"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "build"
        ],
        "operation": [
          "trigger"
        ]
      }
    },
    "options": [
      {
        "displayName": "Message",
        "name": "message",
        "type": "string",
        "default": "",
        "description": "Travis-ci status message attached to the request"
      },
      {
        "displayName": "Merge Mode",
        "name": "mergeMode",
        "type": "options",
        "options": [
          {
            "name": "Deep Merge",
            "value": "deep_merge"
          },
          {
            "name": "Deep Merge Append",
            "value": "deep_merge_append"
          },
          {
            "name": "Deep Merge Prepend",
            "value": "deep_merge_prepend"
          },
          {
            "name": "Merge",
            "value": "merge"
          },
          {
            "name": "Replace",
            "value": "replace"
          }
        ],
        "default": ""
      }
    ]
  }
]
```
