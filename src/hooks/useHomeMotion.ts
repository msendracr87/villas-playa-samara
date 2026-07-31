import { useEffect } from "react";

const motionSelector = "[data-home-motion]";

export function useHomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const motionElements = Array.from(
      document.querySelectorAll<HTMLElement>(motionSelector),
    );
    let observer: IntersectionObserver | null = null;

    const stopMotion = () => {
      observer?.disconnect();
      observer = null;
      root.classList.remove("home-motion-ready");
    };

    const startMotion = () => {
      stopMotion();

      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        return;
      }

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
          rootMargin: "0px 0px -5% 0px",
          threshold: 0.04,
        },
      );

      root.classList.add("home-motion-ready");
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
