-- CreateTable
CREATE TABLE "ScamType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ScamReportTag" (
    "reportId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    PRIMARY KEY ("reportId", "tagId"),
    CONSTRAINT "ScamReportTag_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "ScamReport" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ScamReportTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "aiSummaryId" TEXT,
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
    "screenshots" TEXT,
    "evidence" TEXT,
    "scamTypeId" TEXT,
    CONSTRAINT "ScamReport_scamTypeId_fkey" FOREIGN KEY ("scamTypeId") REFERENCES "ScamType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ScamReport" ("aiSummaryId", "anonymous", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "screenshots", "socialMedia", "trustScore", "updatedAt", "verified", "website") SELECT "aiSummaryId", "anonymous", "city", "country", "createdAt", "description", "email", "evidence", "id", "ipHash", "latitude", "longitude", "moneyLost", "moneyRequested", "phoneNumber", "region", "reportCount", "reporterEmail", "reporterName", "screenshots", "socialMedia", "trustScore", "updatedAt", "verified", "website" FROM "ScamReport";
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
CREATE UNIQUE INDEX "ScamType_name_key" ON "ScamType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
