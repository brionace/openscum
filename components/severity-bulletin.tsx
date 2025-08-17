"use client";

import { AlertTriangle } from "lucide-react";
import { cn, severityColors } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="flex gap-2 text-xs">
      <AlertTriangle
        className={cn("h-3 w-3 shrink-0", colorClass)}
        aria-hidden="true"
      />
      <p>
        <span className="font-semibold">{meta.title}:</span> {meta.description}
      </p>
    </div>
  );
}
