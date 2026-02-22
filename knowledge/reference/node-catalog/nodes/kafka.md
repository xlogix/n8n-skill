# Kafka

- Node name: `kafka`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Kafka/Kafka.node.js`
- Node version: `1`
- Groups: `transform`
- Description: Sends messages to a Kafka topic

## Inputs
- `main`

## Outputs
- `main`

## Credentials
- `kafka` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Topic | `topic` | `string` | no |  | Name of the queue of topic to publish to |
| Send Input Data | `sendInputData` | `boolean` | no | `true` | Whether to send the data the node receives as JSON to Kafka |
| Message | `message` | `string` | no |  | The message to be sent |
| JSON Parameters | `jsonParameters` | `boolean` | no | `false` |  |
| Use Schema Registry | `useSchemaRegistry` | `boolean` | no | `false` | Whether to use Confluent Schema Registry |
| Schema Registry URL | `schemaRegistryUrl` | `string` | yes |  | URL of the schema registry |
| Use Key | `useKey` | `boolean` | no | `false` | Whether to use a message key |
| Key | `key` | `string` | yes |  | The message key |
| Event Name | `eventName` | `string` | yes |  | Namespace and Name of Schema in Schema Registry (namespace.name) |
| Headers | `headersUi` | `fixedCollection` | no | `{}` |  |
| Headers (JSON) | `headerParametersJson` | `json` | no |  | Header parameters as JSON (flat object) |
| Options | `options` | `collection` | no | `{}` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Topic",
    "name": "topic",
    "type": "string",
    "default": "",
    "placeholder": "topic-name",
    "description": "Name of the queue of topic to publish to"
  },
  {
    "displayName": "Send Input Data",
    "name": "sendInputData",
    "type": "boolean",
    "default": true,
    "description": "Whether to send the data the node receives as JSON to Kafka"
  },
  {
    "displayName": "Message",
    "name": "message",
    "type": "string",
    "displayOptions": {
      "show": {
        "sendInputData": [
          false
        ]
      }
    },
    "default": "",
    "description": "The message to be sent"
  },
  {
    "displayName": "JSON Parameters",
    "name": "jsonParameters",
    "type": "boolean",
    "default": false
  },
  {
    "displayName": "Use Schema Registry",
    "name": "useSchemaRegistry",
    "type": "boolean",
    "default": false,
    "description": "Whether to use Confluent Schema Registry"
  },
  {
    "displayName": "Schema Registry URL",
    "name": "schemaRegistryUrl",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "useSchemaRegistry": [
          true
        ]
      }
    },
    "placeholder": "https://schema-registry-domain:8081",
    "default": "",
    "description": "URL of the schema registry"
  },
  {
    "displayName": "Use Key",
    "name": "useKey",
    "type": "boolean",
    "default": false,
    "description": "Whether to use a message key"
  },
  {
    "displayName": "Key",
    "name": "key",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "useKey": [
          true
        ]
      }
    },
    "placeholder": "",
    "default": "",
    "description": "The message key"
  },
  {
    "displayName": "Event Name",
    "name": "eventName",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "useSchemaRegistry": [
          true
        ]
      }
    },
    "default": "",
    "description": "Namespace and Name of Schema in Schema Registry (namespace.name)"
  },
  {
    "displayName": "Headers",
    "name": "headersUi",
    "placeholder": "Add Header",
    "type": "fixedCollection",
    "displayOptions": {
      "show": {
        "jsonParameters": [
          false
        ]
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "default": {},
    "options": [
      {
        "name": "headerValues",
        "displayName": "Header",
        "values": [
          {
            "displayName": "Key",
            "name": "key",
            "type": "string",
            "default": ""
          },
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": ""
          }
        ]
      }
    ]
  },
  {
    "displayName": "Headers (JSON)",
    "name": "headerParametersJson",
    "type": "json",
    "displayOptions": {
      "show": {
        "jsonParameters": [
          true
        ]
      }
    },
    "default": "",
    "description": "Header parameters as JSON (flat object)"
  },
  {
    "displayName": "Options",
    "name": "options",
    "type": "collection",
    "default": {},
    "placeholder": "Add option",
    "options": [
      {
        "displayName": "Acks",
        "name": "acks",
        "type": "boolean",
        "default": false,
        "description": "Whether or not producer must wait for acknowledgement from all replicas"
      },
      {
        "displayName": "Compression",
        "name": "compression",
        "type": "boolean",
        "default": false,
        "description": "Whether to send the data in a compressed format using the GZIP codec"
      },
      {
        "displayName": "Timeout",
        "name": "timeout",
        "type": "number",
        "default": 30000,
        "description": "The time to await a response in ms"
      }
    ]
  }
]
```
