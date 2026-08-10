export type Service = {
  slug: string;
  title: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    image: "/service/services-1.png",
    icon: "/service/services-icon-14.png",
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    image: "/service/services-2.png",
    icon: "/service/services-icon-2.png",
  },
  {
    slug: "invisible-aligners",
    title: "Invisible Aligners",
    image: "/service/services-3.png",
    icon: "/service/services-icon-3.png",
  },
  {
    slug: "maxillofacial-orthognathic-surgery",
    title: "Maxillofacial & Orthognathic surgery",
    image: "/service/services-inner-6.png",
    icon: "/service/services-icon-4.png",
  },
  {
    slug: "dental-implant",
    title: "Dental Implant",
    image: "/service/services-inner-3.png",
    icon: "/service/services-icon-5.png",
  },
  {
    slug: "clear-aligners-treatment",
    title: "Clear Aligners Treatment",
    image: "/service/services-3.png",
    icon: "/service/services-icon-6.png",
  },
  {
    slug: "periodontics",
    title: "Periodontics",
    image: "/service/services-inner-1.png",
    icon: "/service/services-icon-7.png",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    image: "/service/services-inner-5.png",
    icon: "/service/services-icon-8.png",
  },
  {
    slug: "oral-medicine-radiology",
    title: "Oral medicine and radiology",
    image: "/service/services-inner-6.png",
    icon: "/service/services-icon-9.png",
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    image: "/service/services-inner-4.png",
    icon: "/service/services-icon-10.png",
  },
  {
    slug: "prosthodontics",
    title: "Prosthodontics",
    image: "/service/services-inner-3.png",
    icon: "/service/services-icon-11.png",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    image: "/service/services-3.png",
    icon: "/service/services-icon-12.png",
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    image: "/service/services-inner-4.png",
    icon: "/service/services-icon-13.png",
  },
  {
    slug: "cosmetic-treatments",
    title: "Cosmetic Treatments",
    image: "/service/services-inner-1.png",
    icon: "/service/services-icon-15.png",
  },
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
