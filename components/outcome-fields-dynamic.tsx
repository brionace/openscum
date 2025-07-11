import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CurrencySearchInput } from "@/components/report-form";
import { outcomeFieldsConfig } from "./outcome-fields-config";

export function OutcomeFieldsDynamic({
  outcomeType,
  value,
  onChange,
}: {
  outcomeType: string;
  value: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
}) {
  const fields = outcomeFieldsConfig[outcomeType] || [];
  return (
    <div className="space-y-4">
      {fields.map((field) => {
        if (field.type === "number") {
          return (
            <div key={field.label}>
              <label className="block font-medium mb-1">{field.label}</label>
              <Input
                type="number"
                value={value[field.label] || ""}
                onChange={(e) =>
                  onChange({ ...value, [field.label]: e.target.value })
                }
                placeholder={field.placeholder}
              />
            </div>
          );
        }
        if (field.type === "currency") {
          return (
            <div key={field.label}>
              <label className="block font-medium mb-1">{field.label}</label>
              <CurrencySearchInput
                onSelect={(code) => onChange({ ...value, [field.label]: code })}
              />
            </div>
          );
        }
        if (field.type === "textarea") {
          return (
            <div key={field.label}>
              <label className="block font-medium mb-1">{field.label}</label>
              <Textarea
                value={value[field.label] || ""}
                onChange={(e) =>
                  onChange({ ...value, [field.label]: e.target.value })
                }
                placeholder={field.placeholder}
              />
            </div>
          );
        }
        // Default to text input
        return (
          <div key={field.label}>
            <label className="block font-medium mb-1">{field.label}</label>
            <Input
              value={value[field.label] || ""}
              onChange={(e) =>
                onChange({ ...value, [field.label]: e.target.value })
              }
              placeholder={field.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
}
