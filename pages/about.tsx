import type { GetServerSideProps } from "next";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AboutHero from "@/components/about/AboutHero";
import DentalOfficeSection from "@/components/about/DentalOfficeSection";
import InsurancePaymentSection from "@/components/about/InsurancePaymentSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import { aboutFaqContent, appointmentContent } from "@/content/siteSections";
import SitePage from "@/components/SitePage";
import { getSeoMetadata, type SeoMetadata } from "@/lib/seoMetadataApi";

type AboutPageProps = { seo: SeoMetadata | null };

export default function AboutPage({ seo }: AboutPageProps) {
  const title = seo?.title || "About Elite Dental Studio";
  const description =
    seo?.description ||
    "Learn about Elite Dental Studio offering advanced dental treatments, experienced dentists, modern facilities, and compassionate patient care.";

  return (
    <SitePage
      title={title}
      description={description}
      keywords={seo?.keywords}
      canonicalUrl={seo?.canonical_url}
      openGraphTitle={seo?.og_title}
      openGraphDescription={seo?.og_description}
      openGraphImage={seo?.og_image}
      mainClassName="bg-white"
    >
      <AboutHero />
      <DentalOfficeSection />
      <InsurancePaymentSection />
      <MissionSection />
      <TeamSection />
      <div className="[&_.max-w-7xl]:max-w-7xl">
        <FAQSection content={aboutFaqContent} />
      </div>
      <div className="[&_.max-w-7xl]:max-w-7xl">
        <BookAppointmentSection content={appointmentContent} />
      </div>
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async ({ res }) => {
  const seo = await getSeoMetadata("about").catch(() => null);
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { seo } };
};
