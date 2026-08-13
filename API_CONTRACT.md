# Elite Dental Studio — Blog & Services API Contract

This contract is the source of truth for making these four screens fully dynamic without changing the current UI:

- `/blog`
- `/blog/[slug]`
- `/services`
- `/services/[slug]`

All responses use JSON, UTF-8 and `camelCase`. The frontend must render arrays in the order returned by the API. Image values may be absolute URLs or the current site-relative paths shown below.

## Common response envelope

Successful response:

```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": {}
}
```

Validation/not-found response:

```json
{
  "success": false,
  "message": "Blog post not found",
  "error": {
    "code": "NOT_FOUND",
    "details": null
  }
}
```

Recommended status codes: `200`, `400`, `404`, `422`, `500`.

## Content block format

Blog and service descriptions must not be supplied as one unstructured HTML string. Use ordered blocks so the existing React layout can render safely and consistently.

```ts
type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bulletList"; items: string[] }
  | { type: "numberedList"; items: { title?: string; text: string }[] }
  | { type: "image"; image: Media; caption?: string | null }
  | {
      type: "infoCard";
      title: string;
      items: string[];
      image?: Media | null;
      footer?: string | null;
    }
  | { type: "quote"; text: string };

type Media = {
  url: string;
  alt: string;
  width?: number | null;
  height?: number | null;
};
```

Do not put Tailwind classes, JSX, inline styles or JavaScript in an API response.

---

# 1. Blog listing

## `GET /api/v1/blogs`

Query parameters:

| Name       |    Type | Default | Notes                    |
| ---------- | ------: | ------: | ------------------------ |
| `page`     |  number |     `1` | Minimum 1                |
| `limit`    |  number |     `8` | Recommended maximum 50   |
| `search`   |  string |   empty | Search title/excerpt     |
| `category` |  string |   empty | Category slug, not label |
| `featured` | boolean |   unset | Optional filter          |

Full response based on the content currently present in `components/blogData.ts`:

