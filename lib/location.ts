export interface LocationData {
  city?: string;
  country?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
  ip?: string;
}

export async function getLocationFromIP(ip?: string): Promise<LocationData> {
  try {
    // Skip lookup for common reserved/private IP addresses
    if (
      !ip ||
      ip === "127.0.0.1" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.") ||
      ip.startsWith("172.") ||
      ip === "::1"
    ) {
      console.log("Skipping location lookup for reserved/private IP:", ip);
      return {
        city: undefined,
        country: undefined,
        region: undefined,
        latitude: undefined,
        longitude: undefined,
        ip: ip,
      };
    }

    // Use API key if available for higher rate limits
    const apiKey = process.env.IPAPI_KEY;
    const baseUrl = apiKey
      ? `https://ipapi.co/${ip}/json/?key=${apiKey}`
      : `https://ipapi.co/${ip}/json/`;

    const response = await fetch(baseUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "ScamAlert/1.0",
      },
    });

    // Check if response is ok and content type is JSON
    if (!response.ok) {
      console.warn(
        `IP location lookup failed: HTTP ${response.status}: ${response.statusText}`
      );
      return {
        city: undefined,
        country: undefined,
        region: undefined,
        latitude: undefined,
        longitude: undefined,
        ip: ip,
      };
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.warn(
        `Non-JSON response from IP lookup: ${text.substring(0, 100)}`
      );
      return {
        city: undefined,
        country: undefined,
        region: undefined,
        latitude: undefined,
        longitude: undefined,
        ip: ip,
      };
    }

    const data = await response.json();

    if (data.error) {
      console.warn("IP location API error:", data.reason || "Unknown error");
      return {
        city: undefined,
        country: undefined,
        region: undefined,
        latitude: undefined,
        longitude: undefined,
        ip: ip,
      };
    }

    return {
      city: data.city,
      country: data.country_name,
      region: data.region,
      latitude: data.latitude,
      longitude: data.longitude,
      ip: data.ip,
    };
  } catch (error) {
    console.warn(
      "Failed to get location from IP:",
      typeof error === "object" && error && "message" in error
        ? (error as any).message
        : String(error)
    );
    // Return default data with the IP but no location info
    return {
      city: undefined,
      country: undefined,
      region: undefined,
      latitude: undefined,
      longitude: undefined,
      ip: ip,
    };
  }
}

export async function getBrowserLocation(): Promise<LocationData> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({});
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        resolve({});
      },
      { timeout: 5000, enableHighAccuracy: false }
    );
  });
}

export function hashIP(ip: string): string {
  // Simple hash function for privacy
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(16);
}
