import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most patients should schedule a dental checkup every six months, unless their dentist recommends otherwise.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, our reception team can help you review and verify your available dental coverage.",
  },
  {
    question: "What can I expect during my first visit?",
    answer:
      "Your first visit includes a detailed consultation, oral examination and a personalised treatment plan.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes. Call our emergency number and our team will arrange the earliest possible appointment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
      <div className="rounded-[30px] bg-[#f0faf8] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-16">
        <div>
          <p className="text-sm font-extrabold uppercase text-[#28d1c2] sm:text-base">
            FAQs
          </p>
          <h2 className="lg:mt-6 mt-3 text-3xl font-extrabold leading-[1.18] tracking-[-0.025em] text-[#2c7477] sm:text-[42px]">
            Everything you need to
            <br /> know about dental care
          </h2>
          <p className="lg:mt-8 mt-3 max-w-[550px] text-base leading-[1.55] text-[#555] sm:text-lg">
            Find quick answers to common questions about our dental services,
            procedures, and patient care in our FAQ section.
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[14px] transition ${isOpen ? "bg-[#2c7477] text-white" : "bg-white text-[#2c7477]"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 lg:px-7 px-4 lg:py-5 py-3 text-left"
                >
                  <span className="text-sm font-bold lg:text-xl">{faq.question}</span>
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
