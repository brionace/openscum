import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// Usage
// npx tsx prisma/seed-outcome-types.ts
async function seedOutcomeTypes() {
  const types = [
    { value: "FINANCIAL", label: "Financial Impact" },
    { value: "SOCIAL_MEDIA", label: "Social Media Account Theft" },
    { value: "PHONE", label: "Phone Theft" },
    { value: "VEHICLE", label: "Vehicle Theft" },
    { value: "HOUSEHOLD", label: "Household Property Theft" },
    { value: "OTHER", label: "Other Outcome" },
    { value: "PERSONAL", label: "Personal" },
    { value: "ROMANCE", label: "Romance" },
  ];
  for (const type of types) {
    await prisma.outcomeType.upsert({
      where: { value: type.value },
      update: { label: type.label },
      create: { value: type.value, label: type.label },
    });
  }
  await prisma.$disconnect();
}

seedOutcomeTypes();
