"use client";

import React, { useState, useEffect } from "react";
import { ReportCard } from "@/components/report-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  TrendingUp,
  Users,
  MapPin,
  AlertTriangle,
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";
import { ScamReport } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Header } from "@/components/header";
import { FeaturesBar } from "@/components/features-bar";
import { QuickReportButton } from "@/components/quick-report-button";
import { ReportModal } from "@/components/report-modal";

export default function Home() {
  const [reports, setReports] = useState<ScamReport[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [stats, setStats] = useState({
    totalReports: 0,
    reportsToday: 0,
    activeUsers: 0,
    topScamType: "",
  });
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
  const [outcomeTypes, setOutcomeTypes] = useState<any[]>([]);
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
  }, [loading, hasMore, reports.length]);

  useEffect(() => {
    // Load initial stats and featured reports
    loadStats();
    // Initial load
    setReports([]);
    setHasMore(true);
    setTimeout(() => loadMoreReports(), 100);
    // eslint-disable-next-line
  }, []);

  // Handle deep-linking for #/reports/[id]
  useEffect(() => {
    const checkHash = () => {
      const match = window.location.hash.match(/^#\/reports\/(.+)$/);
      if (match) {
        setActiveReportId(match[1]);
        setCommentModalOpen(true);
      } else {
        setCommentModalOpen(false);
        setActiveReportId(null);
      }
    };
    window.addEventListener("hashchange", checkHash);
    checkHash();
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // If reports load after mount and hash is present, re-check hash to open modal
  useEffect(() => {
    if (reports.length > 0 && window.location.hash.startsWith("#/reports/")) {
      const match = window.location.hash.match(/^#\/reports\/(.+)$/);
      if (match) {
        setActiveReportId(match[1]);
        setCommentModalOpen(true);
      }
    }
  }, [reports.length]);

  // Only clear hash if the user closes the modal for the current report
  const didMountRef = React.useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    // Only clear hash if the modal is being closed and the hash matches the active report
    if (
      !commentModalOpen &&
      activeReportId &&
      window.location.hash === `#/reports/${activeReportId}`
    ) {
      if (window.history.replaceState) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      } else {
        window.location.hash = "";
      }
    }
  }, [commentModalOpen, activeReportId]);

  // Handle voting
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
                  } as { votes: number; comments: number },
                }
              : r
          )
        );
      }
    } catch (error) {
      console.error("Vote error:", error);
    }
  };

  // Handle flagging
  const doFlag = async (reportId: string, flag: boolean) => {
    try {
      let res;
      if (flag) {
        res = await fetch(`/api/reports/${reportId}/flag`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
      } else {
        res = await fetch(`/api/reports/${reportId}/flag`, {
          method: "DELETE",
        });
      }
      const data = await res.json();
      if (data.success) {
        setFlaggedReports((prev) => ({ ...prev, [reportId]: flag }));
      }
    } catch (error) {
      console.error("Flag error:", error);
    }
  };

  const loadStats = async () => {
    try {
      const response = await fetch("/api/stats");
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Failed to load stats:", error);
    }
  };

  const handleReportSubmitted = () => {
    setReports([]);
    setHasMore(true);
    loadStats();
    setTimeout(() => loadMoreReports(), 100);
  };

  const openReportModalWithPrefill = (type: "phone" | "email" | "website") => {
    if (type === "phone") {
      setReportPrefill({ phoneNumber: "" });
    } else if (type === "email") {
      setReportPrefill({ email: "" });
    } else if (type === "website") {
      setReportPrefill({ website: "" });
    }
    setReportModalOpen(true);
  };

  const handleCommentsClick = (reportId: string) => {
    window.location.hash = `#/reports/${reportId}`;
  };

  useEffect(() => {
    fetch("/api/outcome-types")
      .then((res) => res.json())
      .then((data) => setOutcomeTypes(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header
        onReportClick={() => setReportModalOpen(true)}
        reports={reports}
      />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 flex flex-col lg:flex-row items-start gap-8">
        {/* Sidebar (desktop only) */}
        {isDesktop && (
          <aside className="sticky top-20 w-80 shrink-0 hidden lg:block">
            <FeaturesBar />
          </aside>
        )}
        {/* Timeline Feed */}
        <main className="flex-1 max-w-2xl mx-auto w-full">
          {/* Quick Stats */}
          {/* <div className="flex gap-6 mb-8 overflow-x-auto scrollbar-none">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-1">
                {stats.totalReports.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Reports</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {stats.reportsToday}
              </div>
              <div className="text-sm text-gray-600">Reports Today</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stats.activeUsers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>Failed to submit report. Please try again.
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                <Badge variant="outline" className="text-sm">
                  {stats.topScamType || "Phone"}
                </Badge>
              </div>
              <div className="text-sm text-gray-600">Top Scam Type</div>
            </div>
          </div> */}
          {/* Timeline Feed */}
          <div className="space-y-4">
            {reports.length === 0 && !loading ? (
              <div className="text-center py-12 text-gray-500">
                <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No scam reports yet. Be the first to report one!</p>
              </div>
            ) : (
              reports.map((report: ScamReport) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  outcomeTypes={outcomeTypes}
                  onVote={doVote}
                  onFlag={doFlag}
                  flagged={flaggedReports[report.id] || false}
                  onCommentsClick={handleCommentsClick}
                />
              ))
            )}
            {loading && (
              <div className="text-center py-4 text-gray-400">Loading...</div>
            )}
            {!loading && hasMore && reports.length > 0 && (
              <div className="text-center py-4">
                <Button variant="outline" onClick={loadMoreReports}>
                  Load More
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
          onOpenChange={setCommentModalOpen}
          onVote={doVote}
          onFlag={doFlag}
          flagged={flaggedReports[activeReportId] || false} // Pass down
        />
      )}
    </div>
  );
}
