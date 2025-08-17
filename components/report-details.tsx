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
    <div className="space-y-4 text-xs">
      {scammerDetails && (
        <div className="bg-gray-100 p-1 rounded-lg border">
          <div className="bg-gray-200 p-2 rounded-lg">
            <div className="flex items-center text-xs">
              <Info className="inline-block h-4 w-4 mr-2" />
              <span>Scammer information</span>
            </div>
          </div>
          {/* Scammer Details */}
          <ReportScammerDetails
            scammerDetails={scammerDetails}
            severity={severity}
          />
          {/* Outcome(s) */}
          {/* <ReportOutcome outcome={outcome} /> */}
          {/* Severity bulletin */}
        </div>
      )}
    </div>
  );
}
