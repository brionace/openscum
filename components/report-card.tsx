"use client";

import React, { useState } from "react";
import { useSupabaseUser } from "@/components/SupabaseUserContext";
import { ScamReport, OutcomeType } from "@/lib/types";
import {
  MapPin,
  Calendar,
  MessageCircle,
  ThumbsUp,
  Phone,
  Mail,
  Globe,
  Share2,
  Flag,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "@/lib/date-utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import { ReportOutcome } from "./report-outcome";
import { ReportMeta } from "./report-meta";
import { ReportScammerDetails } from "./report-scammer-details";
import { ReportDetails } from "./report-details";
import { cn, severityBLColors, severityColors, getSeverity } from "@/lib/utils";
import { SeverityBulletin } from "./severity-bulletin";

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
      className={`w-full border-b-0 border-t-0 border-l-0 border-right-0 lg:border shadow-none lg:shadow-sm rounded-none lg:rounded-lg lg:border-l-0 ${
        severityBLColors[
          (report.severity as keyof typeof severityBLColors) || "LOW"
        ]
      } hover:lg:shadow-lg transition-shadow`}
    >
      <CardHeader className="p-3 pt-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            <div className="flex flex-wrap gap-1 items-center">
              {/* Alert Status */}
              {/* <AlertTriangle
                className={cn("h-4 w-4 shrink-0", colorClass)}
                aria-hidden="true"
              /> */}
              {/* Scam Type Name */}
              {/* {!hideTypeLink && report.scamType?.name && (
                <Link
                  href={`/types/${report.scamType.id}`}
                  className="underline text-blue-700"
                >
                  <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                    {report.scamType.name}
                  </span>
                </Link>
              )} */}
              {/* {report.scamType?.name === "Other" ? null : (
                <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                  {report.scamType?.name}
                </span>
              )} */}
              {report.reportCount > 1 && report.scamType?.id && (
                <span className="text-xs font-semibold">
                  {report.reportCount} reports
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 col-span-1 text-xs text-muted-foreground line-clamp-1">
              <span>{formatDistanceToNow(new Date(report.createdAt))}</span>
              {(report.city || report.country) && (
                <>
                  &bull;
                  <span>
                    {report.city
                      ? `${report.city}, ${report.country}`
                      : report.country}
                  </span>
                </>
              )}
              {report.source && (
                <>
                  &bull;
                  <span
                    // className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold"
                    title={`Source: ${report.source}`}
                  >
                    Source: {report.source}
                  </span>
                </>
              )}
            </div>
          </div>
          <Link
            href={`#/reports/${report.id}`}
            onClick={() => onCommentsClick?.(report.id)}
            aria-label="View report details"
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-3">
        <p className="text-sm mb-4 line-clamp-3">{report.description}</p>

        {/* Details Section (scammerDetails, outcome, severity) */}
        <ReportDetails
          scammerDetails={report.scammerDetails}
          outcome={report.outcome}
          severity={severityValue}
          compact
        />

        {/* Meta Information */}
        <ReportMeta
          report={report}
          flagged={flagged}
          flagLoading={flagLoading}
          onVote={handleVote}
          onFlag={handleFlag}
          // onCommentsClick={onCommentsClick}
        />
      </CardContent>
    </Card>
  );
}
