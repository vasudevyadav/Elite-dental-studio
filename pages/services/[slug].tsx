import type { GetServerSideProps } from "next";
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
import ServiceAccordionSection from "@/components/services/ServiceAccordionSection";
import ComparisonTableSection from "@/components/services/ComparisonTableSection";
import EarlyTreatmentSection from "@/components/services/EarlyTreatmentSection";
import {
  getService,
  toLegacyService,
  type ServiceDetail,
  type ServiceSection,
} from "@/lib/servicesApi";

type Props = { service: ServiceDetail };

const sectionContent = (sections: ServiceSection[], type: ServiceSection["type"]) =>
  sections.find((section) => section.type === type)?.content;

export default function ServiceDetailPage({ service }: Props) {
  const isLaser = service.slug === "laser-dentistry";
  const treatmentName = service.treatmentName || service.title;
  const legacyService = toLegacyService(service);
  const content = (type: ServiceSection["type"]) => sectionContent(service.sections, type);
  const serviceFaqContent = service.faqs?.items?.length
    ? {
        eyebrow: "FAQs",
        title: service.faqs.title || `Frequently Asked Questions About ${treatmentName}`,
        description: `Find clear answers to common questions about ${treatmentName} at Elite Dental Studio.`,
        items: service.faqs.items,
      }
    : undefined;

  return (
    <>
      <Head>
        <title>{service.seo?.metaTitle || `${service.title} | Elite Dental Studio`}</title>
        <meta
          name="description"
          content={
            service.seo?.metaDescription ||
            `${service.title} consultation and treatment at Elite Dental Studio.`
          }
        />
      </Head>

      <Navbar />

      <main className="overflow-x-clip">
        <ServiceHero inner image={service.hero?.image?.url} alt={service.hero?.image?.alt} />
        <ServiceOverview
          serviceTitle={service.title}
          treatmentName={treatmentName}
          isLaser={isLaser}
          data={content("overview")}
        />

        <div className="mx-auto max-w-screen-2xl px-5 py-2 text-gray-800 sm:px-8 lg:px-28 lg:py-20">
          <ServiceIntroduction
            isLaser={isLaser}
            serviceTitle={service.title}
            treatmentName={treatmentName}
            data={content("introduction")}
          />
          <ProceduresSection
            service={legacyService}
            isLaser={isLaser}
            data={content("procedures")}
          />
          <CandidateSection treatmentName={treatmentName} data={content("candidate")} />
          <TreatmentExpectationSection data={content("expectation")} />
          <AftercareSection data={content("aftercare")} />
          <BenefitsSection treatmentName={treatmentName} data={content("benefits")} />
          <ServiceAccordionSection items={service.accordionItems} />
        </div>

        <TreatmentResults serviceTitle={service.title} data={content("results")} />

        <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-28">
          <ComparisonTableSection data={service.comparisonTable} />
          <EarlyTreatmentSection data={service.earlyTreatment} />
        </div>

        <NearestClinic serviceName={treatmentName} />
        <DoctorsSection
          initialDoctors={service.specialists?.doctors}
          title={service.specialists?.title}
          description={service.specialists?.description}
        />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection content={serviceFaqContent} />
        <BookAppointmentSection />
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const service = await getService(String(params?.slug));
  if (!service) return { notFound: true };
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { service } };
};
