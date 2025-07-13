"use client";

import React, { useRef, useState } from "react";
import { ReportFormData } from "@/lib/types";
import { AlertTriangle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReportForm } from "./report-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import VisuallyHidden from "./ui/visually-hidden";

interface QuickReportButtonProps {
  onReportSubmitted?: () => void;
  prefill?: {
    phoneNumber?: string;
    email?: string;
    website?: string;
  };
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function QuickReportButton({
  onReportSubmitted,
  prefill,
  open,
  onOpenChange,
}: QuickReportButtonProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const isControlled =
    typeof open === "boolean" && typeof onOpenChange === "function";
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open! : internalOpen;
  const setIsOpen = isControlled ? onOpenChange! : setInternalOpen;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: any) => {
    // TODO: Fix type mismatch with ReportForm interface
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setIsOpen(false);
        onReportSubmitted?.();
      } else {
        alert(result.error || "Failed to submit report");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Failed to submit report. Check the content is added correctly and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50 md:w-auto md:px-6 md:rounded-full"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            <span className="hidden lg:inline">Report Scam</span>
          </div>
        </Button>
      </DialogTrigger> */}
      <DialogContent
        ref={modalContentRef}
        className="lg:max-w-3xl mx-auto h-full max-h-full overflow-y-auto p-0"
      >
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
        </VisuallyHidden>
        <ReportForm
          modalContentRef={modalContentRef}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          prefill={prefill ? { scammerDetails: prefill } : undefined}
        />
      </DialogContent>
    </Dialog>
  );
}
