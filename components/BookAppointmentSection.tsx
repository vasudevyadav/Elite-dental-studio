import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { appointmentContent, type AppointmentSectionContent } from "@/content/siteSections";
import { submitConsultation } from "@/lib/consultation";
import { formatDateInput } from "@/lib/dateInput";

export default function BookAppointmentSection({
  content = appointmentContent,
}: {
  content?: AppointmentSectionContent;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    clinic: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const updateForm = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: name === "date" ? formatDateInput(value) : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const result = await submitConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email,
      clinicSlug: form.clinic,
      preferredDate: form.date,
      source: "book-appointment-section",
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

  const fieldClass =
    "h-12 w-full rounded-[6px] border border-[#6b9fa1] bg-[#f4fbfa] px-5 text-sm text-[#3f4444] outline-none transition placeholder:text-[#555] focus:border-dent-accent focus:ring-4 focus:ring-dent-accent/15";

  return (
    <section id="appointment" className="px-5 py-6 lg:px-8 lg:py-8">
      <div className="bg-dent-panel mx-auto max-w-7xl rounded-[28px] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-16 lg:py-16">
        <div className="text-white">
          <p className="text-dent-accent text-sm font-bold uppercase sm:text-base">
            {content.eyebrow}
          </p>
          <h2 className="text-2xl leading-[1.35] font-bold tracking-[-0.025em] sm:text-[38px] lg:mt-2">
            {content.title}
          </h2>
          <p className="max-w-[530px] text-base leading-[1.55] text-white/95 sm:text-lg lg:mt-3">
            {content.description}
          </p>

          <div className="mt-6 max-w-[390px] rounded-[20px] bg-linear-to-br from-[#19d6c7] to-[#29cdbf] px-5 py-3 lg:mt-10 lg:px-8 lg:py-6">
            <h3 className="text-lg font-semibold lg:text-xl">Working Hours</h3>
            <div className="my-2 border-t border-white/70 lg:my-4" />
            <div className="space-y-4 text-base font-bold">
              <div className="flex flex-col gap-1 font-medium sm:flex-row sm:justify-between sm:gap-5">
                <span>Mon to Sat</span>
                <span>09:30 AM to 9:00 PM</span>
              </div>
              <div className="flex flex-col gap-1 font-medium sm:flex-row sm:justify-between sm:gap-5">
                <span>Sunday</span>
                <span>10:00 AM to 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex max-w-[390px] items-center gap-3 rounded-[14px] bg-white px-4 py-4 text-[#444] sm:gap-5 sm:px-6 sm:py-5">
            <Image
              src="/home/faqs-call.png"
              alt=""
              width={80}
              height={71}
              aria-hidden="true"
              className="h-11 w-12 shrink-0 object-contain sm:h-14 sm:w-16"
            />
            <div>
              <p className="text-xs sm:text-sm">We always take care of your smile</p>
              <p className="mt-1 font-semibold">Emergency Contact No.</p>
              <a
                href="tel:+919048611911"
                className="smooth-hover link-hover hover:text-dent-accent text-lg font-black sm:text-xl"
              >
                +91 9048 611 911
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[22px] bg-white px-6 py-6 lg:mt-0 lg:mt-12 lg:py-10">
          <h3 className="text-center text-xl font-bold text-[#29666b] italic">
            {content.formTitle}
          </h3>
          <form className="mt-6 space-y-7 lg:mt-10" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={updateForm}
              placeholder="Enter Your Name"
              className={fieldClass}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={updateForm}
              placeholder="Enter Your Mobile No."
              type="tel"
              className={fieldClass}
            />
            <input
              name="email"
              value={form.email}
              onChange={updateForm}
              placeholder="Enter Your Mail"
              type="email"
              className={fieldClass}
            />
            <input
              name="date"
              value={form.date}
              onChange={updateForm}
              placeholder="DD/MM/YYYY"
              inputMode="numeric"
              maxLength={10}
              className={fieldClass}
            />
            <div className="relative">
              <select
                aria-label="Select clinic"
                name="clinic"
                value={form.clinic}
                onChange={updateForm}
                className={`${fieldClass} appearance-none pr-12`}
              >
                <option value="">Select Clinic</option>
                <option value="calicut">Calicut</option>
                <option value="kochi">Kochi</option>
                <option value="kannur">Kannur</option>
                <option value="coimbatore">Coimbatore</option>
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="pointer-events-none absolute top-1/2 right-5 h-5 w-5 -translate-y-1/2 fill-[#444]"
              >
                <path d="m4 7 6 7 6-7H4Z" />
              </svg>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="smooth-hover button-hover hover-lift bg-dent-accent hover:bg-dent-nav focus:ring-dent-accent/25 mx-auto block w-full max-w-[245px] rounded-[5px] py-3 text-base font-extrabold text-white focus:ring-4 focus:outline-none disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Book Now!"}
            </button>
            {feedback && (
              <p
                className={`text-center text-sm font-semibold ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
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
