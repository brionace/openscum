import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getLocationFromIP, hashIP } from "@/lib/location";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = parseInt(searchParams.get("offset") || "0");
    const ai = searchParams.get("ai") || "0";
    const latestByType = searchParams.get("latestByType") === "1";

    // If ai=1, fetch from AIScamReport (AI-moderated summaries)
    if (ai === "1") {
      let whereClause: any = {};
      if (query) {
        whereClause.summary = { contains: query, mode: "insensitive" };
      }
      const reports = await prisma.aIScamReport.findMany({
        where: whereClause,
        orderBy: [{ createdAt: "desc" }],
        take: limit,
        skip: offset,
      });
      const total = await prisma.aIScamReport.count({ where: whereClause });
      return NextResponse.json({
        success: true,
        data: {
          reports,
          total,
          hasMore: offset + limit < total,
        },
      });
    }

    let whereClause: any = {};
    if (query) {
      whereClause.OR = [
        { description: { contains: query, mode: "insensitive" } },
        { phoneNumber: { contains: query } }, // no mode here
        { email: { contains: query, mode: "insensitive" } },
        { website: { contains: query, mode: "insensitive" } },
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
        include: {
          scamType: true,
          // outcome is a JSON field, no need to include
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
    return NextResponse.json({
      success: true,
      data: {
        reports,
        total,
        hasMore: !latestByType && offset + limit < total,
      },
    });
  } catch (error) {
    // Enhanced error logging
    if (error instanceof Error) {
      console.error(
        "Reports API error:",
        error.message,
        error.stack,
        JSON.stringify(error)
      );
    } else {
      console.error("Reports API unknown error:", error);
    }
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch reports",
        details: error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      description,
      phoneNumber,
      email,
      website,
      socialMedia,
      reporterName,
      reporterEmail,
      anonymous = true,
      city,
      country,
      captchaToken,
      severity,
      scamTypeId,
      outcome, // <-- Accept outcome instead of outcomes
    } = body;

    // Verify CAPTCHA only in production
    if (process.env.NODE_ENV === "production") {
      if (!captchaToken || captchaToken === "dev-bypass") {
        return NextResponse.json(
          {
            success: false,
            error: "CAPTCHA verification required",
          },
          { status: 400 }
        );
      }

      const captchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
        }
      );

      const captchaData = await captchaResponse.json();

      if (!captchaData.success) {
        return NextResponse.json(
          {
            success: false,
            error: "CAPTCHA verification failed",
          },
          { status: 400 }
        );
      }
    }

    // Get client location for IP tracking (fallback if user doesn't provide location)
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwarded?.split(",")[0] || realIp || "127.0.0.1";

    let locationData: {
      city: string | null | undefined;
      country: string | null | undefined;
      region: string | null | undefined;
      latitude: number | null | undefined;
      longitude: number | null | undefined;
      ip: string | null | undefined;
    } = {
      city: null,
      country: null,
      region: null,
      latitude: null,
      longitude: null,
      ip: clientIp,
    };

    // Validate required fields
    if (!description) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required field: description is required.",
        },
        { status: 400 }
      );
    }

    // If user didn't provide location, try to detect it
    if (!city && !country) {
      try {
        // Set default values first
        locationData = {
          city: null,
          country: null,
          region: null,
          latitude: null,
          longitude: null,
          ip: clientIp,
        };

        // Then try to enhance with IP data if possible
        const detected = await getLocationFromIP(clientIp);
        if (detected) {
          locationData = {
            city: detected.city ?? null,
            country: detected.country ?? null,
            region: detected.region ?? null,
            latitude: detected.latitude ?? null,
            longitude: detected.longitude ?? null,
            ip: detected.ip ?? clientIp,
          };
        }
      } catch (error) {
        // Only warn, do not block report creation
        const msg =
          typeof error === "object" && error && "message" in error
            ? (error as any).message
            : String(error);
        console.warn("Failed to get location from IP:", msg);
        // We'll continue with the default locationData
      }
    }

    // Sanitize all optional string fields
    const clean = (val: any) =>
      typeof val === "string" && val.trim() === "" ? null : val;
    const cleanEmail = clean(email);
    const cleanWebsite = clean(website);
    const cleanPhoneNumber = clean(phoneNumber);
    const cleanSocialMedia = clean(socialMedia);
    const cleanReporterName = clean(reporterName);
    const cleanReporterEmail = clean(reporterEmail);
    const cleanCity = clean(city);
    const cleanCountry = clean(country);
    // region is only from locationData, which is always string|null

    // Check for existing report
    const orConditions = [
      cleanPhoneNumber ? { phoneNumber: cleanPhoneNumber } : null,
      cleanEmail ? { email: cleanEmail } : null,
      cleanWebsite ? { website: cleanWebsite } : null,
    ].filter(Boolean);

    const existingReport =
      orConditions.length > 0
        ? await prisma.scamReport.findFirst({
            where: { OR: orConditions as any },
          })
        : null;

    if (existingReport) {
      // Update existing report
      const updatedReport = await prisma.scamReport.update({
        where: { id: existingReport.id },
        data: {
          email: cleanEmail,
          website: cleanWebsite,
          reportCount: { increment: 1 },
          trustScore: { increment: 1 },
          updatedAt: new Date(),
        },
      });

      return NextResponse.json({
        success: true,
        data: updatedReport,
        message: "Report updated with additional confirmation",
      });
    }

    // Create new report
    const report = await prisma.scamReport.create({
      data: {
        description,
        phoneNumber: cleanPhoneNumber,
        email: cleanEmail,
        website: cleanWebsite,
        socialMedia: cleanSocialMedia,
        city: cleanCity || locationData.city,
        country: cleanCountry || locationData.country,
        region: locationData.region,
        ipHash: locationData.ip ? hashIP(locationData.ip) : null,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        verified: false,
        trustScore: 1,
        reportCount: 1,
        reporterName: anonymous ? null : cleanReporterName,
        reporterEmail: anonymous ? null : cleanReporterEmail,
        anonymous,
        screenshots: JSON.stringify([]),
        evidence: JSON.stringify([]),
        scamTypeId,
        outcome, // <-- store outcome as JSON
      },
      include: {
        scamType: true,
        _count: {
          select: {
            comments: true,
            votes: true,
            flags: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          ...report,
        },
        message: "Scam report submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Report submission error:", error);

    // Check for specific Prisma errors
    if (errorMessage.includes("Prisma")) {
      return NextResponse.json(
        {
          success: false,
          error: "Database error during report submission",
          details: errorMessage,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit report",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
