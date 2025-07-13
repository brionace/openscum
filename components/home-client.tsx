"use client";

import React, { useState, useEffect } from "react";
import { ScamReport, OutcomeType } from "@/lib/types";
import { StatsData } from "@/lib/data/stats";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Header } from "@/components/header";
import { FeaturesBar } from "@/components/features-bar";
import { TrendingBar } from "@/components/trending-bar";
// import { HighlightSection } from "@/components/highlight-section";
import { ReportCard } from "@/components/report-card";
import { QuickReportButton } from "@/components/quick-report-button";
import { ReportModal } from "@/components/report-modal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

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

      <QuickReportButton
        onReportSubmitted={handleReportSubmitted}
        prefill={reportPrefill}
        open={reportModalOpen}
        onOpenChange={setReportModalOpen}
      />

      {/* Modal for report details/comments */}
      {activeReportId && (
        <ReportModal
          reportId={activeReportId}
          open={commentModalOpen}
          onOpenChange={handleCommentModalChange}
          onVote={doVote}
          onFlag={doFlag}
          flagged={flaggedReports[activeReportId] || false}
        />
      )}
    </div>
  );
}
