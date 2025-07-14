"use client";

import React from "react";
import { ScamReport, OutcomeType } from "@/lib/types";
import { ReportCard } from "./report-card";

interface SearchResultsProps {
  results: ScamReport[];
  outcomeTypes?: OutcomeType[];
  onReportClick?: (reportId: string) => void;
}

export function SearchResults({
  results,
  outcomeTypes = [],
  onReportClick,
}: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No results found</p>
        <p className="text-sm">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Found {results.length} result{results.length !== 1 ? "s" : ""}
      </div>
      {results.map((report) => (
        <ReportCard
          key={report.id}
          report={report}
          outcomeTypes={outcomeTypes}
          onCommentsClick={onReportClick}
        />
      ))}
    </div>
  );
}
