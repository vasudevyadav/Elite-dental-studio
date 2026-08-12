import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DoctorsSection from "@/components/DoctorsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SitePage from "@/components/SitePage";

const benefits = [
  ["⌘", "Expert Multi-Speciality", "Dental Team"],
  ["▦", "10+ Dental Services", "Under One Roof"],
  ["✣", "In-House Modern", "Dental Technology"],
  ["♡", "Comfort-Focused Care", "for Every Age"],
];

const travel = [
  [
    "🚐",
    "Nearest Auto Stand",
    "Auto rickshaws and taxis are readily available near Koyili Hospital.",
  ],
  ["🚌", "Nearest Bus Stop", "Koyili Hospital bus stop is a short walk from the clinic."],
  ["☀", "Nearest Landmark", "Opposite Koyili Hospital, inside Nyma Tower at Talap, Kannur."],
];

const faqs = [
  [
    "What services do you offer?",
    "We offer specialist-led dentistry including implants, braces, aligners, root canal care, paediatric dentistry, laser dentistry and cosmetic treatments.",
  ],
  [
    "How often should I visit the dentist?",
    "Most patients benefit from a dental check-up every six months. Your dentist may recommend a different schedule based on your oral health.",
  ],
  [
    "Do you accept insurance?",
    "Our team can help you understand available payment and insurance documentation before treatment begins.",
  ],
  [
    "What can I expect during my first visit?",
    "Your first visit includes a clinical examination, diagnosis and a clear explanation of suitable treatment options.",
  ],
  [
    "Do you offer emergency dental care?",
    "Yes. Call our care team and we will guide you to the earliest suitable appointment.",
  ],
];

function AppointmentForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={compact ? "space-y-3" : "space-y-3"}
      onSubmit={(event) => event.preventDefault()}
    >
      {[
        ["name", "Enter Your Name"],
        ["tel", "Enter Your Mobile No."],
        ["email", "Enter Your Mail"],
        ["text", "DD/MM/YYYY"],
      ].map(([type, placeholder]) => (
        <input
          key={placeholder}
          type={type}
          placeholder={placeholder}
          className={`${compact ? "h-[30px] text-[10px]" : "h-11 text-sm"} w-full rounded border border-[#70aeb0] bg-[#f8fffe] px-4 outline-none focus:border-[#22cdbd]`}
        />
      ))}
      <select
        aria-label="Select clinic"
        defaultValue=""
        className={`${compact ? "h-[30px] text-[10px]" : "h-11 text-sm"} w-full rounded border border-[#70aeb0] bg-[#f8fffe] px-4 text-[#667] outline-none`}
      >
        <option value="">Select Clinic</option>
        <option>Kannur</option>
        <option>Calicut</option>
        <option>Kochi</option>
        <option>Coimbatore</option>
      </select>
      <button
        className={`${compact ? "px-12 py-2 text-[11px]" : "px-10 py-3 text-sm"} mx-auto block rounded bg-[#22cdbd] font-bold text-white hover:bg-[#16b8aa]`}
      >
        Book Now!
      </button>
    </form>
  );
}

function LocationFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-[#effaf8] p-5 sm:rounded-[22px] sm:p-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-[50px] lg:p-[52px]">
        <div>
          <p className="text-xs font-bold tracking-[.16em] text-[#22bdae] uppercase">FAQs</p>
          <h2 className="mt-3 max-w-[300px] text-[24px] leading-[1.25] font-bold text-[#296d72]">
            Everything you need to know about dental care
          </h2>
          <p className="mt-7 max-w-[320px] text-[13px] leading-5 text-[#687879]">
            Find quick answers to common questions about our dental services, appointments and
            patient care in our Kannur clinic.
          </p>
          <a
            href="tel:+919645874777"
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#286f73] shadow-sm lg:mt-14"
          >
            ☎ +91 96458 74777
          </a>
        </div>
        <div className="space-y-[13px]">
          {faqs.map(([question, answer], index) => (
            <article
              key={question}
              className={`overflow-hidden rounded-xl ${open === index ? "bg-[#276368] text-white" : "bg-white text-[#276368]"}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold sm:px-6"
              >
                <span>{question}</span>
                <span>{open === index ? "−" : "+"}</span>
              </button>
              {open === index && (
                <p className="mx-4 border-t border-white/40 py-3 text-xs leading-5 text-white/90 sm:mx-6">
                  {answer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function KannurLocationPage() {
  return (
    <SitePage
      title="Dental Clinic in Kannur | Elite Dental Studio"
      description="Visit Elite Dental Studio in Talap, Kannur for specialist-led dental care, modern technology and comfortable treatment."
      mainClassName="[&_.scroll-reveal]:!translate-y-0 [&_.scroll-reveal]:!opacity-100"
    >
      <div className="[&>section]:h-[380px] sm:[&>section]:h-[500px] lg:[&>section]:h-[clamp(560px,42.51vw,700px)] [&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[linear-gradient(90deg,rgba(4,55,60,.08),rgba(4,55,60,.02)_55%,rgba(4,55,60,.35))]">
        <HeroSection
          slides={[
            {
              img: "/locations-kannur-hero.png",
              alt: "Elite Dental Studio Kannur treatment room",
            },
          ]}
        />
      </div>

      <section className="bg-[#276368] px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:px-12 lg:pt-16 lg:pb-16">
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[15px] bg-[#f5fbfa] p-5 shadow-[0_8px_24px_rgba(0,0,0,.15)] sm:p-8 lg:min-h-[322px] lg:p-12 lg:pr-[370px]">
            <h2 className="text-xl leading-[1.35] font-bold text-[#276368] sm:text-2xl">
              Get the Trusted Dental Care in Kannur with Elite Dental Studio
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#677778] sm:mt-5 sm:leading-7">
              Elite Dental Studio at Talap, Kannur is a multi-speciality dental clinic opposite
              Koyili Hospital, Nyma Tower. We offer specialist-led dental care for Kannur patients,
              covering everything from root canal treatment and dental implants to Invisalign, clear
              aligners, pediatric dentistry and smile designing. Our team covers endodontics,
              prosthodontics, orthodontics, periodontics and laser dentistry, all under one roof at
              our dental clinic in Talap.
            </p>
          </div>
          <div className="relative mx-3 -mt-2 h-[230px] overflow-hidden rounded-[14px] border-4 border-[#f2fbfa] shadow-xl sm:mx-8 sm:-mt-4 sm:h-[320px] sm:border-8 lg:absolute lg:top-[-50px] lg:right-[24px] lg:mx-0 lg:mt-0 lg:h-[334px] lg:w-[340px]">
            <Image
              src="/office/calicut-04.webp"
              alt="Elite Dental Studio Kannur reception"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl items-center gap-6 sm:mt-12 lg:grid-cols-[310px_1fr] lg:gap-7">
          <div className="relative h-[190px] overflow-hidden rounded-2xl sm:h-[260px] lg:h-[220px]">
            <Image
              src="/office/calicut-05.webp"
              alt="Kannur dental clinic interior"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="text-sm text-white/85 sm:text-base">
            <p className="leading-6 sm:leading-7">
              Every treatment is planned after a proper check-up, clear diagnosis and an honest
              conversation about your options. We are the Famdent Clinic of the Year 2026, and we
              have treated over 1,00,000 patients across our clinics since 2020. Our Kannur clinic
              offers free first consultation and free OPG scan, so your diagnosis starts without any
              cost.
            </p>
            <Link
              href="#appointment"
              className="mt-6 inline-flex rounded bg-[#24ccbd] px-6 py-3 text-sm font-bold text-white"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#24cdbd] p-5 sm:rounded-[28px] sm:p-7 lg:p-10">
          <h2 className="text-center text-2xl font-bold text-white">Why Choose Us?</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([icon, title, text], index) => (
              <article
                key={title}
                className={`rounded-xl border border-white/50 p-5 text-center sm:p-6 ${index % 2 ? "bg-[#276368] text-white" : "bg-white text-[#286f73]"}`}
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-1 text-xs opacity-75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-5">
            <h2 className="text-2xl font-bold text-[#073f48] sm:shrink-0 lg:text-[34px]">
              Choose Your <span className="text-[#25cdbd]">Nearest Clinic</span>
            </h2>
            <span className="hidden h-px flex-1 bg-[#2d7378] sm:block" />
          </div>
          <div className="grid gap-0 overflow-hidden rounded-[18px] bg-[#e8f8f5] sm:rounded-[24px] lg:grid-cols-2">
            <div className="min-w-0 p-5 sm:p-7 lg:p-10">
              <div className="grid gap-4 sm:grid-cols-[1fr_170px]">
                <select
                  aria-label="Choose clinic"
                  defaultValue="CALICUT"
                  className="h-12 rounded-full border border-[#d5e2e0] bg-white px-6 text-[#667]"
                >
                  <option value="CALICUT">CALICUT</option>
                  <option>KOCHI</option>
                  <option value="KANNUR">KANNUR</option>
                  <option>COIMBATORE</option>
                </select>
                <a
                  href="https://goo.gl/maps/46qQV1nCHcXRQp3fA"
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-12 place-items-center rounded-full bg-[#276368] font-bold text-white"
                >
                  Find Clinic
                </a>
              </div>
              <div className="mt-8 space-y-4 text-sm text-[#617477] sm:text-base">
                <a className="block" href="tel:+919745072555">
                  ● &nbsp; +91 9745 072 555
                </a>
                <span className="block">☎ &nbsp; 0495 3552 555</span>
                <a className="block break-all" href="mailto:elitedentalstudioreception@gmail.com">
                  ✉ &nbsp; elitedentalstudioreception@gmail.com
                </a>
              </div>
              <div className="my-6 h-px bg-[#86a4a4]" />
              <div className="flex gap-4 text-sm leading-6 font-semibold text-[#566b6d]">
                <span>●</span>
                <p>
                  The Mezzanine Floor Apollo Tower, Opposite Swapna Nagari
                  <br />
                  Mini Bypass Rd, Eranhipalam P.O, Kozhikode, Kerala 673006
                </p>
              </div>
              <a
                href="https://goo.gl/maps/46qQV1nCHcXRQp3fA"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded bg-[#064b52] px-5 py-2 text-xs font-bold text-white"
              >
                GET DIRECTION →
              </a>
            </div>
            <iframe
              title="Elite Dental Studio Kannur map"
              src="https://www.google.com/maps?q=Apollo%20Tower%2C%20Mini%20Bypass%20Road%2C%20Eranhipalam%2C%20Kozhikode%2C%20Kerala%20673006&output=embed"
                className="min-h-[300px] w-full border-0 sm:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <ServicesSection
        compact
        title="Comprehensive dental care tailored services for every smile"
        description="Elite Dental Studio offers a full spectrum of dental procedures to help you explore what's best for your smile."
      />
      <div className="[&_h2]:!text-[24px]">
        <DoctorsSection compact />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#24cdbd] p-5 sm:rounded-[28px] sm:p-8 lg:p-12">
          <p className="text-center text-xs font-bold tracking-[.16em] text-white/80 uppercase">
            How to reach
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
            Elite Dental Studio in Kannur?
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-6 text-[#145f63]">
            Located at Nyma Tower, opposite Koyili Hospital in Talap, Kannur. The clinic is
            accessible from Payyambalam, Pallikkunnu, South Bazar, Thana and surrounding
            neighbourhoods.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {travel.map(([icon, title, text]) => (
              <article
                key={title}
                className="group rounded-xl border-2 border-white bg-white p-5 text-center text-[#286f73] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#276368] hover:bg-[#276368] hover:text-white hover:shadow-xl sm:p-7"
              >
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526f71] transition-colors group-hover:text-white/85">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocationFaq />

      <section id="appointment" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-[#276368] p-5 text-white sm:rounded-[28px] sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-12">
          <div>
            <p className="text-xs font-bold tracking-[.15em] text-[#40ddcf] uppercase">
              Book your appointment
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Schedule Your Dental Visit Online at Elite Dental Studio
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              Ready to take the next step towards a healthier smile? Use our easy online booking
              system to schedule your Kannur appointment.
            </p>
            <div className="mt-7 w-full rounded-xl bg-[#25cdbd] p-5 sm:w-auto">
              <strong>Working Hours</strong>
              <p className="mt-2 text-sm">Mon to Sat &nbsp; 09:30 am to 8:00 pm</p>
              <p className="mt-1 text-sm">Sunday &nbsp; 09:00 am to 7:00 pm</p>
            </div>
            <a
              href="tel:+919645874777"
              className="mt-5 block w-full rounded-xl bg-white px-5 py-4 text-center font-bold text-[#286f73] sm:w-fit"
            >
              ☎ +91 96458 74777
            </a>
          </div>
          <div className="min-w-0 rounded-2xl bg-white p-5 text-[#286f73] sm:p-7">
            <h3 className="mb-6 text-center text-lg font-bold">Book an Appointment</h3>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </SitePage>
  );
}
