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
    <div className="space-y-2 [&_div>p]:text-muted-foreground [&_div>div]:text-xs py-3">
      {scammerDetails.phoneNumber && (
        <div className="flex items-start gap-2 text-sm">
          <Phone
            className="inline-block mr-2 h-3 w-3 shrink-0"
            aria-label="Phone number"
          />
          <p>{scammerDetails.phoneNumber}</p>
        </div>
      )}
      {scammerDetails.email && (
        <div className="flex items-start gap-2 text-sm">
          <Mail className="h-3 w-3 shrink-0" aria-label="Email address" />
          <p>{scammerDetails.email}</p>
        </div>
      )}
      {scammerDetails.website && (
        <div className="flex items-start gap-2 text-sm">
          <Globe className="h-3 w-3 shrink-0" aria-label="Website" />
          <p>{scammerDetails.website}</p>
        </div>
      )}
      {scammerDetails.username && (
        <div className="flex items-start gap-2 text-sm">
          <User className="h-3 w-3 shrink-0" aria-label="Username" />
          <p>{scammerDetails.username}</p>
        </div>
      )}
      {scammerDetails.name && (
        <div className="flex items-start gap-2 text-sm">
          <User className="h-3 w-3 shrink-0" aria-label="Name" />
          <p>{scammerDetails.name}</p>
        </div>
      )}
      {scammerDetails.other && (
        <div className="flex items-start gap-2 text-sm">
          <Bitcoin className="h-3 w-3 shrink-0" aria-label="Other" />
          <p>
            {scammerDetails.other
              .split(/<br\s*\/?>|,/i)
              .map((item) => item.trim())
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
