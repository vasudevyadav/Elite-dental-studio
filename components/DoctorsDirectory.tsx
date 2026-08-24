import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { localDoctorImage, type DoctorsData } from "@/lib/contentApi";

const PAGE_SIZE = 9;

export default function DoctorsDirectory({ data }: { data: DoctorsData }) {
  const doctors = data.items;
  const clinics = ["All Clinics", ...data.clinics.map((item) => item.name)];
  const [clinic, setClinic] = useState(data.clinics[0]?.name || "Calicut");
  const [activeClinic, setActiveClinic] = useState("All Clinics");
  const [page, setPage] = useState(1);

  const filteredDoctors = useMemo(
    () =>
      activeClinic === "All Clinics"
        ? doctors
        : doctors.filter((doctor) => doctor.clinics.some((item) => item.name === activeClinic)),
    [activeClinic, doctors],
  );
  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleDoctors = filteredDoctors.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const chooseClinic = (value: string) => {
    setActiveClinic(value);
    setPage(1);
  };

  return (
    <section className="px-5 pt-10 pb-16 sm:px-8 lg:px-12 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="text-center text-3xl font-extrabold tracking-[-0.03em] text-[#286f73] sm:text-4xl">
          {data.pageHeader.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_230px_auto_1fr] sm:gap-7">
          <span className="hidden h-px bg-[#94babb] sm:block" />
          <label className="sr-only" htmlFor="doctor-clinic">
            Choose a clinic
          </label>
          <select
            id="doctor-clinic"
            value={clinic}
            onChange={(event) => setClinic(event.target.value)}
            className="h-12 w-full rounded-full border border-[#46aaa8] bg-[#22cdbd] px-6 text-sm font-semibold text-[#23666a] uppercase outline-none focus:ring-4 focus:ring-[#25bfae]/20"
          >
            {clinics.slice(1).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => chooseClinic(clinic)}
            className="smooth-hover button-hover h-12 w-full rounded-full bg-[#296f73] px-6 text-sm font-extrabold text-white hover:bg-[#205e62] focus:ring-4 focus:ring-[#296f73]/20 focus:outline-none sm:w-auto sm:px-10"
          >
            Find Doctor
          </button>
          <span className="hidden h-px bg-[#94babb] sm:block" />
        </div>

        {activeClinic !== "All Clinics" && (
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => chooseClinic("All Clinics")}
              className="text-sm font-bold text-[#286f73] underline decoration-[#25bfae] decoration-2 underline-offset-4"
            >
              Showing {activeClinic} doctors · View all
            </button>
          </div>
        )}

        <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {visibleDoctors.map((doctor, index) => (
            <article
              key={`${doctor.name}-${doctor.slug}-${index}`}
              className="smooth-hover card-hover mx-auto flex w-full max-w-[350px] flex-col overflow-hidden rounded-[16px] border border-[#75aaaa] bg-[#eff9f7] shadow-[0_10px_24px_rgba(28,92,95,0.06)]"
            >
              <div className="relative h-[238px] bg-[#296f73] px-9 pt-3">
                <div className="relative h-[285px] overflow-hidden rounded-[17px] border-[3px] border-white bg-[#e9edf3] shadow-[0_8px_18px_rgba(25,68,72,0.18)]">
                  <Image
                    src={doctor.image.url || localDoctorImage(doctor.slug)}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 350px"
                    className="image-hover object-cover object-[center_22%]"
                  />
                </div>
                {(doctor.experienceYears > 0 || doctor.experienceLabel.trim()) && (
                  <div className="absolute top-2 right-9 z-10 grid h-14 w-14 place-items-center bg-[#24d1c0] text-center text-[11px] leading-tight font-black text-white [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]">
                    {doctor.experienceLabel || `${doctor.experienceYears}+`}
                    <br />
                    Exp
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col px-7 pt-20 pb-6 text-center">
                <h2 className="text-[22px] leading-tight font-extrabold text-[#296f73]">
                  {doctor.name}
                </h2>
                <p className="mx-auto mt-2 min-h-[36px] max-w-[275px] text-sm leading-[1.35] text-[#596464] italic">
                  {doctor.speciality}
                </p>
                <div className="mt-3 border-t border-[#75aaaa] pt-3 text-left">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="font-bold text-[#35777a]">Qualification</span>
                    <span className="text-[#535d5d]">{doctor.qualification}</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    href={doctor.profileUrl || `/doctors/${doctor.slug}`}
                    className="smooth-hover button-hover rounded-md bg-[#296f73] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#205e62]"
                  >
                    View Profile
                  </Link>
                  <Link
                    href="#appointment"
                    className="smooth-hover button-hover rounded-md bg-[#22cdbd] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#18b9aa]"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleDoctors.length === 0 && (
          <p className="py-20 text-center text-lg font-semibold text-[#286f73]">
            No doctors found for this clinic.
          </p>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-14 flex items-center justify-center gap-[13px]"
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
      </div>
    </section>
  );
}
