import { useState } from "react";
import { useRouter } from "next/router";
import { submitConsultation } from "@/lib/consultation";

export default function ContactFormSection() {
  const [form, setForm] = useState({ clinic: "", name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();
  const update = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic.toLowerCase(),
      message: form.message,
      source: "contact-page",
    });
    setFeedback(result.message);
    if (result.success) {
      setStatus("success");
      setForm({ clinic: "", name: "", email: "", phone: "", message: "" });
      router.push("/thank-you");
    } else {
      setStatus("error");
    }
  };
  const fieldClass =
    "w-full rounded-xl border border-[#c7dfdc] bg-[#f7fbfa] px-4 py-3.5 text-sm text-[#324e51] outline-none transition placeholder:text-[#8a999a] hover:border-[#8fc7c1] focus:border-[#25bfae] focus:bg-white focus:ring-4 focus:ring-[#25bfae]/15";

  return (
    <section id="contact-form" className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#174e53,#2a7175)] shadow-[0_24px_65px_rgba(18,75,79,.18)] sm:rounded-[30px] lg:grid-cols-[.88fr_1.12fr]">
        <div className="relative overflow-hidden p-6 text-white sm:p-10 lg:p-12 xl:p-16">
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[50px] border-[#25bfae]/10" />
          <p className="text-sm font-bold tracking-[.16em] text-[#51dfd1] uppercase">Contact us</p>
          <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-[-.04em] sm:text-4xl xl:text-5xl">
            Let’s make your next dental visit easy.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80">
            Share your concern and preferred clinic. Our care team will connect you with the right
            dental specialist.
          </p>
          <div className="relative mt-10 grid gap-4 text-sm text-white/90 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <span className="block text-xs tracking-[.14em] text-[#51dfd1] uppercase">
                Working hours
              </span>
              <div className="mt-3 space-y-1.5 text-sm font-bold">
                <p className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <span>Mon–Sat</span>
                  <span className="whitespace-nowrap">9:30 AM–9:00 PM</span>
                </p>
                <p className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <span>Sunday</span>
                  <span className="whitespace-nowrap">10:00 AM–7:00 PM</span>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <span className="block text-xs tracking-[.14em] text-[#51dfd1] uppercase">
                Emergency contact
              </span>
              <a
                href="tel:+919048611911"
                className="mt-3 block text-lg font-bold transition hover:text-[#51dfd1]"
              >
                +91 9048 611 911
              </a>
              <small className="mt-1 block text-white/60">Tap to call our team</small>
            </div>
          </div>
        </div>
        <div className="m-2 rounded-[18px] bg-white p-5 sm:m-4 sm:rounded-[24px] sm:p-8 lg:m-5 lg:p-10 xl:p-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[.15em] text-[#25a99d] uppercase">
                Appointment request
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#174e53] sm:text-3xl">
                Send an enquiry
              </h3>
            </div>
            <span className="hidden h-12 w-12 place-items-center rounded-full bg-[#e4f7f4] text-xl text-[#188e84] sm:grid">
              ✦
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[#6d7c7e]">
            We usually respond during clinic working hours.
          </p>
          <form className="mt-7 grid gap-4 sm:grid-cols-2 lg:gap-5" onSubmit={handleSubmit}>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Preferred clinic
              </span>
              <select
                name="clinic"
                value={form.clinic}
                onChange={update}
                className={`${fieldClass} appearance-none`}
                required
              >
                <option value="">Select a clinic</option>
                <option>Calicut</option>
                <option>Kochi</option>
                <option>Kannur</option>
                <option>Coimbatore</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Full name
              </span>
              <input
                name="name"
                value={form.name}
                onChange={update}
                className={fieldClass}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Phone
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={update}
                className={fieldClass}
                placeholder="Mobile number"
                type="tel"
                required
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                Email address
              </span>
              <input
                name="email"
                value={form.email}
                onChange={update}
                className={fieldClass}
                placeholder="name@example.com"
                type="email"
                required
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs font-bold tracking-[.1em] text-[#526568] uppercase">
                How can we help?
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                className={`${fieldClass} min-h-[130px] resize-y`}
                placeholder="Tell us about your dental concern"
                required
              />
            </label>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="smooth-hover button-hover mt-2 w-full rounded-xl bg-[#25bfae] px-7 py-4 text-sm font-bold tracking-[.08em] text-white uppercase hover:bg-[#176b70] disabled:opacity-60 sm:col-span-2 sm:w-fit"
            >
              {status === "submitting" ? "Submitting..." : "Submit enquiry →"}
            </button>
            {feedback && (
              <p
                className={`text-sm font-semibold sm:col-span-2 ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
