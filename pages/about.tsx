import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AboutHero from "@/components/about/AboutHero";
import DentalOfficeSection from "@/components/about/DentalOfficeSection";
import InsurancePaymentSection from "@/components/about/InsurancePaymentSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import { aboutFaqContent, appointmentContent } from "@/content/siteSections";
import SitePage from "@/components/SitePage";

export default function AboutPage() {
  return (
    <SitePage title="About Us | Elite Dental Studio" description="Learn about Elite Dental Studio, our mission, leadership and patient-first approach to dental care." mainClassName="bg-white">
        <AboutHero />
        <DentalOfficeSection />
        <InsurancePaymentSection />
        <MissionSection />
        <TeamSection />
        <div className="[&_.max-w-7xl]:max-w-7xl"><FAQSection content={aboutFaqContent} /></div>
        <div className="[&_.max-w-7xl]:max-w-7xl"><BookAppointmentSection content={appointmentContent} /></div>
    </SitePage>
  );
}
