export type ServiceStructuredData = {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
};

export const serviceStructuredData: Record<string, ServiceStructuredData> = {
  "laser-dentistry": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#webpage",
        url: "https://elitedentalstudio.co.in/service/laser-dentistry/",
        name: "Dental Laser Treatment in Kerala | Elite Dental Studio",
        description:
          "Explore dental laser treatment at Elite Dental Studio. Laser-assisted gum treatment, gingivectomy, gum depigmentation and soft tissue procedures are offered following clinical assessment.",
        about: {
          "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#procedure",
        },
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
      {
        "@type": "Dentist",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: ["+91 9745072555", "+91 9567124888", "+91 9645874777", "+91 9633694999"],
        medicalSpecialty: "https://schema.org/Dentistry",
        availableService: {
          "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#procedure",
        name: "Laser Dentistry",
        alternateName: "Dental Laser Treatment",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Gums and oral soft tissues",
        howPerformed:
          "Dental laser treatment uses focused light energy for selected gum and oral soft tissue procedures. Treatment is planned following a clinical examination.",
        preparation:
          "A dentist assesses oral health, gum condition and medical history to determine whether laser treatment is suitable.",
        followup:
          "Aftercare instructions and follow-up visits depend on the procedure and individual healing.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        mainEntityOfPage: {
          "@id": "https://elitedentalstudio.co.in/service/laser-dentistry/#webpage",
        },
      },
    ],
  },
  periodontics: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://elitedentalstudio.co.in/wp-content/uploads/",
        },
        telephone: "+91 9048 611 911",
        sameAs: [],
      },
      {
        "@type": "Dentist",
        "@id": "https://elitedentalstudio.co.in/#dentist",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        parentOrganization: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        medicalSpecialty: "https://schema.org/Dentistry",
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Gum Disease Treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "Scaling and Polishing",
          },
          {
            "@type": "MedicalProcedure",
            name: "Root Planing",
          },
          {
            "@type": "MedicalProcedure",
            name: "Gum Surgery",
          },
          {
            "@type": "MedicalProcedure",
            name: "Gum Grafting",
          },
          {
            "@type": "MedicalProcedure",
            name: "Crown Lengthening",
          },
          {
            "@type": "MedicalProcedure",
            name: "Laser-Assisted Gum Treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "Periodontal Maintenance",
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/gum-treatement/#webpage",
        url: "https://elitedentalstudio.co.in/service/gum-treatement",
        name: "Advanced Gum Treatment in Coimbatore, Calicut, Kochi and Kannur | Elite Dental Studio",
        description:
          "Get advanced gum treatment at Elite Dental Studio in Coimbatore, Calicut, Kochi and Kannur. Treatment options include scaling, root planing, gum surgery, gum grafting and laser-assisted gum care.",
        about: {
          "@id": "https://elitedentalstudio.co.in/service/gum-treatement/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/gum-treatement/#procedure",
        },
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        provider: {
          "@id": "https://elitedentalstudio.co.in/#dentist",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/gum-treatement/#procedure",
        name: "Advanced Gum Treatment",
        alternateName: ["Gum Disease Treatment", "Periodontal Treatment"],
        description:
          "Advanced gum treatment focuses on diagnosing and managing gum disease and conditions affecting the tissues and bone that support the teeth. Treatment options include scaling and polishing, root planing, gum surgery, gum grafting, crown lengthening, laser-assisted gum care and periodontal maintenance.",
        bodyLocation: "Gums and supporting tissues of the teeth",
        howPerformed:
          "Treatment is planned following a clinical gum examination, periodontal pocket measurements and X-ray review. Depending on the condition, care may include professional cleaning, deep cleaning, surgical procedures, laser-assisted treatment or periodontal maintenance.",
        preparation:
          "The dentist assesses gum health, periodontal pocket depth, bone involvement and overall oral health before recommending a suitable treatment plan.",
        followup:
          "Follow-up care depends on the treatment performed and individual healing. Periodontal maintenance and regular gum reviews may be recommended to help manage gum health.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#dentist",
        },
        mainEntityOfPage: {
          "@id": "https://elitedentalstudio.co.in/service/gum-treatement/#webpage",
        },
      },
    ],
  },
  "clear-aligners-treatment": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: ["+91 9745072555", "+91 9567124888", "+91 9645874777", "+91 9633694999"],
      },
      {
        "@type": "Dentist",
        "@id": "https://elitedentalstudio.co.in/#dentist",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        parentOrganization: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        medicalSpecialty: "https://schema.org/Dentistry",
        availableService: {
          "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#procedure",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#webpage",
        url: "https://elitedentalstudio.co.in/service/clear-aligners-treatment/",
        name: "Clear Aligner Treatment in Kochi, Calicut and Kannur | Elite Dental Studio",
        description:
          "Get clear aligner treatment at Elite Dental Studio in Kochi, Calicut and Kannur. Explore customised invisible aligners, digital treatment planning and personalised orthodontic care.",
        about: {
          "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#procedure",
        },
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        provider: {
          "@id": "https://elitedentalstudio.co.in/#dentist",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#procedure",
        name: "Clear Aligner Treatment",
        alternateName: ["Invisible Dental Aligners", "Invisalign Treatment"],
        description:
          "Clear aligner treatment uses customised, transparent and removable trays to gradually correct teeth alignment. It may help address crowding, spacing and selected bite concerns, depending on the patient's orthodontic condition.",
        bodyLocation: "Teeth and dental arches",
        howPerformed:
          "Treatment begins with an orthodontic consultation and digital scanning. Custom aligners are planned to move the teeth gradually. Patients wear the aligners as prescribed, attend periodic reviews and use retainers after treatment to maintain the results.",
        preparation:
          "The orthodontist examines tooth alignment, bite and oral health, and uses digital scans to assess suitability and plan treatment.",
        followup:
          "Regular orthodontic reviews are recommended to monitor tooth movement. Retainers may be prescribed after treatment to help maintain the corrected tooth positions.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#dentist",
        },
        mainEntityOfPage: {
          "@id": "https://elitedentalstudio.co.in/service/clear-aligners-treatment/#webpage",
        },
      },
    ],
  },
  "invisible-aligners": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        email: "elitedentalstudioreception@gmail.com",
        telephone: "+91 9048 611 911",
        department: [
          {
            "@type": "Dentist",
            name: "Elite Dental Studio - Calicut",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "The Mezzanine Floor, Apollo Tower, Opposite Swapna Nagari, Mini Bypass Road, Eranhipalam P.O",
              addressLocality: "Kozhikode",
              addressRegion: "Kerala",
              postalCode: "673006",
              addressCountry: "IN",
            },
            telephone: "+91 9745 072 555",
          },
          {
            "@type": "Dentist",
            name: "Elite Dental Studio - Kochi",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5/981 A, Main Avenue Road, Near Manorama Junction, Panampilly Nagar",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              postalCode: "682036",
              addressCountry: "IN",
            },
            telephone: "+91 9567 124 888",
          },
          {
            "@type": "Dentist",
            name: "Elite Dental Studio - Kannur",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nyma Tower, Opposite Koyili Hospital, Talap",
              addressLocality: "Kannur",
              addressRegion: "Kerala",
              postalCode: "670002",
              addressCountry: "IN",
            },
            telephone: "+91 96458 74777",
          },
          {
            "@type": "Dentist",
            name: "Elite Dental Studio - Coimbatore",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "First Floor, Alankar Building, Diwan Bahadur Road, Opposite Tanishq, R.S. Puram",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              postalCode: "641002",
              addressCountry: "IN",
            },
            telephone: "+91 9633 694999",
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/invisible-aligners#webpage",
        url: "https://elitedentalstudio.co.in/service/invisible-aligners",
        name: "Invisible Aligners | Elite Dental Studio",
        description:
          "Explore Invisalign treatment at Elite Dental Studio in Calicut, Kochi, Kannur and Coimbatore. Our orthodontists provide customised clear aligner treatment based on individual dental needs.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/invisible-aligners#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/invisible-aligners#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/invisible-aligners#procedure",
        name: "Invisalign Treatment",
        alternateName: ["Invisible Aligners", "Clear Aligners", "Clear Aligner Treatment"],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Teeth",
        howPerformed:
          "The orthodontist evaluates the teeth and bite, takes a digital scan, and plans a series of custom-made clear aligners. Patients wear the aligners as prescribed and attend regular review appointments. Retainers are used after treatment to maintain the results.",
        preparation:
          "An orthodontic consultation and dental examination are performed to determine suitability for clear aligner treatment.",
        followup:
          "Regular orthodontic review appointments are required during treatment. Retainers are recommended after the active treatment phase.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "maxillofacial-orthognathic-surgery": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery#webpage",
        url: "https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery",
        name: "Maxillofacial & Orthognathic Surgery | Elite Dental Studio",
        description:
          "Explore maxillofacial and orthognathic surgery at Elite Dental Studio, including surgical treatment for jaw conditions, facial abnormalities and bite correction.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id":
            "https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery#procedure",
        },
        mainEntity: {
          "@id":
            "https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id":
          "https://elitedentalstudio.co.in/service/maxillofacial-orthognathic-surgery#procedure",
        name: "Maxillofacial and Orthognathic Surgery",
        alternateName: ["Jaw Surgery", "Orthognathic Surgery", "Oral and Maxillofacial Surgery"],
        procedureType: "https://schema.org/SurgicalProcedure",
        bodyLocation: "Mouth, jaw and facial bones",
        howPerformed:
          "Treatment involves clinical examination and appropriate imaging to assess the teeth, jaws and facial structures. Depending on the diagnosis, treatment may include oral surgery or surgical jaw realignment planned by a specialist.",
        preparation:
          "A specialist consultation, clinical examination and appropriate diagnostic imaging are required before surgery.",
        followup:
          "Postoperative reviews and follow-up care are planned according to the procedure and individual recovery.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "dental-implant": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/dental-implant#webpage",
        url: "https://elitedentalstudio.co.in/service/dental-implant",
        name: "Dental Implants | Elite Dental Studio",
        description:
          "Learn about dental implant treatment at Elite Dental Studio. Dental implants replace missing teeth using artificial tooth roots and suitable restorations, based on individual clinical assessment.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/dental-implant#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/dental-implant#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/dental-implant#procedure",
        name: "Dental Implant Treatment",
        alternateName: ["Dental Implants", "Tooth Implant", "Dental Implant Surgery"],
        procedureType: "https://schema.org/SurgicalProcedure",
        bodyLocation: "Jawbone and teeth",
        howPerformed:
          "Dental implant treatment involves assessing the oral health and jawbone, surgically placing a suitable implant in the jawbone and, after appropriate healing, attaching a dental restoration. The treatment sequence depends on individual clinical needs.",
        preparation:
          "A dental examination and appropriate diagnostic imaging are used to assess bone volume, gum health and suitability for implant treatment.",
        followup:
          "Follow-up appointments monitor healing, implant integration and the fit and function of the final restoration. Regular oral hygiene and dental reviews are recommended.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "pediatric-dentistry": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/pediatric-dentistry#webpage",
        url: "https://elitedentalstudio.co.in/service/pediatric-dentistry",
        name: "Pediatric Dentistry | Elite Dental Studio",
        description:
          "Discover pediatric dental care at Elite Dental Studio, including preventive dental check-ups, fluoride treatment, fillings, sealants and age-appropriate dental care for children.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/pediatric-dentistry#medical-specialty",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/pediatric-dentistry#medical-specialty",
        },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": "https://elitedentalstudio.co.in/service/pediatric-dentistry#medical-specialty",
        name: "Pediatric Dentistry",
        alternateName: ["Pedodontics", "Paediatric Dentistry", "Children's Dentistry"],
        description:
          "Pediatric dentistry focuses on children's oral health, including preventive dental care, diagnosis and treatment of dental problems, and age-appropriate dental guidance.",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Dentistry",
        },
        medicineSystem: "https://schema.org/WesternConventional",
        recognizingAuthority: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "oral-medicine-radiology": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/oral-medicine-radiology#webpage",
        url: "https://elitedentalstudio.co.in/service/oral-medicine-radiology",
        name: "Oral Medicine and Radiology | Elite Dental Studio",
        description:
          "Explore oral medicine and radiology services at Elite Dental Studio, including diagnosis of oral conditions, clinical examinations and dental imaging for treatment planning.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/oral-medicine-radiology#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/oral-medicine-radiology#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/oral-medicine-radiology#procedure",
        name: "Oral Medicine and Radiology",
        alternateName: ["Oral Diagnosis", "Dental Radiology", "Oral and Maxillofacial Radiology"],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Mouth, teeth, jaws and facial structures",
        howPerformed:
          "Oral medicine and radiology services involve clinical examination, assessment of oral conditions and appropriate diagnostic imaging, such as digital dental X-rays or panoramic imaging, when indicated.",
        preparation:
          "Preparation depends on the clinical examination and imaging required. Patients may be asked to provide relevant medical and dental history.",
        followup:
          "The findings are reviewed to guide diagnosis, treatment planning and any necessary specialist follow-up.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  endodontics: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/endodontics#webpage",
        url: "https://elitedentalstudio.co.in/service/endodontics",
        name: "Endodontics | Elite Dental Studio",
        description:
          "Explore endodontic treatment at Elite Dental Studio, including root canal treatment and care for dental pulp infections and injuries to help preserve natural teeth.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/endodontics#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/endodontics#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/endodontics#procedure",
        name: "Endodontic Treatment",
        alternateName: ["Root Canal Treatment", "Root Canal Therapy", "Endodontics"],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Dental pulp and tooth root",
        howPerformed:
          "Endodontic treatment involves examining the affected tooth, assessing the pulp and root canals, removing infected or damaged pulp when required, cleaning and shaping the canals, and sealing them with suitable materials. A suitable restoration may be placed to protect the treated tooth.",
        preparation:
          "A dental examination and appropriate X-rays are used to assess the affected tooth and determine the treatment required.",
        followup:
          "Follow-up appointments assess healing and the restoration. The dentist may recommend a crown or another suitable restoration to protect the treated tooth.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  prosthodontics: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/prosthodontics/#webpage",
        url: "https://elitedentalstudio.co.in/service/prosthodontics/",
        name: "Prosthodontics | Elite Dental Studio",
        description:
          "Explore prosthodontic treatments at Elite Dental Studio, including dental crowns, bridges, dentures, implant-supported restorations and full mouth rehabilitation.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/prosthodontics/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/prosthodontics/#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/prosthodontics/#procedure",
        name: "Prosthodontic Treatment",
        alternateName: [
          "Prosthodontics",
          "Dental Crown Treatment",
          "Dental Bridge Treatment",
          "Denture Treatment",
          "Full Mouth Rehabilitation",
        ],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Teeth and jaw",
        howPerformed:
          "Prosthodontic treatment involves examining the teeth, gums and bite to plan suitable restorations or tooth replacements. Depending on individual needs, treatment may include crowns, bridges, complete or partial dentures, implant-supported restorations or full mouth rehabilitation.",
        preparation:
          "A dental examination, assessment of the bite and appropriate diagnostic imaging are used to determine the most suitable restoration.",
        followup:
          "Follow-up visits assess the fit, comfort and function of the restoration. Regular dental check-ups and oral hygiene help maintain the restoration.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  orthodontics: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/orthodontics/#webpage",
        url: "https://elitedentalstudio.co.in/service/orthodontics/",
        name: "Orthodontics | Elite Dental Studio",
        description:
          "Explore orthodontic treatments at Elite Dental Studio, including metal braces, ceramic braces, clear aligners, bite correction and retainers for teeth alignment.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/orthodontics/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/orthodontics/#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/orthodontics/#procedure",
        name: "Orthodontic Treatment",
        alternateName: ["Orthodontics", "Dental Braces", "Teeth Alignment", "Bite Correction"],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Teeth and jaws",
        howPerformed:
          "Orthodontic treatment involves assessing tooth alignment and the bite, followed by a personalised treatment plan. Depending on the case, treatment may include metal braces, ceramic braces or clear aligners to gradually move teeth into planned positions. Retainers are generally recommended after active treatment.",
        preparation:
          "An orthodontic consultation, bite assessment and appropriate dental imaging are used to plan treatment.",
        followup:
          "Regular orthodontic reviews monitor tooth movement and treatment progress. Retainers are recommended after active treatment to help maintain alignment.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "cosmetic-treatments": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/cosmetic-treatments/#webpage",
        url: "https://elitedentalstudio.co.in/service/cosmetic-treatments/",
        name: "Cosmetic Dental Treatments | Elite Dental Studio",
        description:
          "Discover cosmetic dental treatments at Elite Dental Studio, including professional teeth whitening, dental veneers, composite bonding and smile designing.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/cosmetic-treatments/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/cosmetic-treatments/#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/cosmetic-treatments/#procedure",
        name: "Cosmetic Dental Treatment",
        alternateName: [
          "Cosmetic Dentistry",
          "Smile Designing",
          "Dental Veneers",
          "Professional Teeth Whitening",
          "Composite Bonding",
        ],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Teeth and smile",
        howPerformed:
          "Cosmetic dental treatment begins with an assessment of the teeth, gums, bite and aesthetic goals. Depending on individual needs, treatment may include professional teeth whitening, veneers, composite bonding or smile designing.",
        preparation:
          "A dental examination assesses oral health, tooth condition and suitability for the selected cosmetic treatment. Any underlying dental problems may need to be addressed before treatment.",
        followup:
          "Follow-up care depends on the treatment performed. Patients receive guidance on oral hygiene, dietary considerations and maintaining their cosmetic restorations or whitening results.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
  "restorative-dentistry": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitedentalstudio.co.in/#organization",
        name: "Elite Dental Studio",
        url: "https://elitedentalstudio.co.in/",
        telephone: "+91 9048 611 911",
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://elitedentalstudio.co.in/service/restorative-dentistry/#webpage",
        url: "https://elitedentalstudio.co.in/service/restorative-dentistry/",
        name: "Restorative Dentistry | Elite Dental Studio",
        description:
          "Explore restorative dentistry at Elite Dental Studio, including tooth-coloured fillings, dental crowns, inlays, onlays and full mouth rehabilitation to restore damaged teeth and their function.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
        about: {
          "@id": "https://elitedentalstudio.co.in/service/restorative-dentistry/#procedure",
        },
        mainEntity: {
          "@id": "https://elitedentalstudio.co.in/service/restorative-dentistry/#procedure",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://elitedentalstudio.co.in/service/restorative-dentistry/#procedure",
        name: "Restorative Dental Treatment",
        alternateName: [
          "Restorative Dentistry",
          "Dental Fillings",
          "Dental Crowns",
          "Dental Inlays",
          "Dental Onlays",
          "Full Mouth Rehabilitation",
        ],
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Teeth",
        howPerformed:
          "Restorative dentistry involves examining damaged or decayed teeth and selecting an appropriate treatment. Depending on the condition, treatment may include tooth-coloured fillings, crowns, inlays, onlays or a comprehensive full mouth rehabilitation plan to restore tooth structure and function.",
        preparation:
          "The dentist examines the affected teeth and may use dental X-rays to assess the extent of damage or decay before selecting a suitable restoration.",
        followup:
          "Follow-up care includes checking the fit and function of restorations and monitoring oral health. Regular dental visits and good oral hygiene help maintain restored teeth.",
        provider: {
          "@id": "https://elitedentalstudio.co.in/#organization",
        },
      },
    ],
  },
};
