import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const comments = await prisma.comment.findMany({
      where: { reportId: params.reportId },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json({ success: true, comments });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const { content, parentId } = await request.json();
    if (!content || content.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Comment too short." },
        { status: 400 }
      );
    }
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
    const comment = await prisma.comment.create({
      data: {
        content,
        reportId: params.reportId,
        parentId: parentId || null,
        userId,
      },
    });
    return NextResponse.json({ success: true, comment });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
