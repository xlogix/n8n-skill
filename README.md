# n8n-skill

*Created by Abhishek Uniyal (xlogix)*

This repository is a **custom skill** designed specifically for AI Agents (like Codex, Antigravity, Cursor, Windsurf, ChatGPT, and Claude). 

By giving your AI agent this skill, it learns exactly how to build, debug, and design [n8n](https://n8n.io) workflows perfectly.

## Why do you need this?

n8n has over 500+ built-in nodes. When you ask an AI to build a workflow, it usually guesses how the nodes work, which leads to broken code and frustration.

## The Solution

**n8n-skill** fixes this by giving the AI the actual instruction manual for every single n8n node. Instead of guessing, the AI reads the exact node requirements directly from this repository and builds the workflow exactly as you intended.

## How to add this skill to your AI

I've made it effortless to make your AI an n8n expert:

### 1. For IDEs (Cursor / Windsurf)

Simply clone or download this repository (`https://github.com/xlogix/n8n-skill`) and place it alongside your project folder in your IDE, or drop the `.cursorrules` file into your workspace. That's it. The IDE will now automatically read the n8n knowledge base whenever you ask it to build something.

### 2. For Claude Desktop

This repository includes an `mcp-manifest.json` file. You can configure your Claude Desktop app to use this file so it can natively read the n8n manual directly from your computer.

### 3. For Autonomous Agents (Codex / Antigravity)

For autonomous coding agents like Codex, you can simply clone this repository into your workspace and provide the following text prompt:
> *"I want you to use the local `n8n-skill` folder as your main knowledge base. Read the `knowledge/use-cases/workflow-needs.json` file to understand what I am trying to build, and read the node rules in `knowledge/reference/node-catalog/nodes/` before you write any code."*

## What is inside?

- `/knowledge/`: The actual instruction manuals for how all the nodes work.
  - `/concepts/`: Basic n8n rules.
  - `/patterns/`: Common, reusable workflow designs.
  - `/reference/`: The catalog of every single n8n node.
- `/.agents/`: Setup instructions for different AI platforms.
- `/website/`: The source code for the landing page.

## License

MIT License. See `LICENSE` for details.
