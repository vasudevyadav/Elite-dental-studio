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

# 6. Doctors APIs

## `GET /api/v1/doctors`

Query parameters: `clinic` (clinic slug), `search`, `page`, `limit`. All doctors and filter options must come from this API; never hardcode profile links.

```json
{
  "success": true,
  "message": "Doctors fetched successfully",
  "data": {
    "pageSeo": {
      "metaTitle": "Our Doctors | Elite Dental Studio",
      "metaDescription": "Meet the experienced dental specialists at Elite Dental Studio and book your appointment."
    },
    "pageHeader": { "title": "Our Doctors" },
    "clinics": [
      { "id": "clinic_001", "name": "Calicut", "slug": "calicut" },
      { "id": "clinic_002", "name": "Kochi", "slug": "kochi" },
      { "id": "clinic_003", "name": "Kannur", "slug": "kannur" },
      { "id": "clinic_004", "name": "Coimbatore", "slug": "coimbatore" }
    ],
    "items": [
      { "id": "doctor_001", "slug": "dr-amal", "name": "Dr. Amal", "qualification": "BDS, MDS", "speciality": "Pedodontics & Preventive Dentistry · Managing Director", "experienceYears": 15, "experienceLabel": "15 Yrs", "image": { "url": "/home/doctors/dr-amal.jpg", "alt": "Dr. Amal" }, "clinics": [{ "id": "clinic_001", "name": "Calicut", "slug": "calicut" }], "profileUrl": "/doctors/dr-amal", "sortOrder": 1 },
      { "id": "doctor_002", "slug": "dr-amrita-sathianathan", "name": "Dr. Amrita Sathianathan", "qualification": "BDS, MDS", "speciality": "Prosthodontics & Implantology", "experienceYears": 12, "experienceLabel": "12 Yrs", "image": { "url": "/home/doctors/dr-amrita.jpg", "alt": "Dr. Amrita Sathianathan" }, "clinics": [{ "id": "clinic_002", "name": "Kochi", "slug": "kochi" }], "profileUrl": "/doctors/dr-amrita-sathianathan", "sortOrder": 2 },
      { "id": "doctor_003", "slug": "dr-vidhu-s", "name": "Dr. Vidhu S", "qualification": "BDS, MDS", "speciality": "Invisalign Certified Orthodontist", "experienceYears": 10, "experienceLabel": "10 Yrs", "image": { "url": "/home/doctors/dr-vidhu.jpg", "alt": "Dr. Vidhu S" }, "clinics": [{ "id": "clinic_001", "name": "Calicut", "slug": "calicut" }], "profileUrl": "/doctors/dr-vidhu-s", "sortOrder": 3 },
      { "id": "doctor_004", "slug": "dr-manu-mathew", "name": "Dr. Manu Mathew", "qualification": "BDS, MDS (Orthodontics)", "speciality": "Orthodontics · Aligner Specialist", "experienceYears": 10, "experienceLabel": "10 Yrs", "image": { "url": "/home/doctors/dr-manu.jpg", "alt": "Dr. Manu Mathew" }, "clinics": [{ "id": "clinic_003", "name": "Kannur", "slug": "kannur" }], "profileUrl": "/doctors/dr-manu-mathew", "sortOrder": 4 },
      { "id": "doctor_005", "slug": "dr-megha-mohan", "name": "Dr. Megha Mohan", "qualification": "BDS, MDS", "speciality": "Pedodontics & Preventive Dentistry", "experienceYears": 8, "experienceLabel": "8 Yrs", "image": { "url": "/home/doctors/dr-megha.jpg", "alt": "Dr. Megha Mohan" }, "clinics": [{ "id": "clinic_004", "name": "Coimbatore", "slug": "coimbatore" }], "profileUrl": "/doctors/dr-megha-mohan", "sortOrder": 5 }
    ],
    "pagination": { "currentPage": 1, "perPage": 20, "totalItems": 5, "totalPages": 1, "hasNextPage": false, "hasPreviousPage": false }
  }
}
```

