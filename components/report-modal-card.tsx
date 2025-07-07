"use client";

import React, { useState } from "react";
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
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

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
  flagged = false, // <-- use flagged prop, default false
}: ReportCardProps) {
  const [flagLoading, setFlagLoading] = useState(false);

  // Voting state for modal card
  const [votes, setVotes] = useState(report._count?.votes || 0);
  const [voting, setVoting] = useState(false);

  React.useEffect(() => {
    setVotes(report._count?.votes || 0);
  }, [report._count?.votes]);

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
    if (voting) return;
    setVoting(true);
    try {
      if (typeof onVote === "function") {
        await onVote(report.id, voteType);
        // Optimistically increment/decrement votes
        setVotes((v) => v + 1); // You may want to adjust this logic for toggling
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to vote on this report.",
        variant: "destructive",
      });
    } finally {
      setVoting(false);
    }
  };

  const handleFlag = async () => {
    if (flagLoading) return;
    setFlagLoading(true);
    try {
      if (typeof onFlag === "function") {
        await onFlag(report.id, !flagged);
        // REMOVE: setFlagged(!flagged); // Parent will update flagged prop
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

      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {report.description}
        </p>

        {/* Contact Information */}
        <div className="space-y-2 mb-4">
          {report.phoneNumber && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="font-mono">{report.phoneNumber}</span>
            </div>
          )}
          {report.email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-orange-500" />
              <span className="font-mono">{report.email}</span>
            </div>
          )}
          {report.website && (
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="font-mono break-all">{report.website}</span>
            </div>
          )}
        </div>

        {/* Financial Impact */}
        {(report.moneyLost || report.moneyRequested) && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="text-sm font-medium text-red-800 mb-1">
              Financial Impact
            </div>
            {report.moneyLost && (
              <div className="text-sm text-red-700">
                Money Lost:{" "}
                <span className="font-semibold">${report.moneyLost}</span>
              </div>
            )}
            {report.moneyRequested && (
              <div className="text-sm text-red-700">
                Money Requested:{" "}
                <span className="font-semibold">${report.moneyRequested}</span>
              </div>
            )}
          </div>
        )}

        {/* Meta Information */}
        <div className="flex items-start justify-between gap-3 text-xs text-muted-foreground pt-3 border-t">
          <div className="flex flex-wrap items-center gap-2 col-span-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>
                {formatDistanceToNow(new Date(report.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            {/* Location info */}
            {(report.city || report.country) && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-blue-500" />
                <span>
                  {report.city
                    ? `${report.city}, ${report.country}`
                    : report.country}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs">
            {/* <Button
              variant="ghost"
              size="sm"
              className={`h-6 px-2 text-xs ${flagged ? "text-red-500" : ""}`}
              onClick={handleFlag}
              disabled={flagged || flagLoading}
              aria-label="Flag as inappropriate"
            >
              <AlertTriangle className="h-3 w-3 mr-1" />
              {flagged ? "Flagged" : "Flag"}
            </Button> */}
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0"
              onClick={handleFlag}
              aria-label={flagged ? "Unflag report" : "Flag report"}
              disabled={flagLoading}
            >
              <Flag className={`h-3 w-3 ${flagged ? "text-red-500" : ""}`} />
              <span className="sr-only">{flagged ? "Unflag" : "Flag"}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0"
              onClick={() => handleVote("helpful")}
              aria-label="Thumbs up"
              disabled={voting}
            >
              <ThumbsUp className="h-3 w-3 mr-1" />
              {votes}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
