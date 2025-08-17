import React from "react";
import { ScamReport } from "@/lib/types";
import { formatDistanceToNow } from "@/lib/date-utils";
import { getSeverity } from "@/lib/utils";
import { SeverityBulletin } from "./severity-bulletin";

interface ReportMetaRowProps {
  report: ScamReport;
}

export function ReportMetaRow({ report }: ReportMetaRowProps) {
  const severityValue = getSeverity(report.severity);
  const cityCountry =
    report.city && report.country
      ? `${report.city}, ${report.country}`
      : `${report.country}`;
  return (
    <div className="w-full flex items-center justify-between gap-2 text-muted-foreground">
      <div className="flex items-center gap-2 col-span-1 text-xs line-clamp-1">
        {/* <span>Posted {formatDistanceToNow(new Date(report.createdAt))}</span> */}
        {(report.city || report.country) && (
          <>
            {/* &bull; */}
            <span title={cityCountry}>{cityCountry}</span>
          </>
        )}
        {report.source && (
          <>
            {/* &bull; */}
            <span
              // className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold"
              title={`Source: ${report.source}`}
            >
              {report.source}
            </span>
          </>
        )}
      </div>
      {severityValue && <SeverityBulletin severity={severityValue} compact />}
    </div>
  );
}
