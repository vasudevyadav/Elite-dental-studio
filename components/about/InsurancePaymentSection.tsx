import Image from "next/image";

export default function InsurancePaymentSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.48fr_.52fr]">
        <Image src="/about/about-3.png" alt="Dentist explaining treatment benefits to a patient" width={836} height={856} className="w-full rounded-[24px] shadow-[0_10px_24px_rgba(31,91,94,.18)]" />
        <div>
          <h2 className="text-2xl font-black uppercase text-[#29666b] sm:text-3xl">Insurance &amp; Payment</h2>
          <h3 className="mt-3 text-lg font-bold text-[#29666b] lg:text-xl">Convenient Payment Options and Insurance-Friendly Dental Care</h3>
          <p className="mt-5 text-sm lg:text-[15px] leading-5 text-[#58696a]">Elite Dental Studio offers a range of convenient payment options to make high-quality dental care accessible for every patient. We accept cash, major credit cards, debit cards, and UPI payments across all our clinics.</p>
          <p className="mt-4 text-sm lg:text-[15px] leading-5 text-[#58696a]">For patients seeking flexible payment solutions, EMI financing is also available, allowing you to begin your treatment without unnecessary financial stress.</p>
          <p className="mt-4 text-sm lg:text-[15px] leading-5 text-[#58696a]">We also welcome international patients, particularly those visiting from GCC countries. Detailed treatment bills and documentation can be provided to support eligible dental insurance reimbursement claims, making the process as smooth as possible.</p>
          <p className="mt-4 text-sm lg:text-[15px] leading-5 text-[#58696a]">With transparent billing, flexible payment options, and insurance-friendly documentation, Elite Dental Studio is a trusted choice for patients seeking quality dental care in Kerala, whether they are local residents, NRIs, or visiting from the UAE, Saudi Arabia, Qatar, Kuwait, Oman, or Bahrain.</p>
          <Image src="/about/payment.png" alt="Accepted payment methods" width={950} height={450} className="mt-7 w-full !h-[350px] object-cover rounded-[18px] bg-[#e8f8f6] p-3 shadow-[0_8px_20px_rgba(25,90,93,.12)]" />
        </div>
      </div>
    </section>
  );
}
