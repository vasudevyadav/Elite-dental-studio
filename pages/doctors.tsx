import Head from "next/head";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsDirectory from "@/components/DoctorsDirectory";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function DoctorsPage() {
  return (
    <>
      <Head>
        <title>Our Doctors | Elite Dental Studio</title>
        <meta name="description" content="Meet the experienced dental specialists at Elite Dental Studio and book your appointment." />
      </Head>
      <div className="bg-white">
        <Navbar />
        <main>
          <DoctorsDirectory />
          <FAQSection />
          <BookAppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
