"use client";

import React, { useState } from "react";
import { useSupabaseUser } from "@/components/SupabaseUserContext";
import { ScamReport, OutcomeType } from "@/lib/types";
import {
  AlertTriangle,
  MapPin,
  Calendar,
  MessageCircle,
  ThumbsUp,
  Phone,
  Mail,
  Globe,
  Share2,
  Flag,
  ChevronRight,
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

const severityColors = {
  LOW: "border-l-yellow-400",
  MEDIUM: "border-l-orange-400",
  HIGH: "border-l-red-400",
  CRITICAL: "border-l-red-600",
};

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

  return (
    <Card
    // className={`w-full border-l-4 ${
    //   severityColors[
    //     (report.severity as keyof typeof severityColors) || "LOW"
    //   ]
    // } hover:shadow-lg transition-shadow`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
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
              <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                {report.scamType?.name}
              </span>
              {/* Severity */}
              {(report.severity === "HIGH" ||
                report.severity === "CRITICAL") && (
                <span className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-semibold">
                  <AlertTriangle className="h-3 w-3" />
                  {/* {report.severity} */}
                </span>
              )}
              {report.reportCount > 1 && report.scamType?.id && (
                <span className="text-xs font-semibold">
                  {report.reportCount} reports
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0"
              onClick={() => onCommentsClick?.(report.id)}
              aria-label="View report details"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {report.description}
        </p>

        {/* Scammer Details */}
        {Array.isArray(report.scammerDetails) && report.scammerDetails.length > 0 && (
          <ReportScammerDetails scammerDetails={report.scammerDetails} />
        )}

        {/* Outcome(s) */}
        {Array.isArray(report.outcome) && report.outcome.length > 0 && (
          <div className="mb-4">
            <ReportOutcome outcome={report.outcome} />
          </div>
        )}

        {/* Meta Information */}
        <ReportMeta
          report={report}
          flagged={flagged}
          flagLoading={flagLoading}
          onVote={handleVote}
          onFlag={handleFlag}
          onCommentsClick={onCommentsClick}
        />
      </CardContent>
    </Card>
  );
}
