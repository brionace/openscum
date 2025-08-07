"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSupabaseUser } from "@/components/SupabaseUserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// ...recaptcha imports removed...
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
import {
  MapPin,
  AlertTriangle,
  DollarSign,
  Shield,
  Phone,
  Users,
} from "lucide-react";
import {
  commonCountries,
  commonCurrencies,
  loadFullCountryData,
} from "@/lib/country-lite";
import { countryCodeAndName, countryCity } from "@/lib/country";
import { TypeDropdown } from "@/components/ui/type-dropdown";
import OutcomeSection from "@/components/outcome-section";

const scammerDetailsSchema = z.object({
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  website: z.string().optional(),
  socialMedia: z.string().optional(),
  name: z.string().optional(),
});

const reportSchema = z.object({
  description: z.string().optional(),
  severity: z.string().default("MEDIUM"),
  scammerDetails: scammerDetailsSchema,
  reporterName: z.string().optional(),
  reporterEmail: z.string().optional(),
  anonymous: z.boolean().default(true),
  scamTypeId: z.string().min(2, "Please select a Scam Type"),
  tags: z.array(z.string()).optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  outcome: z.array(z.any()).optional(),
});

type ReportFormData = z.infer<typeof reportSchema>;

interface ReportFormProps {
  modalContentRef: React.RefObject<HTMLDivElement>;
  onSubmit: (data: ReportFormData) => Promise<void>;
  isSubmitting?: boolean;
  prefill?: {
    scammerDetails?: {
      phoneNumber?: string;
      email?: string;
      website?: string;
      socialMedia?: string;
      name?: string;
    };
  };
}

const severityOptions = [
  { value: "LOW", label: "Just Suspicious" },
  { value: "MEDIUM", label: "Somewhat Risky" },
  { value: "HIGH", label: "Very Risky" },
  { value: "CRITICAL", label: "Extremely Dangerous" },
];

// ...RecaptchaV3 removed...

