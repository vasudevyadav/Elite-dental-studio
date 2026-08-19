import Link from "next/link";
import SitePage from "@/components/SitePage";

export default function ThankYouPage() {
  return (
    <SitePage
      title="Thank You | Elite Dental Studio"
      description="Thank you for reaching out to Elite Dental Studio. Our team will contact you shortly."
    >
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-24 text-center sm:py-32">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#e4f7f4] text-3xl text-[#188e84]">
          ✓
        </span>
        <h1 className="text-3xl font-semibold text-[#174e53] sm:text-4xl">
          Thank you for reaching out!
        </h1>
        <p className="text-base leading-7 text-[#526568]">
          Your request has been received. Our care team will get in touch shortly to confirm your
          appointment.
        </p>
        <Link
          href="/"
          className="smooth-hover button-hover mt-2 inline-flex items-center justify-center rounded-xl bg-[#25bfae] px-6 py-3 text-sm font-bold text-white hover:bg-[#176b70]"
        >
          Back to Home
        </Link>
      </section>
    </SitePage>
  );
}
