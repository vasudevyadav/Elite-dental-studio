import HeroSection from "@/components/HeroSection";

export default function ServiceHero({ inner = false }: { inner?: boolean }) {
  return <HeroSection slides={[{ img: inner ? "/service/services-inner-bg.png" : "/service/services-main0bg.png", alt: "Dental treatment at Elite Dental Studio" }]} />;
}
