const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function testModerationSystem() {
  console.log("🧪 Testing scam type moderation system...\n");

  try {
    // 1. Create a user-submitted scam type (simulating what the API would do)
    console.log("1. Creating a user-submitted scam type...");
    const userScamType = await prisma.scamType.create({
      data: {
        name: "Test User Scam Type",
        isUserCreated: true,
        isApproved: false,
        createdBy: "test@example.com",
      },
    });
    console.log(`✅ Created: ${userScamType.name} (ID: ${userScamType.id})`);

    // 2. Test fetching pending scam types
    console.log("\n2. Fetching pending scam types...");
    const pendingTypes = await prisma.scamType.findMany({
      where: {
        isApproved: false,
        isUserCreated: true,
      },
      select: {
        id: true,
        name: true,
        createdBy: true,
        createdAt: true,
        isApproved: true,
        isUserCreated: true,
      },
    });
    console.log(`✅ Found ${pendingTypes.length} pending scam types:`);
    pendingTypes.forEach((type) => {
      console.log(`   - ${type.name} (created by: ${type.createdBy})`);
    });

    // 3. Test approving the scam type
    console.log("\n3. Approving the scam type...");
    const approvedScamType = await prisma.scamType.update({
      where: { id: userScamType.id },
      data: {
        isApproved: true,
        moderatedBy: "admin@example.com",
        moderatedAt: new Date(),
      },
    });
    console.log(`✅ Approved: ${approvedScamType.name}`);

    // 4. Verify it now appears in approved list
    console.log("\n4. Verifying approved scam types...");
    const approvedTypes = await prisma.scamType.findMany({
      where: { isApproved: true },
      select: {
        name: true,
        isUserCreated: true,
        moderatedBy: true,
        moderatedAt: true,
      },
      orderBy: { name: "asc" },
      take: 5, // Just show first 5
    });
    console.log(`✅ Total approved scam types: ${approvedTypes.length}`);
    console.log("   Sample approved types:");
    approvedTypes.slice(0, 3).forEach((type) => {
      const typeInfo = type.isUserCreated
        ? `(user-created, moderated by: ${type.moderatedBy})`
        : "(admin-created)";
      console.log(`   - ${type.name} ${typeInfo}`);
    });

    // 5. Clean up test data
    console.log("\n5. Cleaning up test data...");
    await prisma.scamType.delete({
      where: { id: userScamType.id },
    });
    console.log("✅ Test data cleaned up");

    console.log("\n🎉 Moderation system test completed successfully!");
  } catch (error) {
    console.error("❌ Test failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testModerationSystem();
