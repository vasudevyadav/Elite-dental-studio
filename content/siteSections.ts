export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
};

export type AppointmentSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  formTitle: string;
};

export const homeFaqContent: FAQSectionContent = {
  eyebrow: "FAQs",
  title: "Everything You Need to Know About Dental Care",
  description:
    "Find quick and expert-verified answers to your quick queries about our dental services, procedures or patient care.",
  items: [
    {
      question: "What can I expect during my first visit?",
      answer:
        "Your first visit includes a full mouth examination, X-rays if anything looks unclear, and a written treatment plan that lists what was found and the options available to treat it.",
    },
    {
      question: "Does Elite Dental Studio offer no cost EMI?",
      answer:
        "Yes. We accept Bajaj and Zest No Cost EMI on all our treatments, making it easier to manage the cost of your dental care. Contact our reception team for more information or assistance with the EMI process.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "Most patients need a dental checkup every six months for cleaning and early diagnosis, unless your dentist has already set a different schedule based on your gum health or past treatment.",
    },
    {
      question: "Do you offer emergency dental care?",
      answer:
        "Yes, Elite Dental Studio offers emergency dental care for severe pain, swelling, a broken tooth or sudden bleeding. Call our emergency contact number and our on-duty dentist will see you as soon as possible.",
    },
  ],
};

export const aboutFaqContent: FAQSectionContent = {
  ...homeFaqContent,
  items: [
    {
      question: "How long has Elite Dental Studio been operating?",
      answer:
        "Elite Dental Studio has been operating since 2020, with six years of specialist-led dental care across four ISO 9001 certified clinics in Calicut, Kochi, Kannur and Coimbatore.",
    },
    {
      question: "Is Elite Dental Studio ISO 9001 certified?",
      answer:
        "Yes, Elite Dental Studio is ISO 9001 certified across all four clinic locations in Calicut, Kochi, Kannur and Coimbatore, meaning every clinic follows the same documented quality standard.",
    },
    {
      question: "Does Elite Dental Studio have specialist doctors or general dentists?",
      answer:
        "Elite Dental Studio has MDS qualified specialists leading every dental department, including implantology, orthodontics, pedodontics, endodontics, periodontics, prosthodontics and oral surgery, across all four clinics.",
    },
    {
      question: "How many clinics does Elite Dental Studio have and where are they located?",
      answer:
        "Elite Dental Studio has four clinics located in Calicut at Eranhipalam, Kochi at Panampilly Nagar, Kannur at Talap and Coimbatore at R.S. Puram.",
    },
    {
      question: "Can NRI or international patients get insurance bills at Elite Dental Studio?",
      answer:
        "Yes, Elite Dental Studio issues bills for insurance claims for patients from GCC countries including the UAE, Kuwait, Qatar, Bahrain, Oman and Saudi Arabia. Elite Dental Studio is also recognised through the Famdent Excellence in Dentistry Award for clinical innovation and outstanding patient care.",
    },
  ],
};

export const appointmentContent: AppointmentSectionContent = {
  eyebrow: "Book Your Appointment",
  title: "Book Your Dental Appointment Online with Elite Dental Studio",
  description:
    "Ready to take the next step for your healthier smile? Book online or call us to schedule your dental appointment in Calicut, Kochi, Kannur or Coimbatore.",
  formTitle: "Book an Appointment",
};

export const drAmalAppointmentContent: AppointmentSectionContent = {
  ...appointmentContent,
  formTitle: "Book Appointment with Dr. Amal",
};
