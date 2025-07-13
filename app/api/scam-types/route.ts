import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const where = q
    ? { name: { contains: q, mode: Prisma.QueryMode.insensitive } }
    : undefined;
  const types = await prisma.scamType.findMany({
    where,
    orderBy: { name: "asc" },
    take: 20,
  });
  return NextResponse.json(types);
}
