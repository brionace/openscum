import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const where = q
    ? { name: { contains: q, mode: "insensitive" as const } }
    : undefined;
  const types = await prisma.scamType.findMany({
    where,
    orderBy: { name: "asc" },
    take: 20,
  });
  return NextResponse.json(types);
}
