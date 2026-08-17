import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type SitePageProps = {
  title: string;
  description: string;
  children: ReactNode;
  mainClassName?: string;
};

export default function SitePage({
  title,
  description,
  children,
  mainClassName = "",
}: SitePageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="overflow-x-clip bg-white">
        <Navbar />
        <main className={mainClassName}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
