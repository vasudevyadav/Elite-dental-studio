import Image from "next/image";

const trustPoints = [
  {
    icon: "/home/count-icon-1.png",
    title: "6+ Years of Specialist-Led Dental Care",
    subtitle: "ISO 9001 Certified Dental Clinic in Calicut, Kannur, Coimbatore & Kochi",
  },
  {
    icon: "/home/count-icon-2.png",
    title: "4 Clinics. 11 Dental Treatments. One Standard",
    subtitle: "MDS Certified Doctors Treating Every Case Since 2020",
  },
  {
    icon: "/home/count-icon-3.png",
    title: "Award-Winning Dental Care",
    subtitle: "All our clinics are Famdent Recognised & ISO 9001 Certified",
  },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Elite Dental Studio highlights"
      className="w-full bg-[#29696d] py-7 lg:py-9"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-7 sm:grid-cols-3 sm:gap-4 lg:gap-8">
          {trustPoints.map(({ icon, title, subtitle }) => (
            <article key={title} className="flex items-center justify-center gap-3 lg:gap-5">
              <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                <Image src={icon} alt="" fill aria-hidden="true" className="object-contain" />
              </div>
              <div className="max-w-[300px] text-white">
                <h2 className="text-sm leading-[1.25] font-bold lg:text-base">{title}</h2>
                <p className="mt-1 text-xs leading-[1.4] font-medium text-white/90 lg:text-sm">
                  {subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
