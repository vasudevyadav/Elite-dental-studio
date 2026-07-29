import Image from "next/image";

const benefits = [
  "More precise soft tissue handling with less disruption to the area around it.",
  "Often less bleeding during the procedure compared to conventional methods.",
  "Reduced need for sutures in certain soft tissue procedures.",
  "Faster soft tissue recovery in selected cases.",
  "Better gum contour and appearance outcomes in cosmetic procedures.",
  "Lower risk of post-procedure infection in suitable cases.",
];

const positions = [
  "left-[32%] top-[20%]", "left-[13.5%] top-[42%]", "left-[32.5%] top-[64%]",
  "left-[68%] top-[20%]", "left-[87%] top-[42%]", "left-[68%] top-[64%]",
];

export default function BenefitsSection({ treatmentName }: { treatmentName: string }) {
  return (
    <section className="pb-12 pt-20 text-center">
      <h2 className="text-2xl font-bold leading-tight text-[#2b7175] lg:text-[40px]">Benefits of<br />{treatmentName}</h2>
      <p className="mt-5 text-sm font-medium leading-7 lg:text-lg lg:leading-8">Where laser treatment is clinically suitable, it offers clear advantages over conventional <br /> soft tissue methods:</p>
      <div className="relative mx-auto mt-8 aspect-[1605/865] w-full max-w-[1605px]">
        <Image src="/service/services-inner-6.png" alt={`Benefits of ${treatmentName}`} fill sizes="100vw" className="object-contain" />
        {benefits.map((benefit, index) => (
          <span className={`absolute z-10 w-[13.5%] -translate-x-1/2 -translate-y-1/2 text-[clamp(9px,.78vw,13px)] leading-[1.35] text-[#454b4b] ${positions[index]}`} key={benefit}>{benefit}</span>
        ))}
      </div>
    </section>
  );
}
