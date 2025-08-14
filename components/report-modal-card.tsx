"use client";

import React, { useState } from "react";
import { useSupabaseUser } from "@/components/SupabaseUserContext";
import { ScamReport } from "@/lib/types";
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
import { cn, severityColors } from "@/lib/utils";
import { SeverityBulletin } from "./severity-bulletin";

interface ReportCardProps {
  report: ScamReport;
  onShare?: (report: ScamReport) => void;
  onVote?: (reportId: string, voteType: "helpful" | "not_helpful") => void;
  onCommentsClick?: (reportId: string) => void; // NEW
  onFlag?: (reportId: string, flag: boolean) => void; // NEW
  flagged?: boolean; // <-- add flagged prop
}

export function ReportModalCard({
  report,
  onShare,
  onVote,
  onCommentsClick,
  onFlag,
  flagged = false,
}: ReportCardProps) {
  const [flagLoading, setFlagLoading] = useState(false);
  const { user, session, signIn } = useSupabaseUser();

  // Voting state for modal card
  const [votes, setVotes] = useState(report._count?.votes || 0);
  const [voting, setVoting] = useState(false);

  // Reset all local state when report changes
  React.useEffect(() => {
    setVotes(report._count?.votes || 0);
    setVoting(false);
    setFlagLoading(false);
  }, [report]);

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
        title: "Login required",
        description: "Please log in to vote on this report.",
        variant: "destructive",
      });
      return;
    }
    if (voting) return;
    setVoting(true);
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
        setVotes((v) => v + 1);
        toast({ title: "Vote submitted" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to vote.",
        variant: "destructive",
      });
    } finally {
      setVoting(false);
    }
  };

  const handleFlag = async () => {
    if (!user || !session) {
      toast({
        title: "Login required",
        description: "Please log in to flag this report.",
        variant: "destructive",
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

  const colorClass =
    severityColors[report.severity as keyof typeof severityColors] ||
    "text-slate-600";

  return (
    <Card className="w-full p-0 border-0 shadow-none">
      <CardHeader className="p-0 pb-3 mt-12 mb-3">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-1">
            {/* Alert Status */}
            {/* <AlertTriangle
              className={cn("h-4 w-4 shrink-0", colorClass)}
              aria-hidden="true"
            /> */}
            {/* Scam Type Name */}
            {/* {report.scamType?.name === "Other" ? null : (
              <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                {report.scamType?.name}
              </span>
            )} */}
            {report.reportCount > 1 && report.scamType?.id && (
              <Link
                href={`/types/${report.scamType.id}`}
                className="underline text-blue-700"
              >
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-semibold cursor-pointer">
                  {report.reportCount} reports
                </span>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2 col-span-1 text-xs text-muted-foreground">
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
      </CardHeader>

      <CardContent className="space-y-4 p-0">
        <p className="text-sm mb-4 whitespace-pre-wrap break-words">
          {report.description}
        </p>

        {/* Severity bulletin */}
        {/* <SeverityBulletin
          severity={
            report.severity === null || report.severity === undefined
              ? undefined
              : (report.severity as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL")
          }
          compact
        /> */}

        {/* Scammer Details */}
        {report.scammerDetails &&
          Object.keys(report.scammerDetails).length > 0 && (
            <ReportScammerDetails scammerDetails={report.scammerDetails} />
          )}

        {/* Outcome(s) */}
        {/* {Array.isArray(report.outcome) && report.outcome.length > 0 && (
          <div className="mb-4">
            <ReportOutcome outcome={report.outcome} />
          </div>
        )} */}

        {/* Meta Information */}
        <ReportMeta
          report={report}
          votes={votes}
          flagged={flagged}
          flagLoading={flagLoading}
          voting={voting}
          onVote={handleVote}
          onFlag={handleFlag}
          onShare={handleShare}
        />
      </CardContent>
    </Card>
  );
}
