import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import SitePage from "@/components/SitePage";
import ServiceHero from "@/components/services/ServiceHero";
import { getServicesPage, type ServicesPageData } from "@/lib/servicesApi";

const PAGE_SIZE = 6;

type Props = { data: ServicesPageData };

export default function ServicesPage({ data }: Props) {
  const { items: services, pageSeo, section, hero } = data;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleServices = services.slice(0, visibleCount);
  const hasMoreServices = visibleCount < services.length;
  return (
    <SitePage
      title={pageSeo.metaTitle || "Dental Treatments | Elite Dental Studio"}
      description={
        pageSeo.metaDescription ||
        "Explore specialist dental treatments available across Elite Dental Studio clinics."
      }
    >
        <ServiceHero image={hero?.image?.url} alt={hero?.image?.alt} />
        <section className="bg-[linear-gradient(#2a686d_0_390px,#fff_390px)] px-5 pt-14 pb-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="text-white">
              <p className="flex items-center gap-2.5 text-base font-bold text-[#25d5c4]">
                <Image
                  src={section?.icon?.url || "/service/our-services.png"}
                  alt={section?.icon?.alt || ""}
                  width={30}
                  height={28}
                  className="h-7 w-[30px] shrink-0 object-contain"
                />
                <span>{section?.eyebrow}</span>
              </p>
              <h1 className="my-4 text-2xl leading-[1.14] font-bold lg:text-[40px]">
                {section?.title}
              </h1>
              <span className="text-sm lg:text-lg">{section?.description}</span>
            </div>
            <div className="mt-[72px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[46px] lg:gap-y-[42px]">
              {visibleServices.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  className="group min-w-0 rounded-[20px] border-[1.5px] border-[#5d989b] bg-white p-4 text-[#454545] no-underline shadow-[0_12px_26px_rgba(30,93,96,.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_34px_rgba(30,93,96,.13)] sm:p-5"
                  key={service.slug}
                >
                  <div className="grid min-h-[58px] grid-cols-[46px_1fr_24px] items-center gap-3.5 border-b border-[#ccc] pb-3.5">
                    <span className="grid h-[46px] w-[46px] place-items-center overflow-hidden rounded-[7px] bg-[#25d3c4]">
                      <Image
                        src={service.icon.url}
                        alt=""
                        width={55}
                        height={55}
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <h2 className="m-0 text-lg leading-[1.12] font-bold sm:text-[21px]">
                      {service.title}
                    </h2>
                    <b className="text-[27px] text-[#287377]">→</b>
                  </div>
                  <p className="my-3 min-h-[51px] text-base leading-normal">
                    {service.shortDescription}
                  </p>
                  <div className="relative aspect-2/1 w-full overflow-hidden rounded-[18px] bg-[#eee]">
                    <Image
                      src={service.cardImage.url}
                      alt={service.title}
                      fill
                      sizes="(max-width: 700px) 90vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {hasMoreServices && (
              <div className="mt-14 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((count) => Math.min(services.length, count + PAGE_SIZE))
                  }
                  className="rounded-full bg-[#21cdbd] px-8 py-3 text-sm font-bold text-white hover:bg-[#1cb8aa]"
                >
                  Load More Services
                </button>
              </div>
            )}
          </div>
        </section>
        <div>
          <FAQSection />
        </div>
        <BookAppointmentSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data: await getServicesPage() } };
};
