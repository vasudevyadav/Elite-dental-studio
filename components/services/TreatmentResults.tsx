import Image from "next/image";

const results = [
  { before: "/home/services/laser-dentistry.jpg", after: "/service/services-inner-1.png", alt: "Dental laser treatment result" },
  { before: "/home/services/invisible-aligners.jpg", after: "/home/services/dental-fillings.jpg", alt: "Smile treatment result" },
];

export default function TreatmentResults() {
  return <section className="mx-auto max-w-6xl py-16 text-center lg:py-6">
    <p className="m-0 text-xs font-semibold uppercase text-[#25cdbd] lg:text-lg">See the Transformation</p>
    <h2 className="mt-3 text-4xl font-bold leading-[1.25] text-[#2b7175]">Stunning Results That Showcase<br />The Lifechanging Impact</h2>
    <div className="mt-16 grid grid-cols-1 gap-[35px] lg:mt-16 lg:grid-cols-2 lg:gap-20">
      {results.map((result) => <article key={result.alt} className="relative grid aspect-[1.52/1] grid-cols-2 overflow-hidden rounded-[20px] border-2 border-[#2b7175] bg-[#eefafa] lg:rounded-[35px]">
        <div className="relative overflow-hidden"><Image src={result.before} alt={`${result.alt} before`} fill sizes="(max-width: 900px) 90vw, 420px" className="object-cover" /></div>
        <div className="relative overflow-hidden border-l-[3px] border-white"><Image src={result.after} alt={`${result.alt} after`} fill sizes="(max-width: 900px) 90vw, 420px" className="object-cover" /></div>
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 z-[2] grid h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-white/20 text-[13px] text-white">◀▶</span>
      </article>)}
    </div>
  </section>;
}
