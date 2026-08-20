import type { ServiceEarlyTreatment } from "@/lib/servicesApi";

export default function EarlyTreatmentSection({ data }: { data?: ServiceEarlyTreatment }) {
  if (!data?.title && !data?.paragraphs?.length) return null;

  return (
    <section className="mb-10 rounded-[22px] bg-[#ecfaf7] px-6 py-10 sm:px-10 lg:mb-16 lg:px-16 lg:py-14">
      {data.title && (
        <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
          {data.title}
        </h2>
      )}
      <div className="my-5 h-px bg-[#2b7175]/35" />
      <div className="space-y-5 text-sm leading-7 text-gray-700 lg:text-lg lg:leading-8">
        {data.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
