import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const reportId = params.id;
  if (!reportId) {
    return NextResponse.json(
      { success: false, error: "Missing reportId" },
      { status: 400 }
    );
  }
  try {
    // Fetch all comments for the report, including replies (single-level)
    const comments = await prisma.comment.findMany({
      where: { reportId },
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        content: true,
        createdAt: true,
        author: true,
        parentId: true,
      },
    });

    // Group comments by parentId
    const topLevel: any[] = [];
    const repliesMap: Record<string, any[]> = {};
    for (const c of comments) {
      const { id, content, createdAt, author, parentId } = c;
      const commentObj = {
        id,
        text: content,
        createdAt,
        author,
        parentId,
      };
      if (!parentId) {
        topLevel.push({ ...commentObj, replies: [] });
      } else {
        if (!repliesMap[parentId]) repliesMap[parentId] = [];
        repliesMap[parentId].push(commentObj);
      }
    }
    // Attach replies to their parent
    for (const parent of topLevel) {
      parent.replies = repliesMap[parent.id] || [];
    }

    return NextResponse.json({
      success: true,
      data: {
        comments: topLevel,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Require authentication
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return NextResponse.json(
      { success: false, error: "Authentication required" },
      { status: 401 }
    );
  }
  const reportId = params.id;
  if (!reportId) {
    return NextResponse.json(
      { success: false, error: "Missing reportId" },
      { status: 400 }
    );
  }
  try {
    const body = await request.json();
    const { content, parentId } = body;
    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { success: false, error: "Comment content required" },
        { status: 400 }
      );
    }
    // If parentId is provided, ensure it exists and belongs to this report
    let parentComment = null;
    if (parentId) {
      parentComment = await prisma.comment.findUnique({
        where: { id: parentId },
        select: { id: true, reportId: true, parentId: true },
      });
      if (!parentComment || parentComment.reportId !== reportId) {
        return NextResponse.json(
          { success: false, error: "Invalid parentId" },
          { status: 400 }
        );
      }
      // Prevent multi-level nesting
      if (parentComment.parentId) {
        return NextResponse.json(
          { success: false, error: "Replies to replies are not allowed" },
          { status: 400 }
        );
      }
    }
    const user = session.user;
    const username = user.username || user.name || user.email || user.id;
    const comment = await prisma.comment.create({
      data: {
        reportId,
        content,
        userId: user.id,
        author: username,
        parentId: parentId || undefined, // parentId is optional
      },
    });
    return NextResponse.json({
      success: true,
      data: {
        comment: {
          id: comment.id,
          text: comment.content,
          createdAt: comment.createdAt,
          author: comment.userId, // now userId
          parentId: comment.parentId,
        },
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to post comment" },
      { status: 500 }
    );
  }
}
