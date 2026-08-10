import { useEffect, useId, useState } from "react";
import logoUrl from "../../../assets/svgs/logo/vps-logo-fff-frame.svg";
import "./header.css";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Rooms & Villas", href: "/rooms-and-villas" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Gallery", href: "/#gallery" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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
            onClick={() => setIsMenuOpen((current) => !current)}
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
                    : item.href === "/#home" && currentPath === "/"
                      ? "page"
                      : undefined
                }
              >
                {item.label}
              </a>
            ))}
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
