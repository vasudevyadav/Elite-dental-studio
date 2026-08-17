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
export type DoctorsData = {
  pageSeo: { metaTitle: string; metaDescription: string };
  pageHeader: { title: string };
  clinics: ClinicRef[];
  items: DoctorListItem[];
};
export type DoctorDetail = DoctorListItem & {
  designation?: string;
  seo: { metaTitle: string; metaDescription: string };
  pageTitle: string;
  about: { title: string; paragraphs: string[] };
  stats: { id: string; icon: string; value: string; label: string; sortOrder: number }[];
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
