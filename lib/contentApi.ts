/* eslint-disable @typescript-eslint/no-explicit-any */
import { getEdsApiBaseUrl } from "@/lib/apiConfig";

type Envelope<T> = { success: boolean; message?: string; data: T };

export async function getContent<T>(path: string): Promise<T> {
  const response = await fetch(`${getEdsApiBaseUrl()}/${path.replace(/^\//, "")}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Content API returned ${response.status}`);
  const payload = (await response.json()) as Envelope<T>;
  if (!payload.success) throw new Error(payload.message || "Content API request failed");
  return payload.data;
}

export type Media = { url: string; alt: string };
export type ClinicRef = { id?: string; name: string; slug: string; label?: string };
export type DoctorListItem = {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  speciality: string;
  experienceYears: number;
  experienceLabel: string;
  image: Media;
  clinics: ClinicRef[];
  profileUrl: string;
  sortOrder: number;
};
export type Pagination = {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
export type DoctorsData = {
  pageSeo: { metaTitle: string; metaDescription: string };
  pageHeader: { title: string };
  clinics: ClinicRef[];
  items: DoctorListItem[];
  pagination?: Pagination;
};

export const DOCTORS_PAGE_SIZE = 9;

/**
 * The doctors CMS endpoint ignores page/limit and always returns the same
 * fixed batch. Pull whatever it's willing to give across a few requests and
 * dedupe, so we're not artificially capped if/when the CMS starts paginating
 * for real.
 */
async function collectDoctors(params: { clinic?: string; search?: string } = {}): Promise<DoctorsData> {
  const MAX_PAGES = 20;
  let page = 1;
  let first: DoctorsData | null = null;
  let items: DoctorListItem[] = [];
  const seen = new Set<string>();

  while (page <= MAX_PAGES) {
    const query = new URLSearchParams();
    if (params.clinic) query.set("clinic", params.clinic);
    if (params.search) query.set("search", params.search);
    query.set("page", String(page));

    const data = await getContent<DoctorsData>(`doctors?${query.toString()}`);
    if (!first) first = data;

    const newItems = data.items.filter((doctor) => !seen.has(`${doctor.id}-${doctor.slug}`));
    newItems.forEach((doctor) => seen.add(`${doctor.id}-${doctor.slug}`));
    items = items.concat(newItems);

    const pagination = data.pagination;
    if (!pagination || !pagination.hasNextPage || newItems.length === 0) break;
    if (page >= pagination.totalPages) break;
    page += 1;
  }

  return { ...(first as DoctorsData), items };
}

/**
 * Real, request-driven pagination for the doctors directory: fetches
 * whatever the CMS can currently provide via collectDoctors(), then serves
 * back exactly one `limit`-sized slice with accurate pagination metadata.
 * Today that pool caps out wherever the CMS bug caps it (e.g. 20 of 59);
 * once the CMS honours page/limit for real, this starts returning further
 * pages with no frontend change needed.
 */
export async function getDoctorsPage(
  params: { page?: number; limit?: number; clinic?: string; search?: string } = {},
): Promise<DoctorsData> {
  const page = Math.max(1, Math.floor(params.page || 1));
  const limit = Math.max(1, Math.floor(params.limit || DOCTORS_PAGE_SIZE));
  const all = await collectDoctors({ clinic: params.clinic, search: params.search });
  const start = (page - 1) * limit;
  const items = all.items.slice(start, start + limit);
  const totalItems = all.items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));

  return {
    ...all,
    items,
    pagination: {
      currentPage: page,
      perPage: limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}
export type DoctorDetail = DoctorListItem & {
  designation?: string;
  seo: { metaTitle: string; metaDescription: string };
  pageTitle: string;
  about: { title: string; paragraphs: string[] };
  stats: { id: string; icon: string | Media; value: string; label: string; sortOrder: number }[];
  expertise: { id: string; title: string; sortOrder: number }[];
  availability: { type: string; icon: string; label: string; value: string; sortOrder: number }[];
  appointment?: { title: string; buttonLabel: string; buttonUrl: string };
};
export type DynamicSection = {
  type: string;
  sortOrder: number;
  isEnabled: boolean;
  content: Record<string, any>;
};

export const localDoctorImage = (slug: string) =>
  ({
    "dr-amal": "/home/doctors/dr-amal.jpg",
    "dr-amrita-sathianathan": "/home/doctors/dr-amrita.jpg",
    "dr-vidhu-s": "/home/doctors/dr-vidhu.jpg",
    "dr-manu-mathew": "/home/doctors/dr-manu.jpg",
    "dr-megha-mohan": "/home/doctors/dr-megha.jpg",
  })[slug] || "/home/doctors/dr-amal.jpg";

export const section = (sections: DynamicSection[], type: string) =>
  sections.find((item) => item.type === type && item.isEnabled !== false)?.content;
