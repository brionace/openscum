#!/bin/bash

# Clean Plesk Deployment Script
# Fixes ENOTEMPTY errors, Husky issues, and hangs during build

echo "🚀 Starting clean Plesk deployment..."

# Step 1: Complete cleanup
echo "1️⃣ Cleaning previous installation..."
rm -rf node_modules
rm -f package-lock.json 
rm -rf .next
rm -rf .husky
find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true

# Step 2: Clear npm cache and disable git hooks
echo "2️⃣ Clearing npm cache and disabling git hooks..."
npm cache clean --force
git config --unset core.hooksPath 2>/dev/null || true

# Step 3: Install production dependencies only (no Jest/testing packages)
echo "3️⃣ Installing production dependencies..."
NODE_ENV=production npm install --omit=dev --legacy-peer-deps --no-audit --no-fund --ignore-scripts

# Step 4: Generate Prisma client manually
echo "4️⃣ Generating Prisma client..."
npx prisma generate

# Step 5: Build application with memory optimization
echo "5️⃣ Building application..."
NODE_OPTIONS="--max-old-space-size=1024" npm run build:plesk

echo ""
echo "✅ Deployment complete!"
echo "🚀 Start the application with: npm start"
echo ""
echo "📝 Next steps:"
echo "1. Set your environment variables"
echo "2. Run 'npm start' to start the application"
