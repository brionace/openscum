import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function testScamTypesAPI() {
  try {
    // Test the same query the API uses
    const types = await prisma.scamType.findMany({
      where: { isApproved: true },
      orderBy: { name: "asc" },
      take: 100,
    });

    console.log(`Found ${types.length} approved scam types`);

    if (types.length > 0) {
      console.log("\nFirst 5 scam types:");
      types.slice(0, 5).forEach((type) => {
        console.log(
          `- ${type.name} (ID: ${type.id}, Approved: ${type.isApproved})`
        );
      });

      console.log("\nScam types are ready for the form!");
    } else {
      console.log("No approved scam types found - this is the issue!");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testScamTypesAPI();
