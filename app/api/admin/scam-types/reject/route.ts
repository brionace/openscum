import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST /api/admin/scam-types/reject - Reject a scam type
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");

    // Simple JWT decode to get email
    let userEmail: string;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      userEmail = payload.email;

      if (!userEmail) {
        return NextResponse.json(
          { error: "Invalid token - no email" },
          { status: 401 }
        );
      }
    } catch (jwtError) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 }
      );
    }

    // Get user role from database using raw SQL
    const dbUser = (await prisma.$queryRaw`
      SELECT id, email, role FROM "User" WHERE email = ${userEmail}
    `) as Array<{ id: string; email: string; role: string }>;

    if (dbUser.length === 0) {
      return NextResponse.json(
        {
          error: "User not found in database",
          debug: { email: userEmail },
        },
        { status: 403 }
      );
    }

    const user = dbUser[0];

    // Check if user has admin or moderator role
    if (user.role !== "admin" && user.role !== "moderator") {
      return NextResponse.json(
        {
          error: "Access denied. Admin or moderator role required.",
          debug: { role: user.role, email: user.email },
        },
        { status: 403 }
      );
    }

    // Get the scam type ID from request body
    const { scamTypeId } = await request.json();

    if (!scamTypeId) {
      return NextResponse.json(
        { error: "Scam type ID is required" },
        { status: 400 }
      );
    }

    // Delete the rejected scam type using raw SQL
    await prisma.$executeRaw`
      DELETE FROM "ScamType" WHERE id = ${scamTypeId}
    `;

    return NextResponse.json({
      success: true,
      message: "Scam type rejected and removed",
    });
  } catch (error) {
    console.error("Error rejecting scam type:", error);
    return NextResponse.json(
      { error: "Failed to reject scam type" },
      { status: 500 }
    );
  }
}
