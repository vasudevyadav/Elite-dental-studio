import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SitePage from "@/components/SitePage";
import FAQSection from "@/components/FAQSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import { blogPosts, blogCategories, findBlogPost, recentPosts } from "@/components/blogData";

type Props = {
  post: (typeof blogPosts)[number];
};

export default function BlogPostPage({ post }: Props) {
  const isInvisalignPost = post.slug === "invisalign-clear-aligners-elite-dental-studio-kochi-benefits-process-cost";

  return (
    <SitePage title={`${post.title} | Elite Dental Studio`} description={post.excerpt}>
      <section className="px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
            <main className="space-y-10">
              <article className="rounded-[28px] bg-[#f0faf8] p-6 shadow-[0_24px_70px_rgba(22,110,113,0.12)] sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#1f8f83]">Latest Posts</p>
                    <h1 className="mt-4 text-4xl font-black leading-tight text-[#164e52] sm:text-5xl">
                      {post.title}
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-[#47595a] sm:text-lg">
                      {post.excerpt}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-[#25cdbd] px-4 py-2 text-sm font-semibold text-white">{post.author}</span>
                      <span className="text-sm text-[#47595a]">Published: {post.date}</span>
                    </div>
                    <Link href="/blog" className="mt-6 inline-flex rounded-full bg-[#296f73] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#234f51]/15 transition hover:bg-[#205c60]">
                      Back to Blog
                    </Link>
                  </div>
                  <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_35px_rgba(22,110,113,0.1)]">
                    <Image src={post.image} alt={post.title} width={640} height={520} className="h-full w-full object-cover" />
                  </div>
                </div>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(22,110,113,0.08)] sm:p-10">
                <div className="space-y-8 text-[#395554]">
                  {post.content.map((paragraph, index) => (
                    <p key={index} className="text-base leading-8 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}

                  {isInvisalignPost && (
                    <>
                      <div className="rounded-[24px] bg-[#e5f8fb] p-7">
                        <h2 className="text-2xl font-bold text-[#164e52]">Why Invisalign Leads The Clear Aligner Category?</h2>
                        <ul className="mt-5 space-y-4 text-[#334f51]">
                          <li>• Invisalign combines advanced material with precise digital planning.</li>
                          <li>• SmartTrack material is more elastic than generic aligner plastic.</li>
                          <li>• Attachments help guide tooth movement with better control.</li>
                          <li>• Aligners are changed in stages for smoother progress.</li>
                          <li>• 20-22 hour wear delivers consistent results.</li>
                          <li>• Retainers protect the final alignment long-term.</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-[#164e52]">5 Benefits Of Invisalign Clear Aligners</h2>
                        <div className="mt-6 space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-[#1f4c4d]">1. Near-Invisible Look For Work And Social Life</h3>
                            <p className="mt-2 text-base leading-8">
                              Invisalign trays stay unnoticeable at typical meeting or conversation distance, even in college classes or video calls. You can speak, smile and interact without worrying about visible brackets.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f4c4d]">2. Comfortable Fit Without Wires Or Brackets</h3>
                            <p className="mt-2 text-base leading-8">
                              There are no wires that poke your cheeks or brackets that rub your lips. Most people adjust to the smooth, custom-made trays within 48 hours.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f4c4d]">3. Easier Eating Without Food Restrictions</h3>
                            <p className="mt-2 text-base leading-8">
                              You remove Invisalign before eating. Fixed braces often mean you avoid 30+ foods. Flossing with threaders can take 8 to 10 minutes.
                            </p>
                            <p className="mt-2 text-base leading-8">
                              With Invisalign, you do not need to avoid sticky, hard or crunchy foods the way you often do with braces. You can eat normally, then brush and wear your trays again.
                            </p>
                            <p className="mt-2 text-base leading-8">
                              This is one of the most practical benefits of Invisalign in Kochi for busy students, professionals and people who eat out often.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f4c4d]">4. Better Brushing And Flossing Every Day</h3>
                            <p className="mt-2 text-base leading-8">
                              Invisalign makes oral hygiene easier because you remove the trays before cleaning your teeth.
                            </p>
                            <p className="mt-2 text-base leading-8">
                              This helps reduce plaque buildup, gum irritation and food trapping during treatment.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f4c4d]">5. Digital Planning For Predictable Smile Correction</h3>
                            <p className="mt-2 text-base leading-8">
                              Invisalign treatment uses advanced imaging and 3D scanning to plan tooth movement before you start.
                            </p>
                            <p className="mt-2 text-base leading-8">
                              The scan lets your dentist check your bite, tooth position and expected smile changes. This gives you a clearer idea of the treatment path before the first aligner arrives.
                            </p>
                          </div>
                        </div>
                        <p className="mt-6 text-base leading-8">
                          These practical benefits of Invisalign in Kochi matter for students, professionals and busy parents.
                        </p>
                      </div>

                      <div className="rounded-[24px] bg-[#f0faf8] p-7">
                        <h2 className="text-2xl font-bold text-[#164e52]">Your Invisalign Journey At Elite Dental Studio Kochi</h2>
                        <p className="mt-4 text-base leading-8">
                          Your Invisalign journey at Elite Dental Studio Kochi starts with a scan, moves into digital planning and continues with regular progress checks.
                        </p>
                        <ul className="mt-5 space-y-4 text-[#334f51]">
                          <li>• Consultation takes around 45 minutes.</li>
                          <li>• Digital photos and X-rays guide assessment.</li>
                          <li>• Intra-oral scans take about 12 minutes.</li>
                          <li>• Both arches get scanned accurately.</li>
                          <li>• ClinCheck shows your future smile.</li>
                          <li>• First aligners arrive in 10-14 days.</li>
                          <li>• Check-ups happen every 6-8 weeks.</li>
                          <li>• Virtual scans support progress monitoring.</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base leading-8">
                          Your first visit helps us understand your teeth, bite and smile goals. The digital 3D scan creates a map of your mouth without messy impressions.
                        </p>
                        <p className="mt-4 text-base leading-8">
                          ClinCheck treatment simulation lets you visualize the planned result before treatment starts. This helps you make a clear decision about clear aligner treatment in Kochi.
                        </p>
                      </div>

                      <div className="rounded-[24px] bg-[#d8f9fb] p-7">
                        <h2 className="text-2xl font-bold text-[#164e52]">What Makes Invisalign Work?</h2>
                        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
                          <div>
                            <ul className="space-y-4 text-[#334f51]">
                              <li>• SmartTrack material supports steady force.</li>
                              <li>• 3D scans map tooth movement precisely.</li>
                              <li>• SmartForce attachments improve grip.</li>
                              <li>• Aligners move teeth in stages.</li>
                              <li>• 20-22 hour wear drives results.</li>
                              <li>• Retainers protect final alignment.</li>
                            </ul>
                          </div>
                          <div className="overflow-hidden rounded-[24px] bg-white p-4">
                            <Image src="/home/services/invisible-aligners.jpg" alt="Invisalign aligner" width={280} height={240} className="h-full w-full object-cover" />
                          </div>
                        </div>
                        <div className="mt-6 rounded-[16px] bg-[#164e52] px-5 py-4 text-white">
                          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Understand your Invisalign suitability</p>
                          <p className="mt-3 text-lg font-bold">Call: +91 9567124888</p>
                        </div>
                      </div>

                      <div className="rounded-[24px] bg-[#f4fbfa] p-7">
                        <h2 className="text-2xl font-bold text-[#164e52]">Your Invisalign Timeline At Elite Dental Kochi</h2>
                        <ul className="mt-5 space-y-3 text-[#334f51]">
                          <li>• Day 1: Consultation and 3D scan</li>
                          <li>• Week 3: Receive first aligner sets</li>
                          <li>• Week 4-8: Attachments placed if needed</li>
                          <li>• Month 3-6: Progress check</li>
                          <li>• Month 18-24: Complete active treatment</li>
                          <li>• Final phase: Start retainers for stability</li>
                        </ul>
                      </div>

                      <p className="text-base font-semibold leading-8 text-[#164e52]">
                        Start your Invisalign journey in Kochi. Visit Elite Dental Studio for a complimentary 3D scan and treatment preview.
                      </p>
                    </>
                  )}
                </div>
              </article>
            </main>

            <aside className="space-y-10">
              <div className="rounded-[24px] bg-[#2b7478] px-7 py-7 text-white shadow-[0_18px_40px_rgba(15,67,69,0.18)]">
                <h2 className="border-b border-white/50 pb-4 text-2xl font-bold">Categories</h2>
                <ul className="mt-5 space-y-4 text-base font-semibold">
                  <li className="flex gap-3">
                    <span>•</span>
                    <Link href="/blog" className="text-white/90 transition hover:text-white">
                      All
                    </Link>
                  </li>
                  {blogCategories.map((category) => (
                    <li key={category} className="flex gap-3">
                      <span>•</span>
                      <Link href="/blog" className="text-white/90 transition hover:text-white">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] bg-[#25cdbd] px-7 py-7 text-white shadow-[0_18px_40px_rgba(37,205,189,0.18)]">
                <h2 className="border-b border-white/60 pb-4 text-2xl font-bold">Recent Posts</h2>
                <ul className="mt-5 space-y-4 text-base font-semibold leading-6">
                  {blogPosts.slice(0, 5).map((recentPostItem) => (
                    <li key={recentPostItem.slug} className="flex gap-3">
                      <span>•</span>
                      <Link href={`/blog/${recentPostItem.slug}`} className="text-white/90 transition hover:text-white">
                        {recentPostItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <FAQSection />
          <BookAppointmentSection />
        </div>
      </section>
    </SitePage>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = findBlogPost(String(params?.slug));
  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
