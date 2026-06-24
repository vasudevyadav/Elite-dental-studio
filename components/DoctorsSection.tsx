import Image from "next/image";

type HighlightIcon = "orthodontist" | "woman" | "award";

const highlights: {
  stat: string;
  label: string;
  description: string;
  icon: HighlightIcon;
}[] = [
  {
    stat: "15+",
    label: "Orthodontists",
    description: "Expert teeth alignment for improved oral hygiene & function",
    icon: "orthodontist",
  },
  {
    stat: "70%",
    label: "Women Leading",
    description: "Leading with empathy, precision & clinical excellence",
    icon: "woman",
  },
  {
    stat: "100%",
    label: "MDS Doctors",
    description: "Providing advanced care in oral surgery, orthodontics and more",
    icon: "award",
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

function HighlightGraphic({ type }: { type: HighlightIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 shrink-0 text-[#2f3434]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "orthodontist" && (
        <>
          <circle cx="23" cy="15" r="8" />
          <path d="M15 13c4-1 7-4 9-8 2 4 4 6 7 8M13 53V34c0-7 4-12 10-12s10 5 10 12v19M17 28l6 8 6-8M23 36v17" />
          <circle cx="43" cy="42" r="12" />
          <path d="M43 34c-4 0-6 3-6 6 0 2 1 4 2 6 .6 2 1 5 2.4 5 1.2 0 .7-4 2.1-4s.9 4 2.1 4C47 51 47.4 48 48 46c1-2 2-4 2-6 0-3-3-6-7-6Z" />
        </>
      )}

      {type === "woman" && (
        <>
          <path d="M19 25c-3-2-4-6-4-10C15 7 20 3 27 3s12 4 12 12c0 4-1 8-4 10" />
          <path d="M20 12c3-1 7-4 8-7 2 4 5 6 9 7v7c0 6-4 11-9 11s-9-5-9-11v-7Z" />
          <path d="M9 59V43c0-8 6-13 14-13h10c8 0 14 5 14 13v16M18 34l10 10 10-10M28 44v15" />
          <path d="M47 38c5 0 8 4 8 9v12M51 46v7m-4-3h8" />
        </>
      )}

      {type === "award" && (
        <>
          <path d="m32 5 5 3 6-1 3 5 6 2v6l4 5-4 5v6l-6 2-3 5-6-1-5 3-5-3-6 1-3-5-6-2v-6l-4-5 4-5v-6l6-2 3-5 6 1 5-3Z" />
          <circle cx="32" cy="25" r="11" />
          <path d="m32 17 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5ZM22 43l-4 16 9-5 5 6 3-15M42 43l4 16-9-5-5 6" />
        </>
      )}
    </svg>
  );
}

export default function DoctorsSection() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-[#286f73] lg:text-[48px]">
          Our Doctors
        </h2>
        <p className="mx-auto lg:mt-5 mt-3 max-w-[1120px] text-base leading-[1.65] text-[#555] sm:text-lg lg:text-[20px]">
          We are delighted to welcome you to Elite Dental Studio! At our office,
          every member of our team strives to make each patient feel welcome,
          comfortable, and valued – because you are the most important person in
          our office. We love helping patients who suffer from dental anxiety or
          fear.
        </p>
      </div>

      <div className="lg:mt-12 mt-6 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        {highlights.map((highlight, index) => (
          <article
            key={highlight.label}
            className={`flex min-h-[142px] items-center gap-5 rounded-[20px] border-2 border-[#8ab7b8] bg-[#f4fbfa] px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#2acfc1] hover:shadow-[0_14px_35px_rgba(36,110,114,0.1)] lg:px-7 ${
              index === highlights.length - 1
                ? "sm:col-span-2 sm:mx-auto sm:w-[48%] lg:col-span-1 lg:mx-0 lg:w-auto"
                : ""
            }`}
          >
            <HighlightGraphic type={highlight.icon} />
            <div>
              <h3 className="leading-tight">
                <span className="text-[25px] font-black text-[#29cfc0]">
                  {highlight.stat}
                </span>{" "}
                <span className="text-xl font-extrabold text-[#414141] lg:text-[23px]">
                  {highlight.label}
                </span>
              </h3>
              <p className="mt-2 text-sm font-medium leading-[1.45] text-[#4f5353] lg:text-base">
                {highlight.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-5 xl:gap-7">
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="group mx-auto flex w-full max-w-[330px] flex-col overflow-hidden rounded-[28px] bg-[#2b7477] p-3 pb-0 shadow-[0_14px_35px_rgba(25,87,90,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(25,87,90,0.2)] xl:max-w-none"
          >
            <div className="relative aspect-[1.03/1] overflow-hidden rounded-[20px] bg-[#edf2f5]">
              <Image
                src={doctor.image}
                alt={`Demo portrait of ${doctor.name}`}
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
    </section>
  );
}
