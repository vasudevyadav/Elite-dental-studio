const defaultSiteUrl = "https://elitedentalstudio.co.in";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  const url = configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
