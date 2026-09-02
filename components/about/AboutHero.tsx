import HeroSection from "@/components/HeroSection";

const aboutSlides = [
  {
    img: "/about/about-hero.png",
    alt: "Elite Dental Studio reception",
  },
];

export default function AboutHero() {
  return <HeroSection slides={aboutSlides} />;
}