## `GET /api/v1/doctors/{slug}`

```json
{
  "success": true,
  "message": "Doctor fetched successfully",
  "data": {
    "id": "doctor_001",
    "slug": "dr-amal",
    "name": "Dr. Amal",
    "qualification": "BDS, MDS",
    "speciality": "Pedodontics & Preventive Dentistry & Managing Director",
    "experienceYears": 15,
    "experienceLabel": "15 Yrs",
    "image": { "url": "/home/doctors/dr-amal.jpg", "alt": "Dr. Amal" },
    "clinics": [{ "id": "clinic_001", "name": "Calicut", "slug": "calicut", "label": "Calicut Branch" }],
    "seo": { "metaTitle": "Dr. Amal | Elite Dental Studio", "metaDescription": "Meet Dr. Amal, Pedodontics and Preventive Dentistry specialist at Elite Dental Studio.", "canonicalUrl": "/doctors/dr-amal", "robots": "index,follow", "ogImage": "/home/doctors/dr-amal.jpg" },
    "pageTitle": "About Doctors",
    "about": { "title": "About Dr. Amal", "paragraphs": ["Dr. Amal Sidharth is a distinguished dental professional with a wealth of knowledge and expertise in the field of pedodontics. He holds a Bachelor of Dental Surgery (BDS) degree, and furthered his education by obtaining a Master's degree in Dental Surgery (MDS) with a specialization in Pedodontics."] },
    "stats": [
      { "id": "stat_001", "icon": "implant", "value": "4500+", "label": "Dental Implant", "sortOrder": 1 },
      { "id": "stat_002", "icon": "surgery", "value": "1500+", "label": "Dental Surgery", "sortOrder": 2 },
      { "id": "stat_003", "icon": "rct", "value": "500+", "label": "RCT", "sortOrder": 3 }
    ],
    "expertise": ["Smile Design", "Full Mouth Rehabilitation", "Dental Fillings", "RCTs", "Crowns", "Scaling", "Consultation for Implants and Aligners"],
    "availability": [
      { "type": "visitingTime", "label": "Visiting Time", "value": "11 AM–8 PM", "icon": "clock" },
      { "type": "visitingDays", "label": "Visiting Days", "value": "Everyday", "icon": "calendar" },
      { "type": "languages", "label": "Languages Known", "value": "English, Telugu, Hindi", "icon": "language" }
    ],
    "appointmentSectionId": "appointment_dr_amal",
    "status": "published"
  }
}
```

# 7. Our Dental Office API

## `GET /api/v1/pages/our-dental-office`

