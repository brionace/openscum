"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, AlertTriangle, DollarSign } from "lucide-react";
import currencies from "country-json/src/country-by-currency-code.json";
import flags from "country-json/src/country-by-flag.json";
import capitals from "country-json/src/country-by-capital-city.json";
import cities from "country-json/src/country-by-capital-city.json";
import { countryCodeAndName, countryCity } from "@/lib/country";
import { TypeDropdown } from "@/components/ui/type-dropdown";

const reportSchema = z.object({
  description: z.string().min(20, "Description must be at least 20 characters"),
  severity: z.string().default("MEDIUM"),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
  socialMedia: z.string().optional(),
  moneyLost: z.number().min(0).optional(),
  moneyRequested: z.number().min(0).optional(),
  reporterName: z.string().optional(),
  reporterEmail: z.string().email().optional().or(z.literal("")),
  anonymous: z.boolean().default(true),
  scamTypeId: z.string().min(1, "Please select a scam type"),
  tags: z.array(z.string()).optional(), // <-- add tags as array of string IDs
  city: z.string().optional(),
  country: z.string().optional(),
});

type ReportFormData = z.infer<typeof reportSchema>;

interface ReportFormProps {
  onSubmit: (data: ReportFormData & { captchaToken: string }) => Promise<void>;
  isSubmitting?: boolean;
  prefill?: {
    phoneNumber?: string;
    email?: string;
    website?: string;
  };
}

const severityOptions = [
  { value: "LOW", label: "Just Suspicious" },
  { value: "MEDIUM", label: "Somewhat Risky" },
  { value: "HIGH", label: "Very Risky" },
  { value: "CRITICAL", label: "Extremely Dangerous" },
];

