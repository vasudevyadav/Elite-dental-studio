import Image from "next/image";
import { useState } from "react";
import AnimatedArrowCta from "./AnimatedArrowCta";

type Clinic = {
  name: string;
  phone: string;
  landline: string;
  email: string;
  addressLines: string[];
  mapQuery: string;
  mapUrl?: string;
};

const clinics: Record<string, Clinic> = {
  CALICUT: {
    name: "CALICUT",
    phone: "+91 9745 072 555",
    landline: "0495 3552 555",
    email: "elitedentalstudioreception@gmail.com",
    addressLines: [
      "The Mezzanine Floor Apollo Tower",
      "Opposite Swapna Nagari",
      "Mini Bypass Rd, Eranhipalam P.O",
      "Kozhikode, Kerala 673006",
    ],
    mapQuery: "Apollo Tower, Mini Bypass Road, Eranhipalam, Kozhikode, Kerala",
  },
  KOCHI: {
    name: "KOCHI",
    phone: "+91 9745 072 444",
    landline: "0484 3552 444",
    email: "elitedentalstudiokochi@gmail.com",
    addressLines: [
      "2nd Floor, Marine Drive Road",
      "Near High Court Junction",
      "Ernakulam",
      "Kochi, Kerala 682031",
    ],
    mapQuery: "Marine Drive Road, Ernakulam, Kochi, Kerala",
  },
  KANNUR: {
    name: "KANNUR",
    phone: "+91 9745 072 333",
    landline: "0497 3552 333",
    email: "elitedentalstudiokannur@gmail.com",
    addressLines: [
      "1st Floor, Town Square",
      "Kannur Road",
      "Near City Centre",
      "Kannur, Kerala 670001",
    ],
    mapQuery: "Town Square, Kannur, Kerala",
  },
  COIMBATORE: {
    name: "COIMBATORE",
    phone: "+91 9745 072 222",
    landline: "0422 3552 222",
    email: "elitedentalstudiocbe@gmail.com",
    addressLines: [
      "First Floor, Alankar Building",
      "Diwan Bahadur Rd, opposite Tanishq",
      "R.S. Puram",
      "Coimbatore, Tamil Nadu 641002",
    ],
    mapQuery: "Alankar Building, Diwan Bahadur Road, R.S. Puram, Coimbatore, Tamil Nadu 641002",
    mapUrl: "https://maps.app.goo.gl/Wx3n9HuttpszrQpy5",
  },
};

const iconClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7378] text-white";

function PhoneIcon() {
  return (
    <span className={iconClass}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
      </svg>
    </span>
  );
}

function LandlineIcon() {
  return (
    <span className={iconClass}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8V5.5A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5V8M5 8h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Zm3 4h8v5H8v-5Z" />
        <path strokeLinecap="round" d="M7 5h10" />
      </svg>
    </span>
  );
}

function EmailIcon() {
  return (
    <span className={iconClass}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 6 8.5 7 8.5-7" />
      </svg>
    </span>
  );
}

function LocationIcon() {
  return (
    <span className={iconClass}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.72 6.83 11.35 7.12 11.59a1.38 1.38 0 0 0 1.76 0C13.17 21.35 20 15.72 20 10a8 8 0 0 0-8-8Zm0 11.1A3.1 3.1 0 1 1 12 6.9a3.1 3.1 0 0 1 0 6.2Z" />
      </svg>
    </span>
  );
}

