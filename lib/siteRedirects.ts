// Complete old/new URL pairs from the site's Redirection sheet.
// Rows without a destination intentionally remain unmapped.
export const siteRedirects = [
  // /locations/:slug -> /:slug is handled generically in next.config.ts (any slug the API returns).
  {
    source: "/service/clear-aligners-treatment",
    destination: "/service/clear-aligners",
  },
  {
    source: "/service/invisalign-treatment",
    destination: "/service/invisible-aligners",
  },
  {
    source: "/service/oral-medicine-and-radiology",
    destination: "/service/oral-medicine-radiology",
  },
  {
    source: "/service/periodontics",
    destination: "/service/gum-treatement",
  },
  {
    source: "/directors/dr-fathima-nifla",
    destination: "/doctors/dr-fathima-nifla-cp",
  },
  {
    source: "/directors/dr-amal-sidharth",
    destination: "/doctors/dr-amal",
  },
  {
    source: "/directors/dr-jafar-hamza",
    destination: "/doctors/dr-jafar-vazhappully",
  },
  {
    source: "/about-us",
    destination: "/about",
  },
  {
    source: "/gallery/best-dental-care-hospital-tour",
    destination: "/our-dental-office",
  },
];
