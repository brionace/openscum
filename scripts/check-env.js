// Load environment variables from .env files
require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env" });

const requiredEnvVars = ["DATABASE_URL", "NEXTAUTH_SECRET", "NEXTAUTH_URL"];

const optionalEnvVars = [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
];

console.log("🌍 Checking environment variables...");

const missingRequired = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);
const missingOptional = optionalEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingRequired.length > 0) {
  console.error("❌ Missing required environment variables:");
  missingRequired.forEach((varName) => console.error(`  - ${varName}`));
  process.exit(1);
}

if (missingOptional.length > 0) {
  console.warn("⚠️  Missing optional environment variables:");
  missingOptional.forEach((varName) => console.warn(`  - ${varName}`));
}

console.log("✅ Environment variables validation passed");
