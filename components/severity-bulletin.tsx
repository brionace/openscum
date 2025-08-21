"use client";

import { AlertTriangle, Info } from "lucide-react";
import { cn, Severity, SEVERITY_META, severityColors } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <a href="/info/severity" className="flex items-center gap-1 text-xs">
      <AlertTriangle
        className={cn("h-3 w-3", colorClass)}
        aria-hidden="true"
        aria-label={meta.title}
      />
      {/* <span className={cn(colorClass)}>{meta.title}</span> */}
    </a>
  );
}
