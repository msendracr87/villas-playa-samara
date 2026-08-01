import logoUrl from "../../../assets/svgs/logo/vps-logo-fff-frame.svg";
import qvivaLogoUrl from "../../../assets/images/logos/QVivaResorts-Logo2-1-300x126.png";
import "./footer.css";

const footerLinks = [
  { label: "Rooms & Villas", href: "/rooms-and-villas" },
  { label: "Dining", href: "/#dining" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Gallery", href: "/#gallery" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="content-wrap site-footer__top"
        data-home-motion="footer"
      >
        <div className="site-footer__brand">
          <a href="/" aria-label="Villas Playa Sámara home">
            <img src={logoUrl} alt="" />
          </a>
          <p>
            A welcoming all-inclusive beachfront resort on Sámara Bay,
            Guanacaste, Costa Rica.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p>Explore</p>
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__stay">
          <p>Begin your stay</p>
          <h2>Close to the beach. At home in Sámara.</h2>
          <a href="/#book">
            Book now
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      <div className="content-wrap site-footer__bottom">
        <a
          className="site-footer__qviva"
          href="https://qvivaresorts.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit QViva Resorts website"
        >
          <img src={qvivaLogoUrl} alt="" />
        </a>

        <div className="site-footer__legal">
          <span>Villas Playa Sámara · Guanacaste, Costa Rica</span>
          <span>© 2026 QViva Resorts. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
