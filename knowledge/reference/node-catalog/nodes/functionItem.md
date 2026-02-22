# Function Item

- Node name: `functionItem`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/FunctionItem/FunctionItem.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Run custom function code which gets executed once per item

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| A newer version of this node type is available, called the ‘Code’ node | `notice` | `notice` | no |  |  |
| JavaScript Code | `functionCode` | `string` | no | `// Code here will run once per input item.
// More info and help: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.functionitem/
// Tip: You can use luxon for dates and $jmespath for querying JSON structures

// Add a new field called 'myNewField' to the JSON of the item
item.myNewField = 1;

// You can write logs to the browser console
console.log('Done!');

return item;` | The JavaScript code to execute for each item |

## Full Parameter Schema
```json
[
  {
    "displayName": "A newer version of this node type is available, called the ‘Code’ node",
    "name": "notice",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "JavaScript Code",
    "name": "functionCode",
    "typeOptions": {
      "alwaysOpenEditWindow": true,
      "codeAutocomplete": "functionItem",
      "editor": "jsEditor",
      "rows": 10
    },
    "type": "string",
    "default": "// Code here will run once per input item.\n// More info and help: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.functionitem/\n// Tip: You can use luxon for dates and $jmespath for querying JSON structures\n\n// Add a new field called 'myNewField' to the JSON of the item\nitem.myNewField = 1;\n\n// You can write logs to the browser console\nconsole.log('Done!');\n\nreturn item;",
    "description": "The JavaScript code to execute for each item",
    "noDataExpression": true
  }
]
```
