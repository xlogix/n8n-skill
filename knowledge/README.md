# n8n Agent Reference Guide

This `docs/` folder is a complete, agent-oriented reference for building and debugging n8n workflows.

## What This Covers

- Full built-in node catalog (all node types from `n8n-nodes-base`)
- Trigger and scheduling guidance
- Reusable workflow patterns
- Core n8n concepts (execution, expressions, data contracts)
- Queryable indexes to select nodes by workflow need

## How To Use This As An Agent

1. Start with `/docs/use-cases/workflow-needs.json` to map workflow intent to capabilities.
2. Use `/docs/reference/indexes/*.json` to resolve candidate nodes.
3. Open exact node contracts in `/docs/reference/node-catalog/nodes/*.md`.
4. Apply design constraints from `/docs/patterns/*.md`.

## Directory Map

- `/docs/concepts/`: execution model, expressions, data shape fundamentals
- `/docs/patterns/`: production workflow patterns
- `/docs/use-cases/`: intent-to-node mapping for workflow design
- `/docs/reference/`: machine-readable indexes + full node catalog

## Coverage Source

Node coverage is generated from local `n8n-nodes-base` package metadata via:

```bash
node scripts/n8n/generate_node_reference.js
```

Current catalog location:

- `/docs/reference/node-catalog/all-nodes.json`
- `/docs/reference/node-catalog/nodes/*.md`

## Query Quickstart

```bash
# 1) Find nodes by capability
jq -r '."api-integration"[]' docs/reference/indexes/nodes-by-capability.json

# 2) Find trigger nodes
jq -r '.[].name' docs/reference/indexes/trigger-nodes.json

# 3) Inspect contract for one node
sed -n '1,140p' docs/reference/node-catalog/nodes/httpRequest.md
```
