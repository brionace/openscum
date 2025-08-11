import prismaDefault from "../lib/prisma";
const prisma: any = prismaDefault as any;

async function main() {
  // Example UK contacts
  const contacts = [
    {
      orgName: "Action Fraud",
      category: "AUTHORITY",
      description: "UK's national reporting centre for fraud and cyber crime.",
      website: "https://www.actionfraud.police.uk/",
      submitUrl:
        "https://www.actionfraud.police.uk/reporting-fraud-and-cyber-crime",
      country: "United Kingdom",
      region: null,
      city: null,
      languageCodes: ["en"],
      verified: true,
      status: "PUBLISHED",
    },
    {
      orgName: "Citizen Advice - Scams Action",
      category: "ADVISORY",
      description: "Free, impartial advice on scams in the UK.",
      website: "https://www.citizensadvice.org.uk/consumer/scams/",
      submitUrl: null,
      country: "United Kingdom",
      region: null,
      city: null,
      languageCodes: ["en"],
      verified: true,
      status: "PUBLISHED",
    },
  ];

  for (const c of contacts) {
    const existing = await prisma.contact.findFirst({
      where: { orgName: c.orgName },
    });
    if (existing) {
      await prisma.contact.update({ where: { id: existing.id }, data: c });
    } else {
      await prisma.contact.create({ data: c });
    }
  }

  console.log("Seeded contacts:", contacts.map((c) => c.orgName).join(", "));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
