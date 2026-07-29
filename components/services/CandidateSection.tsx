import Image from "next/image";

const candidates = [
  "Gum disease with deeper pockets needing precise cleaning.",
  "Excess gum tissue covering teeth or affecting cleaning access.",
  "Dark gum pigmentation you want addressed cosmetically.",
  "A tight frenum causing tongue tie, lip tie or tooth gaps.",
  "Mouth ulcers or soft tissue growths needing clinical care.",
  "A gummy smile requiring gum line reshaping.",
];

export default function CandidateSection({ treatmentName }: { treatmentName: string }) {
  return (
    <section className="grid items-center gap-6 rounded-[22px] bg-[#ecfaf7] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(520px,600px)] lg:p-14">
      <div>
        <h2 className="text-2xl font-bold leading-tight text-[#2b7175] lg:text-[40px]">Who Should Consider<br />{treatmentName}?</h2>
        <p className="mt-5 text-sm font-medium leading-7 lg:text-[23px] lg:leading-8">Your dentist may recommend laser support if you have:</p>
        <div className="my-5 h-px bg-gray-500" />
        <ul className="grid gap-[14px] pl-[18px] lg:gap-[10px]">
          {candidates.map((item) => <li className="list-disc text-sm font-medium leading-7 lg:text-lg lg:leading-8" key={item}>{item}</li>)}
        </ul>
        <strong className="mt-7 block text-lg font-semibold italic leading-[1.55]">Suitability is confirmed after a clinical examination and dental X-ray at our clinic.</strong>
      </div>
      <div className="relative min-h-[550px]">
        <Image src="/service/services-inner-3.png" alt={`${treatmentName} treatment examples`} fill sizes="(max-width: 1024px) 90vw, 760px" className="object-contain" />
      </div>
    </section>
  );
}
