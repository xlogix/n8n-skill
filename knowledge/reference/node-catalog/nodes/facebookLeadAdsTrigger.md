# Facebook Lead Ads Trigger

- Node name: `facebookLeadAdsTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/FacebookLeadAds/FacebookLeadAdsTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Facebook Lead Ads events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `facebookLeadAdsOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Due to Facebook API limitations, you can use just one Facebook Lead Ads trigger for each Facebook App | `facebookLeadAdsNotice` | `notice` | no |  |  |
| Event | `event` | `options` | yes | `newLead` |  |
| Page | `page` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The page linked to the form for retrieving new leads |
| Form | `form` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The form to monitor for fetching lead details upon submission |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Due to Facebook API limitations, you can use just one Facebook Lead Ads trigger for each Facebook App",
    "name": "facebookLeadAdsNotice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "newLead",
    "options": [
      {
        "name": "New Lead",
        "value": "newLead"
      }
    ]
  },
  {
    "displayName": "Page",
    "name": "page",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "description": "The page linked to the form for retrieving new leads",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "pageList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "121637951029080"
      }
    ]
  },
  {
    "displayName": "Form",
    "name": "form",
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "required": true,
    "description": "The form to monitor for fetching lead details upon submission",
    "modes": [
      {
        "displayName": "From List",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "formList"
        }
      },
      {
        "displayName": "By ID",
        "name": "id",
        "type": "string",
        "placeholder": "121637951029080"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Simplify Output",
        "name": "simplifyOutput",
        "type": "boolean",
        "default": true,
        "description": "Whether to return a simplified version of the webhook event instead of all fields"
      }
    ]
  }
]
```
