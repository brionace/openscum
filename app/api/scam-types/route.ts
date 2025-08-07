import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  let where: any = { isApproved: true }; // Only show approved scam types by default
  if (q) {
    where = {
      isApproved: true,
      name: { contains: q, mode: "insensitive" as const },
    };
  }

  const types = await prisma.scamType.findMany({
    where,
    orderBy: { name: "asc" },
    take: q ? 20 : 100, // Return more results when showing all
  });

  return NextResponse.json(types);
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Check if scam type already exists (approved or pending)
    const existing = await prisma.scamType.findFirst({
      where: { name: { equals: name.trim(), mode: "insensitive" } },
    });

    if (existing) {
      if (existing.isApproved) {
        return NextResponse.json(existing);
      } else {
        return NextResponse.json(
          {
            error: "Scam type is pending approval",
            pending: true,
          },
          { status: 202 }
        );
      }
    }

    // Get user session for tracking who created it
    const authHeader = request.headers.get("authorization");
    let userEmail = null;

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data, error } = await supabaseAdmin.auth.getUser(token);
      if (!error && data.user) {
        userEmail = data.user.email;
      }
    }

    // Create new scam type requiring approval
    const newScamType = await prisma.scamType.create({
      data: {
        name: name.trim(),
        isUserCreated: true,
        isApproved: false, // Requires approval
        createdBy: userEmail,
      },
    });

    return NextResponse.json(
      {
        ...newScamType,
        message: "Scam type submitted for approval",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating scam type:", error);
    return NextResponse.json(
      { error: "Failed to create scam type" },
      { status: 500 }
    );
  }
}
