import { getEdsApiBaseUrl } from "@/lib/apiConfig";

export type SeoMetadata = {
  title: string;
  description: string;
  keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
};

export type SeoPage = "home" | "about" | "contact";

function getSeoApiUrl(page: SeoPage): string {
  const cmsOrigin = new URL(getEdsApiBaseUrl()).origin;
  return `${cmsOrigin}/wp-json/elite-seo/v1/metadata/${page}`;
}

function isSeoMetadata(value: unknown): value is SeoMetadata {
  if (!value || typeof value !== "object") return false;

  const metadata = value as Record<string, unknown>;
  return [
    "title",
    "description",
    "keywords",
    "canonical_url",
    "og_title",
    "og_description",
    "og_image",
  ].every((field) => typeof metadata[field] === "string");
}

export async function getSeoMetadata(page: SeoPage): Promise<SeoMetadata | null> {
  const response = await fetch(getSeoApiUrl(page), {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) throw new Error(`SEO metadata API returned ${response.status}`);

  const metadata: unknown = await response.json();
  if (!isSeoMetadata(metadata)) throw new Error("SEO metadata API returned invalid data");

  return metadata;
}
