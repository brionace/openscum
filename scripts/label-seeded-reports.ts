// Script to label ScamReports seeded from scamsearch.io
// Usage: npx tsx scripts/label-seeded-reports.ts

import prisma from "../lib/prisma";

async function main() {
  const date = new Date("2025-08-09T00:24:37.337Z");
  const result = await prisma.scamReport.updateMany({
    where: {
      createdAt: {
        gte: date,
      },
    },
    data: {
      source: "scamsearch.io",
    },
  });
  console.log(
    `Updated ${result.count} scam reports with source: scamsearch.io`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
