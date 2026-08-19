import Head from "next/head";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import { getServicesPage, type ServicesPageData } from "@/lib/servicesApi";

const PAGE_SIZE = 6;

type Props = { data: ServicesPageData };

export default function ServicesPage({ data }: Props) {
  const { items: services, pageSeo, section, hero } = data;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(services.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleServices = services.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <>
      <Head>
        <title>{pageSeo.metaTitle}</title>
        <meta name="description" content={pageSeo.metaDescription} />
      </Head>
      <Navbar />
      <main>
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

            {totalPages > 1 && (
              <nav
                className="mt-14 flex items-center justify-center gap-[13px]"
                aria-label="Services pagination"
              >
                {pageNumbers.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 text-[10px] font-bold text-white ${currentPage === item ? "bg-[#21cdbd]" : "bg-[#2d7376]"}`}
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </button>
                ))}
                <button
                  type="button"
                  className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border-0 bg-[#21cdbd] text-[10px] font-bold text-white"
                  onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
                  aria-label="Next page"
                >
                  →
                </button>
              </nav>
            )}
          </div>
        </section>
        <div>
          <FAQSection />
        </div>
        <BookAppointmentSection />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data: await getServicesPage() } };
};
