"use client";

import React, { useState } from "react";
import { ScamReport } from "@/lib/types";
import { ReportCard } from "./report-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, MapPin, TrendingUp } from "lucide-react";

interface SearchResultsProps {
  reports: ScamReport[];
  loading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  onFilterChange?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  severity?: string;
  sortBy?: string;
  location?: string;
}

export function SearchResults({
  reports,
  loading,
  hasMore,
  onLoadMore,
  onFilterChange,
}: SearchResultsProps) {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleVote = async (
    reportId: string,
    voteType: "helpful" | "not_helpful"
  ) => {
    try {
      await fetch(`/api/reports/${reportId}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voteType }),
      });
      // Could refresh results or update optimistically
    } catch (error) {
      console.error("Vote error:", error);
    }
  };

  const handleShare = (report: ScamReport) => {
    // Track sharing analytics
    console.log("Report shared:", report.id);
  };

  if (loading && reports.length === 0) {
    return (
      <div className="space-y-4">
        <span className="sr-only">Loading...</span>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48">
              <div className="p-4 space-y-2">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <MapPin className="h-12 w-12 mx-auto mb-2" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No scam reports found
        </h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your search terms or filters, or be the first to report
          this scam.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header - Only show if we have filter/load more functionality */}
      {(onFilterChange || onLoadMore) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">
              {reports.length} {reports.length === 1 ? "result" : "results"}
            </h2>
            {onFilterChange && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>Sorted by relevance</span>
          </div>
        </div>
      )}

      {/* Filters */}
      {showFilters && onFilterChange && (
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Risk Level
              </label>
              <Select
                onValueChange={(value) => handleFilterChange("severity", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All levels</SelectItem>
                  <SelectItem value="LOW">Low Risk</SelectItem>
                  <SelectItem value="MEDIUM">Medium Risk</SelectItem>
                  <SelectItem value="HIGH">High Risk</SelectItem>
                  <SelectItem value="CRITICAL">Critical Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Sort By</label>
              <Select
                onValueChange={(value) => handleFilterChange("sortBy", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="reports">Most Reports</SelectItem>
                  <SelectItem value="severity">Highest Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <Select
                onValueChange={(value) => handleFilterChange("location", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Anywhere" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Anywhere</SelectItem>
                  <SelectItem value="nearby">Near me</SelectItem>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onVote={handleVote}
            onShare={handleShare}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMore && onLoadMore && (
        <div className="text-center pt-4">
          <Button variant="outline" onClick={onLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More Results"}
          </Button>
        </div>
      )}
    </div>
  );
}
