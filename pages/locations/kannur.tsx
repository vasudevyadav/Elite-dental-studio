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

function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", clinic: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic.toLowerCase(),
      preferredDate: form.date,
      source: "location-kannur",
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
    <form className={compact ? "space-y-3" : "space-y-3"} onSubmit={handleSubmit}>
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
        type="text"
        value={form.date}
        onChange={update}
        placeholder="DD/MM/YYYY"
        className={inputClass}
        onFocus={(event) => (event.target.type = "date")}
        onBlur={(event) => {
          if (!event.target.value) event.target.type = "text";
        }}
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
        <option value="kannur">Kannur</option>
        <option value="calicut">Calicut</option>
        <option value="kochi">Kochi</option>
        <option value="coimbatore">Coimbatore</option>
      </select>
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
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-[#effaf8] p-5 sm:rounded-[22px] sm:p-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-[50px] lg:p-[52px]">
        <div>
          <p className="text-xs font-bold tracking-[.16em] text-[#22bdae] uppercase">
            {data.eyebrow || "FAQs"}
          </p>
          <h2 className="mt-3 max-w-[300px] text-[24px] leading-[1.25] font-bold text-[#296d72]">
            {data.title}
          </h2>
          <p className="mt-7 max-w-[320px] text-[13px] leading-5 text-[#687879]">
            {data.description}
          </p>
          <a
            href="tel:+919645874777"
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#286f73] shadow-sm lg:mt-14"
          >
            ☎ {phone}
          </a>
        </div>
        <div className="space-y-[13px]">
          {(data.items || faqs.map(([question, answer]) => ({ question, answer }))).map(
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
  seo: Record<string, string>;
  contact: Record<string, any>;
  workingHours: Array<Record<string, string>>;
  sections: DynamicSection[];
};

export default function KannurLocationPage({ data }: { data: LocationData }) {
  const intro = section(data.sections, "introduction") || {};
  const benefitSection = section(data.sections, "benefits") || {};
  const serviceSection = section(data.sections, "services") || {};
  const doctorsSection = section(data.sections, "doctors") || {};
  const travelSection = section(data.sections, "travel") || {};
  const faqSection = section(data.sections, "faq") || {};
  const appointmentSection = section(data.sections, "appointment") || {};
  const activeBenefits =
    benefitSection.items || benefits.map(([icon, title, text]) => ({ icon, title, text }));
  const activeTravel =
    travelSection.items || travel.map(([icon, title, text]) => ({ icon, title, text }));
  return (
    <SitePage
      title={data.seo.metaTitle}
      description={data.seo.metaDescription}
      mainClassName="[&_.scroll-reveal]:!translate-y-0 [&_.scroll-reveal]:!opacity-100"
    >
      <div className="[&>section]:h-[380px] [&>section]:after:pointer-events-none [&>section]:after:absolute [&>section]:after:inset-0 [&>section]:after:z-20 [&>section]:after:bg-[linear-gradient(90deg,rgba(4,55,60,.08),rgba(4,55,60,.02)_55%,rgba(4,55,60,.35))] sm:[&>section]:h-[500px] lg:[&>section]:h-[clamp(560px,42.51vw,700px)]">
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
              {intro.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#677778] sm:mt-5 sm:leading-7">
              {intro.paragraphs?.[0]}
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
            <p className="leading-6 sm:leading-7">{intro.paragraphs?.[1]}</p>
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
                  defaultValue="KANNUR"
                  className="h-12 rounded-full border border-[#d5e2e0] bg-white px-6 text-[#667]"
                >
                  <option value="CALICUT">CALICUT</option>
                  <option>KOCHI</option>
                  <option value="KANNUR">KANNUR</option>
                  <option>COIMBATORE</option>
                </select>
                <a
                  href={data.contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-12 place-items-center rounded-full bg-[#276368] font-bold text-white"
                >
                  Find Clinic
                </a>
              </div>
              <div className="mt-8 space-y-4 text-sm text-[#617477] sm:text-base">
                <a className="block" href={`tel:${data.contact.mobileHref}`}>
                  ● &nbsp; {data.contact.mobile}
                </a>
                <span className="block">☎ &nbsp; 0497 271 6555</span>
                <a className="block break-all" href={`mailto:${data.contact.email}`}>
                  ✉ &nbsp; {data.contact.email}
                </a>
              </div>
              <div className="my-6 h-px bg-[#86a4a4]" />
              <div className="flex gap-4 text-sm leading-6 font-semibold text-[#566b6d]">
                <span>●</span>
                <p>
                  {data.contact.addressLines.map((line: string) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <a
                href={data.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded bg-[#064b52] px-5 py-2 text-xs font-bold text-white"
              >
                GET DIRECTION →
              </a>
            </div>
            <iframe
              title="Elite Dental Studio Kannur map"
              src={data.contact.mapEmbedUrl}
              className="min-h-[300px] w-full border-0 sm:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <ServicesSection
        compact
        title={serviceSection.title}
        description={serviceSection.description}
      />
      <div className="[&_h2]:!text-[24px]">
        <DoctorsSection compact clinicSlug={doctorsSection.clinicSlug} />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[18px] bg-[#24cdbd] p-5 sm:rounded-[28px] sm:p-8 lg:p-12">
          <p className="text-center text-xs font-bold tracking-[.16em] text-white/80 uppercase">
            {travelSection.eyebrow}
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
            {travelSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-6 text-[#145f63]">
            {travelSection.description}
          </p>
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

      <LocationFaq data={faqSection} phone={data.contact.mobile} />

      <section
        id="appointment"
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
      >
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-[#276368] p-5 text-white sm:rounded-[28px] sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-12">
          <div>
            <p className="text-xs font-bold tracking-[.15em] text-[#40ddcf] uppercase">
              {appointmentSection.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{appointmentSection.title}</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              {appointmentSection.description}
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
              ☎ {data.contact.mobile}
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

export const getServerSideProps: GetServerSideProps<{ data: LocationData }> = async ({ res }) => {
  const data = await getContent<LocationData>("locations/kannur");
  data.contact.mapUrl = "https://share.google/hqWjVESaLgEvGCPDX";
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { data } };
};
