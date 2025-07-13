import prisma from "@/lib/prisma";

export async function getOutcomeTypes() {
  try {
    const types = await prisma.outcomeType.findMany({
      orderBy: { createdAt: "asc" },
    });
    return types;
  } catch (error) {
    console.error("Failed to fetch outcome types:", error);
    return [];
  }
}
