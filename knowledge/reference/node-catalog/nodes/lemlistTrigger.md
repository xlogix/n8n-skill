# Lemlist Trigger

- Node name: `lemlistTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Lemlist/LemlistTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Handle Lemlist events via webhooks

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `lemlistApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Event | `event` | `options` | yes |  |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Event",
    "name": "event",
    "type": "options",
    "required": true,
    "default": "",
    "options": [
      {
        "name": "*",
        "value": "*"
      },
      {
        "name": "Contacted",
        "value": "contacted"
      },
      {
        "name": "Hooked",
        "value": "hooked"
      },
      {
        "name": "Attracted",
        "value": "attracted"
      },
      {
        "name": "Warmed",
        "value": "warmed"
      },
      {
        "name": "Interested",
        "value": "interested"
      },
      {
        "name": "Skipped",
        "value": "skipped"
      },
      {
        "name": "Not Interested",
        "value": "notInterested"
      },
      {
        "name": "Emails Sent",
        "value": "emailsSent"
      },
      {
        "name": "Emails Opened",
        "value": "emailsOpened"
      },
      {
        "name": "Emails Clicked",
        "value": "emailsClicked"
      },
      {
        "name": "Emails Replied",
        "value": "emailsReplied"
      },
      {
        "name": "Emails Bounced",
        "value": "emailsBounced"
      },
      {
        "name": "Emails Send Failed",
        "value": "emailsSendFailed"
      },
      {
        "name": "Emails Failed",
        "value": "emailsFailed"
      },
      {
        "name": "Emails Unsubscribed",
        "value": "emailsUnsubscribed"
      },
      {
        "name": "Emails Interested",
        "value": "emailsInterested"
      },
      {
        "name": "Emails Not Interested",
        "value": "emailsNotInterested"
      },
      {
        "name": "Opportunities Done",
        "value": "opportunitiesDone"
      },
      {
        "name": "Aircall Created",
        "value": "aircallCreated"
      },
      {
        "name": "Aircall Ended",
        "value": "aircallEnded"
      },
      {
        "name": "Aircall Done",
        "value": "aircallDone"
      },
      {
        "name": "Aircall Interested",
        "value": "aircallInterested"
      },
      {
        "name": "Aircall Not Interested",
        "value": "aircallNotInterested"
      },
      {
        "name": "Api Done",
        "value": "apiDone"
      },
      {
        "name": "Api Interested",
        "value": "apiInterested"
      },
      {
        "name": "Api Not Interested",
        "value": "apiNotInterested"
      },
      {
        "name": "Api Failed",
        "value": "apiFailed"
      },
      {
        "name": "LinkedIn Visit Done",
        "value": "linkedinVisitDone"
      },
      {
        "name": "LinkedIn Visit Failed",
        "value": "linkedinVisitFailed"
      },
      {
        "name": "LinkedIn Invite Done",
        "value": "linkedinInviteDone"
      },
      {
        "name": "LinkedIn Invite Failed",
        "value": "linkedinInviteFailed"
      },
      {
        "name": "LinkedIn Invite Accepted",
        "value": "linkedinInviteAccepted"
      },
      {
        "name": "LinkedIn Replied",
        "value": "linkedinReplied"
      },
      {
        "name": "LinkedIn Sent",
        "value": "linkedinSent"
      },
      {
        "name": "LinkedIn Voice Note Done",
        "value": "linkedinVoiceNoteDone"
      },
      {
        "name": "LinkedIn Voice Note Failed",
        "value": "linkedinVoiceNoteFailed"
      },
      {
        "name": "LinkedIn Interested",
        "value": "linkedinInterested"
      },
      {
        "name": "LinkedIn Not Interested",
        "value": "linkedinNotInterested"
      },
      {
        "name": "LinkedIn Send Failed",
        "value": "linkedinSendFailed"
      },
      {
        "name": "Manual Interested",
        "value": "manualInterested"
      },
      {
        "name": "Manual Not Interested",
        "value": "manualNotInterested"
      },
      {
        "name": "Paused",
        "value": "paused"
      },
      {
        "name": "Resumed",
        "value": "resumed"
      },
      {
        "name": "Custom Domain Errors",
        "value": "customDomainErrors"
      },
      {
        "name": "Connection Issue",
        "value": "connectionIssue"
      },
      {
        "name": "Send Limit Reached",
        "value": "sendLimitReached"
      },
      {
        "name": "Lemwarm Paused",
        "value": "lemwarmPaused"
      }
    ]
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add Field",
    "default": {},
    "options": [
      {
        "displayName": "Campaign Name or ID",
        "name": "campaignId",
        "type": "options",
        "typeOptions": {
          "loadOptionsMethod": "getCampaigns"
        },
        "default": "",
        "description": "We'll call this hook only for this campaignId. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
      },
      {
        "displayName": "Is First",
        "name": "isFirst",
        "type": "boolean",
        "default": false,
        "description": "Whether to call this hook only the first time this activity happened"
      }
    ]
  }
]
```
