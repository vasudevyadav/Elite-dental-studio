export type Service = {
  slug: string;
  title: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  { slug: "laser-dentistry", title: "Laser Dentistry", image: "/service/services-1.png", icon: "✧" },
  { slug: "dental-fillings", title: "Dental Fillings", image: "/service/services-2.png", icon: "♢" },
  { slug: "invisible-aligners", title: "Invisible Aligners", image: "/service/services-3.png", icon: "◡" },
  { slug: "maxillofacial-orthognathic-surgery", title: "Maxillofacial & Orthognathic surgery", image: "/service/services-inner-6.png", icon: "⌁" },
  { slug: "dental-implant", title: "Dental Implant", image: "/service/services-inner-3.png", icon: "♜" },
  { slug: "clear-aligners-treatment", title: "Clear Aligners Treatment", image: "/service/services-3.png", icon: "◡" },
  { slug: "periodontics", title: "Periodontics", image: "/service/services-inner-1.png", icon: "♧" },
  { slug: "pediatric-dentistry", title: "Pediatric Dentistry", image: "/service/services-inner-5.png", icon: "☺" },
  { slug: "oral-medicine-radiology", title: "Oral medicine and radiology", image: "/service/services-inner-6.png", icon: "▤" },
  { slug: "endodontics", title: "Endodontics", image: "/service/services-inner-4.png", icon: "♢" },
  { slug: "prosthodontics", title: "Prosthodontics", image: "/service/services-inner-3.png", icon: "⌒" },
  { slug: "orthodontics", title: "Orthodontics", image: "/service/services-3.png", icon: "≋" },
  { slug: "restorative-dentistry", title: "Restorative Dentistry", image: "/service/services-inner-4.png", icon: "♢" },
  { slug: "cosmetic-treatments", title: "Cosmetic Treatments", image: "/service/services-inner-1.png", icon: "✧" },
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
