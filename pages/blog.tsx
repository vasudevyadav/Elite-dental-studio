import Head from "next/head";
import BlogDirectory from "@/components/BlogDirectory";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Dental Blog | Elite Dental Studio</title>
        <meta name="description" content="Read dental care tips, treatment guides and the latest news from Elite Dental Studio." />
      </Head>
      <div className="bg-white">
        <Navbar />
        <main>
          <BlogDirectory />
          <FAQSection />
          <BookAppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
