import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getLocationFromIP, hashIP } from "@/lib/location";
import { getReports } from "@/lib/data/reports";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = parseInt(searchParams.get("offset") || "0");
    const ai = searchParams.get("ai") || "0";
    const latestByType = searchParams.get("latestByType") === "1";
    const cursor = searchParams.get("cursor");

    const result = await getReports({
      query,
      limit,
      offset,
      ai,
      latestByType,
      cursor,
    });

    const response = NextResponse.json({
      success: true,
      data: result.reports,
      hasMore: result.hasMore,
      nextCursor: result.nextCursor,
      total: result.total,
    });

    // Add cache control headers to prevent caching of fresh data
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
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
      scammerDetails,
      reporterName,
      reporterEmail,
      anonymous = true,
      city,
      country,
      severity,
      scamTypeId,
      outcome,
    } = body;

    // (CAPTCHA logic removed)

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
          error: "Description is required.",
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
    const clean = (val: unknown): string | null =>
      typeof val === "string" && val.trim() !== "" ? val.trim() : null;
    const cleanScammerDetails =
      scammerDetails && typeof scammerDetails === "object"
        ? Object.fromEntries(
            Object.entries(scammerDetails)
              .map(([k, v]) => [k, clean(v)])
              .filter(([k, v]) => v !== null && v !== undefined) // ← Add this filter
          )
        : {};
    const cleanReporterName = clean(reporterName);
    const cleanReporterEmail = clean(reporterEmail);
    const cleanCity = clean(city);
    const cleanCountry = clean(country);
    // region is only from locationData, which is always string|null

    // No duplicate check for now (was based on removed fields)

    // Validate required fields
    const hasScammerDetails = Object.keys(cleanScammerDetails).length > 0;
    if (!description && !hasScammerDetails) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a description or scammer details.",
        },
        { status: 400 }
      );
    }

    // Ensure scamTypeId is set to the 'Other' scam type ID if scamTypeId is empty
    let finalScamTypeId = scamTypeId;
    if (!finalScamTypeId) {
      const otherType = await prisma.scamType.findFirst({
        where: { name: "Other" },
        select: { id: true },
      });
      if (!otherType) {
        return NextResponse.json(
          {
            success: false,
            error: 'Scam type "Other" not found in database.',
          },
          { status: 500 }
        );
      }
      finalScamTypeId = otherType.id;
    }

    // Create new report
    const report = await prisma.scamReport.create({
      data: {
        description,
        scammerDetails: cleanScammerDetails,
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
        scamTypeId: finalScamTypeId,
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
