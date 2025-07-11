import React from "react";
import { TrendingUp, MapPin } from "lucide-react";
import { ScamReport } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportCard } from "@/components/report-card";

interface HighlightSectionProps {
  title: string;
  icon: "trending" | "area";
  reports: ScamReport[];
  emptyText?: string;
}

export function HighlightSection({
  title,
  icon,
  reports,
  emptyText,
}: HighlightSectionProps) {
  const Icon = icon === "trending" ? TrendingUp : MapPin;
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <Icon className="h-5 w-5 text-blue-600" />
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {reports.length === 0 ? (
          <div className="text-gray-400 text-sm text-center py-4">
            {emptyText || "No alerts found."}
          </div>
        ) : (
          reports.map((report) => (
            <ReportCard key={report.id} report={report} outcomeTypes={[]} />
          ))
        )}
      </CardContent>
    </Card>
  );
}
