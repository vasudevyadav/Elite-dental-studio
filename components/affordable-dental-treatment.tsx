const specialities = [
  "Pediatric Dentistry — Cavity checks, sealants and fluoride treatment for children, planned around their exact age and tooth count, covering milk teeth, permanent teeth and everything in between",
  "Prosthodontics — Crowns, bridges, dentures and implants that replace one tooth or a full arch, fitted to your bite and the teeth around them",
  "Periodontics — Deep cleaning and gum surgery for bleeding gums, gum infection and the bone loss that makes teeth shift or loosen",
  "Orthodontics — Braces or aligners that move crooked, crowded or gapped teeth into a corrected bite over a planned series of visits",
  "Invisalign Treatment — Clear removable trays changed every one to two weeks that shift teeth gradually into position without metal wires or brackets",
  "Endodontics — Root canal treatment that removes infected tissue from inside a tooth so it stays in your mouth instead of coming out",
  "Laser Dentistry — Focused laser treatment for gum disease, ulcers, soft tissue overgrowth and gum infection, with less bleeding than a scalpel and faster recovery",
  "Maxillofacial Orthognathic Surgery — Surgical correction of jaw position, facial bone structure and bite misalignment when braces or aligners cannot do the job",
  "Oral Medicine and Radiology — Digital X-rays and clinical examination that locate the exact source of tooth pain, jaw pain, swelling or oral lesions before treatment starts",
  "Restorative Dentistry — Fillings that rebuild a tooth worn by decay, a chip or a fracture, colour matched to your natural shade",
  "Cosmetic Treatments — Whitening, veneers and reshaping for teeth that are healthy but not how you want them to look",
];

const clinicAreas = [
  "Our dental clinic in Calicut draws patients from Nadakkave, West Hill, Karaparamba, Feroke, Mukkam, Koyilandy, Beypore and Kozhikode.",
  "The dental clinic in Kochi serves Pallimukku, Panampilly Nagar, Ravipuram, Perumanoor and Maradu.",
  "The dental clinic in Kannur sees patients from Talap, Pallikkunnu, South Bazar, Payyambalam and wider Kannur city.",
  "The dental clinic in Coimbatore sees patients from R.S. Puram and nearby areas for specialist treatments local general practices do not provide.",
];

export default function AffordableDentalTreatment() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-14">
      <div className="rounded-[28px] bg-[#f0faf8] px-6 py-9 sm:px-10 lg:px-14 lg:py-12">
        <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-[#29666b] sm:text-[38px]">Elite Dental Studio: Specialist Dental Care Across Calicut, Kochi, Kannur and Coimbatore</h2>
        <div className="mt-6 space-y-5 text-sm leading-[1.8] text-[#4a5555] lg:text-[17px]">
          <p>Elite Dental Studio opened in Calicut in 2020 with a 4.8 star Google rating earned across 6 years and four ISO 9001 certified clinics in Calicut, Kochi, Kannur and Coimbatore. Over 10,000 dental implants placed. Over 15,000 aligner treatments completed. Over 8,000 Invisalign cases finished with a 98% treatment completion rate. Every one of those cases started with a digital X-ray and a full mouth examination before a plan was written.</p>
          <p className="font-semibold text-[#29666b]">11 specialties. Each one handled by the team that trained for it, not reassigned to whoever is free:</p>
          <ul className="grid gap-3 lg:grid-cols-2 lg:gap-x-10">
            {specialities.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dent-accent" /><span>{item}</span></li>)}
          </ul>
          <p>90% of Elite Dental Studio&apos;s clinical leadership is women. The Famdent Excellence in Dentistry Award recognised the clinic for clinical innovation and patient care, making Elite Dental Studio one of the few dental chains in Kerala with national industry recognition for its clinical standards.</p>
          <ul className="space-y-3">
            {clinicAreas.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dent-accent" /><span>{item}</span></li>)}
          </ul>
          <p className="font-semibold text-[#29666b]">The best dental clinic in Calicut gives you a diagnosis before it gives you a bill. Elite Dental Studio has done that since 2020. Book a consultation at the dental clinic in Calicut, Kochi, Kannur and Coimbatore now.</p>
        </div>
      </div>
    </section>
  );
}
