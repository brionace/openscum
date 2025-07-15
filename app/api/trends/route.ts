import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Trending scam types (top 5 in last 7 days)
    const trendingTypes = await prisma.scamReport.groupBy({
      by: ["scamTypeId"],
      where: { createdAt: { gte: oneWeekAgo }, scamTypeId: { not: null } },
      _count: { scamTypeId: true },
      orderBy: { _count: { scamTypeId: "desc" } },
      take: 5,
    });

    // Get scam type names (filter out nulls)
    const scamTypeIds = trendingTypes
      .map((t: { scamTypeId: string | null }) => t.scamTypeId)
      .filter((id): id is string => !!id);
    const scamTypes = await prisma.scamType.findMany({
      where: { id: { in: scamTypeIds } },
    });
    const scamTypeMap = Object.fromEntries(
      scamTypes.map((t) => [t.id, t.name])
    );

    // Attach names
    const trending = trendingTypes.map(
      (t: { scamTypeId: string | null; _count: { scamTypeId: number } }) => ({
        scamTypeId: t.scamTypeId,
        name: t.scamTypeId ? scamTypeMap[t.scamTypeId] || "Unknown" : "Unknown",
        count: t._count.scamTypeId,
      })
    );

    return NextResponse.json({ success: true, data: { trending } });
  } catch (error) {
    console.error("Trends API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch trends" },
      { status: 500 }
    );
  }
}
