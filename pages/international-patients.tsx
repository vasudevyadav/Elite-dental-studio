import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SitePage from "@/components/SitePage";

const MailIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z" />
    <path d="M8.3 8.1c.7 3.4 2.4 5.1 5.8 5.8l1.2-1.5 2 1c-.4 1.8-1.6 2.8-3.3 2.5-4.1-.8-6.8-3.5-7.6-7.6C6.1 6.6 7.1 5.4 8.9 5l1 2-1.6 1.1Z" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.2 2c-4.3-1.8-7-4.5-8.8-8.8L9 8 7 3Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const UploadIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M12 16V4m0 0L7 9m5-5 5 5M5 15v4h14v-4" />
  </svg>
);

const advantages = [
  "Indicative treatment plan and cost estimate before you travel",
  "No-cost EMI and GCC insurance billing on eligible treatments",
  "Travel desk support around treatment and healing dates",
  "English-speaking staff with translator support",
  "Choice of clinics in Calicut, Kochi, Kannur and Coimbatore",
  "Digital X-ray diagnosis from your first visit",
  "100,000+ patients managed",
  "Multi-specialist dental team under one network",
];

const treatmentGroups = [
  {
    title: "Restorative & Surgical",
    icon: "✦",
    image: "/international/treatments/restorative-surgical.png",
    items: [
      "Dental Implants",
      "Root Canal Treatment",
      "Dental Crowns",
      "Dental Bridges",
      "Dentures",
      "Full Mouth Rehabilitation",
      "Restorative Dentistry",
      "Wisdom Tooth Removal",
      "Oral & Maxillofacial Surgery",
    ],
  },
  {
    title: "Cosmetic & Smile Design",
    icon: "◇",
    image: "/international/treatments/cosmetic-smile.png",
    items: ["Cosmetic Dentistry & Smile Designing", "Teeth Whitening", "Dental Veneers"],
  },
  {
    title: "Orthodontics & Aligners",
    icon: "◎",
    image: "/international/treatments/aligners.png",
    items: ["Invisalign Treatment", "Clear Aligners", "Orthodontics & Braces"],
  },
  {
    title: "Specialist & Family Care",
    icon: "+",
    image: "/international/treatments/family-care.png",
    items: [
      "Gum Treatment & Periodontics",
      "Prosthodontics",
      "Pediatric Dentistry",
      "Laser Dentistry",
      "Oral Medicine",
      "Radiology",
    ],
  },
];

const bookingSteps = [
  [
    "Share your records",
    "Email your dental concern, symptoms, X-rays and previous dentist notes, or send them on WhatsApp.",
  ],
  [
    "Receive your plan",
    "A patient coordinator will share an indicative treatment plan and upfront cost estimate.",
  ],
  [
    "Plan your travel",
    "Book around treatment and healing time. Our travel desk can help after your plan is confirmed.",
  ],
  [
    "Arrive in Kerala",
    "We can arrange airport or hotel pickup, followed by an in-clinic evaluation to confirm the plan.",
  ],
  [
    "Leave with follow-up",
    "Before departure, receive clear aftercare instructions and a follow-up plan for home.",
  ],
];

const clinics = [
  {
    city: "Calicut",
    address: "Eranhipalam, opposite Swapna Nagari, Mini Bypass Road",
    phone: "+91 9745 072 555",
    href: "/contact#locations",
    airport: "Calicut International Airport",
    image: "/office/calicut-08.webp",
  },
  {
    city: "Kochi",
    address: "Panampilly Nagar, near Manorama Junction, Main Avenue Road",
    phone: "+91 9567 124 888",
    href: "/contact#locations",
    airport: "Cochin International Airport",
    image: "/office/kochi-03.webp",
  },
  {
    city: "Kannur",
    address: "Nyma Tower, Talap, opposite Koyili Hospital",
    phone: "+91 96458 74777",
    href: "/contact#locations",
    airport: "Kannur International Airport",
    image: "/office/609f5926-bd3d-416d-86d6-47f165877893.webp",
  },
  {
    city: "Coimbatore",
    address: "First Floor, Alankar Building, DB Road, R.S. Puram",
    phone: "+91 9633 694 999",
    href: "/contact#locations",
    airport: "Coimbatore International Airport",
    image: "/office/5bbea59a-c621-473f-8a9d-c4ff63269196.webp",
  },
];

