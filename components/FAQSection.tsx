import Image from "next/image";
import { useState } from "react";
import { homeFaqContent, type FAQSectionContent } from "@/content/siteSections";

export default function FAQSection({ content = homeFaqContent }: { content?: FAQSectionContent }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section mx-auto max-w-7xl px-3 py-6 sm:px-8 lg:px-12 lg:py-10">
      <div className="bg-dent-surface items-center rounded-[30px] px-4 py-10 sm:px-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-10">
        <div>
          <p className="text-dent-accent text-sm font-extrabold uppercase sm:text-base">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl leading-[1.18] font-bold tracking-[-0.025em] text-[#29666b] sm:text-4xl lg:mt-6">
            {content.title}
          </h2>
          <p className="mt-3 max-w-[550px] text-base leading-[1.55] text-[#555] sm:text-lg lg:mt-8">
            {content.description}
          </p>

          <div className="mt-6 flex w-full max-w-[430px] items-center gap-3 rounded-[14px] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(31,92,94,0.08)] sm:gap-5 sm:px-6 sm:py-5 lg:mt-12">
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
          {content.items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[14px] transition ${
                  isOpen ? "bg-dent-panel text-white" : "text-dent-panel bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-4 py-3 text-left lg:px-7 lg:py-5"
                >
                  <span className="text-sm font-semibold lg:text-lg">{faq.question}</span>
                  <span className="text-2xl font-black">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-4 border-t border-white/60 pt-3 pb-2 text-sm leading-[1.5] text-white/95 sm:text-base lg:mx-7 lg:pb-5">
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
