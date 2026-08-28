import { useEffect } from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../privacy-policy-page/privacy-policy-page.css";
import "./cookie-policy-page.css";

type CookieSection = {
  id: string;
  number: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  special?: "categories" | "preferences" | "inventory";
};

const cookieSections: readonly CookieSection[] = [
  {
    id: "what-are-cookies",
    number: "1",
    title: "What are cookies?",
    paragraphs: [
      "Cookies are small text files that websites may store on your device when you visit them.",
      "Some cookies are placed directly by Villas Playa Sámara, while others may be placed by third-party services integrated into the website.",
    ],
    bullets: [
      "Function correctly",
      "Remember selected preferences",
      "Maintain sessions",
      "Support booking or inquiry tools",
      "Understand website usage and measure performance",
      "Support campaign measurement, where enabled",
    ],
  },
  {
    id: "similar-technologies",
    number: "2",
    title: "Similar technologies",
    paragraphs: [
      "The website may also use technologies such as local storage, session storage, tracking pixels, tags, embedded scripts, analytics identifiers, and advertising identifiers.",
      "For simplicity, this policy may refer to these technologies collectively as “cookies.”",
    ],
  },
  {
    id: "why-we-use-cookies",
    number: "3",
    title: "Why we use cookies",
    paragraphs: [
      "Cookies may be used to operate essential website functions, maintain secure sessions, support reservations, remember visitor choices, improve website usability, measure traffic and performance, identify technical issues, understand referral sources, measure marketing campaigns, and support advertising or remarketing if enabled.",
      "Non-essential cookies should only be used in accordance with the website’s approved consent configuration and applicable requirements.",
    ],
  },
  {
    id: "cookie-categories",
    number: "4",
    title: "Cookie categories",
    paragraphs: [
      "The website is intended to distinguish essential cookies from optional preference, analytics, and marketing technologies.",
    ],
    special: "categories",
  },
  {
    id: "first-and-third-party",
    number: "5",
    title: "First-party and third-party cookies",
    paragraphs: [
      "First-party cookies are set by the Villas Playa Sámara website itself. They may support website functionality, security, sessions, forms, cookie preferences, and other direct website functions.",
      "Third-party cookies may be set by external services integrated into the website, including booking engines, analytics providers, embedded maps or videos, social-media platforms, marketing tools, review widgets, and chat or messaging services.",
      "Third-party providers may process information according to their own privacy and cookie policies.",
    ],
  },
  {
    id: "booking-services",
    number: "6",
    title: "Booking and reservation services",
    paragraphs: [
      "The Villas Playa Sámara website may link to or embed a separate booking engine. The booking provider may use cookies to maintain booking sessions, remember selected dates and rooms or villas, process reservation steps, secure transactions, and measure booking performance.",
      "If the booking platform is operated by a third party, its own cookie and privacy policies may apply. The final policy will identify the booking provider and explain whether the experience is embedded, hosted on a subdomain, or opened as an external website once that configuration is confirmed.",
    ],
  },
  {
    id: "embedded-content",
    number: "7",
    title: "Embedded content",
    paragraphs: [
      "Some pages may include content or functionality provided by third parties, such as maps, videos, social-media feeds, review widgets, reservation tools, external forms, and chat or messaging widgets.",
      "These services may place cookies or collect technical information when they load. Where technically appropriate, non-essential third-party content should respect the visitor’s cookie preferences. The production website must be audited to identify every embedded service.",
    ],
  },
  {
    id: "analytics",
    number: "8",
    title: "Analytics",
    paragraphs: [
      "If analytics tools are enabled, they may help Villas Playa Sámara understand which pages visitors view, how visitors move through the site, which devices are being used, where traffic originates, whether visitors complete selected actions, and how website performance can be improved.",
      "The final policy will name only analytics providers actually installed and in use on the production website. Candidate tools requiring verification include Google Analytics, Google Tag Manager, Microsoft Clarity, and other analytics or session-measurement platforms.",
    ],
  },
  {
    id: "advertising-social-media",
    number: "9",
    title: "Advertising and social-media technologies",
    paragraphs: [
      "If advertising or social-media tracking technologies are used, they may help measure advertising performance, campaign conversions, visits originating from advertisements, audience engagement, and marketing effectiveness.",
      "Possible technologies requiring verification include Meta Pixel, Google Ads conversion tracking, social-media remarketing tags, and other advertising pixels or tags. These technologies should be categorized as optional marketing cookies where appropriate.",
    ],
  },
  {
    id: "manage-preferences",
    number: "10",
    title: "How to manage cookie preferences",
    paragraphs: [
      "Visitors should be able to review or change non-essential cookie preferences through the website’s Cookie Preferences control.",
      "A visitor’s selection should be stored so the website can remember the chosen settings for an appropriate period. The consent platform, retention period, and final controls must be confirmed before this interface is published.",
    ],
    special: "preferences",
  },
  {
    id: "browser-controls",
    number: "11",
    title: "Browser controls",
    paragraphs: [
      "Most web browsers allow visitors to manage cookies through browser settings. Depending on the browser, visitors may be able to view stored cookies, delete cookies, block cookies, block third-party cookies, or clear website data.",
      "Blocking some cookies may affect certain website functions. Browser controls are separate from the Villas Playa Sámara cookie-preference panel.",
    ],
  },
  {
    id: "cookie-duration",
    number: "12",
    title: "How long cookies remain on a device",
    paragraphs: [
      "Session cookies are temporary cookies that generally expire when the browser session ends.",
      "Persistent cookies remain on the device for a defined period or until they are manually deleted.",
      "The final cookie inventory should identify actual retention periods after the production website has been audited.",
    ],
  },
  {
    id: "cookie-inventory",
    number: "13",
    title: "Cookie inventory",
    paragraphs: [
      "The published website should include an accurate inventory generated from an audit of the live production website. Each entry should identify the cookie name, provider, purpose, category, and duration.",
      "Example cookie names, providers, durations, or categories are intentionally omitted until they have been verified against the production website.",
    ],
    special: "inventory",
  },
  {
    id: "consent-choices",
    number: "14",
    title: "Your consent choices",
    paragraphs: [
      "Where appropriate, visitors should be able to accept all optional cookies, reject all optional cookies, choose individual categories, and change preferences later.",
      "Rejecting optional cookies should not prevent access to the main content of the website. Strictly necessary cookies may continue to operate because they support essential website functions.",
    ],
  },
  {
    id: "changing-preferences",
    number: "15",
    title: "Changing your preferences",
    paragraphs: [
      "Visitors should be able to change their cookie choices after the initial selection. A persistent Cookie Preferences link in the footer is recommended so the consent panel can be reopened at any time.",
      "The final implementation should allow visitors to update their choices and, where required, prevent future optional tracking after consent is withdrawn.",
    ],
  },
  {
    id: "changes",
    number: "16",
    title: "Changes to this Cookie Policy",
    paragraphs: [
      "Villas Playa Sámara may update this Cookie Policy when website technology changes, new third-party services are added, existing tools are removed, cookie categories change, privacy practices evolve, or applicable legal and regulatory requirements change.",
      "The Last Updated date should be revised whenever material changes are made.",
    ],
  },
  {
    id: "contact",
    number: "17",
    title: "Contact us",
    paragraphs: [
      "If you have questions about cookies or privacy on the Villas Playa Sámara website, please contact the resort team.",
      "Villas Playa Sámara — Playa Sámara, Guanacaste, Costa Rica.",
      "General resort contact: reserve@villasplayasamara.com.",
      "A dedicated privacy contact, final business details, and the final Cookie Preferences destination will be added after management, technical, and legal review.",
    ],
  },
];

