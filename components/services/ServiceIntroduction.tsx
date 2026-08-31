import Image from "next/image";

type ServiceIntroductionProps = {
  isLaser: boolean;
  serviceTitle: string;
  treatmentName: string;
  data?: Record<string, unknown>;
};

export default function ServiceIntroduction({
  isLaser,
  serviceTitle,
  treatmentName,
  data,
}: ServiceIntroductionProps) {
  const paragraphs = data?.paragraphs as string[] | undefined;
  const image = data?.image as { url?: string; alt?: string } | undefined;
  const renderedParagraphs = paragraphs?.length
    ? paragraphs
    : [
        isLaser
          ? "Laser dentistry is a clinical technique that uses a focused beam of light energy to treat selected gum and soft tissue conditions in the mouth. The laser delivers controlled energy to a specific area, allowing the dentist to work with more precision than conventional soft tissue methods in suitable cases."
          : `${serviceTitle} is a clinical dental treatment focused on restoring oral health, comfort and confidence. Our dentists use careful diagnosis and modern equipment to plan treatment around your individual needs.`,
        isLaser
          ? "This technique gives the treating dentist greater control over soft tissue work, which is why it is used in selected gum and cosmetic dental procedures at Elite Dental Studio."
          : "This approach gives the treating dentist greater control and helps produce predictable results in suitable cases.",
      ];
  const renderAsList =
    renderedParagraphs.length > 2 && renderedParagraphs.every((paragraph) => paragraph.length <= 120);

  return (
    <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className="relative mt-6 min-h-[170px] overflow-hidden rounded-2xl sm:min-h-[340px] lg:mt-0 lg:min-h-80">
        <Image
          src={image?.url || "/service/what-treatment.png"}
          alt={image?.alt || serviceTitle}
          fill
          sizes="(max-width: 900px) 90vw, 760px"
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl leading-tight font-bold text-[#2b7175] lg:text-[42px]">
          {(data?.title as string) || `What Is ${treatmentName}?`}
        </h2>
        <div className="my-5 h-px bg-gray-500" />
        <div className="space-y-5 text-base leading-7 lg:text-xl lg:leading-8">
          {renderAsList ? (
            <ul className="grid gap-3 pl-5 sm:grid-cols-2">
              {renderedParagraphs.map((paragraph, index) => (
                <li
                  className="list-disc text-base leading-7 marker:text-[#25bfae] lg:text-lg lg:leading-8"
                  key={`${index}-${paragraph.slice(0, 24)}`}
                >
                  {paragraph}
                </li>
              ))}
            </ul>
          ) : (
            renderedParagraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
