import Link from "next/link";
import LegalPolicyPage, { type LegalSection } from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Acceptance of terms",
    content: (
      <p>
        By accessing or using the Elite Dental Studio website, you agree to these Terms and
        Conditions. If you do not agree with them, please do not use the website.
      </p>
    ),
  },
  {
    title: "Website information",
    content: (
      <p>
        The information on this website is provided for general awareness and education. We aim to
        keep it accurate and current, but dental services, availability, pricing, clinic hours and
        other information may change without notice.
      </p>
    ),
  },
  {
    title: "No medical advice",
    content: (
      <>
        <p>
          Website content is not a diagnosis, prescription or substitute for an examination by a
          qualified dental professional. Treatment recommendations depend on an individual clinical
          assessment and, where required, diagnostic imaging.
        </p>
        <p>
          For urgent symptoms, severe pain, swelling, trauma or uncontrolled bleeding, contact an
          appropriate healthcare provider or emergency service without delay.
        </p>
      </>
    ),
  },
  {
    title: "Appointments and enquiries",
    content: (
      <>
        <p>
          Sending an appointment or consultation request through the website does not confirm an
          appointment. A booking is confirmed only after our team contacts you and agrees on the
          clinic, date and time.
        </p>
        <p>
          Please provide complete and accurate contact information. If you need to change or cancel
          an appointment, contact the clinic as early as possible.
        </p>
      </>
    ),
  },
  {
    title: "Treatment, fees and results",
    content: (
      <>
        <p>
          Treatment plans, timelines and fees are provided after an appropriate clinical evaluation.
          Any estimate may change if the examination or treatment reveals additional clinical needs.
        </p>
        <p>
          Treatment results vary between patients. Images, case studies and testimonials on the
          website are illustrative and do not guarantee an identical outcome.
        </p>
      </>
    ),
  },
  {
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to use this website to:</p>
        <ul>
          <li>break any applicable law or infringe another person&apos;s rights;</li>
          <li>submit false, misleading, harmful or unlawful material;</li>
          <li>attempt unauthorized access to the website, server or connected systems;</li>
          <li>introduce malware or interfere with the website&apos;s operation; or</li>
          <li>copy, scrape or reuse website content for commercial purposes without permission.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Intellectual property",
    content: (
      <p>
        Unless stated otherwise, website text, branding, graphics, photographs, videos and design
        are owned by or licensed to Elite Dental Studio. You may view the website for personal,
        non-commercial use, but may not reproduce, modify, distribute or publish its content without
        prior written permission.
      </p>
    ),
  },
  {
    title: "Third-party links and services",
    content: (
      <p>
        The website may link to maps, social networks, payment providers or other third-party
        services. We do not control their content, availability, security or privacy practices. Your
        use of those services is governed by their own terms and policies.
      </p>
    ),
  },
  {
    title: "Privacy",
    content: (
      <p>
        Our collection and use of personal information is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. By using forms on this website, you
        confirm that the information you provide is accurate and that we may use it to respond to
        your enquiry or appointment request.
      </p>
    ),
  },
  {
    title: "Limitation of liability",
    content: (
      <p>
        To the extent permitted by law, Elite Dental Studio is not liable for loss arising solely
        from reliance on general website information, temporary unavailability, technical errors or
        third-party websites. Nothing in these terms excludes liability that cannot lawfully be
        excluded.
      </p>
    ),
  },
  {
    title: "Changes to these terms",
    content: (
      <p>
        We may revise these Terms and Conditions when our services, website or legal requirements
        change. The updated version will be published on this page with a revised date. Continued
        use of the website after an update indicates acceptance of the revised terms.
      </p>
    ),
  },
  {
    title: "Contact us",
    content: (
      <p>
        For questions about these terms, contact Elite Dental Studio at{" "}
        <a href="mailto:elitedentalstudioreception@gmail.com">
          elitedentalstudioreception@gmail.com
        </a>{" "}
        or call <a href="tel:+919048611911">+91 9048 611 911</a>.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPolicyPage
      eyebrow="Website terms"
      title="Terms & Conditions"
      description="Read the terms and conditions for using the Elite Dental Studio website, appointment forms and dental information."
      intro="These terms explain the rules that apply when you browse our website, use its content or send an appointment enquiry."
      updated="9 October 2026"
      sections={sections}
    />
  );
}
