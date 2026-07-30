import Image from "next/image";

const guidance = [
  "Eat soft foods for the first two to three days.",
  "Rinse gently with the solution your dentist recommends.",
  "Avoid smoking during the healing period.",
  "Do not disturb the treated area with your tongue or fingers.",
  "Attend your follow-up visit so your dentist can check healing progress.",
];

export default function AftercareSection() {
  return (
    <section className="lg:mt-24 mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div>
        <h2 className="text-2xl font-bold leading-tight text-[#2b7175] lg:text-[40px]">Aftercare Following Your<br />Laser Procedure</h2>
        <div className="my-5 h-px bg-gray-500" />
        <p className="my-2 text-sm font-semibold leading-7 lg:text-lg lg:leading-8">The aftercare period after this treatment is straightforward. Your dentist at Elite Dental Studio gives you specific instructions based on your procedure. General guidance includes:</p>
        <ul className="my-5 grid gap-3 pl-[18px] text-gray-700">
          {guidance.map((item) => <li className="mt-2 list-disc text-sm font-medium lg:text-base" key={item}>{item}</li>)}
        </ul>
        <strong className="mt-6 block text-base font-semibold leading-[1.55]">Most patients find the recovery period manageable with simple care at home.</strong>
      </div>
      <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[500px] lg:min-h-[650px]">
        <Image src="/service/services-inner-5.png" alt="Dental laser aftercare" fill sizes="(max-width: 1024px) 90vw, 793px" className="object-cover" />
      </div>
    </section>
  );
}