```json
{
  "success": true,
  "message": "Dental office page fetched successfully",
  "data": {
    "slug": "our-dental-office",
    "seo": { "metaTitle": "Our Dental Office | Elite Dental Studio", "metaDescription": "Take a virtual tour of Elite Dental Studio's modern dental offices in Calicut and Kochi.", "canonicalUrl": "/our-dental-office", "robots": "index,follow", "ogImage": "/office/calicut-04.webp" },
    "sections": [
      { "type": "hero", "sortOrder": 1, "isEnabled": true, "content": { "eyebrow": "A modern space for better smiles", "title": "Our Dental", "accent": "Office", "description": "Step inside a calm, technology-led environment designed around clinical precision, patient comfort and care for every age.", "slides": [{ "image": { "url": "/office/calicut-04.webp", "alt": "Elite Dental Studio reception" }, "sortOrder": 1 }] } },
      { "type": "introduction", "sortOrder": 2, "isEnabled": true, "content": { "eyebrow": "Designed around you", "title": "Clinical excellence feels different here.", "description": "Our dental offices bring specialist care, advanced technology and thoughtful hospitality together under one roof. From the moment you arrive, every space is planned to feel clear, comfortable and reassuring.", "stats": [{ "value": "4", "label": "Clinic locations" }, { "value": "15+", "label": "Specialists" }, { "value": "100%", "label": "MDS doctors" }] } },
      { "type": "gallery", "sortOrder": 3, "isEnabled": true, "content": { "eyebrow": "Virtual tour", "title": "A closer look inside", "locations": [{ "name": "Calicut", "slug": "calicut" }, { "name": "Kochi", "slug": "kochi" }, { "name": "Kannur", "slug": "kannur" }, { "name": "Coimbatore", "slug": "coimbatore" }], "items": [
        { "id": "office_001", "locationSlug": "calicut", "label": "Reception & welcome desk", "image": { "url": "/office/calicut-04.webp", "alt": "Reception & welcome desk" }, "sortOrder": 1 },
        { "id": "office_002", "locationSlug": "calicut", "label": "Modern treatment suite", "image": { "url": "/office/calicut-02.webp", "alt": "Modern treatment suite" }, "sortOrder": 2 },
        { "id": "office_003", "locationSlug": "kochi", "label": "Kids-friendly dental zone", "image": { "url": "/office/kochi-05.webp", "alt": "Kids-friendly dental zone" }, "sortOrder": 3 },
        { "id": "office_004", "locationSlug": "kannur", "label": "Modern treatment room", "image": { "url": "/office/5bbea59a-c621-473f-8a9d-c4ff63269196.webp", "alt": "Modern treatment room" }, "sortOrder": 4 },
        { "id": "office_005", "locationSlug": "coimbatore", "label": "Contemporary patient lounge", "image": { "url": "/office/1f0186e7-99d0-44d4-a6dd-efb98b394a8e.webp", "alt": "Contemporary patient lounge" }, "sortOrder": 5 }
      ] } },
      { "type": "comfort", "sortOrder": 4, "isEnabled": true, "content": { "eyebrow": "For every generation", "title": "Dental visits made more comfortable.", "description": "Our welcoming spaces reduce anxiety, support privacy and help children feel at ease. Because the environment around your treatment matters just as much as the treatment itself.", "image": { "url": "/office/kochi-05.webp", "alt": "Child-friendly area at Elite Dental Studio" }, "cta": { "label": "Plan your visit", "url": "#appointment" } } }
    ],
    "relatedSectionIds": { "nearestClinic": "nearest_clinic_default", "appointment": "appointment_default" },
    "status": "published"
  }
}
```

# 8. Location detail API

## `GET /api/v1/locations/{slug}`

Example: `/api/v1/locations/kannur`