export default function NearestClinic({ serviceName }: { serviceName?: string }) {
  const [selectedClinic, setSelectedClinic] = useState("CALICUT");
  const clinic = clinics[selectedClinic];
  const encodedMapQuery = encodeURIComponent(clinic.mapQuery);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedMapQuery}&output=embed`;
  const mapPageUrl = clinic.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`;

  return (
    <section id="clinics" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 ">
      <div className="lg:mb-10 mb-6 flex items-center gap-5">
        <h2 className="shrink-0 text-3xl font-bold tracking-[-0.02em] text-[#073f48] lg:text-[34px]">
          Choose Your <span className="text-dent-accent">Nearest Clinic</span>
        </h2>
        <span className="hidden h-px flex-1 bg-[#2d7378] sm:block" />
      </div>

      <div className="grid items-stretch gap-8 lg:grid-cols-2 xl:gap-10">
        <article className="overflow-hidden rounded-[28px] bg-[#e8f8f5]">

          <div className="grid gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_220px] sm:p-8 lg:p-9">

            <label className="relative block">
              <span className="sr-only">Choose clinic location</span>
              <select
                value={selectedClinic}
                onChange={(event) => setSelectedClinic(event.target.value)}
                className=" py-3 w-full appearance-none rounded-full border border-[#d9d9d9] bg-white px-8 pr-14 text-lg font-medium text-[#666] shadow-[inset_0_2px_7px_rgba(0,0,0,0.13)] outline-none transition focus:border-dent-accent focus:ring-4 focus:ring-dent-accent/20 "
              >
                {Object.values(clinics).map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute right-7 top-1/2 h-5 w-5 -translate-y-1/2 fill-[#333]">
                <path d="m4 7 6 7 6-7H4Z" />
              </svg>
            </label>

            <a
              href={mapPageUrl}
              target="_blank"
              rel="noreferrer"
              className="smooth-hover button-hover hover-lift flex items-center justify-center rounded-full bg-[#2d7378] px-6 text-lg font-bold text-white hover:bg-[#164f57] focus:outline-none focus:ring-4 focus:ring-[#2d7378]/25"
            >
              Find Clinic
            </a>
          </div>

          <div className="px-6 pb-7 sm:px-9 sm:pb-9 lg:px-12">
            <div className="space-y-6 py-3 text-lg text-[#747b7c] sm:text-xl">
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="smooth-hover hover-lift flex items-center gap-5 hover:text-[#2d7378]">
                <PhoneIcon />
                <span>{clinic.phone}</span>
              </a>
              <a href={`tel:${clinic.landline.replace(/\s/g, "")}`} className="smooth-hover hover-lift flex items-center gap-5 hover:text-[#2d7378]">
                <LandlineIcon />
                <span>{clinic.landline}</span>
              </a>
              <a href={`mailto:${clinic.email}`} className="smooth-hover hover-lift flex min-w-0 items-center gap-5 hover:text-[#2d7378]">
                <EmailIcon />
                <span className="min-w-0 break-all">{clinic.email}</span>
              </a>
            </div>

            <div className="my-6 h-px bg-[#668183]" />

            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.95fr)]">
              <div className="flex items-start gap-5">
                <LocationIcon />
                <div className="text-sm leading-[1.75] text-[#667172] font-semibold lg:text-[13px]">
                  {clinic.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}

                  <AnimatedArrowCta
                    label="VIEW MAP"
                    href={mapPageUrl}
                    target="_blank"
                    arrowClassName="text-[#2d7378]"
                    className="smooth-hover button-hover hover-lift mt-5 inline-flex items-center gap-5 rounded-lg bg-[#064b52] py-2 pl-5 pr-2 text-sm font-bold text-white hover:bg-[#2d7378]"
                  />
                </div>
              </div>

              <div className="min-h-[190px] overflow-hidden rounded-2xl bg-white shadow-sm">
                <iframe
                  key={selectedClinic}
                  title={`${clinic.name} clinic map`}
                  src={mapEmbedUrl}
                  className="h-full min-h-[190px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="flex min-h-[560px] flex-col justify-around rounded-[28px] bg-dent-accent px-7 py-10 text-center sm:px-12 lg:min-h-0 xl:px-16">
          {serviceName ? <div className="mx-auto max-w-[650px]">
            <div className="mb-8 flex justify-center"><Image src="/home/customer-care.png" alt="" aria-hidden="true" width={80} height={80} /></div>
            <h3 className="text-2xl font-bold leading-[1.3] text-white lg:text-4xl">Book a {serviceName}<br />Consultation Now</h3>
            <p className="mx-auto mt-6 text-base leading-9 text-white lg:text-xl">Elite Dental Studio is a specialist laser dental clinic serving patients across Kerala who are searching for a laser dental clinic near me in Calicut, Kochi or Kannur. Our periodontics and laser specialist team is available for consultations at all three branches.</p>
          </div> : <>
            <div className="mx-auto max-w-[600px]">
              <div className="mb-3 flex justify-center">
                <Image src="/home/customer-care.png" alt="" aria-hidden="true" width={80} height={80} />
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-white lg:text-2xl">
                WE DIAGNOSE BEFORE WE TREAT
              </h3>
              <p className="text-base leading-[1.35] text-[#064b52] lg:text-xl">
                At Elite Dental Studio, an X-ray comes before a quote, every time. If your tooth does not need treatment yet, our dentist will educate you instead of starting one.
              </p>
            </div>

            <div className="mx-auto my-5 h-px w-2/3 bg-[#064b52]/15 lg:hidden" />

            <div className="mx-auto max-w-[650px]">
              <div className="mb-3 flex justify-center">
                <Image src="/home/shine-teth.png" alt="" aria-hidden="true" width={80} height={80} />
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-white lg:text-2xl">
                ONE SPECIALIST, ONE FIELD, EVERY TIME
              </h3>
              <p className="text-base leading-[1.35] text-[#064b52] lg:text-xl">
                A root canal is done by our Endodontist. A child&apos;s cavity goes to our Pedodontist. At Elite Dental Studio, you are designated to the doctor trained for that exact problem, not whoever is free.
              </p>
            </div>
          </>}
        </article>

      </div>
    </section>
  );
}
