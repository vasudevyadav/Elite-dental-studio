import Image from "next/image";

const results = [
  {
    before: "/home/services/laser-dentistry.jpg",
    after: "/service/services-inner-1.png",
    alt: "Dental laser treatment result",
  },
  {
    before: "/home/services/invisible-aligners.jpg",
    after: "/home/services/dental-fillings.jpg",
    alt: "Smile treatment result",
  },
];

export default function TreatmentResults() {
  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-5 py-8 text-center sm:px-8 lg:px-0 lg:py-6">
      <p className="m-0 text-xs font-semibold text-[#25cdbd] uppercase lg:text-lg">
        See the Transformation
      </p>
      <h2 className="mt-3 text-2xl leading-[1.25] font-bold text-[#2b7175] lg:text-4xl">
        Stunning Results That Showcase
        <br className="hidden sm:block" />
        The Lifechanging Impact
      </h2>
      <div className="-mx-5 mt-9 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-5 text-left sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-20 lg:overflow-visible lg:px-0 lg:pb-0">
        {results.map((result) => (
          <article
            key={result.alt}
            className="relative grid aspect-[1.52/1] w-[86vw] max-w-[520px] shrink-0 snap-start grid-cols-2 overflow-hidden rounded-[20px] border-2 border-[#2b7175] bg-[#eefafa] lg:w-auto lg:max-w-none lg:rounded-[35px]"
          >
            <div className="relative overflow-hidden">
              <Image
                src={result.before}
                alt={`${result.alt} before`}
                fill
                sizes="(max-width: 900px) 90vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden border-l-[3px] border-white">
              <Image
                src={result.after}
                alt={`${result.alt} after`}
                fill
                sizes="(max-width: 900px) 90vw, 420px"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 z-[2] grid h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-white/20 text-[13px] text-white"
            >
              ◀▶
            </span>
          </article>
        ))}
      </div>
      <p className="mt-1 text-xs font-semibold text-[#2b7175] lg:hidden">
        Swipe to view more results →
      </p>
    </section>
  );
}
