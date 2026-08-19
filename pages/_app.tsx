import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import ConsultationPopup from "@/components/ConsultationPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, [data-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element) => element.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
      <ConsultationPopup />
    </div>
  );
}
