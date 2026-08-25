import Image from "next/image";

export default function CandidateSection({
  treatmentName,
  data,
}: {
  treatmentName: string;
  data?: Record<string, unknown>;
}) {
  const items = (data?.items as string[] | undefined) || [];
  if (!items.length) return null;
  return (
    <section className="grid items-center gap-6 rounded-[22px] bg-[#ecfaf7] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(520px,600px)] lg:p-16">
      <div>
        <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
          {(data?.title as string) || (
            <>
              <span>Who Should Consider</span>
              <br />
              <span>{treatmentName}?</span>
            </>
          )}
        </h2>
        <p className="mt-5 text-sm leading-7 font-medium lg:text-[23px] lg:leading-8">
          {(data?.subtitle as string) || "Your dentist may recommend laser support if you have:"}
        </p>
        <div className="my-5 h-px bg-gray-500" />
        <ul className="grid gap-[14px] pl-[18px] lg:gap-[10px]">
          {items.map((item) => (
            <li
              className="list-disc text-sm leading-7 text-gray-600 lg:text-[17px] lg:leading-8"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <strong className="mt-7 block text-lg leading-[1.55] font-bold italic">
          {(data?.note as string) ||
            "Suitability is confirmed after a clinical examination and dental X-ray at our clinic."}
        </strong>
      </div>
      <div className="relative min-h-[300px] lg:min-h-[550px]">
        <Image
          src={
            (data?.image as { url?: string } | undefined)?.url || "/service/services-inner-3.png"
          }
          alt={`${treatmentName} treatment examples`}
          fill
          sizes="(max-width: 1024px) 90vw, 760px"
          className="object-contain"
        />
      </div>
    </section>
  );
}
