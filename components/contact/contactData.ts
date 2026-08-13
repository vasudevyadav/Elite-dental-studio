export type ContactClinic = {
  name: string;
  shortName: string;
  address: string[];
  phone: string;
  landline?: string;
  email?: string;
  mapUrl: string;
  mapQuery: string;
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
    mapQuery: "Apollo Tower, Mini Bypass Road, Eranhipalam, Kozhikode, Kerala 673006",
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
    mapUrl: "https://share.google/rBjee9uoOFuyUrBiN",
    mapQuery: "5/981 A Main Avenue Road, Panampilly Nagar, Kochi, Kerala",
  },
  {
    name: "Kannur Clinic",
    shortName: "Kannur",
    address: ["Nyma Tower, opposite Koyili Hospital", "Talap, Kannur", "Kerala 670002"],
    phone: "+91 96458 74777",
    mapUrl: "https://share.google/hqWjVESaLgEvGCPDX",
    mapQuery: "Nyma Tower, opposite Koyili Hospital, Talap, Kannur, Kerala 670002",
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
    mapUrl: "https://maps.app.goo.gl/Wx3n9HuttpszrQpy5",
    mapQuery: "Alankar Building, Diwan Bahadur Road, R.S. Puram, Coimbatore, Tamil Nadu 641002",
  },
];
