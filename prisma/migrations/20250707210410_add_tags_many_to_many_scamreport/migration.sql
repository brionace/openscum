/*
  Warnings:

  - You are about to drop the column `aiSummaryId` on the `ScamReport` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ScamReportToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ScamReportToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ScamReport" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ScamReportToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
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
    "severity" TEXT,
    "screenshots" TEXT,
    "evidence" TEXT,
    "scamTypeId" TEXT,
    CONSTRAINT "ScamReport_scamTypeId_fkey" FOREIGN KEY ("scamTypeId") REFERENCES "ScamType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ScamReport" ("anonymous", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "scamTypeId", "screenshots", "severity", "socialMedia", "trustScore", "updatedAt", "verified", "website") SELECT "anonymous", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "scamTypeId", "screenshots", "severity", "socialMedia", "trustScore", "updatedAt", "verified", "website" FROM "ScamReport";
DROP TABLE "ScamReport";
ALTER TABLE "new_ScamReport" RENAME TO "ScamReport";
CREATE INDEX "ScamReport_phoneNumber_idx" ON "ScamReport"("phoneNumber");
CREATE INDEX "ScamReport_email_idx" ON "ScamReport"("email");
CREATE INDEX "ScamReport_website_idx" ON "ScamReport"("website");
CREATE INDEX "ScamReport_country_city_idx" ON "ScamReport"("country", "city");
CREATE INDEX "ScamReport_createdAt_idx" ON "ScamReport"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ScamReportToTag_AB_unique" ON "_ScamReportToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ScamReportToTag_B_index" ON "_ScamReportToTag"("B");
