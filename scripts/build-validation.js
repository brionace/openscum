#!/usr/bin/env node

const { spawn } = require("child_process");
const { validateSchema } = require("./check-db-schema.js");
const { validateTrendsAPI } = require("./validate-trends-api.js");

async function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(" ")}`);

    const child = spawn(command, args, {
      stdio: "inherit",
      shell: true,
      ...options,
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on("error", (error) => {
      reject(error);
    });
  });
}

async function runBuildValidation() {
  console.log("🚀 Starting comprehensive build validation...\n");

  const steps = [
    {
      name: "🌍 Environment Variables",
      command: "node",
      args: ["scripts/check-env.js"],
    },
    {
      name: "📝 Type Checking",
      command: "pnpm",
      args: ["typecheck"],
    },
    {
      name: "🔍 Linting",
      command: "pnpm",
      args: ["lint"],
    },
    {
      name: "🧪 Running Tests",
      command: "pnpm",
      args: ["test:ci"],
    },
    {
      name: "🗃️  Database Schema Validation",
      command: "pnpm",
      args: ["db:generate"],
    },
    {
      name: "🏗️  Build Validation",
      command: "pnpm",
      args: ["build:fast"],
    },
  ];

  for (const step of steps) {
    try {
      console.log(`\n${step.name}`);
      console.log("=".repeat(50));

      await runCommand(step.command, step.args);
      console.log(`✅ ${step.name} - PASSED`);
    } catch (error) {
      console.error(`❌ ${step.name} - FAILED`);
      console.error(error.message);
      process.exit(1);
    }
  }

  // Run custom database validations
  try {
    console.log("\n🗃️  Custom Database Validations");
    console.log("=".repeat(50));

    await validateSchema();
    await validateTrendsAPI();

    console.log("✅ Custom Database Validations - PASSED");
  } catch (error) {
    console.error("❌ Custom Database Validations - FAILED");
    console.error(error.message);
    process.exit(1);
  }

  console.log("\n🎉 All build validations passed!");
  console.log("🚀 Ready for deployment!");
}

// Only run if called directly
if (require.main === module) {
  runBuildValidation().catch((error) => {
    console.error("💥 Build validation failed:", error.message);
    process.exit(1);
  });
}

module.exports = { runBuildValidation };
