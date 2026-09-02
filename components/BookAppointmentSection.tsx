import Image from "next/image";
import { useState } from "react";
import { appointmentContent, type AppointmentSectionContent } from "@/content/siteSections";
import BiginAppointmentWidget from "@/components/BiginAppointmentWidget";

export default function BookAppointmentSection({
  content = appointmentContent,
}: {
  content?: AppointmentSectionContent;
}) {
  const [open, setOpen] = useState(true);

  return (
    <section id="appointment" className="px-5 py-6 lg:px-8 lg:py-8">
      <div className="bg-dent-panel mx-auto max-w-7xl overflow-hidden rounded-[28px]">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-10 lg:px-16 lg:py-8"
        >
          <span>
            <span className="text-dent-accent text-sm font-bold uppercase sm:text-base">
              {content.eyebrow}
            </span>
            <h2 className="mt-1 text-2xl leading-[1.35] font-bold tracking-[-0.025em] text-white sm:text-[38px]">
              {content.title}
            </h2>
          </span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-3xl leading-none font-light text-white transition-transform ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>

        {open && (
          <div className="px-3 pb-10 sm:px-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-16 lg:pb-16">
            <div className="text-white">
              <p className="max-w-[530px] text-base leading-[1.55] text-white/95 sm:text-lg">
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

            <div className="mt-8 rounded-[22px] bg-white p-1 lg:mt-0 lg:p-4">
              <BiginAppointmentWidget />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
