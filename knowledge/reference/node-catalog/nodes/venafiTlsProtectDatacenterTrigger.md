# Venafi TLS Protect Datacenter Trigger

- Node name: `venafiTlsProtectDatacenterTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenterTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts the workflow when Venafi events occur

## Inputs
- None declared

## Outputs
- `main`

## Credentials
- `venafiTlsProtectDatacenterApi` (required)

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Trigger On | `triggerOn` | `options` | yes | `certificateExpired` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Trigger On",
    "name": "triggerOn",
    "type": "options",
    "options": [
      {
        "name": "Certificate Expired",
        "value": "certificateExpired"
      }
    ],
    "required": true,
    "default": "certificateExpired"
  }
]
```
