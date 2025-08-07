import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { checkUserRole } from "@/lib/auth-utils";

// POST /api/admin/scam-types/moderate - Approve or reject a scam type
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const { isAuthorized, user, role, error } = await checkUserRole(token);

    if (!isAuthorized) {
      return NextResponse.json(
        {
          error: error || "Access denied. Admin or moderator role required.",
        },
        { status: 403 }
      );
    }

    const { scamTypeId, action, reason } = await request.json();

    if (!scamTypeId || !action) {
      return NextResponse.json(
        { error: "ScamType ID and action are required" },
        { status: 400 }
      );
    }

    if (!["approve", "reject"].includes(action)) {
      return NextResponse.json(
        { error: "Action must be 'approve' or 'reject'" },
        { status: 400 }
      );
    }

    // Check if scam type exists and is pending
    const scamType = await prisma.scamType.findUnique({
      where: { id: scamTypeId },
    });

    if (!scamType) {
      return NextResponse.json(
        { error: "Scam type not found" },
        { status: 404 }
      );
    }

    if (scamType.isApproved) {
      return NextResponse.json(
        { error: "Scam type is already approved" },
        { status: 400 }
      );
    }

    if (action === "approve") {
      // Approve the scam type
      const updatedScamType = await prisma.scamType.update({
        where: { id: scamTypeId },
        data: {
          isApproved: true,
          moderatedBy: user.email,
          moderatedAt: new Date(),
        },
      });

      return NextResponse.json({
        message: "Scam type approved successfully",
        scamType: updatedScamType,
      });
    } else {
      // Reject by deleting the scam type
      await prisma.scamType.delete({
        where: { id: scamTypeId },
      });

      return NextResponse.json({
        message: "Scam type rejected and removed",
        reason: reason || "No reason provided",
      });
    }
  } catch (error) {
    console.error("Error moderating scam type:", error);
    return NextResponse.json(
      { error: "Failed to moderate scam type" },
      { status: 500 }
    );
  }
}
