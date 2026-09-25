# Redirect verification

Update: Location URL direction was subsequently reversed at the user’s request: `/locations/{city}` now redirects to `/{city}` for Kochi, Coimbatore, Calicut and Kannur. Earlier tables below record the previous test. New local checks passed for all 16 location variants, with query strings preserved and no loops. Navigation links, sitemap and location structured data now use short paths.
Source: https://docs.google.com/spreadsheets/d/18JbNPvGSGPnRwGaqjuQTw8lAvUZJpdMThIm3hjgZ0tw/edit?gid=2027428421#gid=2027428421

Only complete pairs were implemented. Source sheet was not modified. Live status was checked before editing. Redirects are permanent (308); path mappings preserve query parameters and match both trailing-slash variants. The homepage host rule applies only to elitedentalstudio.co.in, not localhost, staging, or www.

## Preflight results

| Old URL | Destination | Old final status | Destination status |
|---|---|---|---|
| https://elitedentalstudio.co.in/kochi/ | https://elitedentalstudio.co.in/locations/kochi | 404 | 200 |
| https://elitedentalstudio.co.in/coimbatore/ | https://elitedentalstudio.co.in/locations/coimbatore | 404 | 200 |
| https://elitedentalstudio.co.in/calicut/ | https://elitedentalstudio.co.in/locations/calicut | 404 | 200 |
| https://elitedentalstudio.co.in/kannur/ | https://elitedentalstudio.co.in/locations/kannur | 404 | 200 |
| https://elitedentalstudio.co.in/service/laser-dentistry | https://elitedentalstudio.co.in/services/laser-dentistry | 404 | 200 |
| https://elitedentalstudio.co.in/service/clear-aligners-treatment | https://elitedentalstudio.co.in/services/clear-aligners | 404 | 200 |
| https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery/ | https://elitedentalstudio.co.in/services/maxillofacial-orthognathic-surgery | 404 | 200 |
| https://elitedentalstudio.co.in/service/invisalign-treatment/ | https://elitedentalstudio.co.in/services/invisible-aligners | 404 | 200 |
| https://elitedentalstudio.co.in/service/pediatric-dentistry/ | https://elitedentalstudio.co.in/services/pediatric-dentistry | 404 | 200 |
| https://elitedentalstudio.co.in/service/oral-medicine-and-radiology/ | https://elitedentalstudio.co.in/services/oral-medicine-radiology | 404 | 200 |
| https://elitedentalstudio.co.in/service/prosthodontics/ | https://elitedentalstudio.co.in/services/prosthodontics | 404 | 200 |
| https://elitedentalstudio.co.in/service/restorative-dentistry/ | https://elitedentalstudio.co.in/services/restorative-dentistry | 404 | 200 |
| https://elitedentalstudio.co.in/service/endodontics/ | https://elitedentalstudio.co.in/services/endodontics | 404 | 200 |
| https://elitedentalstudio.co.in/service/orthodontics/ | https://elitedentalstudio.co.in/services/orthodontics | 404 | 200 |
| https://elitedentalstudio.co.in/service/cosmetic-treatments/ | https://elitedentalstudio.co.in/services/cosmetic-treatments | 404 | 200 |
| https://elitedentalstudio.co.in/service/dental-implant/ | https://elitedentalstudio.co.in/services/dental-implant | 404 | 200 |
| https://elitedentalstudio.co.in/directors/dr-fathima-nifla/ | https://elitedentalstudio.co.in/doctors/dr-fathima-nifla-cp | 404 | 200 |
| https://elitedentalstudio.co.in/directors/dr-amal-sidharth/ | https://elitedentalstudio.co.in/doctors/dr-amal | 404 | 200 |
| https://elitedentalstudio.co.in/directors/dr-jafar-hamza/ | https://elitedentalstudio.co.in/doctors/dr-jafar-vazhappully | 404 | 200 |
| https://elitedentalstudio.co.in/about-us | https://elitedentalstudio.co.in/about | 404 | 200 |
| https://elitedentalstudio.co.in/gallery/best-dental-care-hospital-tour/ | https://elitedentalstudio.co.in/our-dental-office | 200 | 200 |
| https://elitedentalstudio.co.in/ | https://www.elitedentalstudio.co.in/ | 200 | 200 |

## Pending destinations

- https://elitedentalstudio.co.in/best-dentist-in-coimbatore/
- https://elitedentalstudio.co.in/dental-hospital-in-coimbatore/
- https://elitedentalstudio.co.in/dental-clinic-in-rs-puram/
- https://elitedentalstudio.co.in/service/periodontics/
- https://elitedentalstudio.co.in/directors/jaseem-ammatikas/
- https://elitedentalstudio.co.in/service/dentist-in-calicut/
- https://elitedentalstudio.co.in/service/dental-hospital-in-kochi/
- https://elitedentalstudio.co.in/service/dental-hospital-in-calicut/

Destination-only row `/services/gum-treatement` was not treated as an implied mapping. Doctor-order and other notes in the sheet were outside this redirect task.

## Local verification

43/43 HTTP checks passed: 21 mappings × 2 slash variants, plus the production-host homepage redirect. All checks included a query parameter. TypeScript and targeted ESLint passed. Changes have not been deployed.

Production build could not complete: Turbopack CSS worker failed to bind a port (`Operation not permitted`), including the retry outside the default sandbox.
