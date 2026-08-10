import Image from "next/image";

const promises = [
  "Free Dental Consultation – No consultation charges for every patient.",
  "Free Full Mouth Examination – Comprehensive oral health assessment before any treatment.",
  "Free Digital OPG Scan – Full-mouth digital X-ray at no extra cost.",
  "Free CBCT Scan (If Required) – Advanced 3D CBCT imaging provided free when clinically indicated.",
  "All Dental Specialists Available Under One Roof – MDS specialists from every department are available across our clinics for comprehensive care.",
  "Digital X-Rays Explained Before Treatment – Every scan is reviewed and clearly explained before your treatment plan is created.",
  "Honest, Ethical Treatment Recommendations – We advise treatment only when it is truly necessary.",
  "Easy Payment Options – EMI financing, insurance assistance, and 15+ payment methods available.",
  "Consistent Quality Across All Clinics – The same high standard of dental care in Calicut, Kochi, Kannur, and Coimbatore.",
  "One of the Most Affordable In-House Clear Aligner Treatments – Premium quality, personalised care, and exceptional value.",
];

export default function DentalOfficeSection() {
  return (
    <section
      id="facilities"
      className="bg-dent-panel px-5 pt-10 pb-14 text-[#344f51] sm:px-8 lg:pt-24 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[18px] bg-[#f5fbfa] p-6 shadow-[0_8px_22px_rgba(9,57,60,.3)] sm:p-9 lg:min-h-[365px] lg:p-12 lg:pr-[36%]">
          <h1 className="text-xl font-black text-[#29666b] uppercase sm:text-2xl">
            About Elite Dental Studio
          </h1>
          <p className="mt-5 text-sm leading-6 lg:text-base">
            Elite Dental Studio was established in Calicut in 2020 with a clear mission: to change
            the way patients experience dental care. The clinic was founded after recognising a
            common problem—many patients had no way of knowing whether the dentist treating them had
            specialised training for their specific dental concern.
          </p>
          <p className="mt-4 text-sm leading-6 lg:text-base">
            A child with a milk tooth problem could be treated by the wrong specialist, while a
            complex root canal procedure might be performed by a general dentist instead of an
            experienced endodontist. Elite Dental Studio was built on a simple but powerful
            principle: every patient is treated by an MDS-qualified specialist in the exact field
            they need.
          </p>
          <p className="mt-4 text-sm leading-6 lg:text-base">
            Today, Elite Dental Studio has expanded to four advanced dental clinics across Calicut,
            Kochi, Kannur, and Coimbatore, while staying true to this specialist-first approach.
            Every treatment is delivered by dedicated experts using modern technology,
            evidence-based dentistry, and personalised care.
          </p>
          <p className="mt-4 text-sm leading-6 lg:text-base">
            Committed to the highest standards of quality and patient safety, Elite Dental Studio is
            ISO 9001 certified and has been recognised with the Famdent Excellence in Dentistry
            Award for clinical innovation and outstanding patient care. With a team of highly
            qualified dental specialists, the clinic continues to set new benchmarks in
            comprehensive, ethical, and specialised dental care in South India.
          </p>
          <Image
            src="/about/about-ab.png"
            alt="Elite Dental Studio interior"
            width={546}
            height={661}
            className="mt-7 w-full rounded-[15px] shadow-[0_8px_18px_rgba(15,58,61,.28)] lg:absolute lg:-top-[60px] lg:right-7 lg:mt-0 lg:w-[30%] xl:right-8"
          />
        </div>
        <div className="mt-20 grid items-center gap-8 px-2 lg:grid-cols-[.38fr_.62fr] lg:px-7">
          <Image
            src="/about/about-2.png"
            alt="Elite Dental Studio treatment room"
            width={575}
            height={292}
            className="w-full rounded-[14px] object-cover"
          />
          <ul className="space-y-3 text-sm font-medium text-white italic lg:text-base">
            {promises.map((promise) => (
              <li key={promise}>• {promise}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
