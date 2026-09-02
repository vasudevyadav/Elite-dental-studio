import Image from "next/image";

const positions = [
  "left-[32%] top-[28%]",
  "left-[13%] top-[51%]",
  "left-[32.5%] top-[73%]",
  "left-[68%] top-[29%]",
  "left-[87%] top-[51%]",
  "left-[68%] top-[72%]",
];

export default function BenefitsSection({
  treatmentName,
  data,
}: {
  treatmentName: string;
  data?: Record<string, unknown>;
}) {
  const activeBenefits = (data?.items as string[] | undefined) || [];
  const description = typeof data?.description === "string" ? data.description.trim() : "";
  const footerText = typeof data?.footerText === "string" ? data.footerText.trim() : "";
  const useDiagramLayout = activeBenefits.length <= positions.length;
  if (!activeBenefits.length) return null;
  return (
    <section className="pt-10 pb-2 text-center lg:pt-20 lg:pb-0">
      <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
        {(data?.title as string) || (
          <>
            <span>Benefits of</span>
            <br />
            <span>{treatmentName}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 font-medium lg:text-lg lg:leading-8">{description}</p>
      )}

      <div
        className="-mx-5 mt-8 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-5 pb-5 text-left lg:hidden [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label={`Benefits of ${treatmentName}`}
        tabIndex={0}
      >
        {activeBenefits.map((benefit, index) => (
          <article
            className="w-[78vw] max-w-[310px] shrink-0 snap-start rounded-2xl border border-[#a8d9d5] bg-[#ecfaf7] p-5"
            key={benefit}
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#25d0c0] text-sm font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-6 font-medium text-[#454b4b]">{benefit}</p>
          </article>
        ))}
      </div>
      <p className="text-xs font-semibold text-[#2b7175] lg:hidden">Swipe to see all benefits →</p>

      {useDiagramLayout ? (
        <div className="relative mx-auto mt-8 hidden aspect-[1605/865] w-full max-w-[1605px] lg:block">
          <Image
            src={(data?.image as { url?: string } | undefined)?.url || "/service/services-bg.png"}
            alt={`Benefits of ${treatmentName}`}
            fill
            sizes="100vw"
            className="object-contain"
          />
          {activeBenefits.map((benefit, index) => (
            <span
              className={`absolute z-10 w-[13%] -translate-x-1/2 -translate-y-1/2 text-sm leading-[1.35] text-[#454b4b] lg:text-[15px] ${positions[index]}`}
              key={benefit}
            >
              {benefit}
            </span>
          ))}
        </div>
      ) : (
        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
          {activeBenefits.map((benefit, index) => (
            <article
              className="rounded-2xl border border-[#a8d9d5] bg-[#ecfaf7] p-6 text-left"
              key={benefit}
            >
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#25d0c0] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-7 font-medium text-[#454b4b]">{benefit}</p>
            </article>
          ))}
        </div>
      )}

      {footerText && (
        <p className="mx-auto mt-5 w-full max-w-5xl px-1 text-sm leading-7 font-semibold sm:w-10/12 lg:mt-4 lg:text-xl lg:leading-normal">
          {footerText}
        </p>
      )}
    </section>
  );
}
