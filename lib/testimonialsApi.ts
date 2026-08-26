import { getContent } from "@/lib/contentApi";

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
  const data = await getContent<{ items: TestimonialItem[] }>("testimonials");
  return (data.items || [])
    .filter((item) => item?.id && (item.type === "text" || item.type === "video"))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}
