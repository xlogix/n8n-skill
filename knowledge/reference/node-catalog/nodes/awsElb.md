# AWS ELB

- Node name: `awsElb`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Aws/ELB/AwsElb.node.js`
- Node version: `1`
- Groups: `output`
- Description: Sends data to AWS ELB API

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `aws` (required)
- `awsAssumeRole` (required)

## Resource and Operation Coverage
### Resources
- Listener Certificate (`listenerCertificate`)
- Load Balancer (`loadBalancer`)

### Operations
- resource `listenerCertificate`: `add`, `getMany`, `remove`
- resource `loadBalancer`: `create`, `delete`, `get`, `getMany`

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Authentication | `authentication` | `options` | no | `iam` |  |
| Resource | `resource` | `options` | no | `loadBalancer` |  |
| Operation | `operation` | `options` | no | `create` |  |
| IP Address Type | `ipAddressType` | `options` | yes | `ipv4` | The type of IP addresses used by the subnets for your load balancer |
| Name | `name` | `string` | yes |  | This name must be unique per region per account, can have a maximum of 32 characters |
| Schema | `schema` | `options` | yes | `internet-facing` |  |
| Type | `type` | `options` | yes | `application` |  |
| Subnet ID Names or IDs | `subnets` | `multiOptions` | yes | `[]` | Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a> |
| Additional Fields | `additionalFields` | `collection` | no | `{}` |  |
| Load Balancer ARN | `loadBalancerId` | `string` | yes |  | Unique identifier for a particular loadBalancer |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Filters | `filters` | `collection` | no | `{}` |  |
| Load Balancer ARN | `loadBalancerId` | `string` | yes |  | ID of loadBalancer to delete |
| Operation | `operation` | `options` | no | `add` |  |
| Load Balancer ARN Name or ID | `loadBalancerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Listener ARN Name or ID | `listenerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Certificate ARN | `certificateId` | `string` | yes |  | Unique identifier for a particular loadBalancer |
| Load Balancer ARN Name or ID | `loadBalancerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Listener ARN Name or ID | `listenerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Return All | `returnAll` | `boolean` | no | `false` | Whether to return all results or only up to a given limit |
| Limit | `limit` | `number` | no | `100` | Max number of results to return |
| Load Balancer ARN Name or ID | `loadBalancerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Listener ARN Name or ID | `listenerId` | `options` | yes |  | Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. |
| Certificate ARN | `certificateId` | `string` | yes |  | Unique identifier for a particular loadBalancer |

