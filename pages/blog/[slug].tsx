import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import SitePage from "@/components/SitePage";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import BlogSidebar from "@/components/BlogSidebar";
import { blogPosts, findBlogPost } from "@/components/blogData";

type Props = { post: (typeof blogPosts)[number] };

const benefits = [
  [
    "Near-Invisible Look For Work And Social Life",
    "Invisalign trays stay almost unnoticeable in normal lighting beyond 1.5 feet. This helps when you attend meetings, interviews, college classes or video calls. You can speak, smile and interact without worrying about metal brackets showing in photos.",
  ],
  [
    "Comfortable Fit Without Wires Or Brackets",
    "Invisalign uses smooth, custom-made plastic trays. There are no wires that poke your cheeks and no brackets that rub against your lips. Most people adjust to the trays within 48 hours.",
  ],
  [
    "Easier Eating Without Food Restrictions",
    "You remove Invisalign before eating. Fixed braces often need you to avoid hard or sticky foods. With Invisalign, you can eat normally, then brush and wear your trays again.",
  ],
  [
    "Better Brushing And Flossing Every Day",
    "Invisalign makes oral hygiene easier because you remove the trays before cleaning your teeth. This helps reduce plaque buildup, gum irritation and food trapping during treatment.",
  ],
  [
    "Digital Planning For Predictable Smile Correction",
    "Invisalign treatment uses advanced imaging and 3D scanning to plan tooth movement before you start. The scan helps your dentist check your bite, tooth position and expected smile changes.",
  ],
];

