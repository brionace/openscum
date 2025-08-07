import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function checkScamTypes() {
  try {
    const total = await prisma.scamType.count();
    console.log(`Total scam types: ${total}`);

    const approved = await prisma.scamType.count({
      where: { isApproved: true },
    });
    console.log(`Approved scam types: ${approved}`);

    const pending = await prisma.scamType.count({
      where: { isApproved: false },
    });
    console.log(`Pending scam types: ${pending}`);

    // Show first few scam types
    const first10 = await prisma.scamType.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        isApproved: true,
        isUserCreated: true,
      },
    });

    console.log("\nFirst 10 scam types:");
    console.table(first10);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkScamTypes();
