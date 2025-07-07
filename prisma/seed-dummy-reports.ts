import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// Usage
// npx tsx prisma/seed-dummy-reports.ts

const prisma = new PrismaClient();

async function main() {
  // Get all scam types
  const scamTypes = await prisma.scamType.findMany();
  if (scamTypes.length === 0) {
    throw new Error("No scam types found. Seed scam types first.");
  }

  for (let i = 0; i < 100; i++) {
    const scamType = faker.helpers.arrayElement(scamTypes);
    await prisma.scamReport.create({
      data: {
        description: faker.lorem.sentences(2),
        phoneNumber: faker.datatype.boolean() ? faker.phone.number() : null,
        email: faker.datatype.boolean() ? faker.internet.email() : null,
        website: faker.datatype.boolean() ? faker.internet.url() : null,
        socialMedia: faker.datatype.boolean()
          ? faker.internet.userName()
          : null,
        city: faker.address.city(),
        country: "UK",
        region: "London",
        moneyLost: faker.datatype.boolean()
          ? parseFloat(faker.finance.amount())
          : null,
        moneyRequested: faker.datatype.boolean()
          ? parseFloat(faker.finance.amount())
          : null,
        reporterName: faker.name.firstName(),
        reporterEmail: faker.internet.email(),
        anonymous: faker.datatype.boolean(),
        scamTypeId: scamType.id,
        severity: faker.helpers.arrayElement([
          "LOW",
          "MEDIUM",
          "HIGH",
          "CRITICAL",
        ]),
        screenshots: JSON.stringify([]),
        evidence: JSON.stringify([]),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
