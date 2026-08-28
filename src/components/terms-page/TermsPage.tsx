import { useEffect } from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../privacy-policy-page/privacy-policy-page.css";
import "./terms-page.css";

type TermsSection = {
  id: string;
  number: string;
  title: string;
  status?: "PMS-supplied terms" | "Recommended draft" | "Review required" | "Confirmed";
  paragraphs: readonly string[];
  bullets?: readonly string[];
  special?: "flexible-rate" | "group-rate";
};

const termsSections: readonly TermsSection[] = [
  {
    id: "reservation-terms",
    number: "1",
    title: "Reservation terms",
    status: "Recommended draft",
    paragraphs: [
      "A reservation is considered confirmed once the required booking information has been received and the applicable payment or deposit has been successfully processed.",
      "Guests are responsible for reviewing the reservation confirmation and notifying Villas Playa Sámara promptly if any information is incorrect.",
      "A confirmation may include the guest name, dates, accommodation category, number of guests, rate plan, included services, payment conditions, cancellation conditions, taxes, additional charges, and special terms.",
    ],
  },
  {
    id: "flexible-rate",
    number: "2",
    title: "Flexible Rate",
    status: "PMS-supplied terms",
    paragraphs: [
      "For individual reservations booked under the Flexible Rate, 100% of the reservation is charged at the time of booking.",
      "If a guest does not arrive for a confirmed reservation and has not cancelled according to the applicable policy, the reservation is considered a No Show. The No Show penalty is 100% of the total reservation and is non-refundable.",
    ],
    special: "flexible-rate",
  },
  {
    id: "non-refundable-rate",
    number: "3",
    title: "Non-Refundable Rate",
    status: "Review required",
    paragraphs: [
      "Reservations booked under the Non-Refundable Rate require 100% payment at the time of booking.",
      "The final policy must explicitly confirm whether payments under this rate are non-refundable in the event of cancellation, modification, early departure, or No Show, except where otherwise required by applicable law or stated in the reservation confirmation.",
      "Any date-change option, travel credit, exceptional waiver, or force-majeure provision must be approved before publication.",
    ],
  },
  {
    id: "non-refundable-periods",
    number: "4",
    title: "Non-Refundable Periods",
    status: "Review required",
    paragraphs: [
      "The source draft contains a historical non-refundable period from December 1, 2025 through January 30, 2026. That period has passed and is intentionally not presented as a current policy here.",
      "Management should provide current and future non-refundable periods, if applicable. The exact conditions shown during booking should always be reviewed before payment.",
    ],
  },
  {
    id: "group-reservations",
    number: "5",
    title: "Group reservations",
    status: "PMS-supplied terms",
    paragraphs: [
      "Group reservations may be subject to separate deposit schedules, payment deadlines, rooming-list deadlines, minimum-stay conditions, cancellation terms, and contractual requirements.",
      "The signed group agreement will govern when its terms differ from the general conditions on this page. Group payment schedules should be defined in the individual group agreement or contract.",
    ],
    special: "group-rate",
  },
  {
    id: "reservation-modifications",
    number: "6",
    title: "Reservation modifications",
    status: "Recommended draft",
    paragraphs: [
      "Requests to change travel dates, guest names, accommodation category, number of guests, length of stay, rate plan, or included services are subject to availability and the conditions of the original reservation.",
      "A modification may result in a different room rate, rate plan, additional charges, new cancellation conditions, loss of a promotional rate, or a change in included services.",
      "A change request is not confirmed until Villas Playa Sámara issues an updated reservation confirmation. Date-change rules for Flexible and Non-Refundable rates require management confirmation.",
    ],
  },
  {
    id: "early-departures",
    number: "7",
    title: "Early departures",
    status: "Review required",
    paragraphs: [
      "Guests who depart before the confirmed departure date may remain responsible for the unused portion of the reservation according to the applicable rate conditions.",
      "Early departure does not automatically entitle the guest to a refund for unused nights or services unless an approved policy or applicable law provides otherwise.",
    ],
  },
  {
    id: "payment-authorization",
    number: "8",
    title: "Payment authorization",
    status: "Recommended draft",
    paragraphs: [
      "By providing a payment method, the guest authorizes Villas Playa Sámara and its approved payment providers to process the amounts due under the applicable reservation terms.",
      "The guest is responsible for ensuring payment information is accurate, the payment method is valid, the cardholder is authorized to make the transaction, and any required verification is completed.",
      "Reservations may be cancelled if required payment cannot be successfully processed. The payment processor, accepted methods, currency, authorization procedures, and check-in identification requirements remain under review.",
    ],
  },
  {
    id: "rates-taxes-currency",
    number: "9",
    title: "Rates, taxes, and currency",
    status: "Review required",
    paragraphs: [
      "Rates displayed on the website should clearly indicate whether taxes and mandatory charges are included or added separately.",
      "The final version must confirm the published currency, tax treatment, any service charge, exchange-rate policy, and whether rates displayed on external channels may differ.",
      "The exact amount charged is the amount shown during the applicable reservation process, subject to the approved rate conditions and required disclosures.",
    ],
  },
  {
    id: "rate-availability-promotions",
    number: "10",
    title: "Rate availability and promotions",
    status: "Recommended draft",
    paragraphs: [
      "Rates and promotions are subject to availability and may be restricted by travel dates, booking dates, minimum or maximum length of stay, occupancy, room category, promotional inventory, blackout dates, advance-purchase requirements, or other conditions stated with the offer.",
      "Promotional rates may not be combined unless expressly stated.",
    ],
  },
  {
    id: "check-in-check-out",
    number: "11",
    title: "Check-in and check-out",
    status: "Review required",
    paragraphs: [
      "Official check-in and check-out times must be confirmed before publication.",
      "Guests may be asked to present valid government-issued identification, reservation confirmation, a valid payment method, and any documentation required by the applicable reservation.",
      "Early check-in and late check-out are subject to availability and may involve an additional charge.",
    ],
  },
  {
    id: "minimum-age",
    number: "12",
    title: "Minimum age to book",
    status: "Review required",
    paragraphs: [
      "The minimum age for the primary guest responsible for a reservation must be confirmed. That guest may be required to present valid identification at check-in.",
    ],
  },
  {
    id: "occupancy-registered-guests",
    number: "13",
    title: "Occupancy and registered guests",
    status: "Recommended draft",
    paragraphs: [
      "The number of guests staying in an accommodation may not exceed the maximum occupancy established for that room, suite, or villa.",
      "All overnight guests should be properly registered with the resort. Additional guests may be subject to availability, occupancy restrictions, additional charges, identification requirements, and resort access policies.",
      "Children should be included accurately in the reservation according to their ages at the time of travel.",
    ],
  },
  {
    id: "children",
    number: "14",
    title: "Children",
    status: "Recommended draft",
    paragraphs: [
      "Villas Playa Sámara is a family-friendly resort.",
      "Parents, guardians, or responsible adults are responsible for supervising minors throughout the property, including around pools, beach areas, recreational facilities, restaurants, paths, public spaces, activities, and excursions.",
      "Specific age restrictions may apply to selected facilities or activities.",
    ],
  },
  {
    id: "all-inclusive-plan",
    number: "15",
    title: "All-Inclusive Plan",
    status: "Review required",
    paragraphs: [
      "The all-inclusive plan may include selected meals, beverages, activities, and resort services according to the guest’s confirmed package. Not all products or services available on the property are necessarily included.",
      "The final page must replace this draft with the exact approved inclusions and exclusions. Potential additional-charge items may include premium or specialty beverages, selected dining experiences, Nikoa Beach Club, Morpho Wellness Retreat treatments, tours, transportation, private experiences, and retail purchases.",
    ],
  },
  {
    id: "nikoa-beach-club",
    number: "16",
    title: "Nikoa Beach Club",
    status: "Confirmed",
    paragraphs: [
      "Nikoa Beach Club is not included in the Villas Playa Sámara all-inclusive plan.",
      "Food, beverages, and additional services at Nikoa Beach Club are charged separately. Nikoa is an independently presented beachfront venue.",
    ],
  },
  {
    id: "restaurant-reservations",
    number: "17",
    title: "Restaurant reservations and availability",
    status: "Recommended draft",
    paragraphs: [
      "Restaurant opening hours, menus, service formats, and reservation requirements may vary according to season, occupancy, operational requirements, private events, and ingredient availability.",
      "Selected restaurants may require advance reservations. Menus and operating schedules are subject to change.",
    ],
  },
  {
    id: "food-allergies",
    number: "18",
    title: "Food allergies and dietary requirements",
    status: "Review required",
    paragraphs: [
      "Guests should inform the restaurant team of allergies or dietary requirements before ordering.",
      "While the resort may assist guests in identifying suitable options, kitchens may handle multiple allergens and ingredients. Culinary management must approve the final allergy and cross-contact language.",
    ],
  },
  {
    id: "morpho-wellness",
    number: "19",
    title: "Morpho Wellness Retreat",
    status: "Recommended draft",
    paragraphs: [
      "Massage, body-care, beauty, thermal, or other wellness services may be subject to advance reservation, availability, age restrictions, health considerations, cancellation policies, and additional charges.",
      "Services included in the all-inclusive plan, if any, should be clearly identified at the time of booking or appointment. Appointment cancellation and access conditions require confirmation.",
    ],
  },
  {
    id: "activities-tours-third-party",
    number: "20",
    title: "Activities, tours, and third-party services",
    status: "Recommended draft",
    paragraphs: [
      "Activities, excursions, transportation, and other experiences may be operated by Villas Playa Sámara or by independent third-party providers.",
      "Third-party services may have separate prices, terms, cancellation policies, safety requirements, age restrictions, waivers, and insurance requirements. Examples may include tours offered through Monkey Tours Sámara and other local service providers.",
      "Guests should review the applicable conditions before booking an external service.",
    ],
  },
  {
    id: "beach-ocean-conditions",
    number: "21",
    title: "Beach and ocean conditions",
    status: "Recommended draft",
    paragraphs: [
      "Villas Playa Sámara is located beside Sámara Bay. Ocean, tide, weather, and beach conditions can change.",
      "Guests are responsible for observing posted safety notices, weather conditions, local warnings, instructions from resort staff, and guidance from local authorities. Swimming and ocean activities should be approached according to current conditions and personal ability.",
    ],
  },
  {
    id: "pools-recreation",
    number: "22",
    title: "Pools and recreational facilities",
    status: "Review required",
    paragraphs: [
      "Guests are expected to follow posted rules for pools, the GYM, mini-golf, children’s areas, and other recreational facilities.",
      "Age restrictions, operating hours, supervision requirements, and access conditions may apply and must be confirmed for each facility.",
    ],
  },
  {
    id: "guest-conduct",
    number: "23",
    title: "Guest conduct",
    status: "Recommended draft",
    paragraphs: [
      "Guests are expected to behave respectfully toward other guests, resort staff, local residents, property, wildlife, and the surrounding environment.",
      "Behavior that threatens safety, causes serious disruption, damages property, or violates applicable law may result in removal from the property without refund where legally permitted. Legal review is required before publication.",
    ],
  },
  {
    id: "property-damage",
    number: "24",
    title: "Damage to resort property",
    status: "Review required",
    paragraphs: [
      "Guests may be responsible for damage, loss, or extraordinary cleaning resulting from actions by themselves or members of their reservation.",
      "Any applicable charge should reflect the resort’s approved damage and recovery procedures. The use of a security deposit, incidental authorization, or damage-charge procedure must be confirmed.",
    ],
  },
  {
    id: "smoking-vaping",
    number: "25",
    title: "Smoking and vaping",
    status: "Review required",
    paragraphs: [
      "Smoking and vaping are intended to be permitted only in areas designated by the resort and are not permitted where prohibited by resort policy or applicable law.",
      "Management must confirm the exact smoking, vaping, and cannabis policy.",
    ],
  },
  {
    id: "pets-service-animals",
    number: "26",
    title: "Pets and service animals",
    status: "Review required",
    paragraphs: [
      "The pet policy and approved service-animal wording must be provided by management based on applicable requirements and resort capabilities.",
    ],
  },
  {
    id: "accessibility-special-requests",
    number: "27",
    title: "Accessibility and special requests",
    status: "Recommended draft",
    paragraphs: [
      "Guests with accessibility requirements or other important accommodation needs are encouraged to contact the resort before booking.",
      "The team can provide information about available accommodations, routes, facilities, and services so guests can determine whether the resort can meet their specific needs.",
      "Special requests are subject to availability and are not guaranteed unless confirmed in writing.",
    ],
  },
  {
    id: "personal-belongings",
    number: "28",
    title: "Personal belongings",
    status: "Review required",
    paragraphs: [
      "Guests are responsible for their personal belongings during their stay. In-room safes may be available for selected valuables.",
      "Lost-and-found items will be handled according to the resort’s internal procedures. The approved lost-property and liability wording must be confirmed.",
    ],
  },
  {
    id: "force-majeure",
    number: "29",
    title: "Force majeure and events beyond our control",
    status: "Review required",
    paragraphs: [
      "Certain events may affect travel, reservations, services, or resort operations, including severe weather, natural disasters, public-health emergencies, government restrictions, utility interruptions, transportation disruptions, labor disruptions, civil emergencies, or other circumstances reasonably outside the resort’s control.",
      "Where such events occur, Villas Playa Sámara will address affected reservations according to applicable law, the relevant rate conditions, operational circumstances, and any policy communicated to affected guests.",
      "Automatic refunds or credits should not be promised unless management has approved a specific force-majeure policy.",
    ],
  },
  {
    id: "website-information",
    number: "30",
    title: "Website information",
    status: "Recommended draft",
    paragraphs: [
      "Villas Playa Sámara makes reasonable efforts to keep website information accurate and current. Images may be illustrative, renovation or development renders may be conceptual, menus and operating hours may change, amenities may temporarily be unavailable, and descriptions may be updated.",
      "Rates and availability can change in real time. Confirmed reservation terms and direct communication from the resort should be used to resolve material discrepancies.",
    ],
  },
  {
    id: "website-errors",
    number: "31",
    title: "Website errors and pricing errors",
    status: "Review required",
    paragraphs: [
      "If an obvious technical, typographical, or pricing error appears on the website or booking system, Villas Playa Sámara may contact the guest to correct the affected reservation in accordance with applicable law.",
      "Management and legal counsel must approve the final wording and correction procedure.",
    ],
  },
  {
    id: "third-party-websites",
    number: "32",
    title: "Third-party websites and services",
    status: "Recommended draft",
    paragraphs: [
      "The website may link to external websites or services, including booking platforms, Nikoa Beach Club, tour providers, maps, payment providers, and social-media platforms.",
      "Third-party websites operate under their own terms and privacy practices. Villas Playa Sámara is not responsible for the content or policies of independently operated external websites.",
    ],
  },
  {
    id: "privacy-and-cookies",
    number: "33",
    title: "Privacy and cookies",
    status: "Recommended draft",
    paragraphs: [
      "Use of the website is also subject to the Villas Playa Sámara Privacy Policy, Cookie Policy, and Cookie Preferences. These documents explain how personal information and website technologies are handled.",
    ],
  },
  {
    id: "governing-law",
    number: "34",
    title: "Governing law",
    status: "Review required",
    paragraphs: [
      "These Terms & Conditions are intended to be governed by the applicable laws of the Republic of Costa Rica.",
      "Any dispute-resolution, venue, arbitration, consumer-protection, or jurisdiction language should be approved by legal counsel before publication.",
    ],
  },
  {
    id: "changes",
    number: "35",
    title: "Changes to these Terms",
    status: "Recommended draft",
    paragraphs: [
      "Villas Playa Sámara may update these Terms & Conditions to reflect changes in reservation policies, new services, operational changes, technology updates, regulatory requirements, or commercial changes.",
      "The Last Updated date should be revised when material changes are made. Terms applicable to an existing reservation should be determined by the reservation confirmation and conditions accepted at the time of booking, subject to applicable law.",
    ],
  },
  {
    id: "contact",
    number: "36",
    title: "Contact us",
    status: "Review required",
    paragraphs: [
      "For questions about a reservation or these Terms & Conditions, please contact the Villas Playa Sámara team.",
      "Villas Playa Sámara — Playa Sámara, Guanacaste, Costa Rica.",
      "General resort contact: reserve@villasplayasamara.com. The final reservations email, telephone, website URL, and Contact Reservations destination require confirmation.",
    ],
  },
];

