import currencies_code from "country-json/src/country-by-currency-code.json";
import currencies_name from "country-json/src/country-by-currency-name.json";
import flags from "country-json/src/country-by-flag.json";
import capitals from "country-json/src/country-by-capital-city.json";
import cities from "country-json/src/country-by-cities.json";

export function countryData(): {
  name: string;
  currency_code: string;
  cities: string[];
  flag: string;
}[] {
  //   currencies: { country: string; currency_code: string }[],
  //   flags: { country: string; flag_base64: string }[],
  //   capitals: { country: string; city: string }[],
  //   cities: { country: string; cities: string[] }[]

  // Helper to find by country name (case-insensitive)
  const findByCountry = <T extends { country: string }>(
    arr: T[],
    country: string
  ) => arr.find((item) => item.country.toLowerCase() === country.toLowerCase());

  return currencies_code.map((cur) => {
    const flagObj = findByCountry(flags, cur.country);
    const capitalObj = findByCountry(capitals, cur.country);
    const citiesObj = findByCountry(cities, cur.country);

    // Capital first, then other cities (no duplicates)
    let allCities: string[] = [];
    if (capitalObj?.city) allCities.push(capitalObj.city);
    if (citiesObj?.cities) {
      allCities = allCities.concat(
        citiesObj.cities.filter((city) => !allCities.includes(city))
      );
    }

    return {
      name: cur.country,
      currency_code: cur.currency_code,
      cities: allCities,
      flag: flagObj?.flag_base64 || "",
    };
  });
}

export function getCurrencySymbol(currencyCode: string, locale = "en") {
  return (0)
    .toLocaleString(locale, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .replace(/[.,\s]/g, "")
    .trim();
}

export function getCurrencyName(currencyCode: string, locale = "en") {
  if (typeof Intl.DisplayNames === "undefined") return currencyCode;
  const displayNames = new Intl.DisplayNames([locale], { type: "currency" });
  return displayNames.of(currencyCode);
}

export function countryCodeAndName(): {
  countries: string[];
  currency_name: string;
  currency_code: string;
}[] {
  //    codes: { country: string; currency_code: string }[],
  //    names: { country: string; currency_name: string }[]

  // Map currency_code to { countries: [], currency_name }
  const codeMap = new Map<
    string,
    { countries: string[]; currency_name: string }
  >();

  // Create a map for quick lookup of currency_name by country
  const nameMap = new Map(
    currencies_name.map((n) => [n.country, n.currency_name])
  );

  for (const codeObj of currencies_code) {
    const { country, currency_code } = codeObj;
    const currency_name = nameMap.get(country) || "";

    if (codeMap.has(currency_code)) {
      codeMap.get(currency_code)!.countries.push(country);
    } else {
      codeMap.set(currency_code, {
        countries: [country],
        currency_name,
      });
    }
  }

  // Build the result array
  return Array.from(codeMap.entries()).map(
    ([currency_code, { countries, currency_name }]) => ({
      countries,
      currency_name,
      currency_code,
    })
  );
}

export function countryCity(): { name: string; cities: string[] }[] {
  return countryData().map(({ name, cities }) => ({ name, cities }));
}
