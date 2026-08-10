import { useRouter } from "next/router";
import { useState } from "react";

type AnimatedArrowCtaProps = {
  label: string;
  href?: string;
  onAction?: () => void;
  className?: string;
  arrowClassName?: string;
  target?: "_self" | "_blank";
};

export default function AnimatedArrowCta({
  label,
  href,
  onAction,
  className = "",
  arrowClassName = "text-[#07515a]",
  target = "_self",
}: AnimatedArrowCtaProps) {
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);

  const runAction = () => {
    if (onAction) onAction();
    if (!href) {
      setIsRunning(false);
      return;
    }
    if (target === "_blank") {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("/")) {
      void router.push(href);
    } else {
      window.location.assign(href);
    }
  };

  const handleClick = () => {
    if (isRunning) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      runAction();
      return;
    }

    setIsRunning(true);
    window.setTimeout(runAction, 1830);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`slide-cta ${isRunning ? "is-running" : ""} ${className}`}
    >
      <span className="slide-cta-label" aria-hidden="true">
        {label.split("").map((letter, index) => (
          <span key={`${letter}-${index}`} style={{ animationDelay: `${180 + index * 78}ms` }}>
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
      <span className="slide-cta-arrow" aria-hidden="true">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-white ${arrowClassName}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
          </svg>
        </span>
      </span>
    </button>
  );
}
