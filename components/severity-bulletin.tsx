"use client";

import { AlertTriangle } from "lucide-react";
import { cn, severityColors } from "@/lib/utils";

type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

const SEVERITY_META: Record<Severity, { title: string; description: string }> =
  {
    LOW: {
      title: "Low risk",
      description:
        "Few reports recently. Stay aware and verify before engaging.",
    },
    MEDIUM: {
      title: "Elevated risk",
      description: "Reports are increasing. Exercise extra caution.",
    },
    HIGH: {
      title: "High risk",
      description:
        "Significant recent activity. Avoid interacting where possible.",
    },
    CRITICAL: {
      title: "Critical risk",
      description: "Major surge detected. Known active scam—do not engage.",
    },
  };

export function SeverityBulletin({
  severity,
  className,
  compact = false,
}: {
  severity?: Severity | null;
  className?: string;
  compact?: boolean;
}) {
  if (!severity) return null;

  const meta = SEVERITY_META[severity];
  const colorClass =
    severityColors[severity as keyof typeof severityColors] || "text-slate-600";

  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded-md border border-slate-200 bg-slate-50 p-2",
        // compact && "p-1",
        className
      )}
      aria-label={`Severity bulletin: ${meta.title}`}
    >
      <AlertTriangle className={cn("h-4 w-4 shrink-0", colorClass)} />
      <div className="min-w-0">
        <div className="text-xs font-semibold">{meta.title}</div>
        {!compact && (
          <div className="text-xs text-slate-600">{meta.description}</div>
        )}
      </div>
    </div>
  );
}
