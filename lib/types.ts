// Type definitions to replace Prisma enums
export const ScamCategory = {
  PHONE_CALL: "PHONE_CALL",
  EMAIL_PHISHING: "EMAIL_PHISHING",
  SMS_TEXT: "SMS_TEXT",
  SOCIAL_MEDIA: "SOCIAL_MEDIA",
  FAKE_WEBSITE: "FAKE_WEBSITE",
  ROMANCE: "ROMANCE",
  INVESTMENT: "INVESTMENT",
  TECH_SUPPORT: "TECH_SUPPORT",
  GOVERNMENT: "GOVERNMENT",
  CHARITY: "CHARITY",
  EMPLOYMENT: "EMPLOYMENT",
  RENTAL: "RENTAL",
  ONLINE_SHOPPING: "ONLINE_SHOPPING",
  CRYPTOCURRENCY: "CRYPTOCURRENCY",
  OTHER: "OTHER",
} as const;

export type ScamCategory = (typeof ScamCategory)[keyof typeof ScamCategory];

export const SeverityLevel = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  CRITICAL: "CRITICAL",
} as const;

export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel];

export const VoteType = {
  HELPFUL: "HELPFUL",
  NOT_HELPFUL: "NOT_HELPFUL",
  SPAM: "SPAM",
} as const;

export type VoteType = (typeof VoteType)[keyof typeof VoteType];

// ScamType and Tag interfaces
export interface ScamType {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

// Outcome interface for detailed report outcomes
export interface Outcome {
  id: string;
  createdAt: string;
  updatedAt: string;
  outcomeType: string;
  // Financial
  moneyLost?: number | null;
  moneyRequested?: number | null;
  currency?: string | null;
  paymentMethod?: string | null;
  accountDetails?: string | null;
  // Social Media
  socialMediaPlatform?: string | null;
  accountUsername?: string | null;
  accountEmail?: string | null;
  accountRecovered?: boolean | null;
  // Phone
  phoneBrand?: string | null;
  phoneModel?: string | null;
  phoneRecovered?: boolean | null;
  // Vehicle
  vehicleBrand?: string | null;
  vehicleModel?: string | null;
  vehiclePlate?: string | null;
  vehicleRecovered?: boolean | null;
  // Household
  propertyType?: string | null;
  propertyDescription?: string | null;
  propertyValue?: number | null;
  propertyRecovered?: boolean | null;
  // Other
  otherOutcomeDetails?: string | null;
}

// ScamReport interface for consistent typing
export interface ScamReport {
  id: string;
  createdAt: string;
  updatedAt: string;
  aiSummaryId?: string | null;
  description: string;
  scammerDetails?: {
    phoneNumber?: string;
    email?: string;
    website?: string;
    socialMedia?: string;
    name?: string;
    [key: string]: string | undefined;
  } | null;
  city?: string | null;
  country?: string | null;
  region?: string | null;
  ipHash?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  verified: boolean;
  trustScore: number;
  reportCount: number;
  reporterName?: string | null;
  reporterEmail?: string | null;
  anonymous: boolean;
  screenshots: string[];
  evidence: string[];
  scamType?: ScamType;
  tags?: Tag[];
  severity?: string | null;
  outcome?: Outcome[]; // Use Outcome[] for structured outcomes
  _count?: {
    comments: number;
    votes: number;
    flags?: number;
  };
}

export interface AIScamReport {
  id: string;
  createdAt: string;
  updatedAt: string;
  summary: string;
  averageRiskLevel: string;
  averageFinancialImpact: number;
  category: string;
}

// Additional type definitions for components

export interface OutcomeType {
  id: string;
  label: string;
  value: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: string;
  parentId?: string | null;
  replies?: Comment[];
}

export interface ReportFormData {
  description: string;
  severity: string;
  scammerDetails: {
    phoneNumber?: string;
    email?: string;
    website?: string;
    socialMedia?: string;
    name?: string;
  };
  reporterName: string;
  reporterEmail: string;
  anonymous: boolean;
  scamTypeId: string;
  outcome: Outcome[];
}

export interface User {
  id: string;
  email: string;
  username?: string;
  name?: string;
}

export interface Session {
  access_token: string;
  user: User;
}

export interface LocationOption {
  city: string;
  country: string;
}

export interface CurrencyOption {
  currency_code: string;
  currency_name: string;
  countries: string[];
}

export interface PrismaWhereInput {
  [key: string]: unknown;
}
