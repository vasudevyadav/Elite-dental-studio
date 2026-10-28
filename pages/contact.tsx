import type { GetServerSideProps } from "next";
import SitePage from "@/components/SitePage";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";
import { getSeoMetadata, type SeoMetadata } from "@/lib/seoMetadataApi";

type ContactPageProps = { seo: SeoMetadata | null };

export default function ContactPage({ seo }: ContactPageProps) {
  const title = seo?.title || "Best Dentist in Kochi, Calicut and Kannur";
  const description =
    seo?.description ||
    "Experience top-notch dental care in Kochi, Calicut and Kannur with the best dentist. Achieve your smile goals with our expert dental services.";

  return (
    <SitePage
      title={title}
      description={description}
      keywords={seo?.keywords}
      canonicalUrl={seo?.canonical_url}
      openGraphTitle={seo?.og_title}
      openGraphDescription={seo?.og_description}
      openGraphImage={seo?.og_image}
      showFooterLocations={false}
    >
      <ContactHero />
      <ContactLocations />
      <ContactFormSection />
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async ({ res }) => {
  const seo = await getSeoMetadata("contact").catch(() => null);
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { seo } };
};
