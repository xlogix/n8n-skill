# Manual Trigger

- Node name: `manualTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/ManualTrigger/ManualTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Runs the flow on clicking a button in n8n

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
| This node is where the workflow execution starts (when you click the ‘test’ button on the canvas).<br><br> <a data-action="showNodeCreator">Explore other ways to trigger your workflow</a> (e.g on a schedule, or a webhook) | `notice` | `notice` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "This node is where the workflow execution starts (when you click the ‘test’ button on the canvas).<br><br> <a data-action=\"showNodeCreator\">Explore other ways to trigger your workflow</a> (e.g on a schedule, or a webhook)",
    "name": "notice",
    "type": "notice",
    "default": ""
  }
]
```
