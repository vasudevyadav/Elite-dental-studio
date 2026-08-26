import type { NextApiRequest, NextApiResponse } from "next";
import { getTestimonials } from "@/lib/testimonialsApi";

export default async function handler(_request: NextApiRequest, response: NextApiResponse) {
  try {
    const items = await getTestimonials();
    response.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    response.status(200).json({ success: true, data: { items } });
  } catch (error) {
    console.error("Unable to load WordPress testimonials.", error);
    response.status(502).json({ success: false, message: "Unable to load testimonials" });
  }
}
