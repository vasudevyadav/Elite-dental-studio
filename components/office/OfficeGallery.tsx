import Image from "next/image";
import { useEffect, useState } from "react";
import { officeImages, type OfficeImage, type OfficeLocation } from "./officeData";

const locations: OfficeLocation[] = ["All", "Calicut", "Kochi", "Kannur", "Coimbatore"];

export default function OfficeGallery() {
  const [filter, setFilter] = useState<OfficeLocation>("All");
  const [activeImage, setActiveImage] = useState<OfficeImage | null>(null);
  const visibleImages = filter === "All" ? officeImages : officeImages.filter((image) => image.location === filter);

  useEffect(() => {
    if (!activeImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", close);
    };
  }, [activeImage]);

  return (
    <section id="office-tour" className="bg-[#f7fbfa] px-5 py-16 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-base font-semibold uppercase tracking-[.16em] text-[#25bfae]">Virtual tour</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#174e53] sm:text-5xl">A closer look inside</h2></div>
          <div className="flex w-fit max-w-full flex-wrap rounded-[24px] border border-[#b9d7d4] bg-white p-1.5 sm:rounded-full" role="group" aria-label="Filter office gallery">
            {locations.map((location) => <button key={location} type="button" onClick={() => setFilter(location)} aria-pressed={filter === location} className={`smooth-hover rounded-full px-4 py-2 text-sm font-semibold sm:px-5 ${filter === location ? "bg-[#176b70] text-white" : "text-[#426164] hover:bg-[#e8f7f5]"}`}>{location}</button>)}
          </div>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-8 sm:grid-cols-2 sm:auto-rows-[280px] lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setActiveImage(image)} className={`group relative overflow-hidden rounded-[22px] text-left ${index === 0 ? "sm:row-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}>
              <Image src={image.src} alt={image.label} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063f45]/85 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#58ddcf]">{image.location}</p><p className="mt-1 text-base font-semibold">{image.label}</p></div><span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-xl backdrop-blur-md transition group-hover:bg-white group-hover:text-[#07565a]">+</span></div>
            </button>
          ))}
        </div>
      </div>
      {activeImage && <OfficeLightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </section>
  );
}

function OfficeLightbox({ image, onClose }: { image: OfficeImage; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[150] grid place-items-center bg-[#032d31]/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={image.label} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <button type="button" onClick={onClose} aria-label="Close image" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-[#07565a]">×</button>
      <div className="relative h-[75vh] w-full max-w-6xl overflow-hidden rounded-[22px] bg-[#0b555a]"><Image src={image.src} alt={image.label} fill sizes="100vw" className="object-contain" /></div>
      <p className="mt-4 text-sm font-semibold text-white">{image.location} · {image.label}</p>
    </div>
  );
}
