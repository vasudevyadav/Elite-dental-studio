/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import DoctorsSection from "@/components/DoctorsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SitePage from "@/components/SitePage";
import { getContent, section, type DynamicSection } from "@/lib/contentApi";
import { submitConsultation } from "@/lib/consultation";
import Recaptcha, { recaptchaEnabled } from "@/components/Recaptcha";
import { absoluteUrl } from "@/lib/siteUrl";

const benefitsFallback = [
  ["⌘", "Expert Multi-Speciality", "Dental Team"],
  ["▦", "10+ Dental Services", "Under One Roof"],
  ["✣", "In-House Modern", "Dental Technology"],
  ["♡", "Comfort-Focused Care", "for Every Age"],
];

const faqFallback = [
  [
    "What services do you offer?",
    "We offer specialist-led dentistry including implants, braces, aligners, root canal care, paediatric dentistry, laser dentistry and cosmetic treatments.",
  ],
  [
    "How often should I visit the dentist?",
    "Most patients benefit from a dental check-up every six months. Your dentist may recommend a different schedule based on your oral health.",
  ],
  [
    "Do you offer emergency dental care?",
    "Yes. Call our care team and we will guide you to the earliest suitable appointment.",
  ],
];

const heroFallbacks: Record<string, string> = {
  calicut: "/office/calicut-04.webp",
  kochi: "/office/kochi-03.webp",
  coimbatore: "/office/1f0186e7-99d0-44d4-a6dd-efb98b394a8e.webp",
  kannur: "/locations-kannur-hero.png",
};

const insetImages: Record<string, [string, string]> = {
  calicut: ["/office/calicut-02.webp", "/office/calicut-06.webp"],
  kochi: ["/office/kochi-02.webp", "/office/kochi-04.webp"],
  coimbatore: [
    "/office/d00b4f41-5e9f-4038-b395-bf7ac3c2dafd.webp",
    "/office/439667b9-ee1f-459f-a1a5-f9f277027a4b.webp",
  ],
  kannur: [
    "/office/5bbea59a-c621-473f-8a9d-c4ff63269196.webp",
    "/office/609f5926-bd3d-416d-86d6-47f165877893.webp",
  ],
};

const introductionFallbacks: Record<string, { title: string; paragraphs: [string, string] }> = {
  calicut: {
    title: "Specialist dental care in Calicut",
    paragraphs: [
      "Elite Dental Studio Calicut brings specialist-led dental care, modern diagnostics and personalised treatment planning together in one convenient Eranhipalam location.",
      "From routine check-ups to advanced restorative, cosmetic and orthodontic care, our team focuses on clear guidance, clinical precision and a comfortable experience for every patient.",
    ],
  },
  kochi: {
    title: "Specialist dental care in Kochi",
    paragraphs: [
      "At Elite Dental Studio Kochi, our specialist team combines modern diagnostics with thoughtful, personalised treatment planning for patients of every age.",
      "Whether you need preventive care, restorative treatment, orthodontics or cosmetic dentistry, we make each visit clear, comfortable and centred on your long-term oral health.",
    ],
  },
  kannur: {
    title: "Specialist dental care in Kannur",
    paragraphs: [
      "Elite Dental Studio Kannur offers a calm, modern setting where patients can access specialist dental care and a treatment plan tailored to their needs.",
      "Our team supports everything from routine family dentistry to advanced treatments, with careful diagnosis and patient comfort at every step.",
    ],
  },
  coimbatore: {
    title: "Specialist dental care in Coimbatore",
    paragraphs: [
      "Elite Dental Studio Coimbatore provides specialist-led dental care with modern technology, clear treatment planning and a patient-first approach.",
      "From preventive visits to restorative, cosmetic and orthodontic treatment, our team is here to help you make confident decisions about your smile.",
    ],
  },
};

const clinicOptions = ["Kannur", "Calicut", "Kochi", "Coimbatore"];

type ClinicDirectoryEntry = {
  name: string;
  slug: string;
  phone: string;
  phoneHref: string;
  address: string[];
  mapUrl: string;
  mapEmbedUrl: string;
};

