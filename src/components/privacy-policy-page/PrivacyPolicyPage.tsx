import { useEffect, type ReactNode } from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./privacy-policy-page.css";

type PolicySection = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

const policySections: readonly PolicySection[] = [
  {
    id: "who-we-are",
    number: "1",
    title: "Who we are",
    children: (
      <>
        <p>
          Villas Playa Sámara is a beachfront resort located in Playa Sámara,
          Guanacaste, Costa Rica.
        </p>
        <p>
          For privacy and data-protection purposes, the final published policy
          will identify the legal organization responsible for personal
          information processed through this website. Its legal name, role in
          relation to Qviva Resorts, business address, and privacy contact route
          are being finalized through management and legal review.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    number: "2",
    title: "Information we may collect",
    children: (
      <>
        <p>
          The information collected depends on how you interact with the
          website and with Villas Playa Sámara.
        </p>
        <h3>Information you provide directly</h3>
        <p>We may receive information such as:</p>
        <ul>
          <li>Full name, email address, telephone number, and country of residence</li>
          <li>Arrival and departure dates and number of guests</li>
          <li>Accommodation preferences and reservation details</li>
          <li>Special requests and messages submitted through contact forms</li>
          <li>Requests for restaurant, wellness, transportation, tour, group, wedding, or other assistance</li>
          <li>Marketing preferences, when applicable</li>
        </ul>
        <p>
          Please avoid submitting sensitive personal information unless it is
          necessary for the service you are requesting.
        </p>
      </>
    ),
  },
  {
    id: "reservation-information",
    number: "2.1",
    title: "Reservation information",
    children: (
      <>
        <p>When you make or request a reservation, information may include:</p>
        <ul>
          <li>Guest name and contact details</li>
          <li>Stay dates, room or villa selection, and number or ages of guests where necessary</li>
          <li>Rate or package selected and special requests</li>
          <li>Payment or billing information and reservation history</li>
        </ul>
        <p>
          Payment-card information may be processed directly by a secure payment
          provider, booking engine, bank, or other authorized service provider
          rather than stored directly by Villas Playa Sámara. The actual
          booking, payment, and property-management systems will be identified
          in the final policy once confirmed.
        </p>
      </>
    ),
  },
  {
    id: "automatic-information",
    number: "2.2",
    title: "Information collected automatically",
    children: (
      <>
        <p>
          When you visit the website, certain technical information may be
          collected automatically, including:
        </p>
        <ul>
          <li>IP address, browser type, device type, and operating system</li>
          <li>Approximate geographic region and referring website</li>
          <li>Pages visited, time spent on pages, and links or buttons used</li>
          <li>Website-performance information</li>
          <li>Cookie and similar technology identifiers</li>
        </ul>
        <p>
          This information may be used to operate, secure, understand, and
          improve the website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    number: "3",
    title: "How we use personal information",
    children: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to inquiries and manage reservations</li>
          <li>Provide information about rooms, villas, dining, wellness, activities, and resort facilities</li>
          <li>Assist with transportation, tours, celebrations, groups, weddings, and other guest requests</li>
          <li>Communicate before, during, and after a stay</li>
          <li>Provide customer and Guest Services support</li>
          <li>Process payments and billing and maintain reservation and transaction records</li>
          <li>Improve the website and guest experience and understand how visitors use the website</li>
          <li>Prevent fraud, misuse, security incidents, or unauthorized activity</li>
          <li>Meet legal, tax, accounting, regulatory, or contractual obligations</li>
          <li>Send marketing communications when legally permitted and, where required, with your consent</li>
        </ul>
        <p>
          We will not use personal information for purposes incompatible with the
          reason it was collected unless permitted by law or authorized by the
          individual.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    number: "4",
    title: "Legal basis and consent",
    children: (
      <>
        <p>
          Where required, Villas Playa Sámara will process personal information
          with the knowledge and consent of the person concerned or under
          another lawful basis permitted by applicable law.
        </p>
        <p>Depending on the circumstances, processing may be necessary to:</p>
        <ul>
          <li>Respond to a request you make</li>
          <li>Take steps related to a reservation or contract</li>
          <li>Fulfill our obligations to guests</li>
          <li>Comply with legal requirements</li>
          <li>Protect legitimate operational or security interests</li>
          <li>Carry out processing to which you have consented</li>
        </ul>
        <p>
          Where processing relies on consent, you may withdraw that consent
          subject to applicable legal and contractual limitations.
        </p>
      </>
    ),
  },
  {
    id: "reservations-third-parties",
    number: "5",
    title: "Reservations and third-party booking services",
    children: (
      <>
        <p>
          The website may connect you to an external booking engine or
          reservation platform. When you use a third-party booking service,
          information submitted through that platform may also be subject to the
          provider’s own privacy policy, terms, security practices, and
          data-processing procedures.
        </p>
        <p>Villas Playa Sámara may receive reservation information from:</p>
        <ul>
          <li>Direct booking systems, travel agencies, and online travel agencies</li>
          <li>Tour operators, group organizers, and corporate partners</li>
          <li>Other authorized booking channels</li>
        </ul>
        <p>
          We encourage guests to review the privacy terms of any third-party
          platform used to complete a reservation. The direct booking provider
          will be identified in the final published policy once confirmed.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    number: "6",
    title: "Payments",
    children: (
      <>
        <p>
          Payments may be processed by banks, card networks, payment gateways,
          booking platforms, or other authorized financial-service providers.
          These providers may collect information necessary to authorize and
          complete a transaction.
        </p>
        <p>
          Villas Playa Sámara does not intend to publish or expose payment-card
          information through the website. The actual payment workflow and
          responsibilities will be confirmed before this policy is published.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "7",
    title: "Cookies and similar technologies",
    children: (
      <>
        <p>The website may use cookies and similar technologies to:</p>
        <ul>
          <li>Keep the website functioning correctly and support security</li>
          <li>Remember visitor preferences</li>
          <li>Understand website usage and measure performance</li>
          <li>Improve content and navigation</li>
          <li>Support analytics, marketing, or advertising where enabled</li>
        </ul>
        <p>Cookies may be categorized as:</p>
        <ul>
          <li><strong>Strictly necessary:</strong> Required for core website functions, security, forms, or booking-related features.</li>
          <li><strong>Preferences:</strong> Used to remember selected settings or visitor choices.</li>
          <li><strong>Analytics:</strong> Used to understand website traffic, performance, and visitor interaction.</li>
          <li><strong>Marketing:</strong> Used to measure campaigns or provide more relevant promotional content, where applicable.</li>
        </ul>
        <p>
          Where required, non-essential cookies should not be activated until the
          visitor has made the appropriate consent choice. Visitors should be
          able to review or modify cookie preferences through the website’s
          cookie settings. The final cookie categories and consent platform are
          being confirmed.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    number: "8",
    title: "Analytics",
    children: (
      <>
        <p>
          The website may use analytics services to understand how visitors
          interact with pages and content.
        </p>
        <p>Analytics information may include:</p>
        <ul>
          <li>Pages viewed and website interactions</li>
          <li>Approximate location</li>
          <li>Device and browser information</li>
          <li>Referral source and session duration</li>
        </ul>
        <p>
          If services such as Google Analytics or another analytics platform are
          used, the final policy will identify them and link to relevant provider
          information where appropriate. The actual analytics and tracking tools
          are pending technical confirmation.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    number: "9",
    title: "Marketing communications",
    children: (
      <>
        <p>
          If you choose to receive resort news, special offers, or other
          marketing communications, we may use the contact details you provide
          for that purpose.
        </p>
        <p>Where required by applicable law:</p>
        <ul>
          <li>Marketing consent will be requested separately.</li>
          <li>You may unsubscribe at any time.</li>
          <li>Unsubscribing from marketing does not prevent necessary reservation or service-related communications.</li>
        </ul>
        <p>
          Villas Playa Sámara should not send promotional communications where
          consent or another valid legal basis is required and has not been
          obtained. The final unsubscribe method will be provided after the
          marketing process is confirmed.
        </p>
      </>
    ),
  },
  {
    id: "forms-communications",
    number: "10",
    title: "Contact forms and guest communications",
    children: (
      <>
        <p>When you contact us through:</p>
        <ul>
          <li>Website forms, email, telephone, or WhatsApp</li>
          <li>Social media or Guest Services channels</li>
        </ul>
        <p>
          We may retain the information necessary to respond to your request and
          maintain an appropriate record of the interaction. Communications made
          through third-party services may also be subject to the privacy
          practices of those providers.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "11",
    title: "Information about children",
    children: (
      <>
        <p>
          Villas Playa Sámara is a family-friendly resort, and reservation
          information may include details about children when necessary to
          provide accommodation or guest services.
        </p>
        <p>
          We do not intend for children to independently submit personal
          information through the website without the involvement of a parent,
          guardian, or responsible adult.
        </p>
        <p>Information concerning minors should only be collected when reasonably necessary for matters such as:</p>
        <ul>
          <li>Room occupancy, age-based rates, or packages</li>
          <li>Activities and safety</li>
          <li>Dietary requirements and transportation</li>
          <li>Other guest services</li>
        </ul>
        <p>
          Parents or guardians may contact us regarding personal information
          associated with a child in their care. Any children’s clubs, waivers,
          or activity registration processes will be reflected after their data
          practices are confirmed.
        </p>
      </>
    ),
  },
  {
    id: "sensitive-information",
    number: "12",
    title: "Health, dietary, and other sensitive information",
    children: (
      <>
        <p>Guests may voluntarily provide information concerning:</p>
        <ul>
          <li>Allergies or dietary restrictions</li>
          <li>Mobility or accessibility requirements</li>
          <li>Wellness-service considerations</li>
          <li>Other information necessary to accommodate a special request</li>
        </ul>
        <p>
          Such information should be requested and used only where necessary to
          provide the requested service and handled with appropriate care. Please
          do not submit medical or other sensitive information through general
          website forms unless specifically requested.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    number: "13",
    title: "How we share information",
    children: (
      <>
        <p>
          Personal information may be shared when reasonably necessary with
          service providers or partners that support resort operations.
        </p>
        <p>These may include:</p>
        <ul>
          <li>Booking, reservation, property-management, and payment systems</li>
          <li>Banks, financial institutions, and professional advisers</li>
          <li>Website hosting, email, communication, IT, and cybersecurity providers</li>
          <li>Analytics, marketing, and CRM platforms</li>
          <li>Transportation providers, tour operators, travel agents, and other partners involved in a guest’s reservation</li>
          <li>Government or regulatory authorities where legally required</li>
        </ul>
        <p>
          Third parties should receive only the information reasonably necessary
          for the relevant service and should handle it according to applicable
          legal and contractual requirements.
        </p>
      </>
    ),
  },
  {
    id: "independent-services",
    number: "14",
    title: "Monkey Tours Sámara and other independent services",
    children: (
      <>
        <p>
          Certain guest experiences may be provided by separate businesses or
          service providers. For example, tours and activities may be operated
          by <strong>Monkey Tours Sámara</strong>, and Nikoa Beach Club operates
          as a separate additional-charge dining experience.
        </p>
        <p>
          When guests interact directly with a separate business, that
          organization may collect and process personal information according to
          its own privacy practices. Villas Playa Sámara is not responsible for
          the privacy practices of independent third-party websites or services.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    number: "15",
    title: "Links to other websites",
    children: (
      <>
        <p>
          The Villas Playa Sámara website may contain links to third-party
          websites, including booking platforms, tour providers, maps, social
          media networks, payment services, Nikoa Beach Club, and other partners.
        </p>
        <p>
          Once you leave our website, the privacy practices of the destination
          website apply. We encourage visitors to review the privacy policy of
          any external website before submitting personal information.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "16",
    title: "International data transfers",
    children: (
      <>
        <p>
          Some technology and service providers used by the resort may process or
          store information outside Costa Rica.
        </p>
        <p>
          Where personal information is transferred internationally, Villas
          Playa Sámara should take reasonable steps to ensure that the transfer
          is handled in accordance with applicable data-protection requirements
          and appropriate safeguards. The locations and providers involved will
          be identified once confirmed.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: "17",
    title: "How long we keep information",
    children: (
      <>
        <p>
          Personal information should be retained only for as long as reasonably
          necessary for the purpose for which it was collected, including
          operational, legal, accounting, tax, contractual, security, and
          dispute-resolution requirements.
        </p>
        <p>Examples may include:</p>
        <ul>
          <li>Reservation, financial, and accounting records</li>
          <li>Guest communications and marketing consent records</li>
          <li>Website analytics and security logs</li>
        </ul>
        <p>
          Once information is no longer required, it should be securely deleted,
          anonymized, or otherwise handled in accordance with applicable
          retention requirements. Specific retention periods remain subject to
          review by Legal, Accounting, Reservations, IT, and Operations.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "18",
    title: "Data security",
    children: (
      <>
        <p>
          Villas Playa Sámara seeks to use reasonable administrative, technical,
          and organizational safeguards to protect personal information from:
        </p>
        <ul>
          <li>Unauthorized access, loss, or misuse</li>
          <li>Alteration, disclosure, or destruction</li>
        </ul>
        <p>
          Measures may include access controls, secure systems, staff procedures,
          software updates, backups, encrypted connections, and appropriately
          selected third-party providers. No website, network, or electronic
          storage method can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    id: "privacy-rights",
    number: "19",
    title: "Your privacy rights",
    children: (
      <>
        <p>
          Subject to applicable law and the circumstances of the request,
          individuals may have rights regarding their personal information,
          including the ability to:
        </p>
        <ul>
          <li>Ask whether personal information is being processed</li>
          <li>Request access to personal information</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion or suppression where applicable</li>
          <li>Object to or restrict certain processing where permitted</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request information about how personal data is being used or shared</li>
        </ul>
        <p>
          Costa Rica’s Law No. 8968 protects individuals in relation to the
          processing of personal data and recognizes rights related to
          informational self-determination. Requests will be handled according
          to applicable legal requirements and may require verification of
          identity.
        </p>
      </>
    ),
  },
  {
    id: "privacy-request",
    number: "20",
    title: "How to submit a privacy request",
    children: (
      <>
        <p>
          The final policy will provide a dedicated privacy-request destination
          after the responsible organization and contact route are confirmed.
          Until then, general questions may be directed to the resort’s existing
          contact channel at <a href="mailto:reserve@villasplayasamara.com">reserve@villasplayasamara.com</a>.
        </p>
        <p>
          Please include enough information for us to identify the relevant
          records and understand the request. We may need to verify your identity
          before providing, modifying, or deleting personal information.
        </p>
      </>
    ),
  },
  {
    id: "prodh-ab",
    number: "21",
    title: "Costa Rica data protection authority",
    children: (
      <>
        <p>
          Personal-data protection in Costa Rica is overseen by the
          <strong> Agencia de Protección de Datos de los Habitantes (PRODHAB)</strong>
          under the applicable legal framework.
        </p>
        <p>
          Individuals may have the right to contact the appropriate Costa Rican
          authority regarding concerns about the processing of personal
          information. The final policy will confirm whether it should provide
          direct PRODHAB contact details or a link to its current official
          website.
        </p>
      </>
    ),
  },
  {
    id: "sale-of-information",
    number: "22",
    title: "Do we sell personal information?",
    children: (
      <>
        <p>
          Villas Playa Sámara has not finalized this statement for publication.
          Management and the relevant technology and marketing teams must confirm
          whether personal information is sold or commercialized under the
          applicable legal definitions before a final statement is added here.
        </p>
      </>
    ),
  },
  {
    id: "social-media",
    number: "23",
    title: "Social media",
    children: (
      <>
        <p>
          Villas Playa Sámara may maintain profiles on social-media platforms. If
          you interact with us through a social network, the platform may
          independently collect information according to its own privacy policy.
        </p>
        <p>
          Information you choose to make public on social media may be visible to
          other users.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "24",
    title: "Changes to this Privacy Policy",
    children: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect:
        </p>
        <ul>
          <li>Changes to the website or new services</li>
          <li>New technology providers</li>
          <li>Changes in our business practices</li>
          <li>Legal or regulatory developments</li>
        </ul>
        <p>
          When the policy is updated, the Last Updated date at the top of the
          page should also be revised. Material changes may be communicated
          through the website or another appropriate method when required.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "25",
    title: "Contact us",
    children: (
      <>
        <p>
          If you have questions about this Privacy Policy or how personal
          information is handled, please contact the Villas Playa Sámara team.
        </p>
        <p>
          <strong>Villas Playa Sámara</strong><br />
          Playa Sámara, Guanacaste, Costa Rica
        </p>
        <p>
          General resort contact: <a href="mailto:reserve@villasplayasamara.com">reserve@villasplayasamara.com</a>
        </p>
        <p>
          A dedicated privacy contact and final business details will be added
          after management and legal review.
        </p>
      </>
    ),
  },
];

const privacyDirectionContract = `
THESIS: A transparent policy ledger makes an unfinished legal surface honest and usable; it refuses the decorative legal wall that hides what is still under review.
OWN-WORLD: VPS forest, sand, lime, white, square edges, fine rules, and a calm document rail.
STORY: Visitors understand the draft status, orient through the policy index, read the data practices, and find a safe contact path.
FIRST VIEWPORT: A dark forest header carries a direct plain-language title and status note; the document begins below with a visible legal-review notice and contents rail.
FORM: Legal reading ledger, fifth grounded structure; seed ef00ccd5.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function PrivacyPolicyPage() {
  usePageMetadata(
    "Privacy Policy | Villas Playa Sámara",
    "Read the Villas Playa Sámara privacy policy draft covering personal information, reservations, cookies, analytics, communications, and privacy rights.",
  );

  useEffect(() => {
    const contract = document.createComment(privacyDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);

    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell privacy-page">
      <Header />

      <main id="main-content">
        <section className="privacy-page__hero" aria-labelledby="privacy-page-title">
          <div className="content-wrap privacy-page__hero-layout">
            <div className="privacy-page__hero-copy">
              <h1 id="privacy-page-title">
                Privacy, <span>made clear.</span>
              </h1>
              <p>
                How Villas Playa Sámara may collect, use, store, share, and
                protect personal information across the website and connected
                guest services.
              </p>
            </div>

            <div className="privacy-page__hero-status" aria-label="Policy status">
              <span>Development draft</span>
              <p>Management and legal review required before publication.</p>
              <p>Jurisdiction: Costa Rica</p>
            </div>
          </div>
        </section>

        <section className="privacy-page__content" id="policy-content" aria-labelledby="policy-content-title">
          <div className="content-wrap privacy-page__layout">
            <aside className="privacy-page__index">
              <p>Contents</p>
              <nav aria-label="Privacy Policy sections">
                {policySections.map((section) => (
                  <a href={`#policy-${section.id}`} key={section.id}>
                    <span>{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            <article className="privacy-page__document">
              <aside className="privacy-page__notice" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">
                  policy
                </span>
                <div>
                  <strong>Draft for management and legal review</strong>
                  <p>
                    This is a practical website-policy draft, not legal advice.
                    Before publication, the resort must confirm its legal entity,
                    actual data systems and providers, retention periods,
                    marketing practices, cookie configuration, privacy contact,
                    and final update date.
                  </p>
                </div>
              </aside>

              <header className="privacy-page__document-intro">
                <h2 className="section-title" id="policy-content-title">
                  Privacy Policy
                </h2>
                <p>
                  Villas Playa Sámara respects your privacy and is committed to
                  handling personal information responsibly and transparently.
                </p>
                <p>
                  This policy explains how information may be collected, used,
                  stored, shared, and protected when you visit the website, make
                  an inquiry or reservation, communicate with our team, or use
                  certain digital services connected to the resort.
                </p>
                <p className="privacy-page__legal-reference">
                  The final policy should be reviewed for compliance with Costa
                  Rica’s Law No. 8968, <em>Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales</em>,
                  its applicable regulations, and any other laws that may apply to
                  the resort’s actual data-processing activities.
                </p>
              </header>

              <div className="privacy-page__sections">
                {policySections.map((section) => (
                  <section
                    className="privacy-page__section"
                    id={`policy-${section.id}`}
                    key={section.id}
                    aria-labelledby={`policy-${section.id}-title`}
                  >
                    <header className="privacy-page__section-heading">
                      <span>{section.number}</span>
                      <h2 className="subsection-title" id={`policy-${section.id}-title`}>
                        {section.title}
                      </h2>
                    </header>
                    <div className="privacy-page__section-body">{section.children}</div>
                  </section>
                ))}
              </div>

              <aside className="privacy-page__notice privacy-page__notice--secondary" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">
                  assignment
                </span>
                <div>
                  <strong>Website form notice</strong>
                  <p>
                    By submitting a form, you acknowledge that Villas Playa
                    Sámara may use the information provided to respond to your
                    request and provide the requested service. Please review this
                    Privacy Policy for more information about how personal
                    information is handled.
                  </p>
                  <p>
                    Any optional marketing consent should remain separate and
                    should not be pre-selected.
                  </p>
                </div>
              </aside>
            </article>
          </div>
        </section>

        <section className="privacy-page__closing" aria-labelledby="privacy-closing-title">
          <div className="content-wrap privacy-page__closing-layout">
            <h2 className="section-title section-title--light" id="privacy-closing-title">
              Questions about your information?
            </h2>
            <div>
              <p>
                Our general resort contact can help route your question while the
                dedicated privacy contact is finalized through legal review.
              </p>
              <a className="button-link" href="mailto:reserve@villasplayasamara.com">
                Contact the resort
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
