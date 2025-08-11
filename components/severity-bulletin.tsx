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
    <Accordion
      type="single"
      collapsible
      className={cn(
        "w-full flex items-start gap-2 rounded-md border border-slate-200 bg-slate-50",
        compact ? "p-1" : "p-2",
        className
      )}
      aria-label={`Severity bulletin: ${meta.title}`}
    >
      <AccordionItem value="severity" className="border-0 flex-1">
        <AccordionTrigger className="p-0 h-auto text-xs text-muted-foreground min-h-0">
          <div className="flex items-center gap-1">
            <AlertTriangle
              className={cn("h-4 w-4 shrink-0", colorClass)}
              aria-hidden="true"
            />
            {meta.title}
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-2 p-0 text-muted-foreground text-xs">
          {meta.description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
