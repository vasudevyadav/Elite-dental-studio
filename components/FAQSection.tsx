import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What can I expect during my first visit?",
    answer:
      "Your first visit includes a full mouth examination, X-rays if anything looks unclear, and a written treatment plan that lists what was found and the options available to treat it.",
  },
  {
    question: "Does Elite Dental Studio offer no cost EMI?",
    answer:
      "Yes. We accept Bajaj and Zest No Cost EMI on all our treatments, making it easier to manage the cost of your dental care. Contact our reception team for more information or assistance with the EMI process.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most patients need a dental checkup every six months for cleaning and early diagnosis, unless your dentist has already set a different schedule based on your gum health or past treatment.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes, Elite Dental Studio offers emergency dental care for severe pain, swelling, a broken tooth or sudden bleeding. Call our emergency contact number and our on-duty dentist will see you as soon as possible.",
  },
];

const aboutFaqs = [
  { question: "How long has Elite Dental Studio been operating?", answer: "Elite Dental Studio has been operating since 2020, with six years of specialist-led dental care across four ISO 9001 certified clinics in Calicut, Kochi, Kannur and Coimbatore." },
  { question: "Is Elite Dental Studio ISO 9001 certified?", answer: "Yes, Elite Dental Studio is ISO 9001 certified across all four clinic locations in Calicut, Kochi, Kannur and Coimbatore, meaning every clinic follows the same documented quality standard." },
  { question: "Does Elite Dental Studio have specialist doctors or general dentists?", answer: "Elite Dental Studio has MDS qualified specialists leading every dental department, including implantology, orthodontics, pedodontics, endodontics, periodontics, prosthodontics and oral surgery, across all four clinics." },
  { question: "How many clinics does Elite Dental Studio have and where are they located?", answer: "Elite Dental Studio has four clinics located in Calicut at Eranhipalam, Kochi at Panampilly Nagar, Kannur at Talap and Coimbatore at R.S. Puram." },
  { question: "Can NRI or international patients get insurance bills at Elite Dental Studio?", answer: "Yes, Elite Dental Studio issues bills for insurance claims for patients from GCC countries including the UAE, Kuwait, Qatar, Bahrain, Oman and Saudi Arabia. Elite Dental Studio is also recognised through the Famdent Excellence in Dentistry Award for clinical innovation and outstanding patient care." },
];

export default function FAQSection({ variant = "default" }: { variant?: "default" | "about" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const visibleFaqs = variant === "about" ? aboutFaqs : faqs;

  return (
    <section className="faq-section mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
      <div className="rounded-[30px] bg-dent-surface px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-10">
        <div>
          <p className="text-sm font-extrabold uppercase text-dent-accent sm:text-base">
            FAQs
          </p>
          <h2 className="lg:mt-6 mt-3 text-2xl font-bold leading-[1.18] tracking-[-0.025em] text-[#29666b] sm:text-4xl">
            Everything You Need to Know About Dental Care
          </h2>
          <p className="lg:mt-8 mt-3 max-w-[550px] text-base leading-[1.55] text-[#555] sm:text-lg">
            Find quick and expert-verified answers to your quick queries about our dental services, procedures or patient care.
          </p>

          <div className="lg:mt-12 mt-6 flex w-full max-w-[430px] items-center gap-3 rounded-[14px] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(31,92,94,0.08)] sm:gap-5 sm:px-6 sm:py-5">
            <Image
              src="/home/faqs-call.png"
              alt=""
              width={80}
              height={71}
              aria-hidden="true"
              className="h-11 w-12 shrink-0 object-contain sm:h-14 sm:w-16"
            />
            <div>
              <p className="text-xs text-[#5d6060] sm:text-sm">We always take care of your smile</p>
              <p className="mt-1 text-sm font-semibold text-[#464848] sm:text-base">
                Emergency Contact No.
              </p>
              <a href="tel:+919048611911" className="text-lg font-black text-[#343636] sm:text-2xl">
                +91 9048 611 911
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-5 lg:mt-8">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[14px] transition ${isOpen ? "bg-dent-panel text-white" : "bg-white text-dent-panel"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 lg:px-7 px-4 lg:py-5 py-3 text-left"
                >
                  <span className="text-sm font-semibold lg:text-lg">{faq.question}</span>
                  <span className="text-2xl font-black">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="lg:mx-7 mx-4 border-t border-white/60 lg:pb-5 pb-2 pt-3 text-sm leading-[1.5] text-white/95 sm:text-base">
                      {faq.answer}
                    </div>
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