export default function BlogPostPage({ post }: Props) {
  return (
    <SitePage title={`${post.title} | Elite Dental Studio`} description={post.excerpt}>
      <section className="mx-auto max-w-[1240px] px-4 pt-8 pb-[34px] text-[#333] sm:px-8 sm:pt-10 lg:px-[34px] lg:pt-12">
        <p className="-mb-8 text-lg font-medium text-[#282828] sm:-mb-[26px] sm:text-xl">
          Latest Posts
        </p>
        <div className="grid min-w-0 items-start gap-9 lg:grid-cols-[minmax(0,820px)_270px] lg:gap-10 xl:gap-[70px]">
          <main>
            <header className="relative mt-[50px] h-[250px] overflow-hidden rounded-[10px] bg-white after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.9)_52%,transparent_100%)] sm:h-[330px] lg:h-[390px] lg:after:bg-[linear-gradient(90deg,#fff_0%,#fff_42%,rgba(255,255,255,.5)_55%,transparent_74%)]">
              <div className="absolute top-6 left-5 z-[2] max-w-[70%] sm:top-[26px] sm:left-[30px] sm:max-w-[390px]">
                <strong className="block text-[27px] leading-[1.1] font-extrabold tracking-[-.04em] text-[#18cfc1] [text-shadow:2px_2px_0_#19585c] sm:text-[39px] lg:text-[49px]">
                  Invisalign
                  <br />
                  Clear Aligners
                </strong>
                <span className="mt-2 block text-sm leading-[1.4] text-[#2c2b2b] sm:text-xl lg:mt-2.5 lg:text-2xl">
                  At
                  <br />
                  <b>Elite Dental Studio Kochi:</b>
                  <br />
                  Benefits, Process &amp; Cost
                </span>
              </div>
              <Image
                className="z-0 object-cover object-[60%_center]"
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="800px"
              />
            </header>
            <article className="text-[15px] leading-[1.72] text-[#4c5555] sm:text-base [&_h1]:mt-8 [&_h1]:mb-5 [&_h1]:text-[22px] [&_h1]:leading-[1.35] [&_h1]:font-semibold [&_h1]:text-[#277579] sm:[&_h1]:text-[25px] [&_h2]:mt-8 [&_h2]:mb-3.5 [&_h2]:text-xl [&_h2]:leading-[1.35] [&_h2]:font-semibold [&_h2]:text-[#278184] sm:[&_h2]:mt-9 sm:[&_h2]:text-[23px] [&_h3]:mt-6 [&_h3]:mb-[7px] [&_h3]:text-base [&_h3]:leading-[1.4] [&_h3]:font-semibold [&_h3]:text-[#437f81] sm:[&_h3]:text-lg [&_li]:my-1 [&_p]:mb-[17px] [&_ul]:mt-2 [&_ul]:mb-[18px] [&_ul]:list-disc [&_ul]:pl-[18px]">
              <h1>{post.title}</h1>
              <p>
                If you want straighter teeth but feel unsure about metal braces, Invisalign can feel
                like the cleaner and more comfortable choice. You may worry about visibility during
                meetings, food limits, speech changes or the final price. Invisalign in Kochi helps
                solve these concerns with clear removable aligners that move teeth through planned
                digital stages.
              </p>
              <p>
                At Elite Dental Studio, we support your smile journey with an in-house iTero
                scanner, certified Invisalign provider support and an orthodontist with 8+ years of
                aligner experience.
              </p>

              <h2>Why Invisalign Leads The Clear Aligner Category?</h2>
              <ul>
                <li>
                  Invisalign leads the clear aligner category because it combines advanced material,
                  precise digital planning and global treatment data.
                </li>
                <li>
                  Its SmartTrack material is around 30% more elastic than generic aligner plastic.
                </li>
                <li>
                  SmartForce attachments and precision wings help guide tooth movement more
                  accurately.
                </li>
                <li>Aligners are changed every one to two weeks for controlled movement.</li>
              </ul>

              <h2>5 Benefits Of Invisalign Clear Aligners</h2>
              <p>
                Invisalign helps you straighten your teeth with a discreet look, better comfort,
                easier cleaning, fewer food restrictions and a treatment routine that fits daily
                life.
              </p>
              {benefits.map(([title, body], index) => (
                <section key={title}>
                  <h3>
                    {index + 1}. {title}
                  </h3>
                  <p>{body}</p>
                </section>
              ))}

              <h2>Your Invisalign Journey At Elite Dental Studio Kochi</h2>
              <p>
                Your Invisalign journey at Elite Dental Studio Kochi starts with a scan, moves into
                digital planning and continues with regular progress checks.
              </p>
              <ul>
                <li>Consultation takes around 45 minutes.</li>
                <li>Digital photos and X-rays guide assessment.</li>
                <li>Intra-oral scans take about 12 minutes.</li>
                <li>ClinCheck shows your future smile.</li>
                <li>First aligners arrive in 10–14 days.</li>
                <li>Check-ups happen every 6–8 weeks.</li>
              </ul>
              <p>
                Your first visit helps us understand your teeth, bite and smile goals. The digital
                3D scan creates a map of your mouth without messy impressions.
              </p>

              <section className="relative my-7 grid min-h-[300px] grid-cols-1 overflow-hidden rounded-xl bg-[#a9eafa] px-5 pt-5 pb-12 text-[#255b67] sm:my-[34px] sm:grid-cols-[1.25fr_.75fr] sm:px-7 sm:pt-7">
                <div>
                  <h2 className="!mt-0 !text-2xl !font-extrabold !text-[#20b4ad]">
                    WHAT MAKES INVISALIGN WORK?
                  </h2>
                  <ul>
                    <li>SmartTrack Material Supports Steady Force</li>
                    <li>3d Scans Map Tooth Movement</li>
                    <li>Smartforce Attachments Improve Grip</li>
                    <li>Aligners Move Teeth In Stages</li>
                    <li>20-22 Hour Wear Drives Results</li>
                    <li>Retainers Protect Final Alignment</li>
                  </ul>
                </div>
                <Image
                  className="mx-auto my-[15px] h-[180px] w-[180px] self-center rounded-full object-cover sm:mx-0 sm:my-0 sm:h-[220px] sm:w-[220px]"
                  src="/home/services/invisible-aligners.jpg"
                  alt="Clear aligner treatment"
                  width={280}
                  height={250}
                />
                <strong className="absolute inset-x-0 bottom-0 bg-[#25bfb9] p-2 text-center text-[17px] text-white">
                  Call: +91 9567124888
                </strong>
              </section>

              <h2>Your Invisalign Timeline At Elite Dental Kochi</h2>
              <ul>
                <li>Day 1: Consultation and 3D scan</li>
                <li>Week 3: Receive first aligner set</li>
                <li>Week 4–8: Attachments placed if needed</li>
                <li>Month 3–6: First progress check</li>
                <li>Month 18–24: Complete active treatment</li>
                <li>Final Phase: Start retainers for stability</li>
              </ul>
              <p>
                Start your Invisalign journey in Kochi. Visit Elite Dental Studio for a
                complimentary 3D scan and treatment preview.
              </p>
            </article>
          </main>
          <BlogSidebar />
        </div>
      </section>
      <div className="mx-auto max-w-[1240px] [&_#appointment]:px-5 sm:[&_#appointment]:px-8 lg:[&_#appointment]:px-[34px] [&_.faq-section]:px-5 sm:[&_.faq-section]:px-8 lg:[&_.faq-section]:px-[34px]">
        <FAQSection />
        <BookAppointmentSection />
      </div>
    </SitePage>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = findBlogPost(String(params?.slug));
  return post ? { props: { post } } : { notFound: true };
};
