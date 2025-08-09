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
