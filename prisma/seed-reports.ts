import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Example seed data (paraphrased from real-world public scam warnings)
const scamReportsRaw = [
  {
    description:
      "Received a call from someone claiming to be from the IRS, demanding immediate payment via gift cards to avoid arrest.",
    city: "New York",
    country: "United States",
    moneyLost: 500,
    severity: "HIGH",
    phoneNumber: "+1-202-555-0173",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Contacted on a dating app, built trust over weeks, then asked for money to cover a fake emergency.",
    city: "Manchester",
    country: "United Kingdom",
    moneyLost: 2000,
    severity: "CRITICAL",
    phoneNumber: "",
    website: "",
    email: "",
    socialMedia: "https://www.facebook.com/fakeprofile.romance.scam/",
    anonymous: true,
    scamTypeName: "Romance Scam",
  },
  {
    description:
      "Received an email claiming my PayPal account was compromised, with a link to a fake login page.",
    city: "Toronto",
    country: "Canada",
    moneyLost: 0,
    severity: "MEDIUM",
    phoneNumber: "",
    website: "https://paypal-resolutioncenter.com",
    email: "service@paypal.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "PayPal Scam",
  },
];

// Transform all reports to use scammerDetails JSON field
const scamReports = scamReportsRaw.map((r) => {
  const {
    phoneNumber = "",
    email = "",
    website = "",
    socialMedia = "",
    ...rest
  } = r;
  return {
    ...rest,
    scammerDetails: {
      phoneNumber,
      email,
      website,
      socialMedia,
      name: "",
    },
  };
});

// Seeding function
async function main() {
  // Ensure all scam types exist
  const uniqueTypeNames = Array.from(
    new Set(scamReports.map((r) => (r as any).scamTypeName).filter(Boolean))
  );
  for (const name of uniqueTypeNames) {
    await prisma.scamType.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  // Get all scam types from the DB
  const scamTypes = await prisma.scamType.findMany();

  // Fetch the OutcomeType id for "Financial"
  const financialOutcomeType = await prisma.outcomeType.findFirst({
    where: { value: "FINANCIAL" },
  });
  if (!financialOutcomeType) {
    throw new Error('OutcomeType "Financial" not found in the database.');
  }
  const outcomeTypeId = financialOutcomeType.id;

  for (const report of scamReports) {
    // Find scamTypeId by name if present
    let scamTypeId: string | undefined = undefined;
    let mainType: any = undefined;
    if ((report as any).scamTypeName) {
      mainType = scamTypes.find(
        (t) =>
          t.name.toLowerCase() === (report as any).scamTypeName.toLowerCase()
      );
      if (mainType) scamTypeId = mainType.id;
    }
    // Pick 1-3 random scam types (excluding the main one) as additional types/tags
    const otherTypes = scamTypes.filter(
      (t) => !mainType || t.id !== mainType.id
    );
    const tagCount = Math.max(1, Math.floor(Math.random() * 3));
    const shuffled = otherTypes.sort(() => 0.5 - Math.random());
    const additionalTypeIds = shuffled.slice(0, tagCount).map((t) => t.id);
    // Remove scamTypeName from report data
    const { scamTypeName, moneyLost, moneyRequested, severity, ...reportData } =
      report as any;
    // Build outcome array (Financial only for this seed)
    const outcomes = [];
    if (typeof moneyLost === "number" && moneyLost > 0) {
      outcomes.push({
        typeId: outcomeTypeId,
        value: moneyLost.toString(),
      });
    }
    // Create the scam report
    const createdReport = await prisma.scamReport.create({
      data: {
        ...reportData,
        scammerDetails: report.scammerDetails,
        scamType: scamTypeId ? { connect: { id: scamTypeId } } : undefined,
        outcome: {
          create: outcomes,
        },
      },
    });
    // Optionally, add comments/flags here if desired
  }
}

// Execute seeding
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
