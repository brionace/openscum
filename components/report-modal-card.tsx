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

interface ReportCardProps {
  report: ScamReport;
  onShare?: (report: ScamReport) => void;
  onVote?: (reportId: string, voteType: "helpful" | "not_helpful") => void;
  onCommentsClick?: (reportId: string) => void; // NEW
  onFlag?: (reportId: string, flag: boolean) => void; // NEW
  flagged?: boolean; // <-- add flagged prop
}

const severityColors = {
  LOW: "border-l-yellow-400",
  MEDIUM: "border-l-orange-400",
  HIGH: "border-l-red-400",
  CRITICAL: "border-l-red-600",
};

export function ReportCard({
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

  return (
    <Card className="w-full p-0 border-0">
      <CardHeader className="p-0 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2 items-center">
              {/* Scam Type Name */}
              {report.scamType?.name && (
                <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                  {report.scamType.name}
                </span>
              )}
              {/* Severity */}
              {(report.severity === "HIGH" ||
                report.severity === "CRITICAL") && (
                <span className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-semibold">
                  <AlertTriangle className="h-3 w-3" />
                  {/* {report.severity} */}
                </span>
              )}
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
          </div>
          <div className="flex gap-1 items-center">
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0"
              onClick={handleShare}
              aria-label="Share report"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-0">
        <p className="text-sm text-muted-foreground mb-4">
          {report.description}
        </p>

        {/* Scammer Details */}
        <ReportScammerDetails scammerDetails={report.scammerDetails} />

        {/* Outcome(s) */}
        {Array.isArray(report.outcome) && report.outcome.length > 0 && (
          <div className="mb-4">
            <ReportOutcome outcome={report.outcome} />
          </div>
        )}

        {/* Meta Information */}
        <ReportMeta
          report={report}
          votes={votes}
          flagged={flagged}
          flagLoading={flagLoading}
          voting={voting}
          onVote={handleVote}
          onFlag={handleFlag}
        />
      </CardContent>
    </Card>
  );
}
