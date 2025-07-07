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

// ScamReport interface for consistent typing
export interface ScamReport {
  id: string;
  createdAt: string;
  updatedAt: string;
  aiSummaryId?: string | null;
  description: string;
  phoneNumber?: string | null;
  email?: string | null;
  website?: string | null;
  socialMedia?: string | null;
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
  moneyLost?: number | null;
  moneyRequested?: number | null;
  screenshots: string[];
  evidence: string[];
  scamType?: ScamType;
  tags?: Tag[];
  severity?: string | null;
  _count?: {
    comments: number;
    votes: number;
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
