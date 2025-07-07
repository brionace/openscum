import { PrismaClient } from "@prisma/client";

// Usage
// npx tsx prisma/clear-db.ts

const prisma = new PrismaClient();

async function main() {
  // Order matters due to foreign key constraints
  await prisma.vote.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.scamReport.deleteMany({});
  await prisma.scamType.deleteMany({});
  await prisma.aIScamReport.deleteMany({});
  await prisma.wikiPage.deleteMany({});
  await prisma.searchCache.deleteMany({});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
