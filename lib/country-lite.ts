// Lightweight country data instead of importing entire JSON files
export const commonCountries = [
  { code: "US", name: "United States", currency: "USD", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", currency: "GBP", flag: "🇬🇧" },
  { code: "CA", name: "Canada", currency: "CAD", flag: "🇨🇦" },
  { code: "AU", name: "Australia", currency: "AUD", flag: "🇦🇺" },
  { code: "DE", name: "Germany", currency: "EUR", flag: "🇩🇪" },
  { code: "FR", name: "France", currency: "EUR", flag: "🇫🇷" },
  { code: "IT", name: "Italy", currency: "EUR", flag: "🇮🇹" },
  { code: "ES", name: "Spain", currency: "EUR", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", currency: "EUR", flag: "🇳🇱" },
  { code: "JP", name: "Japan", currency: "JPY", flag: "🇯🇵" },
  { code: "IN", name: "India", currency: "INR", flag: "🇮🇳" },
  { code: "CN", name: "China", currency: "CNY", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", currency: "BRL", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", currency: "MXN", flag: "🇲🇽" },
  { code: "ZA", name: "South Africa", currency: "ZAR", flag: "🇿🇦" },
];

export const commonCurrencies = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "JPY",
  "INR",
  "CNY",
  "BRL",
  "MXN",
  "ZAR",
];

// Lazy load full country data only when needed
export const loadFullCountryData = async () => {
  const { default: currencies } = await import(
    "country-json/src/country-by-currency-code.json"
  );
  const { default: flags } = await import(
    "country-json/src/country-by-flag.json"
  );
  const { default: capitals } = await import(
    "country-json/src/country-by-capital-city.json"
  );

  return { currencies, flags, capitals };
};
