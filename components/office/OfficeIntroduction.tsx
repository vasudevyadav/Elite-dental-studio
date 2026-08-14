/* eslint-disable @typescript-eslint/no-explicit-any */
const stats = [
  ["4", "Clinic locations"],
  ["15+", "Specialists"],
  ["100%", "MDS doctors"],
];

export default function OfficeIntroduction({ data }: { data?: Record<string, any> }) {
  const activeStats = data?.stats || stats.map(([value, label]) => ({ value, label }));
  return (
    <section className="bg-[#2a686d] px-5 py-8 text-white sm:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-9 sm:gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-16 lg:px-12 xl:gap-24">
        <div>
          <p className="text-sm font-bold tracking-[.16em] text-[#52e0d2] uppercase">
            {data?.eyebrow || "Designed around you"}
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-.035em] text-white sm:text-5xl">
            {data?.title || "Clinical excellence feels different here."}
          </h2>
        </div>
        <div className="border-t-2 border-[#4bd8ca] pt-7 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-9">
          <p className="text-base leading-8 text-white/85 sm:text-lg">
            {data?.description ||
              "Our dental offices bring specialist care, advanced technology and thoughtful hospitality together under one roof. From the moment you arrive, every space is planned to feel clear, comfortable and reassuring."}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/25 pt-7 min-[380px]:grid-cols-3 min-[380px]:gap-3 sm:gap-4">
            {activeStats.map(({ value, label }: { value: string; label: string }) => (
              <div key={label}>
                <strong className="block text-3xl text-[#55e0d3]">{value}</strong>
                <span className="mt-1 block text-xs leading-5 text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
