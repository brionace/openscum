import { getReports } from "@/lib/data/reports";
import { getStats } from "@/lib/data/stats";
import { getOutcomeTypes } from "@/lib/data/outcome-types";
import { HomeClient } from "@/components/home-client";

// Force dynamic rendering to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  // Fetch initial data server-side
  const [initialReportsResult, initialStats, outcomeTypes] = await Promise.all([
    getReports({ limit: 20, offset: 0 }),
    getStats(),
    getOutcomeTypes(),
  ]);

  return (
    <HomeClient
      initialReports={initialReportsResult.reports}
      initialStats={initialStats}
      initialHasMore={initialReportsResult.hasMore}
      outcomeTypes={outcomeTypes}
    />
  );
}
