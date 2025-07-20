#!/bin/bash

# Ultra-reliable Plesk deployment script
# Designed to handle memory constraints and build hangs

echo "🚀 Starting ultra-reliable Plesk deployment..."

# Function to kill hanging processes
cleanup_processes() {
    echo "🧹 Cleaning up any hanging processes..."
    pkill -f "next build" 2>/dev/null || true
    pkill -f "prisma generate" 2>/dev/null || true
    pkill -f "npm" 2>/dev/null || true
    sleep 2
}

# Function to attempt build with timeout
build_with_timeout() {
    local timeout_duration=$1
    local build_command=$2
    local description=$3
    
    echo "⏰ Attempting $description with ${timeout_duration}s timeout..."
    
    # Use timeout command if available
    if command -v timeout >/dev/null 2>&1; then
        timeout $timeout_duration bash -c "$build_command"
        local exit_code=$?
        if [ $exit_code -eq 124 ]; then
            echo "❌ Build timed out after ${timeout_duration} seconds"
            cleanup_processes
            return 1
        fi
        return $exit_code
    else
        # Fallback without timeout
        eval $build_command
        return $?
    fi
}

# Step 1: Aggressive cleanup
echo "🧹 Aggressive cleanup..."
cleanup_processes
rm -rf .next
rm -rf node_modules/.cache
rm -rf node_modules/.prisma
rm -rf .npm
rm -f package-lock.json
npm cache clean --force 2>/dev/null || true

# Step 2: Backup current config
echo "📋 Backing up current configuration..."
cp next.config.js next.config.js.backup 2>/dev/null || echo "No existing config to backup"

# Step 3: Set memory limits early
echo "🧠 Setting memory limits..."
export NODE_OPTIONS="--max-old-space-size=1024 --optimize-for-size --max-semi-space-size=1"

# Step 4: Install with timeout and retries
echo "📦 Installing dependencies with timeout protection..."
for attempt in 1 2 3; do
    echo "Attempt $attempt/3..."
    
    if build_with_timeout 300 "npm install --legacy-peer-deps --no-audit --no-fund --force --no-optional --prefer-offline --maxsockets 1" "npm install"; then
        echo "✅ Dependencies installed successfully"
        break
    fi
    
    if [ $attempt -eq 3 ]; then
        echo "❌ Failed to install dependencies after 3 attempts"
        exit 1
    fi
    
    echo "⚠️ Install failed, cleaning and retrying..."
    rm -rf node_modules
    cleanup_processes
    sleep 5
done

# Step 5: Generate Prisma with timeout
echo "🔧 Generating Prisma client with timeout protection..."
if ! build_with_timeout 120 "npx prisma generate" "Prisma generation"; then
    echo "❌ Prisma generation failed or timed out"
    exit 1
fi

# Step 6: Use minimal config for build
echo "📝 Using minimal Next.js configuration..."
cp next.config.plesk-minimal.js next.config.js

# Step 7: Progressive build attempts with timeouts
echo "🏗️ Attempting progressive builds with timeout protection..."

# Attempt 1: 1GB memory with 10 minute timeout
if build_with_timeout 600 "NODE_OPTIONS=\"--max-old-space-size=1024 --optimize-for-size\" npm run build" "1GB build"; then
    echo "✅ Build successful with 1GB memory limit"
    echo "📦 Restoring original config..."
    cp next.config.js.backup next.config.js 2>/dev/null || echo "Keeping minimal config"
else
    echo "⚠️ 1GB build failed, trying 512MB..."
    cleanup_processes
    
    # Attempt 2: 512MB memory with 8 minute timeout
    if build_with_timeout 480 "NODE_OPTIONS=\"--max-old-space-size=512 --optimize-for-size --max-semi-space-size=1\" npm run build" "512MB build"; then
        echo "✅ Build successful with 512MB memory limit"
        echo "⚠️ Performance may be impacted due to memory constraints"
        cp next.config.js.backup next.config.js 2>/dev/null || echo "Keeping minimal config"
    else
        echo "⚠️ 512MB build failed, trying absolute minimum..."
        cleanup_processes
        
        # Attempt 3: Ultra-minimal with 5 minute timeout
        export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size --max-semi-space-size=1"
        cp next.config.plesk-ultra.js next.config.js
        
        if build_with_timeout 300 "npm run build" "ultra-minimal build"; then
            echo "✅ Ultra-minimal build successful"
            echo "⚠️⚠️ Severe performance impact expected"
        else
            echo "❌ All build attempts failed"
            echo ""
            echo "Your Plesk environment has insufficient resources."
            echo "Recommendations:"
            echo "1. Upgrade your hosting plan"
            echo "2. Contact hosting provider to increase memory limits"
            echo "3. Consider using a VPS instead of shared hosting"
            cleanup_processes
            exit 1
        fi
    fi
fi

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Set your environment variables in Plesk control panel:"
echo "   - DATABASE_URL (required)"
echo "   - NEXT_PUBLIC_SUPABASE_URL (if using Supabase)"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY (if using Supabase)"
echo "2. Run 'npm start' to start the application"
echo "3. Your app will be available on the port Plesk assigns"
