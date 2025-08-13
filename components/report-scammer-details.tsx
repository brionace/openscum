"use client";

import React from "react";
import { Phone, Mail, Globe, User, ShieldQuestion, Info } from "lucide-react";
import { cn, severityColors } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const colorClass =
    severityColors[severity as keyof typeof severityColors] || "text-slate-600";

  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-md border border-slate-200 p-1 text-xs bg-gray-50"
    >
      <AccordionItem value="scammer-details" className="border-0 flex-1">
        <AccordionTrigger className="flex p-0 h-auto min-h-0">
          <div className="flex items-center">
            <Info className="h-4 w-4 mr-2" />
            <span className="text-muted-foreground">Scammer info</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-2 p-0 text-xs">
          <div className="space-y-2 [&_div>div]:text-muted-foreground [&_div>div]:text-xs">
            {scammerDetails.phoneNumber && (
              <div className="flex items-start gap-2 text-sm">
                <Phone
                  className={`h-4 w-4 shrink-0 ${
                    severityColors[severity as keyof typeof severityColors]
                  }`}
                  aria-label="Phone number"
                />
                <div className="font-mono text-inherit">
                  {scammerDetails.phoneNumber}
                </div>
              </div>
            )}
            {scammerDetails.email && (
              <div className="flex items-start gap-2 text-sm">
                <Mail
                  className={`h-4 w-4 shrink-0 ${
                    severityColors[severity as keyof typeof severityColors]
                  }`}
                  aria-label="Email address"
                />
                <div className="font-mono text-inherit">
                  {scammerDetails.email}
                </div>
              </div>
            )}
            {scammerDetails.website && (
              <div className="flex items-start gap-2 text-sm">
                <Globe
                  className={`h-4 w-4 shrink-0 ${
                    severityColors[severity as keyof typeof severityColors]
                  }`}
                  aria-label="Website"
                />
                <div className="font-mono break-all text-inherit">
                  {scammerDetails.website}
                </div>
              </div>
            )}
            {scammerDetails.username && (
              <div className="flex items-start gap-2 text-sm">
                <User
                  className={`h-4 w-4 shrink-0 ${
                    severityColors[severity as keyof typeof severityColors]
                  }`}
                  aria-label="Username"
                />
                <div className="font-mono break-all">
                  {scammerDetails.username}
                </div>
              </div>
            )}
            {scammerDetails.name && (
              <div className="flex items-start gap-2 text-sm">
                <User
                  className={`h-4 w-4 shrink-0 ${
                    severityColors[severity as keyof typeof severityColors]
                  }`}
                  aria-label="Name"
                />
                <div className="font-mono">{scammerDetails.name}</div>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
