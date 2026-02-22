# RSS Feed Trigger

- Node name: `rssFeedReadTrigger`
- n8n-nodes-base version: `2.7.2`
- Source file: `n8n-nodes-base/dist/nodes/RssFeedRead/RssFeedReadTrigger.node.js`
- Node version: `1`
- Groups: `trigger`
- Description: Starts a workflow when an RSS feed is updated

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
| Feed URL | `feedUrl` | `string` | yes | `https://blog.n8n.io/rss/` | URL of the RSS feed to poll |

## Full Parameter Schema
```json
[
  {
    "displayName": "Feed URL",
    "name": "feedUrl",
    "type": "string",
    "default": "https://blog.n8n.io/rss/",
    "required": true,
    "description": "URL of the RSS feed to poll"
  }
]
```