```json
{
  "success": true,
  "message": "Location fetched successfully",
  "data": {
    "id": "clinic_003",
    "slug": "kannur",
    "name": "Kannur",
    "seo": { "metaTitle": "Dental Clinic in Kannur | Elite Dental Studio", "metaDescription": "Visit Elite Dental Studio in Talap, Kannur for specialist-led dental care, modern technology and comfortable treatment.", "canonicalUrl": "/locations/kannur", "robots": "index,follow", "ogImage": "/locations-kannur-hero.png" },
    "contact": { "mobile": "+91 96458 74777", "mobileHref": "+919645874777", "telephone": null, "email": "elitedentalstudioreception@gmail.com", "addressLines": ["Nyma Tower, opposite Koyili Hospital", "Talap, Kannur, Kerala"], "mapUrl": "https://maps.google.com/", "mapEmbedUrl": "https://www.google.com/maps?q=Talap%20Kannur&output=embed" },
    "workingHours": [{ "days": "Mon to Sat", "time": "09:30 am to 8:00 pm" }, { "days": "Sunday", "time": "09:00 am to 7:00 pm" }],
    "sections": [
      { "type": "hero", "sortOrder": 1, "isEnabled": true, "content": { "slides": [{ "image": { "url": "/locations-kannur-hero.png", "alt": "Elite Dental Studio Kannur treatment room" }, "sortOrder": 1 }] } },
      { "type": "introduction", "sortOrder": 2, "isEnabled": true, "content": { "title": "Get the Trusted Dental Care in Kannur with Elite Dental Studio", "paragraphs": ["Elite Dental Studio at Talap, Kannur is a multi-speciality dental clinic opposite Koyili Hospital, Nyma Tower. We offer specialist-led dental care for Kannur patients, covering everything from root canal treatment and dental implants to Invisalign, clear aligners, pediatric dentistry and smile designing.", "Every treatment is planned after a proper check-up, clear diagnosis and an honest conversation about your options. We are the Famdent Clinic of the Year 2026, and we have treated over 1,00,000 patients across our clinics since 2020."], "images": [{ "url": "/office/calicut-04.webp", "alt": "Elite Dental Studio Kannur reception" }, { "url": "/office/calicut-05.webp", "alt": "Kannur dental clinic interior" }], "cta": { "label": "Book Your Appointment", "url": "#appointment" } } },
      { "type": "benefits", "sortOrder": 3, "isEnabled": true, "content": { "title": "Why Choose Us?", "items": [{ "icon": "multi-speciality", "title": "Expert Multi-Speciality", "text": "Dental Team" }, { "icon": "services", "title": "10+ Dental Services", "text": "Under One Roof" }, { "icon": "technology", "title": "In-House Modern", "text": "Dental Technology" }, { "icon": "comfort", "title": "Comfort-Focused Care", "text": "for Every Age" }] } },
      { "type": "services", "sortOrder": 4, "isEnabled": true, "content": { "title": "Comprehensive dental care tailored services for every smile", "description": "Elite Dental Studio offers a full spectrum of dental procedures to help you explore what's best for your smile.", "source": "servicesApi" } },
      { "type": "doctors", "sortOrder": 5, "isEnabled": true, "content": { "title": "Our Doctors", "clinicSlug": "kannur", "source": "doctorsApi" } },
      { "type": "travel", "sortOrder": 6, "isEnabled": true, "content": { "eyebrow": "How to reach", "title": "Elite Dental Studio in Kannur?", "description": "Located at Nyma Tower, opposite Koyili Hospital in Talap, Kannur. The clinic is accessible from Payyambalam, Pallikkunnu, South Bazar, Thana and surrounding neighbourhoods.", "items": [{ "icon": "auto", "title": "Nearest Auto Stand", "text": "Auto rickshaws and taxis are readily available near Koyili Hospital." }, { "icon": "bus", "title": "Nearest Bus Stop", "text": "Koyili Hospital bus stop is a short walk from the clinic." }, { "icon": "landmark", "title": "Nearest Landmark", "text": "Opposite Koyili Hospital, inside Nyma Tower at Talap, Kannur." }] } },
      { "type": "faq", "sortOrder": 7, "isEnabled": true, "content": { "eyebrow": "FAQs", "title": "Everything you need to know about dental care", "description": "Find quick answers to common questions about our dental services, appointments and patient care in our Kannur clinic.", "items": [{ "id": "faq_kannur_001", "question": "What services do you offer?", "answer": "We offer specialist-led dentistry including implants, braces, aligners, root canal care, paediatric dentistry, laser dentistry and cosmetic treatments.", "sortOrder": 1 }, { "id": "faq_kannur_002", "question": "How often should I visit the dentist?", "answer": "Most patients benefit from a dental check-up every six months. Your dentist may recommend a different schedule based on your oral health.", "sortOrder": 2 }, { "id": "faq_kannur_003", "question": "Do you offer emergency dental care?", "answer": "Yes. Call our care team and we will guide you to the earliest suitable appointment.", "sortOrder": 3 }] } },
      { "type": "appointment", "sortOrder": 8, "isEnabled": true, "content": { "eyebrow": "Book your appointment", "title": "Schedule Your Dental Visit Online at Elite Dental Studio", "description": "Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your Kannur appointment.", "formId": "appointment_kannur" } }
    ],
    "status": "published"
  }
}
```

Important: the current Kannur page contains a Calicut address/map in one hardcoded block. Backend must return the actual clinic selected by `{slug}` in `contact`; frontend must not reuse another location's address.

# 9. Smile Gallery API

## `GET /api/v1/smile-gallery`

Query parameters: `location` (location slug), `treatment` (category slug), `page`, `limit`.

