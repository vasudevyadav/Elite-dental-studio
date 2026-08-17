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
  return { ...data, items: (data.items ?? []).map(normalizePost) };
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
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/javascript:/gi, "");
}
import { getEdsApiBaseUrl } from "@/lib/apiConfig";
