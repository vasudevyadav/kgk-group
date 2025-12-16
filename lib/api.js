const BASE_URL = 'https://reinventmedia.in/kgkgroup-backend/wp-json/custom/v1';

export async function fetchFromAPI(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      cache: 'no-store',
      ...options,
    });

    if (!res.ok) {
      console.error(`API error (${res.status}) on endpoint: ${endpoint}`);
      return null;
    }

    // Safely parse JSON
    const text = await res.text();
    if (!text) return null; // empty response fallback

    try {
      return JSON.parse(text);
    } catch (err) {
      console.error(`Failed to parse JSON from endpoint: ${endpoint}`, err);
      return null;
    }
  } catch (err) {
    console.error(`Fetch failed for endpoint: ${endpoint}`, err);
    return null;
  }
}
