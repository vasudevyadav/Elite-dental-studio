# Production redirect test

Update: Location URL direction was subsequently reversed at the user’s request: `/locations/{city}` now redirects to `/{city}` for Kochi, Coimbatore, Calicut and Kannur. Earlier tables below record the previous test. New local checks passed for all 16 location variants, with query strings preserved and no loops. Navigation links, sitemap and location structured data now use short paths.
Domain: https://elitedentalstudio.co.in

43 checks: 40 old-path requests ended in 404; 2 hospital-tour variants reached the correct destination but dropped the query string (slash variant also took an extra hop); homepage did not redirect to www. No checks passed the full expected behavior.

| Request | Initial status | Redirect location | Final status |
|---|---|---|---|
| https://elitedentalstudio.co.in/kochi?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/kochi/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/kochi?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/coimbatore?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/coimbatore/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/coimbatore?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/calicut?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/calicut/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/calicut?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/kannur?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/kannur/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/kannur?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/laser-dentistry?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/laser-dentistry/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/laser-dentistry?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/clear-aligners-treatment?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/clear-aligners-treatment/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/clear-aligners-treatment?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/invisalign-treatment?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/invisalign-treatment/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/invisalign-treatment?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/pediatric-dentistry?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/pediatric-dentistry/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/pediatric-dentistry?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/oral-medicine-and-radiology?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/oral-medicine-and-radiology/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/oral-medicine-and-radiology?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/prosthodontics?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/prosthodontics/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/prosthodontics?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/restorative-dentistry?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/restorative-dentistry/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/restorative-dentistry?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/endodontics?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/endodontics/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/endodontics?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/orthodontics?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/orthodontics/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/orthodontics?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/cosmetic-treatments?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/cosmetic-treatments/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/cosmetic-treatments?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/service/dental-implant?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/service/dental-implant/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/service/dental-implant?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/directors/dr-fathima-nifla?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/directors/dr-fathima-nifla/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/directors/dr-fathima-nifla?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/directors/dr-amal-sidharth?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/directors/dr-amal-sidharth/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/directors/dr-amal-sidharth?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/directors/dr-jafar-hamza?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/directors/dr-jafar-hamza/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/directors/dr-jafar-hamza?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/about-us?utm_source=redirect-check | 404 | None | 404 |
| https://elitedentalstudio.co.in/about-us/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/about-us?utm_source=redirect-check | 404 |
| https://elitedentalstudio.co.in/gallery/best-dental-care-hospital-tour?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/our-dental-office | 200 |
| https://elitedentalstudio.co.in/gallery/best-dental-care-hospital-tour/?utm_source=redirect-check | 308 | https://elitedentalstudio.co.in/gallery/best-dental-care-hospital-tour?utm_source=redirect-check | 200 |
| https://elitedentalstudio.co.in/?utm_source=redirect-check | 200 | None | 200 |
