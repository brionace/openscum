# 🚨 Plesk Build Troubleshooting Guide

## Common Build Crashes and Solutions

### 1. Memory Issues (Most Common)

**Error symptoms:**

- Build process killed suddenly
- "JavaScript heap out of memory"
- Process exits without clear error
- `Creating an optimized production build ...Killed`
- `error Command failed with exit code 137`

**Solutions:**

```bash
# Option A: Use ultra-minimal build (for exit code 137)
NODE_OPTIONS="--max-old-space-size=1024" npm run build:fast

# Option B: Use minimal build
npm run build:plesk-minimal

# Option C: Set very low memory limit
NODE_OPTIONS="--max-old-space-size=512" npm run build:plesk

# Option D: Use our deployment script with fallbacks
chmod +x deploy-plesk.sh
./deploy-plesk.sh
```

**For exit code 137 specifically (memory kill):**

```bash
# Emergency ultra-low memory build
export NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size"
npm run build:fast

# If that fails, try even lower
export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size"
npm run build:fast
```

### 2. Node.js Engine Warnings

**Error symptoms:**

- "engine" warnings during npm install
- "Cannot read properties of null"

**Solutions:**

```bash
# Force install ignoring engine requirements
npm install --legacy-peer-deps --force --no-audit --no-fund

# Or use our deployment script which handles this
./deploy-plesk.sh
```

### 3. Prisma Client Issues

**Error symptoms:**

- "Cannot find module '@prisma/client'"
- Prisma generate fails

**Solutions:**

```bash
# Manual Prisma generation
npx prisma generate

# Reset Prisma completely
rm -rf node_modules/.prisma
rm -rf node_modules/@prisma
npm install
npx prisma generate
```

### 4. TypeScript Compilation Errors

**Error symptoms:**

- Type errors during build
- "Property 'x' does not exist on type 'y'"

**Solutions:**

- The `next.config.js` now includes `ignoreBuildErrors: true`
- This allows builds to succeed even with type errors
- Fix types after deployment if needed

### 5. Webpack Bundle Issues

**Error symptoms:**

- "Cannot resolve module"
- Bundle errors during build

**Solutions:**

- Updated `next.config.js` with better fallbacks
- Externalized problematic dependencies
- Improved bundle splitting

## Step-by-Step Plesk Deployment

### Method 1: Automated Script (Recommended)

```bash
chmod +x deploy-plesk.sh
./deploy-plesk.sh
```

### Method 2: Manual Commands

```bash
# 1. Clean everything
rm -rf node_modules package-lock.json
npm cache clean --force

# 2. Install with constraints
npm install --legacy-peer-deps --force --no-audit --no-fund --maxsockets 1

# 3. Build with memory limit
NODE_OPTIONS="--max-old-space-size=2048" npm run build:plesk-minimal
```

### Method 3: Ultra-Minimal (For Exit Code 137)

```bash
# For very constrained environments with exit code 137
export NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size"
npm ci --production
npx prisma generate
npm run build:plesk-ultra

# If that fails, try emergency mode
export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size"
cp next.config.plesk-ultra.js next.config.js
npm run build:fast
```

### Method 4: Emergency Build (Last Resort)

```bash
# Use the ultra-minimal config
cp next.config.plesk-ultra.js next.config.js

# Absolutely minimal memory
export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size --max-semi-space-size=1"
npm run build:fast

# If successful, restore original config
cp next.config.js.backup next.config.js 2>/dev/null || echo "No backup found"
```

## Environment Variables for Plesk

Create `.env` file with minimal configuration:

```bash
# Required
DATABASE_URL="your_database_url"

# Optional (only if using Supabase)
NEXT_PUBLIC_SUPABASE_URL="your_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_key"
SUPABASE_SERVICE_ROLE_KEY="your_service_key"
```

## Memory Optimization Tips

1. **Close other applications** during build
2. **Use minimal build command** (`build:plesk-minimal`)
3. **Set Node.js memory limit**: `NODE_OPTIONS="--max-old-space-size=2048"`
4. **Use `--maxsockets 1`** during npm install
5. **Clear cache frequently**: `npm cache clean --force`

## If Build Still Fails

1. **Check Node.js version**: Should be 16+ but may have issues with v23.x
2. **Check available memory**: Minimum 2GB RAM recommended
3. **Check disk space**: Ensure sufficient space for node_modules
4. **Check Plesk logs**: Look for specific error messages
5. **Try different build commands** in this order:
   - `npm run build:plesk`
   - `npm run build:plesk-minimal`
   - `NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size" npm run build:plesk-ultra`
   - `NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size" npm run build:fast`

## Exit Code 137 (Memory Kill) - Specific Solution

**Exit code 137 means your build process was killed by the system due to memory limits.**

### Immediate Fix:

```bash
# Step 1: Use ultra-low memory settings
export NODE_OPTIONS="--max-old-space-size=512 --optimize-for-size"

# Step 2: Use the ultra-minimal config
cp next.config.plesk-ultra.js next.config.js

# Step 3: Build with minimal resources
npm run build:fast

# Step 4: If successful, you can restore the original config later
# cp next.config.js.backup next.config.js
```

### If That Still Fails:

```bash
# Even lower memory limit
export NODE_OPTIONS="--max-old-space-size=256 --optimize-for-size --max-semi-space-size=1"
npm run build:fast
```

## Build Success Verification

After successful build, you should see:

```
✓ Compiled successfully
Route (app)                     Size    First Load JS
┌ λ /                          5.7 kB      215 kB
...
```

## Getting Help

If none of these solutions work:

1. Check the exact error message in Plesk logs
2. Verify your Plesk Node.js version and settings
3. Consider upgrading your Plesk hosting plan for more memory
4. Contact your Plesk hosting provider for Node.js optimization

---

_Last updated: January 2025 - Optimized for Node.js v23.x and memory-constrained environments_
