import HeroSection from "@/components/HeroSection";

export default function ContactHero() {
  return (
    <div className="[&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.70)]">
      <HeroSection
        slides={[
          {
            img: "/office/439667b9-ee1f-459f-a1a5-f9f277027a4b.webp",
            alt: "Elite Dental Studio reception",
          },
        ]}
        content={{
          eyebrow: "Talk to our care team",
          title: "Contact",
          accent: "Elite Dental Studio",
          description: "Questions, appointments or urgent dental concerns—our teams across four cities are ready to guide you to the right specialist.",
        }}
      />
    </div>
  );
}
