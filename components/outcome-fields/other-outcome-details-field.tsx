import React from "react";
import { Outcome } from "@/lib/types";

export default function OtherOutcomeDetailsField({
  value,
  onChange,
}: {
  value: Partial<Outcome>;
  onChange: (data: Partial<Outcome>) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Other Outcome Details</label>
      <textarea
        value={value.otherOutcomeDetails || ""}
        onChange={(e) => onChange({ otherOutcomeDetails: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="Describe other outcome..."
      />
    </div>
  );
}
