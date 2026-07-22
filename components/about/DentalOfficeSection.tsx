import Image from "next/image";

const promises = [
  "Accurately assess your dental condition",
  "Educate you about tooth replacement and other options",
  "Care for your overall well-being",
  "Provide safety, comfort and security in a warm and welcoming environment",
  "Help you afford the treatment you want and deserve",
  "Provide supportive hygiene care following treatment to help you maintain optimum results",
];

export default function DentalOfficeSection() {
  return (
    <section className="bg-dent-panel px-5 pb-14 pt-10 text-[#344f51] sm:px-8 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[18px] bg-[#f5fbfa] p-6 shadow-[0_8px_22px_rgba(9,57,60,.3)] sm:p-9 lg:min-h-[365px] lg:p-12 lg:pr-[36%]">
          <h1 className="text-xl font-black uppercase text-[#29666b] sm:text-2xl">About Our Dental Office</h1>
          <p className="mt-5 text-sm lg:text-base leading-6">Elite Dental Studio is a distinctive dental clinic that keeps up with time and technology in treating dental ailments. Care and compassion are the two buzzwords that typify treatment at Elite Dental Studio. We give ears to the patients and understand their woes.</p>
          <p className="mt-4 text-sm lg:text-base leading-6">They are the heart of our practice, so it makes sense that we go out of the way to provide comfortable treatment operatories and waiting lounges for them with best &amp; modern amenities that you would expect from a premier dental clinic. We take extra care and pleasure in explaining the dental condition of each patient and how best we are going to treat them with an outline of our treatment methods.</p>
          <p className="mt-5 text-sm lg:text-base font-semibold italic leading-6">First communication with our team to enjoying your new smile with family and friends, we will make you feel like part of our family. Our primary responsibilities are to:</p>
          <Image src="/about/about-ab.png" alt="Elite Dental Studio interior" width={546} height={661} className="mt-7 w-full rounded-[15px] shadow-[0_8px_18px_rgba(15,58,61,.28)] lg:absolute lg:right-7 lg:-top-[60px] lg:mt-0 lg:w-[30%] xl:right-8" />
        </div>
        <div className="mt-20 grid items-center gap-8 px-2 lg:grid-cols-[.38fr_.62fr] lg:px-7">
          <Image src="/about/about-2.png" alt="Elite Dental Studio treatment room" width={575} height={292} className="w-full rounded-[14px] object-cover" />
          <ul className="space-y-3 text-sm lg:text-base font-medium italic text-white">{promises.map((promise) => <li key={promise}>• {promise}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
