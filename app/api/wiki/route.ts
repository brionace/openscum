import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PrismaWhereInput } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");
    const featured = searchParams.get("featured") === "true";

    let whereClause: PrismaWhereInput = {};

    if (country) {
      whereClause.country = country;
    }

    if (featured) {
      whereClause.featured = true;
    }

    const pages = await prisma.wikiPage.findMany({
      where: whereClause,
      orderBy: [{ featured: "desc" }, { views: "desc" }, { updatedAt: "desc" }],
    });

    return NextResponse.json({
      success: true,
      data: pages,
    });
  } catch (error) {
    console.error("Wiki API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch wiki pages",
      },
      { status: 500 }
    );
  }
}
