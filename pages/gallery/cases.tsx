import Image from "next/image";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import SitePage from "@/components/SitePage";
import { getAuditDescription } from "@/lib/seoAuditOverrides";

const cases = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/cases/case-${number}.webp`,
    alt: `Elite Dental Studio treatment result ${index + 1}`,
  };
});

export default function DentalCasesPage() {
  return (
    <SitePage
      title="Dental Cases & Smile Gallery | Elite Dental Studio"
      description={getAuditDescription(
        "/gallery/cases",
        "View a curated selection of dental treatment results from Elite Dental Studio.",
      )}
    >
      <section className="bg-[#f5faf9] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[.18em] text-[#1da99d] uppercase">
              Treatment gallery
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Dental Cases &amp; Smile Gallery
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#587073] sm:text-base">
              Explore a selection of treatment results created by the specialist dental team at
              Elite Dental Studio.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {cases.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-[20px] border border-[#d6e6e4] bg-white shadow-[0_12px_30px_rgba(17,73,77,.08)]"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <BookAppointmentSection />
    </SitePage>
  );
}