```json
{
  "success": true,
  "message": "Smile gallery fetched successfully",
  "data": {
    "seo": { "metaTitle": "Dental Cases & Smile Gallery | Elite Dental Studio", "metaDescription": "View a curated selection of dental treatment results from Elite Dental Studio.", "canonicalUrl": "/gallery/cases", "robots": "index,follow", "ogImage": "/about/about-hero.png" },
    "hero": { "eyebrow": "Real care · Real results", "title": "Every smile", "accent": "has a story.", "description": "Explore real transformations shaped by precise planning, modern dentistry and care personal to every patient.", "slides": [{ "image": { "url": "/about/about-hero.png", "alt": "Elite Dental Studio smile gallery" }, "sortOrder": 1 }] },
    "archive": { "eyebrow": "The case archive", "title": "Details worth seeing.", "description": "Open any frame for a distraction-free, full-screen look." },
    "filters": {
      "locations": [{ "name": "Calicut", "slug": "calicut" }, { "name": "Kochi", "slug": "kochi" }, { "name": "Kannur", "slug": "kannur" }],
      "treatments": [{ "name": "Smile Design", "slug": "smile-design" }, { "name": "Restorative Care", "slug": "restorative-care" }, { "name": "Advanced Dentistry", "slug": "advanced-dentistry" }]
    },
    "items": [
      { "id": "case_001", "slug": "smile-transformation-01", "title": "Smile transformation 01", "category": { "name": "Smile Design", "slug": "smile-design" }, "location": { "name": "Calicut", "slug": "calicut" }, "beforeImage": { "url": "/cases/case-01.webp", "alt": "Smile transformation 01 before" }, "afterImage": { "url": "/cases/case-01.webp", "alt": "Smile transformation 01 after" }, "combinedImage": { "url": "/cases/case-01.webp", "alt": "Smile transformation 01 before and after" }, "sortOrder": 1 },
      { "id": "case_002", "slug": "smile-transformation-02", "title": "Smile transformation 02", "category": { "name": "Restorative Care", "slug": "restorative-care" }, "location": { "name": "Calicut", "slug": "calicut" }, "beforeImage": { "url": "/cases/case-02.webp", "alt": "Smile transformation 02 before" }, "afterImage": { "url": "/cases/case-02.webp", "alt": "Smile transformation 02 after" }, "combinedImage": { "url": "/cases/case-02.webp", "alt": "Smile transformation 02 before and after" }, "sortOrder": 2 },
      { "id": "case_003", "slug": "smile-transformation-03", "title": "Smile transformation 03", "category": { "name": "Advanced Dentistry", "slug": "advanced-dentistry" }, "location": { "name": "Kochi", "slug": "kochi" }, "beforeImage": { "url": "/cases/case-03.webp", "alt": "Smile transformation 03 before" }, "afterImage": { "url": "/cases/case-03.webp", "alt": "Smile transformation 03 after" }, "combinedImage": { "url": "/cases/case-03.webp", "alt": "Smile transformation 03 before and after" }, "sortOrder": 3 }
    ],
    "disclaimer": { "eyebrow": "Your smile, thoughtfully planned", "title": "Ready to discuss what is possible for you?", "description": "Treatment results vary for every patient. Images are shown for educational reference; your dentist will recommend a personalised plan after clinical assessment.", "cta": { "label": "Book a consultation", "url": "/contact" } },
    "pagination": { "currentPage": 1, "perPage": 12, "totalItems": 12, "totalPages": 1, "hasNextPage": false, "hasPreviousPage": false }
  }
}
```

For a vertically combined before/after file, populate `combinedImage`; `beforeImage` and `afterImage` may temporarily point to the same file. For separate files, return distinct URLs and the frontend will retain the same slider design.

---

# 10. Careers APIs

## `GET /api/v1/careers`

Returns the Careers page content, application-form options and currently available jobs. Optional query parameters: `department`, `clinic`, `employmentType`, `page`, `limit`.

