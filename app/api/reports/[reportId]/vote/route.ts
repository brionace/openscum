import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const { voteType, toggle } = await request.json();
    const reportId = params.reportId;

    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    const token = authHeader.replace("Bearer ", "");
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) {
      return NextResponse.json(
        { success: false, error: "Invalid user" },
        { status: 401 }
      );
    }
    const userId = data.user.id;

    // If toggle is true, check if vote exists and delete it if so

    if (toggle) {
      const existing = await prisma.vote.findUnique({
        where: {
          reportId_userId: {
            reportId,
            userId,
          },
        },
      });
      // Fix: Use correct unique input for compound key
      const uniqueWhere = { reportId_userId: { reportId, userId } };
      const existingVote = await prisma.vote.findUnique({ where: uniqueWhere });
      if (existingVote) {
        await prisma.vote.delete({ where: uniqueWhere });
        const votes = await prisma.vote.count({ where: { reportId } });
        return NextResponse.json({ success: true, votes });
      }
    }

    // Upsert vote (one per user per report)
    // Fix: Use correct unique input for compound key
    await prisma.vote.upsert({
      where: { reportId_userId: { reportId, userId } },
      update: { voteType },
      create: {
        reportId,
        userId,
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
