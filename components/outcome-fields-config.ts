// outcome-fields-config.ts
// Defines the fields for each outcome type

export const outcomeFieldsConfig: Record<
  string,
  { label: string; type: string; placeholder?: string }[]
> = {
  FINANCIAL: [
    { label: "Amount Lost", type: "number", placeholder: "Enter amount" },
    { label: "Currency", type: "currency" },
  ],
  PERSONAL: [
    {
      label: "Personal Information Compromised",
      type: "text",
      placeholder: "e.g. Address, ID number",
    },
    {
      label: "Details",
      type: "textarea",
      placeholder: "Describe what was compromised",
    },
  ],
  ROMANCE: [
    { label: "Platform", type: "text", placeholder: "e.g. Tinder, Facebook" },
    {
      label: "Duration of Relationship",
      type: "text",
      placeholder: "e.g. 3 months",
    },
    {
      label: "Amount Lost (if any)",
      type: "number",
      placeholder: "Enter amount",
    },
    { label: "Details", type: "textarea", placeholder: "Describe the scam" },
  ],
  // ...other types...
};
