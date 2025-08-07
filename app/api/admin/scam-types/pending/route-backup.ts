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
    
    console.log("Received auth token (first 10 chars):", token.substring(0, 10));
    
    // For now, let's validate directly with the client-side approach
    // We'll decode the JWT to get the user email
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userEmail = payload.email;
      
      console.log("Extracted email from token:", userEmail);

      // Get user role from database
      const dbUser = await prisma.user.findUnique({
        where: { email: userEmail },
        select: { id: true, email: true, role: true, name: true }
      });

      console.log("Database user found:", dbUser);

      if (!dbUser) {
        return NextResponse.json({ 
          error: "User not found in database",
          debug: { email: userEmail }
        }, { status: 403 });
      }

      const userRole = dbUser.role;
      const isAuthorized = userRole === "admin" || userRole === "moderator";

      console.log("User role:", userRole, "Is authorized:", isAuthorized);

      if (!isAuthorized) {
        return NextResponse.json({ 
          error: "Access denied. Admin or moderator role required.",
          debug: { role: userRole, email: dbUser.email }
        }, { status: 403 });
      }
      
    } catch (jwtError) {
      console.log("JWT decode error:", jwtError);
      return NextResponse.json({ error: "Invalid token format" }, { status: 401 });
    }

    const pendingScamTypes = await prisma.scamType.findMany({
      where: {
        isApproved: false,
        isUserCreated: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        createdBy: true,
        createdAt: true,
        isUserCreated: true,
        isApproved: true,
      },
    });

    return NextResponse.json(pendingScamTypes);
  } catch (error) {
    console.error("Error fetching pending scam types:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending scam types" },
      { status: 500 }
    );
  }
}
