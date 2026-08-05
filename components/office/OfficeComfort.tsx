import Image from "next/image";

export default function OfficeComfort() {
  return (
    <section className="bg-[#07565a] px-5 py-16 text-white sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-[#0b676b] lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[330px] lg:min-h-[520px]"><Image src="/office/kochi-05.webp" alt="Child-friendly area at Elite Dental Studio" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        <div className="p-7 sm:p-12 lg:p-16">
          <p className="text-base font-bold uppercase tracking-[.16em] text-[#4cdfd1]">For every generation</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">Dental visits made more comfortable.</h2>
          <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">Our welcoming spaces reduce anxiety, support privacy and help children feel at ease. Because the environment around your treatment matters just as much as the treatment itself.</p>
          <a href="#appointment" className="smooth-hover hover-lift mt-5 inline-flex items-center gap-3 text-base font-bold uppercase tracking-[.08em] text-[#58ddcf] hover:text-white">Plan your visit <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
