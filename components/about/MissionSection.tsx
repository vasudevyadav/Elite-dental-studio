import Image from "next/image";

const stats = [
  ["75+", "Insurance covered", "We have more than 75 Insurance coverage from all over India"],
  ["2k", "Realized projects", "Our team makes Elite Dental care better every month"],
  ["22k", "Happy customers", "Our team makes Elite Dental care better every month"],
  ["20+", "Experience doctors", "Our team makes Elite Dental care better every month"],
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef8f7]">
      <Image src="/about/about-5.png" alt="Modern dental technology" fill sizes="100vw" className="object-cover object-center" />
      <div className="relative mx-auto grid min-h-[490px] max-w-[1120px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-0">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#2c7477] sm:text-3xl">Our Mission</h2>
          <p className="mt-6 max-w-xl text-sm leading-6 text-[#4f6263]">We know there is more to good dental care than just the doctor. The support team and the facility make important contributions to each patient&apos;s sense of comfort and well-being. We place enormous value on the entire experience – from the first contact through your new smile and beyond.</p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#4f6263]">The information found within these pages about Single Dental highlights some of our successes. We hope you find the information helpful. These pages are not a substitute for our personal response to your specific questions and concerns.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:pl-10">
          {stats.map(([number, label, copy], index) => <article key={label} className={`rounded-[13px] border border-white/50 p-4 text-white shadow-[0_8px_18px_rgba(8,63,66,.14)] backdrop-blur-sm sm:p-6 ${index === 0 || index === 3 ? "bg-[#25cdbc]/90" : "bg-[#286f73]/90"}`}><strong className="text-3xl font-black sm:text-4xl">{number}</strong><h3 className="mt-2 text-sm font-bold sm:text-base">{label}</h3><p className="mt-2 text-[9px] leading-4 text-white/90 sm:text-[10px]">{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}
