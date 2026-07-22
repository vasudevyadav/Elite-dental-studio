import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import { findService, services, type Service } from "@/components/services/serviceData";
import NearestClinic from "@/components/NearestClinic";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import Footer from "@/components/Footer";

type Props = { service: Service };

const steps = [
  ["Laser-assisted gum treatment", "Supports gum pocket care with greater precision."],
  ["Laser gingivectomy", "Removes or reshapes excess gum tissue where needed."],
  ["Laser gum depigmentation", "Reduces dark gum pigmentation in suitable cosmetic cases."],
  ["Laser frenectomy", "Releases a tight frenum for tongue tie or lip tie cases."],
  ["Laser-assisted soft tissue care", "Used for selected ulcers or soft tissue growths after diagnosis."],
];

const benefits = [
  "More precise soft tissue handling with less disruption to the area around it.",
  "Often less bleeding during the procedure compared to conventional methods.",
  "Reduced need for sutures in certain soft tissue procedures.",
  "Faster soft tissue recovery in selected cases.",
  "Better gum contour and appearance outcomes in cosmetic procedures.",
  "Lower risk of post-procedure infection in suitable cases.",
];

export default function ServiceDetailPage({ service }: Props) {
  const isLaser = service.slug === "laser-dentistry";
  const treatmentName = isLaser ? "Dental Laser Treatment" : service.title;
  return (
    <>
      <Head><title>{service.title} | Elite Dental Studio</title><meta name="description" content={`${service.title} consultation and treatment at Elite Dental Studio.`} /></Head>
      <Navbar />
      <main>
        <ServiceHero inner />
        <section className="relative min-h-[650px] overflow-hidden bg-[#2a686d] px-5 py-[85px] text-white sm:px-8 lg:px-[max(28px,calc((100vw-1500px)/2))]">
          <div className="relative z-2 w-full max-w-[735px] lg:w-1/2">
            <h1 className="m-0 text-[30px] font-extrabold leading-[1.3] sm:text-[36px] lg:text-[42px]">{treatmentName}<br />in Kochi, Calicut &amp; Kannur</h1>
            <div className="my-7 h-px bg-white/60" />
            <p className="mb-5 text-sm leading-[1.55]">If you are searching for the best {service.title.toLowerCase()} clinic near me, you want two things confirmed: what the treatment actually involves and whether it applies to your condition.</p>
            <p className="mb-5 text-sm leading-[1.55]">{isLaser ? "Dental laser treatment uses focused light energy to support selected gum and soft tissue procedures with greater precision. At Elite Dental Studio, our periodontics and laser specialist team offers dental laser treatment in Calicut, Kochi and Kannur, with each case planned after a proper clinical check." : `${service.title} uses modern dental techniques to provide accurate, comfortable care. At Elite Dental Studio, each case is planned after a proper clinical check.`}</p>
            <p className="mb-5 text-sm leading-[1.55]">{isLaser ? "Not every condition needs laser. Your dentist confirms whether it is the right approach for you before treatment begins." : "Not every condition needs the same approach. Your dentist confirms the right treatment for you before care begins."}</p>
          </div>
          <div className="absolute inset-0 z-1 mx-auto w-full max-w-[1700px]"><Image src="/service/services-inner.png" alt={`${service.title} procedure`} fill sizes="100vw" className="object-contain" /></div>
        </section>

        <section className="mx-auto max-w-[1450px] px-5 pb-5 pt-16 text-[#303535] sm:px-8 lg:px-[42px] lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-[65px]">
            <div className="relative min-h-[260px] overflow-hidden rounded-[17px] shadow-[4px_4px_0_#2a686d]"><Image src="/service/services-inner-1.png" alt={service.title} fill sizes="45vw" className="object-cover" /></div>
            <div><h2 className="m-0 text-[26px] font-extrabold leading-[1.2] text-[#2b7175] sm:text-[30px] lg:text-[35px]">What Is {treatmentName}?</h2><div className="my-5 h-px bg-[#777]" /><p className="text-sm leading-relaxed">{isLaser ? "Laser dentistry is a clinical technique that uses a focused beam of light energy to treat selected gum and soft tissue conditions in the mouth. The laser delivers controlled energy to a specific area, allowing the dentist to work with more precision than conventional soft tissue methods in suitable cases." : `${service.title} is a clinical dental treatment focused on restoring oral health, comfort and confidence. Our dentists use careful diagnosis and modern equipment to plan treatment around your individual needs.`}</p><p className="mt-4 text-sm leading-relaxed">{isLaser ? "This technique gives the treating dentist greater control over soft tissue work, which is why it is used in selected gum and cosmetic dental procedures at Elite Dental Studio." : "This approach gives the treating dentist greater control and helps produce predictable results in suitable cases."}</p></div>
          </div>

          <div className="procedures">
            <h2>Which Dental Procedures<br />Use {isLaser ? "Laser Support" : "This Treatment"}?</h2>
            <p>At Elite Dental Studio, support is used in these procedures:</p>
            <div className="procedure-layout">
              <div className="procedure-list left">{steps.slice(0, 3).map(([name, copy]) => <article key={name}><i>♢</i><div><h3>{isLaser ? name : name.replace("Laser", service.title)}</h3><p>{copy}</p></div></article>)}</div>
              <div className="doctor-cutout"><Image src="/service/services-inner-2.png" alt="Elite Dental Studio specialist" fill sizes="33vw" /></div>
              <div className="procedure-list">{steps.slice(3).map(([name, copy]) => <article key={name}><i>♢</i><div><h3>{isLaser ? name : name.replace("Laser", service.title)}</h3><p>{copy}</p></div></article>)}<strong>Each procedure is planned after your dentist confirms your condition and treatment goals.</strong></div>
            </div>
          </div>

          <section className="candidate-panel">
            <div><h2>Who Should Consider<br />{treatmentName}?</h2><p>Your dentist may recommend laser support if you have:</p><div className="rule dark" /><ul><li>Gum disease with deeper pockets needing precise cleaning.</li><li>Excess gum tissue covering teeth or affecting cleaning access.</li><li>Dark gum pigmentation you want addressed cosmetically.</li><li>A tight frenum causing tongue tie, lip tie or tooth gaps.</li><li>Mouth ulcers or soft tissue growths needing clinical care.</li><li>A gummy smile requiring gum line reshaping.</li></ul><b>Suitability is confirmed after a clinical examination and dental X-ray at our clinic.</b></div>
            <div className="candidate-photo"><Image src="/service/services-inner-3.png" alt={`${service.title} treatment examples`} fill sizes="40vw" /></div>
          </section>

          <div className="detail-two-col treatment-expect"><div className="detail-photo"><Image src="/service/services-inner-4.png" alt={`${service.title} treatment`} fill sizes="45vw" /></div><div><h2>What to Expect During and<br />After {service.title}?</h2><div className="rule dark" /><p>Most treatments are completed with your comfort in mind. Local anaesthesia may be used where needed so you remain comfortable throughout the procedure.</p><p>After your session, mild soreness can be normal and typically settles within a few days. Your dentist will explain what to expect for your specific treatment.</p></div></div>
          <div className="detail-two-col aftercare"><div><h2>Aftercare Following Your<br />Dental Procedure</h2><div className="rule dark" /><p>Your dentist gives you specific instructions based on your procedure. General guidance includes:</p><ul><li>Eat soft foods for the first two to three days.</li><li>Rinse gently with the solution your dentist recommends.</li><li>Avoid smoking during the healing period.</li><li>Attend your follow-up visit to check healing progress.</li></ul></div><div className="detail-photo"><Image src="/service/services-inner-5.png" alt={`${service.title} aftercare`} fill sizes="45vw" /></div></div>

          <section className="benefits">
            <h2>Benefits of<br />{treatmentName}</h2>
            <p>Where treatment is clinically suitable, it offers clear advantages:</p>
            <div className="benefit-wheel">
              <Image src="/service/services-inner-6.png" alt={`Benefits of ${service.title}`} fill sizes="75vw" />
              {benefits.map((benefit, index) => <span className={`benefit-copy benefit-copy-${index + 1}`} key={benefit}>{benefit}</span>)}
            </div>
          </section>
        </section>
        <NearestClinic />
        <DoctorsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <BookAppointmentSection />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: services.map(({ slug }) => ({ params: { slug } })), fallback: false });
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const service = findService(String(params?.slug));
  if (!service) return { notFound: true };
  return { props: { service } };
};
