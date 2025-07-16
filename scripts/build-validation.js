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

  // Check if we're in a production environment (like Vercel)
  const isProduction =
    process.env.NODE_ENV === "production" || process.env.VERCEL === "1";

  const steps = [
    {
      name: "🌍 Environment Variables",
      command: "node",
      args: ["scripts/check-env.js"],
    },
    {
      name: "📝 Type Checking",
      command: "npm",
      args: ["run", "typecheck"],
    },
    {
      name: "🔍 Linting",
      command: "npm",
      args: ["run", "lint"],
    },
    // Skip tests in production builds (Vercel) due to React act() limitations
    ...(isProduction
      ? []
      : [
          {
            name: "🧪 Running Tests",
            command: "npm",
            args: ["run", "test:ci"],
          },
        ]),
    {
      name: "🗃️  Database Schema Validation",
      command: "npm",
      args: ["run", "db:generate"],
    },
    {
      name: "🏗️  Build Validation",
      command: "npm",
      args: ["run", "build:fast"],
    },
  ];

  // Log if tests are being skipped
  if (isProduction) {
    console.log("ℹ️  Skipping tests in production environment (Vercel)\n");
  }

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
