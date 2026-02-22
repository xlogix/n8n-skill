# Wise Trigger

- Node name: `wiseTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Wise/WiseTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Wise events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `wiseApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Profile Name or ID | `profileId` | `options` | yes |  | Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Event | `event` | `options` | yes |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Profile Name or ID",
    "name": "profileId",
    "type": "options",
    "description": "Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getProfiles"
    },
    "default": ""
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "Balance Credit",
        "value": "balanceCredit",
        "description": "Triggered every time a balance account is credited"
      },
      {
        "name": "Balance Update",
        "value": "balanceUpdate",
        "description": "Triggered every time a balance account is credited or debited"
      },
      {
        "name": "Transfer Active Case",
        "value": "transferActiveCases",
        "description": "Triggered every time a transfer's list of active cases is updated"
      },
      {
        "name": "Transfer State Changed",
        "value": "tranferStateChange",
        "description": "Triggered every time a transfer's status is updated"
      }
    ]
  }
]
```
