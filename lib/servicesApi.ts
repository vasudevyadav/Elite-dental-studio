import { services as fallbackServices, type Service } from "@/components/services/serviceData";
import { getEdsApiBaseUrl } from "@/lib/apiConfig";

export type Media = { url: string; alt: string; width?: number | null; height?: number | null };

export type ServiceListItem = {
  id?: string;
  slug: string;
  title: string;
  shortDescription: string;
  cardImage: Media;
  icon: Media;
  sortOrder: number;
};

export type ServiceSection = {
  type:
    | "overview"
    | "introduction"
    | "procedures"
    | "candidate"
    | "expectation"
    | "aftercare"
    | "benefits"
    | "results";
  sortOrder: number;
  isEnabled: boolean;
  content: Record<string, unknown>;
};

export type ServiceAccordionItem = {
  title: string;
  body: string;
  image?: Media | null;
};

export type ServiceDetail = ServiceListItem & {
  treatmentName: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    robots?: string;
    ogImage?: string;
  };
  hero?: { image?: Media };
  sections: ServiceSection[];
  accordionItems: ServiceAccordionItem[];
};

export type ServicesPageData = {
  pageSeo: { metaTitle: string; metaDescription: string };
  hero?: { image?: Media };
  section?: {
    eyebrow?: string;
    icon?: Media;
    title?: string;
    description?: string;
  };
  items: ServiceListItem[];
};

type Envelope<T> = { success: boolean; message?: string; data: T };

const fallbackItems: ServiceListItem[] = fallbackServices.map((service, index) => ({
  ...service,
  shortDescription: "We are excited to meet you and provide the best dental care for your family.",
  cardImage: { url: service.image, alt: service.title },
  icon: { url: service.icon, alt: "" },
  sortOrder: index + 1,
}));

function unwrap<T>(payload: Envelope<T> | T): T {
  if (payload && typeof payload === "object" && "data" in payload) {
    return (payload as Envelope<T>).data;
  }
  return payload as T;
}

function decodeText(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizeListItem(item: ServiceListItem, index: number): ServiceListItem {
  const fallback = fallbackItems.find((service) => service.slug === item.slug);
  const title = decodeText(item.title);
  return {
    ...item,
    title,
    shortDescription: item.shortDescription || fallback?.shortDescription || "",
    cardImage: {
      ...item.cardImage,
      url: item.cardImage?.url || fallback?.cardImage.url || "/service/services-1.png",
      alt: decodeText(item.cardImage?.alt || title),
    },
    icon: {
      ...item.icon,
      url: item.icon?.url || fallback?.icon.url || "/service/services-icon-14.png",
      alt: decodeText(item.icon?.alt || ""),
    },
    sortOrder: item.sortOrder ?? index + 1,
  };
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${getEdsApiBaseUrl()}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Services API returned ${response.status}`);
  return unwrap<T>((await response.json()) as Envelope<T> | T);
}

export async function getServicesStrict(): Promise<ServiceListItem[]> {
  const data = await request<{ items: ServiceListItem[] } | ServiceListItem[]>("/services");
  const items = Array.isArray(data) ? data : data.items;
  return items
    .filter((item) => item?.slug && item?.title)
    .map(normalizeListItem)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getServicesPage(): Promise<ServicesPageData> {
  const data = await request<ServicesPageData>("/services");
  return {
    ...data,
    items: (data.items ?? [])
      .filter((item) => item?.slug && item?.title)
      .map(normalizeListItem)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)),
  };
}

export async function getServices(): Promise<ServiceListItem[]> {
  try {
    return await getServicesStrict();
  } catch (error) {
    console.error("Unable to load services API; using local fallback.", error);
    return fallbackItems;
  }
}

export async function getService(slug: string): Promise<ServiceDetail | null> {
  try {
    const service = await request<
      ServiceDetail &
        Record<ServiceSection["type"], Record<string, unknown>> & { accordion?: unknown }
    >(`/services/${encodeURIComponent(slug)}`);
    const listItem = normalizeListItem(service, service.sortOrder ?? 0);
    const accordionItems: ServiceAccordionItem[] = Array.isArray(service.accordion)
      ? (service.accordion as ServiceAccordionItem[])
      : [];
    const sectionTypes: ServiceSection["type"][] = [
      "overview",
      "introduction",
      "procedures",
      "candidate",
      "expectation",
      "aftercare",
      "benefits",
      "results",
    ];
    const sections = service.sections?.length
      ? service.sections
      : sectionTypes
          .filter((type) => service[type] && typeof service[type] === "object")
          .map((type, index) => ({
            type,
            sortOrder: index + 1,
            isEnabled: true,
            content: service[type],
          }));
    return {
      ...service,
      ...listItem,
      hero: {
        image: {
          url: service.hero?.image?.url || "/service/services-inner-bg.png",
          alt: service.hero?.image?.alt || "Dental treatment at Elite Dental Studio",
        },
      },
      sections: sections
        .filter((section) => section.isEnabled !== false)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)),
      accordionItems,
    };
  } catch (error) {
    console.error(`Unable to load service ${slug}.`, error);
    const fallback = fallbackItems.find((item) => item.slug === slug);
    return fallback
      ? { ...fallback, treatmentName: fallback.title, sections: [], accordionItems: [] }
      : null;
  }
}

export function toLegacyService(service: ServiceListItem): Service {
  return {
    slug: service.slug,
    title: service.title,
    image: service.cardImage.url,
    icon: service.icon.url,
  };
}
