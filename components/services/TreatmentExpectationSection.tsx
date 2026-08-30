import Image from "next/image";

export default function TreatmentExpectationSection({ data }: { data?: Record<string, unknown> }) {
  const paragraphs = data?.paragraphs as string[] | undefined;
  const renderedParagraphs = paragraphs?.length
    ? paragraphs
    : [
        "Most laser procedures at Elite Dental Studio are completed in a single sitting of 20 to 60 minutes. Local anaesthesia or numbing gel is used where needed so you are comfortable throughout the procedure.",
        "After your session, mild soreness in the treated area is normal and typically settles within a few days. Most patients return to their regular routine the same day or the following day depending on the procedure.",
      ];
  const [leadParagraph, ...remainingParagraphs] = renderedParagraphs;
  const renderRemainingAsList =
    remainingParagraphs.length > 1 &&
    remainingParagraphs.every((paragraph) => paragraph.includes(":"));

  return (
    <section className="mt-10 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-20">
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[400px]">
        <Image
          src={
            (data?.image as { url?: string } | undefined)?.url || "/service/services-inner-4.png"
          }
          alt="Dental laser treatment"
          fill
          sizes="(max-width: 1024px) 90vw, 757px"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
          {(data?.title as string) || (
            <>
              <span>What to Expect During and</span>
              <br />
              <span>After Laser Treatment?</span>
            </>
          )}
        </h2>
        <div className="my-5 h-px bg-gray-500" />
        <div className="space-y-5 text-sm leading-7 font-medium text-gray-500 lg:text-base lg:leading-8">
          <p>{leadParagraph}</p>
          {renderRemainingAsList ? (
            <ul className="grid gap-3 pl-5">
              {remainingParagraphs.map((paragraph, index) => (
                <li
                  className="list-disc marker:text-[#25bfae]"
                  key={`${index}-${paragraph.slice(0, 24)}`}
                >
                  {paragraph}
                </li>
              ))}
            </ul>
          ) : (
            remainingParagraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
