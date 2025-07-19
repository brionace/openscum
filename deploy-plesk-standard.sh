#!/bin/bash

# Simple Plesk Deployment Script - Standard Next.js
echo "🚀 Starting standard Next.js deployment for Plesk..."

# Step 1: Clean up
echo "🧹 Cleaning up previous builds..."
rm -rf .next
rm -rf node_modules/.cache
npm cache clean --force

# Step 2: Use standard Next.js config
echo "📝 Using standard Next.js configuration..."
cp next.config.standard.js next.config.js

# Step 3: Install dependencies with basic settings
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --no-audit

# Step 4: Generate Prisma
echo "🔧 Generating Prisma client..."
npx prisma generate

# Step 5: Build with appropriate memory limits
echo "🏗️ Building application..."

# Try different memory limits based on available resources
if NODE_OPTIONS="--max-old-space-size=2048" npm run build; then
    echo "✅ Build successful with 2GB memory limit"
elif NODE_OPTIONS="--max-old-space-size=1024" npm run build; then
    echo "✅ Build successful with 1GB memory limit"
elif NODE_OPTIONS="--max-old-space-size=512" npm run build; then
    echo "✅ Build successful with 512MB memory limit"
else
    echo "❌ Build failed even with minimal memory settings"
    echo "Your Plesk environment may have severe limitations"
    exit 1
fi

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Set your environment variables in Plesk (.env file)"
echo "2. Run 'npm start' to start the application"
echo "3. Your app will be available on the port Plesk assigns"