const faqs = [
  [
    "Can I pay by EMI or insurance?",
    "Yes. No-cost EMI and GCC country insurance billing apply on eligible treatments. Confirm the applicable terms with your patient coordinator when you book dental tourism in Kerala.",
  ],
  [
    "Do you help with travel and language support?",
    "Our travel desk can help plan your visit once your treatment plan is confirmed and can arrange airport or hotel pickup on arrival. Our staff speak English, with translator support available for other languages.",
  ],
  [
    "What should I bring or send before I travel?",
    "Send your existing X-rays, dental records and previous dentist notes with your first email. Bring physical or digital copies with you as well.",
  ],
  [
    "Can I get braces during a dental tourism visit?",
    "Braces require adjustment visits every few weeks over several months, so one visit is not enough. Ask whether Invisalign, clear aligners or a phased plan across repeat visits is better for your schedule.",
  ],
];

export default function InternationalPatientsPage() {
  return (
    <SitePage
      title="Dental Tourism in Kerala | Elite Dental Studio"
      description="Plan dental treatment in Kerala with Elite Dental Studio clinics in Calicut, Kochi and Kannur. Get an indicative treatment plan before you travel."
    >
      <section className="relative isolate overflow-hidden bg-[#083f43] text-white">
        <Image
          src="/international/dental-tourism-hero-model.png"
          alt="International dental tourism patient at Elite Dental Studio"
          fill
          priority
          className="-z-20 object-cover object-[68%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,42,46,.98)_0%,rgba(4,53,57,.91)_43%,rgba(4,53,57,.35)_72%,rgba(4,53,57,.08)_100%)] max-sm:bg-[linear-gradient(90deg,rgba(3,42,46,.98)_0%,rgba(4,53,57,.88)_68%,rgba(4,53,57,.48)_100%)]" />
        <div className="pointer-events-none absolute top-10 -left-32 -z-10 h-96 w-96 rounded-full bg-[#25bfae]/15 blur-3xl" />
        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:min-h-[690px] sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-[720px]">
            <p className="text-xs font-bold tracking-[.22em] text-[#47d9cb] uppercase sm:text-sm">
              International patient help desk
            </p>
            <h1 className="mt-2.5 text-[38px] leading-[1.08] font-bold tracking-[-.045em] lg:text-5xl">
              Dental Tourism in Kerala
            </h1>
            <h2 className="mt-3 text-xl font-medium text-[#66e0d5] sm:text-2xl">
              Book Treatment With Elite Dental Studio
            </h2>
            <p className="mt-6 max-w-[650px] text-base leading-8 text-white/85 sm:text-lg">
              Schedule dental treatment across Calicut, Kochi, Kannur and Coimbatore. Receive a
              complete indicative treatment plan before you travel, with dedicated support for NRI
              and GCC patients.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
                Upfront cost estimate
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
                GCC insurance support
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
                Travel desk assistance
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#international-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25bfae] px-7 py-3.5 text-center text-sm font-bold transition hover:bg-[#1ba99d]"
              >
                <MailIcon /> Send treatment enquiry
              </a>
              <a
                href="https://wa.me/919048611911"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-sm font-bold backdrop-blur transition hover:bg-white hover:text-[#174e53]"
              >
                <WhatsAppIcon /> Message on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex max-w-[600px] items-center gap-4 rounded-2xl border border-white/15 bg-[#073b3f]/65 p-4 backdrop-blur-md sm:p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25bfae]">
                <MailIcon />
              </span>
              <div className="min-w-0">
                <small className="block text-[10px] font-bold tracking-[.14em] text-white/55 uppercase">
                  International patient coordination
                </small>
                <a
                  className="mt-1 block text-sm font-semibold break-all text-[#68e1d6] sm:text-base"
                  href="mailto:elitedentalstudioreception@gmail.com"
                >
                  elitedentalstudioreception@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#07383c]/75 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
            {[
              ["100K+", "Patients managed"],
              ["4", "Clinic locations"],
              ["Multi-specialist", "Dental team"],
              ["NRI & GCC", "Patient support"],
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-5 text-center">
                <strong className="block text-lg text-[#59dfd3] sm:text-xl">{value}</strong>
                <span className="mt-1 block text-[10px] tracking-[.12em] text-white/55 uppercase sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-12">
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] sm:min-h-[480px]">
            <Image
              src="/office/calicut-08.webp"
              alt="Elite Dental Studio patient care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute right-5 bottom-5 left-5 rounded-2xl bg-[#174e53]/95 p-5 text-white backdrop-blur">
              <strong className="text-2xl text-[#4bd8cb]">4 clinic locations</strong>
              <p className="mt-1 text-sm text-white/75">
                Conveniently connected to international airports
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Why Kerala?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Connected, trusted and easy to plan.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#617274]">
              Kerala has an established dental care network across multiple cities, with
              international airports in Kochi, Kozhikode and Kannur connecting directly to several
              GCC countries.
            </p>
            <p className="mt-4 text-base leading-8 text-[#617274]">
              Strong connectivity makes it practical for NRI and GCC patients to plan dental
              treatment around a Kerala visit, without a long domestic transfer or adding another
              country to the trip.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f9f7] px-5 py-12 sm:px-8 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Why Elite Dental Studio?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              One coordinated journey, from first message to follow-up.
            </h2>
          </div>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
            {advantages.map((item, index) => (
              <article
                key={item}
                className="group min-w-[78vw] snap-start rounded-2xl border border-[#d8ebe8] bg-white p-5 shadow-[0_10px_30px_rgba(19,93,94,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#9fd8d2] hover:shadow-[0_18px_38px_rgba(19,93,94,.12)] sm:min-w-0"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#daf5f1] text-[#188b82] transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#25bfae] group-hover:text-white">
                  <BenefitIcon index={index} />
                </span>
                <p className="mt-4 text-sm leading-6 font-semibold text-[#355c5f]">{item}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-[#174e53] px-6 py-5 text-sm leading-7 text-white sm:text-base">
            Specialists across endodontics, prosthodontics, orthodontics, periodontics, pediatric
            dentistry and oral surgery.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:py-12">
        <div className="mx-auto max-w-7xl lg:px-2">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Treatment options
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl lg:mb-16">
              Dental treatment you can book in Kerala
            </h2>
          </div>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {treatmentGroups.map((group) => (
              <article
                key={group.title}
                className="group min-w-[86vw] snap-start overflow-hidden rounded-[22px] border border-[#d9eae8] bg-[#fbfefd] shadow-[0_12px_35px_rgba(20,84,87,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(20,84,87,.13)] sm:min-w-[58vw] lg:min-w-0"
              >
                <div className="relative h-[200px] overflow-hidden lg:h-[280px]">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 639px) 86vw, (max-width: 1023px) 58vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(7,60,64,.9)_100%)]" />
                  <span className="absolute top-4 right-4 rounded-full border border-white/25 bg-[#0d5559]/75 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-white uppercase backdrop-blur">
                    {group.items.length} treatments
                  </span>
                  <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2.5 text-white">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#25bfae] text-base font-bold transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
                      {group.icon}
                    </span>
                    <h3 className="text-base font-semibold xl:text-lg">{group.title}</h3>
                  </div>
                </div>
                <ul className="mb-4 grid max-h-[230px] [scrollbar-width:thin] [scrollbar-color:#9fd8d2_transparent] gap-2 overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-1 xl:p-5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-[#536c6e]">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#dff6f2] text-[9px] font-bold text-[#1ba99d]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#174e53] px-5 py-8 text-white sm:px-8 lg:py-14">
        <BookingJourney />
      </section>

      <InternationalEnquiryForm />

      <section className="relative overflow-hidden bg-[#edf8f6] px-5 py-12 sm:px-8 sm:py-16 lg:py-12">
        <div className="pointer-events-none absolute top-24 -right-40 h-96 w-96 rounded-full bg-[#25bfae]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Choose your clinic
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-.04em] text-[#174e53] sm:text-[40px]">
              Four destinations. One trusted standard of care.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#607275]">
              Choose the clinic that fits your flight route, Kerala travel plan and treatment
              schedule.
            </p>
          </div>
          <div className="-mx-5 mt-9 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {clinics.map((clinic, index) => (
              <article
                key={clinic.city}
                className="group relative min-h-[390px] min-w-[88vw] snap-start overflow-hidden rounded-[24px] bg-[#174e53] shadow-[0_18px_50px_rgba(17,70,73,.16)] sm:min-w-[72vw] lg:min-h-[430px] lg:min-w-0 lg:rounded-[28px]"
              >
                <Image
                  src={clinic.image}
                  alt={`Elite Dental Studio ${clinic.city}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,50,54,.05)_10%,rgba(8,50,54,.35)_48%,rgba(8,50,54,.98)_100%)]" />
                <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-[#0c4d51]/75 px-4 py-2 text-[10px] font-bold tracking-[.14em] text-white uppercase backdrop-blur">
                  Location {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-xs font-bold tracking-[.15em] text-[#5ce0d4] uppercase">
                    Elite Dental Studio
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{clinic.city}</h3>
                  <p className="mt-3 max-w-[430px] text-sm leading-6 text-white/75">
                    {clinic.address}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <span>
                      <small className="block text-xs tracking-[.12em] text-white uppercase">
                        Nearest airport
                      </small>
                      <b className="mt-1 block">{clinic.airport}</b>
                    </span>
                    <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
                      <small className="block text-xs tracking-[.12em] text-white uppercase">
                        Call clinic
                      </small>
                      <b className="mt-1 block text-[#63e0d5]">{clinic.phone}</b>
                    </a>
                  </div>
                  <Link
                    href={clinic.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25bfae] px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-[#174e53]"
                  >
                    Explore {clinic.city} clinic <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-sm font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Travel checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Before you book your travel
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#617274]">
              Your coordinator will help align travel dates with treatment and recovery
              requirements.
            </p>
          </div>
          <ul className="-mx-5 flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:block lg:space-y-3 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {[
              "Implants and surgical cases need fixed healing time. Build this into your dates.",
              "Full-mouth rehabilitation and multiple implants often need two visits.",
              "Orthodontics and braces require repeat visits over several months.",
              "Ask your dentist what follow-up care you will need once home.",
              "Send existing X-rays and dentist notes with your first email.",
            ].map((item) => (
              <li
                key={item}
                className="flex min-w-[82vw] snap-start gap-3 rounded-xl bg-[#f2f9f8] p-4 text-sm leading-6 text-[#50696b] sm:min-w-[55vw] lg:min-w-0 lg:text-base"
              >
                <span className="text-lg font-bold text-[#25bfae]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#edf8f6] px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-[#20aa9e] uppercase">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] sm:text-5xl">
              Planning your treatment visit
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map(([question, answer], index) => (
              <details
                key={question}
                open={index === 0}
                className="group rounded-2xl border border-[#d5e8e5] bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-[#174e53] marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e4f7f4] text-xl text-[#188e84] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-[#e2eeee] pt-4 text-sm leading-7 text-[#607275]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[28px] bg-[linear-gradient(135deg,#174e53,#28777a)] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-[#55ded2] uppercase">
              Start with a treatment plan
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold sm:text-4xl">
              Book your dental treatment in Kerala with Elite Dental Studio.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Get your indicative plan before you confirm travel.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#international-enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25bfae] px-6 py-3.5 text-center text-sm font-bold"
            >
              <MailIcon /> Send enquiry
            </a>
            <a
              href="tel:+919745072555"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-center text-sm font-bold"
            >
              <PhoneIcon /> Call nearest clinic
            </a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M5 4h14v16H5z" />
      <path d="M8 8h8M8 12h5M8 16h6" />
    </>,
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h3" />
    </>,
    <>
      <path d="M4 18 18 4M10 4h8v8" />
      <path d="M5 8h4M5 12h2M13 19h6" />
    </>,
    <>
      <path d="M4 7h16v10H4z" />
      <path d="m8 11 2 2 5-5" />
    </>,
    <>
      <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2" />
    </>,
    <>
      <path d="M4 18V6h16v12z" />
      <path d="m7 14 3-3 2 2 3-4 2 2" />
    </>,
    <>
      <path d="M8 11a4 4 0 1 1 8 0v7H8z" />
      <path d="M6 20h12M10 7V4h4v3" />
    </>,
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 20c0-4 2-6 5-6s5 2 5 6M13 15c1-.7 2-1 3-1 3 0 5 2 5 6" />
    </>,
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[index]}
    </svg>
  );
}

function JourneyIcon({ index }: { index: number }) {
  const icons = [
    <UploadIcon key="upload" />,
    <svg
      key="plan"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 3h12v18H6zM9 8h6M9 12h6M9 16h4" />
    </svg>,
    <svg
      key="plane"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m3 11 18-7-7 17-3-7-8-3Z" />
      <path d="m11 14 4-4" />
    </svg>,
    <svg
      key="pin"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>,
    <svg
      key="check"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>,
  ];
  return icons[index];
}

function BookingJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={sectionRef} className="mx-auto max-w-7xl lg:px-12">
      <div className="max-w-3xl">
        <p className="text-xs font-bold tracking-[.2em] text-[#50ddd0] uppercase">
          Simple booking journey
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">
          How to book your dental treatment in Kerala
        </h2>
      </div>
      <div className="relative mt-12">
        <div className="absolute top-0 left-5 h-full w-px bg-white/15 md:top-5 md:right-0 md:left-0 md:h-px md:w-full">
          <span
            className={`block bg-[#25cbbb] transition-[height,width] duration-[3200ms] ease-[cubic-bezier(.22,1,.36,1)] md:h-full ${visible ? "h-full md:w-full" : "h-0 md:w-0"}`}
          />
        </div>
        <div className="relative grid gap-8 md:grid-cols-5 md:gap-6">
          {bookingSteps.map(([title, body], index) => (
            <article
              key={title}
              className={`relative pl-14 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:pt-14 md:pl-0 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              style={{ transitionDelay: `${180 + index * 450}ms` }}
            >
              <span
                className={`absolute top-0 left-0 grid h-10 w-10 place-items-center rounded-full border-4 border-[#174e53] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:top-0 md:left-0 ${visible ? "scale-100 bg-[#25cbbb] text-white" : "scale-90 bg-[#285f63] text-white/50"}`}
                style={{ transitionDelay: `${index * 650}ms` }}
              >
                <JourneyIcon index={index} />
              </span>
              <h3 className="text-base font-semibold text-[#62e0d4]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function InternationalEnquiryForm() {
  const fieldClass =
    "h-10 w-full rounded-[9px] border border-[#c9dfdc] bg-[#f8fcfb] px-3.5 text-[13px] text-[#304f52] outline-none transition placeholder:text-[#899798] focus:border-[#25bfae] focus:bg-white focus:ring-4 focus:ring-[#25bfae]/15";
  return (
    <section id="international-enquiry" className="scroll-mt-8 bg-white px-5 py-8 sm:px-8 lg:py-14">
      <div className="mx-auto grid max-w-[1300px] items-center overflow-hidden rounded-[24px] bg-[#174e53] shadow-[0_20px_55px_rgba(18,75,79,.14)] lg:grid-cols-2">
        <div className="relative overflow-hidden p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute -bottom-32 -left-28 h-64 w-64 rounded-full border-[40px] border-[#25bfae]/10" />
          <p className="text-xs font-bold tracking-[.2em] text-[#55ded2] uppercase">
            International patient help desk
          </p>
          <h2 className="mt-3 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-[38px]">
            Plan your smile journey before you fly.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75">
            Share your records and travel preferences. A dedicated coordinator will help with
            treatment, estimated cost, recovery time and clinic selection before you book.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <strong className="text-lg text-[#55ded2]">24-hour</strong>
              <small className="mt-1 block text-[9px] tracking-[.12em] text-white/50 uppercase">
                Response goal
              </small>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <strong className="text-lg text-[#55ded2]">4 clinics</strong>
              <small className="mt-1 block text-[9px] tracking-[.12em] text-white/50 uppercase">
                Flexible locations
              </small>
            </div>
          </div>
          <div className="mt-6 space-y-2.5 text-sm text-white/80">
            {[
              "X-rays and PDF records accepted",
              "Travel and airport pickup assistance",
              "GCC insurance guidance on eligible care",
            ].map((item) => (
              <p key={item} className="flex gap-2.5">
                <span className="text-[#55ded2]">✓</span>
                {item}
              </p>
            ))}
          </div>
          <a
            href="mailto:info@elitedentalstudio.co.in"
            className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#62e0d4]"
          >
            <MailIcon /> info@elitedentalstudio.co.in
          </a>
        </div>
        <div className="m-2 rounded-[18px] bg-white p-5 sm:m-3 lg:m-4 lg:p-7">
          <h3 className="text-xl font-semibold text-[#174e53] sm:text-2xl">
            Send your treatment enquiry
          </h3>
          <p className="mt-1 text-xs text-[#718184]">Fields marked * are required.</p>
          <form
            className="mt-4 grid gap-3 sm:grid-cols-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              <span className="mb-1.5 block text-xs font-semibold text-[#526568]">Full name *</span>
              <input className={fieldClass} name="name" placeholder="Your full name" required />
            </label>
            <label>
              <span className="mb-1.5 block text-xs font-semibold text-[#526568]">Country *</span>
              <input
                className={fieldClass}
                name="country"
                placeholder="Country of residence"
                required
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs font-semibold text-[#526568]">
                Email address *
              </span>
              <input
                className={fieldClass}
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs font-semibold text-[#526568]">
                WhatsApp / phone *
              </span>
              <input
                className={fieldClass}
                name="phone"
                type="tel"
                placeholder="Include country code"
                required
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-xs font-semibold text-[#526568]">
                Preferred clinic *
              </span>
              <select
                className={`${fieldClass} appearance-none`}
                name="clinic"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select clinic
                </option>
                <option>Calicut</option>
                <option>Kochi</option>
                <option>Kannur</option>
                <option>Coimbatore</option>
                <option>Help me choose</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1 block text-[11px] font-semibold text-[#526568]">
                Dental concern *
              </span>
              <textarea
                className={`${fieldClass} min-h-[76px] resize-y py-2.5`}
                name="message"
                placeholder="Symptoms, treatment history and travel dates"
                required
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1 block text-[11px] font-semibold text-[#526568]">
                Upload X-rays or records
              </span>
              <span className="flex min-h-14 cursor-pointer items-center justify-center gap-2.5 rounded-[9px] border border-dashed border-[#8fc7c1] bg-[#f3faf8] px-4 text-[13px] font-semibold text-[#397176] transition hover:bg-[#e7f6f3]">
                <UploadIcon /> Choose PDF or image
                <input
                  className="sr-only"
                  name="records"
                  type="file"
                  accept=".pdf,image/*"
                  multiple
                />
              </span>
            </label>
            <label className="flex items-start gap-3 text-xs leading-5 text-[#687a7c] sm:col-span-2">
              <input type="checkbox" required className="mt-1 accent-[#25bfae]" />I agree to be
              contacted about my treatment enquiry and travel coordination.
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#25bfae] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#176b70] sm:col-span-2 sm:w-fit"
            >
              Submit treatment enquiry <ArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
