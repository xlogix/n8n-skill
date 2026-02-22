#!/bin/bash
set -e

echo "🚀 Starting n8n-skill publisher..."

# 1. Ensure we are on the generator branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "generator" ]; then
    echo "❌ Error: You must be on the 'generator' branch to run the publish script."
    exit 1
fi

# 2. Regenerate latest nodes
echo "📦 Generating fresh nodes..."
npm run generate

# 3. Commit any local changes to the generator branch so we don't lose work
if ! git diff-index --quiet HEAD --; then
  echo "💾 Committing local changes to 'generator' branch..."
  git add .
  git commit -m "chore: save generator state before publish"
fi

# 4. Switch to main branch
echo "🌿 Switching to main branch..."
git checkout main

# 5. Rsync the generated files cleanly to the main knowledge folder
# Using --delete ensures that if a node was removed from n8n, it is deleted here too
echo "📂 Transferring generated nodes to the main knowledge folder..."
mkdir -p knowledge/reference/node-catalog/nodes/
rsync -av --delete output/knowledge/reference/node-catalog/nodes/ knowledge/reference/node-catalog/nodes/

# 6. Stage the files on main
echo "✅ Staging new node updates..."
git add knowledge/reference/node-catalog/nodes/

# 7. Show the user the diff summary
echo ""
echo "📊 Publish Summary:"
git status -s

echo ""
echo "🎉 Success! You are now on the 'main' branch with all node updates generated and staged."
echo "👉 Run 'git commit -m \"docs: update node catalog\"' to finalize, and then switch back to generator with 'git checkout generator'."
