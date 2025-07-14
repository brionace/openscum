#!/bin/bash

# Verification script for pre-commit and pre-push checks
set -e

echo "🧪 Running tests..."
pnpm jest --ci --passWithNoTests

echo "✅ Tests passed!"

echo "🔍 Running linter..."
pnpm lint

echo "✅ Linting passed!"

echo "🔧 Running type check..."
pnpm typecheck

echo "✅ Type checking passed!"

echo "🏗️ Running build..."
pnpm build

echo "✅ Build passed!"

echo "🎉 All checks passed! Your code is ready for commit and push."
