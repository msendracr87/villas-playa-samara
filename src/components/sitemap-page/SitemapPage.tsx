import { useEffect } from "react";
import { accommodations } from "../../data/accommodations";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./sitemap-page.css";

type SitemapLink = {
  label: string;
  href: string;
  detail?: boolean;
};

type SitemapSection = {
  id: string;
  title: string;
  description: string;
  links: readonly SitemapLink[];
};

const sitemapSections: readonly SitemapSection[] = [
  {
    id: "stay",
    title: "Stay",
    description: "Explore every room, suite, and beachfront villa.",
    links: [
      { label: "Rooms & Villas", href: "/rooms-and-villas" },
      ...accommodations.map((accommodation) => ({
        label: accommodation.name,
        href: `/rooms-and-villas/${accommodation.slug}`,
        detail: true,
      })),
    ],
  },
  {
    id: "dining",
    title: "Dining",
    description: "Meet the resort’s four current dining concepts.",
    links: [
      { label: "Dining", href: "/dining" },
      { label: "Arrecife", href: "/dining/arrecife", detail: true },
      { label: "Baja Azul", href: "/dining/baja-azul", detail: true },
      { label: "Trattoria", href: "/dining/trattoria", detail: true },
      { label: "Veranda", href: "/dining/veranda", detail: true },
    ],
  },
  {
    id: "experiences",
    title: "Experiences",
    description: "Find ways to explore Sámara, on land and on the water.",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Activities", href: "/experiences/activities", detail: true },
      { label: "Day Tours", href: "/experiences/day-tours", detail: true },
      { label: "Rentals", href: "/experiences/rentals", detail: true },
    ],
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Discover the resort’s current movement and treatment spaces.",
    links: [
      { label: "Wellness", href: "/wellness" },
      { label: "Gym", href: "/wellness/gym", detail: true },
      { label: "Spa", href: "/wellness/spa", detail: true },
    ],
  },
  {
    id: "explore",
    title: "Explore & connect",
    description: "Plan your visit, browse the resort, or get in touch.",
    links: [
      { label: "Home", href: "/" },
      { label: "Gallery", href: "/gallery" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Media Center", href: "/media-center" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    description: "Read the website’s current policies and terms.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const sitemapDirectionContract = `
THESIS: Every current public page should be findable in one calm directory; the page refuses a dense, undifferentiated wall of links.
OWN-WORLD: VPS forest, sand, lime, generous editorial spacing, square edges, fine rules, and clear parent-to-detail hierarchy.
STORY: Visitors scan the section index, jump to a resort family, and follow the exact page they need.
FIRST VIEWPORT: A concise forest hero introduces the directory and leads directly into the section index and first route family.
FORM: Sticky section index paired with grouped directory; third grounded structure; seed 648eb518.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function SitemapPage() {
  usePageMetadata(
    "Sitemap | Villas Playa Sámara",
    "Browse every current public page on the Villas Playa Sámara website, organized by resort experience.",
  );

  useEffect(() => {
    const contract = document.createComment(sitemapDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);
    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell sitemap-page">
      <Header />

      <main id="main-content">
        <section className="sitemap-page__hero" aria-labelledby="sitemap-title">
          <div className="content-wrap sitemap-page__hero-layout">
            <div>
              <h1 className="display-title display-title--light" id="sitemap-title">
                Sitemap
              </h1>
              <p>
                Find every current public page on the Villas Playa Sámara
                website, organized by what you would like to explore.
              </p>
            </div>

            <a className="text-link text-link--light text-link--down" href="#site-directory">
              Browse all pages
              <span className="material-symbols-outlined" aria-hidden="true">
                south
              </span>
            </a>
          </div>
        </section>

        <section
          className="sitemap-page__directory"
          id="site-directory"
          aria-label="Website directory"
        >
          <div className="content-wrap sitemap-page__directory-layout">
            <aside className="sitemap-page__index">
              <p>Browse by section</p>
              <nav aria-label="Sitemap sections">
                {sitemapSections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="sitemap-page__sections">
              {sitemapSections.map((section) => (
                <section
                  className="sitemap-page__section"
                  id={section.id}
                  key={section.id}
                  aria-labelledby={`${section.id}-title`}
                >
                  <header className="sitemap-page__section-heading">
                    <h2 className="section-title" id={`${section.id}-title`}>
                      {section.title}
                    </h2>
                    <p>{section.description}</p>
                  </header>

                  <nav aria-label={`${section.title} pages`}>
                    {section.links.map((link) => (
                      <a
                        className={link.detail ? "sitemap-page__link sitemap-page__link--detail" : "sitemap-page__link"}
                        href={link.href}
                        key={link.href}
                        aria-current={link.href === "/sitemap" ? "page" : undefined}
                      >
                        <span>{link.label}</span>
                        <span className="material-symbols-outlined" aria-hidden="true">
                          arrow_forward
                        </span>
                      </a>
                    ))}
                  </nav>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
