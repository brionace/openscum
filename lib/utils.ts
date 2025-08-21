import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const severityColors = {
  LOW: "text-yellow-400",
  MEDIUM: "text-orange-400",
  HIGH: "text-red-400",
  CRITICAL: "text-red-600",
};

export const severityBLColors = {
  LOW: "border-l-yellow-400",
  MEDIUM: "border-l-orange-400",
  HIGH: "border-l-red-400",
  CRITICAL: "border-l-red-600",
};

export function getSeverity(
  severity: any
): "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | undefined {
  if (severity === null || severity === undefined) return undefined;
  if (
    typeof severity === "string" &&
    ["LOW", "MEDIUM", "HIGH", "CRITICAL"].includes(severity)
  ) {
    return severity as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  }
  return undefined;
}

export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export const SEVERITY_META: Record<
  Severity,
  { title: string; description: string }
> = {
  LOW: {
    title: "Low",
    description: "Few reports recently. Stay aware and verify before engaging.",
  },
  MEDIUM: {
    title: "Elevated",
    description: "Reports are increasing. Exercise extra caution.",
  },
  HIGH: {
    title: "High",
    description:
      "Significant recent activity. Avoid interacting where possible.",
  },
  CRITICAL: {
    title: "Critical",
    description: "Major surge detected. Known active scam—do not engage.",
  },
};

// --- Automated scam report scoring and filtering ---
const BAD_WORDS = [
  "test",
  "asdf",
  "lorem",
  "1234",
  "fuck",
  "shit",
  "nigger",
  "paki",
];
const MAX_WORD_LENGTH = 20;
const MIN_DESCRIPTION_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 1000;
// Matches any sequence of 31+ of the same character, or any 31+ consecutive non-whitespace characters
const LONG_WORD_REGEX = /(.)\1{20,}|[^\s]{21,}/;
const URL_REGEX = /(https?:\/\/|www\.)\S+/i;

export function isBadContent(text: string): boolean {
  if (!text) return true;
  if (
    text.length < MIN_DESCRIPTION_LENGTH ||
    text.length > MAX_DESCRIPTION_LENGTH
  )
    return true;
  if (BAD_WORDS.some((word) => text.toLowerCase().includes(word))) return true;
  if (LONG_WORD_REGEX.test(text)) return true;
  if (URL_REGEX.test(text)) return true;
  return false;
}

export function filterBadReport(report: any): boolean {
  if (isBadContent(report.description)) return false;
  if (report.scammerDetails) {
    for (const val of Object.values(report.scammerDetails)) {
      // Normalize value: trim, remove excessive whitespace, lowercase
      let normalized =
        typeof val === "string"
          ? val.trim().replace(/\s+/g, " ").toLowerCase()
          : "";
      if (isBadContent(normalized)) return false;
    }
  }
  return true;
}
