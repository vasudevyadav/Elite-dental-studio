import Image from "next/image";

export default function InsurancePaymentSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.48fr_.52fr]">
        <Image src="/about/about-3.png" alt="Dentist explaining treatment benefits to a patient" width={836} height={856} className="w-full rounded-[24px] shadow-[0_10px_24px_rgba(31,91,94,.18)]" />
        <div>
          <h2 className="text-2xl font-black uppercase text-[#29666b] sm:text-3xl">Insurance and Payment</h2>
          <p className="mt-5 text-sm lg:text-base leading-6 text-[#58696a]">We Accept all modes of payments including Cash, Credit/Debit Cards, Google Pay, UPI Payment, Razorpay Payment Gateway and EMI options are also available.</p>
          <p className="mt-4 text-sm lg:text-base leading-6 text-[#58696a]">Bills will be provided for Insurance Claims to be done in GCC countries.</p>
          <Image src="/about/payment.png" alt="Accepted payment methods" width={950} height={450} className="mt-7 w-full !h-[350px] object-cover rounded-[18px] bg-[#e8f8f6] p-3 shadow-[0_8px_20px_rgba(25,90,93,.12)]" />
        </div>
      </div>
    </section>
  );
}
