import type { DoctorListItem } from "@/lib/contentApi";

// Keep the same priority on the home page, directory and clinic pages.
const doctorOrder = [
  "dr-amal",
  "dr-jafar-vazhappully",
  "dr-fathima-nifla-cp",
  "dr-sreenath-n",
  "dr-vipin-viswanath",
  "dr-shahin-ali-t",
  "dr-harikrishnan-k-prasad",
  "dr-megha-mohan",
  "dr-theertha-raveendran",
];

export function orderDoctors<T extends { slug: string }>(doctors: T[]): T[] {
  const priority = (slug: string) => {
    const index = doctorOrder.indexOf(slug);
    return index < 0 ? doctorOrder.length : index;
  };
  return [...doctors].sort((a, b) => priority(a.slug) - priority(b.slug));
}

type DoctorIdentity = Pick<DoctorListItem, "slug" | "name" | "qualification" | "speciality"> & {
  designation?: string;
};

const cleanText = (value: string) => value.replace(/\s+/g, " ").trim();

export function getDoctorIdentity(doctor: DoctorIdentity) {
  const name = cleanText(doctor.name)
    .replace(/^dr\s*\.?\s*/i, "Dr. ")
    .replace(/\b[a-z]+\b/g, (word) => word[0].toUpperCase() + word.slice(1));

  const rolePattern = /\b(?:(?:Managing|Medical|Executive)\s+Director|Director|Manager)\b/i;
  const speciality = cleanText(doctor.speciality);
  const role = speciality.match(rolePattern)?.[0] || "";
  const specialtyWithoutRole = speciality
    .replace(rolePattern, "")
    .replace(/^[\s.·&,]+|[\s.·&,]+$/g, "")
    .trim();
  const qualification = cleanText(doctor.qualification)
    .replace(/\bBDS\s+MDS\b/gi, "BDS, MDS")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\.$/, "");
  const department = qualification.match(/\s*\(([^()]*)\)$/);
  const degrees = department ? qualification.slice(0, department.index).trim() : qualification;
  const specialty = specialtyWithoutRole || department?.[1] || "";

  return {
    name,
    role: cleanText(doctor.designation || role),
    specialty,
    qualification: degrees,
  };
}
