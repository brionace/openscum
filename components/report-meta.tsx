"use client";

import React from "react";
import { ScamReport } from "@/lib/types";
import {
  Calendar,
  MapPin,
  MessageCircle,
  ThumbsUp,
  Flag,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "@/lib/date-utils";

interface ReportMetaProps {
  report: ScamReport;
  votes?: number;
  flagged?: boolean;
  flagLoading?: boolean;
  voting?: boolean;
  onVote?: (voteType: "helpful" | "not_helpful") => void;
  onFlag?: () => void;
  onCommentsClick?: (reportId: string) => void;
  onShare?: () => void;
}

export function ReportMeta({
  report,
  votes,
  flagged = false,
  flagLoading = false,
  voting = false,
  onVote,
  onFlag,
  onCommentsClick,
  onShare,
}: ReportMetaProps) {
  return (
    <div className="flex items-start justify-between gap-3 text-xs text-muted-foreground pt-3 border-t">
      <div className="flex flex-col gap-2 col-span-1">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{formatDistanceToNow(new Date(report.createdAt))}</span>
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
        {/* Flag Button */}
        <Button
          variant="ghost"
          size="sm"
          className="shrink-0"
          onClick={onFlag}
          aria-label={flagged ? "Unflag report" : "Flag report"}
          disabled={flagLoading}
        >
          <Flag className={`h-3 w-3 ${flagged ? "text-red-500" : ""}`} />
          <span className="sr-only">{flagged ? "Unflag" : "Flag"}</span>
        </Button>

        {/* Comments Button - only show if onCommentsClick is provided */}
        {onCommentsClick && (
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 shrink-0"
            onClick={() => onCommentsClick(report.id)}
            aria-label="View comments"
          >
            <MessageCircle className="h-3 w-3" />
            {report._count &&
            typeof report._count?.comments === "number" &&
            report._count.comments > 0 ? (
              <span>{report._count.comments}</span>
            ) : null}
          </Button>
        )}

        {/* Vote Button */}
        <Button
          variant="ghost"
          size="sm"
          className="shrink-0"
          onClick={() => onVote?.("helpful")}
          aria-label="Thumbs up"
          disabled={voting}
        >
          <ThumbsUp className="h-3 w-3 mr-1" />
          {votes !== undefined
            ? votes
            : report._count && typeof report._count?.votes === "number"
            ? report._count.votes
            : null}
        </Button>

        {/* Share Button */}
        {onShare && (
          <Button
            variant="ghost"
            size="sm"
            className="shrink-0"
            onClick={onShare}
            aria-label="Share report"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
