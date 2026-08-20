import { useEffect, useId, useState } from "react";
import stickyLogoUrl from "../../../assets/svgs/logo/vps-icon-c4d658-frame.svg";
import logoUrl from "../../../assets/svgs/logo/vps-logo-c4d658-fff-frame.svg";
import "./header.css";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Rooms & Villas", href: "/rooms-and-villas" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
] as const;

const wellnessItems = [
  { label: "Overview", href: "/wellness" },
  { label: "Gym", href: "/wellness/gym" },
  { label: "Spa", href: "/wellness/spa" },
] as const;

type HeaderBarProps = {
  variant: "top" | "sticky";
  isVisible?: boolean;
};

function HeaderBar({ variant, isVisible = true }: HeaderBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWellnessOpen, setIsWellnessOpen] = useState(false);
  const menuId = useId();
  const wellnessMenuId = useId();
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (!isMenuOpen && !isWellnessOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsWellnessOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen, isWellnessOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsWellnessOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => {
      if (current) {
        setIsWellnessOpen(false);
      }

      return !current;
    });
  };

  return (
    <header
      className={`site-header site-header--${variant}${variant === "sticky" && isVisible ? " is-visible" : ""}`}
      aria-hidden={variant === "sticky" ? !isVisible : undefined}
    >
      {variant === "top" && (
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
      )}

      <div className="site-header__layout">
        <div className="site-header__brand-panel">
          <a
            className="site-header__brand"
            href="/"
            aria-label="Villas Playa Sámara home"
          >
            <picture>
              {variant === "top" && (
                <source media="(max-width: 960px)" srcSet={stickyLogoUrl} />
              )}
              <img
                src={variant === "sticky" ? stickyLogoUrl : logoUrl}
                alt=""
              />
            </picture>
          </a>

          {variant === "top" && (
            <a
              className="site-header__mobile-book"
              href="/#book"
              onClick={closeMenu}
            >
              Book now
            </a>
          )}

          <button
            className="site-header__menu-button"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="site-header__menu-icons" aria-hidden="true">
              <span
                className={`material-symbols-outlined ${isMenuOpen ? "is-hidden" : "is-visible"}`}
              >
                menu
              </span>
              <span
                className={`material-symbols-outlined ${isMenuOpen ? "is-visible" : "is-hidden"}`}
              >
                close
              </span>
            </span>
          </button>
        </div>

        <div className="site-header__location">
          <span className="material-symbols-outlined" aria-hidden="true">
            location_on
          </span>
          <span>Guanacaste, Costa Rica</span>
        </div>

        <div
          className={`site-header__nav-row ${isMenuOpen ? "is-open" : ""}`}
          id={menuId}
        >
          <nav className="site-header__nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                aria-current={
                  item.href === "/rooms-and-villas" &&
                  currentPath.startsWith("/rooms-and-villas")
                    ? "page"
                    : item.href === "/dining" && currentPath.startsWith("/dining")
                      ? "page"
                    : item.href === "/experiences" &&
                        currentPath.startsWith("/experiences")
                      ? "page"
                    : item.href === "/#home" && currentPath === "/"
                      ? "page"
                      : undefined
                }
              >
                {item.label}
              </a>
            ))}

            <div className="site-header__wellness-menu">
              <button
                className="site-header__wellness-trigger"
                type="button"
                aria-controls={wellnessMenuId}
                aria-expanded={isWellnessOpen}
                aria-haspopup="true"
                aria-current={
                  currentPath.startsWith("/wellness") ? "page" : undefined
                }
                onClick={() => setIsWellnessOpen((current) => !current)}
              >
                <span>Wellness</span>
                <span
                  className={`material-symbols-outlined site-header__wellness-chevron ${isWellnessOpen ? "is-open" : ""}`}
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>

              {isWellnessOpen && (
                <div
                  className="site-header__wellness-dropdown"
                  id={wellnessMenuId}
                  aria-label="Wellness sections"
                >
                  {wellnessItems.map((item) => (
                    <a
                      className="site-header__wellness-option"
                      href={item.href}
                      key={item.label}
                      onClick={closeMenu}
                      aria-current={
                        currentPath === item.href ? "page" : undefined
                      }
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={closeMenu}
              aria-current={currentPath === "/gallery" ? "page" : undefined}
            >
              Gallery
            </a>
          </nav>

          <a className="site-header__book" href="/#book" onClick={closeMenu}>
            Book now
          </a>

          <div className="site-header__mobile-location">
            <span className="material-symbols-outlined" aria-hidden="true">
              location_on
            </span>
            <span>Guanacaste, Costa Rica</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Header() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main-content");
    const hero = main?.firstElementChild as HTMLElement | null;
    const footer = document.querySelector<HTMLElement>(".site-footer");
    const stickyHeader = document.querySelector<HTMLElement>(
      ".site-header--sticky",
    );

    if (!hero || !footer || !stickyHeader) {
      return;
    }

    let animationFrame = 0;
    let previousScrollY = Math.max(window.scrollY, 0);
    let isScrollingUp = false;
    const scrollDirectionThreshold = 6;

    const updateStickyVisibility = () => {
      animationFrame = 0;

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - previousScrollY;

      if (Math.abs(scrollDelta) >= scrollDirectionThreshold) {
        isScrollingUp = scrollDelta < 0;
        previousScrollY = currentScrollY;
      }

      const stickyTop = Number.parseFloat(
        window.getComputedStyle(stickyHeader).top,
      );
      const stickyBottom = stickyTop + stickyHeader.offsetHeight;
      const hasPassedHero = hero.getBoundingClientRect().bottom <= 0;
      const hasReachedFooter =
        footer.getBoundingClientRect().top <= stickyBottom;

      setIsStickyVisible(
        hasPassedHero && !hasReachedFooter && isScrollingUp,
      );
    };

    const requestVisibilityUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateStickyVisibility);
      }
    };

    updateStickyVisibility();
    window.addEventListener("scroll", requestVisibilityUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestVisibilityUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestVisibilityUpdate);
      window.removeEventListener("resize", requestVisibilityUpdate);
    };
  }, []);

  return (
    <>
      <HeaderBar variant="top" />
      <HeaderBar variant="sticky" isVisible={isStickyVisible} />
    </>
  );
}
