import Image from "next/image";

export default function TreatmentExpectationSection() {
  return (
    <section className="lg:mt-24 mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className="relative lg:min-h-[400px] min-h-[300px] overflow-hidden rounded-2xl ">
        <Image src="/service/services-inner-4.png" alt="Dental laser treatment" fill sizes="(max-width: 1024px) 90vw, 757px" className="object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold leading-tight text-[#2b7175] lg:text-[40px]">What to Expect During and<br />After Laser Treatment?</h2>
        <div className="my-5 h-px bg-gray-500" />
        <div className="space-y-5 text-sm font-medium text-gray-500 leading-7 lg:text-base lg:leading-8">
          <p>Most laser procedures at Elite Dental Studio are completed in a single sitting of 20 to 60 minutes. Local anaesthesia or numbing gel is used where needed so you are comfortable throughout the procedure.</p>
          <p>After your session, mild soreness in the treated area is normal and typically settles within a few days. Most patients return to their regular routine the same day or the following day depending on the procedure.</p>
        </div>
      </div>
    </section>
  );
}
