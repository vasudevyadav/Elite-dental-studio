// Hardcoded, not overridable via env: a stale NEXT_PUBLIC_SITE_URL in the hosting
// panel previously pointed canonical URLs, sitemap.xml and robots.txt at a defunct
// Vercel preview domain in production. elitedentalstudio.co.in is the only domain
// this site is ever meant to declare itself as.
const SITE_URL = "https://elitedentalstudio.co.in";

export function getSiteUrl() {
  return SITE_URL;
}

export function absoluteUrl(path = "/") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
