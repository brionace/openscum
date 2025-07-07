import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const { voteType, toggle } = await request.json();
    const reportId = params.reportId;

    // Get voter IP (for uniqueness)
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const voterIp = forwarded?.split(",")[0] || realIp || "127.0.0.1";

    // If toggle is true, check if vote exists and delete it if so
    if (toggle) {
      const existing = await prisma.vote.findUnique({
        where: {
          reportId_voterIp: {
            reportId,
            voterIp,
          },
        },
      });
      if (existing) {
        await prisma.vote.delete({
          where: {
            reportId_voterIp: {
              reportId,
              voterIp,
            },
          },
        });
        const votes = await prisma.vote.count({ where: { reportId } });
        return NextResponse.json({ success: true, votes });
      }
    }

    // Upsert vote (one per IP per report)
    await prisma.vote.upsert({
      where: {
        reportId_voterIp: {
          reportId,
          voterIp,
        },
      },
      update: { voteType },
      create: {
        reportId,
        voterIp,
        voteType,
      },
    });

    // Return updated vote count
    const votes = await prisma.vote.count({ where: { reportId } });

    return NextResponse.json({ success: true, votes });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
