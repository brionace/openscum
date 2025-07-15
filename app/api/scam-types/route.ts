import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  let where = {};
  if (q) {
    where = { name: { contains: q, mode: "insensitive" as const } };
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

    // Check if scam type already exists
    const existing = await prisma.scamType.findFirst({
      where: { name: { equals: name.trim(), mode: "insensitive" } },
    });

    if (existing) {
      return NextResponse.json(existing);
    }

    // Create new scam type
    const newScamType = await prisma.scamType.create({
      data: { name: name.trim() },
    });

    return NextResponse.json(newScamType);
  } catch (error) {
    console.error("Error creating scam type:", error);
    return NextResponse.json(
      { error: "Failed to create scam type" },
      { status: 500 }
    );
  }
}
