const benefits = [
  "Low cost treatments with affordable airfare and favourable exchange rates",
  "Quality care in accordance with international standards",
  "Highly qualified doctors with vast experience in complex procedures",
  "No waiting lists when planned properly in advance",
  "Rigorous infection control systems at par with Western countries",
  "E-tourism medical VISA regime for hassle-free visits",
];

export default function AffordableDentalTreatment() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-1 lg:gap-16">

        {/* Left — Text */}
        <div>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-dent-accent sm:text-base">
            Dental Tourism
          </p>
          <h2 className="mb-5 text-3xl font-extrabold leading-[1.2] tracking-tight text-[#29666b] sm:text-[38px]">
            Need For Dental Tourism
          </h2>
          <p className="mb-3 text-sm leading-[1.75] text-[#555] lg:text-[17px]">
            Healthy teeth are an essential aspect not just for health and hygiene,
            but also for personality upliftment. With trained experts and advanced
            technologies at Elite Dental Studio, you will leave our clinic with a
            brighter smile — fast, painless, and well-defined.
          </p>
          <p className="mb-8 text-sm leading-[1.75] text-[#555] lg:text-[17px]">
            Medical insurance does not cover most dental treatments in countries
            like the US and UK. That&apos;s why India — and especially Calicut — has
            become a top destination for affordable, world-class dental tourism.
          </p>

          <ul className="space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dent-accent">
                  <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
                    <path
                      d="M1 5l3.5 3.5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-[1.65] text-[#3f4444] lg:text-[17px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
