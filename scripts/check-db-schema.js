const { PrismaClient } = require("@prisma/client");

async function validateSchema() {
  const prisma = new PrismaClient();

  try {
    console.log("🗃️  Validating database schema...");

    // Test basic queries to ensure schema is correct
    await prisma.scamType.count();
    await prisma.scamReport.count();

    // Check for required seed data
    const scamTypeCount = await prisma.scamType.count();
    if (scamTypeCount === 0) {
      console.warn(
        "⚠️  No scam types found - consider running: npx prisma db seed"
      );
    } else {
      console.log(`📊 Found ${scamTypeCount} scam types in database`);
    }

    // Test the trends API query structure
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const trendingTypes = await prisma.scamReport.groupBy({
      by: ["scamTypeId"],
      where: { createdAt: { gte: oneWeekAgo }, scamTypeId: { not: null } },
      _count: { scamTypeId: true },
      orderBy: { _count: { scamTypeId: "desc" } },
      take: 5,
    });

    console.log(
      `📈 Trends query validation passed (${trendingTypes.length} results)`
    );

    console.log("✅ Database schema validation passed");
  } catch (error) {
    console.error("❌ Database validation failed:", error.message);

    // Provide helpful error messages
    if (error.code === "P1001") {
      console.error(
        "💡 Tip: Make sure your database is running and DATABASE_URL is correct"
      );
    } else if (error.code === "P2021") {
      console.error('💡 Tip: Run "npx prisma db push" to apply schema changes');
    }

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Only run if called directly (not imported)
if (require.main === module) {
  validateSchema();
}

module.exports = { validateSchema };
