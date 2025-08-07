import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/admin/scam-types/pending - Get pending scam types for moderation
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");

    // Simple JWT decode to get email (safe approach)
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

    // Use raw SQL to get user role due to Prisma type issues
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

    // User is authorized - fetch pending scam types using raw SQL
    const pendingScamTypes = (await prisma.$queryRaw`
      SELECT id, name, "createdBy", "createdAt", "isUserCreated", "isApproved"
      FROM "ScamType" 
      WHERE "isApproved" = false AND "isUserCreated" = true
      ORDER BY "createdAt" DESC
    `) as Array<{
      id: string;
      name: string;
      createdBy: string | null;
      createdAt: Date;
      isUserCreated: boolean;
      isApproved: boolean;
    }>;

    return NextResponse.json(pendingScamTypes);
  } catch (error) {
    console.error("Error fetching pending scam types:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending scam types" },
      { status: 500 }
    );
  }
}
