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
  "More precise treatment focused on the affected area.",
  "Less discomfort during suitable dental procedures.",
  "Reduced need for extensive intervention in selected cases.",
  "Faster recovery with a dentist-led aftercare plan.",
  "Better appearance and natural-looking treatment results.",
  "Lower risk of complications with careful clinical planning.",
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
        <section className="service-detail-banner">
          <div className="service-detail-copy">
            <h1>{treatmentName}<br />in Kochi, Calicut &amp; Kannur</h1>
            <div className="rule" />
            <p>If you are searching for the best {service.title.toLowerCase()} clinic near me, you want two things confirmed: what the treatment actually involves and whether it applies to your condition.</p>
            <p>{service.title} uses modern dental techniques to provide accurate, comfortable care. At Elite Dental Studio, each case is planned after a proper clinical check.</p>
            <p>Not every condition needs the same approach. Your dentist confirms the right treatment for you before care begins.</p>
          </div>
          <div className="detail-banner-image"><Image src={isLaser ? "/service/services-inner.png" : service.image} alt={`${service.title} procedure`} fill sizes="50vw" /></div>
        </section>

        <section className="detail-content">
          <div className="detail-two-col">
            <div className="detail-photo"><Image src={isLaser ? "/service/services-inner-1.png" : service.image} alt={service.title} fill sizes="45vw" /></div>
            <div><h2>What Is {treatmentName}?</h2><div className="rule dark" /><p>{service.title} is a clinical dental treatment focused on restoring oral health, comfort and confidence. Our dentists use careful diagnosis and modern equipment to plan treatment around your individual needs.</p><p>This approach gives the treating dentist greater control and helps produce predictable results in suitable cases.</p></div>
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
            <div><h2>Who Should Consider<br />{treatmentName}?</h2><p>Your dentist may recommend this treatment if you have:</p><div className="rule dark" /><ul><li>A dental condition needing precise clinical care.</li><li>Discomfort affecting normal eating or cleaning.</li><li>Cosmetic concerns you want addressed.</li><li>A condition confirmed during dental examination.</li><li>A need for specialist-led treatment planning.</li></ul><b>Suitability is confirmed after a clinical examination and dental X-ray at our clinic.</b></div>
            <div className="candidate-photo"><Image src={isLaser ? "/service/services-inner-3.png" : service.image} alt={`${service.title} treatment examples`} fill sizes="40vw" /></div>
          </section>

          <div className="detail-two-col treatment-expect"><div className="detail-photo"><Image src={isLaser ? "/service/services-inner-4.png" : service.image} alt={`${service.title} treatment`} fill sizes="45vw" /></div><div><h2>What to Expect During and<br />After {service.title}?</h2><div className="rule dark" /><p>Most treatments are completed with your comfort in mind. Local anaesthesia may be used where needed so you remain comfortable throughout the procedure.</p><p>After your session, mild soreness can be normal and typically settles within a few days. Your dentist will explain what to expect for your specific treatment.</p></div></div>
          <div className="detail-two-col aftercare"><div><h2>Aftercare Following Your<br />Dental Procedure</h2><div className="rule dark" /><p>Your dentist gives you specific instructions based on your procedure. General guidance includes:</p><ul><li>Eat soft foods for the first two to three days.</li><li>Rinse gently with the solution your dentist recommends.</li><li>Avoid smoking during the healing period.</li><li>Attend your follow-up visit to check healing progress.</li></ul></div><div className="detail-photo"><Image src={isLaser ? "/service/services-inner-5.png" : service.image} alt={`${service.title} aftercare`} fill sizes="45vw" /></div></div>

          <section className="benefits">
            <h2>Benefits of<br />{treatmentName}</h2>
            <p>Where treatment is clinically suitable, it offers clear advantages:</p>
            <div className="benefit-diagram">
              {benefits.slice(0, 3).map((benefit, index) => <article className={`benefit-item benefit-${index + 1}`} key={benefit}><b>{index + 1}</b><span>{benefit}</span></article>)}
              <div className="benefit-center"><span>♢</span><strong>{service.title}</strong></div>
              {benefits.slice(3).map((benefit, index) => <article className={`benefit-item benefit-${index + 4}`} key={benefit}><b>{index + 4}</b><span>{benefit}</span></article>)}
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
