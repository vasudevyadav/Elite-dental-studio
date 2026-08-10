import Image from "next/image";

const stats = [
  { icon: "♙", value: "4500+", label: "Dental Implant" },
  { icon: "♧", value: "1500+", label: "Dental Surgery" },
  { icon: "♢", value: "500+", label: "RCT" },
];

const expertise = [
  "Smile Design",
  "Full Mouth Rehabilitation",
  "Dental Fillings",
  "RCTs",
  "Crowns",
  "Scaling",
  "Consultation for Implants and Aligners",
];

export default function DoctorProfile() {
  return (
    <section className="px-5 pt-10 pb-14 sm:px-8 lg:px-12 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="text-center text-3xl font-bold tracking-[-0.03em] text-[#286f73] lg:text-4xl">
          About Doctors
        </h1>

        <div className="mt-6 grid items-stretch gap-7 lg:mt-12 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="relative overflow-hidden rounded-[24px] bg-linear-to-b from-[#22cdbc] from-[0_54%] to-[#2b7577] to-[54%] p-5 text-white sm:p-6">
            <div className="relative h-[330px] overflow-hidden rounded-[20px] bg-[#e8edf4] sm:h-[360px]">
              <Image
                src="/home/doctors/dr-amal.jpg"
                alt="Dr. Amal"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 470px"
                className="object-cover object-[center_22%]"
              />
            </div>
            <div className="absolute top-[322px] right-12 z-10 grid h-16 w-16 place-items-center bg-[#25d0bf] text-center text-xs leading-tight font-black [clip-path:polygon(0_0,100%_0,100%_100%,50%_84%,0_100%)] sm:top-[352px]">
              15 Yrs
              <br />
              Exp
            </div>
            <div className="px-3 pt-7 pb-2">
              <h2 className="text-4xl font-bold">Dr. Amal</h2>
              <p className="mt-2 text-lg leading-snug font-medium">
                Pedodontics &amp; Preventive Dentistry
                <br />
                &amp; Managing Director
              </p>
              <p className="mt-4 text-lg">
                <strong>Qualification:</strong> BDS, MDS
              </p>
              <p className="mt-3 text-lg font-semibold">
                <span aria-hidden="true">●</span>&nbsp; Calicut Branch
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-5">
            <article className="flex-1 rounded-[24px] bg-[#f0faf8] px-6 py-7 sm:px-10 sm:py-8">
              <h2 className="border-b border-[#78999a] pb-4 text-3xl font-extrabold text-[#296f73]">
                About Dr. Amal
              </h2>
              <p className="mt-7 text-[15px] leading-7 text-[#4b5555]">
                Dr. Amal Sidharth is a distinguished dental professional with a wealth of knowledge
                and expertise in the field of pedodontics. He holds a Bachelor of Dental Surgery
                (BDS) degree, and furthered his education by obtaining a Master&apos;s degree in
                Dental Surgery (MDS) with a specialization in Pedodontics.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-md bg-[#25cebd] px-4 py-3 text-white"
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {stat.icon}
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
                {expertise.map((item) => (
                  <li key={item} className={item.startsWith("Consultation") ? "sm:col-span-2" : ""}>
                    <span className="font-bold text-[#296f73]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4 rounded-[18px] bg-[#2b7377] px-6 py-5 text-white sm:grid-cols-3 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="text-3xl">◷</span>
                <p className="text-sm">
                  Visiting Time
                  <br />
                  <strong className="text-base">11 AM–8 PM</strong>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">▣</span>
                <p className="text-sm">
                  Visiting Days
                  <br />
                  <strong className="text-base">Everyday</strong>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">◎</span>
                <p className="text-sm">
                  Languages Known
                  <br />
                  <strong className="text-base">English, Telugu, Hindi</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
