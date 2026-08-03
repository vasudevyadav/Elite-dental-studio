import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import NearestClinic from "@/components/NearestClinic";
import AboutUs from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AffordableDentalTreatment from "@/components/affordable-dental-treatment";
import SitePage from "@/components/SitePage";

export default function Home() {
  return (
    <SitePage title="Elite Dental Studio | Specialist Dental Care Across Calicut, Kochi, Kannur and Coimbatore" description="ISO 9001 certified specialist dental care across Calicut, Kochi, Kannur and Coimbatore, led by MDS qualified doctors since 2020.">
          <HeroSection />
          <StatsBar />
          <NearestClinic />
          <AboutUs />
          <ServicesSection />
          <DoctorsSection />
          <AwardsSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
          <BookAppointmentSection />
          <AffordableDentalTreatment />
    </SitePage>
  );
}
