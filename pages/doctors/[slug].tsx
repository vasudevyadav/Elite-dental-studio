import Head from "next/head";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorProfile from "@/components/DoctorProfile";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function DoctorDetailsPage() {
  return (
    <>
      <Head>
        <title>Dr. Amal | Elite Dental Studio</title>
        <meta name="description" content="Meet Dr. Amal, Pedodontics and Preventive Dentistry specialist at Elite Dental Studio." />
      </Head>
      <div className="bg-white">
        <Navbar />
        <main>
          <DoctorProfile />
          <BookAppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
