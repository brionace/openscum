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
import { toast } from "@/hooks/use-toast";
import { ReportMeta } from "@/components/report-meta";
import { ReportDetails } from "@/components/report-details";
import { severityColors, getSeverity } from "@/lib/utils";
import { ReportMetaRow } from "@/components/report-meta-row";

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

  const severityValue = getSeverity(report.severity);
  const colorClass =
    severityColors[severityValue as keyof typeof severityColors] ||
    "text-slate-600";

  return (
    <Card className="w-full p-0 border-0 shadow-none">
      <CardHeader className="flex flex-row items-end justify-between p-0 mt-12">
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
        {/* {report.reportCount > 1 && report.scamType?.id && (
          <Link
            href={`/types/${report.scamType.id}`}
            className="underline text-blue-700"
          >
            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-semibold cursor-pointer">
              {report.reportCount} reports
            </span>
          </Link>
        )} */}
        <ReportMetaRow report={report} />
      </CardHeader>

      <CardContent className="space-y-4 p-0 mt-6">
        <p className="mb-4 whitespace-pre-wrap break-all">
          {report.description}
        </p>

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
          votes={votes}
          flagged={flagged}
          flagLoading={flagLoading}
          voting={voting}
          onVote={handleVote}
          onFlag={handleFlag}
          onShare={handleShare}
          onCommentsClick={onCommentsClick}
        />
      </CardContent>
    </Card>
  );
}