export function ReportForm({
  modalContentRef,
  onSubmit,
  isSubmitting = false,
  prefill,
}: ReportFormProps) {
  const { user, session, loading, signIn } = useSupabaseUser();
  // Removed loginPrompt state - no longer needed for anonymous reports
  // ...captchaToken state removed...
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
  const [outcome, setOutcome] = useState<any[]>([]);
  const [showCustomScamTypeModal, setShowCustomScamTypeModal] = useState(false);
  const [showCustomTagModal, setShowCustomTagModal] = useState(false);
  const [customScamTypeName, setCustomScamTypeName] = useState("");
  const [customTagName, setCustomTagName] = useState("");
  const isProduction = process.env.NODE_ENV === "production";

  const form = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      description: "",
      severity: severityOptions[1].value, // Default to Medium Risk
      scammerDetails: {
        phoneNumber: prefill?.scammerDetails?.phoneNumber || "",
        email: prefill?.scammerDetails?.email || "",
        website: prefill?.scammerDetails?.website || "",
        socialMedia: prefill?.scammerDetails?.socialMedia || "",
        name: prefill?.scammerDetails?.name || "",
      },
      reporterName: "",
      reporterEmail: "",
      anonymous: true,
      scamTypeId: "",
      outcome: [],
    },
  });

  // Focus relevant input if prefill is present
  useEffect(() => {
    if (prefill && prefill.scammerDetails) {
      const { phoneNumber, email, website, socialMedia, name } =
        prefill.scammerDetails;
      if (phoneNumber) {
        form.setValue("scammerDetails.phoneNumber", phoneNumber);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='scammerDetails.phoneNumber']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (email) {
        form.setValue("scammerDetails.email", email);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='scammerDetails.email']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (website) {
        form.setValue("scammerDetails.website", website);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='scammerDetails.website']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (socialMedia) {
        form.setValue("scammerDetails.socialMedia", socialMedia);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='scammerDetails.socialMedia']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (name) {
        form.setValue("scammerDetails.name", name);
        const el = document.querySelector<HTMLInputElement>(
          "input[name='scammerDetails.name']"
        );
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill]);

  // --- Scam Type Dropdown logic ---
  useEffect(() => {
    const query = scamTypeSearch.trim();
    const endpoint = query
      ? `/api/scam-types?q=${encodeURIComponent(query)}`
      : "/api/scam-types"; // Load all when no search

    fetch(endpoint)
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
    const query = tagSearch.trim();
    const endpoint = query
      ? `/api/scam-types?q=${encodeURIComponent(query)}`
      : "/api/scam-types"; // Load all when no search

    fetch(endpoint)
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

  // Handle custom scam type creation
  const handleCustomScamType = async () => {
    if (!customScamTypeName.trim()) return;

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      // Add authorization header if user is logged in
      if (session?.access_token) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch("/api/scam-types", {
        method: "POST",
        headers,
        body: JSON.stringify({ name: customScamTypeName.trim() }),
      });

      if (response.ok) {
        const newScamType = await response.json();

        // Check if the scam type needs approval
        if (newScamType.message && newScamType.message.includes("approval")) {
          // Show message about pending approval
          console.log("Scam type submitted for approval:", newScamType.message);
          // TODO: Show toast notification to user
        } else {
          setSelectedScamType(newScamType);
          form.setValue("scamTypeId", newScamType.id);
          form.clearErrors("scamTypeId");

          // Add to options list
          setScamTypeOptions((prev) => [newScamType, ...prev]);
        }
      } else if (response.status === 202) {
        // Scam type is pending approval
        const result = await response.json();
        console.log("Scam type pending approval:", result.error);
        // TODO: Show toast notification to user
      }
    } catch (error) {
      console.error("Failed to create custom scam type:", error);
    }

    setShowCustomScamTypeModal(false);
    setCustomScamTypeName("");
  };

  // Handle custom tag creation
  const handleCustomTag = async () => {
    if (!customTagName.trim()) return;

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      // Add authorization header if user is logged in
      if (session?.access_token) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch("/api/scam-types", {
        method: "POST",
        headers,
        body: JSON.stringify({ name: customTagName.trim() }),
      });

      if (response.ok) {
        const newTag = await response.json();

        // Check if the scam type needs approval
        if (newTag.message && newTag.message.includes("approval")) {
          // Show message about pending approval
          console.log("Scam type submitted for approval:", newTag.message);
          // TODO: Show toast notification to user
        } else {
          setSelectedTags((prev) => [...prev, newTag]);
          // Add to options list for future selections
          setScamTypeOptions((prev) => [newTag, ...prev]);
          setTagOptions((prev) => [newTag, ...prev]);
        }
      } else if (response.status === 202) {
        // Scam type is pending approval
        const result = await response.json();
        console.log("Scam type pending approval:", result.error);
        // TODO: Show toast notification to user
      }
    } catch (error) {
      console.error("Failed to create custom tag:", error);
    }

    setShowCustomTagModal(false);
    setCustomTagName("");
  };

  // Update handleSubmit to include tags
  const handleSubmit = async (data: ReportFormData) => {
    // If all fields are empty, fail silently and close modal
    const allEmpty =
      !data.description &&
      !data.severity &&
      !data.reporterName &&
      !data.reporterEmail &&
      !data.scamTypeId &&
      (!data.tags || data.tags.length === 0) &&
      !data.city &&
      !data.country &&
      (!data.outcome || data.outcome.length === 0) &&
      (!data.scammerDetails ||
        Object.values(data.scammerDetails).every(
          (v) => v === undefined || v === ""
        ));

    const onlyHasScamType =
      !data.description &&
      !data.severity &&
      !data.reporterName &&
      !data.reporterEmail &&
      (!data.tags || data.tags.length === 0) &&
      !data.city &&
      !data.country &&
      (!data.outcome || data.outcome.length === 0) &&
      (!data.scammerDetails ||
        Object.values(data.scammerDetails).every(
          (v) => v === undefined || v === ""
        ));

    if (allEmpty || onlyHasScamType) {
      // Close modal silently
      if (modalContentRef.current) {
        // Try to find the closest dialog/modal and close it
        const modal = modalContentRef.current.closest(
          '[role="dialog"], .modal, .DialogRoot'
        );
        if (modal) {
          // Try to find a close button
          const closeBtn = modal.querySelector(
            '[data-close], [aria-label="Close"], .close, .DialogClose'
          );
          if (closeBtn && closeBtn instanceof HTMLElement) {
            closeBtn.click();
          } else {
            // Fallback: hide modal
            (modal as HTMLElement).style.display = "none";
          }
        }
      }
      return;
    }
    // Allow anonymous reports - no authentication required
    await onSubmit({
      ...data,
      scamTypeId: selectedScamType ? selectedScamType.id : "",
      tags: selectedTags.map((t) => t.id),
      city: selectedLocation?.city || "",
      country: selectedLocation?.country || "",
      outcome,
    });
  };

  // Scroll to top on submit if there are validation errors
  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      modalContentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [form.formState.submitCount, form.formState.errors, modalContentRef]);

  // Initialize locationOptions with all country/city pairs on mount
  useEffect(() => {
    const raw = countryCity();
    if (!Array.isArray(raw)) return;
    setLocationOptions(
      raw.flatMap(({ name, cities }) =>
        name
          ? [
              { city: "", country: name },
              ...(Array.isArray(cities)
                ? cities.map((city) => ({ city, country: name }))
                : []),
            ]
          : []
      )
    );
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 rounded-none">
      <CardHeader>
        <CardTitle>Report a Scam</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Authentication Info */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-900 mb-1">
                Anonymous Reports Welcome
              </p>
              <p className="text-blue-700">
                You can submit reports anonymously without logging in.
                {!user && (
                  <span className="font-medium">
                    {" "}
                    To vote, flag, or comment on reports, you&apos;ll need to
                    sign in.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* Show all validation errors at the top */}
        {Object.keys(form.formState.errors).length > 0 && (
          <div className="mb-4">
            <ul className="text-red-600 text-sm space-y-1">
              {Object.entries(form.formState.errors).map(([field, error]) =>
                error && typeof error === "object" && "message" in error ? (
                  <li key={field}>{error.message as string}</li>
                ) : null
              )}
            </ul>
          </div>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            {/* Scam Type Section */}
            <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" /> Scam Type
              </h3>
              <div className="space-y-4">
                {/* Scam Type */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="scamTypeId"
                    render={({ field, fieldState, formState }) => (
                      <FormItem>
                        <FormLabel>Scam Type *</FormLabel>
                        <FormControl>
                          <TypeDropdown
                            value={selectedScamType}
                            onChange={(val) => {
                              if (!val) {
                                setSelectedScamType(null);
                                form.setValue("scamTypeId", "");
                                field.onChange("");
                                form.clearErrors("scamTypeId");
                                return;
                              }
                              setSelectedScamType(
                                val as { id: string; name: string } | null
                              );
                              form.setValue(
                                "scamTypeId",
                                val && "id" in val ? val.id : ""
                              );
                              field.onChange(val && "id" in val ? val.id : "");
                              if (val) form.clearErrors("scamTypeId");
                            }}
                            options={scamTypeOptions}
                            onSearch={setScamTypeSearch}
                            onOtherSelected={() =>
                              setShowCustomScamTypeModal(true)
                            }
                            placeholder="Type to search..."
                            multi={false}
                            showAllOnFocus={true}
                          />
                        </FormControl>
                        {/* Hidden input to keep scamTypeId in form state for zod validation */}
                        <input {...form.register("scamTypeId")} type="hidden" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Tags field (multi-select) */}
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <TypeDropdown
                      value={selectedTags}
                      onChange={(val) => setSelectedTags(val as any)}
                      options={tagOptions}
                      onSearch={setTagSearch}
                      onOtherSelected={() => setShowCustomTagModal(true)}
                      placeholder="Type to search..."
                      multi={true}
                      showAllOnFocus={true}
                    />
                    <FormDescription>
                      Add additional scam types/tags to help others find this
                      report.
                    </FormDescription>
                  </FormItem>
                </div>
              </div>
            </div>
            {/* Description Section */}
            <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-500" /> Description
              </h3>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detailed Description (Optional)</FormLabel>
                    <div className="flex flex-col gap-2">
                      <FormControl>
                        <Textarea
                          placeholder="Describe what happened, how the scam works, and any other relevant details or copy and paste any messages/emails you received."
                          rows={4}
                          {...field}
                          className="text-base whitespace-pre-wrap"
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
                      <FormMessage />
                      <div>
                        <Button
                          type="button"
                          variant="secondary"
                          className="h-10"
                          disabled={
                            !field.value || isSubmitting || paraphrasing
                          }
                          onClick={async () => {
                            setParaphrasing(true);
                            setParaphraseError("");
                            try {
                              // Use the original description from sessionStorage if available
                              let original = sessionStorage.getItem(
                                "originalDescription"
                              );
                              if (!original) {
                                original = field.value ?? "";
                                sessionStorage.setItem(
                                  "originalDescription",
                                  original
                                );
                              }
                              const res = await fetch("/api/ai-paraphrase", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  description: original,
                                }),
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
                        {sessionStorage.getItem("originalDescription") && (
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
                        )}
                      </div>
                      {paraphraseError && (
                        <div className="text-red-500 text-xs mt-1">
                          {paraphraseError}
                        </div>
                      )}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Risk Level Section */}
            {/* <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-500" /> Risk Level
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="severity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="severity-select">
                        Select Risk Level
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
            </div> */}

            {/* Scammer Details Section (JSON) */}
            <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-6 w-6 text-green-500" /> Scammer Details
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="scammerDetails.phoneNumber"
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
                    name="scammerDetails.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="scammerDetails.website"
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
                    name="scammerDetails.socialMedia"
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
                <FormField
                  control={form.control}
                  name="scammerDetails.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scammer Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name of scammer (if known)"
                          {...field}
                          className="text-base py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Outcome Section (modular, supports multiple outcomes) */}
            <OutcomeSection outcomes={outcome} setOutcomes={setOutcome} />

            {/* Reporter Information Section */}
            <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-500" /> Your Information
                (Optional)
              </h3>

              <FormField
                control={form.control}
                name="anonymous"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        id="anonymous-checkbox"
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

            {/* Location Section */}
            <div className="mb-6 p-6 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-pink-500" /> Location
              </h3>
              <div className="space-y-4">
                {/* Location (where scam took place) */}
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
                        options={locationOptions}
                        value={selectedLocation}
                        onChange={(loc) => {
                          setSelectedLocation(loc);
                          setLocationSearch("");
                          // Do NOT clear locationOptions here
                        }}
                        placeholder="Type city or country..."
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ...CAPTCHA removed... */}
            <Button
              type="submit"
              className="w-full py-4 text-lg mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting Report..." : "Submit Scam Report"}
            </Button>
          </form>
        </Form>

        {/* Custom Scam Type Modal */}
        {showCustomScamTypeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Add Custom Scam Type</h3>
              <Input
                value={customScamTypeName}
                onChange={(e) => setCustomScamTypeName(e.target.value)}
                placeholder="Enter scam type name..."
                className="mb-4"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCustomScamType();
                  } else if (e.key === "Escape") {
                    setShowCustomScamTypeModal(false);
                    setCustomScamTypeName("");
                  }
                }}
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCustomScamTypeModal(false);
                    setCustomScamTypeName("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleCustomScamType}
                  disabled={!customScamTypeName.trim()}
                >
                  Add Scam Type
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Custom Tag Modal */}
        {showCustomTagModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Add Custom Tag</h3>
              <Input
                value={customTagName}
                onChange={(e) => setCustomTagName(e.target.value)}
                placeholder="Enter tag name..."
                className="mb-4"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCustomTag();
                  } else if (e.key === "Escape") {
                    setShowCustomTagModal(false);
                    setCustomTagName("");
                  }
                }}
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCustomTagModal(false);
                    setCustomTagName("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleCustomTag}
                  disabled={!customTagName.trim()}
                >
                  Add Tag
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// --- CurrencySearchInput component ---
export function CurrencySearchInput({
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
export function LocationSearchInput({
  options,
  value,
  onChange,
  placeholder = "Type city or country...",
}: {
  options: { city: string; country: string }[];
  value: { city: string; country: string } | null;
  onChange: (val: { city: string; country: string }) => void;
  placeholder?: string;
}) {
  const [search, setSearch] = React.useState("");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const optionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Debounce search input
  const [debouncedSearch, setDebouncedSearch] = React.useState(search);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 150);
    return () => clearTimeout(handler);
  }, [search]);

  // Filter options live as user types, limit to 20 results
  const filteredOptions = debouncedSearch
    ? options
        .filter(
          (opt) =>
            opt.city.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            opt.country.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        .slice(0, 20)
    : [];

  // Keyboard navigation
  React.useEffect(() => {
    if (dropdownOpen && optionRefs.current[highlighted]) {
      optionRefs.current[highlighted]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted, dropdownOpen, filteredOptions.length]);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={search}
        onFocus={() => setDropdownOpen(false)} // Only open on typing
        onChange={(e) => {
          setSearch(e.target.value);
          setDropdownOpen(e.target.value.length > 0);
          setHighlighted(0);
        }}
        onKeyDown={(e) => {
          if (!dropdownOpen) return;
          if (e.key === "ArrowDown") {
            setHighlighted((h) => Math.min(h + 1, filteredOptions.length - 1));
            e.preventDefault();
          } else if (e.key === "ArrowUp") {
            setHighlighted((h) => Math.max(h - 1, 0));
            e.preventDefault();
          } else if (e.key === "Enter" && filteredOptions[highlighted]) {
            onChange(filteredOptions[highlighted]);
            setSearch(
              filteredOptions[highlighted].city
                ? `${filteredOptions[highlighted].city}, ${filteredOptions[highlighted].country}`
                : filteredOptions[highlighted].country
            );
            setDropdownOpen(false);
            e.preventDefault();
          } else if (e.key === "Escape") {
            setDropdownOpen(false);
          }
        }}
        placeholder={placeholder}
        className="input w-full"
        autoComplete="off"
      />
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white border rounded shadow">
          {filteredOptions.length === 0 ? (
            <div className="p-2 text-gray-500">No results</div>
          ) : (
            filteredOptions.map((opt, idx) => (
              <div
                key={`${opt.city || "country"}-${opt.country}-${idx}`}
                ref={(el) => (optionRefs.current[idx] = el)}
                className={`cursor-pointer px-4 py-2 ${
                  idx === highlighted ? "bg-blue-100" : ""
                }`}
                onMouseDown={() => {
                  onChange(opt);
                  setSearch(
                    opt.city ? `${opt.city}, ${opt.country}` : opt.country
                  );
                  setDropdownOpen(false);
                }}
                onMouseEnter={() => setHighlighted(idx)}
              >
                {opt.city ? (
                  <span>
                    <span className="font-medium">{opt.city}</span>,{" "}
                    <span className="text-gray-600">{opt.country}</span>
                  </span>
                ) : (
                  <span className="font-medium">{opt.country}</span>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
