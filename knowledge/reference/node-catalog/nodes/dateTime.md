# Date & Time

- Node name: `dateTime`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/DateTime/DateTime.node.js`
- Node version: `2`
- Groups: `transform`
- Description: Manipulate date and time values

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- None

## Resource and Operation Coverage
### Operations
- default/all resources: `addToDate`, `extractDate`, `formatDate`, `getCurrentDate`, `getTimeBetweenDates`, `roundDate`, `subtractFromDate`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Operation | `operation` | `options` | no | `getCurrentDate` |  |
| You can also refer to the current date in n8n expressions by using <code>{{$now}}</code> or <code>{{$today}}</code>. <a target="_blank" href="https://docs.n8n.io/code/cookbook/luxon/">More info</a> | `notice` | `notice` | no |  |  |
| Include Current Time | `includeTime` | `boolean` | no | `true` | When deactivated, the time will be set to midnight |
| Output Field Name | `outputFieldName` | `string` | no | `currentDate` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| You can also do this using an expression, e.g. <code>{{your_date.plus(5, 'minutes')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a> | `notice` | `notice` | no |  |  |
| Date to Add To | `magnitude` | `string` | yes |  | The date that you want to change |
| Time Unit to Add | `timeUnit` | `options` | yes | `days` | Time unit for Duration parameter below |
| Duration | `duration` | `number` | no | `0` | The number of time units to add to the date |
| Output Field Name | `outputFieldName` | `string` | no | `newDate` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| You can also do this using an expression, e.g. <code>{{your_date.minus(5, 'minutes')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a> | `notice` | `notice` | no |  |  |
| Date to Subtract From | `magnitude` | `string` | yes |  | The date that you want to change |
| Time Unit to Subtract | `timeUnit` | `options` | yes | `days` | Time unit for Duration parameter below |
| Duration | `duration` | `number` | no | `0` | The number of time units to subtract from the date |
| Output Field Name | `outputFieldName` | `string` | no | `newDate` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| You can also do this using an expression, e.g. <code>{{your_date.format('yyyy-MM-dd')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a> | `notice` | `notice` | no |  |  |
| Date | `date` | `string` | no |  | The date that you want to format |
| Format | `format` | `options` | no | `MM/dd/yyyy` | The format to convert the date to |
| Custom Format | `customFormat` | `string` | no |  |  |
| Output Field Name | `outputFieldName` | `string` | no | `formattedDate` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| You can also do this using an expression, e.g. <code>{{ your_date.beginningOf('month') }}</code> or <code>{{ your_date.endOfMonth() }}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a> | `notice` | `notice` | no |  |  |
| Date | `date` | `string` | no |  | The date that you want to round |
| Mode | `mode` | `options` | no | `roundDown` |  |
| To Nearest | `toNearest` | `options` | no | `month` |  |
| To | `to` | `options` | no | `month` |  |
| Output Field Name | `outputFieldName` | `string` | no | `roundedDate` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| Start Date | `startDate` | `string` | no |  |  |
| End Date | `endDate` | `string` | no |  |  |
| Units | `units` | `multiOptions` | no | `["day"]` |  |
| Output Field Name | `outputFieldName` | `string` | no | `timeDifference` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |
| You can also do this using an expression, e.g. <code>{{ your_date.extract("month") }}}</code>. <a target="_blank" href="https://docs.n8n.io/code/cookbook/luxon/">More info</a> | `notice` | `notice` | no |  |  |
| Date | `date` | `string` | no |  | The date that you want to round |
| Part | `part` | `options` | no | `month` |  |
| Output Field Name | `outputFieldName` | `string` | no | `datePart` | Name of the field to put the output in |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Add to a Date",
        "value": "addToDate"
      },
      {
        "name": "Extract Part of a Date",
        "value": "extractDate"
      },
      {
        "name": "Format a Date",
        "value": "formatDate"
      },
      {
        "name": "Get Current Date",
        "value": "getCurrentDate"
      },
      {
        "name": "Get Time Between Dates",
        "value": "getTimeBetweenDates"
      },
      {
        "name": "Round a Date",
        "value": "roundDate"
      },
      {
        "name": "Subtract From a Date",
        "value": "subtractFromDate"
      }
    ],
    "default": "getCurrentDate"
  },
  {
    "displayName": "You can also refer to the current date in n8n expressions by using <code>{{$now}}</code> or <code>{{$today}}</code>. <a target=\"_blank\" href=\"https://docs.n8n.io/code/cookbook/luxon/\">More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "getCurrentDate"
        ]
      }
    }
  },
  {
    "displayName": "Include Current Time",
    "name": "includeTime",
    "type": "boolean",
    "default": true,
    "description": "When deactivated, the time will be set to midnight",
    "displayOptions": {
      "show": {
        "operation": [
          "getCurrentDate"
        ]
      }
    }
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "currentDate",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "getCurrentDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "getCurrentDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      },
      {
        "displayName": "Timezone",
        "name": "timezone",
        "type": "string",
        "placeholder": "America/New_York",
        "default": "",
        "description": "The timezone to use. If not set, the timezone of the n8n instance will be used. Use ‘GMT’ for +00:00 timezone."
      }
    ]
  },
  {
    "displayName": "You can also do this using an expression, e.g. <code>{{your_date.plus(5, 'minutes')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    }
  },
  {
    "displayName": "Date to Add To",
    "name": "magnitude",
    "type": "string",
    "description": "The date that you want to change",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    },
    "required": true
  },
  {
    "displayName": "Time Unit to Add",
    "name": "timeUnit",
    "description": "Time unit for Duration parameter below",
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    },
    "type": "options",
    "options": [
      {
        "name": "Years",
        "value": "years"
      },
      {
        "name": "Quarters",
        "value": "quarters"
      },
      {
        "name": "Months",
        "value": "months"
      },
      {
        "name": "Weeks",
        "value": "weeks"
      },
      {
        "name": "Days",
        "value": "days"
      },
      {
        "name": "Hours",
        "value": "hours"
      },
      {
        "name": "Minutes",
        "value": "minutes"
      },
      {
        "name": "Seconds",
        "value": "seconds"
      },
      {
        "name": "Milliseconds",
        "value": "milliseconds"
      }
    ],
    "default": "days",
    "required": true
  },
  {
    "displayName": "Duration",
    "name": "duration",
    "type": "number",
    "description": "The number of time units to add to the date",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    }
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "newDate",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "addToDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      }
    ]
  },
  {
    "displayName": "You can also do this using an expression, e.g. <code>{{your_date.minus(5, 'minutes')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    }
  },
  {
    "displayName": "Date to Subtract From",
    "name": "magnitude",
    "type": "string",
    "description": "The date that you want to change",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    },
    "required": true
  },
  {
    "displayName": "Time Unit to Subtract",
    "name": "timeUnit",
    "description": "Time unit for Duration parameter below",
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    },
    "type": "options",
    "options": [
      {
        "name": "Years",
        "value": "years"
      },
      {
        "name": "Quarters",
        "value": "quarters"
      },
      {
        "name": "Months",
        "value": "months"
      },
      {
        "name": "Weeks",
        "value": "weeks"
      },
      {
        "name": "Days",
        "value": "days"
      },
      {
        "name": "Hours",
        "value": "hours"
      },
      {
        "name": "Minutes",
        "value": "minutes"
      },
      {
        "name": "Seconds",
        "value": "seconds"
      },
      {
        "name": "Milliseconds",
        "value": "milliseconds"
      }
    ],
    "default": "days",
    "required": true
  },
  {
    "displayName": "Duration",
    "name": "duration",
    "type": "number",
    "description": "The number of time units to subtract from the date",
    "default": 0,
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    }
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "newDate",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "subtractFromDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      }
    ]
  },
  {
    "displayName": "You can also do this using an expression, e.g. <code>{{your_date.format('yyyy-MM-dd')}}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "formatDate"
        ]
      }
    }
  },
  {
    "displayName": "Date",
    "name": "date",
    "type": "string",
    "description": "The date that you want to format",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "formatDate"
        ]
      }
    }
  },
  {
    "displayName": "Format",
    "name": "format",
    "type": "options",
    "displayOptions": {
      "show": {
        "operation": [
          "formatDate"
        ]
      }
    },
    "options": [
      {
        "name": "Custom Format",
        "value": "custom"
      },
      {
        "name": "MM/DD/YYYY",
        "value": "MM/dd/yyyy",
        "description": "Example: 09/04/1986"
      },
      {
        "name": "YYYY/MM/DD",
        "value": "yyyy/MM/dd",
        "description": "Example: 1986/04/09"
      },
      {
        "name": "MMMM DD YYYY",
        "value": "MMMM dd yyyy",
        "description": "Example: April 09 1986"
      },
      {
        "name": "MM-DD-YYYY",
        "value": "MM-dd-yyyy",
        "description": "Example: 09-04-1986"
      },
      {
        "name": "YYYY-MM-DD",
        "value": "yyyy-MM-dd",
        "description": "Example: 1986-04-09"
      },
      {
        "name": "Unix Timestamp",
        "value": "X",
        "description": "Example: 1672531200"
      },
      {
        "name": "Unix Ms Timestamp",
        "value": "x",
        "description": "Example: 1674691200000"
      }
    ],
    "default": "MM/dd/yyyy",
    "description": "The format to convert the date to"
  },
  {
    "displayName": "Custom Format",
    "name": "customFormat",
    "type": "string",
    "displayOptions": {
      "show": {
        "format": [
          "custom"
        ],
        "operation": [
          "formatDate"
        ]
      }
    },
    "hint": "List of special tokens <a target=\"_blank\" href=\"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\">More info</a>",
    "default": "",
    "placeholder": "yyyy-MM-dd"
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "formattedDate",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "formatDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "formatDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      },
      {
        "displayName": "From Date Format",
        "name": "fromFormat",
        "type": "string",
        "default": "e.g yyyyMMdd",
        "hint": "Tokens are case sensitive",
        "description": "Format in which the input 'Date' is, it's helpful when the format is not recognized automatically. Use those <a href=\"https://moment.github.io/luxon/#/formatting?id=table-of-tokens&id=table-of-tokens\" target=\"_blank\">tokens</a> to define the format."
      },
      {
        "displayName": "Use Workflow Timezone",
        "name": "timezone",
        "type": "boolean",
        "default": false,
        "description": "Whether to use the timezone of the input or the workflow's timezone"
      }
    ]
  },
  {
    "displayName": "You can also do this using an expression, e.g. <code>{{ your_date.beginningOf('month') }}</code> or <code>{{ your_date.endOfMonth() }}</code>. <a target='_blank' href='https://docs.n8n.io/code/cookbook/luxon/'>More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ]
      }
    }
  },
  {
    "displayName": "Date",
    "name": "date",
    "type": "string",
    "description": "The date that you want to round",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ]
      }
    }
  },
  {
    "displayName": "Mode",
    "name": "mode",
    "type": "options",
    "options": [
      {
        "name": "Round Down",
        "value": "roundDown"
      },
      {
        "name": "Round Up",
        "value": "roundUp"
      }
    ],
    "default": "roundDown",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ]
      }
    }
  },
  {
    "displayName": "To Nearest",
    "name": "toNearest",
    "type": "options",
    "options": [
      {
        "name": "Year",
        "value": "year"
      },
      {
        "name": "Month",
        "value": "month"
      },
      {
        "name": "Week",
        "value": "week"
      },
      {
        "name": "Day",
        "value": "day"
      },
      {
        "name": "Hour",
        "value": "hour"
      },
      {
        "name": "Minute",
        "value": "minute"
      },
      {
        "name": "Second",
        "value": "second"
      }
    ],
    "default": "month",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ],
        "mode": [
          "roundDown"
        ]
      }
    }
  },
  {
    "displayName": "To",
    "name": "to",
    "type": "options",
    "options": [
      {
        "name": "End of Month",
        "value": "month"
      }
    ],
    "default": "month",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ],
        "mode": [
          "roundUp"
        ]
      }
    }
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "roundedDate",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "roundDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      }
    ]
  },
  {
    "displayName": "Start Date",
    "name": "startDate",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "getTimeBetweenDates"
        ]
      }
    }
  },
  {
    "displayName": "End Date",
    "name": "endDate",
    "type": "string",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "getTimeBetweenDates"
        ]
      }
    }
  },
  {
    "displayName": "Units",
    "name": "units",
    "type": "multiOptions",
    "options": [
      {
        "name": "Year",
        "value": "year"
      },
      {
        "name": "Month",
        "value": "month"
      },
      {
        "name": "Week",
        "value": "week"
      },
      {
        "name": "Day",
        "value": "day"
      },
      {
        "name": "Hour",
        "value": "hour"
      },
      {
        "name": "Minute",
        "value": "minute"
      },
      {
        "name": "Second",
        "value": "second"
      },
      {
        "name": "Millisecond",
        "value": "millisecond"
      }
    ],
    "displayOptions": {
      "show": {
        "operation": [
          "getTimeBetweenDates"
        ]
      }
    },
    "default": [
      "day"
    ]
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "timeDifference",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "getTimeBetweenDates"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "getTimeBetweenDates"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      },
      {
        "displayName": "Output as ISO String",
        "name": "isoString",
        "type": "boolean",
        "default": false,
        "description": "Whether to output the date as ISO string or not"
      }
    ]
  },
  {
    "displayName": "You can also do this using an expression, e.g. <code>{{ your_date.extract(\"month\") }}}</code>. <a target=\"_blank\" href=\"https://docs.n8n.io/code/cookbook/luxon/\">More info</a>",
    "name": "notice",
    "type": "notice",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "extractDate"
        ]
      }
    }
  },
  {
    "displayName": "Date",
    "name": "date",
    "type": "string",
    "description": "The date that you want to round",
    "default": "",
    "displayOptions": {
      "show": {
        "operation": [
          "extractDate"
        ]
      }
    }
  },
  {
    "displayName": "Part",
    "name": "part",
    "type": "options",
    "options": [
      {
        "name": "Year",
        "value": "year"
      },
      {
        "name": "Month",
        "value": "month"
      },
      {
        "name": "Week",
        "value": "week"
      },
      {
        "name": "Day",
        "value": "day"
      },
      {
        "name": "Hour",
        "value": "hour"
      },
      {
        "name": "Minute",
        "value": "minute"
      },
      {
        "name": "Second",
        "value": "second"
      }
    ],
    "default": "month",
    "displayOptions": {
      "show": {
        "operation": [
          "extractDate"
        ]
      }
    }
  },
  {
    "displayName": "Output Field Name",
    "name": "outputFieldName",
    "type": "string",
    "default": "datePart",
    "description": "Name of the field to put the output in",
    "displayOptions": {
      "show": {
        "operation": [
          "extractDate"
        ]
      }
    }
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "placeholder": "Add option",
    "displayOptions": {
      "show": {
        "operation": [
          "extractDate"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Include Input Fields",
        "name": "includeInputFields",
        "type": "boolean",
        "default": false,
        "description": "Whether to include all fields of the input item in the output item"
      }
    ]
  }
]
```
