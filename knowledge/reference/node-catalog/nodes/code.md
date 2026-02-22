# Code

- Node name: `code`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Code/Code.node.js`
- Node version: `[1,2]`
- Groups: `transform`
- Description: Run custom JavaScript or Python code

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
| Mode | `mode` | `options` | no | `runOnceForAllItems` |  |
| Language | `language` | `options` | no | `javaScript` |  |
| Language | `language` | `hidden` | no | `javaScript` |  |
| JavaScript | `jsCode` | `string` | no |  | JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>. |
| JavaScript | `jsCode` | `string` | no |  | JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>. |
| JavaScript | `jsCode` | `string` | no |  | JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>. |
| JavaScript | `jsCode` | `string` | no |  | JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>. |
| Type <code>$</code> for a list of <a target="_blank" href="https://docs.n8n.io/code-examples/methods-variables-reference/">special vars/methods</a>. Debug by using <code>console.log()</code> statements and viewing their output in the browser console. | `notice` | `notice` | no |  |  |
| Python | `pythonCode` | `string` | no |  | Python code to execute.<br><br>Tip: You can use built-in methods and variables like <code>_today</code> for dates and <code>_jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/code/builtin/">Learn more</a>. |
| Python | `pythonCode` | `string` | no |  | Python code to execute.<br><br>Tip: You can use built-in methods and variables like <code>_today</code> for dates and <code>_jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/code/builtin/">Learn more</a>. |
| Debug by using <code>print()</code> statements and viewing their output in the browser console.<br><br>The Python option does not support <code>_</code> syntax and helpers, except for <code>_items</code> in all-items mode and <code>_item</code> in per-item mode. | `notice` | `notice` | no |  |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Mode",
    "name": "mode",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Run Once for All Items",
        "value": "runOnceForAllItems",
        "description": "Run this code only once, no matter how many input items there are"
      },
      {
        "name": "Run Once for Each Item",
        "value": "runOnceForEachItem",
        "description": "Run this code as many times as there are input items"
      }
    ],
    "default": "runOnceForAllItems"
  },
  {
    "displayName": "Language",
    "name": "language",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "@version": [
          2
        ]
      }
    },
    "options": [
      {
        "name": "JavaScript",
        "value": "javaScript",
        "action": "Code in JavaScript"
      },
      {
        "name": "Python",
        "value": "pythonNative",
        "action": "Code in Python"
      }
    ],
    "default": "javaScript"
  },
  {
    "displayName": "Language",
    "name": "language",
    "type": "hidden",
    "displayOptions": {
      "show": {
        "@version": [
          1
        ]
      }
    },
    "default": "javaScript"
  },
  {
    "displayName": "JavaScript",
    "name": "jsCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "javaScript"
    },
    "default": "",
    "description": "JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/nodes/n8n-nodes-base.function\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "@version": [
          1
        ],
        "mode": [
          "runOnceForAllItems"
        ]
      }
    }
  },
  {
    "displayName": "JavaScript",
    "name": "jsCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "javaScript"
    },
    "default": "",
    "description": "JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/nodes/n8n-nodes-base.function\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "@version": [
          1
        ],
        "mode": [
          "runOnceForEachItem"
        ]
      }
    }
  },
  {
    "displayName": "JavaScript",
    "name": "jsCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "javaScript"
    },
    "default": "",
    "description": "JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/nodes/n8n-nodes-base.function\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "@version": [
          2
        ],
        "language": [
          "javaScript"
        ],
        "mode": [
          "runOnceForAllItems"
        ]
      }
    }
  },
  {
    "displayName": "JavaScript",
    "name": "jsCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "javaScript"
    },
    "default": "",
    "description": "JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/nodes/n8n-nodes-base.function\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "@version": [
          2
        ],
        "language": [
          "javaScript"
        ],
        "mode": [
          "runOnceForEachItem"
        ]
      }
    }
  },
  {
    "displayName": "Type <code>$</code> for a list of <a target=\"_blank\" href=\"https://docs.n8n.io/code-examples/methods-variables-reference/\">special vars/methods</a>. Debug by using <code>console.log()</code> statements and viewing their output in the browser console.",
    "name": "notice",
    "type": "notice",
    "displayOptions": {
      "show": {
        "language": [
          "javaScript"
        ]
      }
    },
    "default": ""
  },
  {
    "displayName": "Python",
    "name": "pythonCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "python"
    },
    "default": "",
    "description": "Python code to execute.<br><br>Tip: You can use built-in methods and variables like <code>_today</code> for dates and <code>_jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/code/builtin/\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "language": [
          "python",
          "pythonNative"
        ],
        "mode": [
          "runOnceForAllItems"
        ]
      }
    }
  },
  {
    "displayName": "Python",
    "name": "pythonCode",
    "type": "string",
    "typeOptions": {
      "editor": "codeNodeEditor",
      "editorLanguage": "python"
    },
    "default": "",
    "description": "Python code to execute.<br><br>Tip: You can use built-in methods and variables like <code>_today</code> for dates and <code>_jmespath</code> for querying JSON structures. <a href=\"https://docs.n8n.io/code/builtin/\">Learn more</a>.",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "language": [
          "python",
          "pythonNative"
        ],
        "mode": [
          "runOnceForEachItem"
        ]
      }
    }
  },
  {
    "displayName": "Debug by using <code>print()</code> statements and viewing their output in the browser console.<br><br>The Python option does not support <code>_</code> syntax and helpers, except for <code>_items</code> in all-items mode and <code>_item</code> in per-item mode.",
    "name": "notice",
    "type": "notice",
    "displayOptions": {
      "show": {
        "language": [
          "python",
          "pythonNative"
        ]
      }
    },
    "default": ""
  }
]
```
