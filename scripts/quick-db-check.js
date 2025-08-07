import { PrismaClient } from "@prisma/client";

async function quickCheck() {
  const prisma = new PrismaClient();

  try {
    console.log("Connecting to database...");
    const result =
      await prisma.$queryRaw`SELECT COUNT(*) as count FROM "ScamType"`;
    console.log("Database query result:", result);
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

quickCheck();
