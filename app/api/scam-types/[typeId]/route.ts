import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { typeId: string } }
) {
  const type = await prisma.scamType.findUnique({
    where: { id: params.typeId },
  });
  if (!type) return NextResponse.json({ type: null }, { status: 404 });
  return NextResponse.json({ type });
}
