import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { calculateSeverity } from "@/lib/data/reports";

export const runtime = "nodejs"; // Ensure Prisma runs on Node, not Edge

export async function GET(
  _request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const id = params?.reportId;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing report id" },
        { status: 400 }
      );
    }

    const report = await prisma.scamReport.findUnique({
      where: { id },
      include: {
        scamType: true,
        _count: { select: { votes: true, comments: true, flags: true } },
      },
    });

    if (!report) {
      return NextResponse.json(
        { success: false, error: "Report not found" },
        { status: 404 }
      );
    }

    // Compute severity to match list payload
    const severity = await calculateSeverity({
      scamTypeId: (report as any).scamTypeId || "",
      location: report.country ? { country: report.country } : undefined,
    });

    return NextResponse.json({ success: true, data: { ...report, severity } });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
