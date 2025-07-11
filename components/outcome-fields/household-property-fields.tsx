import React from "react";
export default function HouseholdPropertyFields({
  value,
  onChange,
}: {
  value: any;
  onChange: (data: any) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Property Type</label>
      <input
        type="text"
        value={value.propertyType || ""}
        onChange={(e) => onChange({ propertyType: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. Laptop"
      />
      <label>Property Description</label>
      <input
        type="text"
        value={value.propertyDescription || ""}
        onChange={(e) => onChange({ propertyDescription: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="Silver MacBook Pro"
      />
      <label>Property Value</label>
      <input
        type="number"
        value={value.propertyValue || ""}
        onChange={(e) =>
          onChange({ propertyValue: parseFloat(e.target.value) })
        }
        className="border rounded px-2 py-1 w-full"
        placeholder="1000"
      />
      <label>Property Recovered</label>
      <input
        type="checkbox"
        checked={!!value.propertyRecovered}
        onChange={(e) => onChange({ propertyRecovered: e.target.checked })}
      />
    </div>
  );
}
