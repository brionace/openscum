import React from "react";
export default function PhoneBrandFields({
  value,
  onChange,
}: {
  value: any;
  onChange: (data: any) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Phone Brand</label>
      <input
        type="text"
        value={value.phoneBrand || ""}
        onChange={(e) => onChange({ phoneBrand: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. Apple"
      />
      <label>Phone Model</label>
      <input
        type="text"
        value={value.phoneModel || ""}
        onChange={(e) => onChange({ phoneModel: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. iPhone 13"
      />
      <label>Phone Recovered</label>
      <input
        type="checkbox"
        checked={!!value.phoneRecovered}
        onChange={(e) => onChange({ phoneRecovered: e.target.checked })}
      />
    </div>
  );
}
