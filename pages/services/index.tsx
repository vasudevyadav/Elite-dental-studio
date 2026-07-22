import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import { services } from "@/components/services/serviceData";

export default function ServicesPage() {
  return (
    <>
      <Head><title>Dental Services | Elite Dental Studio</title><meta name="description" content="Explore comprehensive dental treatments at Elite Dental Studio." /></Head>
      <Navbar />
      <main>
        <ServiceHero />
        <section className="bg-[linear-gradient(#2a7478_0_390px,#fff_390px)] px-5 pb-10 pt-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="text-white">
              <p className="text-base font-bold text-[#25d5c4]">◉ &nbsp; OUR SERVICES</p>
              <h1 className="my-4 text-2xl font-bold leading-[1.14] lg:text-[40px]"> Comprehensive dental care tailored<br className="hidden sm:block" /> services for every smile</h1>
              <span className="text-sm lg:text-lg ">Elite Dental Studio offers a full spectrum of dental procedures to help you explore what&apos;s best for your smile.</span>
            </div>
            <div className="mt-[72px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[46px] lg:gap-y-[42px]">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} className="group min-w-0 rounded-[20px] border-[1.5px] border-[#5d989b] bg-white p-4 text-[#454545] no-underline shadow-[0_12px_26px_rgba(30,93,96,.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_34px_rgba(30,93,96,.13)] sm:p-5" key={service.slug}>
                  <div className="grid min-h-[58px] grid-cols-[46px_1fr_24px] items-center gap-3.5 border-b border-[#ccc] pb-3.5">
                    <i className="grid h-[46px] w-[46px] place-items-center rounded-[7px] bg-[#25d2c1] text-2xl not-italic text-white">{service.icon}</i>
                    <h2 className="m-0 text-lg font-bold leading-[1.12] sm:text-[21px]">{service.title}</h2>
                    <b className="text-[27px] text-[#287377]">→</b>
                  </div>
                  <p className="my-3 min-h-[51px] text-base leading-normal">We are excited to meet you and provide the best dental care for your family.</p>
                  <div className="relative aspect-2/1 w-full overflow-hidden rounded-[18px] bg-[#eee]"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 90vw, 30vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="mb-[90px] mt-[130px]"><FAQSection /></div>
        <BookAppointmentSection />
      </main>
      <Footer />
    </>
  );
}
