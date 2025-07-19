// Mock data for development when database is not available
export const mockOutcomeTypes = [
  {
    id: "1",
    value: "financial_loss",
    label: "Financial Loss",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2", 
    value: "personal_info_stolen",
    label: "Personal Information Stolen",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    value: "no_loss",
    label: "No Loss",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const mockStats = {
  totalReports: 1234,
  reportsToday: 12,
  activeUsers: 156,
  topScamType: "Phone Call"
};

export const mockTrends = [
  { scamTypeId: "1", name: "Phone Call", count: 45 },
  { scamTypeId: "2", name: "Email Phishing", count: 32 },
  { scamTypeId: "3", name: "Text Message", count: 28 },
  { scamTypeId: "4", name: "Social Media", count: 15 },
  { scamTypeId: "5", name: "Investment", count: 12 }
];
