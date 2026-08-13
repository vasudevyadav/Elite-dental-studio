import Image from "next/image";

type ServiceOverviewProps = {
  serviceTitle: string;
  treatmentName: string;
  isLaser: boolean;
  data?: Record<string, unknown>;
};

export default function ServiceOverview({
  serviceTitle,
  treatmentName,
  isLaser,
  data,
}: ServiceOverviewProps) {
  const paragraphs = data?.paragraphs as string[] | undefined;
  const backgroundImage = data?.backgroundImage as { url?: string; alt?: string } | undefined;
  return (
    <section className="relative overflow-hidden bg-[#2a686d] text-white">
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-screen-2xl items-center px-5 py-14 sm:px-8 lg:min-h-[670px] lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl leading-tight font-bold lg:text-[45px]">
            {(data?.title as string) || treatmentName}
            <br />
            <span className="font-semibold lg:text-[34px]">
              {(data?.locationLine as string) || "in Kochi, Calicut & Kannur"}{" "}
            </span>
          </h1>

          <div className="my-7 h-px bg-white/60" />

          <div className="space-y-5 text-base leading-7 lg:text-xl lg:leading-8">
            <p>
              {paragraphs?.[0] ||
                `If you are searching for the best ${serviceTitle.toLowerCase()} clinic near me, you want two things confirmed: what the treatment actually involves and whether it applies to your condition.`}
            </p>
            <p>
              {paragraphs?.[1] ||
                (isLaser
                  ? "Dental laser treatment uses focused light energy to support selected gum and soft tissue procedures with greater precision. At Elite Dental Studio, our periodontics and laser specialist team offers dental laser treatment in Calicut, Kochi and Kannur, with each case planned after a proper clinical check."
                  : `${serviceTitle} uses modern dental techniques to provide accurate, comfortable care. At Elite Dental Studio, each case is planned after a proper clinical check.`)}
            </p>
            {(paragraphs?.[2] || !paragraphs) && (
              <p>
                {paragraphs?.[2] ||
                  (isLaser
                    ? "Not every condition needs laser. Your dentist confirms whether it is the right approach for you before treatment begins."
                    : "Not every condition needs the same approach. Your dentist confirms the right treatment for you before care begins.")}
              </p>
            )}
          </div>
        </div>
      </div>

      <Image
        src={backgroundImage?.url || "/service/services-in.png"}
        alt={backgroundImage?.alt || `${serviceTitle} procedure`}
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-[62%_center] opacity-25 lg:object-contain lg:object-center lg:opacity-100"
      />
    </section>
  );
}
