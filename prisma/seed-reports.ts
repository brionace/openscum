import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Example seed data (paraphrased from real-world public scam warnings)
const scamReportsRaw = [
  {
    description:
      "Received a call from someone claiming to be from the IRS, demanding immediate payment via gift cards to avoid arrest.",
    city: "New York",
    country: "United States",
    anonymous: true,
    scamTypeName: "Government Impersonation",
    scammerDetails: {
      phoneNumber: "+1-202-555-0173",
      email: "",
      website: "",
      socialMedia: "",
      name: "",
    },
    outcome: [{ outcomeType: "FINANCIAL", moneyLost: 500, currency: "USD" }],
  },
  {
    description:
      "Contacted on a dating app, built trust over weeks, then asked for money to cover a fake emergency.",
    city: "Manchester",
    country: "United Kingdom",
    anonymous: true,
    scamTypeName: "Romance Scam",
    scammerDetails: {
      phoneNumber: "",
      email: "",
      website: "",
      socialMedia: "https://www.facebook.com/fakeprofile.romance.scam/",
      name: "",
    },
    outcome: [{ outcomeType: "FINANCIAL", moneyLost: 2000, currency: "GBP" }],
  },
  {
    description:
      "Received an email claiming my PayPal account was compromised, with a link to a fake login page.",
    city: "Toronto",
    country: "Canada",
    anonymous: true,
    scamTypeName: "PayPal Scam",
    scammerDetails: {
      phoneNumber: "",
      email: "service@paypal.com",
      website: "https://paypal-resolutioncenter.com",
      socialMedia: "",
      name: "",
    },
    outcome: [
      {
        outcomeType: "OTHER",
        otherOutcomeDetails: "Phishing attempt, no money lost",
      },
    ],
  },
  {
    description:
      "Scammer posed as a landlord, requested deposit for unseen rental property.",
    city: "Sydney",
    country: "Australia",
    anonymous: true,
    scamTypeName: "Rental Scam",
    scammerDetails: {
      phoneNumber: "+61-2-5555-1234",
      email: "fake.landlord@email.com",
      website: "",
      socialMedia: "",
      name: "John Smith",
    },
    outcome: [{ outcomeType: "FINANCIAL", moneyLost: 1200, currency: "AUD" }],
  },
  {
    description:
      "Received a phishing SMS pretending to be from a delivery company, with a link to a fake tracking page.",
    city: "Madrid",
    country: "Spain",
    anonymous: true,
    scamTypeName: "Fake Delivery Scam",
    scammerDetails: {
      phoneNumber: "",
      email: "",
      website: "https://correos-tracking-es.com",
      socialMedia: "",
      name: "",
    },
    outcome: [
      {
        outcomeType: "OTHER",
        otherOutcomeDetails: "No money lost, phishing link only",
      },
    ],
  },
  {
    description:
      "Scammer posed as tech support, took remote control of computer and demanded payment.",
    city: "Mumbai",
    country: "India",
    anonymous: true,
    scamTypeName: "Fake Tech Support",
    scammerDetails: {
      phoneNumber: "+91-44-7122-4000",
      email: "",
      website: "",
      socialMedia: "",
      name: "",
    },
    outcome: [{ outcomeType: "FINANCIAL", moneyLost: 150, currency: "INR" }],
  },
];

// No transformation needed, scamReportsRaw already uses scammerDetails and outcome as JSON fields
const scamReports = scamReportsRaw;

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
    // Create the scam report
    const createdReport = await prisma.scamReport.create({
      data: {
        ...reportData,
        scammerDetails: report.scammerDetails,
        scamType: scamTypeId ? { connect: { id: scamTypeId } } : undefined,
        outcome: report.outcome,
      },
    });

    // Add a random comment for each report
    await prisma.comment.create({
      data: {
        reportId: createdReport.id,
        content: `This is a seed comment for report ${createdReport.id}`,
        author: `user${Math.floor(Math.random() * 1000)}`,
      },
    });
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
