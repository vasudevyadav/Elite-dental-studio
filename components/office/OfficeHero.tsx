/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from "@/components/HeroSection";

export default function OfficeHero({ data }: { data?: Record<string, any> }) {
  const slide = data?.slides?.[0]?.image;
  return (
    <div className="[&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[rgba(4,55,60,.70)]">
      <HeroSection
        slides={[
          {
            img: slide?.url || "/office/calicut-04.webp",
            alt: slide?.alt || "Elite Dental Studio reception",
          },
        ]}
        content={{
          eyebrow: data?.eyebrow || "A modern space for better smiles",
          title: data?.title || "Our Dental",
          accent: data?.accent || "Office",
          description:
            data?.description ||
            "Step inside a calm, technology-led environment designed around clinical precision, patient comfort and care for every age.",
        }}
      />
    </div>
  );
}
