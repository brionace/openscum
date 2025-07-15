const { PrismaClient } = require("@prisma/client");

async function validateTrendsAPI() {
  const prisma = new PrismaClient();

  try {
    console.log("📈 Validating trends API logic...");

    // Check if we have recent data for trends
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const recentReports = await prisma.scamReport.count({
      where: { createdAt: { gte: oneWeekAgo } },
    });

    console.log(`📊 Found ${recentReports} reports in the last 7 days`);

    if (recentReports === 0) {
      console.warn(
        "⚠️  No recent reports for trends calculation - trends may be empty"
      );
    }

    // Test the exact groupBy query from your trends API
    const trendingTypes = await prisma.scamReport.groupBy({
      by: ["scamTypeId"],
      where: { createdAt: { gte: oneWeekAgo }, scamTypeId: { not: null } },
      _count: { scamTypeId: true },
      orderBy: { _count: { scamTypeId: "desc" } },
      take: 5,
    });

    console.log(
      `📈 Trends query returned ${trendingTypes.length} trending types`
    );

    // Validate that we can fetch scam type names
    if (trendingTypes.length > 0) {
      const scamTypeIds = trendingTypes
        .map((t) => t.scamTypeId)
        .filter((id) => !!id);

      const scamTypes = await prisma.scamType.findMany({
        where: { id: { in: scamTypeIds } },
      });

      console.log(
        `📋 Successfully fetched ${scamTypes.length} scam type names`
      );
    }

    console.log("✅ Trends API validation passed");
  } catch (error) {
    console.error("❌ Trends API validation failed:", error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Only run if called directly
if (require.main === module) {
  validateTrendsAPI();
}

module.exports = { validateTrendsAPI };
