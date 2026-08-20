import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { localDoctorImage, type DoctorListItem } from "@/lib/contentApi";

const PAGE_SIZE = 5;

const highlights = [
  {
    stat: "15+",
    label: "Orthodontists",
    description: "Expert teeth alignment for improved oral hygiene & function",
    image: "/home/orthodontists.png",
  },
  {
    stat: "70%",
    label: "Women Leading",
    description: "Leading with empathy, precision & clinical excellence",
    image: "/home/women-leading.png",
  },
  {
    stat: "100%",
    label: "MDS Doctors",
    description: "Providing advanced care in oral surgery, orthodontics and more",
    image: "/home/mds-doctor.png",
  },
];

const doctors = [
  {
    name: "Dr. Amrita Sathianathan",
    qualification: "BDS, MDS",
    speciality:
      "(Prosthodontics & Implantology) Fellowship in Orofacial Pain & Dental Sleep Medicine",
    image: "/home/doctors/dr-amrita.jpg",
  },
  {
    name: "Dr. Amal",
    qualification: "BDS, MDS",
    speciality: "(Pedodontics & Preventive Dentistry) & Managing Director",
    image: "/home/doctors/dr-amal.jpg",
  },
  {
    name: "Dr. Vidhu S",
    qualification: "BDS, MDS",
    speciality: "(Orthodontics) Invisalign Certified Orthodontist",
    image: "/home/doctors/dr-vidhu.jpg",
  },
  {
    name: "Dr. Manu Mathew",
    qualification: "BDS, MDS (Orthodontics)",
    speciality: "Aligner Specialist",
    image: "/home/doctors/dr-manu.jpg",
  },
  {
    name: "Dr. Megha Mohan",
    qualification: "BDS, MDS",
    speciality: "(Pedodontics & Preventive Dentistry)",
    image: "/home/doctors/dr-megha.jpg",
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function DoctorsSection({
  compact = false,
  clinicSlug,
  initialDoctors,
  title = "Our Doctors",
  description,
}: {
  compact?: boolean;
  clinicSlug?: string;
  initialDoctors?: DoctorListItem[];
  title?: string;
  description?: string;
}) {
  const doctorsTrackRef = useRef<HTMLDivElement>(null);
  const [apiDoctors, setApiDoctors] = useState<DoctorListItem[] | null>(initialDoctors || null);
  const [page, setPage] = useState(1);
  const filteredDoctors =
    apiDoctors?.filter(
      (doctor) => !clinicSlug || doctor.clinics.some((clinic) => clinic.slug === clinicSlug),
    ) ||
    doctors.map((doctor, index) => ({
      ...doctor,
      id: String(index),
      slug: "dr-amal",
      experienceYears: 0,
      experienceLabel: "",
      image: { url: doctor.image, alt: doctor.name },
      clinics: [],
      profileUrl: "/doctors/dr-amal",
      sortOrder: index,
    }));
  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleDoctors = filteredDoctors.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    if (initialDoctors?.length) return;

    const controller = new AbortController();
    fetch("/api/doctors", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (Array.isArray(payload?.data?.items)) setApiDoctors(payload.data.items);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [initialDoctors]);

  const scrollDoctors = (direction: "left" | "right") => {
    const track = doctorsTrackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("a");

    if (!track || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 24;

    track.scrollBy({
      left: direction === "right" ? firstCard.offsetWidth + gap : -(firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="doctors"
      className={`mx-auto px-5 py-4 sm:px-8 lg:py-8 ${compact ? "max-w-6xl lg:px-0" : "max-w-7xl lg:px-24"}`}
    >
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#286f73] lg:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-2 max-w-5xl text-sm leading-[1.65] text-[#555] lg:mt-5 lg:text-base">
          {description ||
            "Our MDS certified specialists across Calicut, Kochi, Kannur and Coimbatore cover every specialty Elite Dental Studio offers, including implantology, orthodontics, pedodontics, endodontics, periodontics, prosthodontics, Oral Medicine, Oral Pathology and oral surgery. Book your appointment with experts trained specifically in the field treating you, not general dentistry stretched across every problem."}
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        {highlights.map((highlight, index) => (
          <article
            key={highlight.label}
            className={`smooth-hover card-hover flex min-h-[120px] items-center gap-5 rounded-[20px] border-2 border-[#8ab7b8] bg-[#f4fbfa] px-5 py-3 hover:border-[#2acfc1] lg:px-7 ${
              index === highlights.length - 1
                ? "sm:col-span-2 sm:mx-auto sm:w-[48%] lg:col-span-1 lg:mx-0 lg:w-auto"
                : ""
            }`}
          >
            <div className="flex-shrink-0">
              <Image
                src={highlight.image}
                alt={highlight.label}
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
              />
            </div>

            <div>
              <h3 className="leading-tight">
                <span className="text-sm font-semibold text-[#29cfc0] lg:text-lg">
                  {highlight.stat}
                </span>{" "}
                <span className="text-sm font-semibold text-[#414141] lg:text-lg">
                  {highlight.label}
                </span>
              </h3>

              <p className="mt-1 text-[13px] leading-[1.45] font-medium text-[#4f5353] lg:text-[15px]">
                {highlight.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Doctors carousel */}
      <div
        ref={doctorsTrackRef}
        role="region"
        aria-label="Our doctors carousel"
        tabIndex={0}
        className={`mt-12 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto scroll-smooth pb-5 outline-none focus-visible:ring-4 focus-visible:ring-[#29cfc0]/25 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:mt-20 [&::-webkit-scrollbar]:hidden ${compact ? "lg:grid-cols-5 lg:gap-4" : "lg:grid-cols-3 lg:gap-7 xl:grid-cols-5"}`}
      >
        {visibleDoctors.map((doctor) => (
          <Link
            href={doctor.profileUrl || `/doctors/${doctor.slug}`}
            key={doctor.name}
            className="group smooth-hover card-hover flex w-[84%] max-w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-[#2b7477] p-2 pb-0 shadow-[0_14px_35px_rgba(25,87,90,0.12)] sm:mx-auto sm:w-full sm:max-w-none"
          >
            <div className="relative aspect-[1.03/1] overflow-hidden rounded-[20px] bg-[#edf2f5]">
              <Image
                src={doctor.image.url || localDoctorImage(doctor.slug)}
                alt={doctor.name}
                fill
                className="image-hover object-cover object-[center_0%]"
              />
            </div>

            <div className="flex min-h-[142px] flex-1 flex-col items-center justify-start px-2 pt-4 pb-5 text-center text-white">
              <h3 className="text-base leading-tight font-bold lg:text-lg">{doctor.name}</h3>

              <p className="mt-3 mb-2 text-xs leading-[1.25] font-medium text-white/95">
                {doctor.qualification}
              </p>

              <p className="max-w-[235px] text-[11px] leading-[1.25] font-medium text-white/90 uppercase">
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scrollDoctors("left")}
          aria-label="View previous doctors"
          className="smooth-hover button-hover hover-lift flex h-11 w-12 items-center justify-center rounded-lg bg-[#29cfc0] text-white shadow-sm hover:bg-[#20bfb1] focus:ring-4 focus:ring-[#29cfc0]/25 focus:outline-none"
        >
          <Arrow direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollDoctors("right")}
          aria-label="View next doctors"
          className="smooth-hover button-hover hover-lift flex h-11 w-12 items-center justify-center rounded-lg bg-[#2b7477] text-white shadow-sm hover:bg-[#205f63] focus:ring-4 focus:ring-[#2b7477]/25 focus:outline-none"
        >
          <Arrow direction="right" />
        </button>
      </div>

      {totalPages > 1 && (
        <nav
          className="mt-6 flex items-center justify-center gap-[13px]"
          aria-label="Doctors pagination"
        >
          {pageNumbers.map((item) => (
            <button
              key={item}
              type="button"
              className={`grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 text-[10px] font-bold text-white ${currentPage === item ? "bg-[#21cdbd]" : "bg-[#2d7376]"}`}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 bg-[#21cdbd] text-[10px] font-bold text-white"
            onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
            aria-label="Next page"
          >
            →
          </button>
        </nav>
      )}
    </section>
  );
}
