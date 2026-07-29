import Image from "next/image";
import type { Service } from "./serviceData";

const procedures = [
  ["Laser-assisted gum treatment", "Supports gum pocket care with greater precision."],
  ["Laser gingivectomy", "Removes or reshapes excess gum tissue where needed."],
  ["Laser gum depigmentation", "Reduces dark gum pigmentation in suitable cosmetic cases."],
  ["Laser frenectomy", "Releases a tight frenum for tongue tie or lip tie cases."],
  ["Laser-assisted soft tissue care", "Used for selected ulcers or soft tissue growths after diagnosis."],
];

type Props = { service: Service; isLaser: boolean };

function ProcedureItem({ name, copy, service, isLaser }: { name: string; copy: string; service: Service; isLaser: boolean }) {
  return (
    <article className="flex items-start gap-[18px]">
      <span className="grid shrink-0 place-items-center rounded-lg bg-[#25d0c0]">
        <Image src={service.icon} alt="" width={55} height={55} className="object-contain" />
      </span>
      <div>
        <h3 className="text-base font-semibold leading-snug text-[#2b7175] lg:text-lg">
          {isLaser ? name : name.replace("Laser", service.title)}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">{copy}</p>
      </div>
    </article>
  );
}

export default function ProceduresSection({ service, isLaser }: Props) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-xl font-bold leading-tight text-[#2b7175] lg:text-[40px]">
        Which Dental Procedures
        <br />
        Use {isLaser ? "Laser Support" : "This Treatment"}?
      </h2>
      <p className="mt-2 text-sm font-medium leading-7 lg:text-[23px] lg:leading-8">
        At Elite Dental Studio, support is used in these procedures:
      </p>

      <div className="mt-12 grid items-center gap-8 text-left lg:grid-cols-3 lg:gap-0">
        <div className="order-2 grid gap-7 lg:order-1 lg:gap-28">
          {procedures.slice(0, 3).map(([name, copy]) => (
            <ProcedureItem key={name} name={name} copy={copy} service={service} isLaser={isLaser} />
          ))}
        </div>

        <div className="relative order-1 min-h-[350px] lg:order-2 lg:min-h-[550px]">
          <Image src="/service/services-inner-2.png" alt="Elite Dental Studio specialist" fill sizes="(max-width: 1024px) 90vw, 560px" className="object-contain object-bottom" />
        </div>

        <div className="order-3 grid gap-8 lg:gap-14 lg:pl-12">
          {procedures.slice(3).map(([name, copy]) => (
            <ProcedureItem key={name} name={name} copy={copy} service={service} isLaser={isLaser} />
          ))}
          <strong className="max-w-sm rounded-lg bg-[#25d0c0] px-6 py-3 text-lg font-normal leading-7 text-white">
            Each procedure is planned after your dentist confirms your condition and treatment goals.
          </strong>
        </div>
      </div>
    </section>
  );
}
