import Image from "next/image";

type TrustBadgesProps = {
  variant?: "header" | "content";
  className?: string;
};

export default function TrustBadges({ variant = "content", className = "" }: TrustBadgesProps) {
  const header = variant === "header";

  return (
    <div
      role="group"
      aria-label="Clinic awards and certification"
      className={`flex max-w-full min-w-0 items-center ${header ? "gap-2 sm:gap-3" : "gap-3"} ${className}`}
    >
      <Image
        src="/navbar/famdent-clinic-of-the-year.webp"
        alt="FAMDENT Excellence in Dentistry Awards — Clinic of the Year"
        width={960}
        height={347}
        sizes={
          header
            ? "(min-width: 1536px) 224px, (min-width: 1280px) 176px, (min-width: 640px) 224px, (min-width: 375px) 80px, 64px"
            : "(min-width: 640px) 224px, 176px"
        }
        className={
          header
            ? "h-auto w-16 max-w-full shrink-0 object-contain min-[375px]:w-20 sm:w-56 xl:w-44 2xl:w-56"
            : "h-auto w-44 min-w-0 shrink rounded-md object-contain sm:w-56"
        }
      />
      <Image
        src="/navbar/iso-9001-transparent.png"
        alt="ISO 9001 Certified"
        width={384}
        height={388}
        sizes={
          header
            ? "(min-width: 1536px) 80px, (min-width: 640px) 64px, (min-width: 375px) 32px, 28px"
            : "(min-width: 640px) 72px, 56px"
        }
        className={
          header
            ? "h-auto w-7 shrink-0 object-contain min-[375px]:w-8 sm:w-16 2xl:w-20"
            : "h-auto w-14 shrink-0 object-contain sm:w-[72px]"
        }
      />
    </div>
  );
}
