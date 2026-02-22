# Sticky Note

- Node name: `stickyNote`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/StickyNote/StickyNote.node.js`
- Node version: `1`
- Groups: `input`
- Description: Make your workflow easier to understand

## Inputs
- None declared

## Outputs
- None declared

## Credentials
- None

## Resource and Operation Coverage
- Not modeled via `resource`/`operation` fields

## Parameters
| Display Name | Name | Type | Required | Default | Description |
|---|---|---|---|---|---|
| Content | `content` | `string` | no | `## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/components/sticky-notes/)` |  |
| Height | `height` | `number` | yes | `160` |  |
| Width | `width` | `number` | yes | `240` |  |
| Color | `color` | `number` | yes | `1` |  |

## Full Parameter Schema
```json
[
  {
    "displayName": "Content",
    "name": "content",
    "type": "string",
    "default": "## I'm a note \n**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/components/sticky-notes/)"
  },
  {
    "displayName": "Height",
    "name": "height",
    "type": "number",
    "required": true,
    "default": 160
  },
  {
    "displayName": "Width",
    "name": "width",
    "type": "number",
    "required": true,
    "default": 240
  },
  {
    "displayName": "Color",
    "name": "color",
    "type": "number",
    "required": true,
    "default": 1
  }
]
```
