# Onfleet Trigger

- Node name: `onfleetTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Onfleet/OnfleetTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Onfleet events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `onfleetApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Trigger On | `triggerOn` | `options` | yes | `[]` |  |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Trigger On",
    "name": "triggerOn",
    "type": "options",
    "options": [
      {
        "name": "SMS Recipient Opt Out",
        "value": "SMSRecipientOptOut"
      },
      {
        "name": "SMS Recipient Response Missed",
        "value": "smsRecipientResponseMissed"
      },
      {
        "name": "Task Arrival",
        "value": "taskArrival"
      },
      {
        "name": "Task Assigned",
        "value": "taskAssigned"
      },
      {
        "name": "Task Cloned",
        "value": "taskCloned"
      },
      {
        "name": "Task Completed",
        "value": "taskCompleted"
      },
      {
        "name": "Task Created",
        "value": "taskCreated"
      },
      {
        "name": "Task Delayed",
        "value": "taskDelayed"
      },
      {
        "name": "Task Deleted",
        "value": "taskDeleted"
      },
      {
        "name": "Task ETA",
        "value": "taskEta"
      },
      {
        "name": "Task Failed",
        "value": "taskFailed"
      },
      {
        "name": "Task Started",
        "value": "taskStarted"
      },
      {
        "name": "Task Unassigned",
        "value": "taskUnassigned"
      },
      {
        "name": "Task Updated",
        "value": "taskUpdated"
      },
      {
        "name": "Worker Created",
        "value": "workerCreated"
      },
      {
        "name": "Worker Deleted",
        "value": "workerDeleted"
      },
      {
        "name": "Worker Duty",
        "value": "workerDuty"
      }
    ],
    "required": true,
    "default": []
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "A name for the webhook for identification"
      }
    ]
  }
]
```
