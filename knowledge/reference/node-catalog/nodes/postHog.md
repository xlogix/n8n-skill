# PostHog

- Node name: `postHog`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/PostHog/PostHog.node.js`
- Node version: `1`
- Groups: `input`
- Description: Consume PostHog API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `postHogApi` (required)

## Resource and Operation Coverage
### Resources
- Alias (`alias`)
- Event (`event`)
- Identity (`identity`)
- Track (`track`)

### Operations
- resource `alias`: `create`
- resource `event`: `create`
- resource `identity`: `create`
- resource `track`: `page`, `screen`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Resource | `resource` | `options` | no | `event` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Alias | `alias` | `string` | yes |  | The name of the alias |
| Distinct ID | `distinctId` | `string` | yes |  | The user's distinct ID |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Event | `eventName` | `string` | yes |  | The name of the event |
| Distinct ID | `distinctId` | `string` | yes |  | The user's distinct ID |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Distinct ID | `distinctId` | `string` | yes |  | The identity's distinct ID |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Operation | `operation` | `options` | no | `page` |  |
| Name | `name` | `string` | yes |  |  |
| Distinct ID | `distinctId` | `string` | yes |  | The user's distinct ID |
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
        "name": "Alias",
        "value": "alias"
      },
      {
        "name": "Event",
        "value": "event"
      },
      {
        "name": "Identity",
        "value": "identity"
      },
      {
        "name": "Track",
        "value": "track"
      }
    ],
    "default": "event"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "alias"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create an alias",
        "action": "Create an alias"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Alias",
    "name": "alias",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "alias"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The name of the alias"
  },
  {
    "displayName": "Distinct ID",
    "name": "distinctId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "alias"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The user's distinct ID"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "alias"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Context",
        "name": "contextUi",
        "type": "fixedCollection",
        "placeholder": "Add Property",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "displayName": "Context",
            "name": "contextValues",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
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
        "displayName": "Timestamp",
        "name": "timestamp",
        "type": "dateTime",
        "default": "",
        "description": "If not set, it'll automatically be set to the current time"
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
          "event"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create an event",
        "action": "Create an event"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Event",
    "name": "eventName",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "event"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The name of the event"
  },
  {
    "displayName": "Distinct ID",
    "name": "distinctId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "event"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The user's distinct ID"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "event"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Properties",
        "name": "propertiesUi",
        "type": "fixedCollection",
        "placeholder": "Add Property",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "displayName": "Property",
            "name": "propertyValues",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
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
        "displayName": "Timestamp",
        "name": "timestamp",
        "type": "dateTime",
        "default": "",
        "description": "If not set, it'll automatically be set to the current time"
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
          "identity"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "action": "Create an identity"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Distinct ID",
    "name": "distinctId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "identity"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "The identity's distinct ID"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "identity"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Properties",
        "name": "propertiesUi",
        "type": "fixedCollection",
        "placeholder": "Add Property",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "displayName": "Property",
            "name": "propertyValues",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
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
        "displayName": "Message ID",
        "name": "messageId",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Timestamp",
        "name": "timestamp",
        "type": "dateTime",
        "default": "",
        "description": "If not set, it'll automatically be set to the current time"
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
          "track"
        ]
      }
    },
    "options": [
      {
        "name": "Page",
        "value": "page",
        "description": "Track a page",
        "action": "Track a page"
      },
      {
        "name": "Screen",
        "value": "screen",
        "description": "Track a screen",
        "action": "Track a screen"
      }
    ],
    "default": "page"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "track"
        ],
        "operation": [
          "page",
          "screen"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Distinct ID",
    "name": "distinctId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "track"
        ],
        "operation": [
          "page",
          "screen"
        ]
      }
    },
    "default": "",
    "description": "The user's distinct ID"
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "track"
        ],
        "operation": [
          "page",
          "screen"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Category",
        "name": "category",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Context",
        "name": "contextUi",
        "type": "fixedCollection",
        "placeholder": "Add Property",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "displayName": "Context",
            "name": "contextValues",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
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
        "displayName": "Message ID",
        "name": "messageId",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Properties",
        "name": "propertiesUi",
        "type": "fixedCollection",
        "placeholder": "Add Property",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "displayName": "Property",
            "name": "propertyValues",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
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
        "displayName": "Timestamp",
        "name": "timestamp",
        "type": "dateTime",
        "default": "",
        "description": "If not set, it'll automatically be set to the current time"
      }
    ]
  }
]
```
