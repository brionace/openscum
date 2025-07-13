import { useEffect, useState } from "react";
import { Outcome, OutcomeType } from "@/lib/types";
import FinancialImpactFields from "./outcome-fields/financial-impact-fields";
import SocialMediaAccountFields from "./outcome-fields/social-media-account-fields";
import PhoneBrandFields from "./outcome-fields/phone-brand-fields";
import VehicleBrandFields from "./outcome-fields/vehicle-brand-fields";
import HouseholdPropertyFields from "./outcome-fields/household-property-fields";
import OtherOutcomeDetailsField from "./outcome-fields/other-outcome-details-field";
import { outcomeFieldsConfig } from "./outcome-fields-config";
import { OutcomeFieldsDynamic } from "./outcome-fields-dynamic";

export default function OutcomeSection({
  outcomes,
  setOutcomes,
}: {
  outcomes: Partial<Outcome>[];
  setOutcomes: (outcomes: Partial<Outcome>[]) => void;
}) {
  const [outcomeTypes, setOutcomeTypes] = useState<OutcomeType[]>([]);

  useEffect(() => {
    fetch("/api/outcome-types")
      .then((res) => res.json())
      .then((data) => setOutcomeTypes(data));
  }, []);

  const addOutcome = () =>
    setOutcomes([...outcomes, { outcomeType: outcomeTypes[0]?.id || "" }]);
  const removeOutcome = (idx: number) =>
    setOutcomes(outcomes.filter((_, i) => i !== idx));
  const updateOutcome = (idx: number, data: Partial<Outcome>) =>
    setOutcomes(outcomes.map((o, i) => (i === idx ? { ...o, ...data } : o)));

  return (
    <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
      <h3 className="text-xl font-bold mb-4">Outcome</h3>
      {(Array.isArray(outcomes) ? outcomes : []).map((outcome, idx) => {
        // Find the outcome type object by id
        const typeObj = outcomeTypes.find((t) => t.id === outcome.outcomeType);
        const outcomeTypeValue = typeObj?.value || "";
        return (
          <div key={idx} className="mb-6 p-4 rounded bg-gray-50 border">
            <div className="flex items-center gap-2 mb-2">
              <label htmlFor={`outcome-type-select-${idx}`} className="sr-only">
                Outcome Type
              </label>
              <select
                id={`outcome-type-select-${idx}`}
                value={outcome.outcomeType}
                onChange={(e) =>
                  updateOutcome(idx, { outcomeType: e.target.value })
                }
                className="border rounded px-2 py-1"
                title="Outcome Type"
              >
                {Array.isArray(outcomeTypes)
                  ? outcomeTypes.map((type: OutcomeType) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))
                  : null}
              </select>
              <button
                type="button"
                onClick={() => removeOutcome(idx)}
                className="ml-2 text-red-600"
              >
                Remove
              </button>
            </div>
            <OutcomeFieldsDynamic
              outcomeType={outcomeTypeValue}
              value={outcome}
              onChange={(data) => {
                const updated = outcomes.map((o, i) =>
                  i === idx ? { ...o, ...data } : o
                );
                setOutcomes(updated);
              }}
            />
          </div>
        );
      })}
      <button
        type="button"
        onClick={addOutcome}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Outcome
      </button>
    </div>
  );
}
