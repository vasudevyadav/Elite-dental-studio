import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorsDirectory from "@/components/DoctorsDirectory";
import FAQSection from "@/components/FAQSection";
import SitePage from "@/components/SitePage";

export default function DoctorsPage() {
  return (
    <SitePage title="Our Doctors | Elite Dental Studio" description="Meet the experienced dental specialists at Elite Dental Studio and book your appointment.">
          <DoctorsDirectory />
          <FAQSection />
          <BookAppointmentSection />
    </SitePage>
  );
}
