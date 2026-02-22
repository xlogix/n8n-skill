# Google Business Profile Trigger

- Node name: `googleBusinessProfileTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Google/BusinessProfile/GoogleBusinessProfileTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals.

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `googleBusinessProfileOAuth2Api` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes | `reviewAdded` |  |
| Account | `account` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The Google Business Profile account |
| Location | `location` | `resourceLocator` | yes | `{"mode":"list","value":""}` | The specific location or business associated with the account |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "required": true,
    "type": "options",
    "noDataExpression": true,
    "default": "reviewAdded",
    "options": [
      {
        "name": "Review Added",
        "value": "reviewAdded"
      }
    ]
  },
  {
    "displayName": "Account",
    "name": "account",
    "required": true,
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "The Google Business Profile account",
    "displayOptions": {
      "show": {
        "event": [
          "reviewAdded"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From list",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchAccounts",
          "searchable": true
        }
      },
      {
        "displayName": "By name",
        "name": "name",
        "type": "string",
        "hint": "Enter the account name",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "accounts/[0-9]+",
              "errorMessage": "The name must start with \"accounts/\""
            }
          }
        ],
        "placeholder": "e.g. accounts/0123456789"
      }
    ]
  },
  {
    "displayName": "Location",
    "name": "location",
    "required": true,
    "type": "resourceLocator",
    "default": {
      "mode": "list",
      "value": ""
    },
    "description": "The specific location or business associated with the account",
    "displayOptions": {
      "show": {
        "event": [
          "reviewAdded"
        ]
      }
    },
    "modes": [
      {
        "displayName": "From list",
        "name": "list",
        "type": "list",
        "typeOptions": {
          "searchListMethod": "searchLocations",
          "searchable": true
        }
      },
      {
        "displayName": "By name",
        "name": "name",
        "type": "string",
        "hint": "Enter the location name",
        "validation": [
          {
            "type": "regex",
            "properties": {
              "regex": "locations/[0-9]+",
              "errorMessage": "The name must start with \"locations/\""
            }
          }
        ],
        "placeholder": "e.g. locations/0123456789"
      }
    ]
  }
]
```
