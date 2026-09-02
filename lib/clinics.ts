export const MAIN_CLINICS = [
  { name: "Calicut", slug: "calicut" },
  { name: "Kochi", slug: "kochi" },
  { name: "Kannur", slug: "kannur" },
  { name: "Coimbatore", slug: "coimbatore" },
] as const;

const MAIN_CLINIC_SLUGS = new Set<string>(MAIN_CLINICS.map((clinic) => clinic.slug));

export function isMainClinic(slug?: string | null) {
  return MAIN_CLINIC_SLUGS.has(String(slug || "").toLowerCase());
}

export function isLocationSpecificServiceSlug(slug?: string | null) {
  const slugParts = String(slug || "")
    .toLowerCase()
    .split("-");
  return MAIN_CLINICS.some((clinic) => slugParts.includes(clinic.slug));
}
