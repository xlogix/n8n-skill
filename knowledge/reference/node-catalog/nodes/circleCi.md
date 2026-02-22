# CircleCI

- Node name: `circleCi`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/CircleCi/CircleCi.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume CircleCI API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `circleCiApi` (required)

## Resource and Operation Coverage
### Resources
- Pipeline (`pipeline`)

### Operations
- resource `pipeline`: `get`, `getAll`, `trigger`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `pipeline` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Provider | `vcs` | `options` | no |  | Source control system |
| Project Slug | `projectSlug` | `string` | no |  | Project slug in the form org-name/repo-name |
| Pipeline Number | `pipelineNumber` | `number` | no | `1` | The number of the pipeline |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
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
        "name": "Pipeline",
        "value": "pipeline"
      }
    ],
    "default": "pipeline"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "pipeline"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a pipeline",
        "action": "Get a pipeline"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many pipelines",
        "action": "Get many pipelines"
      },
      {
        "name": "Trigger",
        "value": "trigger",
        "description": "Trigger a pipeline",
        "action": "Trigger a pipeline"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Provider",
    "name": "vcs",
    "type": "options",
    "options": [
      {
        "name": "Bitbucket",
        "value": "bitbucket"
      },
      {
        "name": "GitHub",
        "value": "github"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "get",
          "getAll",
          "trigger"
        ],
        "resource": [
          "pipeline"
        ]
      }
    },
    "default": "",
    "description": "Source control system"
  },
  {
    "displayName": "Project Slug",
    "name": "projectSlug",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "get",
          "getAll",
          "trigger"
        ],
        "resource": [
          "pipeline"
        ]
      }
    },
    "default": "",
    "placeholder": "n8n-io/n8n",
    "description": "Project slug in the form org-name/repo-name"
  },
  {
    "displayName": "Pipeline Number",
    "name": "pipelineNumber",
    "type": "number",
    "typeOptions": {
      "minValue": 1
    },
    "displayOptions": {
      "show": {
        "operation": [
          "get"
        ],
        "resource": [
          "pipeline"
        ]
      }
    },
    "default": 1,
    "description": "The number of the pipeline"
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
          "pipeline"
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
          "pipeline"
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
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "pipeline"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Branch",
        "name": "branch",
        "type": "string",
        "default": "",
        "description": "The name of a vcs branch"
      }
    ]
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
          "pipeline"
        ],
        "operation": [
          "trigger"
        ]
      }
    },
    "options": [
      {
        "displayName": "Branch",
        "name": "branch",
        "type": "string",
        "default": "",
        "description": "The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that branch and tag are mutually exclusive."
      },
      {
        "displayName": "Tag",
        "name": "tag",
        "type": "string",
        "default": "",
        "description": "The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that branch and tag are mutually exclusive"
      }
    ]
  }
]
```
