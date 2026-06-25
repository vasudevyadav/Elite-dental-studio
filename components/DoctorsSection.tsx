import Image from "next/image";
import { useRef } from "react";

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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-5-5 5 5-5 5"
      />
    </svg>
  );
}

export default function DoctorsSection() {
  const doctorsTrackRef = useRef<HTMLDivElement>(null);

  const scrollDoctors = (direction: "left" | "right") => {
    const track = doctorsTrackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("article");

    if (!track || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 24;

    track.scrollBy({
      left:
        direction === "right"
          ? firstCard.offsetWidth + gap
          : -(firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="doctors"
      className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12 lg:py-8"
    >
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-[#286f73] lg:text-[48px]">
          Our Doctors
        </h2>

        <p className="mx-auto mt-3 max-w-[1120px] text-sm leading-[1.65] text-[#555] sm:text-lg lg:mt-5 lg:text-[20px]">
          We are delighted to welcome you to Elite Dental Studio! At our office,
          every member of our team strives to make each patient feel welcome,
          comfortable, and valued – because you are the most important person in
          our office. We love helping patients who suffer from dental anxiety or
          fear.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        {highlights.map((highlight, index) => (
          <article
            key={highlight.label}
            className={`flex min-h-[120px] items-center gap-5 rounded-[20px] border-2 border-[#8ab7b8] bg-[#f4fbfa] px-5 py-3 transition duration-300 hover:-translate-y-1 hover:border-[#2acfc1] hover:shadow-[0_14px_35px_rgba(36,110,114,0.1)] lg:px-7 ${index === highlights.length - 1
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
                <span className="text-2xl font-black text-[#29cfc0]">
                  {highlight.stat}
                </span>{" "}
                <span className="text-xl font-extrabold text-[#414141] lg:text-2xl">
                  {highlight.label}
                </span>
              </h3>

              <p className="mt-1 text-xs font-medium leading-[1.45] text-[#4f5353] lg:text-sm">
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
        className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 outline-none focus-visible:ring-4 focus-visible:ring-[#29cfc0]/25 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:mt-20 lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="group flex w-[84%] max-w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-[#2b7477] p-3 pb-0 shadow-[0_14px_35px_rgba(25,87,90,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(25,87,90,0.2)] sm:mx-auto sm:w-full sm:max-w-none"
          >
            <div className="relative aspect-[1.03/1] overflow-hidden rounded-[20px] bg-[#edf2f5]">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1279px) 30vw, 250px"
                className="object-cover object-[center_22%] transition duration-500 group-hover:scale-[1.035]"
              />
            </div>

            <div className="flex min-h-[142px] flex-1 flex-col items-center justify-start px-2 pb-5 pt-4 text-center text-white">
              <h3 className="text-lg font-extrabold leading-tight lg:text-[19px]">
                {doctor.name}
              </h3>

              <p className="mt-3 text-xs font-semibold leading-[1.25] text-white/95">
                {doctor.qualification}
              </p>

              <p className="mt-1 max-w-[235px] text-[11px] font-medium uppercase leading-[1.25] text-white/90">
                {doctor.speciality}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scrollDoctors("left")}
          aria-label="View previous doctors"
          className="flex h-11 w-12 items-center justify-center rounded-lg bg-[#29cfc0] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#20bfb1] focus:outline-none focus:ring-4 focus:ring-[#29cfc0]/25"
        >
          <Arrow direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollDoctors("right")}
          aria-label="View next doctors"
          className="flex h-11 w-12 items-center justify-center rounded-lg bg-[#2b7477] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#205f63] focus:outline-none focus:ring-4 focus:ring-[#2b7477]/25"
        >
          <Arrow direction="right" />
        </button>
      </div>
    </section>
  );
}
