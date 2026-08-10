import SitePage from "@/components/SitePage";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";

export default function ContactPage() {
  return (
    <SitePage
      title="Contact Elite Dental Studio"
      description="Contact Elite Dental Studio clinics in Calicut, Kochi, Kannur and Coimbatore for specialist dental care and appointments."
    >
      <ContactHero />
      <ContactLocations />
      <ContactFormSection />
    </SitePage>
  );
}