```json
{
  "success": true,
  "message": "Blogs fetched successfully",
  "data": {
    "pageSeo": {
      "metaTitle": "Dental Blog | Elite Dental Studio",
      "metaDescription": "Read dental care tips, treatment guides and the latest news from Elite Dental Studio."
    },
    "featuredPost": {
      "id": "blog_001",
      "slug": "invisalign-clear-aligners-elite-dental-studio-kochi-benefits-process-cost",
      "title": "Invisalign Clear Aligners At Elite Dental Studio Kochi: Benefits, Process & Cost",
      "excerpt": "If you want straighter teeth without the visibility of metal braces, Invisalign can be the comfortable, discreet choice for your smile journey.",
      "featuredImage": {
        "url": "/home/services/invisible-aligners.jpg",
        "alt": "Clear Invisalign aligners"
      },
      "category": { "id": "cat_003", "name": "Clear Aligners", "slug": "clear-aligners" },
      "author": {
        "id": "author_001",
        "name": "Elite Dental Studio",
        "email": "eliteinfo@gmail.com"
      },
      "publishedAt": "2026-08-07T00:00:00+05:30",
      "publishedLabel": "07 August 2026",
      "isFeatured": true
    },
    "items": [
      {
        "id": "blog_002",
        "slug": "how-to-choose-the-right-dental-clinic-in-kannur-for-your-family",
        "title": "How to Choose the Right Dental Clinic in Kannur for Your Family?",
        "excerpt": "Use practical care criteria to choose a dental clinic that provides gentle treatment, skilled dentists, and clear communication for every family member.",
        "featuredImage": { "url": "/about-freepik-checkup.jpg", "alt": "Family dental checkup" },
        "category": { "id": "cat_007", "name": "Dental Care", "slug": "dental-care" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-07-16T00:00:00+05:30",
        "publishedLabel": "16 July 2026",
        "isFeatured": false
      },
      {
        "id": "blog_003",
        "slug": "why-regular-dental-checkups-matter-for-every-family",
        "title": "Why Regular Dental Checkups Matter for Every Family",
        "excerpt": "Routine dental exams help catch cavities early, protect against gum disease, and preserve healthy smiles for children and adults alike.",
        "featuredImage": { "url": "/about-freepik-consultation.jpg", "alt": "Dental consultation" },
        "category": { "id": "cat_007", "name": "Dental Care", "slug": "dental-care" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-07-02T00:00:00+05:30",
        "publishedLabel": "02 July 2026",
        "isFeatured": false
      },
      {
        "id": "blog_004",
        "slug": "dental-implants-benefits-process-and-aftercare",
        "title": "Dental Implants: Benefits, Process and Aftercare",
        "excerpt": "Dental implants replace missing teeth with a stable, natural-looking solution that supports chewing, speech, and long-term oral health.",
        "featuredImage": { "url": "/service/services-2.png", "alt": "Dental implant treatment" },
        "category": { "id": "cat_011", "name": "Dental Implants", "slug": "dental-implants" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-06-24T00:00:00+05:30",
        "publishedLabel": "24 June 2026",
        "isFeatured": false
      },
      {
        "id": "blog_005",
        "slug": "everything-you-should-know-about-dental-crowns",
        "title": "Everything You Should Know About Dental Crowns",
        "excerpt": "Dental crowns protect damaged teeth, restore strength, and deliver a natural finish that blends with your smile.",
        "featuredImage": {
          "url": "/home/services/dental-fillings.jpg",
          "alt": "Dental crown treatment"
        },
        "category": { "id": "cat_002", "name": "Bridges & Crowns", "slug": "bridges-and-crowns" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-06-18T00:00:00+05:30",
        "publishedLabel": "18 June 2026",
        "isFeatured": false
      },
      {
        "id": "blog_006",
        "slug": "how-invisible-braces-can-transform-your-smile",
        "title": "How Invisible Braces Can Transform Your Smile",
        "excerpt": "Invisible braces are a discreet orthodontic option that gradually straightens teeth while fitting seamlessly into modern life.",
        "featuredImage": { "url": "/service/services-1.png", "alt": "Invisible braces" },
        "category": { "id": "cat_003", "name": "Clear Aligners", "slug": "clear-aligners" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-06-12T00:00:00+05:30",
        "publishedLabel": "12 June 2026",
        "isFeatured": false
      },
      {
        "id": "blog_007",
        "slug": "when-is-root-canal-treatment-the-right-choice",
        "title": "When Is Root Canal Treatment the Right Choice?",
        "excerpt": "Root canal therapy saves a tooth when the nerve is damaged, preventing pain and protecting the surrounding teeth.",
        "featuredImage": { "url": "/service/services-3.png", "alt": "Root canal treatment" },
        "category": { "id": "cat_007", "name": "Dental Care", "slug": "dental-care" },
        "author": {
          "id": "author_001",
          "name": "Elite Dental Studio",
          "email": "eliteinfo@gmail.com"
        },
        "publishedAt": "2026-06-04T00:00:00+05:30",
        "publishedLabel": "04 June 2026",
        "isFeatured": false
      }
    ],
    "pagination": {
      "currentPage": 1,
      "perPage": 8,
      "totalItems": 6,
      "totalPages": 1,
      "hasNextPage": false,
      "hasPreviousPage": false
    }
  }
}
```

Important: the current frontend artificially repeats posts to create 32 cards. The production API must return real posts and a real `totalItems`; the frontend must not repeat data.

## `GET /api/v1/blog-categories`

