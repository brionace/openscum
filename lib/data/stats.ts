import prisma from "@/lib/prisma";

export interface StatsData {
  totalReports: number;
  reportsToday: number;
  activeUsers: number;
  topScamType: string;
}

export async function getStats(): Promise<StatsData> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [totalReports, reportsToday, scamTypeCounts] = await Promise.all([
      prisma.scamReport.count(),
      prisma.scamReport.count({
        where: {
          createdAt: {
            gte: today,
          },
        },
      }),
      prisma.scamReport.groupBy({
        by: ["scamTypeId"],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: "desc",
          },
        },
        take: 1,
      }),
    ]);

    let topScamType = "";
    if (scamTypeCounts.length > 0 && (scamTypeCounts[0] as any).scamTypeId) {
      const topScamTypeRecord = await prisma.scamType.findUnique({
        where: { id: (scamTypeCounts[0] as any).scamTypeId },
      });
      topScamType = topScamTypeRecord?.name || "";
    }

    return {
      totalReports,
      reportsToday,
      activeUsers: 0, // We can implement this later with user tracking
      topScamType,
    };
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return {
      totalReports: 0,
      reportsToday: 0,
      activeUsers: 0,
      topScamType: "",
    };
  }
}
