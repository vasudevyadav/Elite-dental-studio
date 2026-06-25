import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const counter = counterRef.current;

    if (!counter) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      hasAnimated.current = true;
      animationFrame = requestAnimationFrame(() => setCount(value));

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;
        observer.disconnect();

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, value]);

  return (
    <span
      ref={counterRef}
      aria-label={`${value}${suffix}`}
      className="tabular-nums"
    >
      <span aria-hidden="true">
        {count}
        {suffix}
      </span>
    </span>
  );
}
