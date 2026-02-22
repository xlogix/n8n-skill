# Error Trigger

- Node name: `errorTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ErrorTrigger/ErrorTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Triggers the workflow when another workflow has an error

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| This node will trigger when there is an error in another workflow, as long as that workflow is set up to do so. <a href="https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.errortrigger" target="_blank">More info</a> | `notice` | `notice` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "This node will trigger when there is an error in another workflow, as long as that workflow is set up to do so. <a href=\"https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.errortrigger\" target=\"_blank\">More info</a>",
    "name": "notice",
    "type": "notice",
    "default": ""
  }
]
```
