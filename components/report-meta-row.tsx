import React from "react";
import { ScamReport } from "@/lib/types";
import { formatDistanceToNow } from "@/lib/date-utils";
import { getSeverity } from "@/lib/utils";
import { SeverityBulletin } from "@/components/severity-bulletin";
import { MapPin, Calendar } from "lucide-react";

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
      <div className="flex items-start gap-2 col-span-1 text-xs line-clamp-1">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{formatDistanceToNow(new Date(report.createdAt))}</span>
        </div>
        {/* {(report.city || report.country) && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span title={cityCountry}>{cityCountry}</span>
          </div>
        )} */}
        {report.source && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span
              // className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold"
              title={`Source: ${report.source}`}
            >
              {report.source}
            </span>
          </div>
        )}
      </div>
      {severityValue && <SeverityBulletin severity={severityValue} compact />}
    </div>
  );
}
