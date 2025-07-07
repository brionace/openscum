import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const { reason } = await request.json();
    // Use IP for anonymous flagging
    const ip = request.headers.get("x-forwarded-for") || request.ip || null;
    // Prevent duplicate flag from same IP for same report
    const existing = await prisma.flag.findFirst({
      where: { reportId: params.reportId, ip },
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
        ip,
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
    const ip = request.headers.get("x-forwarded-for") || request.ip || null;
    const deleted = await prisma.flag.deleteMany({
      where: { reportId: params.reportId, ip },
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
    const ip = request.headers.get("x-forwarded-for") || request.ip || null;
    const existing = await prisma.flag.findFirst({
      where: { reportId: params.reportId, ip },
    });
    return NextResponse.json({ flagged: !!existing });
  } catch (error) {
    return NextResponse.json(
      { flagged: false, error: String(error) },
      { status: 500 }
    );
  }
}
