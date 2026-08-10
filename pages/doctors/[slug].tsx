import BookAppointmentSection from "@/components/BookAppointmentSection";
import DoctorProfile from "@/components/DoctorProfile";
import { drAmalAppointmentContent } from "@/content/siteSections";
import SitePage from "@/components/SitePage";

export default function DoctorDetailsPage() {
  return (
    <SitePage
      title="Dr. Amal | Elite Dental Studio"
      description="Meet Dr. Amal, Pedodontics and Preventive Dentistry specialist at Elite Dental Studio."
    >
      <DoctorProfile />
      <BookAppointmentSection content={drAmalAppointmentContent} />
    </SitePage>
  );
}