const cookieDirectionContract = `
THESIS: Cookie choices should feel like a clear agreement, not a hidden technical trap; this page refuses the silent consent wall and the fake inventory table.
OWN-WORLD: VPS forest, sand, lime, white, square edges, fine rules, and the established policy-reading rail.
STORY: Visitors understand what cookies do, see the category model, know what they can choose, and find the honest boundary between draft guidance and live configuration.
FIRST VIEWPORT: A dark forest header carries a direct cookie-policy title and status note; the document begins below with a visible review notice, policy link, and contents rail.
FORM: Legal reading ledger, established Privacy Policy family extended for cookie choices.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

const getCookieAnchor = (id: string) => "cookie-" + id;

export function CookiePolicyPage() {
  usePageMetadata(
    "Cookie Policy & Preferences | Villas Playa Sámara",
    "Read the Villas Playa Sámara cookie policy draft covering cookie categories, consent choices, preference controls, and website technologies.",
  );

  useEffect(() => {
    const contract = document.createComment(cookieDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);
    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell privacy-page cookie-policy-page">
      <Header />
      <main id="main-content">
        <section className="privacy-page__hero" aria-labelledby="cookie-page-title">
          <div className="content-wrap privacy-page__hero-layout">
            <div className="privacy-page__hero-copy">
              <h1 id="cookie-page-title">Cookie, <span>made clear.</span></h1>
              <p>How cookies and similar technologies may help the Villas Playa Sámara website function, remember choices, understand usage, and support selected services.</p>
            </div>
            <div className="privacy-page__hero-status" aria-label="Policy status">
              <span>Development draft</span>
              <p>Management, technical, and legal review required before publication.</p>
              <p>Jurisdiction: Costa Rica</p>
            </div>
          </div>
        </section>

        <section className="privacy-page__content" id="cookie-policy-content" aria-labelledby="cookie-policy-content-title">
          <div className="content-wrap privacy-page__layout">
            <aside className="privacy-page__index">
              <p>Contents</p>
              <nav aria-label="Cookie Policy sections">
                {cookieSections.map((section) => (
                  <a href={"#" + getCookieAnchor(section.id)} key={section.id}>
                    <span>{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            <article className="privacy-page__document">
              <aside className="privacy-page__notice" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">tune</span>
                <div>
                  <strong>Draft for management, technical, and legal review</strong>
                  <p>This is a practical website-policy draft, not legal advice. Before publication, the resort must audit its live cookies, consent platform, booking and embedded services, analytics, advertising technologies, retention behavior, and final contact details.</p>
                </div>
              </aside>

              <header className="privacy-page__document-intro">
                <h2 className="section-title" id="cookie-policy-content-title">Cookie Policy &amp; Preferences</h2>
                <p>Villas Playa Sámara uses cookies and similar technologies to help the website function correctly, remember selected preferences, understand how visitors use the site, and, where enabled, support analytics and marketing activities.</p>
                <p>This policy explains what cookies are, why they may be used, the types of cookies that may appear on this website, and how visitors can manage their preferences. For more information about personal information, please review our <a href="/privacy-policy">Privacy Policy</a>.</p>
                <p className="privacy-page__legal-reference">The final version must reflect the actual cookies, analytics tools, advertising technologies, booking integrations, embedded services, and consent platform used on the live website. Example cookie names, providers, durations, and categories are not published here until verified.</p>
              </header>

              <div className="privacy-page__sections">
                {cookieSections.map((section) => (
                  <section className="privacy-page__section" id={getCookieAnchor(section.id)} key={section.id} aria-labelledby={getCookieAnchor(section.id) + "-title"}>
                    <header className="privacy-page__section-heading">
                      <span>{section.number}</span>
                      <h2 className="subsection-title" id={getCookieAnchor(section.id) + "-title"}>{section.title}</h2>
                    </header>
                    <div className="privacy-page__section-body">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {section.bullets && <><p>They can help a website:</p><ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></>}
                      {section.special === "categories" && <div className="cookie-policy-page__category-grid">
                        <div className="cookie-policy-page__category"><div><h3>Strictly necessary cookies</h3><span>Always active</span></div><p>Required for essential website functions such as security, navigation, forms, cookie-consent settings, and booking functionality.</p></div>
                        <div className="cookie-policy-page__category"><div><h3>Preference cookies</h3><span>Optional</span></div><p>May remember choices such as language, display settings, region, currency, and other non-essential preferences.</p></div>
                        <div className="cookie-policy-page__category"><div><h3>Analytics cookies</h3><span>Optional</span></div><p>May help us understand pages visited, device and browser type, approximate location, referral source, navigation paths, and website errors.</p></div>
                        <div className="cookie-policy-page__category"><div><h3>Marketing cookies</h3><span>Optional</span></div><p>May support advertising measurement, remarketing, campaign attribution, audience creation, social-media advertising, and conversion tracking.</p></div>
                      </div>}
                      {section.special === "categories" && <p className="cookie-policy-page__review-note">The final publication must confirm which cookies are genuinely necessary. Analytics, advertising, and convenience features should not be placed in that category simply to avoid consent controls.</p>}
                      {section.special === "preferences" && <dl className="cookie-policy-page__preference-list"><div><dt>Strictly necessary</dt><dd>Always active</dd></div><div><dt>Preferences</dt><dd>On / Off</dd></div><div><dt>Analytics</dt><dd>On / Off</dd></div><div><dt>Marketing</dt><dd>On / Off</dd></div></dl>}
                      {section.special === "inventory" && <div className="cookie-policy-page__inventory"><div>Cookie</div><div>Provider</div><div>Purpose</div><div>Category</div><div>Duration</div></div>}
                      {section.special === "inventory" && <p className="cookie-policy-page__review-note">The inventory remains intentionally empty until it has been verified against the production website.</p>}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="privacy-page__notice privacy-page__notice--secondary" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">settings_suggest</span>
                <div>
                  <strong>Cookie Preferences interface pending</strong>
                  <p>This development page describes the intended preference model, but it does not claim that a live consent platform is installed or that these controls currently change tracking behavior. The preference panel and footer control should be connected after the production audit and technical review.</p>
                </div>
              </aside>
            </article>
          </div>
        </section>

        <section className="privacy-page__closing" aria-labelledby="cookie-closing-title">
          <div className="content-wrap privacy-page__closing-layout">
            <h2 className="section-title section-title--light" id="cookie-closing-title">Questions about your choices?</h2>
            <div>
              <p>Our general resort contact can help route questions while the dedicated privacy and cookie-preference channels are finalized.</p>
              <a className="button-link" href="/privacy-policy">Read the Privacy Policy</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
