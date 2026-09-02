const defaultSiteUrl = "https://elite-dental-studio-nine.vercel.app";

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || defaultSiteUrl;
  const url = configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
