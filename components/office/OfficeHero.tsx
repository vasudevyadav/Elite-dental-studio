import HeroSection from "@/components/HeroSection";

export default function OfficeHero() {
  return (
    <div className="[&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[linear-gradient(90deg,rgba(4,55,60,.88)_0%,rgba(4,55,60,.42)_44%,transparent_72%)]">
      <HeroSection
        slides={[{ img: "/office/calicut-04.webp", alt: "Elite Dental Studio reception" }]}
        content={{
          eyebrow: "A modern space for better smiles",
          title: "Our Dental",
          accent: "Office",
          description: "Step inside a calm, technology-led environment designed around clinical precision, patient comfort and care for every age.",
        }}
      />
    </div>
  );
}
