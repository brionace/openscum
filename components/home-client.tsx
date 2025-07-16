"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import { ScamReport, OutcomeType } from "@/lib/types";
import { StatsData } from "@/lib/data/stats";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Header } from "@/components/header";
import { FeaturesBar } from "@/components/features-bar";
import { TrendingBar } from "@/components/trending-bar";
// import { HighlightSection } from "@/components/highlight-section";
import { ReportCard } from "@/components/report-card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Lazy load heavy components
const QuickReportButton = lazy(() => import("@/components/quick-report-button").then(m => ({ default: m.QuickReportButton })));
const ReportModal = lazy(() => import("@/components/report-modal").then(m => ({ default: m.ReportModal })));

interface HomeClientProps {
  initialReports: ScamReport[];
  initialStats: StatsData;
  initialHasMore: boolean;
  outcomeTypes: OutcomeType[];
}

export function HomeClient({
  initialReports,
  initialStats,
  initialHasMore,
  outcomeTypes,
}: HomeClientProps) {
  const [reports, setReports] = useState<ScamReport[]>(initialReports);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [stats, setStats] = useState(initialStats);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportPrefill, setReportPrefill] = useState<{
    phoneNumber?: string;
    email?: string;
    website?: string;
  }>({});
  const [processing, setProcessing] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activeReportId, setActiveReportId] = useState<string | null>(null);
  const [flaggedReports, setFlaggedReports] = useState<{
    [id: string]: boolean;
  }>({});
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Fetch paginated reports
  const loadMoreReports = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const offset = reports.length;
      const response = await fetch(`/api/reports?limit=10&offset=${offset}`);
      if (!response.ok) {
        const text = await response.text();
        console.error("API response not OK:", response.status, text);
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        if (!Array.isArray(data.data.reports)) {
          console.warn("No reports array in response:", data);
        }
        setReports((prev) => [...prev, ...(data.data.reports || [])]);
        setHasMore(data.data.hasMore);
      } else {
        console.error("API returned error:", data.error);
      }
    } catch (error) {
      console.error("Failed to load reports:", error);
    } finally {
      setLoading(false);
    }
  };

  // Infinite scroll: load more when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        !loading &&
        hasMore
      ) {
        loadMoreReports();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasMore, reports.length]);

  // Handle deep-linking for #/reports/[id]
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/reports\/(.+)$/);
      if (match) {
        const reportId = match[1];
        setActiveReportId(reportId);
        setCommentModalOpen(true);
      } else {
        setCommentModalOpen(false);
        setActiveReportId(null);
      }
    };

    // Check initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const loadStats = async () => {
    try {
      const response = await fetch("/api/stats");
      const data = await response.json();
      if (data) {
        setStats(data);
      }
    } catch (error) {
      console.error("Failed to load stats:", error);
    }
  };

  const handleReportSubmitted = () => {
    // Refresh reports and stats
    setReports([]);
    setHasMore(true);
    setTimeout(() => loadMoreReports(), 100);
    loadStats();
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/reports?limit=20&offset=0");
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setReports(data.data.reports);
          setHasMore(data.data.hasMore);
          toast({
            title: "Refreshed",
            description: "Latest reports loaded successfully",
          });
        }
      }
    } catch (error) {
      console.error("Failed to refresh:", error);
      toast({
        title: "Error",
        description: "Failed to refresh reports",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuickReport = (data: {
    phoneNumber?: string;
    email?: string;
    website?: string;
  }) => {
    setReportPrefill(data);
    setReportModalOpen(true);
  };

  const handleCommentModalChange = (open: boolean) => {
    setCommentModalOpen(open);
    if (!open) {
      // Remove the hash from the URL when closing the modal
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      setActiveReportId(null);
    }
  };

  const handleCommentsClick = (reportId: string) => {
    setActiveReportId(reportId);
    setCommentModalOpen(true);
    // Update URL hash
    window.history.pushState(null, "", `#/reports/${reportId}`);
  };

  const doVote = async (
    reportId: string,
    voteType: "helpful" | "not_helpful"
  ) => {
    try {
      const res = await fetch(`/api/reports/${reportId}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voteType, toggle: true }),
      });
      const data = await res.json();
      if (data.success && typeof data.votes === "number") {
        setReports((prev) =>
          prev.map((r) =>
            r.id === reportId
              ? {
                  ...r,
                  _count: {
                    ...r._count,
                    votes: data.votes,
                    comments:
                      typeof r._count?.comments === "number"
                        ? r._count.comments
                        : 0,
                  },
                }
              : r
          )
        );
      }
    } catch (error) {
      console.error("Vote error:", error);
    }
  };

  const doFlag = async (reportId: string, flagged: boolean) => {
    try {
      const res = await fetch(`/api/reports/${reportId}/flag`, {
        method: flagged ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: flagged ? undefined : JSON.stringify({}),
      });
      const data = await res.json();
      if (data.success) {
        setFlaggedReports((prev) => ({
          ...prev,
          [reportId]: !flagged,
        }));
        toast({
          title: !flagged ? "Flagged" : "Flag removed",
          description: !flagged
            ? "Thank you for flagging this report. Our team will review it."
            : "You have removed your flag from this report.",
        });
      }
    } catch (error) {
      console.error("Flag error:", error);
    }
  };

  // Auto-refresh mechanism to check for new posts every 30 seconds
  useEffect(() => {
    const refreshInterval = setInterval(async () => {
      try {
        const response = await fetch("/api/reports?limit=20&offset=0");
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data.reports.length > 0) {
            // Check if there are new reports (by comparing the first report ID)
            if (
              reports.length > 0 &&
              data.data.reports[0].id !== reports[0].id
            ) {
              // Silently update the reports list with new data
              setReports(data.data.reports);
              setHasMore(data.data.hasMore);
            }
          }
        }
      } catch (error) {
        console.error("Failed to refresh reports:", error);
      }
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(refreshInterval);
  }, [reports]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header
        onReportClick={() => setReportModalOpen(true)}
        reports={reports}
      />

      <div className="container max-w-6xl mx-auto px-2 md:px-4 py-6 flex flex-col lg:flex-row items-start gap-8">
        {isDesktop && (
          <aside className="sticky top-20 w-80 shrink-0 hidden lg:block">
            <FeaturesBar />
          </aside>
        )}
        <main className="space-y-8">
          {/* <TrendingBar /> */}

          <div className="space-y-6">
            {/* <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Reports
              </h2>
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {loading ? "Refreshing..." : "Refresh"}
              </Button>
            </div> */}

            <div className="grid gap-6">
              {reports.map((report) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  outcomeTypes={outcomeTypes}
                  onVote={doVote}
                  onCommentsClick={handleCommentsClick}
                  onFlag={doFlag}
                  flagged={flaggedReports[report.id] || false}
                />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={loadMoreReports}>
                  {loading ? "Loading..." : "Load More Reports"}
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>

      <Suspense fallback={<div className="fixed bottom-6 right-6 w-14 h-14 bg-gray-200 rounded-full animate-pulse" />}>
        <QuickReportButton
          onReportSubmitted={handleReportSubmitted}
          prefill={reportPrefill}
          open={reportModalOpen}
          onOpenChange={setReportModalOpen}
        />
      </Suspense>

      {/* Modal for report details/comments */}
      {activeReportId && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 animate-pulse" />}>
          <ReportModal
            reportId={activeReportId}
            open={commentModalOpen}
            onOpenChange={handleCommentModalChange}
            onVote={doVote}
            onFlag={doFlag}
            flagged={flaggedReports[activeReportId] || false}
          />
        </Suspense>
      )}
    </div>
  );
}
