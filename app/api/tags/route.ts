import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase();
  const where = q ? { name: { contains: q, mode: "insensitive" } } : undefined;
  const tags = await prisma.tag.findMany({
    where,
    orderBy: { name: "asc" },
    take: 20,
  });
  return NextResponse.json(tags);
}
