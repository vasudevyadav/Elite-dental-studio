import { useState } from "react";
import { contactClinics } from "./contactData";

export default function ContactLocations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const clinic = contactClinics[activeIndex];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`;

  return (
    <section id="locations" className="bg-[#f3faf9] px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-[#25bfae]">Find your nearest clinic</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#174e53] sm:text-5xl">Care is closer than you think.</h2><p className="mt-5 text-base leading-7 text-[#637477] sm:text-lg">Choose a location to view contact information, directions and the fastest way to reach our team.</p></div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Clinic locations">
          {contactClinics.map((item, index) => <button key={item.shortName} type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)} className={`smooth-hover shrink-0 rounded-full px-5 py-3 text-sm font-bold ${activeIndex === index ? "bg-[#176b70] text-white shadow-[0_10px_24px_rgba(23,107,112,.2)]" : "border border-[#b7d9d6] bg-white text-[#3e6265] hover:bg-[#e7f6f4]"}`}>{item.shortName}</button>)}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(18,82,86,.10)] lg:grid-cols-[.82fr_1.18fr]">
          <article className="flex flex-col p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#25bfae]">Elite Dental Studio</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#174e53] sm:text-3xl">{clinic.name}</h3>
            <div className="mt-8 space-y-7 text-[#526568]">
              <ContactRow label="Address"><address className="not-italic leading-7">{clinic.address.map((line) => <span key={line} className="block">{line}</span>)}</address></ContactRow>
              <ContactRow label="Phone"><a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="font-semibold text-[#1c696e] hover:text-[#25bfae]">{clinic.phone}</a>{clinic.landline && <span className="mt-1 block text-sm">Landline: {clinic.landline}</span>}</ContactRow>
              {clinic.email && <ContactRow label="Email"><a href={`mailto:${clinic.email}`} className="break-all text-sm font-semibold text-[#1c696e] hover:text-[#25bfae]">{clinic.email}</a></ContactRow>}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-10">
              <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="smooth-hover button-hover hover-lift rounded-full bg-[#25bfae] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#176b70]">View map ↗</a>
              <a href={`https://wa.me/${clinic.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="smooth-hover hover-lift rounded-full border border-[#9ccbc7] px-6 py-3 text-center text-sm font-bold text-[#176b70] hover:bg-[#e8f7f5]">WhatsApp</a>
            </div>
          </article>
          <div className="min-h-[380px] bg-[#dceeed] lg:min-h-[590px]"><iframe key={clinic.shortName} title={`${clinic.name} map`} src={mapSrc} className="h-full min-h-[380px] w-full border-0 lg:min-h-[590px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="grid gap-2 sm:grid-cols-[90px_1fr]"><strong className="text-xs uppercase tracking-[.12em] text-[#829092]">{label}</strong><div>{children}</div></div>;
}
