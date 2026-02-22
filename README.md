# n8n-skill (The Agent-First Standard)

**This repository is not for humans.** It is an Open Standard Knowledge Base designed specifically to be added as a "skill" to AI Agents (like Codex, Antigravity, Cursor, Windsurf, ChatGPT, and Claude). By giving your agent this skill, it gains the ability to build, debug, and architect [n8n](https://n8n.io) workflows perfectly, without any bugs or hallucinated JSON properties.

## The Problem

n8n has over 500+ built-in nodes and a constantly shifting API. AI models hallucinate parameter names, misconfigure triggers, and guess JSON structures, leading to broken workflows.

## The Solution

**n8n-skill** solves this by providing the complete n8n node catalog, architectural patterns, and execution concepts in a machine-readable REST-like pattern optimized *exclusively* for AI consumption. It strips away human-centric visual guides and replaces them with strict JSON declarations and behavioral contracts.

## Zero-Friction Integration

We've made it effortless to make your AI an n8n expert:

### 1. IDE Integration (Cursor / Windsurf)

Simply clone or download this repository (`https://github.com/xlogix/n8n-skill`) and place it alongside your project folder in your IDE, or drop the `.cursorrules` file into your workspace. The IDE will automatically instruct the AI on how to index and read the n8n knowledge base when you ask it questions.

### 2. Chat UI Integration (ChatGPT / Claude Web)

Copy the prompt found in `.agents/system-prompt.md` and paste it as the "Custom Instructions" or the initial system prompt in your chat session.

### 3. Model Context Protocol (MCP)

This repository includes an `mcp-manifest.json` outlining how MCP servers can mount the `/knowledge` directory to expose n8n capabilities dynamically to Claude Desktop and other MCP clients.

### 4. Autonomous Agents (Codex / Antigravity)

For autonomous coding agents like Codex, you can simply clone this repository into the workspace and provide the following instruction:
> *"I want you to use the local `n8n-skill` folder as your primary knowledge base. Read `knowledge/use-cases/workflow-needs.json` to map my instructions, and literally read the node markdown definitions in `knowledge/reference/node-catalog/nodes/` before writing n8n json."*

## Directory Structure

- `/knowledge/`: The raw intelligence of the skill (derived directly from the open standard).
  - `/concepts/`: Core n8n execution models.
  - `/patterns/`: Reusable, production-grade logic.
  - `/reference/`: The sprawling catalog of every n8n node.
- `/.agents/`: Pre-written system prompts for various AI platforms.
- `/website/`: (WIP) An upcoming interactive AI playground.

## License

MIT License. See `LICENSE` for details.