// mapEmbedUrl is Google's own "Share > Embed a map" code for each clinic,
// so the pin matches the "Find Clinic" / "Get Direction" link exactly
const clinicDirectory: Record<string, ClinicDirectoryEntry> = {
  KANNUR: {
    name: "Kannur",
    slug: "kannur",
    phone: "+91 96458 74777",
    phoneHref: "+919645874777",
    address: ["Nyma Tower, opposite Koyili Hospital", "Talap, Kannur, Kerala 670002"],
    mapUrl: "https://maps.app.goo.gl/rMFp6dRYtyZjyK6S6",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4432.962779623678!2d75.37187589999999!3d11.886919599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d006edbcac7%3A0x939f77ba1b983856!2sElite%20Dental%20Studio%20%7C%20Best%20Dental%20Clinic%20in%20Kannur!5e1!3m2!1sen!2sin!4v1787210506557!5m2!1sen!2sin",
  },
  CALICUT: {
    name: "Calicut",
    slug: "calicut",
    phone: "+91 9745 072 555",
    phoneHref: "+919745072555",
    address: [
      "Mezzanine Floor, Apollo Tower, Mini Bypass Road, Eranhipalam",
      "Kozhikode, Kerala 673006",
    ],
    mapUrl: "https://maps.app.goo.gl/JGvwfZHuw8rvdfkg8",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4442.752168206918!2d75.78890489999999!3d11.270036299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f8bb837948d%3A0xa556c5175bb33fe0!2sElite%20Dental%20Studio%20%7C%20Dental%20Clinic%20in%20Calicut!5e1!3m2!1sen!2sin!4v1787210517873!5m2!1sen!2sin",
  },
  KOCHI: {
    name: "Kochi",
    slug: "kochi",
    phone: "+91 9567 124 888",
    phoneHref: "+919567124888",
    address: [
      "5/981 A, Main Avenue Road, near Manorama Junction",
      "Panampilly Nagar, Kochi, Kerala 682036",
    ],
    mapUrl: "https://maps.app.goo.gl/cPfCY2QTRJQ2NNXbA",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9137712.686598783!2d67.33039185000001!3d9.964243799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e4be116aa5%3A0xcde9dcdaf26b0668!2sElite%20Dental%20Studio!5e1!3m2!1sen!2sus!4v1787642325827!5m2!1sen!2sus",
  },
  COIMBATORE: {
    name: "Coimbatore",
    slug: "coimbatore",
    phone: "+91 9633 694999",
    phoneHref: "+919633694999",
    address: [
      "First Floor, Alankar Building, Diwan Bahadur Road, opposite Tanishq",
      "RS Puram, Coimbatore, Tamil Nadu 641002",
    ],
    mapUrl: "https://maps.app.goo.gl/aLQEArD1RVjUyrEe6",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.736033085853!2d76.9504735!3d11.009234599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591567f75a1f%3A0xa040008e7ebcf16c!2sElite%20Dental%20Studio!5e1!3m2!1sen!2sin!4v1787642373702!5m2!1sen!2sin",
  },
};

function fallbackLocation(slug: string): LocationData | null {
  const city = (["calicut", "kochi", "kannur", "coimbatore"] as const).find(
    (item) => item === slug.toLowerCase(),
  );
  if (!city) return null;

  const clinic = clinicDirectory[city.toUpperCase()];
  return {
    slug: city,
    name: clinic.name,
    seo: {
      metaTitle: `Elite Dental Studio ${clinic.name}`,
      metaDescription: `Specialist-led dental care at Elite Dental Studio ${clinic.name}.`,
    },
    contact: {
      mobile: clinic.phone,
      mobileHref: clinic.phoneHref,
      email: "eliteinfo@gmail.com",
      addressLines: clinic.address,
      mapUrl: clinic.mapUrl,
      mapEmbedUrl: clinic.mapEmbedUrl,
    },
    workingHours: [
      { days: "Monday–Saturday", time: "9:30 AM–9:00 PM" },
      { days: "Sunday", time: "10:00 AM–7:00 PM" },
    ],
    sections: [],
  };
}

