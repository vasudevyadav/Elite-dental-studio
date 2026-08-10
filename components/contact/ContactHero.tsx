import Image from "next/image";
import Link from "next/link";

const quickContacts = [
  { icon: "☎", label: "Emergency care", value: "+91 9048 611 911", href: "tel:+919048611911" },
  { icon: "✉", label: "Email our team", value: "eliteinfo@gmail.com", href: "mailto:eliteinfo@gmail.com" },
  { icon: "⌖", label: "Four convenient clinics", value: "Calicut · Kochi · Kannur · Coimbatore", href: "#locations" },
];

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123f43] text-white">
      <Image src="/office/439667b9-ee1f-459f-a1a5-f9f277027a4b.webp" alt="Elite Dental Studio reception" fill priority className="-z-20 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,48,53,.96)_0%,rgba(5,62,67,.86)_48%,rgba(5,62,67,.42)_100%)]" />
      <div className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#25bfae]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="max-w-[760px]">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#54e2d4] sm:text-sm"><span className="h-px w-9 bg-[#54e2d4]" /> Talk to our care team</p>
          <h1 className="mt-3 text-[34px] font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">We’re here for your <span className="text-[#42d8ca]">healthiest smile.</span></h1>
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-white/80 lg:text-lg lg:leading-8">Whether you need an appointment, have a treatment question, or need urgent dental support, our friendly team will guide you to the right specialist.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact-form" className="smooth-hover button-hover rounded-full bg-[#25bfae] px-7 py-3.5 text-center text-base font-semibold text-white hover:bg-[#19aa9d]">Send an enquiry</Link>
            <a href="tel:+919048611911" className="smooth-hover rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-[#174e53]">Call emergency line</a>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-10 max-w-7xl px-4 pb-10 sm:-mt-12 sm:px-8 sm:pb-12 lg:-mt-14 lg:px-12">
        <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/95 text-[#174e53] shadow-[0_24px_60px_rgba(5,46,50,.25)] backdrop-blur-md md:grid-cols-3">
          {quickContacts.map((item, index) => (
            <a key={item.label} href={item.href} className={`group flex min-w-0 items-center gap-3 p-4 transition hover:bg-[#effaf8] sm:gap-4 sm:p-5 lg:p-6 ${index ? "border-t border-[#dceeed] md:border-l md:border-t-0" : ""}`}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#dff7f3] text-xl text-[#198d84] transition group-hover:bg-[#25bfae] group-hover:text-white">{item.icon}</span>
              <span className="min-w-0"><small className="block text-[10px] font-bold uppercase tracking-[.13em] text-[#7b8c8d] sm:text-[11px]">{item.label}</small><strong className="mt-1 block break-words text-sm font-semibold lg:text-base">{item.value}</strong></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
