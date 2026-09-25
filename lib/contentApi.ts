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

/**
 * The doctors CMS endpoint pagination is unreliable (may ignore page/limit
 * or under-report hasNextPage/totalPages). Fetch pages until the API stops
 * returning new items so the directory always shows every doctor.
 */
export async function getAllDoctors(params: { clinic?: string; search?: string } = {}): Promise<DoctorsData> {
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
