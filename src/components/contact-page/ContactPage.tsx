import { useEffect } from "react";
import galleryHeroSmall from "../../../assets/images/optimized/gallery/gallery-image-35-720.webp";
import galleryHeroLarge from "../../../assets/images/optimized/gallery/gallery-image-35-1600.webp";
import facebookIconUrl from "../../../assets/svgs/social-media/facebook-icon-frame.svg";
import instagramIconUrl from "../../../assets/svgs/social-media/instagram-icon-frame.svg";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import "../accommodation-inquiry/accommodation-inquiry.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { InquiryForm } from "../inquiry-form/InquiryForm";
import "./contact-page.css";

const contactDirectionContract = `
THESIS: The contact page starts in the resort landscape and resolves into one unmistakable contact surface, not a stack of disconnected outreach methods.
OWN-WORLD: The Gallery's beachfront photography leads into a forest-green field, where a sand-toned message surface overlaps the location map.
STORY: Visitors encounter the resort first, take in one centered title, then continue into the exposed inquiry form and its alternate contact paths.
FIRST VIEWPORT: The Gallery's full image hero keeps its dark overlay and one centered Contact title while the form rises from the forest field below.
FORM: Centered sand-toned form at 95% width; a message grid leads with name, subject, email, phone, and message, then a divided two-row contact layout presents icon-led direct paths above the map's upper edge.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function ContactPage() {
  usePageMetadata(
    "Contact Us | Villas Playa Sámara",
    "Contact Villas Playa Sámara by message, email, phone, WhatsApp, toll-free telephone, or map.",
  );

  useEffect(() => {
    const contract = document.createComment(contactDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);
    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell contact-page">
      <Header />

      <main id="main-content">
        <section className="contact-page__hero" aria-labelledby="contact-page-title">
          <img
            src={galleryHeroLarge}
            srcSet={`${galleryHeroSmall} 720w, ${galleryHeroLarge} 1600w`}
            sizes="100vw"
            width={1920}
            height={1470}
            alt=""
            fetchPriority="high"
            decoding="async"
          />

          <div className="content-wrap contact-page__hero-layout">
            <h1 id="contact-page-title">
              Stay in touch, <span>with Sámara.</span>
            </h1>
          </div>
        </section>

        <section className="contact-page__inquiry" id="contact-form" aria-label="Contact Villas Playa Sámara">
          <div className="content-wrap">
            <InquiryForm
              className="contact-page__form"
              idPrefix="contact-inquiry"
              ariaLabel="Contact Villas Playa Sámara"
              includePhone
              includeSubject
              labels={{
                name: "Full name",
                email: "Email",
                phone: "Phone",
                subject: "Subject",
                message: "Message",
              }}
              requiredFields={["name", "email", "message"]}
              formHeader={
                <>
                  <h2 className="subsection-title contact-page__message-heading">Send us a message</h2>
                  <p className="section-copy contact-page__response-time">
                    Our team will get back to you within 24 hours.
                  </p>
                </>
              }
              aside={
                <>
                  <h2 className="subsection-title contact-page__contact-heading">Get in touch</h2>
                  <address className="contact-page__contact-details">
                    <div className="contact-page__contact-item">
                      <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                      <div>
                        <strong>Address</strong>
                        <a href="https://maps.app.goo.gl/4P1U2n5NMWqT6FKAA" target="_blank" rel="noreferrer">
                          Villas Playa Samara, Playa Sámara, Guanacaste, Costa Rica
                        </a>
                      </div>
                    </div>
                    <div className="contact-page__contact-item">
                      <span className="material-symbols-outlined" aria-hidden="true">call</span>
                      <div>
                        <strong>Phone</strong>
                        <a href="tel:+50641024040">+506 4102 4040</a>
                      </div>
                    </div>
                    <div className="contact-page__contact-item">
                      <span className="material-symbols-outlined" aria-hidden="true">phone_in_talk</span>
                      <div>
                        <strong>Toll free</strong>
                        <a href="tel:+18332685858">+1 833 2685 858</a>
                      </div>
                    </div>
                    <div className="contact-page__contact-item">
                      <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                      <div>
                        <strong>WhatsApp</strong>
                        <a href="https://wa.me/50686598383" target="_blank" rel="noreferrer">8659-8383</a>
                      </div>
                    </div>
                    <div className="contact-page__contact-item">
                      <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                      <div>
                        <strong>Email</strong>
                        <a href="mailto:reserve@villasplayasamara.com">reserve@villasplayasamara.com</a>
                      </div>
                    </div>
                  </address>

                  <nav className="contact-page__social-links" aria-label="Villas Playa Sámara social media">
                    <a href="https://www.instagram.com/villasplayasamara/" target="_blank" rel="noreferrer">
                      <img src={instagramIconUrl} alt="" />
                      <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/HotelVillasPlayaSamaraBeachFrontAllInclusiveResort/" target="_blank" rel="noreferrer">
                      <img src={facebookIconUrl} alt="" />
                      <span>Facebook</span>
                    </a>
                  </nav>
                </>
              }
            />
          </div>
        </section>

        <section className="contact-page__map-section" aria-label="Map showing Villas Playa Sámara">
          <div className="contact-page__map-shell">
            <iframe
              className="contact-page__map-frame"
              title="Map showing Villas Playa Sámara in Playa Sámara, Guanacaste, Costa Rica"
              src="https://www.openstreetmap.org/export/embed?bbox=-85.5099928379059%2C9.871478211803302%2C-85.50656765699388%2C9.874123340323246&layer=mapnik"
              width="100%"
              height="500"
              loading="lazy"
              tabIndex={-1}
              scrolling="no"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