```json
{
  "success": true,
  "message": "Blog categories fetched successfully",
  "data": {
    "items": [
      { "id": "cat_001", "name": "Blog", "slug": "blog", "postCount": 0 },
      { "id": "cat_002", "name": "Bridges & Crowns", "slug": "bridges-and-crowns", "postCount": 1 },
      { "id": "cat_003", "name": "Clear Aligners", "slug": "clear-aligners", "postCount": 2 },
      {
        "id": "cat_004",
        "name": "Cosmetic Dentistry",
        "slug": "cosmetic-dentistry",
        "postCount": 0
      },
      { "id": "cat_005", "name": "Dental Abrasion", "slug": "dental-abrasion", "postCount": 0 },
      { "id": "cat_006", "name": "Dental Attrition", "slug": "dental-attrition", "postCount": 0 },
      { "id": "cat_007", "name": "Dental Care", "slug": "dental-care", "postCount": 3 },
      { "id": "cat_008", "name": "Dental Crown", "slug": "dental-crown", "postCount": 0 },
      { "id": "cat_009", "name": "Dental Fillings", "slug": "dental-fillings", "postCount": 0 },
      { "id": "cat_010", "name": "Dental Granuloma", "slug": "dental-granuloma", "postCount": 0 },
      { "id": "cat_011", "name": "Dental Implants", "slug": "dental-implants", "postCount": 1 },
      {
        "id": "cat_012",
        "name": "Dental Implants Treatment",
        "slug": "dental-implants-treatment",
        "postCount": 0
      },
      { "id": "cat_013", "name": "Dental Tourism", "slug": "dental-tourism", "postCount": 0 },
      { "id": "cat_014", "name": "Dental Veneers", "slug": "dental-veneers", "postCount": 0 },
      { "id": "cat_015", "name": "General Dentistry", "slug": "general-dentistry", "postCount": 0 },
      { "id": "cat_016", "name": "Invisible Braces", "slug": "invisible-braces", "postCount": 0 },
      { "id": "cat_017", "name": "Laser Gum Surgery", "slug": "laser-gum-surgery", "postCount": 0 },
      { "id": "cat_018", "name": "Operculectomy", "slug": "operculectomy", "postCount": 0 }
    ]
  }
}
```

---

# 2. Blog detail

## `GET /api/v1/blogs/{slug}`

The API must return the complete article body. The frontend must not check a slug and insert hardcoded Invisalign content.

