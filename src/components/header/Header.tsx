import { useEffect, useId, useState } from "react";
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

export function Header() {
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
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-header__layout">
        <div className="site-header__brand-panel">
          <a
            className="site-header__brand"
            href="/"
            aria-label="Villas Playa Sámara home"
          >
            <img src={logoUrl} alt="" />
          </a>

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

            <a href="/#gallery" onClick={closeMenu}>
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
