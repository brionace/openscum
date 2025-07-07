import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
    const { content, author, parentId } = await request.json();
    if (!content || content.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Comment too short." },
        { status: 400 }
      );
    }
    const comment = await prisma.comment.create({
      data: {
        content,
        author: author || null,
        reportId: params.reportId,
        parentId: parentId || null,
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
