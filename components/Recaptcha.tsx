import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
    };
  }
}

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function recaptchaEnabled() {
  return Boolean(siteKey);
}

export default function Recaptcha({ onTokenChange }: { onTokenChange: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  const renderWidget = () => {
    if (!siteKey || !window.grecaptcha || !containerRef.current || rendered.current) return;
    window.grecaptcha.render(containerRef.current, {
      sitekey: siteKey,
      callback: onTokenChange,
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
    });
    rendered.current = true;
  };

  useEffect(() => {
    renderWidget();
  });

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} className="flex justify-center" aria-label="Spam protection" />
    </>
  );
}
