import { useState } from "react";
import Image from "next/image";
import type { ServiceAccordionItem } from "@/lib/servicesApi";

const FALLBACK_IMAGES = [
  "/service/services-inner-1.png",
  "/service/services-inner-2.png",
  "/service/services-inner-3.png",
  "/service/services-inner-4.png",
  "/service/services-inner-5.png",
  "/service/services-inner-6.png",
];

export default function ServiceAccordionSection({
  items,
}: {
  items?: ServiceAccordionItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items?.length) return null;

  return (
    <section className="mt-10 lg:mt-16">
      <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
        More About This Treatment
      </h2>
      <div className="my-5 h-px bg-gray-500" />
      <div className="space-y-3">
        {items.map((item, index) => {
          const open = openIndex === index;
          const image = item.image?.url
            ? item.image
            : { url: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length], alt: item.title };
          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#dbe9e7] bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-base font-bold text-[#174e53] sm:text-lg">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl leading-none text-[#25bfae] transition-transform ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open && (
                <div className="grid gap-5 border-t border-[#e6f2f0] px-5 pt-4 pb-5 sm:px-6 lg:grid-cols-[1fr_220px] lg:items-center">
                  <div className="space-y-3 text-sm leading-7 whitespace-pre-line text-gray-600 lg:text-base lg:leading-8">
                    {item.body}
                  </div>
                  <div className="relative hidden aspect-square overflow-hidden rounded-xl lg:block">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
