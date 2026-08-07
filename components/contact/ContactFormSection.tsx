import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({ clinic: "", name: "", email: "", phone: "", message: "" });
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const fieldClass = "w-full rounded-xl border border-[#aacdca] bg-[#f8fcfb] px-4 py-3.5 text-sm text-[#324e51] outline-none transition placeholder:text-[#809092] focus:border-[#25bfae] focus:ring-4 focus:ring-[#25bfae]/15";

  return (
    <section id="contact-form" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-[#2a686d] shadow-[0_24px_65px_rgba(18,75,79,.18)] lg:grid-cols-[.88fr_1.12fr]">
        <div className="p-7 text-white sm:p-12 lg:p-14 xl:p-16">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#51dfd1]">Contact us</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">How can we help your smile?</h2>
          <p className="mt-6 text-base leading-8 text-white/80">Share your concern and preferred clinic. Our care team will connect you with the right dental specialist.</p>
          <div className="mt-10 space-y-5 border-t border-white/20 pt-8 text-sm text-white/85">
            <div><span className="block text-xs uppercase tracking-[.14em] text-[#51dfd1]">Working hours</span><strong className="mt-1 block text-base">Mon–Sat: 9:30 AM–9:00 PM</strong><strong className="mt-1 block text-base">Sunday: 10:00 AM–7:00 PM</strong></div>
            <div><span className="block text-xs uppercase tracking-[.14em] text-[#51dfd1]">Emergency contact</span><a href="tel:+919048611911" className="mt-1 block text-xl font-bold">+91 9048 611 911</a></div>
          </div>
        </div>
        <div className="m-3 rounded-[24px] bg-white p-6 sm:m-5 sm:p-10 lg:p-12">
          <h3 className="text-2xl font-semibold text-[#174e53]">Send an enquiry</h3>
          <p className="mt-2 text-sm leading-6 text-[#6d7c7e]">We usually respond during clinic working hours.</p>
          <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-[#526568]">Preferred clinic</span><select name="clinic" value={form.clinic} onChange={update} className={`${fieldClass} appearance-none`} required><option value="">Select a clinic</option><option>Calicut</option><option>Kochi</option><option>Kannur</option><option>Coimbatore</option></select></label>
            <label><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-[#526568]">Full name</span><input name="name" value={form.name} onChange={update} className={fieldClass} placeholder="Your name" required /></label>
            <label><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-[#526568]">Phone</span><input name="phone" value={form.phone} onChange={update} className={fieldClass} placeholder="Mobile number" type="tel" required /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-[#526568]">Email address</span><input name="email" value={form.email} onChange={update} className={fieldClass} placeholder="name@example.com" type="email" required /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-[#526568]">How can we help?</span><textarea name="message" value={form.message} onChange={update} className={`${fieldClass} min-h-[130px] resize-y`} placeholder="Tell us about your dental concern" required /></label>
            <button type="submit" className="smooth-hover button-hover hover-lift mt-2 rounded-full bg-[#25bfae] px-7 py-4 text-sm font-bold uppercase tracking-[.08em] text-white hover:bg-[#176b70] sm:col-span-2 sm:w-fit">Submit enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
