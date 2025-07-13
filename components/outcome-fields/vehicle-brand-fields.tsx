import React from "react";
import { Outcome } from "@/lib/types";

export default function VehicleBrandFields({
  value,
  onChange,
}: {
  value: Partial<Outcome>;
  onChange: (data: Partial<Outcome>) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Vehicle Brand</label>
      <input
        type="text"
        value={value.vehicleBrand || ""}
        onChange={(e) => onChange({ vehicleBrand: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. Toyota"
      />
      <label>Vehicle Model</label>
      <input
        type="text"
        value={value.vehicleModel || ""}
        onChange={(e) => onChange({ vehicleModel: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. Corolla"
      />
      <label>Vehicle Plate</label>
      <input
        type="text"
        value={value.vehiclePlate || ""}
        onChange={(e) => onChange({ vehiclePlate: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="ABC-123"
      />
      <label>Vehicle Recovered</label>
      <input
        type="checkbox"
        checked={!!value.vehicleRecovered}
        onChange={(e) => onChange({ vehicleRecovered: e.target.checked })}
      />
    </div>
  );
}
