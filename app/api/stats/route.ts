import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const totalReports = await prisma.scamReport.count();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reportsToday = await prisma.scamReport.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    // Get most common scam category
    const categoryStats = await prisma.aIScamReport.groupBy({
      by: ["category"],
      _count: {
        category: true,
      },
      orderBy: {
        _count: {
          category: "desc",
        },
      },
      take: 1,
    });

    const topScamType = categoryStats.length > 0 && (categoryStats[0] as any).category
      ? (categoryStats[0] as any).category
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (l: string) => l.toUpperCase())
      : "Phone Call";

    // Simulate active users (in a real app, you'd track this)
    const activeUsers = Math.floor(totalReports * 0.1) + 42;

    return NextResponse.json({
      success: true,
      data: {
        totalReports,
        reportsToday,
        activeUsers,
        topScamType,
      },
    });
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch statistics",
      },
      { status: 500 }
    );
  }
}
