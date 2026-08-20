import { useLayoutEffect } from "react";

const motionSelector = "[data-experiences-motion]";

export function useExperiencesMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let observer: IntersectionObserver | null = null;
    let hashScrollFrame = 0;

    const stopMotion = () => {
      observer?.disconnect();
      observer = null;
      root.classList.remove("experiences-motion-ready");
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

      root.classList.add("experiences-motion-ready");
      motionElements.forEach((element) => observer?.observe(element));
    };

    startMotion();
    const hashTargetId = window.location.hash.slice(1);

    if (hashTargetId) {
      const hashTarget = document.getElementById(hashTargetId);

      if (hashTarget) {
        hashScrollFrame = window.requestAnimationFrame(() => {
          hashTarget.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        });
      }
    }

    reducedMotion.addEventListener("change", startMotion);

    return () => {
      window.cancelAnimationFrame(hashScrollFrame);
      reducedMotion.removeEventListener("change", startMotion);
      stopMotion();
    };
  }, []);
}
