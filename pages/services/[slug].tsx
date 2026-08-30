import type { GetServerSideProps } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import GlobalFooter from "@/components/GlobalFooter";
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
import ComparisonTableSection from "@/components/services/ComparisonTableSection";
import EarlyTreatmentSection from "@/components/services/EarlyTreatmentSection";
import {
  getService,
  toLegacyService,
  type ServiceDetail,
  type ServiceSection,
} from "@/lib/servicesApi";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTestimonials, type TestimonialItem } from "@/lib/testimonialsApi";
import { getContent } from "@/lib/contentApi";

type GalleryCaseItem = {
  id?: string;
  title?: string;
  images?: Array<{
    beforeImage?: { url?: string; alt?: string };
    afterImage?: { url?: string; alt?: string };
    combinedImage?: { url?: string; alt?: string };
  }>;
};

type Props = {
  service: ServiceDetail;
  testimonials: TestimonialItem[];
  galleryCases: GalleryCaseItem[];
};

const sectionContent = (sections: ServiceSection[], type: ServiceSection["type"]) => {
  const content = sections.find((section) => section.type === type)?.content;
  return content && hasMeaningfulContent(content) ? content : undefined;
};

const hasMeaningfulContent = (value: unknown): boolean => {
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "number" || typeof value === "boolean") return true;
  if (Array.isArray(value)) return value.some(hasMeaningfulContent);
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).some(hasMeaningfulContent);
  }
  return false;
};

export default function ServiceDetailPage({ service, testimonials, galleryCases }: Props) {
  const isLaser = service.slug === "laser-dentistry";
  const treatmentName = service.treatmentName || service.title;
  const canonicalUrl = service.seo?.canonicalUrl || absoluteUrl(`/services/${service.slug}`);
  const legacyService = toLegacyService(service);
  const content = (type: ServiceSection["type"]) => sectionContent(service.sections, type);
  const overview = content("overview");
  const introduction = content("introduction");
  const procedures = content("procedures");
  const candidate = content("candidate");
  const expectation = content("expectation");
  const aftercare = content("aftercare");
  const benefits = content("benefits");
  const results = content("results");
  const galleryResultItems = galleryCases.flatMap((galleryCase) =>
    (galleryCase.images || []).flatMap((images, imageIndex) => {
      const beforeUrl = images.beforeImage?.url;
      const afterUrl = images.afterImage?.url;
      const combinedUrl = images.combinedImage?.url;
      const resolvedBefore = beforeUrl || combinedUrl;
      const resolvedAfter = afterUrl || combinedUrl;
      if (!resolvedBefore || !resolvedAfter) return [];
      return [
        {
          id: `${galleryCase.id || service.slug}-${imageIndex}`,
          label: galleryCase.title || treatmentName,
          beforeImage: {
            url: resolvedBefore,
            alt: images.beforeImage?.alt || `${treatmentName} before treatment`,
          },
          afterImage: {
            url: resolvedAfter,
            alt: images.afterImage?.alt || `${treatmentName} after treatment`,
          },
        },
      ];
    }),
  );
  const treatmentResults = galleryResultItems.length
    ? {
        ...(results || {}),
        items: galleryResultItems,
        viewAll: { label: "View all smile transformations →", url: "/gallery/cases" },
      }
    : results;
  const hasTreatmentDetails = Boolean(
    introduction || procedures || candidate || expectation || aftercare || benefits,
  );
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
        <link rel="canonical" href={canonicalUrl} />
        {service.seo?.robots && <meta name="robots" content={service.seo.robots} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elite Dental Studio" />
        <meta
          property="og:title"
          content={service.seo?.metaTitle || `${service.title} | Elite Dental Studio`}
        />
        <meta
          property="og:description"
          content={
            service.seo?.metaDescription ||
            `${service.title} consultation and treatment at Elite Dental Studio.`
          }
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={
            service.seo?.ogImage ||
            service.hero?.image?.url ||
            absoluteUrl("/navbar/elite-logo.png")
          }
        />
      </Head>

      <Navbar />

      <main className="overflow-x-clip">
        <ServiceHero inner image={service.hero?.image?.url} alt={service.hero?.image?.alt} />
        {overview && (
          <ServiceOverview
            serviceTitle={service.title}
            treatmentName={treatmentName}
            isLaser={isLaser}
            data={overview}
          />
        )}

        {hasTreatmentDetails && (
          <div className="mx-auto max-w-screen-2xl px-5 py-2 text-gray-800 sm:px-8 lg:px-28 lg:py-20">
            {introduction && (
              <ServiceIntroduction
                isLaser={isLaser}
                serviceTitle={service.title}
                treatmentName={treatmentName}
                data={introduction}
              />
            )}
            {procedures && (
              <ProceduresSection service={legacyService} isLaser={isLaser} data={procedures} />
            )}
            {candidate && <CandidateSection treatmentName={treatmentName} data={candidate} />}
            {expectation && <TreatmentExpectationSection data={expectation} />}
            {aftercare && <AftercareSection data={aftercare} />}
            {benefits && <BenefitsSection treatmentName={treatmentName} data={benefits} />}
          </div>
        )}

        {treatmentResults && (
          <TreatmentResults serviceTitle={service.title} data={treatmentResults} />
        )}

        <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-28">
          <ComparisonTableSection data={service.comparisonTable} />
          <EarlyTreatmentSection data={service.earlyTreatment} />
        </div>

        <NearestClinic serviceName={treatmentName} />
        {service.specialists?.doctors?.length ? (
          <DoctorsSection
            initialDoctors={service.specialists.doctors}
            title={service.specialists.title}
            description={service.specialists.description}
          />
        ) : null}
        <TestimonialsSection initialTestimonials={testimonials} />
        <BlogSection />
        {serviceFaqContent && <FAQSection content={serviceFaqContent} />}
        <BookAppointmentSection />
      </main>

      <GlobalFooter />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const service = await getService(String(params?.slug));
  if (!service) return { notFound: true };
  const [testimonials, galleryData] = await Promise.all([
    getTestimonials().catch(() => []),
    getContent<{ items?: GalleryCaseItem[] }>(
      `gallery?treatment=${encodeURIComponent(service.slug)}`,
    ).catch(() => ({ items: [] })),
  ]);
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { service, testimonials, galleryCases: galleryData.items || [] } };
};
