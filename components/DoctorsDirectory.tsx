import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Doctor = {
  name: string;
  qualification: string;
  speciality: string;
  clinic: string;
  experience: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    name: "Dr. Amal",
    qualification: "BDS, MDS",
    speciality: "Pedodontics & Preventive Dentistry · Managing Director",
    clinic: "Calicut",
    experience: "15 Yrs",
    image: "/home/doctors/dr-amal.jpg",
  },
  {
    name: "Dr. Amrita Sathianathan",
    qualification: "BDS, MDS",
    speciality: "Prosthodontics & Implantology",
    clinic: "Kochi",
    experience: "12 Yrs",
    image: "/home/doctors/dr-amrita.jpg",
  },
  {
    name: "Dr. Vidhu S",
    qualification: "BDS, MDS",
    speciality: "Invisalign Certified Orthodontist",
    clinic: "Calicut",
    experience: "10 Yrs",
    image: "/home/doctors/dr-vidhu.jpg",
  },
  {
    name: "Dr. Manu Mathew",
    qualification: "BDS, MDS (Orthodontics)",
    speciality: "Orthodontics · Aligner Specialist",
    clinic: "Kannur",
    experience: "10 Yrs",
    image: "/home/doctors/dr-manu.jpg",
  },
  {
    name: "Dr. Megha Mohan",
    qualification: "BDS, MDS",
    speciality: "Pedodontics & Preventive Dentistry",
    clinic: "Coimbatore",
    experience: "8 Yrs",
    image: "/home/doctors/dr-megha.jpg",
  },
  {
    name: "Dr. Amal",
    qualification: "BDS, MDS",
    speciality: "Paediatric Dentistry · Smile Care",
    clinic: "Kochi",
    experience: "15 Yrs",
    image: "/home/doctors/dr-amal.jpg",
  },
];

const clinics = ["All Clinics", "Calicut", "Kochi", "Kannur", "Coimbatore"];

export default function DoctorsDirectory() {
  const [clinic, setClinic] = useState("Calicut");
  const [activeClinic, setActiveClinic] = useState("All Clinics");
  const [expandedDoctor, setExpandedDoctor] = useState<string | null>(null);

  const visibleDoctors = useMemo(
    () =>
      activeClinic === "All Clinics"
        ? doctors
        : doctors.filter((doctor) => doctor.clinic === activeClinic),
    [activeClinic],
  );

  return (
    <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="text-center text-3xl font-extrabold tracking-[-0.03em] text-[#286f73] sm:text-4xl">
          Our Doctors
        </h1>

        <div className="mt-8 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_230px_auto_1fr] sm:gap-7">
          <span className="hidden h-px bg-[#94babb] sm:block" />
          <label className="sr-only" htmlFor="doctor-clinic">Choose a clinic</label>
          <select
            id="doctor-clinic"
            value={clinic}
            onChange={(event) => setClinic(event.target.value)}
            className="h-12 w-full rounded-full border border-[#46aaa8] bg-[#22cdbd] px-6 text-sm font-semibold uppercase text-[#23666a] outline-none focus:ring-4 focus:ring-[#25bfae]/20"
          >
            {clinics.slice(1).map((item) => <option key={item}>{item}</option>)}
          </select>
          <button
            type="button"
            onClick={() => setActiveClinic(clinic)}
            className="smooth-hover button-hover h-12 w-full rounded-full bg-[#296f73] px-6 text-sm font-extrabold text-white hover:bg-[#205e62] focus:outline-none focus:ring-4 focus:ring-[#296f73]/20 sm:w-auto sm:px-10"
          >
            Find Doctor
          </button>
          <span className="hidden h-px bg-[#94babb] sm:block" />
        </div>

        {activeClinic !== "All Clinics" && (
          <div className="mt-5 flex justify-center">
            <button type="button" onClick={() => setActiveClinic("All Clinics")} className="text-sm font-bold text-[#286f73] underline decoration-[#25bfae] decoration-2 underline-offset-4">
              Showing {activeClinic} doctors · View all
            </button>
          </div>
        )}

        <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {visibleDoctors.map((doctor, index) => (
            <article key={`${doctor.name}-${doctor.clinic}-${index}`} className="smooth-hover card-hover mx-auto flex w-full max-w-[350px] flex-col overflow-hidden rounded-[18px] border border-[#75aaaa] bg-[#eff9f7] shadow-[0_10px_24px_rgba(28,92,95,0.08)]">
              <div className="relative h-[168px] bg-[#296f73] px-8 pt-3">
                <div className="relative h-[195px] overflow-hidden rounded-[18px] border-[3px] border-white bg-[#e9edf3] shadow-[0_8px_18px_rgba(25,68,72,0.18)]">
                  <Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 350px" className="image-hover object-cover object-[center_22%]" />
                </div>
                <div className="absolute right-8 top-2 z-10 grid h-14 w-14 place-items-center bg-[#24d1c0] text-center text-[11px] font-black leading-tight text-white [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]">
                  {doctor.experience}<br />Exp
                </div>
              </div>

              <div className="flex flex-1 flex-col px-7 pb-6 pt-10 text-center">
                <h2 className="text-[25px] font-extrabold leading-tight text-[#296f73]">{doctor.name}</h2>
                <p className="mx-auto mt-1 min-h-[36px] max-w-[275px] text-xs italic leading-[1.35] text-[#596464]">{doctor.speciality}</p>
                <div className="mt-3 border-t border-[#75aaaa] pt-3 text-left">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="font-extrabold text-[#35777a]">Qualification</span>
                    <span className="text-[#535d5d]">{doctor.qualification}</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    aria-expanded={expandedDoctor === `${doctor.name}-${index}`}
                    onClick={() => setExpandedDoctor((current) => current === `${doctor.name}-${index}` ? null : `${doctor.name}-${index}`)}
                    className="smooth-hover button-hover rounded-md bg-[#296f73] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#205e62]"
                  >
                    {expandedDoctor === `${doctor.name}-${index}` ? "Close Profile" : "View Profile"}
                  </button>
                  <Link href="#appointment" className="smooth-hover button-hover rounded-md bg-[#22cdbd] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#18b9aa]">Book Appointment</Link>
                </div>
                <div className={`grid text-left transition-[grid-template-rows,opacity,margin] duration-300 ${expandedDoctor === `${doctor.name}-${index}` ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="rounded-lg bg-white/80 p-3 text-xs leading-5 text-[#536161]">
                      Available at our {doctor.clinic} clinic. Specialised in {doctor.speciality.toLowerCase()} with {doctor.experience.toLowerCase()} of clinical experience.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleDoctors.length === 0 && (
          <p className="py-20 text-center text-lg font-semibold text-[#286f73]">No doctors found for this clinic.</p>
        )}
      </div>
    </section>
  );
}
