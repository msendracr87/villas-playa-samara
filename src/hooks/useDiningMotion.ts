import { useLayoutEffect } from "react";

const motionSelector = "[data-dining-motion]";

export function useDiningMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let observer: IntersectionObserver | null = null;

    const stopMotion = () => {
      observer?.disconnect();
      observer = null;
      root.classList.remove("dining-motion-ready");
    };

    const startMotion = () => {
      stopMotion();

      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        return;
      }

      const motionElements = Array.from(
        document.querySelectorAll<HTMLElement>(motionSelector),
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-motion-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -7% 0px",
          threshold: 0.08,
        },
      );

      root.classList.add("dining-motion-ready");
      motionElements.forEach((element) => observer?.observe(element));
    };

    startMotion();
    reducedMotion.addEventListener("change", startMotion);

    return () => {
      reducedMotion.removeEventListener("change", startMotion);
      stopMotion();
    };
  }, []);
}
