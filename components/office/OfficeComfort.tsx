import Image from "next/image";

export default function OfficeComfort() {
  return (
    <section className="bg-[#07565a] px-5 py-10 text-white sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[22px] bg-[#0b676b] sm:rounded-[30px] lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] min-h-[260px] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[520px]">
          <Image
            src="/office/kochi-05.webp"
            alt="Child-friendly area at Elite Dental Studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-10 lg:p-12 xl:p-16">
          <p className="text-sm font-bold tracking-[.16em] text-[#4cdfd1] uppercase sm:text-base">
            For every generation
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-.035em] sm:text-5xl">
            Dental visits made more comfortable.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
            Our welcoming spaces reduce anxiety, support privacy and help children feel at ease.
            Because the environment around your treatment matters just as much as the treatment
            itself.
          </p>
          <a
            href="#appointment"
            className="smooth-hover hover-lift mt-5 inline-flex items-center gap-3 text-base font-bold tracking-[.08em] text-[#58ddcf] uppercase hover:text-white"
          >
            Plan your visit <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
