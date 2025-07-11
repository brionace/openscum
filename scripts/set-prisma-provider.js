// scripts/set-prisma-provider.js
// Usage: PRISMA_PROVIDER=postgresql node scripts/set-prisma-provider.js
const fs = require("fs");
const path = require("path");

const provider = process.env.PRISMA_PROVIDER || "sqlite";
const schemaPath = path.join(__dirname, "../prisma/schema.prisma");

let schema = fs.readFileSync(schemaPath, "utf8");
// Replace the provider line in the datasource block
schema = schema.replace(/provider\s*=\s*"[^"]+"/, `provider = "${provider}"`);
fs.writeFileSync(schemaPath, schema);
console.log(`Prisma provider set to: ${provider}`);
