import ContactLocations from "@/components/contact/ContactLocations";
import Footer from "@/components/Footer";

export default function GlobalFooter({ showLocations = true }: { showLocations?: boolean }) {
  return (
    <>
      {showLocations && <ContactLocations />}
      <Footer />
    </>
  );
}
