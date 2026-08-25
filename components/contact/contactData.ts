export type ContactClinic = {
  name: string;
  shortName: string;
  address: string[];
  phone: string;
  landline?: string;
  email?: string;
  mapUrl: string;
  mapQuery: string;
  mapEmbedUrl?: string;
};

export const contactClinics: ContactClinic[] = [
  {
    name: "Calicut Clinic",
    shortName: "Calicut",
    address: [
      "The Mezzanine Floor, Apollo Tower",
      "Opposite Swapna Nagari, Mini Bypass Rd",
      "Eranhipalam P.O, Kozhikode, Kerala 673006",
    ],
    phone: "+91 9745 072 555",
    landline: "0495 3552 555",
    email: "elitedentalstudioreception@gmail.com",
    mapUrl: "https://share.google/Fwtkjjfxd6VB0I8Pg",
    mapQuery: "Elite Dental Studio | Dental Clinic in Calicut",
  },
  {
    name: "Kochi Clinic",
    shortName: "Kochi",
    address: [
      "5/981 A, Main Avenue Road",
      "Near Manorama Junction, Panampilly Nagar",
      "Kochi, Kerala 682036",
    ],
    phone: "+91 9567 124 888",
    landline: "0484 4024 888",
    email: "elitedentalkochireception@gmail.com",
    mapUrl: "https://maps.app.goo.gl/cPfCY2QTRJQ2NNXbA",
    mapQuery: "Elite Dental Studio | Dental Clinic In Kochi",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9137712.686598783!2d67.33039185000001!3d9.964243799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e4be116aa5%3A0xcde9dcdaf26b0668!2sElite%20Dental%20Studio!5e1!3m2!1sen!2sus!4v1787642325827!5m2!1sen!2sus",
  },
  {
    name: "Kannur Clinic",
    shortName: "Kannur",
    address: ["Nyma Tower, opposite Koyili Hospital", "Talap, Kannur", "Kerala 670002"],
    phone: "+91 96458 74777",
    mapUrl: "https://share.google/hqWjVESaLgEvGCPDX",
    mapQuery: "Elite Dental Studio | Best Dental Clinic in Kannur",
  },
  {
    name: "Coimbatore Clinic",
    shortName: "Coimbatore",
    address: [
      "First Floor, Alankar Building",
      "Diwan Bahadur Rd, opposite Tanishq",
      "R.S. Puram, Coimbatore, Tamil Nadu 641002",
    ],
    phone: "+91 9633 694999",
    mapUrl: "https://maps.app.goo.gl/aLQEArD1RVjUyrEe6",
    mapQuery: "Alankar Building, Diwan Bahadur Road, R.S. Puram, Coimbatore, Tamil Nadu 641002",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.736033085853!2d76.9504735!3d11.009234599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591567f75a1f%3A0xa040008e7ebcf16c!2sElite%20Dental%20Studio!5e1!3m2!1sen!2sin!4v1787642373702!5m2!1sen!2sin",
  },
];
