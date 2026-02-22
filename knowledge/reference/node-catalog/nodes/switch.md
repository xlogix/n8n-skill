# Switch

- Node name: `switch`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Switch/Switch.node.js`
- Node version: `[3,3.1,3.2,3.3,3.4]`
- Groups: `transform`
- Description: Route items depending on defined expression or rules

## Inputs
- `main`

## Outputs
- `={{((parameters) => {
    const mode = parameters.mode;
    if (mode === 'expression') {
        return Array.from({ length: parameters.numberOutputs }, (_, i) => ({
            type: 'main',
            displayName: i.toString(),
        }));
    }
    else {
        const rules = parameters.rules?.values ?? [];
        const ruleOutputs = rules.map((rule, index) => {
            return {
                type: 'main',
                displayName: rule.outputKey || index.toString(),
            };
        });
        if (parameters.options?.fallbackOutput === 'extra') {
            const renameFallbackOutput = parameters.options?.renameFallbackOutput;
            ruleOutputs.push({
                type: 'main',
                displayName: renameFallbackOutput || 'Fallback',
            });
        }
        return ruleOutputs;
    }
})($parameter)}}`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Mode | `mode` | `options` | no | `rules` | How data should be routed |
| Number of Outputs | `numberOutputs` | `number` | no | `4` | How many outputs to create |
| Number of Outputs | `numberOutputs` | `number` | no | `4` | How many outputs to create |
| Output Index | `output` | `number` | no | `={{}}` | The output index to send the input item to. Use an expression to calculate which input item should be routed to which output. The expression must return a number. |
| Routing Rules | `rules` | `fixedCollection` | no | `{"values":[{"conditions":{"options":{"caseSensitive":true,"leftValue":"","typeValidation":"strict...` |  |
| Convert types where required | `looseTypeValidation` | `boolean` | no | `false` | If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>"false"</code> or <code>0</code> will be cast to <code>false</code> |
| Options | `options` | `collection` | no | `{}` |  |

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
        "name": "Rules",
        "value": "rules",
        "description": "Build a matching rule for each output"
      },
      {
        "name": "Expression",
        "value": "expression",
        "description": "Write an expression to return the output index"
      }
    ],
    "default": "rules",
    "description": "How data should be routed"
  },
  {
    "displayName": "Number of Outputs",
    "name": "numberOutputs",
    "type": "number",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "mode": [
          "expression"
        ],
        "@version": [
          {
            "_cnd": {
              "gte": 3.3
            }
          }
        ]
      }
    },
    "default": 4,
    "description": "How many outputs to create"
  },
  {
    "displayName": "Number of Outputs",
    "name": "numberOutputs",
    "type": "number",
    "displayOptions": {
      "show": {
        "mode": [
          "expression"
        ],
        "@version": [
          {
            "_cnd": {
              "lt": 3.3
            }
          }
        ]
      }
    },
    "default": 4,
    "description": "How many outputs to create"
  },
  {
    "displayName": "Output Index",
    "name": "output",
    "type": "number",
    "validateType": "number",
    "hint": "The index to route the item to, starts at 0",
    "displayOptions": {
      "show": {
        "mode": [
          "expression"
        ]
      }
    },
    "default": "={{}}",
    "description": "The output index to send the input item to. Use an expression to calculate which input item should be routed to which output. The expression must return a number."
  },
  {
    "displayName": "Routing Rules",
    "name": "rules",
    "placeholder": "Add Routing Rule",
    "type": "fixedCollection",
    "typeOptions": {
      "multipleValues": true,
      "sortable": true
    },
    "default": {
      "values": [
        {
          "conditions": {
            "options": {
              "caseSensitive": true,
              "leftValue": "",
              "typeValidation": "strict"
            },
            "conditions": [
              {
                "leftValue": "",
                "rightValue": "",
                "operator": {
                  "type": "string",
                  "operation": "equals"
                }
              }
            ],
            "combinator": "and"
          }
        }
      ]
    },
    "displayOptions": {
      "show": {
        "mode": [
          "rules"
        ]
      }
    },
    "options": [
      {
        "name": "values",
        "displayName": "Routing Rule",
        "values": [
          {
            "displayName": "Conditions",
            "name": "conditions",
            "placeholder": "Add Condition",
            "type": "filter",
            "default": {},
            "typeOptions": {
              "multipleValues": false,
              "filter": {
                "caseSensitive": "={{!$parameter.options.ignoreCase}}",
                "typeValidation": "={{ ($nodeVersion < 3.1 ? $parameter.options.looseTypeValidation :  $parameter.looseTypeValidation) ? \"loose\" : \"strict\" }}",
                "version": "={{ $nodeVersion >=3.4 ? 3 : $nodeVersion >= 3.2 ? 2 : 1 }}"
              }
            }
          },
          {
            "displayName": "Rename Output",
            "name": "renameOutput",
            "type": "boolean",
            "default": false
          },
          {
            "displayName": "Output Name",
            "name": "outputKey",
            "type": "string",
            "default": "",
            "description": "The label of output to which to send data to if rule matches",
            "displayOptions": {
              "show": {
                "renameOutput": [
                  true
                ]
              }
            }
          }
        ]
      }
    ]
  },
  {
    "displayName": "Convert types where required",
    "description": "If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>\"false\"</code> or <code>0</code> will be cast to <code>false</code>",
    "name": "looseTypeValidation",
    "type": "boolean",
    "default": false,
    "displayOptions": {
      "show": {
        "@version": [
          {
            "_cnd": {
              "gte": 3.1
            }
          }
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "displayOptions": {
      "show": {
        "mode": [
          "rules"
        ]
      }
    },
    "options": [
      {
        "displayName": "Fallback Output",
        "name": "fallbackOutput",
        "type": "options",
        "typeOptions": {
          "loadOptionsDependsOn": [
            "rules.values",
            "/rules",
            "/rules.values"
          ],
          "loadOptionsMethod": "getFallbackOutputOptions"
        },
        "default": "none",
        "description": "If no rule matches the item will be sent to this output, by default they will be ignored"
      },
      {
        "displayName": "Ignore Case",
        "description": "Whether to ignore letter case when evaluating conditions",
        "name": "ignoreCase",
        "type": "boolean",
        "default": true
      },
      {
        "displayName": "Convert types where required",
        "description": "If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>\"false\"</code> or <code>0</code> will be cast to <code>false</code>",
        "name": "looseTypeValidation",
        "type": "boolean",
        "default": true,
        "displayOptions": {
          "show": {
            "@version": [
              {
                "_cnd": {
                  "lt": 3.1
                }
              }
            ]
          }
        }
      },
      {
        "displayName": "Rename Fallback Output",
        "name": "renameFallbackOutput",
        "type": "string",
        "placeholder": "e.g. Fallback",
        "default": "",
        "displayOptions": {
          "show": {
            "fallbackOutput": [
              "extra"
            ]
          }
        }
      },
      {
        "displayName": "Send data to all matching outputs",
        "name": "allMatchingOutputs",
        "type": "boolean",
        "default": false,
        "description": "Whether to send data to all outputs meeting conditions (and not just the first one)"
      }
    ]
  }
]
```
