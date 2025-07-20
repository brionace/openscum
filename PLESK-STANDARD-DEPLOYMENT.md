# Standard Plesk Deployment Guide

This project has been simplified for reliable deployment on Plesk hosting environments.

## Quick Deployment

### Option 1: Automated Script

```bash
chmod +x deploy-plesk-standard.sh
./deploy-plesk-standard.sh
```

### Option 2: Manual Deployment

```bash
# 1. Clean and install
rm -rf .next node_modules/.cache
npm install --legacy-peer-deps

# 2. Set up environment
cp .env.example .env
# Edit .env with your database URL and other settings

# 3. Generate Prisma client
npx prisma generate

# 4. Build the application
npm run build:plesk
# or for low-memory environments:
# npm run build:minimal
# npm run build:fast

# 5. Start the application
npm start
```

## Environment Setup

1. Copy `.env.example` to `.env`
2. Set your `DATABASE_URL` (SQLite, PostgreSQL, or MySQL)
3. Add any other required environment variables

## Build Variants

- `npm run build` - Standard build
- `npm run build:plesk` - Optimized for Plesk (2GB memory limit)
- `npm run build:minimal` - For constrained environments (1GB memory limit)
- `npm run build:fast` - Ultra-minimal build (512MB memory limit)

## Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Apply schema to database
npx prisma db push

# Seed initial data
npm run db:seed:types
npm run db:seed:reports
```

## Troubleshooting

### Build Fails Due to Memory

Try the lower memory build variants:

```bash
npm run build:minimal
# or
npm run build:fast
```

### Module Not Found Errors

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Database Issues

Make sure your DATABASE_URL is correct and the database is accessible.

## What Changed

This setup removes:

- Cloudflare Workers integration
- Complex webpack configurations
- Memory-intensive build optimizations
- Experimental Next.js features
- Husky git hooks
- Wrangler and OpenNext dependencies

The result is a standard Next.js application that builds reliably on Plesk.
