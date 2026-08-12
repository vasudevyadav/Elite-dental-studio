import SitePage from "@/components/SitePage";
import HospitalTourContent from "@/components/gallery/HospitalTourContent";

export default function HospitalTourPage() {
  return (
    <SitePage
      title="Hospital Tour | Elite Dental Studio"
      description="Tour Elite Dental Studio's modern dental clinics in Calicut, Kochi, Kannur and Coimbatore."
      mainClassName="bg-[#f7fbfa]"
    >
      <HospitalTourContent />
    </SitePage>
  );
}
