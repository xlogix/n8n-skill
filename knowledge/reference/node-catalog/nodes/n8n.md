# n8n

- Node name: `n8n`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/N8n/N8n.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Handle events and perform actions on your n8n instance

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `n8nApi` (required)

## Resource and Operation Coverage
### Resources
- Audit (`audit`)
- Credential (`credential`)
- Execution (`execution`)
- Workflow (`workflow`)

### Operations
- resource `audit`: `generate`
- resource `credential`: `create`, `delete`, `getSchema`
- resource `execution`: `delete`, `get`, `getAll`
- resource `workflow`: `activate`, `create`, `deactivate`, `delete`, `get`, `getAll`, `getVersion`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `workflow` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Additional Options | `additionalOptions` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Name | `name` | `string` | yes |  | Name of the new credential |
| Credential Type | `credentialTypeName` | `string` | yes |  | The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'. |
| Data | `data` | `json` | yes |  | A valid JSON object with properties required for this Credential Type. To see the expected format, you can use 'Get Schema' operation. |
| Credential ID | `credentialId` | `string` | yes |  |  |
| Credential Type | `credentialTypeName` | `string` | yes |  | The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'. |
| Operation | `operation` | `options` | no | `getAll` |  |
| Execution ID | `executionId` | `string` | yes |  |  |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Execution ID | `executionId` | `string` | yes |  |  |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Workflow Object | `workflowObject` | `json` | yes | `{ "name": "My workflow", "nodes": [], "connections": {}, "settings": {} }` | A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href="https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows/post">documentation</a>. |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Return All | `returnAll` | `boolean` | no | `true` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Version ID | `versionId` | `string` | yes |  | The version ID to retrieve |
| Workflow | `workflowId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | Workflow to filter the executions by |
| Workflow Object | `workflowObject` | `json` | yes |  | A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href="https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows~1%7bid%7d/put">documentation</a>. |

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
        "name": "Audit",
        "value": "audit"
      },
      {
        "name": "Credential",
        "value": "credential"
      },
      {
        "name": "Execution",
        "value": "execution"
      },
      {
        "name": "Workflow",
        "value": "workflow"
      }
    ],
    "default": "workflow"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "get",
    "displayOptions": {
      "show": {
        "resource": [
          "audit"
        ]
      }
    },
    "options": [
      {
        "name": "Generate",
        "value": "generate",
        "action": "Generate a security audit",
        "description": "Generate a security audit for this n8n instance",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/audit"
          }
        }
      }
    ]
  },
  {
    "displayName": "Additional Options",
    "name": "additionalOptions",
    "type": "collection",
    "placeholder": "Add Filter",
    "displayOptions": {
      "show": {
        "resource": [
          "audit"
        ]
      }
    },
    "routing": {
      "request": {
        "body": {
          "additionalOptions": "={{ $value }}"
        }
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Categories",
        "name": "categories",
        "description": "Risk categories to include in the audit",
        "type": "multiOptions",
        "default": [],
        "options": [
          {
            "name": "Credentials",
            "value": "credentials"
          },
          {
            "name": "Database",
            "value": "database"
          },
          {
            "name": "Filesystem",
            "value": "filesystem"
          },
          {
            "name": "Instance",
            "value": "instance"
          },
          {
            "name": "Nodes",
            "value": "nodes"
          }
        ]
      },
      {
        "displayName": "Days Abandoned Workflow",
        "name": "daysAbandonedWorkflow",
        "description": "Days for a workflow to be considered abandoned if not executed",
        "type": "number",
        "default": 90
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "create",
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create a credential",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/credentials"
          }
        }
      },
      {
        "name": "Delete",
        "value": "delete",
        "action": "Delete a credential",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/credentials/{{ $parameter.credentialId }}"
          }
        }
      },
      {
        "name": "Get Schema",
        "value": "getSchema",
        "action": "Get credential data schema for type",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/credentials/schema/{{ $parameter.credentialTypeName }}"
          }
        }
      }
    ]
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "",
    "placeholder": "e.g. n8n account",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "request": {
        "body": {
          "name": "={{ $value }}"
        }
      }
    },
    "description": "Name of the new credential"
  },
  {
    "displayName": "Credential Type",
    "name": "credentialTypeName",
    "type": "string",
    "placeholder": "e.g. n8nApi",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "request": {
        "body": {
          "type": "={{ $value }}"
        }
      }
    },
    "description": "The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'."
  },
  {
    "displayName": "Data",
    "name": "data",
    "type": "json",
    "default": "",
    "placeholder": "// e.g. for n8nApi \n{\n  \"apiKey\": \"my-n8n-api-key\",\n  \"baseUrl\": \"https://<name>.app.n8n.cloud/api/v1\",\n}",
    "required": true,
    "typeOptions": {
      "alwaysOpenEditWindow": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "preSend": [
          null
        ]
      }
    },
    "description": "A valid JSON object with properties required for this Credential Type. To see the expected format, you can use 'Get Schema' operation."
  },
  {
    "displayName": "Credential ID",
    "name": "credentialId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ],
        "operation": [
          "delete"
        ]
      }
    }
  },
  {
    "displayName": "Credential Type",
    "name": "credentialTypeName",
    "default": "",
    "placeholder": "e.g. n8nApi",
    "required": true,
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "credential"
        ],
        "operation": [
          "getSchema"
        ]
      }
    },
    "description": "The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'."
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "getAll",
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "action": "Get an execution",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/executions/{{ $parameter.executionId }}"
          }
        }
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many executions",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/executions"
          },
          "send": {
            "paginate": true
          },
          "operations": {}
        }
      },
      {
        "name": "Delete",
        "value": "delete",
        "action": "Delete an execution",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/executions/{{ $parameter.executionId }}"
          }
        }
      }
    ]
  },
  {
    "displayName": "Execution ID",
    "name": "executionId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "default": 100,
    "typeOptions": {
      "minValue": 1,
      "maxValue": 250
    },
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "getAll"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "routing": {
      "request": {
        "qs": {
          "limit": "={{ $value }}"
        }
      }
    },
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
          "execution"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Workflow",
        "name": "workflowId",
        "type": "resourceLocator",
        "default": {
          "mode": "list",
          "value": ""
        },
        "description": "Workflow to filter the executions by",
        "modes": [
          {
            "displayName": "From List",
            "name": "list",
            "type": "list",
            "placeholder": "Select a Workflow...",
            "initType": "workflow",
            "typeOptions": {
              "searchListMethod": "searchWorkflows",
              "searchFilterRequired": false,
              "searchable": true
            }
          },
          {
            "displayName": "By URL",
            "name": "url",
            "type": "string",
            "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
            "validation": [
              {
                "type": "regex",
                "properties": {
                  "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
                  "errorMessage": "Not a valid Workflow URL"
                }
              }
            ],
            "extractValue": {
              "type": "regex",
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
            }
          },
          {
            "displayName": "ID",
            "name": "id",
            "type": "string",
            "validation": [
              {
                "type": "regex",
                "properties": {
                  "regex": "[0-9a-zA-Z]{1,}",
                  "errorMessage": "Not a valid Workflow ID"
                }
              }
            ],
            "placeholder": "1"
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "workflowId",
            "value": "={{ $value || undefined }}"
          }
        }
      },
      {
        "displayName": "Status",
        "name": "status",
        "type": "options",
        "options": [
          {
            "name": "Error",
            "value": "error"
          },
          {
            "name": "Success",
            "value": "success"
          },
          {
            "name": "Waiting",
            "value": "waiting"
          }
        ],
        "default": "success",
        "routing": {
          "send": {
            "type": "query",
            "property": "status",
            "value": "={{ $value }}"
          }
        },
        "description": "Status to filter the executions by"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Include Execution Details",
        "name": "activeWorkflows",
        "type": "boolean",
        "default": false,
        "routing": {
          "send": {
            "type": "query",
            "property": "includeData",
            "value": "={{ $value }}"
          }
        },
        "description": "Whether to include the detailed execution data"
      }
    ]
  },
  {
    "displayName": "Execution ID",
    "name": "executionId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "resource": [
          "execution"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "options": [
      {
        "displayName": "Include Execution Details",
        "name": "activeWorkflows",
        "type": "boolean",
        "default": false,
        "routing": {
          "send": {
            "type": "query",
            "property": "includeData",
            "value": "={{ $value }}"
          }
        },
        "description": "Whether to include the detailed execution data"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "default": "getAll",
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ]
      }
    },
    "options": [
      {
        "name": "Publish",
        "value": "activate",
        "action": "Publish a workflow"
      },
      {
        "name": "Create",
        "value": "create",
        "action": "Create a workflow",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/workflows"
          }
        }
      },
      {
        "name": "Unpublish",
        "value": "deactivate",
        "action": "Unpublish a workflow"
      },
      {
        "name": "Delete",
        "value": "delete",
        "action": "Delete a workflow"
      },
      {
        "name": "Get",
        "value": "get",
        "action": "Get a workflow"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many workflows",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/workflows"
          },
          "send": {
            "paginate": true
          },
          "operations": {}
        }
      },
      {
        "name": "Get Version",
        "value": "getVersion",
        "action": "Get a workflow version"
      },
      {
        "name": "Update",
        "value": "update",
        "action": "Update a workflow"
      }
    ]
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "activate"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "POST",
        "url": "=/workflows/{{ $value }}/activate"
      }
    }
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
          "workflow"
        ],
        "operation": [
          "activate"
        ]
      }
    },
    "options": [
      {
        "displayName": "Version ID",
        "name": "versionId",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "versionId"
          }
        },
        "description": "The version ID of the workflow to publish"
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "name"
          }
        },
        "description": "Published version name (will be overwritten)"
      },
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "typeOptions": {
          "rows": 4
        },
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "description"
          }
        },
        "description": "Published version description (will be overwritten)"
      }
    ]
  },
  {
    "displayName": "Workflow Object",
    "name": "workflowObject",
    "type": "json",
    "default": "{ \"name\": \"My workflow\", \"nodes\": [], \"connections\": {}, \"settings\": {} }",
    "placeholder": "{\n  \"name\": \"My workflow\",\n  \"nodes\": [],\n  \"connections\": {},\n  \"settings\": {}\n}",
    "required": true,
    "typeOptions": {
      "alwaysOpenEditWindow": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "preSend": [
          null,
          null
        ]
      }
    },
    "description": "A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href=\"https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows/post\">documentation</a>."
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "deactivate"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "POST",
        "url": "=/workflows/{{ $value }}/deactivate"
      }
    }
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "=/workflows/{{ $value }}"
      }
    }
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "default": 100,
    "typeOptions": {
      "minValue": 1,
      "maxValue": 250
    },
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "getAll"
        ],
        "returnAll": [
          false
        ]
      }
    },
    "routing": {
      "request": {
        "qs": {
          "limit": "={{ $value }}"
        }
      }
    },
    "description": "Max number of results to return"
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Return Only Published Workflows",
        "name": "activeWorkflows",
        "type": "boolean",
        "default": true,
        "routing": {
          "request": {
            "qs": {
              "active": "={{ $value }}"
            }
          }
        }
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags",
            "value": "={{ $value !== \"\" ? $value : undefined }}"
          }
        },
        "description": "Include only workflows with these tags",
        "hint": "Comma separated list of tags (empty value is ignored)"
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "routing": {
          "request": {
            "qs": {
              "name": "={{ $value }}"
            }
          }
        }
      },
      {
        "displayName": "Project ID",
        "name": "projectId",
        "type": "string",
        "default": "",
        "routing": {
          "request": {
            "qs": {
              "projectId": "={{ $value }}"
            }
          }
        }
      },
      {
        "displayName": "Exclude Pinned Data",
        "name": "excludePinnedData",
        "description": "Whether to exclude pinned data from the response",
        "type": "boolean",
        "default": false,
        "routing": {
          "request": {
            "qs": {
              "excludePinnedData": "={{ $value }}"
            }
          }
        }
      }
    ]
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "GET",
        "url": "=/workflows/{{ $value }}"
      }
    }
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "getVersion"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "GET",
        "url": "=/workflows/{{ $value }}/{{ $parameter[\"versionId\"] }}"
      }
    }
  },
  {
    "displayName": "Version ID",
    "name": "versionId",
    "type": "string",
    "default": "",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "getVersion"
        ]
      }
    },
    "description": "The version ID to retrieve"
  },
  {
    "displayName": "Workflow",
    "name": "workflowId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "Workflow to filter the executions by",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a Workflow...",
        "initType": "workflow",
        "typeOptions": {
          "searchListMethod": "searchWorkflows",
          "searchFilterRequired": false,
          "searchable": true
        }
      },
      {
        "displayName": "By URL",
        "name": "url",
        "type": "string",
        "placeholder": "https://myinstance.app.n8n.cloud/workflow/1",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": ".*/workflow/([0-9a-zA-Z]{1,})",
              "errorMessage": "Not a valid Workflow URL"
            }
          }
        ],
        "extractValue": {
          "type": "regex",
          "regex": ".*/workflow/([0-9a-zA-Z]{1,})"
        }
      },
      {
        "displayName": "ID",
        "name": "id",
        "type": "string",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "[0-9a-zA-Z]{1,}",
              "errorMessage": "Not a valid Workflow ID"
            }
          }
        ],
        "placeholder": "1"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "routing": {
      "request": {
        "method": "PUT",
        "url": "=/workflows/{{ $value }}"
      }
    }
  },
  {
    "displayName": "Workflow Object",
    "name": "workflowObject",
    "type": "json",
    "default": "",
    "placeholder": "{\n  \"name\": \"My workflow\",\n  \"nodes\": [],\n  \"connections\": {},\n  \"settings\": {}\n}",
    "required": true,
    "typeOptions": {
      "alwaysOpenEditWindow": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "workflow"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "routing": {
      "send": {
        "preSend": [
          null,
          null
        ]
      }
    },
    "description": "A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href=\"https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows~1%7bid%7d/put\">documentation</a>."
  }
]
```
