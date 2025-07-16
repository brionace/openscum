#!/bin/bash

# Plesk Deployment Script
# Simple, lightweight deployment for shared hosting

echo "🚀 Starting Plesk deployment..."

# Step 1: Clean up
echo "🧹 Cleaning up..."
rm -rf node_modules
rm -f package-lock.json

# Step 2: Clear npm cache (if possible)
echo "🗑️ Clearing npm cache..."
npm cache clean --force 2>/dev/null || echo "Cache clean skipped (no permissions)"

# Step 3: Install with minimal flags
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --no-audit --no-fund --no-optional --production=false

# Step 4: Simple build
echo "🏗️ Building application..."
npm run build:plesk

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Set your environment variables in Plesk"
echo "2. Run 'npm start' to start the application"
