const descriptionOverrides: Record<string, string> = {
  "/blog":
    "Explore dental care tips, treatment guides and expert advice from Elite Dental Studio. Discover helpful insights for maintaining healthy teeth and a beautiful smile.",
  "/doctors":
    "Meet the experienced dental doctors at Elite Dental Studio. Explore our specialist dentists in Coimbatore, Kochi, Calicut and Kannur.",
  "/service":
    "Explore dental services at Elite Dental Studio, including dental implants, root canal treatment, Invisalign, laser dentistry and advanced dental care.",
  "/gallery/cases":
    "Explore dental treatment results and smile transformation cases at Elite Dental Studio. Discover our approach to creating healthier, more confident smiles.",
  "/our-dental-office":
    "Explore Elite Dental Studio's modern dental clinics, advanced technology and comfortable treatment spaces designed to deliver quality dental care.",
  "/careers":
    "Explore career opportunities at Elite Dental Studio. Join our team of dental specialists and healthcare professionals committed to quality patient care.",
  "/doctors/dr-amal":
    "Meet Dr. Amal Sidharth, an experienced pediatric dentist at Elite Dental Studio in Calicut. Discover specialised dental care for children and book a consultation.",
  "/service/root-canal-treatment-in-coimbatore":
    "Looking for root canal treatment in Coimbatore? Get expert endodontic care at Elite Dental Studio to treat tooth infections and preserve your natural teeth.",
  "/service/invisalign-treatment-in-coimbatore":
    "Get Invisalign treatment in Coimbatore at Elite Dental Studio. Consult certified orthodontists for customised clear aligners and a straighter, confident smile.",
};

export function getAuditDescription(pathname: string, fallback: string): string {
  return descriptionOverrides[pathname] || fallback;
}