```json
{
  "success": true,
  "message": "Blog fetched successfully",
  "data": {
    "id": "blog_001",
    "slug": "invisalign-clear-aligners-elite-dental-studio-kochi-benefits-process-cost",
    "title": "Invisalign Clear Aligners At Elite Dental Studio Kochi: Benefits, Process & Cost",
    "excerpt": "If you want straighter teeth without the visibility of metal braces, Invisalign can be the comfortable, discreet choice for your smile journey.",
    "featuredImage": {
      "url": "/home/services/invisible-aligners.jpg",
      "alt": "Invisalign clear aligners at Elite Dental Studio Kochi"
    },
    "category": { "id": "cat_003", "name": "Clear Aligners", "slug": "clear-aligners" },
    "author": { "id": "author_001", "name": "Elite Dental Studio", "email": "eliteinfo@gmail.com" },
    "publishedAt": "2026-08-07T00:00:00+05:30",
    "publishedLabel": "07 August 2026",
    "updatedAt": "2026-08-07T00:00:00+05:30",
    "readingTimeMinutes": 7,
    "seo": {
      "metaTitle": "Invisalign Clear Aligners At Elite Dental Studio Kochi: Benefits, Process & Cost | Elite Dental Studio",
      "metaDescription": "If you want straighter teeth without the visibility of metal braces, Invisalign can be the comfortable, discreet choice for your smile journey.",
      "canonicalUrl": "/blog/invisalign-clear-aligners-elite-dental-studio-kochi-benefits-process-cost",
      "robots": "index,follow",
      "ogImage": "/home/services/invisible-aligners.jpg"
    },
    "hero": {
      "eyebrow": "Latest Posts",
      "headlineLines": ["Invisalign", "Clear Aligners"],
      "subheadlineLines": ["At", "Elite Dental Studio Kochi:", "Benefits, Process & Cost"],
      "image": { "url": "/home/services/invisible-aligners.jpg", "alt": "Invisalign treatment" }
    },
    "content": [
      {
        "type": "paragraph",
        "text": "If you want straighter teeth but feel unsure about metal braces, Invisalign can feel like the cleaner and more comfortable choice. You may worry about visibility during meetings, food limits, speech changes or the final price. Invisalign in Kochi helps solve these concerns with clear removable aligners that move teeth through planned digital stages."
      },
      {
        "type": "paragraph",
        "text": "At Elite Dental Studio, we support your smile journey with an in-house iTero scanner, certified Invisalign provider support and an orthodontist with 8+ years of aligner experience."
      },
      { "type": "heading", "level": 2, "text": "Why Invisalign Leads The Clear Aligner Category?" },
      {
        "type": "bulletList",
        "items": [
          "Invisalign leads the clear aligner category because it combines advanced material, precise digital planning and global treatment data.",
          "Its SmartTrack material is around 30% more elastic than generic aligner plastic.",
          "SmartForce attachments and precision wings help guide tooth movement more accurately.",
          "Aligners are changed every one to two weeks for controlled movement."
        ]
      },
      { "type": "heading", "level": 2, "text": "5 Benefits Of Invisalign Clear Aligners" },
      {
        "type": "paragraph",
        "text": "Invisalign helps you straighten your teeth with a discreet look, better comfort, easier cleaning, fewer food restrictions and a treatment routine that fits daily life."
      },
      {
        "type": "numberedList",
        "items": [
          {
            "title": "Near-Invisible Look For Work And Social Life",
            "text": "Invisalign trays stay almost unnoticeable in normal lighting beyond 1.5 feet. This helps when you attend meetings, interviews, college classes or video calls. You can speak, smile and interact without worrying about metal brackets showing in photos."
          },
          {
            "title": "Comfortable Fit Without Wires Or Brackets",
            "text": "Invisalign uses smooth, custom-made plastic trays. There are no wires that poke your cheeks and no brackets that rub against your lips. Most people adjust to the trays within 48 hours."
          },
          {
            "title": "Easier Eating Without Food Restrictions",
            "text": "You remove Invisalign before eating. Fixed braces often need you to avoid hard or sticky foods. With Invisalign, you can eat normally, then brush and wear your trays again."
          },
          {
            "title": "Better Brushing And Flossing Every Day",
            "text": "Invisalign makes oral hygiene easier because you remove the trays before cleaning your teeth. This helps reduce plaque buildup, gum irritation and food trapping during treatment."
          },
          {
            "title": "Digital Planning For Predictable Smile Correction",
            "text": "Invisalign treatment uses advanced imaging and 3D scanning to plan tooth movement before you start. The scan helps your dentist check your bite, tooth position and expected smile changes."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Your Invisalign Journey At Elite Dental Studio Kochi"
      },
      {
        "type": "paragraph",
        "text": "Your Invisalign journey at Elite Dental Studio Kochi starts with a scan, moves into digital planning and continues with regular progress checks."
      },
      {
        "type": "bulletList",
        "items": [
          "Consultation takes around 45 minutes.",
          "Digital photos and X-rays guide assessment.",
          "Intra-oral scans take about 12 minutes.",
          "ClinCheck shows your future smile.",
          "First aligners arrive in 10–14 days.",
          "Check-ups happen every 6–8 weeks."
        ]
      },
      {
        "type": "paragraph",
        "text": "Your first visit helps us understand your teeth, bite and smile goals. The digital 3D scan creates a map of your mouth without messy impressions."
      },
      {
        "type": "infoCard",
        "title": "WHAT MAKES INVISALIGN WORK?",
        "items": [
          "SmartTrack Material Supports Steady Force",
          "3d Scans Map Tooth Movement",
          "Smartforce Attachments Improve Grip",
          "Aligners Move Teeth In Stages",
          "20-22 Hour Wear Drives Results",
          "Retainers Protect Final Alignment"
        ],
        "image": {
          "url": "/home/services/invisible-aligners.jpg",
          "alt": "Clear aligner treatment"
        },
        "footer": "Call: +91 9567124888"
      },
      { "type": "heading", "level": 2, "text": "Your Invisalign Timeline At Elite Dental Kochi" },
      {
        "type": "bulletList",
        "items": [
          "Day 1: Consultation and 3D scan",
          "Week 3: Receive first aligner set",
          "Week 4–8: Attachments placed if needed",
          "Month 3–6: First progress check",
          "Month 18–24: Complete active treatment",
          "Final Phase: Start retainers for stability"
        ]
      },
      {
        "type": "paragraph",
        "text": "Start your Invisalign journey in Kochi. Visit Elite Dental Studio for a complimentary 3D scan and treatment preview."
      }
    ],
    "sidebar": {
      "recentPosts": [
        {
          "title": "Denture Stomatitis – Causes, Symptoms, Diagnosis, Treatment, and Prevention",
          "slug": null
        },
        { "title": "Tooth Cervical Abrasion, Causes, Treatment and Prevention", "slug": null },
        { "title": "How To Heal Mouth Ulcers Fast With Glycerine?", "slug": null },
        { "title": "Why Do My Teeth Hurt When I Have A Cold?", "slug": null },
        { "title": "Zirconia Crown Or PFM Crown: Which Is Better For You?", "slug": null }
      ]
    },
    "faqSectionId": "faq_blog_general",
    "status": "published"
  }
}
```

