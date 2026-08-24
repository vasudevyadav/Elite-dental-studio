const defaultSiteUrl = "https://elite-dental-studio-umber.vercel.app";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
