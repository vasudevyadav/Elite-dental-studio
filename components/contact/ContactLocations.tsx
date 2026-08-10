import { contactClinics } from "./contactData";

const PinIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
const PhoneIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.2 2c-4.3-1.8-7-4.5-8.8-8.8L9 8 7 3Z" /></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
const ClockIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;

export default function ContactLocations() {
  return (
    <section id="locations" className="relative overflow-hidden bg-[#f3faf9] px-4 py-12 sm:px-8 sm:py-16 lg:py-12">
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#25bfae]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-28 h-80 w-80 rounded-full bg-[#176b70]/8 blur-3xl" />
      <div className="relative mx-auto max-w-[1180px] lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#20a99d] sm:text-sm">Our clinic locations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-[#174e53] lg:text-[35px]">Four cities. One standard of exceptional care.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#637477] lg:text-base">Every location offers experienced specialists, modern technology and a patient-first approach. Find every detail below.</p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {contactClinics.map((clinic, index) => {
            const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`;
            return (
              <article key={clinic.shortName} className="group overflow-hidden rounded-[22px] border border-[#d7e9e7] bg-white shadow-[0_12px_35px_rgba(18,82,86,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(18,82,86,.13)]">
                <div className="relative h-[200px] overflow-hidden bg-[#dceeed] sm:h-[230px] lg:h-[250px]">
                  <iframe title={`${clinic.name} map`} src={mapSrc} className="h-full w-full border-0 grayscale-[15%] transition duration-500 group-hover:grayscale-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#174e53] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-white shadow-lg">Clinic {String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#25bfae]">Elite Dental Studio</p><h3 className="mt-1.5 text-lg font-semibold tracking-[-.025em] text-[#174e53] lg:text-2xl">{clinic.shortName}</h3></div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e4f7f4] text-[#188e84]"><PinIcon /></span>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-2">
                    <Detail icon={<PinIcon />} label="Address"><address className="not-italic leading-6">{clinic.address.map((line) => <span key={line} className="block">{line}</span>)}</address></Detail>
                    <div className="space-y-3">
                      <Detail icon={<PhoneIcon />} label="Phone"><a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="font-bold text-[#176b70] transition hover:text-[#25bfae]">{clinic.phone}</a>{clinic.landline && <span className="mt-1 block text-xs text-[#718083]">Landline: {clinic.landline}</span>}</Detail>
                      {clinic.email && <Detail icon={<MailIcon />} label="Email"><a href={`mailto:${clinic.email}`} className="break-all text-xs font-semibold text-[#176b70] transition hover:text-[#25bfae] sm:text-sm">{clinic.email}</a></Detail>}
                    </div>
                    <div className="md:col-span-2 xl:col-span-2"><Detail icon={<ClockIcon />} label="Working hours"><div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6"><span><b>Mon–Sat:</b> 09:30 AM–09:00 PM</span><span><b>Sunday:</b> 10:00 AM–07:00 PM</span></div></Detail></div>
                  </div>

                  <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                    <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="rounded-[10px] bg-[#174e53] px-3 py-3 text-center text-xs font-bold text-white transition hover:bg-[#0e3f43]">Call clinic</a>
                    <a href={`https://wa.me/${clinic.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="rounded-[10px] border border-[#9ccbc7] px-3 py-3 text-center text-xs font-bold text-[#176b70] transition hover:bg-[#e8f7f5]">WhatsApp</a>
                    <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="rounded-[10px] bg-[#25bfae] px-3 py-3 text-center text-xs font-bold text-white transition hover:bg-[#1eaa9d]">Directions ↗</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return <div className="flex gap-2.5 rounded-xl bg-[#f5faf9] p-3"><span className="mt-0.5 shrink-0 text-[#20a99d]">{icon}</span><div className="min-w-0 text-[13px] leading-5 text-[#526568]"><strong className="mb-1 block text-[9px] uppercase tracking-[.14em] text-[#849293]">{label}</strong>{children}</div></div>;
}
