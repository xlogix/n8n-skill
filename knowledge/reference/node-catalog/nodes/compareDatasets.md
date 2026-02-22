# Compare Datasets

- Node name: `compareDatasets`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/CompareDatasets/CompareDatasets.node.js`
- Node version: `[1,2,2.1,2.2,2.3]`
- Groups: `transform`
- Description: Compare two inputs for changes

## Inputs
- `main`
- `main`

## Outputs
- `main`
- `main`
- `main`
- `main`

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Items from different branches are paired together when the fields below match. If paired, the rest of the fields are compared to determine whether the items are the same or different | `infoBox` | `notice` | no |  |  |
| Fields to Match | `mergeByFields` | `fixedCollection` | no | `{"values":[{"field1":"","field2":""}]}` |  |
| When There Are Differences | `resolve` | `options` | no | `preferInput2` |  |
| When There Are Differences | `resolve` | `options` | no | `includeBoth` |  |
| Fuzzy Compare | `fuzzyCompare` | `boolean` | no | `false` | Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same. |
| Prefer | `preferWhenMix` | `options` | no | `input1` |  |
| For Everything Except | `exceptWhenMix` | `string` | no |  |  |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Items from different branches are paired together when the fields below match. If paired, the rest of the fields are compared to determine whether the items are the same or different",
    "name": "infoBox",
    "type": "notice",
    "default": ""
  },
  {
    "displayName": "Fields to Match",
    "name": "mergeByFields",
    "type": "fixedCollection",
    "placeholder": "Add Fields to Match",
    "default": {
      "values": [
        {
          "field1": "",
          "field2": ""
        }
      ]
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "displayName": "Values",
        "name": "values",
        "values": [
          {
            "displayName": "Input A Field",
            "name": "field1",
            "type": "string",
            "default": "",
            "placeholder": "e.g. id",
            "hint": " Enter the field name as text",
            "requiresDataPath": "single"
          },
          {
            "displayName": "Input B Field",
            "name": "field2",
            "type": "string",
            "default": "",
            "placeholder": "e.g. id",
            "hint": " Enter the field name as text",
            "requiresDataPath": "single"
          }
        ]
      }
    ]
  },
  {
    "displayName": "When There Are Differences",
    "name": "resolve",
    "type": "options",
    "default": "preferInput2",
    "options": [
      {
        "name": "Use Input A Version",
        "value": "preferInput1"
      },
      {
        "name": "Use Input B Version",
        "value": "preferInput2"
      },
      {
        "name": "Use a Mix of Versions",
        "value": "mix",
        "description": "Output uses different inputs for different fields"
      },
      {
        "name": "Include Both Versions",
        "value": "includeBoth",
        "description": "Output contains all data (but structure more complex)"
      }
    ],
    "displayOptions": {
      "show": {
        "@version": [
          1,
          2
        ]
      }
    }
  },
  {
    "displayName": "When There Are Differences",
    "name": "resolve",
    "type": "options",
    "default": "includeBoth",
    "options": [
      {
        "name": "Use Input A Version",
        "value": "preferInput1"
      },
      {
        "name": "Use Input B Version",
        "value": "preferInput2"
      },
      {
        "name": "Use a Mix of Versions",
        "value": "mix",
        "description": "Output uses different inputs for different fields"
      },
      {
        "name": "Include Both Versions",
        "value": "includeBoth",
        "description": "Output contains all data (but structure more complex)"
      }
    ],
    "displayOptions": {
      "hide": {
        "@version": [
          1,
          2
        ]
      }
    }
  },
  {
    "displayName": "Fuzzy Compare",
    "name": "fuzzyCompare",
    "type": "boolean",
    "default": false,
    "description": "Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.",
    "displayOptions": {
      "hide": {
        "@version": [
          1
        ]
      }
    }
  },
  {
    "displayName": "Prefer",
    "name": "preferWhenMix",
    "type": "options",
    "default": "input1",
    "options": [
      {
        "name": "Input A Version",
        "value": "input1"
      },
      {
        "name": "Input B Version",
        "value": "input2"
      }
    ],
    "displayOptions": {
      "show": {
        "resolve": [
          "mix"
        ]
      }
    }
  },
  {
    "displayName": "For Everything Except",
    "name": "exceptWhenMix",
    "type": "string",
    "default": "",
    "placeholder": "e.g. id, country",
    "hint": "Enter the names of the input fields as text, separated by commas",
    "displayOptions": {
      "show": {
        "resolve": [
          "mix"
        ]
      }
    },
    "requiresDataPath": "multiple"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "default": {},
    "options": [
      {
        "displayName": "Fields to Skip Comparing",
        "name": "skipFields",
        "type": "string",
        "default": "",
        "placeholder": "e.g. updated_at, updated_by",
        "hint": "Enter the field names as text, separated by commas",
        "description": "Fields that shouldn't be included when checking whether two items are the same",
        "requiresDataPath": "multiple"
      },
      {
        "displayName": "Fuzzy Compare",
        "name": "fuzzyCompare",
        "type": "boolean",
        "default": false,
        "description": "Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.",
        "displayOptions": {
          "show": {
            "@version": [
              1
            ]
          }
        }
      },
      {
        "displayName": "Disable Dot Notation",
        "name": "disableDotNotation",
        "type": "boolean",
        "default": false,
        "description": "Whether to disallow referencing child fields using `parent.child` in the field name"
      },
      {
        "displayName": "Multiple Matches",
        "name": "multipleMatches",
        "type": "options",
        "default": "first",
        "options": [
          {
            "name": "Include First Match Only",
            "value": "first",
            "description": "Only ever output a single item per match"
          },
          {
            "name": "Include All Matches",
            "value": "all",
            "description": "Output multiple items if there are multiple matches"
          }
        ]
      }
    ]
  }
]
```
