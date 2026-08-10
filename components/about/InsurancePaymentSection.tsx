import Image from "next/image";

const paymentProviders = [
  { name: "Visa", href: "https://www.visa.co.in/" },
  { name: "Mastercard", href: "https://www.mastercard.co.in/" },
  { name: "Maestro", href: "https://www.mastercard.co.in/en-in/personal/find-a-card/maestro.html" },
  { name: "American Express", href: "https://www.americanexpress.com/en-in/" },
  { name: "Visa Electron", href: "https://www.visa.co.in/" },
  { name: "Cirrus", href: "https://www.mastercard.co.in/" },
  { name: "Google Pay", href: "https://pay.google.com/intl/en_in/about/" },
  { name: "PhonePe", href: "https://www.phonepe.com/" },
  { name: "UPI", href: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { name: "Paytm", href: "https://paytm.com/" },
  { name: "Amazon Pay", href: "https://www.amazon.in/amazonpay/home" },
  { name: "PayPal", href: "https://www.paypal.com/in/home" },
  { name: "Bajaj Finserv", href: "https://www.bajajfinserv.in/" },
  { name: "GMoney", href: "https://www.gmoney.in/" },
  { name: "Razorpay", href: "https://razorpay.com/" },
];

export default function InsurancePaymentSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.48fr_.52fr]">
        <Image
          src="/about/about-3.png"
          alt="Dentist explaining treatment benefits to a patient"
          width={836}
          height={856}
          className="w-full rounded-[24px] shadow-[0_10px_24px_rgba(31,91,94,.18)]"
        />
        <div>
          <h2 className="text-2xl font-black text-[#29666b] uppercase sm:text-3xl">
            Insurance &amp; Payment
          </h2>
          <h3 className="mt-3 text-lg font-bold text-[#29666b] lg:text-xl">
            Convenient Payment Options and Insurance-Friendly Dental Care
          </h3>
          <p className="mt-5 text-sm leading-5 text-[#58696a] lg:text-[15px]">
            Elite Dental Studio offers a range of convenient payment options to make high-quality
            dental care accessible for every patient. We accept cash, major credit cards, debit
            cards, and UPI payments across all our clinics.
          </p>
          <p className="mt-4 text-sm leading-5 text-[#58696a] lg:text-[15px]">
            For patients seeking flexible payment solutions, EMI financing is also available,
            allowing you to begin your treatment without unnecessary financial stress.
          </p>
          <p className="mt-4 text-sm leading-5 text-[#58696a] lg:text-[15px]">
            We also welcome international patients, particularly those visiting from GCC countries.
            Detailed treatment bills and documentation can be provided to support eligible dental
            insurance reimbursement claims, making the process as smooth as possible.
          </p>
          <p className="mt-4 text-sm leading-5 text-[#58696a] lg:text-[15px]">
            With transparent billing, flexible payment options, and insurance-friendly
            documentation, Elite Dental Studio is a trusted choice for patients seeking quality
            dental care in Kerala, whether they are local residents, NRIs, or visiting from the UAE,
            Saudi Arabia, Qatar, Kuwait, Oman, or Bahrain.
          </p>
          <div className="relative mt-7 overflow-hidden rounded-[18px] bg-[#e8f8f6] p-3 shadow-[0_8px_20px_rgba(25,90,93,.12)]">
            <Image
              src="/about/payment.png"
              alt="Accepted payment methods including cards, UPI, wallets and financing"
              width={950}
              height={345}
              className="h-auto w-full"
            />
            <div
              className="absolute inset-3 grid grid-cols-5 grid-rows-3 gap-[1.5%]"
              aria-label="Payment provider links"
            >
              {paymentProviders.map((provider) => (
                <a
                  key={provider.name}
                  href={provider.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${provider.name}`}
                  title={provider.name}
                  className="rounded-[12px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/90"
                >
                  <span className="sr-only">{provider.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
