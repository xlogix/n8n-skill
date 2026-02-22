const fs = require("fs");
const path = require("path");

// List of n8n node packages to extract
const PACKAGES = ["n8n-nodes-base", "@n8n/n8n-nodes-langchain"];

// The target output directory (similar to the main branch)
const OUTPUT_DIR = path.join(
    __dirname,
    "output",
    "knowledge",
    "reference",
    "node-catalog",
    "nodes",
);

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function getNodeDescription(nodeClass) {
    try {
        if (nodeClass.description) return nodeClass.description;
        const instance =
            typeof nodeClass === "function" ? new nodeClass() : nodeClass;
        if (instance && instance.description) return instance.description;
        if (instance && instance.baseDescription)
            return instance.baseDescription;
    } catch (e) {
        // Ignore errors during instantiation
    }
    return null;
}

function generateMarkdown(nodeName, description, packageName) {
    return `---
title: "${description.displayName || nodeName}"
description: "${(description.description || "").replace(/"/g, '\\"')}"
---

# ${description.displayName || nodeName}
**Node Type:** ${packageName.replace("@n8n/", "").replace("n8n-", "")}.${description.name || nodeName}

## Description
${description.description || "No description provided."}

## Schema
\`\`\`json
${JSON.stringify(description, null, 2)}
\`\`\`
`;
}

async function run() {
    console.log("Starting minimalist node generator...");
    ensureDirectoryExists(OUTPUT_DIR);

    let generatedCount = 0;

    for (const pkg of PACKAGES) {
        const packageJsonPath = require.resolve(`${pkg}/package.json`);
        const packageDir = path.dirname(packageJsonPath);
        const packageJson = require(packageJsonPath);

        const nodes = packageJson.n8n?.nodes || [];

        let nodePaths = [];
        if (Array.isArray(nodes)) {
            nodePaths = nodes;
        } else {
            nodePaths = Object.values(nodes);
        }

        console.log(`Extracting ${nodePaths.length} nodes from ${pkg}...`);

        for (const nodePath of nodePaths) {
            try {
                const fullPath = require.resolve(
                    path.join(packageDir, nodePath),
                );
                const nodeModule = require(fullPath);

                // Extract class
                const extractedName = path
                    .basename(nodePath)
                    .replace(/\\.node\\.(js|ts)$/, "");

                const NodeClass =
                    nodeModule.default ||
                    nodeModule[extractedName] ||
                    Object.values(nodeModule)[0];
                if (!NodeClass) continue;

                const description = getNodeDescription(NodeClass);
                if (!description) continue;

                const nodeName = description.name || extractedName;
                const markdown = generateMarkdown(nodeName, description, pkg);

                const outputPath = path.join(OUTPUT_DIR, `${nodeName}.md`);
                fs.writeFileSync(outputPath, markdown, "utf-8");
                generatedCount++;
            } catch (err) {
                // Silently skip nodes that fail to load or segfault
                // e.g. nodes requiring native bindings
            }
        }
    }

    console.log(
        `\nSuccess! Generated ${generatedCount} node definition files in ./output/knowledge/`,
    );
}

run();
