import HeroSection from "@/components/HeroSection";
import SitePage from "@/components/SitePage";
import FacilitiesExperience from "@/components/facilities/FacilitiesExperience";

export default function FacilitiesPage() {
  return (
    <SitePage
      title="World-class Dental Facilities | Elite Dental Studio"
      description="Explore modern dental technology, digital diagnostics, sterilisation and patient comfort facilities at Elite Dental Studio."
    >
      <div className="[&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.70)]">
        <HeroSection
          slides={[
            {
              img: "/facilities/implant-motor.webp",
              alt: "Advanced dental technology at Elite Dental Studio",
            },
          ]}
          content={{
            eyebrow: "World-class facilities",
            title: "Precision in every detail.",
            accent: "Comfort at every step.",
            description:
              "Advanced dentistry works best when thoughtful technology meets a calm, patient-first environment.",
          }}
        />
      </div>
      <FacilitiesExperience />
    </SitePage>
  );
}
