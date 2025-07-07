import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { typeId } = req.query;
  const limit = parseInt((req.query.limit as string) || "10", 10);
  const offset = parseInt((req.query.offset as string) || "0", 10);

  if (!typeId || typeof typeId !== "string") {
    return res.status(400).json({ success: false, error: "Missing typeId" });
  }

  try {
    const reports = await prisma.scamReport.findMany({
      where: { scamTypeId: typeId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      include: {
        scamType: true,
        _count: true,
      },
    });
    res.json({ success: true, reports });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch reports" });
  }
}
