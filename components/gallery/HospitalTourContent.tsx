import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import {
  officeImages,
  type OfficeImage,
  type OfficeLocation,
} from "@/components/office/officeData";

const locations: OfficeLocation[] = ["All", "Calicut", "Kochi", "Kannur", "Coimbatore"];

export default function HospitalTourContent() {
  const [location, setLocation] = useState<OfficeLocation>("All");
  const [active, setActive] = useState<OfficeImage | null>(null);
  const images =
    location === "All" ? officeImages : officeImages.filter((item) => item.location === location);
  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [active]);

  return (
    <>
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[linear-gradient(90deg,rgba(4,50,55,.78),rgba(4,50,55,.38))]">
        <HeroSection
          slides={[
            {
              img: "/office/kochi-03.webp",
              alt: "Modern reception at Elite Dental Studio",
            },
          ]}
          content={{
            eyebrow: "A closer look inside",
            title: "Hospital",
            accent: "Tour",
            description:
              "Explore calm reception areas, technology-led treatment suites and thoughtfully designed spaces for safe, comfortable dental care.",
          }}
        />
      </div>
      <section
        id="tour-gallery"
        className="scroll-mt-6 bg-[#f5faf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
                Explore our spaces
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
                Designed around your comfort.
              </h2>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {locations.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLocation(item)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${location === item ? "bg-[#176b70] text-white" : "border border-[#bad7d4] bg-white text-[#426164]"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-12">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActive(image)}
                className={`group relative overflow-hidden rounded-[20px] border border-[#d6e6e4] bg-[#174e53] text-left shadow-[0_12px_30px_rgba(17,73,77,.08)] ${location === "All" && index === 0 ? "lg:col-span-7 lg:row-span-2" : location === "All" && (index === 1 || index === 2) ? "lg:col-span-5" : "lg:col-span-4"}`}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073c41]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                  <span>
                    <small className="font-bold tracking-[.14em] text-[#5de0d4] uppercase">
                      {image.location}
                    </small>
                    <strong className="mt-1 block text-base">{image.label}</strong>
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10">
                    ＋
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {active && (
        <div
          className="fixed inset-0 z-[160] grid place-items-center bg-[#032d31]/95 p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-[#174e53]"
            aria-label="Close image"
          >
            ×
          </button>
          <div className="relative h-[78vh] w-full max-w-6xl">
            <Image
              src={active.src}
              alt={active.label}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
