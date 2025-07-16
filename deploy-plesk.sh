#!/bin/bash

# Plesk Deployment Script - Fixed for Node.js v23.x
# Handles engine warnings and file system issues

echo "🚀 Starting Plesk deployment (Node.js v23.x compatible)..."

# Step 1: Force clean up (handle locked directories)
echo "🧹 Force cleaning up..."
rm -rf node_modules 2>/dev/null || echo "Removing node_modules manually..."
find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true
rm -f package-lock.json

# Step 2: Clear npm cache
echo "🗑️ Clearing npm cache..."
npm cache clean --force 2>/dev/null || echo "Cache clean skipped"

# Step 3: Install with engine override
echo "📦 Installing dependencies (ignoring engine warnings)..."
npm install --legacy-peer-deps --no-audit --no-fund --force --no-optional

# Step 4: Simple build
echo "🏗️ Building application..."
npm run build:plesk

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Set your environment variables in Plesk"
echo "2. Run 'npm start' to start the application"
