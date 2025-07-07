/*
  Warnings:

  - You are about to drop the column `category` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `financialImpacts` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `riskLevel` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `scammerContacts` on the `AIScamReport` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `AIScamReport` table. All the data in the column will be lost.
  - Added the required column `averageFinancialImpact` to the `AIScamReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageRiskLevel` to the `AIScamReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `AIScamReport` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
-- Set default values for new required columns during migration
CREATE TABLE "new_AIScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL DEFAULT '',
    "averageRiskLevel" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "averageFinancialImpact" REAL NOT NULL DEFAULT 0,
    "locales" TEXT NOT NULL
);
INSERT INTO "new_AIScamReport" (
    "createdAt", "id", "locales", "title", "updatedAt", "summary", "averageRiskLevel", "averageFinancialImpact"
) SELECT 
    "createdAt", "id", "locales", "title", "updatedAt", 
    COALESCE("description", ''),
    COALESCE("riskLevel", 'UNKNOWN'),
    0
FROM "AIScamReport";
DROP TABLE "AIScamReport";
ALTER TABLE "new_AIScamReport" RENAME TO "AIScamReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
