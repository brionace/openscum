import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Phone } from "lucide-react";

interface LearnActionsProps {
  direction?: "row" | "col";
  className?: string;
}

export function LearnActions({
  direction = "col",
  className = "",
}: LearnActionsProps) {
  const flexClass = direction === "row" ? "flex-row gap-2" : "flex-col gap-2";
  return (
    <div className={`flex ${flexClass} ${className}`}>
      <Link href="/learn/category/prevention">
        <Button asChild variant="outline" className="w-full justify-start">
          <span>
            <Shield className="h-4 w-4 mr-2" />
            <span>Common Scam Tactics</span>
          </span>
        </Button>
      </Link>
      <Link href="/learn/category/guide">
        <Button asChild variant="outline" className="w-full justify-start">
          <span>
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span>How to Verify</span>
          </span>
        </Button>
      </Link>
      <Link href="/learn/category/report_to_authorities">
        <Button asChild variant="outline" className="w-full justify-start">
          <span>
            <Phone className="h-4 w-4 mr-2" />
            <span>Report to Authorities</span>
          </span>
        </Button>
      </Link>
    </div>
  );
}
