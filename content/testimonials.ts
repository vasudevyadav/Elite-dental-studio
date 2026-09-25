import type { TestimonialItem } from "@/lib/testimonialsApi";

const reviews = [
  {
    id: "testimonial_3671",
    name: "Anupam Krishna",
    text: "I had a very peaceful and pleasant experience visiting the place. I got my wisdom tooth extracted. The doctors (Dr.Sandhya & Dr.Siddharth) and other staffs were very inviting and comforting, and walked me through the procedures very clearly. Would definitely recommend any one looking for a good place for their dental related consultations.",
    location: { name: "Calicut", slug: "calicut" },
    sortOrder: 1,
  },
  {
    id: "testimonial_3673",
    name: "PRIYANKA",
    text: "Excellent Experience, I had a wonderful experience at this dental studio. The clinic is clean, modern, and very well maintained. The doctor was professional, patient, and explained everything clearly before the treatment. The staff were also friendly, caring, and welcoming. I felt comfortable throughout my visit. Highly recommended for anyone looking for quality dental care and a pleasant experience!",
    location: { name: "Coimbatore", slug: "coimbatore" },
    sortOrder: 1,
  },
  {
    id: "testimonial_3672",
    name: "Vivek Vengassery",
    text: "I recently took my 4-year-old daughter to this dental clinic, and we had a very good experience. The dentist was very patient, friendly, and gentle with my child. The treatment was explained clearly, and my daughter felt comfortable throughout the consultation. I really appreciate the professional care and child-friendly approach. Highly recommended!",
    location: { name: "Kochi", slug: "kochi" },
    sortOrder: 1,
  },
  {
    id: "testimonial_3669",
    name: "Najma T M V",
    text: "We had a wonderful experience at Elite dental studio for my daughter’s treatment! The entire staff and doctor were so patient, gentle, and welcoming. Going to the dentist can be scary for kids, but they made her feel completely safe and comfortable from start to finish. Highly recommend them to any parent looking for compassionate dental care.",
    location: { name: "Kannur", slug: "kannur" },
    sortOrder: 1,
  },
  {
    id: "testimonial_3677",
    name: "arjun surendran",
    text: "The dental studio is located at a prime location. Easy to access. Very friendly doctors and staff. Everything went smooth and easy. Highly recommend this clinic to all.",
    location: { name: "Coimbatore", slug: "coimbatore" },
    sortOrder: 2,
  },
  {
    id: "testimonial_3676",
    name: "Abhishek R Nair",
    text: "Very well service and experienced doctors who will properly explain and guide you throught out the entire process and very well advanced machineries and hospitalble staffs.",
    location: { name: "Kochi", slug: "kochi" },
    sortOrder: 2,
  },
];

export const staticTestimonials: TestimonialItem[] = reviews.map((review) => ({
  ...review,
  type: "text",
  role: "Google Review",
  image: { url: "", alt: review.name },
  videoUrl: "",
  videoThumbnail: { url: "", alt: review.name },
}));
