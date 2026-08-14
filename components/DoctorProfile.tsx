import Image from "next/image";
import { localDoctorImage, type DoctorDetail } from "@/lib/contentApi";

export default function DoctorProfile({ doctor }: { doctor: DoctorDetail }) {
  const clinic = doctor.clinics[0];
  return (
    <section className="px-5 pt-10 pb-14 sm:px-8 lg:px-12 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="text-center text-3xl font-bold tracking-[-0.03em] text-[#286f73] lg:text-4xl">
          {doctor.pageTitle}
        </h1>

        <div className="mt-6 grid items-stretch gap-7 lg:mt-12 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="relative overflow-hidden rounded-[24px] bg-linear-to-b from-[#22cdbc] from-[0_54%] to-[#2b7577] to-[54%] p-5 text-white sm:p-6">
            <div className="relative h-[330px] overflow-hidden rounded-[20px] bg-[#e8edf4] sm:h-[360px]">
              <Image
                src={doctor.image.url || localDoctorImage(doctor.slug)}
                alt={doctor.image.alt || doctor.name}
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 470px"
                className="object-cover object-[center_22%]"
              />
            </div>
            <div className="absolute top-[322px] right-12 z-10 grid h-16 w-16 place-items-center bg-[#25d0bf] text-center text-xs leading-tight font-black [clip-path:polygon(0_0,100%_0,100%_100%,50%_84%,0_100%)] sm:top-[352px]">
              {doctor.experienceLabel}
              <br />
              Exp
            </div>
            <div className="px-3 pt-7 pb-2">
              <h2 className="text-4xl font-bold">{doctor.name}</h2>
              <p className="mt-2 text-lg leading-snug font-medium">
                {doctor.speciality}
                {doctor.designation && (
                  <>
                    <br />
                    &amp; {doctor.designation}
                  </>
                )}
              </p>
              <p className="mt-4 text-lg">
                <strong>Qualification:</strong> {doctor.qualification}
              </p>
              <p className="mt-3 text-lg font-semibold">
                <span aria-hidden="true">●</span>&nbsp; {clinic?.label || clinic?.name}
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-5">
            <article className="flex-1 rounded-[24px] bg-[#f0faf8] px-6 py-7 sm:px-10 sm:py-8">
              <h2 className="border-b border-[#78999a] pb-4 text-3xl font-extrabold text-[#296f73]">
                {doctor.about.title}
              </h2>
              {doctor.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-7 text-[15px] leading-7 text-[#4b5555]">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {doctor.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-md bg-[#25cebd] px-4 py-3 text-white"
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {stat.icon || "◇"}
                    </span>
                    <span>
                      <strong className="block text-xl leading-none">{stat.value}</strong>
                      <span className="text-sm font-semibold">{stat.label}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-[#296f73]">
                <h3 className="text-xl font-extrabold">Expertise</h3>
                <span className="h-px flex-1 bg-[#78999a]" />
              </div>
              <ul className="mt-4 grid gap-x-4 gap-y-2 text-[15px] text-[#566060] sm:grid-cols-3">
                {doctor.expertise.map((item) => (
                  <li
                    key={item.id}
                    className={item.title.startsWith("Consultation") ? "sm:col-span-2" : ""}
                  >
                    <span className="font-bold text-[#296f73]">✓</span> {item.title}
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4 rounded-[18px] bg-[#2b7377] px-6 py-5 text-white sm:grid-cols-3 sm:px-8">
              {doctor.availability.map((item) => (
                <div className="flex items-center gap-3" key={item.type}>
                  <span className="text-3xl">
                    {item.type === "visitingTime" ? "◷" : item.type === "visitingDays" ? "▣" : "◎"}
                  </span>
                  <p className="text-sm">
                    {item.label}
                    <br />
                    <strong className="text-base">{item.value}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