```json
{
  "success": true,
  "message": "Careers fetched successfully",
  "data": {
    "seo": {
      "metaTitle": "Careers | Elite Dental Studio",
      "metaDescription": "Explore dental, patient care and clinic support career opportunities at Elite Dental Studio.",
      "canonicalUrl": "/careers",
      "robots": "index,follow",
      "ogImage": "/safety/clinic-safety-team.png"
    },
    "hero": {
      "eyebrow": "Careers at Elite",
      "title": "Build your career",
      "accent": "around better care.",
      "description": "Join a multidisciplinary dental team where skill, empathy and continuous learning shape every patient experience.",
      "slides": [
        {
          "image": {
            "url": "/safety/clinic-safety-team.png",
            "alt": "Dental professionals at Elite Dental Studio"
          },
          "sortOrder": 1
        }
      ]
    },
    "introduction": {
      "eyebrow": "Life at Elite",
      "title": "Good people make exceptional care possible.",
      "paragraphs": [
        "We are a growing team of clinicians and care professionals united by high standards, thoughtful service and respect for every patient.",
        "Across our clinics, you will find modern technology, collaborative specialists and opportunities to keep learning while doing meaningful work."
      ]
    },
    "jobsSection": {
      "eyebrow": "Opportunities",
      "title": "Find where you fit."
    },
    "filters": {
      "departments": [
        { "name": "Clinical", "slug": "clinical" },
        { "name": "Patient Care", "slug": "patient-care" },
        { "name": "Operations", "slug": "operations" }
      ],
      "employmentTypes": ["Full Time", "Part Time", "Contract"],
      "clinics": [
        { "name": "Calicut", "slug": "calicut" },
        { "name": "Kochi", "slug": "kochi" },
        { "name": "Kannur", "slug": "kannur" },
        { "name": "Coimbatore", "slug": "coimbatore" }
      ]
    },
    "items": [
      {
        "id": "job_001",
        "slug": "dentists-and-specialists",
        "title": "Dentists & specialists",
        "department": { "name": "Clinical", "slug": "clinical" },
        "shortDescription": "Work with experienced teams, modern diagnostics and specialist-led treatment planning.",
        "employmentType": "Full Time",
        "clinics": [
          { "name": "Calicut", "slug": "calicut" },
          { "name": "Kochi", "slug": "kochi" },
          { "name": "Kannur", "slug": "kannur" }
        ],
        "experience": "As per position",
        "vacancies": null,
        "applyUrl": "/careers#apply",
        "sortOrder": 1,
        "status": "open",
        "publishedAt": "2026-08-13T00:00:00+05:30",
        "applicationDeadline": null
      },
      {
        "id": "job_002",
        "slug": "dental-nurses-and-assistants",
        "title": "Dental nurses & assistants",
        "department": { "name": "Patient Care", "slug": "patient-care" },
        "shortDescription": "Help make every procedure organised, comfortable and reassuring for our patients.",
        "employmentType": "Full Time",
        "clinics": [
          { "name": "Calicut", "slug": "calicut" },
          { "name": "Kochi", "slug": "kochi" }
        ],
        "experience": "0–3 years",
        "vacancies": null,
        "applyUrl": "/careers#apply",
        "sortOrder": 2,
        "status": "open",
        "publishedAt": "2026-08-13T00:00:00+05:30",
        "applicationDeadline": null
      },
      {
        "id": "job_003",
        "slug": "front-office-and-coordinators",
        "title": "Front office & coordinators",
        "department": { "name": "Operations", "slug": "operations" },
        "shortDescription": "Create a warm, seamless experience across appointments, visits and follow-up care.",
        "employmentType": "Full Time",
        "clinics": [
          { "name": "Kannur", "slug": "kannur" },
          { "name": "Coimbatore", "slug": "coimbatore" }
        ],
        "experience": "1–3 years",
        "vacancies": null,
        "applyUrl": "/careers#apply",
        "sortOrder": 3,
        "status": "open",
        "publishedAt": "2026-08-13T00:00:00+05:30",
        "applicationDeadline": null
      }
    ],
    "applicationSection": {
      "eyebrow": "Join our team",
      "title": "Your next chapter could start here.",
      "description": "Share a few details and your résumé. We will review your profile for current and upcoming opportunities.",
      "panelEyebrow": "Apply now",
      "panelTitle": "Tell us where you would like to grow.",
      "panelDescription": "Our hiring team reviews every profile carefully and connects when your experience matches a suitable role.",
      "highlights": [
        "Profiles reviewed by our team",
        "Open to clinical and support roles",
        "PDF, DOC and DOCX accepted"
      ],
      "email": "info@elitedentalstudio.co.in",
      "positionOptions": [
        { "label": "Dentist / Specialist", "value": "dentist-specialist" },
        { "label": "Dental Nurse / Assistant", "value": "dental-nurse-assistant" },
        { "label": "Patient Coordinator", "value": "patient-coordinator" },
        { "label": "Front Office / Administration", "value": "front-office-administration" },
        { "label": "Other", "value": "other" }
      ],
      "allowedResumeExtensions": ["pdf", "doc", "docx"],
      "maximumResumeSizeMb": 5,
      "submitButtonLabel": "Submit application"
    },
    "pagination": {
      "currentPage": 1,
      "perPage": 20,
      "totalItems": 3,
      "totalPages": 1,
      "hasNextPage": false,
      "hasPreviousPage": false
    }
  }
}
```

