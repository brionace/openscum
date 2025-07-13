import prisma from "@/lib/prisma";

export interface GetReportsParams {
  query?: string | null;
  limit?: number;
  offset?: number;
  ai?: string;
  latestByType?: boolean;
}

export interface GetReportsResult {
  reports: any[];
  total: number;
  hasMore: boolean;
}

export async function getReports({
  query,
  limit = 20,
  offset = 0,
  ai = "0",
  latestByType = false,
}: GetReportsParams): Promise<GetReportsResult> {
  let whereClause: any = {};
  if (query) {
    // For PostgreSQL, use JSON filter syntax for JSON fields
    whereClause.OR = [
      { description: { contains: query, mode: "insensitive" } },
      { scammerDetails: { contains: query } },
      {
        scamType: { is: { name: { contains: query, mode: "insensitive" } } },
      },
      { outcome: { contains: query } },
    ];
  }

  let reports;
  let total;

  if (latestByType) {
    // Get the latest report for each scamType
    // 1. Get all scam types
    const scamTypes = await prisma.scamType.findMany();
    // 2. For each scam type, get the latest report
    const latestReports = await Promise.all(
      scamTypes.map(async (type: { id: string }) => {
        const report = (await prisma.scamReport.findFirst({
          where: {
            ...whereClause,
            scamTypeId: type.id,
          },
          include: {
            scamType: true,
            _count: {
              select: { comments: true, votes: true, flags: true },
            },
          },
          orderBy: [{ createdAt: "desc" }],
        })) as
          | (typeof prisma.scamReport extends {
              findFirst: (...args: any) => Promise<infer T>;
            }
              ? T & {
                  _count: { comments: number; votes: number; flags: number };
                }
              : any)
          | null;
        // Only include if under threshold
        if (report && report._count && report._count.flags < 3) {
          return report;
        }
        return null;
      })
    );
    reports = latestReports.filter(Boolean);
    total = reports.length;
  } else {
    // Fetch reports with counts
    const rawReports = await prisma.scamReport.findMany({
      where: whereClause,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        scammerDetails: true,
        city: true,
        country: true,
        region: true,
        ipHash: true,
        latitude: true,
        longitude: true,
        verified: true,
        trustScore: true,
        reportCount: true,
        reporterName: true,
        reporterEmail: true,
        anonymous: true,
        screenshots: true,
        evidence: true,
        outcome: true,
        scamType: true,
        _count: {
          select: {
            comments: true,
            votes: true,
            flags: true,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
      take: limit * 3,
      skip: offset,
    });
    // Filter out flagged reports in JS
    const filtered = rawReports.filter(
      (r: any) => r._count && r._count.flags < 3
    );
    reports = filtered.slice(0, limit);
    total = filtered.length;
  }

  // Remove flagged property if present (defensive, not needed if never added)
  reports = reports.map((r: any) => {
    const { flagged, ...rest } = r;
    return rest;
  });

  return {
    reports,
    total,
    hasMore: !latestByType && offset + limit < total,
  };
}
