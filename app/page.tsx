import { getReports } from "@/lib/data/reports";
import { getStats } from "@/lib/data/stats";
import { getOutcomeTypes } from "@/lib/data/outcome-types";
import { HomeClient } from "@/components/home-client";

// Force dynamic rendering to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  try {
    console.log("🔍 Starting data fetch...");

    // Test each data source individually
    let initialReportsResult;
    let initialStats;
    let outcomeTypes;

    try {
      console.log("📊 Fetching reports...");
      initialReportsResult = await getReports({ limit: 20, offset: 0 });
      console.log("✅ Reports fetched:", initialReportsResult.reports.length);
    } catch (error) {
      console.error("❌ Reports fetch failed:", error);
      throw new Error(
        `Reports fetch failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    try {
      console.log("📈 Fetching stats...");
      initialStats = await getStats();
      console.log("✅ Stats fetched");
    } catch (error) {
      console.error("❌ Stats fetch failed:", error);
      throw new Error(
        `Stats fetch failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    try {
      console.log("🏷️ Fetching outcome types...");
      outcomeTypes = await getOutcomeTypes();
      console.log("✅ Outcome types fetched:", outcomeTypes.length);
    } catch (error) {
      console.error("❌ Outcome types fetch failed:", error);
      throw new Error(
        `Outcome types fetch failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    console.log("🎉 All data fetched successfully");

    return (
      <HomeClient
        initialReports={initialReportsResult.reports}
        initialStats={initialStats}
        initialHasMore={initialReportsResult.hasMore}
        outcomeTypes={outcomeTypes}
      />
    );
  } catch (error) {
    console.error("🚨 HomePage error:", error);
    // Show a fallback UI with error details
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Application Error
          </h1>
          <p className="text-gray-600 mb-4">
            Unable to load the page. Please check the server logs.
          </p>
          <div className="text-left bg-gray-100 p-4 rounded-lg overflow-auto">
            <pre className="text-sm text-red-800">
              {error instanceof Error ? error.message : String(error)}
            </pre>
            {error instanceof Error && error.stack && (
              <details className="mt-4">
                <summary className="cursor-pointer text-gray-600">
                  Stack trace
                </summary>
                <pre className="text-xs text-gray-600 mt-2 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    );
  }
}
