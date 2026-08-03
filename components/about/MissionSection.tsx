import Image from "next/image";

const stats = [
  ["75+", "Insurance covered", "We have more than 75 Insurance coverage from all over India"],
  ["2k", "Realized projects", "Our team makes Elite Dental care better every month"],
  ["22k", "Happy customers", "Our team makes Elite Dental care better every month"],
  ["20+", "Experience doctors", "Our team makes Elite Dental care better every month"],
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1faf7]">
      <Image src="/about/about-5.png" alt="Modern dental technology" fill sizes="100vw" className="object-cover object-center" />
      <div className="relative mx-auto grid min-h-[490px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-0">
        <div>
          <p className="text-sm font-extrabold uppercase text-dent-accent">How Do We Approach Every Case?</p>
          <h2 className="mt-2 text-2xl font-black uppercase text-[#29666b] sm:text-3xl">Consistent Specialist Dental Care Across All Elite Dental Studio Clinics</h2>
          <p className="mt-6 max-w-xl text-sm lg:text-base leading-6 text-[#4f6263]">At Elite Dental Studio, every patient receives the same high standard of care across all four clinics. Whether you visit our dental clinic in Calicut, Kochi, Kannur, or Coimbatore, your examination is carried out by an MDS-qualified dentist specialising in the area relevant to your concern.</p>
          <p className="mt-5 max-w-xl text-sm lg:text-base leading-6 text-[#4f6263]">Your consultation begins with a comprehensive clinical examination, followed by advanced digital scanning when required. Your dentist will explain the diagnosis in clear, simple language, helping you understand exactly what has been found and what it means for your oral health.</p>
          <p className="mt-5 max-w-xl text-sm lg:text-base leading-6 text-[#4f6263]">We believe that ethical dentistry starts with honest advice. Treatment is recommended only when there is a genuine clinical need. If your tooth can be safely monitored without immediate treatment, we will tell you.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:pl-10">
          {stats.map(([number, label, copy], index) => <article key={label} className={`rounded-[13px] border border-white/50 p-4 text-white shadow-[0_8px_18px_rgba(8,63,66,.14)] backdrop-blur-sm sm:p-6 ${index === 0 || index === 3 ? "bg-dent-accent/90" : "bg-dent-panel/90"}`}><strong className="text-3xl font-black sm:text-4xl">{number}</strong><h3 className="mt-2 text-sm font-bold sm:text-base">{label}</h3><p className="mt-2 text-[9px] leading-4 text-white/90 sm:text-[10px]">{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}
