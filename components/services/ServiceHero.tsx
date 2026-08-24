import HeroSection from "@/components/HeroSection";

export default function ServiceHero({
  inner = false,
  image,
  alt,
}: {
  inner?: boolean;
  image?: string;
  alt?: string;
}) {
  return (
    <div className={inner ? "lg:[&>section]:h-[clamp(520px,38vw,700px)]" : undefined}>
      <HeroSection
        slides={[
          {
            img:
              image || (inner ? "/service/services-inner-bg.png" : "/service/services-main0bg.png"),
            alt: alt || "Dental treatment at Elite Dental Studio",
          },
        ]}
      />
    </div>
  );
}
