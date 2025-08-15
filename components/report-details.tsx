import React from "react";
import { ReportScammerDetails } from "./report-scammer-details";
import { ReportOutcome } from "./report-outcome";
import { SeverityBulletin } from "./severity-bulletin";
import { Info } from "lucide-react";

interface ReportDetailsProps {
  scammerDetails?: any;
  outcome?: any[];
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | undefined;
  compact?: boolean;
}

export function ReportDetails({
  scammerDetails,
  outcome,
  severity,
  compact = false,
}: ReportDetailsProps) {
  return (
    <div className="space-y-4 p-2 bg-gray-50 border rounded-lg">
      <div className="flex justify-end">
        <Info className="inline-block h-4 w-4 mr-2" />
      </div>
      {/* Scammer Details */}
      <ReportScammerDetails
        scammerDetails={scammerDetails}
        severity={severity}
      />
      {/* Outcome(s) */}
      {/* <ReportOutcome outcome={outcome} /> */}
      {/* Severity bulletin */}
      <SeverityBulletin severity={severity} compact={compact} />
    </div>
  );
}
