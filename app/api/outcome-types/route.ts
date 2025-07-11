import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const types = await prisma.outcomeType.findMany({
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(types);
}
