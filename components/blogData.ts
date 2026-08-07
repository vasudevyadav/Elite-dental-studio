import type { StaticImageData } from "next/image";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "invisalign-clear-aligners-elite-dental-studio-kochi-benefits-process-cost",
    title: "Invisalign Clear Aligners At Elite Dental Studio Kochi: Benefits, Process & Cost",
    excerpt:
      "If you want straighter teeth without the visibility of metal braces, Invisalign can be the comfortable, discreet choice for your smile journey.",
    image: "/home/services/invisible-aligners.jpg",
    category: "Clear Aligners",
    date: "07 August 2026",
    author: "Elite Dental Studio",
    content: [
      "Invisalign clear aligners offer an advanced digital treatment path that moves teeth in stages while keeping your smile discreet and comfortable.",
      "At Elite Dental Studio Kochi, we use modern 3D scanning and SmartTrack material to design a series of custom aligners that gently shift teeth into their ideal position.",
      "The treatment includes an initial consultation, scan, aligner fit, follow-up appointments, and final retainers to maintain your result. Patients usually change trays every 1–2 weeks and wear them for 20–22 hours a day.",
      "Overall, Invisalign is a popular option for working professionals, students, and anyone who wants a predictable smile outcome without traditional metal braces.",
    ],
  },
  {
    slug: "how-to-choose-the-right-dental-clinic-in-kannur-for-your-family",
    title: "How to Choose the Right Dental Clinic in Kannur for Your Family?",
    excerpt:
      "Use practical care criteria to choose a dental clinic that provides gentle treatment, skilled dentists, and clear communication for every family member.",
    image: "/about-freepik-checkup.jpg",
    category: "Dental Care",
    date: "16 July 2026",
    author: "Elite Dental Studio",
    content: [
      "Selecting a clinic for your family means evaluating the dentist’s experience, treatment options, and the patient experience from check-in to follow-up.",
      "Look for a facility with digital imaging, pain management options, pediatric care, and a supportive staff who explain treatment clearly.",
      "At Elite Dental Studio, we offer family-friendly appointments and advanced care for preventive dentistry, restorative treatments, and cosmetic smile enhancement.",
    ],
  },
  {
    slug: "why-regular-dental-checkups-matter-for-every-family",
    title: "Why Regular Dental Checkups Matter for Every Family",
    excerpt:
      "Routine dental exams help catch cavities early, protect against gum disease, and preserve healthy smiles for children and adults alike.",
    image: "/about-freepik-consultation.jpg",
    category: "Dental Care",
    date: "02 July 2026",
    author: "Elite Dental Studio",
    content: [
      "Regular checkups allow your dentist to identify issues before they become painful or expensive, such as enamel wear, decay, and gum inflammation.",
      "Professional cleaning and oral hygiene coaching are essential parts of preventive care, especially for children and busy adults.",
      "Scheduling dental exams every six months is a simple step that keeps your family's smiles healthy and confident.",
    ],
  },
  {
    slug: "dental-implants-benefits-process-and-aftercare",
    title: "Dental Implants: Benefits, Process and Aftercare",
    excerpt:
      "Dental implants replace missing teeth with a stable, natural-looking solution that supports chewing, speech, and long-term oral health.",
    image: "/service/services-2.png",
    category: "Dental Implants",
    date: "24 June 2026",
    author: "Elite Dental Studio",
    content: [
      "Dental implants consist of a titanium post placed into the jawbone, followed by a custom crown that restores function and appearance.",
      "After implant placement, proper healing time and gentle oral hygiene help ensure a predictable outcome.",
      "Our team provides clear aftercare advice so patients feel comfortable eating, cleaning, and returning for follow-up visits.",
    ],
  },
  {
    slug: "everything-you-should-know-about-dental-crowns",
    title: "Everything You Should Know About Dental Crowns",
    excerpt:
      "Dental crowns protect damaged teeth, restore strength, and deliver a natural finish that blends with your smile.",
    image: "/home/services/dental-fillings.jpg",
    category: "Bridges & Crowns",
    date: "18 June 2026",
    author: "Elite Dental Studio",
    content: [
      "Crowns are ideal when a tooth has extensive decay, a large filling, or needs reinforcement after root canal treatment.",
      "Our clinic uses high-quality ceramic and zirconia materials to achieve both durability and a great aesthetic match.",
      "Proper preparation, digital scanning, and precise placement help ensure a lasting crown that feels comfortable and looks natural.",
    ],
  },
  {
    slug: "how-invisible-braces-can-transform-your-smile",
    title: "How Invisible Braces Can Transform Your Smile",
    excerpt:
      "Invisible braces are a discreet orthodontic option that gradually straightens teeth while fitting seamlessly into modern life.",
    image: "/service/services-1.png",
    category: "Clear Aligners",
    date: "12 June 2026",
    author: "Elite Dental Studio",
    content: [
      "Invisible aligners move teeth using a sequence of clear trays designed from a digital treatment plan.",
      "Most patients appreciate the reduced visibility, removable cleaning routine, and smoother transition compared to metal braces.",
      "With regular progress checks, invisible braces can produce excellent results for a wide range of alignment concerns.",
    ],
  },
  {
    slug: "when-is-root-canal-treatment-the-right-choice",
    title: "When Is Root Canal Treatment the Right Choice?",
    excerpt:
      "Root canal therapy saves a tooth when the nerve is damaged, preventing pain and protecting the surrounding teeth.",
    image: "/service/services-3.png",
    category: "Dental Care",
    date: "04 June 2026",
    author: "Elite Dental Studio",
    content: [
      "Root canal treatment becomes necessary when decay or trauma reaches the tooth’s nerve tissue.",
      "Modern treatment is much more comfortable than many people expect, and it preserves the natural tooth structure.",
      "Aftercare is important: keep the area clean, avoid hard foods briefly, and return for the crown or restoration as recommended.",
    ],
  },
];

export const blogCategories = [
  "Blog",
  "Bridges & Crowns",
  "Clear Aligners",
  "Cosmetic Dentistry",
  "Dental Abrasion",
  "Dental Attrition",
  "Dental Care",
  "Dental Crown",
  "Dental Fillings",
  "Dental Granuloma",
  "Dental Implants",
  "Dental Implants Treatment",
  "Dental Tourism",
  "Dental Veneers",
  "General Dentistry",
  "Invisible Braces",
  "Laser Gum Surgery",
  "Operculectomy",
];

export const recentPosts = [
  "Denture Stomatitis – Causes, Symptoms, Diagnosis, Treatment, and Prevention",
  "Tooth Cervical Abrasion, Causes, Treatment and Prevention",
  "How To Heal Mouth Ulcers Fast With Glycerine?",
  "Why Do My Teeth Hurt When I Have A Cold?",
  "Zirconia Crown Or PFM Crown: Which Is Better For You?",
];

export const findBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
