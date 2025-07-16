#!/bin/bash

# Emergency build script for exit code 137 (memory kill)
# Use this when regular builds fail with "Killed" and exit code 137

echo "🚨 Emergency build for exit code 137 (memory constraints)"
echo "This script uses minimal memory settings..."

# Backup original config
cp next.config.js next.config.js.backup 2>/dev/null || echo "No existing config to backup"

# Use ultra-minimal config
echo "📝 Using ultra-minimal Next.js configuration..."
cp next.config.plesk-ultra.js next.config.js

# Set ultra-low memory limits
echo "🧠 Setting ultra-low memory limits..."
export NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size --max-semi-space-size=1"

# Clean up first
echo "🧹 Cleaning up..."
rm -rf .next 2>/dev/null

# Try build
echo "🏗️ Attempting emergency build..."
npm run build:fast

# Check result
if [ $? -eq 0 ]; then
    echo "✅ Emergency build successful!"
    echo ""
    echo "⚠️  Note: This build uses minimal optimizations for memory constraints"
    echo "Consider upgrading your Plesk plan for better performance"
    echo ""
    echo "To restore optimized config later:"
    echo "cp next.config.js.backup next.config.js"
elif [ $? -eq 137 ]; then
    echo "❌ Still getting exit code 137 - memory limits are extremely low"
    echo "🔧 Trying absolute minimum settings..."
    
    export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size --max-semi-space-size=1"
    npm run build:fast
    
    if [ $? -eq 0 ]; then
        echo "✅ Absolute minimum build successful!"
        echo "⚠️  Performance will be significantly impacted"
    else
        echo "❌ Unable to build even with minimal settings"
        echo "Your Plesk environment has insufficient memory for this application"
        echo "Please contact your hosting provider to:"
        echo "1. Increase memory limits"
        echo "2. Upgrade to a higher tier plan"
        echo "3. Consider using a VPS instead of shared hosting"
        
        # Restore original config
        cp next.config.js.backup next.config.js 2>/dev/null
        exit 1
    fi
else
    echo "❌ Build failed with different error (not memory related)"
    echo "Check the error message above for details"
    
    # Restore original config
    cp next.config.js.backup next.config.js 2>/dev/null
    exit 1
fi

echo ""
echo "🎯 Build completed. Next steps:"
echo "1. Set your environment variables"
echo "2. Run 'npm start' to start the application"
