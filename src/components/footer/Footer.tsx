import logoUrl from "../../../assets/svgs/logo/vps-logo-fff-frame.svg";
import qvivaLogoUrl from "../../../assets/images/logos/QVivaResorts-Logo2-1-300x126.png";
import facebookIconUrl from "../../../assets/svgs/social-media/facebook-icon-frame.svg";
import instagramIconUrl from "../../../assets/svgs/social-media/instagram-icon-frame.svg";
import "./footer.css";

const footerLinks = [
  { label: "Rooms & Villas", href: "/rooms-and-villas" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Wellness", href: "/wellness" },
  { label: "Gallery", href: "/gallery" },
] as const;

const contactDetails = [
  {
    label: "Email",
    value: "reserve@villasplayasamara.com",
    href: "mailto:reserve@villasplayasamara.com",
  },
  { label: "Phone", value: "2503-1905", href: "tel:+50625031905" },
  {
    label: "WhatsApp",
    value: "8659-8383",
    href: "https://wa.me/50686598383",
  },
  {
    label: "Toll free",
    value: "+1 833 2685 858",
    href: "tel:+18332685858",
  },
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

          <div className="site-footer__social" aria-label="Social media">
            <a
              href="https://www.facebook.com/HotelVillasPlayaSamaraBeachFrontAllInclusiveResort/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Villas Playa Sámara on Facebook"
            >
              <img src={facebookIconUrl} alt="" />
            </a>
            <a
              href="https://www.instagram.com/villasplayasamara/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Villas Playa Sámara on Instagram"
            >
              <img src={instagramIconUrl} alt="" />
            </a>
          </div>
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
          <h2 className="subsection-title subsection-title--light">Close to the beach. At home in Sámara.</h2>
          <a href="/#book">
            Book now
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="site-footer__contact">
          <dl className="site-footer__contact-list">
            {contactDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>
                  <a
                    href={detail.href}
                    {...(detail.href.startsWith("https")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {detail.value}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt>Address</dt>
              <dd>
                <a
                  href="https://maps.app.goo.gl/4P1U2n5NMWqT6FKAA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Villas Playa Samara, Playa Sámara, Guanacaste, Costa Rica
                </a>
              </dd>
            </div>
          </dl>

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
          <span>© 2026 QViva Resorts. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
