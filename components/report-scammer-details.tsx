"use client";

import React from "react";
import { Phone, Mail, Globe, User } from "lucide-react";

interface ScammerDetails {
  phoneNumber?: string;
  email?: string;
  website?: string;
  socialMedia?: string;
  name?: string;
}

interface ReportScammerDetailsProps {
  scammerDetails: ScammerDetails | null | undefined;
}

export function ReportScammerDetails({
  scammerDetails,
}: ReportScammerDetailsProps) {
  if (!scammerDetails) {
    return null;
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="font-semibold text-gray-800 mb-4">Scammer Details</div>
      <div className="space-y-2 mb-4">
        {scammerDetails.phoneNumber && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-red-500" />
            <span className="font-mono">{scammerDetails.phoneNumber}</span>
          </div>
        )}
        {scammerDetails.email && (
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-orange-500" />
            <span className="font-mono">{scammerDetails.email}</span>
          </div>
        )}
        {scammerDetails.website && (
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4 text-blue-500" />
            <span className="font-mono break-all">
              {scammerDetails.website}
            </span>
          </div>
        )}
        {scammerDetails.socialMedia && (
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4 text-green-500" />
            <span className="font-mono break-all">
              {scammerDetails.socialMedia}
            </span>
          </div>
        )}
        {scammerDetails.name && (
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-green-500" />
            <span className="font-mono">{scammerDetails.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