const termsDirectionContract = `
THESIS: Clear booking terms turn uncertainty into an informed decision; this page refuses the legal wall that hides commercial conditions in undifferentiated prose.
OWN-WORLD: VPS forest, sand, lime, white, square edges, fine rules, and the established policy-reading rail.
STORY: Visitors understand what governs a reservation, find the supplied rate rules, separate current PMS terms from recommendations, and know what still needs confirmation.
FIRST VIEWPORT: A dark forest header carries a direct terms title and review status; the document begins below with the priority warning, contents rail, and reservation context.
FORM: Legal reading ledger, established Privacy Policy family extended for booking terms.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

const getTermsAnchor = (id: string) => "terms-" + id;

function renderTable(kind: "flexible-rate" | "group-rate") {
  if (kind === "flexible-rate") {
    return (
      <div className="terms-page__table-wrap">
        <table className="terms-page__table">
          <caption>Flexible Rate cancellation penalties</caption>
          <thead><tr><th scope="col">Cancellation timing</th><th scope="col">Penalty</th></tr></thead>
          <tbody>
            <tr><td>21 days or more before arrival</td><td>0% — full refund</td></tr>
            <tr><td>8 to 20 days before arrival</td><td>50% of total reservation</td></tr>
            <tr><td>0 to 7 days before arrival</td><td>100% of total reservation</td></tr>
          </tbody>
        </table>
        <p className="terms-page__table-note">A cancellation made within 7 days of arrival is non-refundable.</p>
      </div>
    );
  }

  return (
    <div className="terms-page__table-wrap">
      <table className="terms-page__table">
        <caption>Group reservation cancellation penalties</caption>
        <thead><tr><th scope="col">Cancellation timing</th><th scope="col">Penalty</th></tr></thead>
        <tbody>
          <tr><td>60 days or more before arrival</td><td>0%</td></tr>
          <tr><td>45 to 59 days before arrival</td><td>50%</td></tr>
          <tr><td>44 days or less before arrival</td><td>100%</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function BookingSummary() {
  return (
    <aside className="terms-page__booking-summary" aria-labelledby="booking-summary-title">
      <div>
        <span className="material-symbols-outlined" aria-hidden="true">fact_check</span>
        <div>
          <strong id="booking-summary-title">Short booking terms summary</strong>
          <p>The booking interface should show the most important commercial terms before payment rather than relying only on this full Terms page.</p>
        </div>
      </div>
      <div className="terms-page__summary-grid">
        <div><h3>Flexible Rate</h3><p><strong>Payment:</strong> 100% at booking</p><p>21+ days: 0% penalty<br />8–20 days: 50% penalty<br />0–7 days: 100% penalty<br />No Show: 100% penalty</p></div>
        <div><h3>Non-Refundable Rate</h3><p><strong>Payment:</strong> 100% at booking</p><p>Final cancellation wording and any exceptions require confirmation before publication.</p></div>
      </div>
      <p className="terms-page__checkbox-note">The final booking flow should include an unchecked acceptance checkbox for the applicable rate conditions, cancellation policy, payment policy, Privacy Policy, and Terms &amp; Conditions.</p>
    </aside>
  );
}

export function TermsPage() {
  usePageMetadata(
    "Terms & Conditions | Villas Playa Sámara",
    "Read the Villas Playa Sámara Terms & Conditions draft covering reservations, rates, cancellations, resort policies, and website use.",
  );

  useEffect(() => {
    const contract = document.createComment(termsDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);
    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell privacy-page terms-page">
      <Header />
      <main id="main-content">
        <section className="privacy-page__hero" aria-labelledby="terms-page-title">
          <div className="content-wrap privacy-page__hero-layout">
            <div className="privacy-page__hero-copy">
              <h1 id="terms-page-title">Terms, <span>made clear.</span></h1>
              <p>Reservation conditions, rate rules, resort policies, and website terms for the Villas Playa Sámara guest journey.</p>
            </div>
            <div className="privacy-page__hero-status" aria-label="Terms status">
              <span>Development draft</span>
              <p>Management, Reservations, Finance, and legal review required.</p>
              <p>Jurisdiction: Costa Rica</p>
            </div>
          </div>
        </section>

        <section className="privacy-page__content" id="terms-content" aria-labelledby="terms-content-title">
          <div className="content-wrap privacy-page__layout">
            <aside className="privacy-page__index">
              <p>Contents</p>
              <nav aria-label="Terms & Conditions sections">
                {termsSections.map((section) => (
                  <a href={"#" + getTermsAnchor(section.id)} key={section.id}>
                    <span>{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            <article className="privacy-page__document">
              <aside className="privacy-page__notice" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">gavel</span>
                <div>
                  <strong>Draft for management, reservations, finance, and legal review</strong>
                  <p>This page combines PMS-supplied reservation terms with recommended website and stay terms. It is not legal advice. Before publication, the resort must confirm all commercial conditions, operational policies, final legal wording, and the Last Updated date.</p>
                </div>
              </aside>

              <header className="privacy-page__document-intro">
                <h2 className="section-title" id="terms-content-title">Terms &amp; Conditions</h2>
                <p>These Terms &amp; Conditions apply to direct reservations, website use, and selected services provided by Villas Playa Sámara.</p>
                <p>Please review the conditions associated with your selected rate before completing a reservation. By confirming a booking, the guest acknowledges and accepts the applicable rate conditions, payment terms, cancellation policy, and resort policies communicated during the reservation process.</p>
                <p className="privacy-page__legal-reference">Rates, cancellation conditions, non-refundable periods, taxes, payment requirements, operating policies, and other commercial conditions may vary by booking channel, rate plan, promotion, group agreement, or travel period. When a specific reservation confirmation contains different conditions, the terms attached to that reservation should take precedence.</p>
              </header>

              <div className="privacy-page__sections">
                {termsSections.map((section) => (
                  <section className="privacy-page__section" id={getTermsAnchor(section.id)} key={section.id} aria-labelledby={getTermsAnchor(section.id) + "-title"}>
                    <header className="privacy-page__section-heading">
                      <span>{section.number}</span>
                      <div>
                        <h2 className="subsection-title" id={getTermsAnchor(section.id) + "-title"}>{section.title}</h2>
                        {section.status && <span className={"terms-page__section-status terms-page__section-status--" + section.status.toLowerCase().replaceAll(" ", "-")}>{section.status}</span>}
                      </div>
                    </header>
                    <div className="privacy-page__section-body">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                      {section.special === "flexible-rate" && renderTable("flexible-rate")}
                      {section.special === "group-rate" && renderTable("group-rate")}
                    </div>
                  </section>
                ))}
              </div>

              <BookingSummary />
            </article>
          </div>
        </section>

        <section className="privacy-page__closing" aria-labelledby="terms-closing-title">
          <div className="content-wrap privacy-page__closing-layout">
            <h2 className="section-title section-title--light" id="terms-closing-title">Questions about your reservation?</h2>
            <div>
              <p>Our general resort contact can help route questions while the final reservations and legal details are being confirmed.</p>
              <a className="button-link" href="mailto:reserve@villasplayasamara.com">Contact the resort</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
