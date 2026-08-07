export type OfficeLocation = "All" | "Calicut" | "Kochi" | "Kannur" | "Coimbatore";

export type OfficeImage = {
  src: string;
  location: Exclude<OfficeLocation, "All">;
  label: string;
};

export const officeImages: OfficeImage[] = [
  { src: "/office/calicut-04.webp", location: "Calicut", label: "Reception & welcome desk" },
  { src: "/office/calicut-02.webp", location: "Calicut", label: "Modern treatment suite" },
  { src: "/office/kochi-05.webp", location: "Kochi", label: "Kids-friendly dental zone" },
  { src: "/office/calicut-06.webp", location: "Calicut", label: "Advanced consultation room" },
  { src: "/office/kochi-02.webp", location: "Kochi", label: "Comfortable patient lounge" },
  { src: "/office/calicut-07.webp", location: "Calicut", label: "Precision dentistry setup" },
  { src: "/office/kochi-03.webp", location: "Kochi", label: "Sterile clinical environment" },
  { src: "/office/calicut-08.webp", location: "Calicut", label: "Digital dental technology" },
  { src: "/office/kochi-04.webp", location: "Kochi", label: "Private treatment room" },
  { src: "/office/calicut-10.webp", location: "Calicut", label: "Patient-first care space" },
  { src: "/office/kochi-01.webp", location: "Kochi", label: "Calm clinic interiors" },
  { src: "/office/calicut-03.webp", location: "Calicut", label: "Contemporary dental operatory" },
  { src: "/office/5bbea59a-c621-473f-8a9d-c4ff63269196.webp", location: "Kannur", label: "Modern treatment room" },
  { src: "/office/609f5926-bd3d-416d-86d6-47f165877893.webp", location: "Kannur", label: "Child-friendly waiting area" },
  { src: "/office/a7fa275e-4a61-46d4-811f-bdd660d0214f.webp", location: "Kannur", label: "Advanced dental operatory" },
  { src: "/office/1f0186e7-99d0-44d4-a6dd-efb98b394a8e.webp", location: "Coimbatore", label: "Contemporary patient lounge" },
  { src: "/office/d00b4f41-5e9f-4038-b395-bf7ac3c2dafd.webp", location: "Coimbatore", label: "Technology-led treatment suite" },
  { src: "/office/439667b9-ee1f-459f-a1a5-f9f277027a4b.webp", location: "Coimbatore", label: "Reception and welcome area" },
];

export const officeFeatures = [
  ["01", "Specialist-led care", "Every dental concern is directed to an MDS-qualified specialist in the relevant field."],
  ["02", "Advanced diagnostics", "Digital X-rays and modern imaging help our team explain and plan treatment clearly."],
  ["03", "Hygiene-first spaces", "Thoughtfully organised clinical zones support safe, clean and efficient patient care."],
  ["04", "Comfort for every age", "Relaxed waiting areas and child-friendly spaces make visits easier for the whole family."],
] as const;
