"use client";

import React, { useState } from "react";
import { useSupabaseUser } from "@/components/SupabaseUserContext";
import { ScamReport, OutcomeType } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import { ReportMeta } from "@/components/report-meta";
import { ReportMetaRow } from "@/components/report-meta-row";
import { ReportDetails } from "@/components/report-details";
import { severityBLColors, severityColors, getSeverity } from "@/lib/utils";

interface ReportCardProps {
  report: ScamReport;
  outcomeTypes: OutcomeType[];
  onShare?: (report: ScamReport) => void;
  onVote?: (reportId: string, voteType: "helpful" | "not_helpful") => void;
  onCommentsClick?: (reportId: string) => void;
  onFlag?: (reportId: string, flagged: boolean) => Promise<void>;
  flagged?: boolean;
  hideTypeLink?: boolean;
}

export function ReportCard({
  report,
  outcomeTypes,
  onShare,
  onVote,
  onCommentsClick,
  onFlag,
  flagged = false,
  hideTypeLink = false,
}: ReportCardProps) {
  const [flagLoading, setFlagLoading] = useState(false);
  const { user, session, signIn } = useSupabaseUser();
  // Build lookup maps for outcomeType labels and values
  const outcomeTypeLabels = outcomeTypes.reduce(
    (acc: Record<string, string>, t: OutcomeType) => {
      acc[t.id] = t.label;
      return acc;
    },
    {}
  );
  const outcomeTypeValues = outcomeTypes.reduce(
    (acc: Record<string, string>, t: OutcomeType) => {
      acc[t.id] = t.value;
      return acc;
    },
    {}
  );

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/report/${report.id}`;

    if (navigator.share) {
      navigator.share({
        title: "Scam alert",
        text: `Scam alert reported`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      // Could show a toast here
    }

    onShare?.(report);
  };

  const handleVote = async (voteType: "helpful" | "not_helpful") => {
    if (!user || !session) {
      toast({
        title: "Sign in required",
        description:
          "Please sign in to vote on reports. Report viewing is always free and anonymous.",
        variant: "default",
      });
      return;
    }
    try {
      const res = await fetch(`/api/reports/${report.id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ voteType }),
      });
      const result = await res.json();
      if (!result.success) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({ title: "Vote submitted" });
        // Call the parent onVote handler if provided
        onVote?.(report.id, voteType);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to vote.",
        variant: "destructive",
      });
    }
  };

  const handleFlag = async () => {
    if (!user || !session) {
      toast({
        title: "Sign in required",
        description:
          "Please sign in to flag reports. Report viewing is always free and anonymous.",
        variant: "default",
      });
      return;
    }
    if (flagLoading) return;
    setFlagLoading(true);
    try {
      const res = await fetch(`/api/reports/${report.id}/flag`, {
        method: flagged ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: flagged ? undefined : JSON.stringify({}),
      });
      const result = await res.json();
      if (!result.success) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: !flagged ? "Flagged" : "Flag removed",
          description: !flagged
            ? "Thank you for flagging this report. Our team will review it."
            : "You have removed your flag from this report.",
        });
        // Call the parent onFlag handler if provided
        await onFlag?.(report.id, !flagged);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to flag/unflag this report.",
        variant: "destructive",
      });
    } finally {
      setFlagLoading(false);
    }
  };

  const severityValue = getSeverity(report.severity);
  const colorClass =
    severityColors[severityValue as keyof typeof severityColors] ||
    "text-slate-600";

  return (
    <Card
      onClick={() => onCommentsClick?.(report.id)}
      className={`w-full border-b-0 border-t-0 border-l-0 border-right-0 lg:border shadow-none lg:shadow-sm rounded-none lg:rounded-lg lg:border-l-0 hover:cursor-pointer ${
        severityBLColors[
          (report.severity as keyof typeof severityBLColors) || "LOW"
        ]
      } hover:lg:shadow-lg transition-shadow`}
    >
      <CardHeader className="flex flex-row items-end justify-between gap-3 p-3 pt-6">
        <ReportMetaRow report={report} />
      </CardHeader>

      <CardContent className="space-y-4 p-3">
        <p className="mb-4 line-clamp-3 break-all">{report.description}</p>

        {/* Details Section (scammerDetails, outcome, severity) */}
        <ReportDetails severity={severityValue} compact />

        {/* Meta Information */}
        <ReportMeta
          report={report}
          flagged={flagged}
          flagLoading={flagLoading}
          onVote={handleVote}
          onCommentsClick={onCommentsClick}
          // onFlag={handleFlag}
        />
      </CardContent>
    </Card>
  );
}
