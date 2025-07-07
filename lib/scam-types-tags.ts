// Fetch scam types and tags from the backend
export async function fetchScamTypes() {
  const res = await fetch("/api/scam-types");
  if (!res.ok) throw new Error("Failed to fetch scam types");
  return res.json();
}

export async function fetchTags(query?: string) {
  const url = query ? `/api/tags?q=${encodeURIComponent(query)}` : "/api/tags";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch tags");
  return res.json();
}
