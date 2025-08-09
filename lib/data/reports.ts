import prisma from "@/lib/prisma";
import { ScamReport, PrismaWhereInput } from "@/lib/types";

export interface GetReportsParams {
  query?: string | null;
  limit?: number;
  offset?: number;
  ai?: string;
  latestByType?: boolean;
}

export interface GetReportsResult {
  reports: ScamReport[];
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
  let whereClause: PrismaWhereInput = {};
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
          | (ScamReport & {
              _count: { comments: number; votes: number; flags: number };
            })
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
  reports = reports.map((r) => {
    const { flagged, ...rest } = r as any;
    return rest;
  }) as ScamReport[];

  // Add severity to each report using calculateSeverity
  const reportsWithSeverity = await Promise.all(
    reports.map(async (r) => {
      const severity = await calculateSeverity({
        scamTypeId: r.scamType?.id ?? "",
        location: r.country ? { country: r.country } : undefined,
      });
      return { ...r, severity };
    })
  );

  return {
    reports: reportsWithSeverity,
    total,
    hasMore: !latestByType && offset + limit < total,
  };
}

// Hybrid severity calculation utility
// Factors: surge (recent spike), volume, impact, feedback, location
export async function calculateSeverity({
  scamTypeId,
  location,
}: {
  scamTypeId: string;
  location?: { country?: string; region?: string };
}) {
  // Time windows
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Location filter (country or region)
  const locationFilter = location?.country ? { country: location.country } : {};

  // 1. Surge: reports in last 7 days vs previous 30 days
  const recentCount = await prisma.scamReport.count({
    where: {
      scamTypeId,
      createdAt: { gte: sevenDaysAgo },
      ...locationFilter,
    },
  });
  const prevCount = await prisma.scamReport.count({
    where: {
      scamTypeId,
      createdAt: { gte: thirtyDaysAgo, lt: sevenDaysAgo },
      ...locationFilter,
    },
  });
  const surgeRatio = prevCount > 0 ? recentCount / prevCount : recentCount;

  // 2. Volume: total reports for scamType in location
  const totalCount = await prisma.scamReport.count({
    where: {
      scamTypeId,
      ...locationFilter,
    },
  });

  // 3. Impact: average reported loss (if outcome contains 'amount' field)
  const impactReports = await prisma.scamReport.findMany({
    where: {
      scamTypeId,
      ...locationFilter,
    },
    select: { outcome: true },
  });
  let avgLoss = 0;
  let lossCount = 0;
  for (const r of impactReports) {
    if (Array.isArray(r.outcome)) {
      for (const o of r.outcome) {
        if (
          o &&
          typeof o === "object" &&
          "amount" in o &&
          typeof o.amount === "number"
        ) {
          avgLoss += o.amount;
          lossCount++;
        }
      }
    }
  }
  avgLoss = lossCount > 0 ? avgLoss / lossCount : 0;

  // 4. Feedback: total flags summed in JS
  const flagReports = await prisma.scamReport.findMany({
    where: {
      scamTypeId,
      ...locationFilter,
    },
    select: { _count: { select: { flags: true } } },
  });
  let flags = 0;
  for (const r of flagReports) {
    if (r._count && typeof r._count.flags === "number") {
      flags += r._count.flags;
    }
  }

  // Thresholds (tune as needed)
  const surgeThresholds = [2, 5, 10]; // ratio
  const volumeThresholds = [5, 20, 50]; // count
  const lossThresholds = [100, 1000, 10000]; // currency units
  const feedbackThresholds = [5, 20, 50]; // flags only

  // Score calculation
  let score = 0;
  if (surgeRatio >= surgeThresholds[2]) score += 3;
  else if (surgeRatio >= surgeThresholds[1]) score += 2;
  else if (surgeRatio >= surgeThresholds[0]) score += 1;

  if (totalCount >= volumeThresholds[2]) score += 3;
  else if (totalCount >= volumeThresholds[1]) score += 2;
  else if (totalCount >= volumeThresholds[0]) score += 1;

  if (avgLoss >= lossThresholds[2]) score += 3;
  else if (avgLoss >= lossThresholds[1]) score += 2;
  else if (avgLoss >= lossThresholds[0]) score += 1;

  if (flags >= feedbackThresholds[2]) score += 3;
  else if (flags >= feedbackThresholds[1]) score += 2;
  else if (flags >= feedbackThresholds[0]) score += 1;

  // Severity mapping
  if (score >= 10) return "CRITICAL";
  if (score >= 7) return "HIGH";
  if (score >= 4) return "MEDIUM";
  return "LOW";
}
