import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function fixScamTypes() {
  try {
    console.log("Using raw SQL to update scam types...");

    // Update all existing scam types to be approved
    await prisma.$executeRaw`
      UPDATE "ScamType" 
      SET "isApproved" = true, "isUserCreated" = false 
      WHERE "isApproved" = false
    `;

    console.log("✓ Updated existing scam types");

    // Check results
    const result = await prisma.$queryRaw`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE "isApproved" = true) as approved,
        COUNT(*) FILTER (WHERE "isApproved" = false) as pending
      FROM "ScamType"
    `;

    const stats = result[0];
    console.log(`\nResults:`);
    console.log(`Total: ${stats.total}`);
    console.log(`Approved: ${stats.approved}`);
    console.log(`Pending: ${stats.pending}`);

    if (stats.approved > 0) {
      console.log("\n✅ Scam types are now available for the form!");
    } else {
      console.log("\n❌ Still no approved scam types");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

fixScamTypes();
