/*
  Warnings:

  - You are about to drop the column `severity` on the `ScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `ScamReport` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AIScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userReportId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "scammerContacts" TEXT NOT NULL,
    "financialImpacts" TEXT NOT NULL,
    "locales" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT,
    "country" TEXT,
    "region" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "reviewedByAI" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "website" TEXT,
    "socialMedia" TEXT,
    "city" TEXT,
    "country" TEXT,
    "region" TEXT,
    "ipHash" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "trustScore" INTEGER NOT NULL DEFAULT 1,
    "reportCount" INTEGER NOT NULL DEFAULT 1,
    "reporterName" TEXT,
    "reporterEmail" TEXT,
    "anonymous" BOOLEAN NOT NULL DEFAULT true,
    "moneyLost" REAL,
    "moneyRequested" REAL,
    "screenshots" TEXT,
    "evidence" TEXT
);
INSERT INTO "new_ScamReport" ("anonymous", "category", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "screenshots", "socialMedia", "title", "trustScore", "updatedAt", "verified", "website") SELECT "anonymous", "category", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "screenshots", "socialMedia", "title", "trustScore", "updatedAt", "verified", "website" FROM "ScamReport";
DROP TABLE "ScamReport";
ALTER TABLE "new_ScamReport" RENAME TO "ScamReport";
CREATE INDEX "ScamReport_phoneNumber_idx" ON "ScamReport"("phoneNumber");
CREATE INDEX "ScamReport_email_idx" ON "ScamReport"("email");
CREATE INDEX "ScamReport_website_idx" ON "ScamReport"("website");
CREATE INDEX "ScamReport_country_city_idx" ON "ScamReport"("country", "city");
CREATE INDEX "ScamReport_category_idx" ON "ScamReport"("category");
CREATE INDEX "ScamReport_createdAt_idx" ON "ScamReport"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AIScamReport_userReportId_key" ON "AIScamReport"("userReportId");
