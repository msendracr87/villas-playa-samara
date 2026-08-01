import { useEffect, useRef } from "react";

export function useParallaxBackground(cssProperty: `--${string}`) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        section.style.removeProperty(cssProperty);
        return;
      }

      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (bounds.bottom < 0 || bounds.top > viewportHeight) {
        return;
      }

      const sectionCenter = bounds.top + bounds.height / 2;
      const viewportCenter = viewportHeight / 2;
      const offset = Math.max(
        Math.min((viewportCenter - sectionCenter) * 0.5, 160),
        -160,
      );

      section.style.setProperty(cssProperty, `${offset.toFixed(2)}px`);
    };

    const requestParallaxUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    reducedMotion.addEventListener("change", requestParallaxUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      reducedMotion.removeEventListener("change", requestParallaxUpdate);
      section.style.removeProperty(cssProperty);
    };
  }, [cssProperty]);

  return sectionRef;
}
