// Hand-curated JSON-LD (Dentist + FAQPage) for the 4 main clinic pages.
// Only applied on the exact clinic slug (e.g. /kannur), not on SEO-alias
// location pages (e.g. /best-dentist-in-coimbatore), since these reference
// each clinic's canonical URL directly.
export const locationStructuredData: Record<string, Record<string, unknown>[]> = {
  kannur: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://elitedentalstudio.co.in/kannur/#dentist",
      name: "Elite Dental Studio Kannur",
      url: "https://elitedentalstudio.co.in/kannur/",
      logo: "https://elitedentalstudio.co.in/wp-content/uploads/2022/12/Elite-Dental-Studio-Logo.png",
      image:
        "https://elitedentalstudio.co.in/wp-content/uploads/2022/12/Elite-Dental-Studio-Logo.png",
      description:
        "Best dental clinic in Kannur offering comprehensive dental care including implants, orthodontics, cosmetic dentistry, pediatric dentistry, and more.",
      telephone: "+919645874777",
      email: "elitedentalstudioreception@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nyma Tower, opposite Koyili Hospital, Talap",
        addressLocality: "Kannur",
        addressRegion: "Kerala",
        postalCode: "670002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.8745",
        longitude: "75.3704",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/elitedentalstudio1",
        "https://www.instagram.com/elitedental_studio/",
        "https://maps.app.goo.gl/87myjWP7xWiPiDfaA",
      ],
      hasMap: "https://maps.app.goo.gl/87myjWP7xWiPiDfaA",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: "Dentistry",
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Orthodontics" },
        { "@type": "MedicalProcedure", name: "Invisalign" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
        { "@type": "MedicalProcedure", name: "Clear Aligners" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the Dental Clinic in Kannur Open on Sunday?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our dental clinic in Kannur is open on Sundays from 10:00 AM to 7:00 PM.",
          },
        },
        {
          "@type": "Question",
          name: "What services does the Kannur dental clinic offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Kannur dental clinic offers general dentistry, preventive care, cosmetic dentistry, dental implants, orthodontics, oral surgery, pediatric dentistry, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book an online appointment for your clinic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can book an online appointment through our website or by contacting us directly.",
          },
        },
        {
          "@type": "Question",
          name: "What are the General Dental Checkup Charges in Kannur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Charges vary depending on services required. Contact our clinic directly or visit us for accurate pricing information.",
          },
        },
      ],
    },
  ],
  kochi: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://elitedentalstudio.co.in/kochi/#dentist",
      name: "Elite Dental Studio Kochi",
      url: "https://elitedentalstudio.co.in/kochi/",
      logo: "https://elitedentalstudio.co.in/wp-content/uploads/2022/12/Elite-Dental-Studio-Logo.png",
      image:
        "https://elitedentalstudio.co.in/wp-content/uploads/2023/01/Elite_Dental_Clinic_Kochi_01.webp",
      description:
        "Best dental clinic in Kochi at Panampilly Nagar offering comprehensive dental care including implants, orthodontics, Invisalign, cosmetic dentistry, pediatric dentistry, root canal, and more.",
      telephone: "+919567124888",
      email: "elitedentalkochireception@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5/981 A, Main Avenue Road, Panampilly Nagar",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682036",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "9.9658",
        longitude: "76.2986",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+914844024888",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
      sameAs: [
        "https://www.facebook.com/elitedentalstudio1",
        "https://www.instagram.com/elitedental_studio/",
        "https://www.youtube.com/channel/UCOfybkaXV4UoBAE0bjGIkVQ",
        "https://goo.gl/maps/4bCqLAUVMzxBc9z98",
      ],
      hasMap: "https://maps.app.goo.gl/DGoTZh4s7pgX7Tf79",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: "Dentistry",
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Clear Aligners" },
        { "@type": "MedicalProcedure", name: "Orthodontics" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
        { "@type": "MedicalProcedure", name: "Periodontics" },
        { "@type": "MedicalProcedure", name: "Prosthodontics" },
        { "@type": "MedicalProcedure", name: "Maxillofacial & Orthognathic Surgery" },
        { "@type": "MedicalProcedure", name: "Oral Medicine and Radiology" },
        { "@type": "MedicalProcedure", name: "Endodontics" },
        { "@type": "MedicalProcedure", name: "Restorative Dentistry" },
        { "@type": "MedicalProcedure", name: "Laser Dentistry" },
      ],
      founder: [
        {
          "@type": "Person",
          name: "Dr. Amal Sidharth",
          jobTitle: "Managing Director",
          description: "BDS, MDS (Pedodontics & Preventive Dentistry)",
        },
        {
          "@type": "Person",
          name: "Dr. Jafar Hamza",
          jobTitle: "Managing Director",
          description: "BDS, Post Graduation - Clinical Residency in Endodontics, EU",
        },
      ],
      employee: {
        "@type": "Person",
        name: "Dr. Vipin Viswanath",
        jobTitle: "Medical Director - Kochi",
        description: "BDS, MDS (Oral & Maxillofacial Surgery)",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the Dental Clinic in Panampilly Nagar, Kochi, Open on Sunday?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Elite Dental Studio Kochi is open on Sundays. We offer weekend appointments to fit your busy schedule. Sunday hours are 10:00 AM to 7:00 PM.",
          },
        },
        {
          "@type": "Question",
          name: "What services does the Kochi dental clinic offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Kochi dental clinic provides restorative dentistry, cosmetic treatments, maxillofacial surgery, Invisalign, periodontics, pediatric dentistry, oral medicine and radiology, endodontics, prosthodontics, orthodontics, dental implants, teeth whitening, and smile makeovers.",
          },
        },
        {
          "@type": "Question",
          name: "Can the clinic handle emergency dental cases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Elite Dental Studio Kochi is equipped to handle dental emergencies. If you are experiencing a dental emergency, we aim to see you as soon as possible to provide the care you need. Call us at +91 9567 124 888.",
          },
        },
        {
          "@type": "Question",
          name: "What are some of the common mouth problems treated at Elite Dental Studio Kochi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common mouth problems we treat include tooth decay (cavities), gum disease (gingivitis and periodontitis), tooth sensitivity, oral ulcers or canker sores, and bad breath (halitosis). Our team diagnoses and treats all these conditions effectively.",
          },
        },
      ],
    },
  ],
  calicut: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://elitedentalstudio.co.in/calicut/#dentist",
      name: "Elite Dental Studio Calicut",
      url: "https://elitedentalstudio.co.in/calicut/",
      logo: "https://elitedentalstudio.co.in/wp-content/uploads/2022/12/Elite-Dental-Studio-Logo.png",
      image:
        "https://elitedentalstudio.co.in/wp-content/uploads/2023/01/Elite_Dental_Clinic_Clt_01.webp",
      description:
        "Best dental clinic in Calicut (Kozhikode) at Eranhipalam offering comprehensive dental care including implants, orthodontics, Invisalign, cosmetic dentistry, pediatric dentistry, root canal, laser dentistry, and more.",
      telephone: "+919745072555",
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, Nechikkadan Tower, Eranhipalam",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        postalCode: "673006",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.2588",
        longitude: "75.7804",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919745072555",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+914953552555",
          contactType: "customer service",
          contactOption: "TollFree",
          areaServed: "IN",
        },
      ],
      sameAs: [
        "https://www.facebook.com/elitedentalstudio1",
        "https://www.instagram.com/elitedental_studio/",
        "https://www.youtube.com/channel/UCOfybkaXV4UoBAE0bjGIkVQ",
        "https://goo.gl/maps/46qQV1nCHcXRQp3fA",
      ],
      hasMap: "https://maps.app.goo.gl/5Pa7RAgLDpkLFAJn6",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: "Dentistry",
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Clear Aligners" },
        { "@type": "MedicalProcedure", name: "Orthodontics" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
        { "@type": "MedicalProcedure", name: "Periodontics" },
        { "@type": "MedicalProcedure", name: "Prosthodontics" },
        { "@type": "MedicalProcedure", name: "Maxillofacial & Orthognathic Surgery" },
        { "@type": "MedicalProcedure", name: "Oral Medicine and Radiology" },
        { "@type": "MedicalProcedure", name: "Endodontics" },
        { "@type": "MedicalProcedure", name: "Restorative Dentistry" },
        { "@type": "MedicalProcedure", name: "Laser Dentistry" },
      ],
      founder: [
        {
          "@type": "Person",
          name: "Dr. Amal Sidharth",
          jobTitle: "Managing Director",
          description: "BDS, MDS (Pedodontics & Preventive Dentistry)",
        },
        {
          "@type": "Person",
          name: "Dr. Jafar Hamza",
          jobTitle: "Managing Director",
          description: "BDS, Post Graduation - Clinical Residency in Endodontics, EU",
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Dr. Sreenath Narayanan",
          jobTitle: "Medical Director - Calicut",
          description: "BDS, MDS (Conservative Dentistry & Endodontics)",
        },
        {
          "@type": "Person",
          name: "Dr. Harikrishnan K Prasad",
          jobTitle: "Medical Director",
          description: "BDS, MDS (OMFS), F-ADA (Endodontics), Oral and Maxillofacial Surgeon",
        },
        {
          "@type": "Person",
          name: "Dr. Arunjith Gangadharan",
          jobTitle: "Prosthodontist & Implantologist",
          description: "BDS, MDS (Prosthodontics & Implantology)",
        },
        {
          "@type": "Person",
          name: "Dr. Belwin Baby",
          jobTitle: "Orthodontist",
          description: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
        },
        {
          "@type": "Person",
          name: "Dr. Nafeesa Shaduly",
          jobTitle: "Invisalign Certified Orthodontist",
          description: "BDS, MDS (Orthodontics)",
        },
        {
          "@type": "Person",
          name: "Dr. Krishnapriya",
          jobTitle: "Periodontist & Laser Specialist",
          description: "BDS, MDS (Periodontics)",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I book an online appointment at Elite Dental Studio Calicut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely! You can easily book an appointment online at Elite Dental Studio Calicut. Visit our website, choose a suitable time for your visit, and confirm your appointment. It is quick and convenient.",
          },
        },
        {
          "@type": "Question",
          name: "What are some tips for maintaining good dental health?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To keep your teeth healthy: brush twice a day, floss daily, eat a balanced diet, limit sugary snacks and drinks, and visit your dentist regularly for checkups and cleanings at least twice a year.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right dental clinic in Calicut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for a clinic with experienced dentists, good patient reviews, a wide range of services, modern equipment, and a welcoming environment. Elite Dental Studio Calicut offers all of these, with specialists in implants, orthodontics, cosmetic dentistry, and more at Eranhipalam, Kozhikode.",
          },
        },
        {
          "@type": "Question",
          name: "What are the General Dental Checkup Charges in Calicut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of a general dental checkup at Elite Dental Studio Calicut can vary depending on the services required. Contact us directly at +91 9745 072 555 for the most current pricing information. We strive to provide excellent care at reasonable prices.",
          },
        },
      ],
    },
  ],
  coimbatore: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://elitedentalstudio.co.in/coimbatore#dentist",
      name: "Elite Dental Studio",
      url: "https://elitedentalstudio.co.in/coimbatore",
      description:
        "Elite Dental Studio is a multispecialty dental clinic in RS Puram, Coimbatore, offering dental implants, root canal treatment, Invisalign, clear aligners, pediatric dentistry and smile designing.",
      telephone: "+91 9633 694999",
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, Alankar Building, Diwan Bahadur Road, opposite Tanishq, RS Puram",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641002",
        addressCountry: "IN",
      },
      medicalSpecialty: "https://schema.org/Dentistry",
      areaServed: {
        "@type": "City",
        name: "Coimbatore",
      },
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Invisalign and Clear Aligners" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Smile Designing" },
        { "@type": "MedicalProcedure", name: "Orthodontics" },
        { "@type": "MedicalProcedure", name: "Periodontics" },
        { "@type": "MedicalProcedure", name: "Prosthodontics" },
        { "@type": "MedicalProcedure", name: "Laser Dentistry" },
        { "@type": "MedicalProcedure", name: "Endodontics" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://elitedentalstudio.co.in/coimbatore#faq",
      url: "https://elitedentalstudio.co.in/coimbatore",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Elite Dental Studio Coimbatore located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elite Dental Studio Coimbatore is located at First Floor, Alankar Building, Diwan Bahadur Road, opposite Tanishq, RS Puram, Coimbatore, Tamil Nadu 641002. Call +91 9633 694999 to book your appointment.",
          },
        },
        {
          "@type": "Question",
          name: "How do I reach the dental clinic near RS Puram, Coimbatore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elite Dental Studio Coimbatore is located opposite Tanishq on Diwan Bahadur Road, RS Puram. RS Puram Bus Stop is approximately 100 to 150 metres from the clinic. Autos and cabs are available at RS Puram Clock Tower junction, approximately 300 metres away.",
          },
        },
        {
          "@type": "Question",
          name: "What is the consultation fee at a dental clinic in Coimbatore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first consultation at Elite Dental Studio Coimbatore is free. Book your appointment by calling +91 9633 694999 or visit us at Alankar Building, Diwan Bahadur Road, opposite Tanishq, RS Puram, Coimbatore.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a pediatric dentist in Coimbatore for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Elite Dental Studio Coimbatore has a dedicated pediatric dentistry team at our RS Puram clinic. We offer dental check-ups, fillings, fluoride treatment, sealants and preventive care for children of all ages.",
          },
        },
        {
          "@type": "Question",
          name: "Which dental clinic in Coimbatore offers Invisalign and clear aligners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elite Dental Studio Coimbatore offers Invisalign treatment and clear aligners at our RS Puram clinic on Diwan Bahadur Road. Our orthodontics team plans aligner treatment after a full bite and X-ray assessment.",
          },
        },
      ],
    },
  ],
};
