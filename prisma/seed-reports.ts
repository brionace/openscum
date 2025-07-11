import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Usage
// npx tsx prisma/seed-reports.ts

// Example seed data (paraphrased from real-world public scam warnings)
const scamReports = [
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
      "Offered a too-good-to-be-true investment in cryptocurrency, sent money, then lost all contact.",
    city: "Sydney",
    country: "Australia",
    moneyLost: 3500,
    severity: "HIGH",
    phoneNumber: "",
    website: "https://bitcoingaininvest.com",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Crypto Investment Scam",
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
  {
    description:
      "Pop-up on computer claimed to be Microsoft support, asked to call a number and pay for virus removal.",
    city: "Mumbai",
    country: "India",
    moneyLost: 150,
    severity: "MEDIUM",
    phoneNumber: "+91-44-7122-4000",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Tech Support",
  },
  {
    description:
      "Received a WhatsApp message from someone pretending to be a family member, asking for urgent money transfer.",
    city: "Cape Town",
    country: "South Africa",
    moneyLost: 800,
    severity: "HIGH",
    phoneNumber: "+27-21-555-1234",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "WhatsApp Scam",
  },
  {
    description:
      "Got a call from someone claiming to be from the bank, requesting account details to 'verify suspicious activity'.",
    city: "Berlin",
    country: "Germany",
    moneyLost: 1200,
    severity: "HIGH",
    phoneNumber: "+49-30-2201-1234",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Banking Scam",
  },
  {
    description:
      "Received an email about winning a lottery I never entered, asked to pay a fee to claim the prize.",
    city: "Paris",
    country: "France",
    moneyLost: 300,
    severity: "MEDIUM",
    phoneNumber: "",
    website: "",
    email: "euromillions@claimcenter.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Lottery Scam",
  },
  {
    description:
      "A fake tech support pop-up locked my browser and demanded payment to unlock my computer.",
    city: "Los Angeles",
    country: "United States",
    moneyLost: 100,
    severity: "MEDIUM",
    phoneNumber: "+1-310-555-0199",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Tech Support",
  },
  {
    description:
      "Received a phishing SMS pretending to be from a delivery company, with a link to a fake tracking page.",
    city: "Madrid",
    country: "Spain",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://correos-tracking-es.com",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Delivery Scam",
  },
  {
    description:
      "Received a call from someone claiming to be from the Social Security Administration, threatening to suspend my SSN unless I paid a fee.",
    city: "Houston",
    country: "United States",
    moneyLost: 400,
    severity: "HIGH",
    phoneNumber: "+1-800-772-1213",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received an email from 'HMRC' about a tax refund, with a link to a phishing site.",
    city: "London",
    country: "United Kingdom",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://hmrc-taxrefund.co.uk",
    email: "refund@hmrc.co.uk",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "HMRC Scam",
  },
  {
    description:
      "Scammer posed as a police officer, demanded bail money for a relative supposedly in custody.",
    city: "Chicago",
    country: "United States",
    moneyLost: 900,
    severity: "HIGH",
    phoneNumber: "+1-312-746-6000",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Police Scam",
  },
  {
    description:
      "Received a job offer via email, then asked to pay for background checks and training materials.",
    city: "Dublin",
    country: "Ireland",
    moneyLost: 200,
    severity: "MEDIUM",
    phoneNumber: "",
    website: "",
    email: "hr@fakejoboffers.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Job Offer",
  },
  {
    description:
      "Received a phishing email pretending to be from Apple, asking to reset my password.",
    city: "San Francisco",
    country: "United States",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://apple-reset.com",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  {
    description:
      "Received a call from someone claiming to be from the Australian Taxation Office, demanding payment for alleged tax debt.",
    city: "Melbourne",
    country: "Australia",
    moneyLost: 700,
    severity: "HIGH",
    phoneNumber: "+61-2-6216-1111",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a message on Instagram about winning a prize, but was asked to pay a 'release fee'.",
    city: "Los Angeles",
    country: "United States",
    moneyLost: 250,
    severity: "MEDIUM",
    phoneNumber: "",
    website: "",
    email: "",
    socialMedia: "https://instagram.com/fakeprizeaccount",
    anonymous: true,
    scamTypeName: "Instagram Scam",
  },
  {
    description:
      "Received a call from someone claiming to be from the Canadian Revenue Agency, threatening legal action unless I paid immediately.",
    city: "Vancouver",
    country: "Canada",
    moneyLost: 600,
    severity: "HIGH",
    phoneNumber: "+1-800-959-8281",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a phishing email from a fake Netflix support address, asking to update payment information.",
    city: "Amsterdam",
    country: "Netherlands",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://netflix-support.com",
    email: "support@netflix.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  {
    description:
      "Received a call from someone claiming to be from the Inland Revenue Board of Malaysia, demanding payment for unpaid taxes.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    moneyLost: 400,
    severity: "HIGH",
    phoneNumber: "+60-3-6201-3000",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a call from someone claiming to be from the Internal Revenue Service, threatening arrest unless immediate payment was made.",
    city: "Dallas",
    country: "United States",
    moneyLost: 650,
    severity: "HIGH",
    phoneNumber: "+1-214-555-0198",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a phishing email from a fake PayPal address, asking to confirm account details.",
    city: "Vancouver",
    country: "Canada",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://paypal-alerts.com",
    email: "service@paypal.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "PayPal Scam",
  },
  {
    description:
      "Received a call from someone claiming to be from the UK Home Office, demanding payment for alleged visa violations.",
    city: "London",
    country: "United Kingdom",
    moneyLost: 900,
    severity: "HIGH",
    phoneNumber: "+44-20-7035-4848",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a phishing email from a fake Facebook support address, asking to reset my password.",
    city: "Dublin",
    country: "Ireland",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://facebook-support.com",
    email: "support@facebook.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  {
    description:
      "Received a call from someone claiming to be from the Australian Federal Police, demanding payment for alleged criminal activity.",
    city: "Perth",
    country: "Australia",
    moneyLost: 1200,
    severity: "HIGH",
    phoneNumber: "+61-8-9222-1111",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Police Scam",
  },
  {
    description:
      "Received a phishing email from a fake Apple support address, asking to verify account details.",
    city: "Zurich",
    country: "Switzerland",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://apple-support.com",
    email: "support@apple.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  {
    description:
      "Received a call from someone claiming to be from the South African Revenue Service, demanding payment for unpaid taxes.",
    city: "Johannesburg",
    country: "South Africa",
    moneyLost: 500,
    severity: "HIGH",
    phoneNumber: "+27-11-555-1234",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Government Impersonation",
  },
  {
    description:
      "Received a phishing email from a fake Microsoft support address, asking to reset my password.",
    city: "Seattle",
    country: "United States",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://microsoft-support.com",
    email: "support@microsoft.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  {
    description:
      "Received a call from someone claiming to be from the Singapore Police Force, demanding payment for alleged criminal activity.",
    city: "Singapore",
    country: "Singapore",
    moneyLost: 800,
    severity: "HIGH",
    phoneNumber: "+65-1800-255-0000",
    website: "",
    email: "",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Fake Police Scam",
  },
  {
    description:
      "Received a phishing email from a fake Twitter support address, asking to reset my password.",
    city: "San Jose",
    country: "United States",
    moneyLost: 0,
    severity: "LOW",
    phoneNumber: "",
    website: "https://twitter-support.com",
    email: "support@twitter.com",
    socialMedia: "",
    anonymous: true,
    scamTypeName: "Phishing (Email/SMS)",
  },
  // ...add 20+ more real, paraphrased, and unique scam reports from public sources, with real scammer contact/location details and no example/fake data...
];

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
    const outcome = [
      {
        outcomeType: outcomeTypeId, // Use the id of the OutcomeType
        moneyLost: moneyLost || 0,
        moneyRequested: moneyRequested || 0,
        currency: "USD",
      },
    ];
    // Create the report with outcome JSON
    const createdReport = await prisma.scamReport.create({
      data: {
        ...reportData,
        scamTypeId,
        outcome,
      },
    });
    // Add a random number (1-5) of helpful votes for each report
    const helpfulVotes = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < helpfulVotes; i++) {
      await prisma.vote.create({
        data: {
          reportId: createdReport.id,
          voterIp: `seed-ip-${createdReport.id}-${i}`,
          voteType: "helpful",
        },
      });
    }
    // Add a random number (0-3) of comments for each report
    const commentCount = Math.floor(Math.random() * 4);
    const createdComments: any[] = [];
    for (let i = 0; i < commentCount; i++) {
      const comment = await prisma.comment.create({
        data: {
          reportId: createdReport.id,
          content: `This is a seed comment #${i + 1} for report ${
            createdReport.id
          }`,
          author: `user${i + 1}`,
        },
      });
      createdComments.push(comment);
    }
    // For each comment, add a random number (0-2) of replies
    for (const parentComment of createdComments) {
      const replyCount = Math.floor(Math.random() * 3); // 0, 1, or 2
      for (let j = 0; j < replyCount; j++) {
        await prisma.comment.create({
          data: {
            reportId: createdReport.id,
            content: `This is a reply #${j + 1} to comment ${
              parentComment.id
            } for report ${createdReport.id}`,
            author: `replyuser${j + 1}`,
            parentId: parentComment.id,
          },
        });
      }
    }
    // Update reportCount to match the number of comments (top-level only)
    await prisma.scamReport.update({
      where: { id: createdReport.id },
      data: { reportCount: commentCount },
    });
    // Add a random number (0-2) of flags for each report
    const flagCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < flagCount; i++) {
      await prisma.flag.create({
        data: {
          reportId: createdReport.id,
          reason: `Seed flag reason #${i + 1} for report ${createdReport.id}`,
          ip: `seed-flag-ip-${createdReport.id}-${i}`,
        },
      });
    }
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
