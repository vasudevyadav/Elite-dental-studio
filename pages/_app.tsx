import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
import ConsultationPopup from "@/components/ConsultationPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const popupPageKey = router.asPath.split("?")[0] || "/";

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
      { rootMargin: "0px 0px -8%", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const enableAnalytics = () => setAnalyticsEnabled(true);
    const options = { once: true, passive: true } as const;
    window.addEventListener("pointerdown", enableAnalytics, options);
    window.addEventListener("touchstart", enableAnalytics, options);
    window.addEventListener("keydown", enableAnalytics, { once: true });
    const fallback = window.setTimeout(enableAnalytics, 30_000);

    return () => {
      window.removeEventListener("pointerdown", enableAnalytics);
      window.removeEventListener("touchstart", enableAnalytics);
      window.removeEventListener("keydown", enableAnalytics);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={poppins.className}>
      {analyticsEnabled && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQ39SL8');`}
        </Script>
      )}
      <div id="site-content" className="pb-[calc(72px+env(safe-area-inset-bottom))] md:pb-0">
        <Component {...pageProps} />
      </div>
      <ConsultationPopup key={popupPageKey} />
    </div>
  );
}
