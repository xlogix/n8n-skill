# Execute Sub-workflow

- Node name: `executeWorkflow`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ExecuteWorkflow/ExecuteWorkflow/ExecuteWorkflow.node.js`
- Node version: `[1,1.1,1.2,1.3]`
- Groups: `transform`
- Description: Execute another workflow

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
### Operations
- default/all resources: `call_workflow`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `hidden` | no | `call_workflow` |  |
| This node is out of date. Please upgrade by removing it and adding a new one | `outdatedVersionWarning` | `notice` | no |  |  |
| Source | `source` | `options` | no | `database` | Where to get the workflow to execute from |
| Source | `source` | `options` | no | `database` | Where to get the workflow to execute from |
| Workflow ID | `workflowId` | `string` | yes |  | Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>. |
| Workflow | `workflowId` | `workflowSelector` | yes |  |  |
| Workflow Path | `workflowPath` | `string` | yes |  | The path to local JSON workflow file to execute |
| Workflow JSON | `workflowJson` | `json` | yes | `


` | The workflow JSON code to execute |
| Workflow URL | `workflowUrl` | `string` | yes |  | The URL from which to load the workflow from |
| Any data you pass into this node will be output by the Execute Workflow Trigger. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/" target="_blank">More info</a> | `executeWorkflowNotice` | `notice` | no |  |  |
| Workflow Inputs | `workflowInputs` | `resourceMapper` | yes | `{"mappingMode":"defineBelow","value":null}` |  |
| Mode | `mode` | `options` | no | `once` |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "hidden",
    "noDataExpression": true,
    "default": "call_workflow",
    "options": [
      {
        "name": "Execute a Sub-Workflow",
        "value": "call_workflow"
      }
    ]
  },
  {
    "displayName": "This node is out of date. Please upgrade by removing it and adding a new one",
    "name": "outdatedVersionWarning",
    "type": "notice",
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "lte": 1.1
            }
          }
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Source",
    "name": "source",
    "type": "options",
    "options": [
      {
        "name": "Database",
        "value": "database",
        "description": "Load the workflow from the database by ID"
      },
      {
        "name": "Local File",
        "value": "localFile",
        "description": "Load the workflow from a locally saved file"
      },
      {
        "name": "Parameter",
        "value": "parameter",
        "description": "Load the workflow from a parameter"
      },
      {
        "name": "URL",
        "value": "url",
        "description": "Load the workflow from an URL"
      }
    ],
    "default": "database",
    "description": "Where to get the workflow to execute from",
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "lte": 1.1
            }
          }
        ]
      }
    }
  },
  {
    "displayName": "Source",
    "name": "source",
    "type": "options",
    "options": [
      {
        "name": "Database",
        "value": "database",
        "description": "Load the workflow from the database by ID"
      },
      {
        "name": "Define Below",
        "value": "parameter",
        "description": "Pass the JSON code of a workflow"
      }
    ],
    "default": "database",
    "description": "Where to get the workflow to execute from",
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "gte": 1.2
            }
          }
        ]
      }
    }
  },
  {
    "displayName": "Workflow ID",
    "name": "workflowId",
    "type": "string",
    "displayOptions": {
      "show": {
        "source": [
          "database"
        ],
        "@version": [
          1
        ]
      }
    },
    "default": "",
    "required": true,
    "hint": "Can be found in the URL of the workflow",
    "description": "Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>."
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "workflowSelector",
    "displayOptions": {
      "show": {
        "source": [
          "database"
        ],
        "@version": [
          {
            "_cnd": {
              "gte": 1.1
            }
          }
        ]
      }
    },
    "default": "",
    "required": true
  },
  {
    "displayName": "Workflow Path",
    "name": "workflowPath",
    "type": "string",
    "displayOptions": {
      "show": {
        "source": [
          "localFile"
        ]
      }
    },
    "default": "",
    "placeholder": "/data/workflow.json",
    "required": true,
    "description": "The path to local JSON workflow file to execute"
  },
  {
    "displayName": "Workflow JSON",
    "name": "workflowJson",
    "type": "json",
    "typeOptions": {
      "rows": 10
    },
    "displayOptions": {
      "show": {
        "source": [
          "parameter"
        ]
      }
    },
    "default": "\n\n\n",
    "required": true,
    "description": "The workflow JSON code to execute"
  },
  {
    "displayName": "Workflow URL",
    "name": "workflowUrl",
    "type": "string",
    "displayOptions": {
      "show": {
        "source": [
          "url"
        ]
      }
    },
    "default": "",
    "placeholder": "https://example.com/workflow.json",
    "required": true,
    "description": "The URL from which to load the workflow from"
  },
  {
    "displayName": "Any data you pass into this node will be output by the Execute Workflow Trigger. <a href=\"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/\" target=\"_blank\">More info</a>",
    "name": "executeWorkflowNotice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "lte": 1.1
            }
          }
        ]
      }
    }
  },
  {
    "displayName": "Workflow Inputs",
    "name": "workflowInputs",
    "type": "resourceMapper",
    "noDataExpression": true,
    "default": {
      "mappingMode": "defineBelow",
      "value": null
    },
    "required": true,
    "typeOptions": {
      "loadOptionsDependsOn": [
        "workflowId.value"
      ],
      "resourceMapper": {
        "localResourceMapperMethod": "loadSubWorkflowInputs",
        "valuesLabel": "Workflow Inputs",
        "mode": "map",
        "fieldWords": {
          "singular": "input",
          "plural": "inputs"
        },
        "addAllFields": true,
        "multiKeyMatch": false,
        "supportAutoMap": false,
        "showTypeConversionOptions": true
      }
    },
    "displayOptions": {
      "show": {
        "source": [
          "database"
        ],
        "@version": [
          {
            "_cnd": {
              "gte": 1.2
            }
          }
        ]
      },
      "hide": {
        "workflowId": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Mode",
    "name": "mode",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Run once with all items",
        "value": "once",
        "description": "Pass all items into a single execution of the sub-workflow"
      },
      {
        "name": "Run once for each item",
        "value": "each",
        "description": "Call the sub-workflow individually for each item"
      }
    ],
    "default": "once"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Wait For Sub-Workflow Completion",
        "name": "waitForSubWorkflow",
        "type": "boolean",
        "default": true,
        "description": "Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding"
      }
    ]
  }
]
```
