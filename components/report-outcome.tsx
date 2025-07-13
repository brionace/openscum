import { Outcome } from "@/lib/types";

export function ReportOutcome({
  outcome,
}: {
  outcome: Outcome[] | null | undefined;
}): JSX.Element[] | null {
  // Ensure outcome is an array before mapping
  if (!outcome || !Array.isArray(outcome)) {
    return null;
  }

  return outcome
    .map((outcome: Outcome, idx: number) => {
      const hasValues = Object.entries(outcome).some(
        ([key, value]) =>
          key !== "outcomeType" &&
          value !== null &&
          value !== undefined &&
          value !== ""
      );
      if (!hasValues) return null;
      return (
        <div
          key={idx}
          className={`border rounded-lg p-3 mb-2 ${
            outcome.outcomeType === "FINANCIAL"
              ? "bg-red-50 border-red-400"
              : "bg-gray-50 border-gray-300"
          }`}
        >
          <div
            className={`font-semibold mb-1 ${
              outcome.outcomeType === "FINANCIAL"
                ? "text-red-700"
                : "text-gray-800"
            }`}
          >
            {outcome.outcomeType === "FINANCIAL"
              ? "Financial Impact"
              : outcome.outcomeType}
          </div>
          {Object.entries(outcome).map(([key, value]) => {
            if (key === "outcomeType") return null;
            if (value === null || value === undefined || value === "")
              return null;
            if (
              outcome.outcomeType === "FINANCIAL" &&
              (key === "moneyLost" || key === "moneyRequested")
            ) {
              return (
                <div key={key} className="text-red-900">
                  {key === "moneyLost" ? "Money Lost:" : "Money Requested:"}{" "}
                  <span className="font-semibold">
                    {outcome.currency || "$"}
                    {value}
                  </span>
                </div>
              );
            }
            return (
              <div key={key} className="text-red-900">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                : <span className="font-semibold">{String(value)}</span>
              </div>
            );
          })}
        </div>
      );
    })
    .filter((el): el is JSX.Element => el !== null);
}
