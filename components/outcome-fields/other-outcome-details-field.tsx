import React from "react";
export default function OtherOutcomeDetailsField({
  value,
  onChange,
}: {
  value: any;
  onChange: (data: any) => void;
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
