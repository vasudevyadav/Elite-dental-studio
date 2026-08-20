import type { ServiceComparisonTable } from "@/lib/servicesApi";

export default function ComparisonTableSection({ data }: { data?: ServiceComparisonTable }) {
  if (!data?.rows?.length) return null;

  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl leading-tight font-bold text-[#2b7175] lg:text-[40px]">
          {data.title}
        </h2>
        {data.description && (
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-gray-600 lg:text-lg lg:leading-8">
            {data.description}
          </p>
        )}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[#b8dfdc] bg-white shadow-[0_12px_35px_rgba(31,105,108,0.08)]">
        <div className="hidden grid-cols-2 bg-[#2b7175] px-6 py-4 text-base font-bold text-white sm:grid">
          <span>Situation</span>
          <span>Recommended approach</span>
        </div>
        {data.rows.map((row) => (
          <div
            key={`${row.situation}-${row.approach}`}
            className="grid gap-2 border-t border-[#dbe9e7] px-5 py-4 first:border-t-0 sm:grid-cols-2 sm:gap-8 sm:px-6"
          >
            <strong className="text-sm leading-6 text-[#2b7175] sm:text-base">
              {row.situation}
            </strong>
            <span className="text-sm leading-6 text-gray-600 sm:text-base">{row.approach}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
