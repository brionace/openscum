#!/bin/bash

# Plesk Deployment Script - Fixed for Node.js v23.x and memory issues
# Handles engine warnings, file system issues, and memory constraints

echo "🚀 Starting Plesk deployment (Node.js v23.x compatible)..."

# Step 1: Force clean up (handle locked directories)
echo "🧹 Force cleaning up..."
rm -rf node_modules 2>/dev/null || echo "Removing node_modules manually..."
find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true
rm -f package-lock.json

# Step 2: Clear npm cache
echo "🗑️ Clearing npm cache..."
npm cache clean --force 2>/dev/null || echo "Cache clean skipped"

# Step 3: Set memory limit for Node.js
export NODE_OPTIONS="--max-old-space-size=4096"

# Step 4: Install with engine override and memory considerations
echo "📦 Installing dependencies (ignoring engine warnings)..."
npm install --legacy-peer-deps --no-audit --no-fund --force --no-optional --maxsockets 1

# Step 5: Generate Prisma client with error handling
echo "🔧 Generating Prisma client..."
npx prisma generate || echo "Prisma generate failed, trying alternative..."

# Step 6: Simple build with memory limit
echo "🏗️ Building application with memory optimization..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build:plesk

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Deployment complete!"
    echo ""
    echo "Next steps:"
    echo "1. Set your environment variables in Plesk"
    echo "2. Run 'npm start' to start the application"
elif [ $? -eq 137 ]; then
    echo "❌ Build killed (exit code 137) - Memory limit exceeded"
    echo "🔧 Trying ultra-minimal build with very low memory..."
    
    # Try ultra-minimal build for memory-constrained environments
    NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size" npm run build:fast
    
    if [ $? -eq 0 ]; then
        echo "✅ Ultra-minimal build completed!"
    else
        echo "❌ Ultra-minimal build also failed. Trying emergency build..."
        
        # Emergency build with absolute minimum memory
        cp next.config.plesk-ultra.js next.config.js
        NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size" npm run build:fast
        
        if [ $? -eq 0 ]; then
            echo "✅ Emergency build completed!"
        else
            echo "❌ All build attempts failed."
            echo "Your Plesk environment has severe memory constraints."
            echo "Contact your hosting provider to increase memory limits."
            exit 1
        fi
    fi
else
    echo "❌ Build failed. Trying alternative build..."
    
    # Alternative build with even more constraints
    echo "🔧 Attempting minimal build..."
    NODE_OPTIONS="--max-old-space-size=2048" npm run build:plesk-minimal || {
        echo "❌ All build attempts failed."
        echo "Check your Plesk environment:"
        echo "- Ensure Node.js version is compatible"
        echo "- Check available memory"
        echo "- Verify all environment variables are set"
        exit 1
    }
    
    echo "✅ Alternative build completed!"
fi