For every other post, return the same keys and its own complete `content` array. Never return only the three short paragraphs currently stored in `blogData.ts` if the published page contains a longer article.

---

# 3. Services listing

## `GET /api/v1/services`

Query parameters: `page`, `limit`, `search`, and optional `status=published`.

```json
{
  "success": true,
  "message": "Services fetched successfully",
  "data": {
    "pageSeo": {
      "metaTitle": "Dental Services | Elite Dental Studio",
      "metaDescription": "Explore comprehensive dental treatments at Elite Dental Studio."
    },
    "hero": {
      "image": {
        "url": "/service/services-main0bg.png",
        "alt": "Dental treatment at Elite Dental Studio"
      }
    },
    "section": {
      "eyebrow": "OUR SERVICES",
      "icon": { "url": "/service/our-services.png", "alt": "" },
      "title": "Comprehensive dental care tailored services for every smile",
      "description": "Elite Dental Studio offers a full spectrum of dental procedures to help you explore what's best for your smile."
    },
    "items": [
      {
        "id": "service_001",
        "slug": "laser-dentistry",
        "title": "Laser Dentistry",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-1.png", "alt": "Laser Dentistry" },
        "icon": { "url": "/service/services-icon-14.png", "alt": "" },
        "sortOrder": 1
      },
      {
        "id": "service_002",
        "slug": "dental-fillings",
        "title": "Dental Fillings",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-2.png", "alt": "Dental Fillings" },
        "icon": { "url": "/service/services-icon-2.png", "alt": "" },
        "sortOrder": 2
      },
      {
        "id": "service_003",
        "slug": "invisible-aligners",
        "title": "Invisible Aligners",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-3.png", "alt": "Invisible Aligners" },
        "icon": { "url": "/service/services-icon-3.png", "alt": "" },
        "sortOrder": 3
      },
      {
        "id": "service_004",
        "slug": "maxillofacial-orthognathic-surgery",
        "title": "Maxillofacial & Orthognathic surgery",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": {
          "url": "/service/services-inner-6.png",
          "alt": "Maxillofacial & Orthognathic surgery"
        },
        "icon": { "url": "/service/services-icon-4.png", "alt": "" },
        "sortOrder": 4
      },
      {
        "id": "service_005",
        "slug": "dental-implant",
        "title": "Dental Implant",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-3.png", "alt": "Dental Implant" },
        "icon": { "url": "/service/services-icon-5.png", "alt": "" },
        "sortOrder": 5
      },
      {
        "id": "service_006",
        "slug": "clear-aligners-treatment",
        "title": "Clear Aligners Treatment",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-3.png", "alt": "Clear Aligners Treatment" },
        "icon": { "url": "/service/services-icon-6.png", "alt": "" },
        "sortOrder": 6
      },
      {
        "id": "service_007",
        "slug": "periodontics",
        "title": "Periodontics",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-1.png", "alt": "Periodontics" },
        "icon": { "url": "/service/services-icon-7.png", "alt": "" },
        "sortOrder": 7
      },
      {
        "id": "service_008",
        "slug": "pediatric-dentistry",
        "title": "Pediatric Dentistry",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-5.png", "alt": "Pediatric Dentistry" },
        "icon": { "url": "/service/services-icon-8.png", "alt": "" },
        "sortOrder": 8
      },
      {
        "id": "service_009",
        "slug": "oral-medicine-radiology",
        "title": "Oral medicine and radiology",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": {
          "url": "/service/services-inner-6.png",
          "alt": "Oral medicine and radiology"
        },
        "icon": { "url": "/service/services-icon-9.png", "alt": "" },
        "sortOrder": 9
      },
      {
        "id": "service_010",
        "slug": "endodontics",
        "title": "Endodontics",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-4.png", "alt": "Endodontics" },
        "icon": { "url": "/service/services-icon-10.png", "alt": "" },
        "sortOrder": 10
      },
      {
        "id": "service_011",
        "slug": "prosthodontics",
        "title": "Prosthodontics",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-3.png", "alt": "Prosthodontics" },
        "icon": { "url": "/service/services-icon-11.png", "alt": "" },
        "sortOrder": 11
      },
      {
        "id": "service_012",
        "slug": "orthodontics",
        "title": "Orthodontics",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-3.png", "alt": "Orthodontics" },
        "icon": { "url": "/service/services-icon-12.png", "alt": "" },
        "sortOrder": 12
      },
      {
        "id": "service_013",
        "slug": "restorative-dentistry",
        "title": "Restorative Dentistry",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-4.png", "alt": "Restorative Dentistry" },
        "icon": { "url": "/service/services-icon-13.png", "alt": "" },
        "sortOrder": 13
      },
      {
        "id": "service_014",
        "slug": "cosmetic-treatments",
        "title": "Cosmetic Treatments",
        "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
        "cardImage": { "url": "/service/services-inner-1.png", "alt": "Cosmetic Treatments" },
        "icon": { "url": "/service/services-icon-15.png", "alt": "" },
        "sortOrder": 14
      }
    ],
    "pagination": {
      "currentPage": 1,
      "perPage": 20,
      "totalItems": 14,
      "totalPages": 1,
      "hasNextPage": false,
      "hasPreviousPage": false
    }
  }
}
```

