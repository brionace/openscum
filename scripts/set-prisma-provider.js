// scripts/set-prisma-provider.js
// Usage: PRISMA_PROVIDER=postgresql node scripts/set-prisma-provider.js
const fs = require("fs");
const path = require("path");

const provider = process.env.PRISMA_PROVIDER || "sqlite";
const schemaPath = path.join(__dirname, "../prisma/schema.prisma");

let schema = fs.readFileSync(schemaPath, "utf8");
// Only replace the provider in the datasource db block
schema = schema.replace(
  /(datasource db[\s\S]*?provider\s*=\s*")[^"]+("[\s\S]*?{)/,
  `$1${provider}$2`
);
fs.writeFileSync(schemaPath, schema);
console.log(`Prisma provider set to: ${provider}`);
