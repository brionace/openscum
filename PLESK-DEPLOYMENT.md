# 🚀 Simple Plesk Deployment Guide

## Standard Deployment (Recommended)

For most Plesk environments, use these simple commands:

```bash
# 1. Clean install
npm install

# 2. Build
npm run build

# 3. Start
npm start
```

## If You Get Memory Issues (Exit Code 137)

Try with memory limit:

```bash
# Build with memory limit
NODE_OPTIONS="--max-old-space-size=2048" npm run build

# If that still fails, try lower memory
NODE_OPTIONS="--max-old-space-size=1024" npm run build
```

## Environment Variables

Create `.env` file:

```bash
DATABASE_URL="your_database_url"
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_key"
SUPABASE_SERVICE_ROLE_KEY="your_service_key"
```

## Troubleshooting

1. **Engine warnings**: The `.npmrc` file handles this automatically
2. **Memory issues**: Use the memory limit commands above
3. **Build fails**: Make sure all environment variables are set

## Quick Setup (Alternative Methods)

### Method 1: Use our deployment script

```bash
chmod +x deploy-plesk.sh
./deploy-plesk.sh
```

### Method 2: Manual installation (Node.js v23 compatible)

```bash
rm -rf node_modules
rm -f package-lock.json
npm install --legacy-peer-deps --force --no-audit --no-fund
npm run build:plesk
```

### Method 3: If still failing

```bash
# Use yarn instead (better with Node.js v23)
npm install -g yarn
yarn install --ignore-engines
yarn build
```

### Step 3: Environment Variables

1. Copy `.env.plesk.example` to `.env`
2. Update with your actual values:
   ```
   DATABASE_URL="your_database_url"
   ```

### Step 4: Start Application

```bash
npm start
```

## If Installation Still Fails

### Option 1: Use Node.js 16-18

Make sure your Plesk uses Node.js version 16, 17, or 18 (not newer versions).

### Option 2: Minimal Dependencies

If still having issues, try installing only production dependencies:

```bash
npm install --production --legacy-peer-deps
```

### Option 3: Use Yarn Instead

```bash
# Install yarn
npm install -g yarn

# Install with yarn
yarn install --legacy-peer-deps
yarn build
```

### Option 4: Skip Optional Dependencies

```bash
npm install --no-optional --legacy-peer-deps
```

## Environment Variables for Plesk

**Required:**

- `DATABASE_URL` - Your PostgreSQL or SQLite database URL

**Optional (for full features):**

- `NEXT_PUBLIC_SUPABASE_URL` - If using Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - If using Supabase

## Troubleshooting

### Error: "Cannot read properties of null"

- Use Node.js 16-18
- Clear npm cache: `npm cache clean --force`
- Use: `npm install --legacy-peer-deps`

### Error: "Out of memory"

- Use `npm run build:plesk` instead of `npm run build`
- Or: `NODE_OPTIONS="--max-old-space-size=2048" npm run build`

### Error: "Permission denied"

- Make sure you have write permissions
- Try: `chmod 755 node_modules` after installation

### Error: "Network timeout"

- Check your hosting firewall settings
- Try: `npm install --fetch-timeout=300000`

## Performance Tips for Plesk

1. **Use the simplified commands:**

   - `npm run build:plesk` instead of `npm run build`
   - `npm run install:plesk` for installation

2. **Skip development tools:**

   ```bash
   npm install --production
   ```

3. **Disable git hooks temporarily:**
   ```bash
   mv .husky .husky-disabled
   npm install
   mv .husky-disabled .husky
   ```

## Need Help?

If you're still having issues, the problem might be:

1. **Node.js version** - Use 16-18
2. **Memory limits** - Shared hosting limitations
3. **Network timeouts** - Plesk firewall settings
4. **Permissions** - File system permissions

Try the **Option 3: Use Yarn** approach as it often works better on shared hosting.
