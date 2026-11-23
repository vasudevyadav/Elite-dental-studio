const REINVENT_MEDIA_PATTERN =
  /https?:\/\/(?:www\.)?reinventmedia\.in\/+elitedentalstudio\/+wp-content\/+/gi;
const ELITE_CMS_MEDIA_PATTERN = /https?:\/\/cms\.elitedentalstudio\.co\.in\/+wp-content\/+/gi;
const ELITE_CMS_MEDIA_BASE = "https://cms.elitedentalstudio.co.in/wp-content/";

export function normalizeCmsMediaUrl(value: string): string {
  return value
    .replace(REINVENT_MEDIA_PATTERN, ELITE_CMS_MEDIA_BASE)
    .replace(ELITE_CMS_MEDIA_PATTERN, ELITE_CMS_MEDIA_BASE);
}

export function normalizeCmsMediaUrls<T>(value: T): T {
  if (typeof value === "string") return normalizeCmsMediaUrl(value) as T;
  if (Array.isArray(value)) return value.map(normalizeCmsMediaUrls) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, normalizeCmsMediaUrls(child)]),
    ) as T;
  }
  return value;
}
