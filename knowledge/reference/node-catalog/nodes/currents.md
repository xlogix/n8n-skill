# Currents

- Node name: `currents`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Currents/Currents.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Interact with the Currents API for test orchestration and analytics

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `currentsApi` (required)

## Resource and Operation Coverage
### Resources
- Action (`action`) - Test action rules (skip, quarantine, tag)
- Instance (`instance`) - Spec file execution instance
- Project (`project`) - Test project
- Run (`run`) - Test run
- Signature (`signature`) - Generate unique test signatures
- Spec File (`specFile`) - Spec file performance metrics
- Test (`test`) - Individual test performance metrics
- Test Result (`testResult`) - Historical test execution results

### Operations
- resource `action`: `create`, `delete`, `disable`, `enable`, `get`, `getAll`, `update`
- resource `instance`: `get`
- resource `project`: `get`, `getAll`, `getInsights`
- resource `run`: `cancel`, `cancelGithub`, `delete`, `find`, `get`, `getAll`, `reset`
- resource `signature`: `generate`
- resource `specFile`: `getAll`
- resource `test`: `getAll`
- resource `testResult`: `getAll`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `run` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Action ID | `actionId` | `string` | yes |  | The ID of the action |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Filters | `filters` | `collection` | no | `{}` |  |
| Name | `name` | `string` | yes |  | The name of the action (1-255 characters) |
| Action Type | `actionType` | `options` | yes | `quarantine` |  |
| Tags | `actionTags` | `string` | no |  | Comma-separated list of tags to apply |
| Matcher Type | `matcherType` | `options` | yes | `titleContains` | How to match tests for this action |
| Matcher Value | `matcherValue` | `string` | yes |  | The value to match against (test title, spec file path, or signature) |
| Options | `createOptions` | `collection` | no | `{}` |  |
| Update Fields | `updateFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Instance ID | `instanceId` | `string` | yes |  | The ID of the spec file execution instance |
| Operation | `operation` | `options` | no | `getAll` |  |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Limit | `limit` | `number` | no | `10` | Max number of results to return |
| Date Start | `dateStart` | `dateTime` | yes |  | Start date for metrics (ISO 8601 format) |
| Date End | `dateEnd` | `dateTime` | yes |  | End date for metrics (ISO 8601 format) |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Run ID | `runId` | `string` | yes |  | The ID of the run |
| Machine IDs | `machineIds` | `string` | yes |  | Comma-separated list of machine identifiers to reset (1-63 items) |
| Options | `resetOptions` | `collection` | no | `{}` |  |
| GitHub Run ID | `githubRunId` | `string` | yes |  | The GitHub Actions workflow run ID |
| GitHub Run Attempt | `githubRunAttempt` | `number` | yes | `1` | The GitHub Actions workflow attempt number |
| Options | `cancelGithubOptions` | `collection` | no | `{}` |  |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Filters | `filters` | `collection` | no | `{}` |  |
| Limit | `limit` | `number` | no | `10` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `generate` |  |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Spec File Path | `specFilePath` | `string` | yes |  | The complete path to the spec file |
| Test Title | `testTitle` | `string` | yes |  | The test title. For nested describe blocks, use " > " as separator (e.g., "Login > should login with valid credentials"). |
| Operation | `operation` | `options` | no | `getAll` |  |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Date Start | `dateStart` | `dateTime` | yes |  | Start date for metrics (ISO 8601 format) |
| Date End | `dateEnd` | `dateTime` | yes |  | End date for metrics (ISO 8601 format) |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Project | `projectId` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Currents project |
| Date Start | `dateStart` | `dateTime` | yes |  | Start date for metrics (ISO 8601 format) |
| Date End | `dateEnd` | `dateTime` | yes |  | End date for metrics (ISO 8601 format) |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `getAll` |  |
| Test Signature | `signature` | `string` | yes |  | The unique test signature. Use the Signature resource to generate this from project ID, spec file path, and test title. |
| Date Start | `dateStart` | `dateTime` | yes |  | Start date for results (ISO 8601 format) |
| Date End | `dateEnd` | `dateTime` | yes |  | End date for results (ISO 8601 format) |
| Limit | `limit` | `number` | no | `10` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Options | `options` | `collection` | no | `{}` |  |

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
        "name": "Action",
        "value": "action",
        "description": "Test action rules (skip, quarantine, tag)"
      },
      {
        "name": "Instance",
        "value": "instance",
        "description": "Spec file execution instance"
      },
      {
        "name": "Project",
        "value": "project",
        "description": "Test project"
      },
      {
        "name": "Run",
        "value": "run",
        "description": "Test run"
      },
      {
        "name": "Signature",
        "value": "signature",
        "description": "Generate unique test signatures"
      },
      {
        "name": "Spec File",
        "value": "specFile",
        "description": "Spec file performance metrics"
      },
      {
        "name": "Test",
        "value": "test",
        "description": "Individual test performance metrics"
      },
      {
        "name": "Test Result",
        "value": "testResult",
        "description": "Historical test execution results"
      }
    ],
    "default": "run"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a new action for a project",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/actions"
          }
        },
        "action": "Create an action"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Archive an action (soft delete)",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/actions/{{$parameter[\"actionId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "set",
                "properties": {
                  "value": "={{ { \"success\": true } }}"
                }
              }
            ]
          }
        },
        "action": "Delete an action"
      },
      {
        "name": "Disable",
        "value": "disable",
        "description": "Deactivate an active action",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/actions/{{$parameter[\"actionId\"]}}/disable"
          }
        },
        "action": "Disable an action"
      },
      {
        "name": "Enable",
        "value": "enable",
        "description": "Reactivate a disabled action",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/actions/{{$parameter[\"actionId\"]}}/enable"
          }
        },
        "action": "Enable an action"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a single action by ID",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/actions/{{$parameter[\"actionId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get an action"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many actions for a project",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/actions"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get many actions"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update an existing action",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/actions/{{$parameter[\"actionId\"]}}"
          }
        },
        "action": "Update an action"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Action ID",
    "name": "actionId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "get",
          "delete",
          "enable",
          "disable",
          "update"
        ]
      }
    },
    "description": "The ID of the action"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "routing": {
      "send": {
        "type": "query",
        "property": "projectId",
        "value": "={{ $value }}"
      }
    },
    "description": "The Currents project"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "routing": {
      "send": {
        "type": "body",
        "property": "projectId",
        "value": "={{ $value }}"
      }
    },
    "description": "The Currents project"
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
          "action"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Search",
        "name": "search",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "search"
          }
        },
        "description": "Search actions by name (max 100 characters)"
      },
      {
        "displayName": "Status",
        "name": "status",
        "type": "multiOptions",
        "options": [
          {
            "name": "Active",
            "value": "active"
          },
          {
            "name": "Disabled",
            "value": "disabled"
          }
        ],
        "default": [],
        "routing": {
          "send": {
            "type": "query",
            "property": "status"
          }
        },
        "description": "Filter by action status"
      }
    ]
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "name"
      }
    },
    "description": "The name of the action (1-255 characters)"
  },
  {
    "displayName": "Action Type",
    "name": "actionType",
    "type": "options",
    "required": true,
    "options": [
      {
        "name": "Quarantine",
        "value": "quarantine",
        "description": "Quarantine matching tests"
      },
      {
        "name": "Skip",
        "value": "skip",
        "description": "Skip matching tests"
      },
      {
        "name": "Tag",
        "value": "tag",
        "description": "Add tags to matching tests"
      }
    ],
    "default": "quarantine",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "action.type"
      }
    }
  },
  {
    "displayName": "Tags",
    "name": "actionTags",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ],
        "actionType": [
          "tag"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "action.tags",
        "value": "={{ $value.split(\",\").map(t => t.trim()).filter(t => t) }}"
      }
    },
    "description": "Comma-separated list of tags to apply"
  },
  {
    "displayName": "Matcher Type",
    "name": "matcherType",
    "type": "options",
    "required": true,
    "options": [
      {
        "name": "Spec File Contains",
        "value": "specContains"
      },
      {
        "name": "Spec File Equals",
        "value": "specEquals"
      },
      {
        "name": "Test Signature",
        "value": "signature"
      },
      {
        "name": "Test Title Contains",
        "value": "titleContains"
      },
      {
        "name": "Test Title Equals",
        "value": "titleEquals"
      }
    ],
    "default": "titleContains",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "matcher.type"
      }
    },
    "description": "How to match tests for this action"
  },
  {
    "displayName": "Matcher Value",
    "name": "matcherValue",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "matcher.value"
      }
    },
    "description": "The value to match against (test title, spec file path, or signature)"
  },
  {
    "displayName": "Options",
    "name": "createOptions",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "description"
          }
        },
        "description": "A description for the action"
      },
      {
        "displayName": "Expires After",
        "name": "expiresAfter",
        "type": "dateTime",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "expiresAfter"
          }
        },
        "description": "When the action should expire (ISO 8601 format)"
      }
    ]
  },
  {
    "displayName": "Update Fields",
    "name": "updateFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "action"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "options": [
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
        "description": "The name of the action (1-255 characters)"
      },
      {
        "displayName": "Description",
        "name": "description",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "description"
          }
        },
        "description": "A description for the action"
      },
      {
        "displayName": "Expires After",
        "name": "expiresAfter",
        "type": "dateTime",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "expiresAfter"
          }
        },
        "description": "When the action should expire (ISO 8601 format)"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "instance"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a spec file execution instance with full test results",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/instances/{{$parameter[\"instanceId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get an instance"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Instance ID",
    "name": "instanceId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "instance"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "description": "The ID of the spec file execution instance"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "description": "Get a project by ID",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/projects/{{$parameter[\"projectId\"]}}"
          }
        },
        "action": "Get a project"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many projects",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/projects"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get many projects"
      },
      {
        "name": "Get Insights",
        "value": "getInsights",
        "description": "Get project insights and metrics",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/projects/{{$parameter[\"projectId\"]}}/insights"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get project insights"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ],
        "operation": [
          "get",
          "getInsights"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "description": "The Currents project"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 50
    },
    "default": 10,
    "routing": {
      "send": {
        "type": "query",
        "property": "limit"
      }
    },
    "description": "Max number of results to return"
  },
  {
    "displayName": "Date Start",
    "name": "dateStart",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ],
        "operation": [
          "getInsights"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_start"
      }
    },
    "description": "Start date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Date End",
    "name": "dateEnd",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ],
        "operation": [
          "getInsights"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_end"
      }
    },
    "description": "End date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "project"
        ],
        "operation": [
          "getInsights"
        ]
      }
    },
    "options": [
      {
        "displayName": "Authors",
        "name": "authors",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "authors"
          }
        },
        "description": "Filter by commit author names (comma-separated)"
      },
      {
        "displayName": "Branches",
        "name": "branches",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branches"
          }
        },
        "description": "Filter by branch names (comma-separated)"
      },
      {
        "displayName": "Groups",
        "name": "groups",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "groups"
          }
        },
        "description": "Filter by group names (comma-separated)"
      },
      {
        "displayName": "Resolution",
        "name": "resolution",
        "type": "options",
        "options": [
          {
            "name": "1 Hour",
            "value": "1h"
          },
          {
            "name": "1 Day",
            "value": "1d"
          },
          {
            "name": "1 Week",
            "value": "1w"
          }
        ],
        "default": "1d",
        "routing": {
          "send": {
            "type": "query",
            "property": "resolution"
          }
        },
        "description": "Time resolution for metrics"
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags"
          }
        },
        "description": "Filter by tags (comma-separated)"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ]
      }
    },
    "options": [
      {
        "name": "Cancel",
        "value": "cancel",
        "description": "Cancel a run in progress",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/runs/{{$parameter[\"runId\"]}}/cancel"
          }
        },
        "action": "Cancel a run"
      },
      {
        "name": "Cancel by GitHub CI",
        "value": "cancelGithub",
        "description": "Cancel a run by GitHub Actions workflow run ID",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "/runs/cancel-ci/github"
          }
        },
        "action": "Cancel a run by GitHub CI"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a run and all associated data",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/runs/{{$parameter[\"runId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "set",
                "properties": {
                  "value": "={{ { \"success\": true } }}"
                }
              }
            ]
          }
        },
        "action": "Delete a run"
      },
      {
        "name": "Find",
        "value": "find",
        "description": "Find a run by project and filters",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/runs/find"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Find a run"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a run by ID",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/runs/{{$parameter[\"runId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get a run"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get many runs for a project",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/projects/{{$parameter[\"projectId\"]}}/runs"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get many runs"
      },
      {
        "name": "Reset",
        "value": "reset",
        "description": "Reset failed specs for re-execution on specified machines",
        "routing": {
          "request": {
            "method": "PUT",
            "url": "=/runs/{{$parameter[\"runId\"]}}/reset"
          }
        },
        "action": "Reset a run"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Run ID",
    "name": "runId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "get",
          "cancel",
          "delete",
          "reset"
        ]
      }
    },
    "description": "The ID of the run"
  },
  {
    "displayName": "Machine IDs",
    "name": "machineIds",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "reset"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "machineId",
        "value": "={{ $value.split(\",\").map(id => id.trim()) }}"
      }
    },
    "description": "Comma-separated list of machine identifiers to reset (1-63 items)"
  },
  {
    "displayName": "Options",
    "name": "resetOptions",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "reset"
        ]
      }
    },
    "options": [
      {
        "displayName": "Batched Orchestration",
        "name": "isBatchedOr8n",
        "type": "boolean",
        "default": false,
        "routing": {
          "send": {
            "type": "body",
            "property": "isBatchedOr8n"
          }
        },
        "description": "Whether to enable batched orchestration"
      }
    ]
  },
  {
    "displayName": "GitHub Run ID",
    "name": "githubRunId",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "cancelGithub"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "githubRunId"
      }
    },
    "description": "The GitHub Actions workflow run ID"
  },
  {
    "displayName": "GitHub Run Attempt",
    "name": "githubRunAttempt",
    "type": "number",
    "required": true,
    "default": 1,
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "cancelGithub"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "githubRunAttempt"
      }
    },
    "description": "The GitHub Actions workflow attempt number"
  },
  {
    "displayName": "Options",
    "name": "cancelGithubOptions",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "cancelGithub"
        ]
      }
    },
    "options": [
      {
        "displayName": "Project ID",
        "name": "projectId",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "projectId"
          }
        },
        "description": "Limit cancellation to a specific project"
      },
      {
        "displayName": "CI Build ID",
        "name": "ciBuildId",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "body",
            "property": "ciBuildId"
          }
        },
        "description": "Limit cancellation to a specific CI build"
      }
    ]
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "find",
          "getAll"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "routing": {
      "send": {
        "type": "query",
        "property": "projectId",
        "value": "={{ $value }}"
      }
    },
    "description": "The Currents project"
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
          "run"
        ],
        "operation": [
          "find"
        ]
      }
    },
    "options": [
      {
        "displayName": "Branch",
        "name": "branch",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branch"
          }
        },
        "description": "Filter by git branch name"
      },
      {
        "displayName": "CI Build ID",
        "name": "ciBuildId",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "ciBuildId"
          }
        },
        "description": "Filter by CI build ID"
      },
      {
        "displayName": "Tag",
        "name": "tag",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tag"
          }
        },
        "description": "Filter by tag"
      }
    ]
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 50
    },
    "default": 10,
    "routing": {
      "send": {
        "type": "query",
        "property": "limit"
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
          "run"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Authors",
        "name": "author",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "author"
          }
        },
        "description": "Filter by git commit author names (comma-separated for multiple)"
      },
      {
        "displayName": "Branch",
        "name": "branch",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branch"
          }
        },
        "description": "Filter by git branch name"
      },
      {
        "displayName": "Completion State",
        "name": "completionState",
        "type": "multiOptions",
        "options": [
          {
            "name": "Canceled",
            "value": "CANCELED"
          },
          {
            "name": "Complete",
            "value": "COMPLETE"
          },
          {
            "name": "In Progress",
            "value": "IN_PROGRESS"
          },
          {
            "name": "Timeout",
            "value": "TIMEOUT"
          }
        ],
        "default": [],
        "routing": {
          "send": {
            "type": "query",
            "property": "completion_state"
          }
        },
        "description": "Filter by completion state"
      },
      {
        "displayName": "Date End",
        "name": "dateEnd",
        "type": "dateTime",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "date_end"
          }
        },
        "description": "Filter runs created before this date"
      },
      {
        "displayName": "Date Start",
        "name": "dateStart",
        "type": "dateTime",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "date_start"
          }
        },
        "description": "Filter runs created on or after this date"
      },
      {
        "displayName": "Search",
        "name": "search",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "search"
          }
        },
        "description": "Search by ciBuildId or commit message (max 200 characters)"
      },
      {
        "displayName": "Status",
        "name": "status",
        "type": "multiOptions",
        "options": [
          {
            "name": "Failed",
            "value": "FAILED"
          },
          {
            "name": "Failing",
            "value": "FAILING"
          },
          {
            "name": "Passed",
            "value": "PASSED"
          },
          {
            "name": "Running",
            "value": "RUNNING"
          }
        ],
        "default": [],
        "routing": {
          "send": {
            "type": "query",
            "property": "status"
          }
        },
        "description": "Filter by run status"
      },
      {
        "displayName": "Tags",
        "name": "tag",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tag"
          }
        },
        "description": "Filter by tags (comma-separated for multiple)"
      },
      {
        "displayName": "Tag Operator",
        "name": "tagOperator",
        "type": "options",
        "options": [
          {
            "name": "AND",
            "value": "AND",
            "description": "All tags must be present"
          },
          {
            "name": "OR",
            "value": "OR",
            "description": "Any tag must be present"
          }
        ],
        "default": "AND",
        "routing": {
          "send": {
            "type": "query",
            "property": "tag_operator"
          }
        },
        "description": "Logical operator for tag filtering"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "run"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Starting After",
        "name": "startingAfter",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "starting_after"
          }
        },
        "description": "Cursor for forward pagination (use cursor from previous response)"
      },
      {
        "displayName": "Ending Before",
        "name": "endingBefore",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "ending_before"
          }
        },
        "description": "Cursor for backward pagination (use cursor from previous response)"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "signature"
        ]
      }
    },
    "options": [
      {
        "name": "Generate",
        "value": "generate",
        "description": "Generate a unique test signature",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/signature/test"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Generate a signature"
      }
    ],
    "default": "generate"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "signature"
        ],
        "operation": [
          "generate"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "routing": {
      "send": {
        "type": "body",
        "property": "projectId",
        "value": "={{ $value }}"
      }
    },
    "description": "The Currents project"
  },
  {
    "displayName": "Spec File Path",
    "name": "specFilePath",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "signature"
        ],
        "operation": [
          "generate"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "specFilePath"
      }
    },
    "placeholder": "e.g., tests/e2e/login.spec.ts",
    "description": "The complete path to the spec file"
  },
  {
    "displayName": "Test Title",
    "name": "testTitle",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "signature"
        ],
        "operation": [
          "generate"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "body",
        "property": "testTitle"
      }
    },
    "placeholder": "e.g., should login with valid credentials",
    "description": "The test title. For nested describe blocks, use \" > \" as separator (e.g., \"Login > should login with valid credentials\")."
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ]
      }
    },
    "options": [
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get aggregated spec file metrics for a project",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/spec-files/{{$parameter[\"projectId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get many spec files"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "description": "The Currents project"
  },
  {
    "displayName": "Date Start",
    "name": "dateStart",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_start"
      }
    },
    "description": "Start date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Date End",
    "name": "dateEnd",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_end"
      }
    },
    "description": "End date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 50
    },
    "default": 50,
    "routing": {
      "send": {
        "type": "query",
        "property": "limit"
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
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Authors",
        "name": "authors",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "authors"
          }
        },
        "description": "Filter by git author names (comma-separated for multiple)"
      },
      {
        "displayName": "Branches",
        "name": "branches",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branches"
          }
        },
        "description": "Filter by branch names (comma-separated for multiple)"
      },
      {
        "displayName": "Groups",
        "name": "groups",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "groups"
          }
        },
        "description": "Filter by group names (comma-separated for multiple)"
      },
      {
        "displayName": "Spec Name",
        "name": "specNameFilter",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "specNameFilter"
          }
        },
        "description": "Filter spec files by name (partial match)"
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags"
          }
        },
        "description": "Filter by tags (comma-separated for multiple)"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "specFile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Include Failed in Duration",
        "name": "includeFailedInDuration",
        "type": "boolean",
        "default": false,
        "routing": {
          "send": {
            "type": "query",
            "property": "includeFailedInDuration"
          }
        },
        "description": "Whether to include failed executions in duration calculation"
      },
      {
        "displayName": "Order By",
        "name": "order",
        "type": "options",
        "options": [
          {
            "name": "Average Duration",
            "value": "avgDuration"
          },
          {
            "name": "Failed Executions",
            "value": "failedExecutions"
          },
          {
            "name": "Failure Rate",
            "value": "failureRate"
          },
          {
            "name": "Flake Rate",
            "value": "flakeRate"
          },
          {
            "name": "Flaky Executions",
            "value": "flakyExecutions"
          },
          {
            "name": "Fully Reported",
            "value": "fullyReported"
          },
          {
            "name": "Overall Executions",
            "value": "overallExecutions"
          },
          {
            "name": "Suite Size",
            "value": "suiteSize"
          },
          {
            "name": "Timeout Executions",
            "value": "timeoutExecutions"
          },
          {
            "name": "Timeout Rate",
            "value": "timeoutRate"
          }
        ],
        "default": "avgDuration",
        "routing": {
          "send": {
            "type": "query",
            "property": "order"
          }
        },
        "description": "The field to order results by"
      },
      {
        "displayName": "Sort Direction",
        "name": "dir",
        "type": "options",
        "options": [
          {
            "name": "Ascending",
            "value": "asc"
          },
          {
            "name": "Descending",
            "value": "desc"
          }
        ],
        "default": "desc",
        "routing": {
          "send": {
            "type": "query",
            "property": "dir"
          }
        },
        "description": "The direction to sort results"
      },
      {
        "displayName": "Page",
        "name": "page",
        "type": "number",
        "typeOptions": {
          "minValue": 0
        },
        "default": 0,
        "routing": {
          "send": {
            "type": "query",
            "property": "page"
          }
        },
        "description": "Page number (0-indexed)"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ]
      }
    },
    "options": [
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get aggregated test metrics for a project",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/tests/{{$parameter[\"projectId\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get many tests"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Project",
    "name": "projectId",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "placeholder": "Select a project...",
        "typeOptions": {
          "searchListMethod": "getProjects",
          "searchable": true
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "e.g. abc123"
      }
    ],
    "description": "The Currents project"
  },
  {
    "displayName": "Date Start",
    "name": "dateStart",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_start"
      }
    },
    "description": "Start date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Date End",
    "name": "dateEnd",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_end"
      }
    },
    "description": "End date for metrics (ISO 8601 format)"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 50
    },
    "default": 50,
    "routing": {
      "send": {
        "type": "query",
        "property": "limit"
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
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Authors",
        "name": "authors",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "authors"
          }
        },
        "description": "Filter by git author names (comma-separated for multiple)"
      },
      {
        "displayName": "Branches",
        "name": "branches",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branches"
          }
        },
        "description": "Filter by branch names (comma-separated for multiple)"
      },
      {
        "displayName": "Groups",
        "name": "groups",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "groups"
          }
        },
        "description": "Filter by group names (comma-separated for multiple)"
      },
      {
        "displayName": "Minimum Executions",
        "name": "minExecutions",
        "type": "number",
        "typeOptions": {
          "minValue": 1
        },
        "default": 1,
        "routing": {
          "send": {
            "type": "query",
            "property": "min_executions"
          }
        },
        "description": "Minimum number of executions to include a test"
      },
      {
        "displayName": "Spec File",
        "name": "spec",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "spec"
          }
        },
        "description": "Filter tests by spec file name (partial match)"
      },
      {
        "displayName": "Tags",
        "name": "tags",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tags"
          }
        },
        "description": "Filter by tags (comma-separated for multiple)"
      },
      {
        "displayName": "Test State",
        "name": "testState",
        "type": "multiOptions",
        "options": [
          {
            "name": "Failed",
            "value": "failed"
          },
          {
            "name": "Passed",
            "value": "passed"
          },
          {
            "name": "Pending",
            "value": "pending"
          },
          {
            "name": "Skipped",
            "value": "skipped"
          }
        ],
        "default": [],
        "routing": {
          "send": {
            "type": "query",
            "property": "test_state"
          }
        },
        "description": "Filter by test state"
      },
      {
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "title"
          }
        },
        "description": "Filter tests by title (partial match)"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "test"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Order By",
        "name": "order",
        "type": "options",
        "options": [
          {
            "name": "Duration",
            "value": "duration"
          },
          {
            "name": "Duration (Weighted)",
            "value": "duration_x_samples"
          },
          {
            "name": "Executions",
            "value": "executions"
          },
          {
            "name": "Failure Rate Delta",
            "value": "failure_rate_delta"
          },
          {
            "name": "Failures",
            "value": "failures"
          },
          {
            "name": "Flakiness",
            "value": "flakiness"
          },
          {
            "name": "Flakiness (Weighted)",
            "value": "flakiness_x_samples"
          },
          {
            "name": "Flakiness Rate Delta",
            "value": "flakiness_rate_delta"
          },
          {
            "name": "Passes",
            "value": "passes"
          },
          {
            "name": "Title",
            "value": "title"
          }
        ],
        "default": "title",
        "routing": {
          "send": {
            "type": "query",
            "property": "order"
          }
        },
        "description": "The field to order results by"
      },
      {
        "displayName": "Sort Direction",
        "name": "dir",
        "type": "options",
        "options": [
          {
            "name": "Ascending",
            "value": "asc"
          },
          {
            "name": "Descending",
            "value": "desc"
          }
        ],
        "default": "desc",
        "routing": {
          "send": {
            "type": "query",
            "property": "dir"
          }
        },
        "description": "The direction to sort results"
      },
      {
        "displayName": "Page",
        "name": "page",
        "type": "number",
        "typeOptions": {
          "minValue": 0
        },
        "default": 0,
        "routing": {
          "send": {
            "type": "query",
            "property": "page"
          }
        },
        "description": "Page number (0-indexed)"
      }
    ]
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ]
      }
    },
    "options": [
      {
        "name": "Get Many",
        "value": "getAll",
        "description": "Get historical test execution results for a specific test signature",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/test-results/{{$parameter[\"signature\"]}}"
          },
          "output": {
            "postReceive": [
              {
                "type": "rootProperty",
                "properties": {
                  "property": "data"
                }
              }
            ]
          }
        },
        "action": "Get test results"
      }
    ],
    "default": "getAll"
  },
  {
    "displayName": "Test Signature",
    "name": "signature",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "description": "The unique test signature. Use the Signature resource to generate this from project ID, spec file path, and test title."
  },
  {
    "displayName": "Date Start",
    "name": "dateStart",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_start"
      }
    },
    "description": "Start date for results (ISO 8601 format)"
  },
  {
    "displayName": "Date End",
    "name": "dateEnd",
    "type": "dateTime",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "date_end"
      }
    },
    "description": "End date for results (ISO 8601 format)"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "typeOptions": {
      "minValue": 1,
      "maxValue": 100
    },
    "default": 10,
    "routing": {
      "send": {
        "type": "query",
        "property": "limit"
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
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Branches",
        "name": "branch",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "branch"
          }
        },
        "description": "Filter by git branch names (comma-separated for multiple)"
      },
      {
        "displayName": "Git Authors",
        "name": "gitAuthor",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "git_author"
          }
        },
        "description": "Filter by git author names (comma-separated for multiple)"
      },
      {
        "displayName": "Groups",
        "name": "group",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "group"
          }
        },
        "description": "Filter by run groups (comma-separated for multiple)"
      },
      {
        "displayName": "Status",
        "name": "status",
        "type": "multiOptions",
        "options": [
          {
            "name": "Failed",
            "value": "failed"
          },
          {
            "name": "Passed",
            "value": "passed"
          },
          {
            "name": "Pending",
            "value": "pending"
          },
          {
            "name": "Skipped",
            "value": "skipped"
          }
        ],
        "default": [],
        "routing": {
          "send": {
            "type": "query",
            "property": "status"
          }
        },
        "description": "Filter by test status"
      },
      {
        "displayName": "Tags",
        "name": "tag",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "tag"
          }
        },
        "description": "Filter by run tags (comma-separated for multiple)"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Option",
    "default": {},
    "displayOptions": {
      "show": {
        "resource": [
          "testResult"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Starting After",
        "name": "startingAfter",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "starting_after"
          }
        },
        "description": "Cursor for forward pagination"
      },
      {
        "displayName": "Ending Before",
        "name": "endingBefore",
        "type": "string",
        "default": "",
        "routing": {
          "send": {
            "type": "query",
            "property": "ending_before"
          }
        },
        "description": "Cursor for backward pagination"
      }
    ]
  }
]
```
