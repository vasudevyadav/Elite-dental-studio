import BlogDirectory from "@/components/BlogDirectory";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";

export default function BlogPage() {
  return (
    <SitePage title="Dental Blog | Elite Dental Studio" description="Read dental care tips, treatment guides and the latest news from Elite Dental Studio.">
          <BlogDirectory />
          <FAQSection />
          <BookAppointmentSection />
    </SitePage>
  );
}
