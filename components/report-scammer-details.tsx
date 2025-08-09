"use client";

import React from "react";
import { Phone, Mail, Globe, User, ShieldQuestion, Info } from "lucide-react";
import { severityColors } from "@/lib/utils";

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

  return (
    <div className="p-2 bg-gray-50 rounded-lg border border-slate-100">
      <p className="flex items-center gap-2 mb-4 text-xs bg-slate-100 p-2 rounded-lg">
        <Info className="h-4 w-4 text-red-500" aria-label="Phone number" />
        <span className="font-semibold">Scammer Info</span>
      </p>
      <div className="space-y-2">
        {scammerDetails.phoneNumber && (
          <div className="flex items-start gap-2 text-sm">
            <Phone
              className={`h-4 w-4 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Phone number"
            />
            <span className="font-mono">{scammerDetails.phoneNumber}</span>
          </div>
        )}
        {scammerDetails.email && (
          <div className="flex items-start gap-2 text-sm">
            <Mail
              className={`h-4 w-4 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Email address"
            />
            <span className="font-mono">{scammerDetails.email}</span>
          </div>
        )}
        {scammerDetails.website && (
          <div className="flex items-start gap-2 text-sm">
            <Globe
              className={`h-4 w-4 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Website"
            />
            <span className="font-mono break-all">
              {scammerDetails.website}
            </span>
          </div>
        )}
        {scammerDetails.username && (
          <div className="flex items-start gap-2 text-sm">
            <User
              className={`h-4 w-4 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Username"
            />
            <span className="font-mono break-all">
              {scammerDetails.username}
            </span>
          </div>
        )}
        {scammerDetails.name && (
          <div className="flex items-start gap-2 text-sm">
            <User
              className={`h-4 w-4 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Name"
            />
            <span className="font-mono">{scammerDetails.name}</span>
          </div>
        )}
        {scammerDetails.other && (
          <div className="flex items-start gap-2 text-sm">
            <ShieldQuestion
              className={`h-4 w-4 shrink-0 ${
                severityColors[severity as keyof typeof severityColors]
              }`}
              aria-label="Other"
            />
            <div className="font-mono break-all">
              {scammerDetails.other
                .split(/<br\s*\/?>|,/i)
                .map((item) => item.trim())
                .join(", ")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
