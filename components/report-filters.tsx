import React, { useState } from "react";
import { TypeDropdown } from "@/components/ui/type-dropdown";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

type Option = { id: string; name: string };

export type ReportFiltersProps = {
  scamTypes?: Option[];
  locations?: Option[];
  severities?: Option[];
  value?: {
    scamType?: Option | null;
    location?: Option | null;
    severity?: Option | null;
  };
  onChange: (value: {
    scamType?: Option | null;
    location?: Option | null;
    severity?: Option | null;
  }) => void;
  onSearchType?: (q: string) => void;
  onSearchLocation?: (q: string) => void;
  onSearchSeverity?: (q: string) => void;
};

export function ReportFilters({
  scamTypes,
  locations,
  severities,
  value,
  onChange,
  onSearchType,
  onSearchLocation,
  onSearchSeverity,
}: ReportFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg p-4">
      {/* Filter summary */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {value?.scamType && (
            <Badge variant="outline" className="text-xs">
              {value.scamType.name}
            </Badge>
          )}
          {value?.location && (
            <Badge variant="outline" className="text-xs">
              {value.location.name}
            </Badge>
          )}
          {value?.severity && (
            <Badge variant="outline" className="text-xs">
              {value.severity.name}
            </Badge>
          )}
        </div>
        <Button
          type="button"
          aria-label={showFilters ? "Hide filters" : "Show filters"}
          variant="ghost"
          className="rounded-full hover:bg-gray-100"
          onClick={() => {
            setShowFilters((prev) => !prev);
          }}
        >
          <SlidersHorizontal className="w-3 h-3" />
        </Button>
      </div>
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col lg:flex-row gap-4 items-center flex-wrap mt-6">
          <TypeDropdown
            label="Scam Type"
            value={value?.scamType ?? null}
            onChange={(scamType) => {
              if (Array.isArray(scamType)) {
                onChange({ ...value, scamType: scamType[0] ?? null });
              } else {
                onChange({ ...value, scamType });
              }
            }}
            options={scamTypes ?? []}
            onSearch={onSearchType ?? (() => {})}
            placeholder="Search scam type..."
            showAllOnFocus
          />
          <TypeDropdown
            label="Location"
            value={value?.location ?? null}
            onChange={(location) => {
              if (Array.isArray(location)) {
                onChange({ ...value, location: location[0] ?? null });
              } else {
                onChange({ ...value, location });
              }
            }}
            options={locations ?? []}
            onSearch={onSearchLocation ?? (() => {})}
            placeholder="Search location..."
            showAllOnFocus
          />
          <TypeDropdown
            label="Severity"
            value={value?.severity ?? null}
            onChange={(severity) => {
              if (Array.isArray(severity)) {
                // If severity is an array, pick the first item or null
                onChange({ ...value, severity: severity[0] ?? null });
              } else {
                onChange({ ...value, severity });
              }
            }}
            options={severities ?? []}
            onSearch={onSearchSeverity ?? (() => {})}
            placeholder="Search severity..."
            showAllOnFocus
          />
        </div>
      )}
    </div>
  );
}