---

# 4. Service detail

## `GET /api/v1/services/{slug}`

Full response for the currently designed Laser Dentistry page:

```json
{
  "success": true,
  "message": "Service fetched successfully",
  "data": {
    "id": "service_001",
    "slug": "laser-dentistry",
    "title": "Laser Dentistry",
    "treatmentName": "Dental Laser Treatment",
    "shortDescription": "We are excited to meet you and provide the best dental care for your family.",
    "icon": { "url": "/service/services-icon-14.png", "alt": "" },
    "cardImage": { "url": "/service/services-1.png", "alt": "Laser Dentistry" },
    "seo": {
      "metaTitle": "Laser Dentistry | Elite Dental Studio",
      "metaDescription": "Laser Dentistry consultation and treatment at Elite Dental Studio.",
      "canonicalUrl": "/services/laser-dentistry",
      "robots": "index,follow",
      "ogImage": "/service/services-1.png"
    },
    "hero": {
      "image": {
        "url": "/service/services-inner-bg.png",
        "alt": "Dental treatment at Elite Dental Studio"
      }
    },
    "overview": {
      "title": "Dental Laser Treatment",
      "locationLine": "in Kochi, Calicut & Kannur",
      "paragraphs": [
        "If you are searching for the best laser dentistry clinic near me, you want two things confirmed: what the treatment actually involves and whether it applies to your condition.",
        "Dental laser treatment uses focused light energy to support selected gum and soft tissue procedures with greater precision. At Elite Dental Studio, our periodontics and laser specialist team offers dental laser treatment in Calicut, Kochi and Kannur, with each case planned after a proper clinical check."
      ],
      "backgroundImage": { "url": "/service/services-inner-1.png", "alt": "Dental laser procedure" }
    },
    "introduction": {
      "title": "What Is Dental Laser Treatment?",
      "image": { "url": "/service/what-treatment.png", "alt": "Laser Dentistry" },
      "paragraphs": [
        "Laser dentistry is a clinical technique that uses a focused beam of light energy to treat selected gum and soft tissue conditions in the mouth. The laser delivers controlled energy to a specific area, allowing the dentist to work with more precision than conventional soft tissue methods in suitable cases.",
        "This technique gives the treating dentist greater control over soft tissue work, which is why it is used in selected gum and cosmetic dental procedures at Elite Dental Studio."
      ]
    },
    "procedures": {
      "title": "Which Dental Procedures Use Laser Support?",
      "subtitle": "At Elite Dental Studio, support is used in these procedures:",
      "centerImage": {
        "url": "/service/services-inner-2.png",
        "alt": "Elite Dental Studio specialist"
      },
      "items": [
        {
          "title": "Laser-assisted gum treatment",
          "description": "Supports gum pocket care with greater precision.",
          "icon": { "url": "/service/services-icon-14.png", "alt": "" }
        },
        {
          "title": "Laser gingivectomy",
          "description": "Removes or reshapes excess gum tissue where needed.",
          "icon": { "url": "/service/services-icon-14.png", "alt": "" }
        },
        {
          "title": "Laser gum depigmentation",
          "description": "Reduces dark gum pigmentation in suitable cosmetic cases.",
          "icon": { "url": "/service/services-icon-14.png", "alt": "" }
        },
        {
          "title": "Laser frenectomy",
          "description": "Releases a tight frenum for tongue tie or lip tie cases.",
          "icon": { "url": "/service/services-icon-14.png", "alt": "" }
        },
        {
          "title": "Laser-assisted soft tissue care",
          "description": "Used for selected ulcers or soft tissue growths after diagnosis.",
          "icon": { "url": "/service/services-icon-14.png", "alt": "" }
        }
      ],
      "note": "Each procedure is planned after your dentist confirms your condition and treatment goals."
    },
    "candidate": {
      "title": "Who Should Consider Dental Laser Treatment?",
      "subtitle": "Your dentist may recommend laser support if you have:",
      "items": [
        "Gum disease with deeper pockets needing precise cleaning.",
        "Excess gum tissue covering teeth or affecting cleaning access.",
        "Dark gum pigmentation you want addressed cosmetically.",
        "A tight frenum causing tongue tie, lip tie or tooth gaps.",
        "Mouth ulcers or soft tissue growths needing clinical care.",
        "A gummy smile requiring gum line reshaping."
      ],
      "note": "Suitability is confirmed after a clinical examination and dental X-ray at our clinic.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Dental Laser Treatment treatment examples"
      }
    },
    "expectation": {
      "title": "What to Expect During and After Laser Treatment?",
      "paragraphs": [
        "Most laser procedures at Elite Dental Studio are completed in a single sitting of 20 to 60 minutes. Local anaesthesia or numbing gel is used where needed so you are comfortable throughout the procedure.",
        "After your session, mild soreness in the treated area is normal and typically settles within a few days. Most patients return to their regular routine the same day or the following day depending on the procedure."
      ],
      "image": { "url": "/service/services-inner-4.png", "alt": "Dental laser treatment" }
    },
    "aftercare": {
      "title": "Aftercare Following Your Laser Procedure",
      "description": "The aftercare period after this treatment is straightforward. Your dentist at Elite Dental Studio gives you specific instructions based on your procedure. General guidance includes:",
      "items": [
        "Eat soft foods for the first two to three days.",
        "Rinse gently with the solution your dentist recommends.",
        "Avoid smoking during the healing period.",
        "Do not disturb the treated area with your tongue or fingers.",
        "Attend your follow-up visit so your dentist can check healing progress."
      ],
      "note": "Most patients find the recovery period manageable with simple care at home.",
      "image": { "url": "/service/services-inner-5.png", "alt": "Dental laser aftercare" }
    },
    "benefits": {
      "title": "Benefits of Dental Laser Treatment",
      "description": "Where laser treatment is clinically suitable, it offers clear advantages over conventional soft tissue methods:",
      "items": [
        "More precise soft tissue handling with less disruption to the area around it.",
        "Often less bleeding during the procedure compared to conventional methods.",
        "Reduced need for sutures in certain soft tissue procedures.",
        "Faster soft tissue recovery in selected cases.",
        "Better gum contour and appearance outcomes in cosmetic procedures.",
        "Lower risk of post-procedure infection in suitable cases."
      ],
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Benefits of Dental Laser Treatment"
      },
      "footerText": "Patients seeking advanced dental laser treatment in Kochi and Kannur trust Elite Dental Studio for safe, precise, and specialist-led care, ensuring faster healing, minimal discomfort, and outstanding clinical outcomes."
    },
    "results": {
      "eyebrow": "Before & after",
      "title": "See what thoughtful care can achieve.",
      "description": "Explore selected patient transformations from Elite Dental Studio. Your laser dentistry result will depend on your individual clinical condition and treatment plan.",
      "items": [
        {
          "id": "result_001",
          "label": "Smile rehabilitation",
          "beforeImage": { "url": "/cases/case-01.webp", "alt": "Smile rehabilitation before" },
          "afterImage": { "url": "/cases/case-01.webp", "alt": "Smile rehabilitation after" }
        },
        {
          "id": "result_002",
          "label": "Alignment correction",
          "beforeImage": { "url": "/cases/case-09.webp", "alt": "Alignment correction before" },
          "afterImage": { "url": "/cases/case-09.webp", "alt": "Alignment correction after" }
        },
        {
          "id": "result_003",
          "label": "Aesthetic restoration",
          "beforeImage": { "url": "/cases/case-02.webp", "alt": "Aesthetic restoration before" },
          "afterImage": { "url": "/cases/case-02.webp", "alt": "Aesthetic restoration after" }
        }
      ],
      "viewAll": { "label": "View all smile transformations →", "url": "/gallery/cases" }
    },
    "relatedSectionIds": {
      "nearestClinic": "nearest_clinic_default",
      "doctors": "doctors_default",
      "testimonials": "testimonials_default",
      "blogs": "blogs_latest",
      "faqs": "faq_services_general",
      "appointment": "appointment_default"
    },
    "sortOrder": 1,
    "status": "published",
    "createdAt": "2026-08-01T00:00:00+05:30",
    "updatedAt": "2026-08-01T00:00:00+05:30"
  }
}
```

