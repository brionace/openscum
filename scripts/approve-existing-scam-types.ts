import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function approveExistingScamTypes() {
  console.log("Updating existing scam types to approved status...");

  try {
    const result = await prisma.scamType.updateMany({
      where: {
        isApproved: false,
        isUserCreated: false,
      },
      data: {
        isApproved: true,
      },
    });

    console.log(
      `✅ Updated ${result.count} existing scam types to approved status`
    );

    // Also show the current state
    const allScamTypes = await prisma.scamType.findMany({
      select: {
        id: true,
        name: true,
        isApproved: true,
        isUserCreated: true,
        createdBy: true,
      },
    });

    console.log("\n📊 Current ScamType status:");
    console.log(`Total: ${allScamTypes.length}`);
    console.log(
      `Approved: ${allScamTypes.filter((st) => st.isApproved).length}`
    );
    console.log(
      `User Created: ${allScamTypes.filter((st) => st.isUserCreated).length}`
    );
  } catch (error) {
    console.error("❌ Error updating scam types:", error);
  } finally {
    await prisma.$disconnect();
  }
}

approveExistingScamTypes();
