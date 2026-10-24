type DoctorReference = {
  slug?: string;
  name?: string;
  profileUrl?: string;
};

const hiddenDoctorSlugs = new Set(["dr-fathima-nifla", "dr-fathima-nifla-cp"]);
const hiddenDoctorNames = new Set([
  "dr. fathima nifla",
  "dr fathima nifla",
  "fathima nifla",
  "dr. fathima nifla cp",
  "dr fathima nifla cp",
  "fathima nifla cp",
]);

export function isHiddenDoctor(doctor: DoctorReference): boolean {
  const slug = doctor.slug?.trim().toLowerCase();
  const profileSlug = doctor.profileUrl?.split("/").filter(Boolean).at(-1)?.toLowerCase();
  const name = doctor.name?.replace(/\s+/g, " ").trim().toLowerCase();

  return (
    (slug ? hiddenDoctorSlugs.has(slug) : false) ||
    (profileSlug ? hiddenDoctorSlugs.has(profileSlug) : false) ||
    (name ? hiddenDoctorNames.has(name) : false)
  );
}

export function isHiddenDoctorSlug(slug: string): boolean {
  return hiddenDoctorSlugs.has(slug.trim().toLowerCase());
}
