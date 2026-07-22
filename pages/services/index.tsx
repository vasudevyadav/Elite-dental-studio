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
        <section className="services-catalog">
          <div className="services-catalog-inner">
            <div className="services-intro">
              <p>◉ &nbsp; OUR SERVICES</p>
              <h1>Comprehensive dental care tailored<br /> services for every smile</h1>
              <span>Elite Dental Studio offers a full spectrum of dental procedures to help you explore what&apos;s best for your smile.</span>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} className="service-card" key={service.slug}>
                  <div className="service-card-title"><i>{service.icon}</i><h2>{service.title}</h2><b>→</b></div>
                  <p>We are excited to meet you and provide the best dental care for your family.</p>
                  <div className="service-card-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 90vw, 30vw" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="service-section-gap"><FAQSection /></div>
        <BookAppointmentSection />
      </main>
      <Footer />
    </>
  );
}
