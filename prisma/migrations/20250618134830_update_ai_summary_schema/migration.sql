/*
  Warnings:

  - You are about to drop the column `region` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `userReportId` on the `AIScamReport` table. All the data in the column will be lost.
  - Made the column `city` on table `AIScamReport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `AIScamReport` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AIScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_AIScamReport" ("category", "city", "country", "createdAt", "description", "financialImpacts", "id", "locales", "riskLevel", "scammerContacts", "tags", "title", "updatedAt") SELECT "category", "city", "country", "createdAt", "description", "financialImpacts", "id", "locales", "riskLevel", "scammerContacts", "tags", "title", "updatedAt" FROM "AIScamReport";
DROP TABLE "AIScamReport";
ALTER TABLE "new_AIScamReport" RENAME TO "AIScamReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
