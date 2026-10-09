import LegalPolicyPage, { type LegalSection } from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Who we are",
    content: (
      <p>
        Our website address is:{" "}
        <a href="https://elitedentalstudio.co.in/privacy-policy">
          https://elitedentalstudio.co.in/privacy-policy
        </a>
        .
      </p>
    ),
  },
  {
    title: "Comments",
    content: (
      <>
        <p>
          When visitors leave comments on the site, we collect the data shown in the comments form,
          as well as the visitor&apos;s IP address and browser user agent string to help with spam
          detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a hash) may be provided
          to the Gravatar service to see if you are using it. The Gravatar service privacy policy is
          available at{" "}
          <a href="https://automattic.com/privacy/" target="_blank" rel="noreferrer">
            automattic.com/privacy
          </a>
          . After approval of your comment, your profile picture is visible to the public in the
          context of your comment.
        </p>
      </>
    ),
  },
  {
    title: "Media",
    content: (
      <p>
        If you upload images to the website, you should avoid uploading images with embedded
        location data (EXIF GPS). Visitors to the website can download and extract location data
        from images on the website.
      </p>
    ),
  },
  {
    title: "Cookies",
    content: (
      <>
        <p>
          If you leave a comment on our site, you may opt in to saving your name, email address and
          website in cookies. These are for your convenience so that you do not have to fill in your
          details again when you leave another comment. These cookies will last for one year.
        </p>
        <p>
          If you visit our login page, we will set a temporary cookie to determine if your browser
          accepts cookies. This cookie contains no personal data and is discarded when you close
          your browser.
        </p>
        <p>
          When you log in, we will also set up several cookies to save your login information and
          screen display choices. Login cookies last for two days, and screen options cookies last
          for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks.
          If you log out of your account, the login cookies will be removed.
        </p>
        <p>
          If you edit or publish an article, an additional cookie will be saved in your browser.
          This cookie includes no personal data and simply indicates the post ID of the article you
          just edited. It expires after one day.
        </p>
      </>
    ),
  },
  {
    title: "Embedded content from other websites",
    content: (
      <>
        <p>
          Articles on this site may include embedded content, such as videos, images or articles.
          Embedded content from other websites behaves in the same way as if the visitor had visited
          the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed additional third-party
          tracking and monitor your interaction with that embedded content, including tracking your
          interaction if you have an account and are logged in to that website.
        </p>
      </>
    ),
  },
  {
    title: "Who we share your data with",
    content: (
      <p>If you request a password reset, your IP address will be included in the reset email.</p>
    ),
  },
  {
    title: "How long we retain your data",
    content: (
      <>
        <p>
          If you leave a comment, the comment and its metadata are retained indefinitely. This
          allows us to recognize and approve follow-up comments automatically instead of holding
          them in a moderation queue.
        </p>
        <p>
          For users who register on our website, if any, we also store the personal information they
          provide in their user profile. All users can see, edit or delete their personal
          information at any time, except that they cannot change their username. Website
          administrators can also see and edit that information.
        </p>
      </>
    ),
  },
  {
    title: "What rights you have over your data",
    content: (
      <p>
        If you have an account on this site or have left comments, you can request an exported file
        of the personal data we hold about you, including data you have provided to us. You can also
        request that we erase personal data we hold about you. This does not include data we are
        obliged to keep for administrative, legal or security purposes.
      </p>
    ),
  },
  {
    title: "Where your data is sent",
    content: <p>Visitor comments may be checked through an automated spam detection service.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPolicyPage
      eyebrow="Your privacy matters"
      title="Privacy Policy"
      description="Read the Elite Dental Studio privacy policy, including how website comments, media, cookies and personal data are handled."
      intro="This policy explains what information may be collected when you use our website, why it is used and the choices available to you."
      updated="9 October 2026"
      sections={sections}
    />
  );
}