export function ReportForm({
  onSubmit,
  isSubmitting = false,
  prefill,
}: ReportFormProps) {
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [scamTypeOptions, setScamTypeOptions] = useState<
    { id: string; name: string }[]
  >([]);
  const [selectedScamType, setSelectedScamType] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [scamTypeSearch, setScamTypeSearch] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [currencySearch, setCurrencySearch] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState(countryCodeAndName());
  const [highlightedCurrencyIndex, setHighlightedCurrencyIndex] = useState(-1);
  const [selectedCurrency, setSelectedCurrency] = useState<{
    currency_code: string;
    currency_name: string;
    countries: string[];
  } | null>({
    currency_code: "USD",
    currency_name: "US Dollar",
    countries: ["United States"],
  });
  const [locationSearch, setLocationSearch] = useState("");
  const [highlightedLocationIndex, setHighlightedLocationIndex] = useState(-1);
  const [locationOptions, setLocationOptions] = useState<
    { city: string; country: string }[]
  >([]);
  const [selectedLocation, setSelectedLocation] = useState<{
    city: string;
    country: string;
  } | null>(null);
  const [paraphrasing, setParaphrasing] = useState(false);
  const [paraphraseError, setParaphraseError] = useState("");
  const isProduction = process.env.NODE_ENV === "production";

  const form = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      description: "",
      severity: severityOptions[1].value, // Default to Medium Risk
      phoneNumber: prefill?.phoneNumber || "",
      email: prefill?.email || "",
      website: prefill?.website || "",
      socialMedia: "",
      moneyLost: undefined,
      moneyRequested: undefined,
      reporterName: "",
      reporterEmail: "",
      anonymous: true,
    },
  });

  // Focus relevant input if prefill is present
  useEffect(() => {
    if (prefill) {
      if (prefill.phoneNumber) {
        form.setValue("phoneNumber", prefill.phoneNumber);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='phoneNumber']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (prefill.email) {
        form.setValue("email", prefill.email);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='email']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (prefill.website) {
        form.setValue("website", prefill.website);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='website']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill]);

  // --- Scam Type Dropdown logic ---
  useEffect(() => {
    if (!scamTypeSearch) {
      setScamTypeOptions([]);
      return;
    }
    fetch(`/api/scam-types?q=${encodeURIComponent(scamTypeSearch)}`)
      .then(async (res) => {
        if (!res.ok) return [];
        const text = await res.text();
        if (!text) return [];
        try {
          return JSON.parse(text);
        } catch {
          return [];
        }
      })
      .then(setScamTypeOptions);
  }, [scamTypeSearch]);

  // --- Tag Dropdown logic ---
  const [tagOptions, setTagOptions] = useState<{ id: string; name: string }[]>(
    []
  );
  const [selectedTags, setSelectedTags] = useState<
    { id: string; name: string }[]
  >([]);
  const [tagSearch, setTagSearch] = useState("");
  useEffect(() => {
    if (!tagSearch) {
      setTagOptions([]);
      return;
    }
    fetch(`/api/scam-types?q=${encodeURIComponent(tagSearch)}`)
      .then(async (res) => {
        if (!res.ok) return [];
        const text = await res.text();
        if (!text) return [];
        try {
          return JSON.parse(text);
        } catch {
          return [];
        }
      })
      .then(setTagOptions);
  }, [tagSearch]);

  // Update handleSubmit to include tags
  const handleSubmit = async (data: ReportFormData) => {
    // In development, skip CAPTCHA validation
    if (isProduction && !captchaToken) {
      alert("Please complete the CAPTCHA verification");
      return;
    }
    await onSubmit({
      ...data,
      scamTypeId: selectedScamType ? selectedScamType.id : "",
      tags: selectedTags.map((t) => t.id),
      captchaToken: captchaToken || "dev-bypass",
      city: selectedLocation?.city || "",
      country: selectedLocation?.country || "",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          Report a Scam
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Scam Type */}
            <div className="space-y-4">
              <FormItem>
                <FormLabel>Scam Type *</FormLabel>
                <TypeDropdown
                  value={selectedScamType}
                  onChange={(val) => {
                    setSelectedScamType(val as any);
                  }}
                  options={scamTypeOptions}
                  onSearch={setScamTypeSearch}
                  placeholder="Type to search scam types..."
                  multi={false}
                />
                <FormMessage />
              </FormItem>
              {/* Tags field (multi-select) */}
              <FormItem>
                <FormLabel>Additional Scam Types (Tags)</FormLabel>
                <TypeDropdown
                  value={selectedTags}
                  onChange={(val) => setSelectedTags(val as any)}
                  options={tagOptions}
                  onSearch={setTagSearch}
                  placeholder="Type to search scam types..."
                  multi={true}
                />
                <FormDescription>
                  Add additional scam types/tags to help others find this
                  report.
                </FormDescription>
              </FormItem>
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detailed Description *</FormLabel>
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Textarea
                          placeholder="Describe what happened, how the scam works, and any other relevant details"
                          rows={4}
                          {...field}
                          className="text-base"
                          onChange={(e) => {
                            field.onChange(e);
                            // Update sessionStorage with the latest user input
                            sessionStorage.setItem(
                              "originalDescription",
                              e.target.value
                            );
                          }}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="secondary"
                        className="h-10"
                        disabled={!field.value || isSubmitting || paraphrasing}
                        onClick={async () => {
                          setParaphrasing(true);
                          setParaphraseError("");
                          try {
                            // Use the original description from sessionStorage if available
                            let original = sessionStorage.getItem(
                              "originalDescription"
                            );
                            if (!original) {
                              original = field.value;
                              sessionStorage.setItem(
                                "originalDescription",
                                original
                              );
                            }
                            const res = await fetch("/api/ai-paraphrase", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ description: original }),
                            });
                            if (!res.ok)
                              throw new Error("Failed to paraphrase");
                            const data = await res.json();
                            if (data?.paraphrased) {
                              field.onChange(data.paraphrased);
                            } else {
                              throw new Error("No paraphrased text returned");
                            }
                          } catch (e) {
                            setParaphraseError(
                              e instanceof Error ? e.message : "Error"
                            );
                          } finally {
                            setParaphrasing(false);
                          }
                        }}
                      >
                        {paraphrasing
                          ? "Paraphrasing..."
                          : "Paraphrase with AI"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-10"
                        disabled={
                          paraphrasing ||
                          !sessionStorage.getItem("originalDescription") ||
                          field.value ===
                            sessionStorage.getItem("originalDescription")
                        }
                        onClick={() => {
                          const original = sessionStorage.getItem(
                            "originalDescription"
                          );
                          if (original) field.onChange(original);
                        }}
                      >
                        Revert
                      </Button>
                    </div>
                    {paraphraseError && (
                      <div className="text-red-500 text-xs mt-1">
                        {paraphraseError}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="severity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="severity-select">
                        Risk Level
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className="text-base py-3"
                            id="severity-select"
                          >
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {severityOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Scammer Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1-555-123-4567"
                          {...field}
                          className="text-base py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email-input">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email-input"
                          placeholder="scammer@example.com"
                          {...field}
                          className="text-base py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website/URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://fake-website.com"
                        {...field}
                        className="text-base py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialMedia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Media Profile</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Social media username or profile URL"
                        {...field}
                        className="text-base py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Financial Impact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Financial Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Currency Searchable Selector */}
                <div className="relative">
                  <FormLabel>Currency</FormLabel>
                  <div className="mt-2">
                    {currency ? (
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-3 py-1 mb-2">
                        <span>
                          {(() => {
                            const found = countryCodeAndName().find(
                              (c) => c.currency_code === currency
                            );
                            if (!found) return currency;
                            return `${found.currency_code} - ${found.currency_name}`;
                          })()}
                        </span>
                        <button
                          type="button"
                          aria-label="Remove selected currency"
                          className="ml-1 text-blue-700 hover:text-red-600 focus:outline-none"
                          onClick={() => setCurrency("")}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <CurrencySearchInput
                        onSelect={(code) => setCurrency(code)}
                      />
                    )}
                  </div>
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="moneyLost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Money Lost ({currency || "Currency"})
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          className="text-base py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="moneyRequested"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Money Requested ({currency || "Currency"})
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          className="text-base py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Reporter Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Your Information (Optional)
              </h3>

              <FormField
                control={form.control}
                name="anonymous"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Submit anonymously</FormLabel>
                      <FormDescription>
                        Your personal information will not be displayed publicly
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              {!form.watch("anonymous") && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="reporterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="text-base py-3" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reporterEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input {...field} className="text-base py-3" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Location Field */}
            <div className="space-y-4">
              <FormLabel>Location (where scam took place)</FormLabel>
              <div>
                {selectedLocation ? (
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-3 py-1 mb-2">
                    <span>
                      {selectedLocation.city
                        ? `${selectedLocation.city}, ${selectedLocation.country}`
                        : selectedLocation.country}
                    </span>
                    <button
                      type="button"
                      aria-label="Remove selected location"
                      className="ml-1 text-blue-700 hover:text-red-600 focus:outline-none"
                      onClick={() => setSelectedLocation(null)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <LocationSearchInput
                    search={locationSearch}
                    setSearch={setLocationSearch}
                    options={locationOptions}
                    highlightedIndex={highlightedLocationIndex}
                    setHighlightedIndex={setHighlightedLocationIndex}
                    onSelect={(loc) => {
                      setSelectedLocation(loc);
                      setLocationSearch("");
                      setLocationOptions([]);
                    }}
                  />
                )}
              </div>
            </div>

            {/* CAPTCHA - Only in production */}
            {isProduction && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  }
                  onChange={(token) => setCaptchaToken(token || "")}
                />
              </div>
            )}

            {!isProduction && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Development mode: CAPTCHA verification is disabled
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full py-4 text-lg"
              disabled={isSubmitting || (isProduction && !captchaToken)}
            >
              {isSubmitting ? "Submitting Report..." : "Submit Scam Report"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

// --- CurrencySearchInput component ---
function CurrencySearchInput({
  onSelect,
}: {
  onSelect: (code: string) => void;
}) {
  const [search, setSearch] = React.useState("");
  const [highlighted, setHighlighted] = React.useState(-1);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const options = countryCodeAndName();

  // Filter by country, currency code, or currency name
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

  React.useEffect(() => {
    if (search.length > 0) setShowDropdown(true);
    else setShowDropdown(false);
  }, [search]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlighted >= 0 && highlighted < filtered.length) {
        onSelect(filtered[highlighted].currency_code);
        setSearch("");
        setShowDropdown(false);
      }
    }
  };

  // Click outside to close
  React.useEffect(() => {
    if (!showDropdown) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".currency-search-root")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDropdown]);

  return (
    <div className="currency-search-root relative">
      <Input
        placeholder="Type country, currency code, or name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setHighlighted(-1);
        }}
        onFocus={() => search.length > 0 && setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        className="mb-2"
        autoComplete="off"
      />
      {showDropdown && filtered.length > 0 && (
        <div className="border rounded p-2 max-h-48 overflow-y-auto bg-white z-20 absolute w-full shadow-lg">
          {filtered.map((c, idx) => (
            <div
              key={c.currency_code}
              className={`cursor-pointer px-2 py-1 rounded flex flex-col ${
                highlighted === idx ? "bg-blue-200" : "hover:bg-gray-100"
              }`}
              onMouseEnter={() => setHighlighted(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(c.currency_code);
                setSearch("");
                setShowDropdown(false);
              }}
            >
              <span className="font-medium">
                {c.currency_code} - {c.currency_name}
              </span>
              <span className="text-xs text-gray-500">
                {c.countries.join(", ")}
              </span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-gray-400 px-2 py-1">No results</div>
          )}
        </div>
      )}
    </div>
  );
}

// --- LocationSearchInput component ---
function LocationSearchInput({
  search,
  setSearch,
  options,
  highlightedIndex,
  setHighlightedIndex,
  onSelect,
}: {
  search: string;
  setSearch: (s: string) => void;
  options: { city: string; country: string }[];
  highlightedIndex: number;
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
  onSelect: (loc: { city: string; country: string }) => void;
}) {
  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!options.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev: number) =>
        prev < options.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev: number) =>
        prev > 0 ? prev - 1 : options.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < options.length) {
        onSelect(options[highlightedIndex]);
      }
    }
  };

  // Click outside to close
  const [showDropdown, setShowDropdown] = React.useState(false);
  React.useEffect(() => {
    if (search.length > 0) setShowDropdown(true);
    else setShowDropdown(false);
  }, [search]);
  React.useEffect(() => {
    if (!showDropdown) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".location-search-root")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDropdown]);

  return (
    <div className="location-search-root relative">
      <Input
        placeholder="Type country or city..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setHighlightedIndex(-1);
        }}
        onFocus={() => search.length > 0 && setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        className="mb-2"
        autoComplete="off"
      />
      {showDropdown && options.length > 0 && (
        <div className="border rounded p-2 max-h-48 overflow-y-auto bg-white z-20 absolute w-full shadow-lg">
          {options.map((loc, idx) => (
            <div
              key={loc.city ? `${loc.city},${loc.country}` : loc.country}
              className={`cursor-pointer px-2 py-1 rounded flex flex-col ${
                highlightedIndex === idx ? "bg-blue-200" : "hover:bg-gray-100"
              }`}
              onMouseEnter={() => setHighlightedIndex(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(loc);
              }}
            >
              <span className="font-medium">
                {loc.city ? `${loc.city}, ${loc.country}` : loc.country}
              </span>
            </div>
          ))}
          {options.length === 0 && (
            <div className="text-gray-400 px-2 py-1">No results</div>
          )}
        </div>
      )}
    </div>
  );
}
