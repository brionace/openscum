"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { ScamReport } from "@/lib/types";
import { ReportCard } from "@/components/report-card";

interface TypeReportListProps {
  typeId: string;
}

export default function TypeReportList({ typeId }: TypeReportListProps) {
  const [reports, setReports] = useState<ScamReport[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const loader = useRef<HTMLDivElement | null>(null);
  const PAGE_SIZE = 10;

  const fetchReports = useCallback(
    async (pageNum: number) => {
      setLoading(true);
      const res = await fetch(
        `/api/types/${typeId}/reports?limit=${PAGE_SIZE}&offset=${
          pageNum * PAGE_SIZE
        }`
      );
      const data = await res.json();
      if (data.success && data.reports) {
        setReports((prev) => [...prev, ...data.reports]);
        setHasMore(data.reports.length === PAGE_SIZE);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    },
    [typeId]
  );

  useEffect(() => {
    setReports([]);
    setPage(0);
    setHasMore(true);
    fetchReports(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeId]);

  // Infinite scroll
  useEffect(() => {
    if (!hasMore || loading) return;
    const currentLoader = loader.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((p) => {
            const next = p + 1;
            fetchReports(next);
            return next;
          });
        }
      },
      { threshold: 1 }
    );
    if (currentLoader) observer.observe(currentLoader);
    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore, loading, fetchReports]);

  return (
    <div>
      {reports.length === 0 && !loading && (
        <div className="text-gray-400">No reports found for this type.</div>
      )}
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} hideTypeLink />
      ))}
      <div ref={loader} />
      {loading && <div className="text-center py-4">Loading...</div>}
      {!hasMore && reports.length > 0 && (
        <div className="text-center py-4 text-gray-400">No more reports.</div>
      )}
    </div>
  );
}