The current code reuses Laser Dentistry copy for many non-laser services. The backend must store and return separate `overview`, `introduction`, `procedures`, `candidate`, `expectation`, `aftercare`, `benefits`, and `results` data for each service slug. The frontend should never generate non-laser copy with string replacement.

---

# 5. Shared sections

If FAQ, doctors, testimonials, latest blogs and clinic sections will also be CMS-controlled, resolve the IDs returned in `relatedSectionIds` through these endpoints:

```text
GET /api/v1/faqs?sectionId=faq_services_general
GET /api/v1/doctors?service=laser-dentistry
GET /api/v1/testimonials?service=laser-dentistry
GET /api/v1/blogs?limit=3
GET /api/v1/clinics?service=laser-dentistry
GET /api/v1/page-sections/{sectionId}
```

FAQ response:

```json
{
  "success": true,
  "message": "FAQs fetched successfully",
  "data": {
    "sectionId": "faq_services_general",
    "title": "Frequently Asked Questions",
    "items": [
      { "id": "faq_001", "question": "Question text", "answer": "Answer text", "sortOrder": 1 }
    ]
  }
}
```

---

# 6. Backend validation rules

- `slug` must be unique, lowercase and URL-safe.
- Published blog/service records require `title`, `slug`, SEO fields and all images used by visible sections.
- Store dates as ISO 8601; `publishedLabel` is optional convenience. The frontend may format `publishedAt`.
- `sortOrder` controls cards and section items; never depend on database insertion order.
- A media object must always include useful `alt` text unless the image is decorative.
- Every service-detail section should be nullable or have `isEnabled`; do not return fake placeholder text.
- Before/after results should normally have two distinct images. The current UI uses one vertically combined image, so both URLs are temporarily the same.
- Category filters use `category.slug`; UI displays `category.name`.
- Return only `status: "published"` content to the public API.
- Sanitize rich text on the backend. If HTML is later required, allow only a documented safe tag list.

# 7. Frontend integration rules

- Listing page calls `GET /blogs` and `GET /blog-categories`; search/category/page values go to query parameters.
- Detail page calls `GET /blogs/{slug}` and renders `content` blocks in returned order.
- Services page calls `GET /services` and renders `items` by `sortOrder`.
- Service detail calls `GET /services/{slug}` and maps each named section directly to its existing component.
- Use `404` when a slug does not exist and keep a loading/error state for runtime fetching.
- Do not keep `repeatedPosts`, slug-specific article JSX, `isLaser`, or content-generating `name.replace(...)` after API integration.
- If static generation remains enabled, use ISR and a non-blocking fallback so a newly published slug works without a frontend redeploy.
