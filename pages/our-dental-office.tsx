import BookAppointmentSection from "@/components/BookAppointmentSection";
import NearestClinic from "@/components/NearestClinic";
import SitePage from "@/components/SitePage";
import OfficeComfort from "@/components/office/OfficeComfort";
import OfficeGallery from "@/components/office/OfficeGallery";
import OfficeHero from "@/components/office/OfficeHero";
import OfficeIntroduction from "@/components/office/OfficeIntroduction";
import { appointmentContent } from "@/content/siteSections";

export default function OurDentalOfficePage() {
  return (
    <SitePage
      title="Our Dental Office | Elite Dental Studio"
      description="Take a virtual tour of Elite Dental Studio's modern dental offices in Calicut and Kochi."
      mainClassName="bg-[#f7fbfa]"
    >
      <OfficeHero />
      <OfficeIntroduction />
      <OfficeGallery />
      <OfficeComfort />
      <NearestClinic />
      <BookAppointmentSection content={appointmentContent} />
    </SitePage>
  );
}
