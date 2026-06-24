import Image from "next/image";

const stats = [
  { icon: "/home/count-icon-1.png", count: "10000+", label: "Dental Implant" },
  { icon: "/home/count-icon-2.png", count: "5000+", label: "Invisible Aligners" },
  { icon: "/home/count-icon-3.png", count: "8000+", label: "Invisalign" },
];

export default function StatsBar() {
  return (
    <div className="w-full bg-[#2a686d] py-7 lg:py-9">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 items-center gap-3">
          {stats.map(({ icon, count, label }, i) => (
            <div key={i} className="flex items-center justify-center gap-3 lg:gap-5">
              <div className="relative h-9 w-9 shrink-0 max-[420px]:hidden sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                <Image
                  src={icon}
                  alt={label}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white">
                <div className="text-lg font-black leading-none tracking-tight sm:text-3xl lg:text-4xl">
                  {count}
                </div>
                <div className="mt-1 text-[10px] font-semibold sm:text-sm lg:text-base">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
