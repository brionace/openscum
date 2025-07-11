import React from "react";
import { countryCodeAndName } from "@/lib/country";

function CurrencySearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (currency: string) => void;
}) {
  const [search, setSearch] = React.useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState(-1);
  const optionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const options = countryCodeAndName();
  const filtered =
    search.length === 0
      ? []
      : options.filter((c) => {
          const s = search.toLowerCase();
          return (
            c.countries.some((country) =>
              (country || "").toLowerCase().includes(s)
            ) ||
            (c.currency_code || "").toLowerCase().includes(s) ||
            (c.currency_name || "").toLowerCase().includes(s)
          );
        });

  // Scroll highlighted option into view
  React.useEffect(() => {
    if (highlighted >= 0 && optionRefs.current[highlighted]) {
      optionRefs.current[highlighted]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted, filtered.length]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (
      e.key === "Enter" &&
      highlighted >= 0 &&
      highlighted < filtered.length
    ) {
      e.preventDefault();
      onChange(filtered[highlighted].currency_code);
      setSearch("");
      setShowDropdown(false);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={search || value || ""}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
          if (search.length === 0 && e.target.value.length > 0) {
            setHighlighted(0);
          }
        }}
        onFocus={() => {
          setShowDropdown(true);
          if (filtered.length > 0) setHighlighted(0);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Type country, currency code, or name..."
        className="border rounded px-2 py-1 w-full"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {showDropdown && filtered.length > 0 && (
        <div className="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto bg-white border rounded shadow">
          {filtered.map((c, idx) => (
            <div
              key={c.currency_code}
              ref={(el) => (optionRefs.current[idx] = el)}
              className={`cursor-pointer px-2 py-1 ${
                highlighted === idx ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onMouseDown={() => {
                onChange(c.currency_code);
                setSearch("");
                setShowDropdown(false);
              }}
              onMouseEnter={() => setHighlighted(idx)}
            >
              <span className="font-medium">
                {c.currency_code} - {c.currency_name}
              </span>
              <span className="text-xs text-gray-500">
                {c.countries.join(", ")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FinancialImpactFields({
  value,
  onChange,
}: {
  value: any;
  onChange: (data: any) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Money Lost</label>
      <input
        type="number"
        value={value.moneyLost || ""}
        onChange={(e) => onChange({ moneyLost: parseFloat(e.target.value) })}
        className="border rounded px-2 py-1 w-full"
      />
      <label>Money Requested</label>
      <input
        type="number"
        value={value.moneyRequested || ""}
        onChange={(e) =>
          onChange({ moneyRequested: parseFloat(e.target.value) })
        }
        className="border rounded px-2 py-1 w-full"
      />
      <label>Currency</label>
      <CurrencySearchInput
        value={value.currency || ""}
        onChange={(currency) => onChange({ currency })}
      />
      <label>Payment Method</label>
      <input
        type="text"
        value={value.paymentMethod || ""}
        onChange={(e) => onChange({ paymentMethod: e.target.value })}
        className="border rounded px-2 py-1 w-full"
      />
      <label>Account Details</label>
      <input
        type="text"
        value={value.accountDetails || ""}
        onChange={(e) => onChange({ accountDetails: e.target.value })}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
  );
}
