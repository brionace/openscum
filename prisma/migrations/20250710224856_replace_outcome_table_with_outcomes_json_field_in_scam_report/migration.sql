/*
  Warnings:

  - You are about to drop the `Outcome` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "ScamReport" ADD COLUMN "outcomes" JSONB;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Outcome";
PRAGMA foreign_keys=on;
