# Microsoft Graph Security

- Node name: `microsoftGraphSecurity`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Microsoft/GraphSecurity/MicrosoftGraphSecurity.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Consume the Microsoft Graph Security API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `microsoftGraphSecurityOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Secure Score (`secureScore`)
- Secure Score Control Profile (`secureScoreControlProfile`)

### Operations
- resource `secureScore`: `get`, `getAll`
- resource `secureScoreControlProfile`: `get`, `getAll`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `secureScore` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Secure Score ID | `secureScoreId` | `string` | yes |  | ID of the secure score to retrieve |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `get` |  |
| Secure Score Control Profile ID | `secureScoreControlProfileId` | `string` | yes |  | ID of the secure score control profile to retrieve |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `50` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Secure Score Control Profile ID | `secureScoreControlProfileId` | `string` | yes |  | ID of the secure score control profile to update |
| Provider | `provider` | `string` | yes |  | Name of the provider of the security product or service |
| Vendor | `vendor` | `string` | yes |  | Name of the vendor of the security product or service |
| Update Fields | `updateFields` | `collection` | no | `{}` |  |

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
        "name": "Secure Score",
        "value": "secureScore"
      },
      {
        "name": "Secure Score Control Profile",
        "value": "secureScoreControlProfile"
      }
    ],
    "default": "secureScore"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "secureScore"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "action": "Get a secure score"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many secure scores"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Secure Score ID",
    "name": "secureScoreId",
    "description": "ID of the secure score to retrieve",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScore"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": false,
    "description": "Whether to return all results or only up to a given limit",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScore"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "default": 50,
    "description": "Max number of results to return",
    "typeOptions": {
      "minValue": 1,
      "maxValue": 1000
    },
    "displayOptions": {
      "show": {
        "resource": [
          "secureScore"
        ],
        "operation": [
          "getAll"
        ],
        "returnAll": [
          false
        ]
      }
    }
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "default": {},
    "placeholder": "Add Filter",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScore"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Filter Query Parameter",
        "name": "filter",
        "description": "<a href=\"https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter\">Query parameter</a> to filter results by",
        "type": "string",
        "default": "",
        "placeholder": "currentScore eq 13"
      },
      {
        "displayName": "Include Control Scores",
        "name": "includeControlScores",
        "type": "boolean",
        "default": false
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
          "secureScoreControlProfile"
        ]
      }
    },
    "options": [
      {
        "name": "Get",
        "value": "get",
        "action": "Get a secure score control profile"
      },
      {
        "name": "Get Many",
        "value": "getAll",
        "action": "Get many secure score control profiles"
      },
      {
        "name": "Update",
        "value": "update",
        "action": "Update a secure score control profile"
      }
    ],
    "default": "get"
  },
  {
    "displayName": "Secure Score Control Profile ID",
    "name": "secureScoreControlProfileId",
    "description": "ID of the secure score control profile to retrieve",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "get"
        ]
      }
    }
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "default": false,
    "description": "Whether to return all results or only up to a given limit",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "getAll"
        ]
      }
    }
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "default": 50,
    "description": "Max number of results to return",
    "typeOptions": {
      "minValue": 1,
      "maxValue": 1000
    },
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "getAll"
        ],
        "returnAll": [
          false
        ]
      }
    }
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "default": {},
    "placeholder": "Add Filter",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "getAll"
        ]
      }
    },
    "options": [
      {
        "displayName": "Filter Query Parameter",
        "name": "filter",
        "description": "<a href=\"https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter\">Query parameter</a> to filter results by",
        "type": "string",
        "default": "",
        "placeholder": "startsWith(id, 'AATP')"
      }
    ]
  },
  {
    "displayName": "Secure Score Control Profile ID",
    "name": "secureScoreControlProfileId",
    "description": "ID of the secure score control profile to update",
    "type": "string",
    "required": true,
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Provider",
    "name": "provider",
    "type": "string",
    "description": "Name of the provider of the security product or service",
    "default": "",
    "placeholder": "SecureScore",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "update"
        ]
      }
    }
  },
  {
    "displayName": "Vendor",
    "name": "vendor",
    "type": "string",
    "description": "Name of the vendor of the security product or service",
    "default": "",
    "placeholder": "Microsoft",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "secureScoreControlProfile"
        ],
        "operation": [
          "update"
        ]
      }
    }
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
          "secureScoreControlProfile"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "options": [
      {
        "displayName": "State",
        "name": "state",
        "type": "options",
        "default": "Default",
        "description": "Analyst driven setting on the control",
        "options": [
          {
            "name": "Default",
            "value": "Default"
          },
          {
            "name": "Ignored",
            "value": "Ignored"
          },
          {
            "name": "Third Party",
            "value": "ThirdParty"
          }
        ]
      }
    ]
  }
]
```
