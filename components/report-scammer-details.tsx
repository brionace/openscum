"use client";

import React from "react";
import { Phone, Mail, Globe, User, Bitcoin } from "lucide-react";

interface ScammerDetails {
  phoneNumber?: string;
  email?: string;
  website?: string;
  username?: string;
  name?: string;
  other?: string;
}

interface ReportScammerDetailsProps {
  scammerDetails: ScammerDetails | null | undefined;
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
}

export function ReportScammerDetails({
  scammerDetails,
  severity,
}: ReportScammerDetailsProps) {
  if (!scammerDetails) {
    return null;
  }

  const hasAny = Boolean(
    scammerDetails.phoneNumber ||
      scammerDetails.email ||
      scammerDetails.website ||
      scammerDetails.username ||
      scammerDetails.name ||
      scammerDetails.other
  );

  if (!hasAny) return null;

  return (
    <div className="space-y-2 [&_div>div]:text-muted-foreground [&_div>div]:text-xs">
      {scammerDetails.phoneNumber && (
        <div className="flex items-start gap-2 text-sm">
          <Phone
            className="inline-block mr-2 h-3 w-3 shrink-0"
            aria-label="Phone number"
          />
          <div className="font-mono text-inherit">
            {scammerDetails.phoneNumber}
          </div>
        </div>
      )}
      {scammerDetails.email && (
        <div className="flex items-start gap-2 text-sm">
          <Mail className="h-3 w-3 shrink-0" aria-label="Email address" />
          <div className="font-mono text-inherit">{scammerDetails.email}</div>
        </div>
      )}
      {scammerDetails.website && (
        <div className="flex items-start gap-2 text-sm">
          <Globe className="h-3 w-3 shrink-0" aria-label="Website" />
          <div className="font-mono break-all text-inherit">
            {scammerDetails.website}
          </div>
        </div>
      )}
      {scammerDetails.username && (
        <div className="flex items-start gap-2 text-sm">
          <User className="h-3 w-3 shrink-0" aria-label="Username" />
          <div className="font-mono break-all">{scammerDetails.username}</div>
        </div>
      )}
      {scammerDetails.name && (
        <div className="flex items-start gap-2 text-sm">
          <User className="h-3 w-3 shrink-0" aria-label="Name" />
          <div className="font-mono">{scammerDetails.name}</div>
        </div>
      )}
      {scammerDetails.other && (
        <div className="flex items-start gap-2 text-sm">
          <Bitcoin className="h-3 w-3 shrink-0" aria-label="Other" />
          <div className="font-mono break-all">
            {scammerDetails.other
              .split(/<br\s*\/?>|,/i)
              .map((item) => item.trim())
              .join(", ")}
          </div>
        </div>
      )}
    </div>
  );
}
