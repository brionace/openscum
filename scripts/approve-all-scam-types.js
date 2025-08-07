import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function approveAllScamTypes() {
  try {
    console.log("Updating all scam types to be approved...");

    const result = await prisma.scamType.updateMany({
      where: {},
      data: {
        isApproved: true,
        isUserCreated: false,
      },
    });

    console.log(`Updated ${result.count} scam types to be approved`);

    // Verify the update
    const approvedCount = await prisma.scamType.count({
      where: { isApproved: true },
    });

    console.log(`Total approved scam types: ${approvedCount}`);
  } catch (error) {
    console.error("Error updating scam types:", error);
  } finally {
    await prisma.$disconnect();
  }
}

approveAllScamTypes();