function NearestClinicPicker({ defaultClinic }: { defaultClinic: string }) {
  const [selected, setSelected] = useState(
    clinicDirectory[defaultClinic] ? defaultClinic : "KANNUR",
  );
  const clinic = clinicDirectory[selected];

  return (
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
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
                className="h-12 rounded-full border border-[#d5e2e0] bg-white px-6 text-[#667]"
              >
                {clinicOptions.map((option) => (
                  <option key={option} value={option.toUpperCase()}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </select>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="grid min-h-12 place-items-center rounded-full bg-[#276368] font-bold text-white"
              >
                Find Clinic
              </a>
            </div>
            <div className="mt-8 space-y-4 text-sm text-[#617477] sm:text-base">
              <a className="block" href={`tel:${clinic.phoneHref}`}>
                ● &nbsp; {clinic.phone}
              </a>
            </div>
            <div className="my-6 h-px bg-[#86a4a4]" />
            <div className="flex gap-4 text-sm leading-6 font-semibold text-[#566b6d]">
              <span>●</span>
              <p>
                {clinic.address.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded bg-[#064b52] px-5 py-2 text-xs font-bold text-white"
            >
              GET DIRECTION →
            </a>
          </div>
          <iframe
            key={clinic.slug}
            title={`Elite Dental Studio ${clinic.name} map`}
            src={clinic.mapEmbedUrl}
            className="min-h-[300px] w-full border-0 sm:min-h-[380px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

function renderSectionIcon(icon: unknown) {
  if (typeof icon === "string" && icon) return icon;
  if (icon && typeof icon === "object" && "url" in icon && (icon as { url?: string }).url) {
    const image = icon as { url: string; alt?: string };
    return (
      <Image
        src={image.url}
        alt={image.alt || ""}
        width={32}
        height={32}
        className="mx-auto h-8 w-8 object-contain"
      />
    );
  }
  return "✦";
}

function AppointmentForm({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    clinic: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const router = useRouter();

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (recaptchaEnabled() && !captchaToken) {
      setStatus("error");
      setFeedback("Please complete the CAPTCHA.");
      return;
    }
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic.toLowerCase(),
      preferredDate: form.date,
      source: `location-${slug}`,
      captchaToken,
    });
    setFeedback(result.message);
    if (result.success) {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", date: "", clinic: "" });
      router.push("/thank-you");
    } else {
      setStatus("error");
    }
  };

  const inputClass = `${compact ? "h-[30px] text-[10px]" : "h-11 text-sm"} w-full rounded border border-[#70aeb0] bg-[#f8fffe] px-4 outline-none focus:border-[#22cdbd]`;

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={update}
        placeholder="Enter Your Name"
        className={inputClass}
        required
      />
      <input
        name="phone"
        type="tel"
        value={form.phone}
        onChange={update}
        placeholder="Enter Your Mobile No."
        className={inputClass}
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={update}
        placeholder="Enter Your Mail"
        className={inputClass}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={update}
        aria-label="Preferred appointment date"
        className={inputClass}
        required
      />
      <select
        aria-label="Select clinic"
        name="clinic"
        value={form.clinic}
        onChange={update}
        className={`${compact ? "h-[30px] text-[10px]" : "h-11 text-sm"} w-full rounded border border-[#70aeb0] bg-[#f8fffe] px-4 text-[#667] outline-none`}
        required
      >
        <option value="">Select Clinic</option>
        {clinicOptions.map((clinic) => (
          <option key={clinic} value={clinic.toLowerCase()}>
            {clinic}
          </option>
        ))}
      </select>
      <Recaptcha onTokenChange={setCaptchaToken} />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${compact ? "px-12 py-2 text-[11px]" : "px-10 py-3 text-sm"} mx-auto block rounded bg-[#22cdbd] font-bold text-white hover:bg-[#16b8aa] disabled:opacity-60`}
      >
        {status === "submitting" ? "Submitting..." : "Book Now!"}
      </button>
      {feedback && (
        <p
          className={`text-center text-xs font-semibold ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

function LocationFaq({ data, phone }: { data: Record<string, any>; phone: string }) {
  const [open, setOpen] = useState(0);
  const items =
    data.items?.length > 0
      ? data.items
      : faqFallback.map(([question, answer]) => ({ question, answer }));
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[18px] bg-[#effaf8] p-5 sm:rounded-[22px] sm:p-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-[50px] lg:p-[52px]">
        <div>
          <p className="text-xs font-bold tracking-[.16em] text-[#22bdae] uppercase">
            {data.eyebrow || "FAQs"}
          </p>
          <h2 className="mt-3 max-w-[300px] text-[24px] leading-[1.25] font-bold text-[#296d72]">
            {data.title || "Frequently asked questions"}
          </h2>
          {data.description && (
            <p className="mt-7 max-w-[320px] text-[13px] leading-5 text-[#687879]">
              {data.description}
            </p>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#286f73] shadow-sm lg:mt-14"
            >
              ☎ {phone}
            </a>
          )}
        </div>
        <div className="space-y-[13px]">
          {items.map(
            ({ question, answer }: { question: string; answer: string }, index: number) => (
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
            ),
          )}
        </div>
      </div>
    </section>
  );
}

type LocationData = {
  slug: string;
  name: string;
  seo: { metaTitle: string; metaDescription: string };
  contact: {
    mobile: string;
    mobileHref: string;
    telephone?: string | null;
    email: string;
    addressLines: string[];
    mapUrl: string;
    mapEmbedUrl: string;
  };
  workingHours: { days: string; time: string }[];
  sections: DynamicSection[];
};

export default function LocationPage({ data }: { data: LocationData }) {
  const intro = section(data.sections, "introduction") || {};
  const benefitSection = section(data.sections, "benefits") || {};
  const serviceSection = section(data.sections, "services") || {};
  const travelSection = section(data.sections, "travel") || {};
  const faqSection = section(data.sections, "faq") || {};

  const activeBenefits =
    benefitSection.items?.length > 0
      ? benefitSection.items
      : benefitsFallback.map(([icon, title, text]) => ({ icon, title, text }));
  const activeTravel = travelSection.items || [];

  const cityKey =
    (["calicut", "kochi", "coimbatore", "kannur"] as const).find((city) =>
      data.slug.toLowerCase().includes(city),
    ) || "kannur";
  const heroImage = heroFallbacks[cityKey];
  const [inset1, inset2] = insetImages[cityKey];
  const introduction = introductionFallbacks[cityKey];
  const introParagraphs = intro.paragraphs?.filter(Boolean)?.length
    ? intro.paragraphs
    : introduction.paragraphs;

  return (
    <SitePage
      title={data.seo.metaTitle}
      description={data.seo.metaDescription}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: `Elite Dental Studio ${data.name}`,
        url: absoluteUrl(`/locations/${data.slug}`),
        telephone: data.contact.mobile,
        email: data.contact.email,
        hasMap: data.contact.mapUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: data.contact.addressLines.join(", "),
          addressLocality: data.name,
          addressCountry: "IN",
        },
      }}
      mainClassName="[&_.scroll-reveal]:!translate-y-0 [&_.scroll-reveal]:!opacity-100"
    >
      <div className="[&>section]:h-[380px] [&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[linear-gradient(90deg,rgba(4,55,60,.08),rgba(4,55,60,.02)_55%,rgba(4,55,60,.35))] sm:[&>section]:h-[500px] lg:[&>section]:h-[clamp(560px,42.51vw,700px)]">
        <HeroSection
          slides={[
            {
              img: heroImage,
              alt: `Elite Dental Studio ${data.name} treatment room`,
            },
          ]}
        />
      </div>

      <section className="bg-[#276368] px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:px-12 lg:pt-16 lg:pb-16">
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[15px] bg-[#f5fbfa] p-5 shadow-[0_8px_24px_rgba(0,0,0,.15)] sm:p-8 lg:min-h-[322px] lg:p-12 lg:pr-[370px]">
            <h2 className="text-xl leading-[1.35] font-bold text-[#276368] sm:text-2xl">
              {intro.title || introduction.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#677778] sm:mt-5 sm:leading-7">
              {introParagraphs[0]}
            </p>
          </div>
          <div className="relative mx-3 -mt-2 h-[230px] overflow-hidden rounded-[14px] border-4 border-[#f2fbfa] shadow-xl sm:mx-8 sm:-mt-4 sm:h-[320px] sm:border-8 lg:absolute lg:top-[-50px] lg:right-[24px] lg:mx-0 lg:mt-0 lg:h-[334px] lg:w-[340px]">
            <Image
              src={inset1}
              alt={`Elite Dental Studio ${data.name} reception`}
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl items-center gap-6 sm:mt-12 lg:grid-cols-[310px_1fr] lg:gap-7">
          <div className="relative h-[190px] overflow-hidden rounded-2xl sm:h-[260px] lg:h-[220px]">
            <Image
              src={inset2}
              alt={`${data.name} dental clinic interior`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="text-sm text-white/85 sm:text-base">
            <p className="leading-6 sm:leading-7">{introParagraphs[1]}</p>
            <Link
              href="#appointment"
              className="mt-6 inline-flex rounded bg-[#24ccbd] px-6 py-3 text-sm font-bold text-white"
            >
              {intro.cta?.label || "Book Your Appointment"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#24cdbd] p-5 sm:rounded-[28px] sm:p-7 lg:p-10">
          <h2 className="text-center text-2xl font-bold text-white">
            {benefitSection.title || "Why Choose Us?"}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeBenefits.map((item: Record<string, unknown>, index: number) => (
              <article
                key={String(item.title)}
                className={`rounded-xl border border-white/50 p-5 text-center sm:p-6 ${index % 2 ? "bg-[#276368] text-white" : "bg-white text-[#286f73]"}`}
              >
                <div className="text-3xl">{renderSectionIcon(item.icon)}</div>
                <h3 className="mt-3 font-bold">{String(item.title)}</h3>
                <p className="mt-1 text-xs opacity-75">{String(item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NearestClinicPicker
        defaultClinic={
          Object.keys(clinicDirectory).find((key) => data.slug.toUpperCase().includes(key)) ||
          "KANNUR"
        }
      />
      <ServicesSection
        compact
        title={serviceSection.title}
        description={serviceSection.description}
      />
      <div className="[&_h2]:!text-[24px]">
        <DoctorsSection compact clinicSlug={cityKey} />
      </div>

      {activeTravel.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-6xl rounded-[18px] bg-[#24cdbd] p-5 sm:rounded-[28px] sm:p-8 lg:p-12">
            <p className="text-center text-xs font-bold tracking-[.16em] text-white/80 uppercase">
              {travelSection.eyebrow}
            </p>
            <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
              {travelSection.title}
            </h2>
            {travelSection.description && (
              <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-6 text-[#145f63]">
                {travelSection.description}
              </p>
            )}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {activeTravel.map((item: Record<string, unknown>) => (
                <article
                  key={String(item.title)}
                  className="group rounded-xl border-2 border-white bg-white p-5 text-center text-[#286f73] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#276368] hover:bg-[#276368] hover:text-white hover:shadow-xl sm:p-7"
                >
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {renderSectionIcon(item.icon)}
                  </div>
                  <h3 className="mt-3 font-bold">{String(item.title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526f71] transition-colors group-hover:text-white/85">
                    {String(item.text)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <LocationFaq data={faqSection} phone={data.contact.mobile} />

      <section
        id="appointment"
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
      >
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
              system to schedule your {data.name} appointment.
            </p>
            {data.workingHours.length > 0 && (
              <div className="mt-7 w-full rounded-xl bg-[#25cdbd] p-5 sm:w-auto">
                <strong>Working Hours</strong>
                {data.workingHours.map((row) => (
                  <p key={row.days} className="mt-2 text-sm">
                    {row.days} &nbsp; {row.time}
                  </p>
                ))}
              </div>
            )}
            {data.contact.mobile && (
              <a
                href={`tel:${data.contact.mobileHref}`}
                className="mt-5 block w-full rounded-xl bg-white px-5 py-4 text-center font-bold text-[#286f73] sm:w-fit"
              >
                ☎ {data.contact.mobile}
              </a>
            )}
          </div>
          <div className="min-w-0 rounded-2xl bg-white p-5 text-[#286f73] sm:p-7">
            <h3 className="mb-6 text-center text-lg font-bold">Book an Appointment</h3>
            <AppointmentForm slug={data.slug} />
          </div>
        </div>
      </section>
    </SitePage>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: LocationData }> = async ({
  params,
  res,
}) => {
  const slug = String(params?.slug || "");
  try {
    const data = await getContent<LocationData>(`locations/${slug}`);
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return { props: { data } };
  } catch {
    const data = fallbackLocation(slug);
    if (data) {
      res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
      return { props: { data } };
    }
    return { notFound: true };
  }
};
