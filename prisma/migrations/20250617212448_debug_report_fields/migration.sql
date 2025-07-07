-- CreateTable
CREATE TABLE "ScamReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'MEDIUM',
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
    "tags" TEXT
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "reportId" TEXT NOT NULL,
    CONSTRAINT "Comment_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "ScamReport" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reportId" TEXT NOT NULL,
    "voterIp" TEXT NOT NULL,
    "voteType" TEXT NOT NULL,
    CONSTRAINT "Vote_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "ScamReport" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WikiPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "country" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "SearchCache" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "query" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hitCount" INTEGER NOT NULL DEFAULT 1
);

-- CreateIndex
CREATE INDEX "ScamReport_phoneNumber_idx" ON "ScamReport"("phoneNumber");

-- CreateIndex
CREATE INDEX "ScamReport_email_idx" ON "ScamReport"("email");

-- CreateIndex
CREATE INDEX "ScamReport_website_idx" ON "ScamReport"("website");

-- CreateIndex
CREATE INDEX "ScamReport_country_city_idx" ON "ScamReport"("country", "city");

-- CreateIndex
CREATE INDEX "ScamReport_category_idx" ON "ScamReport"("category");

-- CreateIndex
CREATE INDEX "ScamReport_createdAt_idx" ON "ScamReport"("createdAt");

-- CreateIndex
CREATE INDEX "Comment_reportId_idx" ON "Comment"("reportId");

-- CreateIndex
CREATE INDEX "Vote_reportId_idx" ON "Vote"("reportId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_reportId_voterIp_key" ON "Vote"("reportId", "voterIp");

-- CreateIndex
CREATE UNIQUE INDEX "WikiPage_title_key" ON "WikiPage"("title");

-- CreateIndex
CREATE UNIQUE INDEX "WikiPage_slug_key" ON "WikiPage"("slug");

-- CreateIndex
CREATE INDEX "WikiPage_category_idx" ON "WikiPage"("category");

-- CreateIndex
CREATE INDEX "WikiPage_country_idx" ON "WikiPage"("country");

-- CreateIndex
CREATE INDEX "WikiPage_featured_idx" ON "WikiPage"("featured");

-- CreateIndex
CREATE UNIQUE INDEX "SearchCache_query_key" ON "SearchCache"("query");

-- CreateIndex
CREATE INDEX "SearchCache_query_idx" ON "SearchCache"("query");

-- CreateIndex
CREATE INDEX "SearchCache_lastUpdated_idx" ON "SearchCache"("lastUpdated");
