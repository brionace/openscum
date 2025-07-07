import { ScamReport } from "@prisma/client";
import FlexSearch from "flexsearch";

// Client-side search index
const searchIndex = new FlexSearch.Index({
  preset: "match",
  tokenize: "forward",
  resolution: 3,
});

export interface SearchOptions {
  query: string;
  location?: {
    country?: string;
    city?: string;
  };
  limit?: number;
  offset?: number;
}

export interface SearchResult extends ScamReport {
  distance?: number;
  relevanceScore?: number;
}

export function initializeSearchIndex(reports: ScamReport[]) {
  reports.forEach((report) => {
    const searchText = [
      report.description,
      report.phoneNumber,
      report.email,
      report.website,
      report.city,
      report.country,
    ]
      .filter(Boolean)
      .join(" ");

    searchIndex.add(report.id, searchText);
  });
}

export function searchReports(
  reports: ScamReport[],
  query: string
): SearchResult[] {
  if (!query.trim()) return reports;

  const results = searchIndex.search(query, { limit: 100 });

  return results
    .map((id) => {
      const report = reports.find((r) => r.id === id);
      if (!report) return null;

      // Calculate relevance score
      const relevanceScore = calculateRelevanceScore(report, query);

      return {
        ...report,
        relevanceScore,
      };
    })
    .filter(Boolean) as SearchResult[];
}

function calculateRelevanceScore(report: ScamReport, query: string): number {
  let score = 0;
  const queryLower = query.toLowerCase();

  // Exact matches get higher scores
  if (report.phoneNumber?.includes(query)) score += 10;
  if (report.email?.toLowerCase().includes(queryLower)) score += 10;
  if (report.website?.toLowerCase().includes(queryLower)) score += 10;

  // Partial matches
  if (report.description.toLowerCase().includes(queryLower)) score += 3;

  // Recent reports get slight boost
  const daysSinceReport =
    (Date.now() - new Date(report.createdAt).getTime()) / (1000 * 60 * 60 * 24);
  if (daysSinceReport < 7) score += 2;
  if (daysSinceReport < 30) score += 1;

  // High report count gets boost
  if (report.reportCount > 5) score += 3;
  if (report.reportCount > 10) score += 5;

  return score;
}

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.toLowerCase().trim();
  }
}
