-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AIScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "averageRiskLevel" TEXT NOT NULL,
    "averageFinancialImpact" REAL NOT NULL,
    "locales" TEXT NOT NULL
);
INSERT INTO "new_AIScamReport" ("averageFinancialImpact", "averageRiskLevel", "createdAt", "id", "locales", "summary", "title", "updatedAt") SELECT "averageFinancialImpact", "averageRiskLevel", "createdAt", "id", "locales", "summary", "title", "updatedAt" FROM "AIScamReport";
DROP TABLE "AIScamReport";
ALTER TABLE "new_AIScamReport" RENAME TO "AIScamReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
