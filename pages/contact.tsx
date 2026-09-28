import SitePage from "@/components/SitePage";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";

export default function ContactPage() {
  return (
    <SitePage
      title="Best Dentist in Kochi, Calicut and Kannur"
      description="Experience top-notch dental care in Kochi, Calicut and Kannur with the best dentist. Achieve your smile goals with our expert dental services."
      showFooterLocations={false}
    >
      <ContactHero />
      <ContactLocations />
      <ContactFormSection />
    </SitePage>
  );
}
