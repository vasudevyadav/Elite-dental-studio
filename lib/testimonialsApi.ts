import { staticTestimonials } from "@/content/testimonials";

export type TestimonialItem = {
  id: string;
  type: "text" | "video";
  text: string;
  name: string;
  role: string;
  image: { url: string; alt: string };
  videoUrl: string;
  videoThumbnail: { url: string; alt: string };
  location: { name: string; slug: string };
  sortOrder: number;
};

export async function getTestimonials(): Promise<TestimonialItem[]> {
  return [...staticTestimonials].sort((a, b) => a.sortOrder - b.sortOrder);
}
