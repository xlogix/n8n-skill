# Bitly

- Node name: `bitly`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Bitly/Bitly.node.js`
- Node version: `1`
- Groups: `output`
- Description: Consume Bitly API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `bitlyApi` (required)
- `bitlyOAuth2Api` (required)

## Resource and Operation Coverage
### Resources
- Link (`link`)

### Operations
- resource `link`: `create`, `get`, `update`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `accessToken` |  |
| Resource | `resource` | `options` | no | `link` |  |
| Operation | `operation` | `options` | no | `create` |  |
| Long URL | `longUrl` | `string` | yes |  |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Deeplinks | `deeplink` | `fixedCollection` | no | `{}` |  |
| Bitlink | `id` | `string` | yes |  |  |
| Update Fields | `updateFields` | `collection` | no | `{}` |  |
| Deeplinks | `deeplink` | `fixedCollection` | no | `{}` |  |
| Bitlink | `id` | `string` | yes |  |  |

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
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Link",
        "value": "link"
      }
    ],
    "default": "link"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "link"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a link",
        "action": "Create a link"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a link",
        "action": "Get a link"
      },
      {
        "name": "Update",
        "value": "update",
        "description": "Update a link",
        "action": "Update a link"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "Long URL",
    "name": "longUrl",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "link"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "placeholder": "https://example.com",
    "required": true
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
          "link"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "displayName": "Domain",
        "name": "domain",
        "type": "string",
        "default": "bit.ly"
      },
      {
        "displayName": "Group Name or ID",
        "name": "group",
        "type": "options",
        "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
        "default": "",
        "typeOptions": {
          "loadOptionsMethod": "getGroups"
        }
      },
      {
        "displayName": "Tag Names or IDs",
        "name": "tags",
        "type": "multiOptions",
        "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
        "default": [],
        "typeOptions": {
          "loadOptionsMethod": "getTags",
          "loadOptionsDependsOn": [
            "group"
          ]
        }
      },
      {
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": ""
      }
    ]
  },
  {
    "displayName": "Deeplinks",
    "name": "deeplink",
    "placeholder": "Add Deep Link",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "link"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "deeplinkUi",
        "displayName": "Deep Link",
        "values": [
          {
            "displayName": "App ID",
            "name": "appId",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "App URI Path",
            "name": "appUriPath",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Install Type",
            "name": "installType",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Install URL",
            "name": "installUrl",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Bitlink",
    "name": "id",
    "type": "string",
    "default": "",
    "placeholder": "bit.ly/22u3ypK",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "link"
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
          "link"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "options": [
      {
        "displayName": "Archived",
        "name": "archived",
        "type": "boolean",
        "default": false
      },
      {
        "displayName": "Group Name or ID",
        "name": "group",
        "type": "options",
        "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
        "default": "",
        "typeOptions": {
          "loadOptionsMethod": "getGroups"
        }
      },
      {
        "displayName": "Long URL",
        "name": "longUrl",
        "type": "string",
        "default": ""
      },
      {
        "displayName": "Tag Names or IDs",
        "name": "tags",
        "type": "multiOptions",
        "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
        "default": [],
        "typeOptions": {
          "loadOptionsMethod": "getTags",
          "loadOptionsDependsOn": [
            "group"
          ]
        }
      },
      {
        "displayName": "Title",
        "name": "title",
        "type": "string",
        "default": ""
      }
    ]
  },
  {
    "displayName": "Deeplinks",
    "name": "deeplink",
    "placeholder": "Add Deep Link",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true
    },
    "displayOptions": {
      "show": {
        "resource": [
          "link"
        ],
        "operation": [
          "update"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "name": "deeplinkUi",
        "displayName": "Deep Link",
        "values": [
          {
            "displayName": "App ID",
            "name": "appId",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "App URI Path",
            "name": "appUriPath",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Install Type",
            "name": "installType",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Install URL",
            "name": "installUrl",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Bitlink",
    "name": "id",
    "type": "string",
    "default": "",
    "placeholder": "bit.ly/22u3ypK",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "link"
        ],
        "operation": [
          "get"
        ]
      }
    }
  }
]
```