## Full Parameter Schema
```json
[
  {
    "displayName": "Authentication",
    "name": "authentication",
    "type": "options",
    "options": [
      {
        "name": "AWS (IAM)",
        "value": "iam"
      },
      {
        "name": "AWS (Assume Role)",
        "value": "assumeRole"
      }
    ],
    "default": "iam"
  },
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Listener Certificate",
        "value": "listenerCertificate"
      },
      {
        "name": "Load Balancer",
        "value": "loadBalancer"
      }
    ],
    "default": "loadBalancer"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ]
      }
    },
    "options": [
      {
        "name": "Create",
        "value": "create",
        "description": "Create a load balancer",
        "action": "Create a load balancer"
      },
      {
        "name": "Delete",
        "value": "delete",
        "description": "Delete a load balancer",
        "action": "Delete a load balancer"
      },
      {
        "name": "Get",
        "value": "get",
        "description": "Get a load balancer",
        "action": "Get a load balancer"
      },
      {
        "name": "Get Many",
        "value": "getMany",
        "description": "Get many load balancers",
        "action": "Get many load balancers"
      }
    ],
    "default": "create"
  },
  {
    "displayName": "IP Address Type",
    "name": "ipAddressType",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "name": "Ipv4",
        "value": "ipv4"
      },
      {
        "name": "Dualstack",
        "value": "dualstack"
      }
    ],
    "default": "ipv4",
    "description": "The type of IP addresses used by the subnets for your load balancer"
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "default": "",
    "description": "This name must be unique per region per account, can have a maximum of 32 characters"
  },
  {
    "displayName": "Schema",
    "name": "schema",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "name": "Internal",
        "value": "internal"
      },
      {
        "name": "Internet Facing",
        "value": "internet-facing"
      }
    ],
    "default": "internet-facing"
  },
  {
    "displayName": "Type",
    "name": "type",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "options": [
      {
        "name": "Application",
        "value": "application"
      },
      {
        "name": "Network",
        "value": "network"
      }
    ],
    "default": "application"
  },
  {
    "displayName": "Subnet ID Names or IDs",
    "name": "subnets",
    "type": "multiOptions",
    "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "create"
        ]
      }
    },
    "typeOptions": {
      "loadOptionsMethod": "getSubnets"
    },
    "required": true,
    "default": []
  },
  {
    "displayName": "Additional Fields",
    "name": "additionalFields",
    "type": "collection",
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "operation": [
          "create"
        ],
        "resource": [
          "loadBalancer"
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Security Group IDs",
        "name": "securityGroups",
        "type": "multiOptions",
        "description": "Choose from the list, or specify IDs using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>",
        "typeOptions": {
          "loadOptionsMethod": "getSecurityGroups"
        },
        "default": []
      },
      {
        "displayName": "Tags",
        "name": "tagsUi",
        "placeholder": "Add Tag",
        "type": "fixedCollection",
        "default": {},
        "typeOptions": {
          "multipleValues": true
        },
        "options": [
          {
            "name": "tagValues",
            "displayName": "Tag",
            "values": [
              {
                "displayName": "Key",
                "name": "key",
                "type": "string",
                "default": "",
                "description": "The key of the tag"
              },
              {
                "displayName": "Value",
                "name": "value",
                "type": "string",
                "default": "",
                "description": "The value of the tag"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "displayName": "Load Balancer ARN",
    "name": "loadBalancerId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "get"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer"
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "getMany"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "description": "Max number of results to return",
    "default": 100,
    "typeOptions": {
      "maxValue": 400,
      "minValue": 1
    },
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "getMany"
        ],
        "returnAll": [
          false
        ]
      }
    }
  },
  {
    "displayName": "Filters",
    "name": "filters",
    "type": "collection",
    "placeholder": "Add Filter",
    "displayOptions": {
      "show": {
        "operation": [
          "getMany"
        ],
        "resource": [
          "loadBalancer"
        ],
        "returnAll": [
          true
        ]
      }
    },
    "default": {},
    "options": [
      {
        "displayName": "Names",
        "name": "names",
        "type": "string",
        "default": "",
        "description": "The names of the load balancers. Multiples can be defined separated by comma."
      }
    ]
  },
  {
    "displayName": "Load Balancer ARN",
    "name": "loadBalancerId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "loadBalancer"
        ],
        "operation": [
          "delete"
        ]
      }
    },
    "default": "",
    "description": "ID of loadBalancer to delete"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ]
      }
    },
    "options": [
      {
        "name": "Add",
        "value": "add",
        "description": "Add the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener",
        "action": "Add a listener certificate"
      },
      {
        "name": "Get Many",
        "value": "getMany",
        "description": "Get many listener certificates",
        "action": "Get many listener certificates"
      },
      {
        "name": "Remove",
        "value": "remove",
        "description": "Remove the specified certificate from the certificate list for the specified HTTPS or TLS listener",
        "action": "Remove a listener certificate"
      }
    ],
    "default": "add"
  },
  {
    "displayName": "Load Balancer ARN Name or ID",
    "name": "loadBalancerId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancers"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Listener ARN Name or ID",
    "name": "listenerId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancerListeners",
      "loadOptionsDependsOn": [
        "loadBalancerId"
      ]
    },
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Certificate ARN",
    "name": "certificateId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "add"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer"
  },
  {
    "displayName": "Load Balancer ARN Name or ID",
    "name": "loadBalancerId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancers"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "getMany"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Listener ARN Name or ID",
    "name": "listenerId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancerListeners",
      "loadOptionsDependsOn": [
        "loadBalancerId"
      ]
    },
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "getMany"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Return All",
    "name": "returnAll",
    "type": "boolean",
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "getMany"
        ]
      }
    },
    "default": false,
    "description": "Whether to return all results or only up to a given limit"
  },
  {
    "displayName": "Limit",
    "name": "limit",
    "type": "number",
    "description": "Max number of results to return",
    "default": 100,
    "typeOptions": {
      "maxValue": 400,
      "minValue": 1
    },
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "getMany"
        ],
        "returnAll": [
          false
        ]
      }
    }
  },
  {
    "displayName": "Load Balancer ARN Name or ID",
    "name": "loadBalancerId",
    "type": "options",
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancers"
    },
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Listener ARN Name or ID",
    "name": "listenerId",
    "type": "options",
    "required": true,
    "typeOptions": {
      "loadOptionsMethod": "getLoadBalancerListeners",
      "loadOptionsDependsOn": [
        "loadBalancerId"
      ]
    },
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href=\"https://docs.n8n.io/code/expressions/\">expression</a>."
  },
  {
    "displayName": "Certificate ARN",
    "name": "certificateId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "listenerCertificate"
        ],
        "operation": [
          "remove"
        ]
      }
    },
    "default": "",
    "description": "Unique identifier for a particular loadBalancer"
  }
]
```
