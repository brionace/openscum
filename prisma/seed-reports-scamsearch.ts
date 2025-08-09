// npx tsx prisma/seed-outcome-types.ts
import prisma from "@/lib/prisma";
import fetch from "node-fetch";

const API_TOKEN = "m8wkplbego3r0dq7sxhvt1a5fc2jz6";
const BASE_URL = "https://scamsearch.io/api/search-with-wild";
const DEFAULT_SEARCH = "fraud"; //

// Configurable query params
const config = {
  search: DEFAULT_SEARCH,
  type: "all",
  api_token: API_TOKEN,
};

async function fetchReports(config: Record<string, string>) {
  const params = new URLSearchParams(config).toString();
  const url = `${BASE_URL}?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  const data = await res.json();
  return data?.result || [];
}

async function getScamTypeId(typeName: string): Promise<string | null> {
  if (!typeName) return null;
  const scamType = await prisma.scamType.findFirst({
    where: { name: typeName },
    select: { id: true },
  });
  return scamType?.id || null;
}

async function isDuplicate(report: any): Promise<boolean> {
  const normalizedDescription = report.description.trim().toLowerCase();

  // Check for existing report with similar description
  const descMatch = await prisma.scamReport.findFirst({
    where: {
      description: { equals: normalizedDescription },
    },
    select: { id: true },
  });

  // Check for existing report with same scammer email, phone, or website
  const scammerEmail = report.scammerDetails.email;
  const scammerPhone = report.scammerDetails.phoneNumber;
  // const socialMedia = report.scammerDetails.socialMedia;

  const scammerMatch = await prisma.scamReport.findFirst({
    where: {
      OR: [
        { scammerDetails: { path: ["email"], equals: scammerEmail } },
        { scammerDetails: { path: ["phoneNumber"], equals: scammerPhone } },
        // { scammerDetails: { path: ["username"], equals: socialMedia } },
      ],
    },
    select: { id: true },
  });

  return !!descMatch || !!scammerMatch;
}

async function importReports() {
  // Get all scamType names from the database
  const scamTypes = await prisma.scamType.findMany({ select: { name: true } });
  // const scamTypeNames = scamTypes.map((t) => t.name).filter(Boolean);
  const scamTypeNames = [
    "Romance Scam",
    "EBay Scam",
    "Phone Scam",
    "Email Scam",
    "Phishing",
    "Website Scam",
    "Crypto Scam",
    "Pension Scam",
    "Investment Scam",
    "Giftcard Scam",
    "Card Scam",
    "dating app",
    "tinder",
    "Bumble",
    "Hinge",
    "OkCupid",
    "Badoo",
    "Plenty of Fish",
    "online marketing scams",
    "blackmail",
    "crypto",
    "debt",
    "romance",
    "ransomware",
    "bitcoin",
    "sextortion",
    "fraud",
    "phishing",
    "tech support",
    "Blackmail",
    "investment",
    "instagram",
    "facebook",
    "email",
    "other",
  ];

  for (const scamTypeName of scamTypeNames) {
    const searchConfig = {
      ...config,
      search: scamTypeName,
    };
    console.log(`Searching for scamType: ${scamTypeName}`);
    const reports = await fetchReports(searchConfig);

    for (const item of reports) {
      const description = item.scamdescription || "";
      const scamTypeId =
        (await getScamTypeId(scamTypeName)) || (await getScamTypeId("Other"));

      // Build scammerDetails object
      const scammerDetails = {
        phoneNumber: item.scammerphone || null,
        email: item.scammeremail || null,
        website: item.scammerwebsite || null,
        socialMedia: item.scammerusername || null,
        name: item.scammerusername || null,
        other: item.bitcoin_address || null,
      };

      // Check for duplicates
      const duplicate = await isDuplicate({ description, scammerDetails });
      if (duplicate) {
        console.log(
          `Duplicate found, skipping: ${description.slice(0, 40)}...`
        );
        continue;
      }

      // Skip short descriptions
      if (description.length < 20) {
        console.warn(`Scam description is less than 20 characters, skipping.`);
        continue;
      }

      await prisma.scamReport.create({
        data: {
          description,
          scammerDetails,
          scamTypeId: scamTypeId || null,
          city: item.city || null,
          country: item.country || null,
          reporterName: item.reporter || null,
          anonymous: true,
          outcome: item.outcome ? item.outcome : undefined,
          screenshots: JSON.stringify([]),
          evidence: JSON.stringify([]),
        },
      });

      console.log(`Imported: ${description.slice(0, 40)}...`);
    }
  }
}

importReports()
  .then(() => {
    console.log("Import complete.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Import failed:", err);
    process.exit(1);
  });
