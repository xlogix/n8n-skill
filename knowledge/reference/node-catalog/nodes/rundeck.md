# Rundeck

- Node name: `rundeck`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Rundeck/Rundeck.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Manage Rundeck API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `rundeckApi` (required)

## Resource and Operation Coverage
### Resources
- Job (`job`)

### Operations
- default/all resources: `execute`, `getMetadata`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `job` |  |
| Operation | `operation` | `options` | no | `execute` |  |
| Job ID | `jobid` | `string` | yes |  | The job ID to execute |
| Arguments | `arguments` | `fixedCollection` | no | `{}` |  |
| Filter | `filter` | `string` | no |  | Filter Rundeck nodes by name |
| Job ID | `jobid` | `string` | yes |  | The job ID to get metadata off |

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
        "name": "Job",
        "value": "job"
      }
    ],
    "default": "job"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Execute",
        "value": "execute",
        "description": "Execute a job",
        "action": "Execute a job"
      },
      {
        "name": "Get Metadata",
        "value": "getMetadata",
        "description": "Get metadata of a job",
        "action": "Get metadata of a job"
      }
    ],
    "default": "execute"
  },
  {
    "displayName": "Job ID",
    "name": "jobid",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "execute"
        ],
        "resource": [
          "job"
        ]
      }
    },
    "default": "",
    "placeholder": "Rundeck Job ID",
    "required": true,
    "description": "The job ID to execute"
  },
  {
    "displayName": "Arguments",
    "name": "arguments",
    "placeholder": "Add Argument",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "operation": [
          "execute"
        ],
        "resource": [
          "job"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "arguments",
        "displayName": "Arguments",
        "values": [
          {
            "displayName": "Name",
            "name": "name",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Filter",
    "name": "filter",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "execute"
        ],
        "resource": [
          "job"
        ]
      }
    },
    "default": "",
    "placeholder": "Add Filters",
    "description": "Filter Rundeck nodes by name"
  },
  {
    "displayName": "Job ID",
    "name": "jobid",
    "type": "string",
    "displayOptions": {
      "show": {
        "operation": [
          "getMetadata"
        ],
        "resource": [
          "job"
        ]
      }
    },
    "default": "",
    "placeholder": "Rundeck Job ID",
    "required": true,
    "description": "The job ID to get metadata off"
  }
]
```
