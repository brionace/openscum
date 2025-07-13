import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const { reason } = await request.json();
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
    // Prevent duplicate flag from same user for same report
    const existing = await prisma.flag.findFirst({
      where: { reportId: params.reportId, userId },
    });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Already flagged." },
        { status: 400 }
      );
    }
    const flag = await prisma.flag.create({
      data: {
        reportId: params.reportId,
        userId,
        reason: reason || null,
      },
    });
    return NextResponse.json({ success: true, flag });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
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
    const deleted = await prisma.flag.deleteMany({
      where: { reportId: params.reportId, userId },
    });
    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { flagged: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    const token = authHeader.replace("Bearer ", "");
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) {
      return NextResponse.json(
        { flagged: false, error: "Invalid user" },
        { status: 401 }
      );
    }
    const userId = data.user.id;
    const existing = await prisma.flag.findFirst({
      where: { reportId: params.reportId, userId },
    });
    return NextResponse.json({ flagged: !!existing });
  } catch (error) {
    return NextResponse.json(
      { flagged: false, error: String(error) },
      { status: 500 }
    );
  }
}