## `GET /api/v1/careers/{slug}`

Use this endpoint if a separate job-detail page is added. `{slug}` must be the slug returned by the Careers listing.

```json
{
  "success": true,
  "message": "Career fetched successfully",
  "data": {
    "id": "job_001",
    "slug": "dentists-and-specialists",
    "title": "Dentists & specialists",
    "department": { "name": "Clinical", "slug": "clinical" },
    "shortDescription": "Work with experienced teams, modern diagnostics and specialist-led treatment planning.",
    "description": [
      "Join our multidisciplinary clinical team and deliver specialist-led treatment using modern diagnostics and carefully planned workflows."
    ],
    "responsibilities": [
      "Examine patients and prepare appropriate treatment plans.",
      "Maintain complete and accurate clinical records.",
      "Work collaboratively with specialists and patient-care teams.",
      "Follow clinic sterilisation and patient-safety protocols."
    ],
    "requirements": [
      "Valid dental qualification and registration.",
      "Strong clinical and patient-communication skills.",
      "Relevant specialist qualification where applicable."
    ],
    "benefits": [
      "Modern clinical infrastructure",
      "Multidisciplinary team environment",
      "Continuous learning opportunities"
    ],
    "employmentType": "Full Time",
    "experience": "As per position",
    "clinics": [
      { "name": "Calicut", "slug": "calicut" },
      { "name": "Kochi", "slug": "kochi" },
      { "name": "Kannur", "slug": "kannur" }
    ],
    "vacancies": null,
    "applicationDeadline": null,
    "seo": {
      "metaTitle": "Dentists & Specialists Careers | Elite Dental Studio",
      "metaDescription": "Apply for dentist and specialist opportunities at Elite Dental Studio.",
      "canonicalUrl": "/careers/dentists-and-specialists",
      "robots": "index,follow"
    },
    "status": "open",
    "publishedAt": "2026-08-13T00:00:00+05:30"
  }
}
```

## `POST /api/v1/career-applications`

Content type must be `multipart/form-data` because the request contains a résumé file. Do not send the résumé as base64 JSON.

Request fields:

| Field | Type | Required | Validation |
|---|---|---:|---|
| `name` | string | Yes | 2–100 characters |
| `phone` | string | Yes | Valid phone, 7–20 characters |
| `email` | string | Yes | Valid email, maximum 150 characters |
| `jobId` | string | No | ID from Careers GET API |
| `jobSlug` | string | No | Slug from Careers GET API |
| `position` | string | Yes | One of the returned `positionOptions[].value` values |
| `clinicSlug` | string | No | One of the returned clinic slugs |
| `message` | string | No | Maximum 2000 characters |
| `resume` | file | Yes | PDF, DOC or DOCX; maximum 5 MB |
| `consent` | boolean | Yes | Must be `true` |

