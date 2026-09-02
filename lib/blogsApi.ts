import sanitizeHtml from "sanitize-html";
import { getEdsApiBaseUrl } from "@/lib/apiConfig";

export type BlogCategory = { name: string; slug: string };
export type BlogApiPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: { url: string; alt: string };
  categories: BlogCategory[];
  tags: BlogCategory[];
  author: { name: string };
  publishedAt: string;
  updatedAt: string;
  content?: string;
};

type Envelope<T> = { success: boolean; message?: string; data: T };
export type BlogListData = {
  items: BlogApiPost[];
  pageSeo?: { metaTitle?: string; metaDescription?: string };
  pagination: Record<string, unknown>;
};

export function decodeHtml(value: string): string {
  return value
    .replace(/&hellip;/g, "…")
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#8217;|&#039;|&apos;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizePost(post: BlogApiPost): BlogApiPost {
  return {
    ...post,
    title: decodeHtml(post.title),
    excerpt: decodeHtml(post.excerpt).replace(/<[^>]*>/g, ""),
    image: { ...post.image, alt: decodeHtml(post.image?.alt || post.title) },
    categories: post.categories ?? [],
    tags: post.tags ?? [],
  };
}

function normalizeListPost(post: BlogApiPost): BlogApiPost {
  const normalized = normalizePost(post);
  return {
    id: normalized.id,
    slug: normalized.slug,
    title: normalized.title,
    excerpt: normalized.excerpt,
    image: normalized.image,
    categories: normalized.categories,
    tags: [],
    author: { name: normalized.author?.name || "Elite Dental Studio" },
    publishedAt: normalized.publishedAt,
    updatedAt: normalized.updatedAt,
  };
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${getEdsApiBaseUrl()}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Blogs API returned ${response.status}`);
  const payload = (await response.json()) as Envelope<T>;
  if (!payload.success) throw new Error(payload.message || "Blogs API request failed");
  return payload.data;
}

export async function getBlogs(): Promise<BlogApiPost[]> {
  return (await getBlogsData()).items;
}

export async function getBlogsData(): Promise<BlogListData> {
  const data = await request<BlogListData>("/blogs?page=1&perPage=200");
  return { ...data, items: (data.items ?? []).map(normalizeListPost) };
}

export async function getBlog(slug: string): Promise<BlogApiPost | null> {
  try {
    return normalizePost(await request<BlogApiPost>(`/blogs/${encodeURIComponent(slug)}`));
  } catch (error) {
    console.error(`Unable to load blog ${slug}.`, error);
    return null;
  }
}

export function formatBlogDate(value: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function sanitizeWordPressHtml(html: string): string {
  const safeHtml = sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          ...(attribs.target === "_blank" ? { rel: "noopener noreferrer" } : {}),
        },
      }),
      img: (_tagName, attribs) => ({
        tagName: "img",
        attribs: { ...attribs, loading: attribs.loading || "lazy" },
      }),
    },
  });

  return safeHtml
    .replace(
      /<table(\s[^>]*)?>/gi,
      '<div class="blog-table-scroll" role="region" tabindex="0"><table$1>',
    )
    .replace(/<\/table>/gi, "</table></div>");
}
