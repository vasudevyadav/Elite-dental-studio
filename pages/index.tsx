import Head from "next/head";
import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";
import AffordableDentalTreatment from "@/components/affordable-dental-treatment";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elite Dental Studio | Complete Dental Care</title>
        <meta
          name="description"
          content="Elite Dental Studio offers advanced dental treatments, implants, invisible aligners, root canal care and more."
        />
      </Head>

      <div className="bg-white">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </>
  );
}