Example multipart request:

```bash
curl --request POST "https://example.com/wp-json/eds/v1/career-applications" \
  --form "name=Rahul Sharma" \
  --form "phone=+919876543210" \
  --form "email=rahul@example.com" \
  --form "jobId=job_001" \
  --form "jobSlug=dentists-and-specialists" \
  --form "position=dentist-specialist" \
  --form "clinicSlug=calicut" \
  --form "message=I would like to apply for this position." \
  --form "consent=true" \
  --form "resume=@resume.pdf"
```

Successful response (`201 Created`):

```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "applicationId": "application_20260813_0001",
    "referenceNumber": "EDS-CAREER-2026-0001",
    "job": {
      "id": "job_001",
      "slug": "dentists-and-specialists",
      "title": "Dentists & specialists"
    },
    "applicant": {
      "name": "Rahul Sharma",
      "email": "rahul@example.com"
    },
    "status": "received",
    "submittedAt": "2026-08-13T12:30:00+05:30"
  }
}
```

Validation response (`422 Unprocessable Entity`):

```json
{
  "success": false,
  "message": "Please correct the highlighted fields",
  "error": {
    "code": "VALIDATION_ERROR",
    "fields": {
      "email": ["Enter a valid email address."],
      "resume": ["Resume must be a PDF, DOC or DOCX file and must not exceed 5 MB."],
      "consent": ["Consent is required."]
    }
  }
}
```

Closed or invalid job response (`409 Conflict`):

```json
{
  "success": false,
  "message": "This position is no longer accepting applications",
  "error": {
    "code": "JOB_NOT_OPEN",
    "details": null
  }
}
```

Duplicate submission response (`409 Conflict`):

```json
{
  "success": false,
  "message": "An application for this position was recently submitted with this email address",
  "error": {
    "code": "DUPLICATE_APPLICATION",
    "details": null
  }
}
```

Backend requirements:

- Validate the actual MIME type and file signature, not only the filename extension.
- Rename uploaded files to a generated safe filename; never trust the original filename as a storage path.
- Store uploaded résumés outside a publicly executable directory and return no public résumé URL.
- Sanitize every text field and rate-limit the POST endpoint.
- Send the applicant acknowledgement and hiring-team notification only after the application is stored successfully.
- Never return filesystem paths, internal WordPress user IDs or uploaded résumé URLs in the public response.
- Recommended application statuses: `received`, `under_review`, `shortlisted`, `rejected`, `hired`.

---

# 11. Backend validation rules

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

# 12. Frontend integration rules

- Listing page calls `GET /blogs` and `GET /blog-categories`; search/category/page values go to query parameters.
- Detail page calls `GET /blogs/{slug}` and renders `content` blocks in returned order.
- Services page calls `GET /services` and renders `items` by `sortOrder`.
- Service detail calls `GET /services/{slug}` and maps each named section directly to its existing component.
- Use `404` when a slug does not exist and keep a loading/error state for runtime fetching.
- Do not keep `repeatedPosts`, slug-specific article JSX, `isLaser`, or content-generating `name.replace(...)` after API integration.
- If static generation remains enabled, use ISR and a non-blocking fallback so a newly published slug works without a frontend redeploy.
- Doctors page calls `GET /doctors`; every profile link must use the returned `slug` or `profileUrl`.
- Doctor detail calls `GET /doctors/{slug}` and must not render Dr. Amal for every slug.
- Dental office renders its ordered `sections[]`; gallery filters use `locationSlug`.
- Location detail calls `GET /locations/{slug}` and uses that response's contact, map, doctors and appointment data.
- Smile Gallery sends location/treatment filters to `GET /smile-gallery` and renders the returned cases in `sortOrder`.
- Careers page calls `GET /careers`; job cards, filters and position options must come from its arrays.
- Careers form submits `multipart/form-data` to `POST /career-applications` and displays field errors returned in `error.fields`.
- Disable the careers submit button while the request is running; show success only after receiving HTTP `201`.
