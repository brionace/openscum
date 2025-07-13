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
  flagged = false,
}: ReportCardProps) {
  const [flagLoading, setFlagLoading] = useState(false);

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
        <p className="text-sm text-muted-foreground mb-4">
          {report.description}
        </p>

        {/* Scammer Details */}
        {report.scammerDetails && (
          <div className="space-y-2 mb-4">
            {report.scammerDetails.phoneNumber && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="font-mono">
                  {report.scammerDetails.phoneNumber}
                </span>
              </div>
            )}
            {report.scammerDetails.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="font-mono">{report.scammerDetails.email}</span>
              </div>
            )}
            {report.scammerDetails.website && (
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-blue-500" />
                <span className="font-mono break-all">
                  {report.scammerDetails.website}
                </span>
              </div>
            )}
            {report.scammerDetails.socialMedia && (
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-green-500" />
                <span className="font-mono break-all">
                  {report.scammerDetails.socialMedia}
                </span>
              </div>
            )}
            {report.scammerDetails.name && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Name:</span>
                <span className="font-mono">{report.scammerDetails.name}</span>
              </div>
            )}
          </div>
        )}

        {/* Outcome(s) */}
        {Array.isArray(report.outcome) && report.outcome.length > 0 && (
          <div className="mb-4">
            {report.outcome.map((outcome: Record<string, any>, idx: number) => {
              const hasValues = Object.entries(outcome).some(
                ([key, value]) =>
                  key !== "outcomeType" &&
                  value !== null &&
                  value !== undefined &&
                  value !== ""
              );
              if (!hasValues) return null;
              return (
                <div
                  key={idx}
                  className={`border rounded-lg p-3 mb-2 ${
                    outcome.outcomeType === "FINANCIAL"
                      ? "bg-yellow-50 border-yellow-400"
                      : "bg-gray-50 border-gray-300"
                  }`}
                >
                  <div
                    className={`font-semibold mb-1 ${
                      outcome.outcomeType === "FINANCIAL"
                        ? "text-yellow-700"
                        : "text-gray-800"
                    }`}
                  >
                    {outcome.outcomeType === "FINANCIAL"
                      ? "Financial Impact"
                      : outcome.outcomeType}
                  </div>
                  {Object.entries(outcome).map(([key, value]) => {
                    if (key === "outcomeType") return null;
                    if (value === null || value === undefined || value === "")
                      return null;
                    if (
                      outcome.outcomeType === "FINANCIAL" &&
                      (key === "moneyLost" || key === "moneyRequested")
                    ) {
                      return (
                        <div key={key} className="text-yellow-900">
                          {key === "moneyLost"
                            ? "Money Lost:"
                            : "Money Requested:"}{" "}
                          <span className="font-semibold">
                            {outcome.currency || "$"}
                            {value}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div key={key} className="text-yellow-900">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        : <span className="font-semibold">{String(value)}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
