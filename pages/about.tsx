import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AboutHero from "@/components/about/AboutHero";
import DentalOfficeSection from "@/components/about/DentalOfficeSection";
import InsurancePaymentSection from "@/components/about/InsurancePaymentSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Elite Dental Studio</title>
        <meta name="description" content="Learn about Elite Dental Studio, our mission, leadership and patient-first approach to dental care." />
      </Head>
      <Navbar />
      <main className="bg-white">
        <AboutHero />
        <DentalOfficeSection />
        <InsurancePaymentSection />
        <MissionSection />
        <TeamSection />
        <FAQSection />
        <BookAppointmentSection />
      </main>
      <Footer />
    </>
  );
}
