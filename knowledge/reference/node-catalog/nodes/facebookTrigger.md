# Facebook Trigger

- Node name: `facebookTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Facebook/FacebookTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Facebook events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `facebookGraphAppApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| APP ID | `appId` | `string` | yes |  | Facebook APP ID |
| To watch Whatsapp business account events use the Whatsapp trigger node | `whatsappBusinessAccountNotice` | `notice` | no |  |  |
| Object | `object` | `options` | yes | `user` | The object to subscribe to |
| Field Names or IDs | `fields` | `multiOptions` | no | `[]` | The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "APP ID",
    "name": "appId",
    "type": "string",
    "required": true,
    "default": "",
    "description": "Facebook APP ID"
  },
  {
    "displayName": "To watch Whatsapp business account events use the Whatsapp trigger node",
    "name": "whatsappBusinessAccountNotice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "object": [
          "whatsappBusinessAccount"
        ]
      }
    }
  },
  {
    "displayName": "Object",
    "name": "object",
    "type": "options",
    "options": [
      {
        "name": "Ad Account",
        "value": "adAccount",
        "description": "Get updates about Ad Account"
      },
      {
        "name": "Application",
        "value": "application",
        "description": "Get updates about the app"
      },
      {
        "name": "Certificate Transparency",
        "value": "certificateTransparency",
        "description": "Get updates about Certificate Transparency"
      },
      {
        "name": "Group",
        "value": "group",
        "description": "Get updates about activity in groups and events in groups for Workplace"
      },
      {
        "name": "Instagram",
        "value": "instagram",
        "description": "Get updates about comments on your media"
      },
      {
        "name": "Link",
        "value": "link",
        "description": "Get updates about links for rich previews by an external provider"
      },
      {
        "name": "Page",
        "value": "page",
        "description": "Page updates"
      },
      {
        "name": "Permissions",
        "value": "permissions",
        "description": "Updates regarding granting or revoking permissions"
      },
      {
        "name": "User",
        "value": "user",
        "description": "User profile updates"
      },
      {
        "name": "Whatsapp Business Account",
        "value": "whatsappBusinessAccount",
        "description": "Get updates about Whatsapp business account"
      },
      {
        "name": "Workplace Security",
        "value": "workplaceSecurity",
        "description": "Get updates about Workplace Security"
      }
    ],
    "required": true,
    "default": "user",
    "description": "The object to subscribe to"
  },
  {
    "displayName": "Field Names or IDs",
    "name": "fields",
    "type": "multiOptions",
    "typeOptions": {
      "loadOptionsMethod": "getObjectFields",
      "loadOptionsDependsOn": [
        "object"
      ]
    },
    "default": [],
    "description": "The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Include Values",
        "name": "includeValues",
        "type": "boolean",
        "default": true,
        "description": "Whether change notifications should include the new values"
      }
    ]
  }
]
```
