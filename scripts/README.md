# Build Validation Scripts

This directory contains scripts to validate various aspects of the application during the build process.

## Scripts Overview

### 🌍 `check-env.js`

Validates that all required environment variables are present.

**Required Variables:**

- `DATABASE_URL` - Database connection string

**Optional Variables:**

- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

**Usage:**

```bash
pnpm check:env
```

### 🗃️ `check-db-schema.js`

Validates database schema and connectivity.

**Checks:**

- Database connection
- Basic table queries
- Seed data presence
- Prisma schema validation

**Usage:**

```bash
node scripts/check-db-schema.js
```

### 📈 `validate-trends-api.js`

Validates the trends API logic and database queries.

**Checks:**

- Recent reports availability
- Trends aggregation query
- Scam type name resolution

**Usage:**

```bash
node scripts/validate-trends-api.js
```

### 🔍 `check-api-health.js`

Starts a development server and tests API endpoint health.

**Endpoints Tested:**

- `/api/reports`
- `/api/scam-types`
- `/api/trends`
- `/api/stats`

**Usage:**

```bash
pnpm check:api
```

### 🚀 `build-validation.js`

Comprehensive build validation that runs all checks in sequence.

**Includes:**

- Environment validation
- Type checking
- Linting
- Tests
- Database validation
- Build compilation

**Usage:**

```bash
pnpm check:all
```

## Package.json Scripts

| Script            | Description                   |
| ----------------- | ----------------------------- |
| `pnpm check:all`  | Run complete build validation |
| `pnpm check:env`  | Check environment variables   |
| `pnpm check:db`   | Validate database schema      |
| `pnpm check:api`  | Test API endpoint health      |
| `pnpm build`      | Full build with validation    |
| `pnpm build:fast` | Build without validation      |

## Git Hooks

### Pre-push Hook

Automatically runs comprehensive checks before pushing:

- Environment validation
- Type checking
- Linting
- Tests
- Database validation
- Build validation

### Pre-commit Hook

Runs basic checks on staged files:

- Linting
- Type checking
- Tests

## CI/CD Integration

The `.github/workflows/ci.yml` workflow runs these validations on:

- Push to main/develop branches
- Pull requests to main

## Troubleshooting

### Common Issues

**Database Connection Failed:**

- Ensure DATABASE_URL is correct
- Check database is running
- Run `pnpm prisma db push` to apply schema

**Missing Environment Variables:**

- Copy `.env.example` to `.env.local`
- Set required variables

**Build Failures:**

- Run `pnpm check:all` to see detailed error messages
- Check individual validation steps

**API Health Check Timeout:**

- Ensure no other process is using port 3333
- Check for syntax errors in API routes
