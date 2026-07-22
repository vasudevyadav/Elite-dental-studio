import Image from "next/image";
import { useState } from "react";

export default function BookAppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    clinic: "",
  });

  const updateForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const fieldClass =
    "h-12 w-full rounded-[6px] border border-[#6b9fa1] bg-[#f4fbfa] px-5 text-sm text-[#3f4444] outline-none transition placeholder:text-[#555] focus:border-dent-accent focus:ring-4 focus:ring-dent-accent/15";

  return (
    <section id="appointment" className="px-5 py-6 sm:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-dent-panel px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-16 lg:py-16">
        <div className="text-white">
          <p className="text-sm font-extrabold uppercase text-dent-accent sm:text-base">
            Book Your Appointment
          </p>
          <h2 className="lg:mt-5 mt-3 text-2xl font-extrabold leading-[1.35] tracking-[-0.025em] sm:text-[42px]">
            Schedule Your Dental Visit
            <br /> Online at Elite Dental Studio
          </h2>
          <p className="lg:mt-6 mt-3 max-w-[530px] text-base leading-[1.55] text-white/95 sm:text-lg">
            Ready to take the next step towards a healthier smile?
            <br /> Use our easy online booking system to schedule your dental appointment.
          </p>

          <div className="lg:mt-10 mt-6 max-w-[390px] rounded-[20px] bg-linear-to-br from-[#19d6c7] to-[#29cdbf] lg:px-8 px-5 lg:py-6 py-3">
            <h3 className="lg:text-xl text-lg font-extrabold">Working Hours</h3>
            <div className="lg:my-4 my-2 border-t border-white/70" />
            <div className="space-y-4 text-base font-bold">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-5">
                <span>Mon To Sat</span>
                <span>09:30 am to 9:00 pm</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-5">
                <span>Sunday</span>
                <span>10:00 am to 7:00 pm</span>
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
              <a href="tel:+919048611911" className="smooth-hover link-hover text-lg font-black hover:text-dent-accent sm:text-xl">
                +91 9048 611 911
              </a>
            </div>
          </div>
        </div>

        <div className="lg:mt-12 mt-8 rounded-[22px] bg-white px-6 lg:py-10 py-6 lg:mt-0">
          <h3 className="text-center text-xl font-bold italic text-[#29666b]">
            Book an Appointment
          </h3>
          <form
            className="lg:mt-10 mt-6 space-y-7"
            onSubmit={(event) => event.preventDefault()}
          >
            <input name="name" value={form.name} onChange={updateForm} placeholder="Enter Your Name" className={fieldClass} />
            <input name="phone" value={form.phone} onChange={updateForm} placeholder="Enter Your Mobile No." type="tel" className={fieldClass} />
            <input name="email" value={form.email} onChange={updateForm} placeholder="Enter Your Mail" type="email" className={fieldClass} />
            <input name="date" value={form.date} onChange={updateForm} placeholder="DD/MM/YYYY" className={fieldClass} />
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
              <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 fill-[#444]">
                <path d="m4 7 6 7 6-7H4Z" />
              </svg>
            </div>
            <button
              type="submit"
              className="smooth-hover button-hover hover-lift mx-auto block w-full max-w-[245px] rounded-[5px] bg-dent-accent py-3 text-base font-extrabold text-white hover:bg-dent-nav focus:outline-none focus:ring-4 focus:ring-dent-accent/25"
            >
              Book Now!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
