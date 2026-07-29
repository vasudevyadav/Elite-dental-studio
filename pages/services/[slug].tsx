import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NearestClinic from "@/components/NearestClinic";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceIntroduction from "@/components/services/ServiceIntroduction";
import ProceduresSection from "@/components/services/ProceduresSection";
import CandidateSection from "@/components/services/CandidateSection";
import TreatmentExpectationSection from "@/components/services/TreatmentExpectationSection";
import AftercareSection from "@/components/services/AftercareSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import TreatmentResults from "@/components/services/TreatmentResults";
import { findService, services, type Service } from "@/components/services/serviceData";

type Props = { service: Service };

export default function ServiceDetailPage({ service }: Props) {
  const isLaser = service.slug === "laser-dentistry";
  const treatmentName = isLaser ? "Dental Laser Treatment" : service.title;

  return (
    <>
      <Head>
        <title>{service.title} | Elite Dental Studio</title>
        <meta
          name="description"
          content={`${service.title} consultation and treatment at Elite Dental Studio.`}
        />
      </Head>

      <Navbar />

      <main>
        <ServiceHero inner />
        <ServiceOverview
          serviceTitle={service.title}
          treatmentName={treatmentName}
          isLaser={isLaser}
        />

        <div className="mx-auto max-w-screen-2xl px-5 py-14 text-gray-800 sm:px-8 lg:px-28 lg:py-12">
          <ServiceIntroduction
            isLaser={isLaser}
            serviceTitle={service.title}
            treatmentName={treatmentName}
          />
          <ProceduresSection service={service} isLaser={isLaser} />
          <CandidateSection treatmentName={treatmentName} />
          <TreatmentExpectationSection />
          <AftercareSection />
          <BenefitsSection treatmentName={treatmentName} />
        </div>

        <NearestClinic serviceName={treatmentName} />
        <DoctorsSection />
        <TestimonialsSection />
        <TreatmentResults />
        <BlogSection />
        <FAQSection />
        <BookAppointmentSection />
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: services.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const service = findService(String(params?.slug));
  if (!service) return { notFound: true };
  return { props: { service } };
};
