import { useEffect, type ReactNode } from "react";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./faq-page.css";

type FAQItem = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
};

type FAQSection = {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: readonly FAQItem[];
};

const accommodationCategories = [
  "Deluxe Garden View — King-Size Bed",
  "Junior Suite Garden View",
  "Deluxe Garden View — Two Queen-Size Beds",
  "Junior Suite Beachfront",
  "Two Bedroom Garden View Villa",
  "Two Bedroom Beachfront Villa",
  "Deluxe Ocean View — King-Size Bed",
  "Three Bedroom Beachfront Luxury Villa",
] as const;

const faqSections: readonly FAQSection[] = [
  {
    id: "general",
    label: "Start here",
    title: "The essentials",
    intro:
      "A quick orientation to the setting, stay style, and people Villas Playa Sámara is made for.",
    items: [
      {
        question: "Where is Villas Playa Sámara located?",
        answer:
          "Villas Playa Sámara is located in Playa Sámara, Guanacaste, on Costa Rica’s Pacific coast. The resort is set beside Sámara Bay, with access to the beach and the town of Sámara.",
        defaultOpen: true,
      },
      {
        question: "Is Villas Playa Sámara beachfront?",
        answer:
          "Yes. Villas Playa Sámara is a beachfront resort beside Sámara Bay. Accommodation views and outdoor spaces vary by category, with garden, pool-area, ocean-view, and beachfront settings available.",
      },
      {
        question: "What kind of resort is Villas Playa Sámara?",
        answer:
          "Villas Playa Sámara is a welcoming, all-inclusive beachfront resort with rooms, suites, and villas for couples, families, friends, and larger groups.",
      },
      {
        question: "Is Villas Playa Sámara family-friendly?",
        answer:
          "Yes. The accommodation collection includes options for two guests, suites for up to four guests, two-bedroom villas for up to six guests, and a three-bedroom villa for up to eight guests. Guests can combine beach and pool time with dining, resort activities, shared living spaces, and guided experiences.",
      },
      {
        question: "Is the resort suitable for couples as well as groups?",
        answer:
          "Yes. Couples can choose King-bed rooms with garden or ocean views, while suites and multi-bedroom villas offer more space for families and groups. Each accommodation page identifies its bed configuration, maximum occupancy, view, floor plan, and size.",
      },
      {
        question: "Is the resort all-inclusive?",
        answer:
          "Yes. Villas Playa Sámara offers an all-inclusive stay. Meals, selected beverages, and resort experiences are included according to the current plan. Exact inclusions, exclusions, premium beverages, specialty dining rules, and additional-charge services remain subject to owner and operations confirmation.",
      },
    ],
  },
  {
    id: "rooms-and-villas",
    label: "Choose your stay",
    title: "Room to settle in",
    intro:
      "Compare the collection by size, setting, sleeping arrangement, and the space you want around you.",
    items: [
      {
        question: "What types of accommodations are available?",
        answer: (
          <>
            <p>
              The canonical accommodation collection includes eight categories,
              from rooms for two to a three-bedroom beachfront villa:
            </p>
            <ul className="faq-page__accommodation-list">
              {accommodationCategories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
            <p>
              Availability varies by travel dates. The accommodation pages
              remain the source for current sizes, floor plans, and booking
              destinations.
            </p>
          </>
        ),
        defaultOpen: true,
      },
      {
        question: "What is the difference between a Deluxe room, a Junior Suite, and a villa?",
        answer:
          "Deluxe rooms provide a private sleeping area, bathroom, refreshment amenities, and a terrace or balcony. Junior Suites add a social area, dining space, a fully equipped kitchen, and sofa beds. Two- and three-bedroom villas offer separate bedrooms, larger shared living spaces, fully equipped kitchens, and terraces for families or groups.",
      },
      {
        question: "Which accommodations have a full kitchen?",
        answer:
          "Both Junior Suite categories and all two- and three-bedroom villas include a fully equipped kitchen. Deluxe rooms include a mini-fridge, coffee maker, tableware, and utensils for drinks and light refreshments, but not a full kitchen.",
      },
      {
        question: "Which accommodations are best for couples?",
        answer:
          "The Deluxe Garden View — King-Size Bed and Deluxe Ocean View — King-Size Bed each sleep two guests. Couples who prefer additional living space and a kitchen can also consider a Junior Suite, subject to the preferred configuration and availability.",
      },
      {
        question: "Which accommodations are designed for families or larger groups?",
        answer:
          "The Deluxe Garden View — Two Queen-Size Beds and both Junior Suites sleep up to four guests. The two-bedroom villas sleep up to six guests, and the Three Bedroom Beachfront Luxury Villa sleeps up to eight guests.",
      },
      {
        question: "What amenities are common across the accommodation collection?",
        answer:
          "Common in-room amenities include air conditioning, ceiling fans, an in-room safe, flat-screen HD TV, Wi-Fi internet access, a mini-fridge, hair dryer, bathroom amenities, and a luggage rack. Layouts and additional features vary by category.",
      },
      {
        question: "Do accommodations have terraces or balconies?",
        answer:
          "Many accommodations include a private terrace or balcony. The exact outdoor space depends on the selected category; the accommodation page identifies whether it is a terrace, balcony, garden-view terrace, or beachfront terrace.",
      },
      {
        question: "Can I see the floor plan and more photos before choosing?",
        answer:
          "Yes. Each accommodation detail page includes a Floor Plan action and a Gallery with the available images for that category.",
      },
    ],
  },
  {
    id: "dining",
    label: "Eat and drink",
    title: "Make a meal of it",
    intro:
      "Find the current shape of the dining program, from the four resort concepts to a separate table by the beach.",
    items: [
      {
        question: "How many resort dining venues are there?",
        answer:
          "Villas Playa Sámara has four resort dining concepts: Arrecife, Baja Azul, Trattoria, and Veranda. Their names, logos, menus, schedules, and operating details are concepts for owner review and may change before final approval.",
        defaultOpen: true,
      },
      {
        question: "What kind of dining is available?",
        answer:
          "Arrecife is the main restaurant, with seasonal buffet and à la carte service. Baja Azul offers casual daytime selections and a Mexican and Tex-Mex-inspired dinner experience. Trattoria offers a relaxed à la carte Italian dinner. Veranda is a casual setting for cocktails, cold drinks, sports, and snacks.",
      },
      {
        question: "Are restaurant schedules and menus the same every day?",
        answer:
          "Not necessarily. Venue schedules, service formats, ingredients, and menu availability may change with seasonality, occupancy, and resort operations. Guest Services can share the current dining program during the stay.",
      },
      {
        question: "Do I need reservations for the restaurants?",
        answer:
          "Reservation requirements may vary by venue, season, service period, and occupancy. Contact Guest Services during your stay for current availability and reservation assistance.",
      },
      {
        question: "Can the restaurants accommodate dietary needs or food allergies?",
        answer:
          "Share dietary needs and food-allergy questions with Guest Services before arrival and again with the restaurant team during the stay. The team can explain the current options. Guests with a serious allergy should request specific guidance rather than relying on a general menu description.",
      },
      {
        question: "Is there a dress code for the restaurants?",
        answer:
          "Casual resort attire is requested. For indoor restaurant service, shirts or appropriate cover-ups and footwear are required. Bathing suits without a cover-up and shirtless entry are not permitted. Selected evening venues may request casual-elegant resort attire.",
      },
      {
        question: "Is Nikoa Beach Club one of the four resort restaurants?",
        answer:
          "No. Nikoa Beach Club is a separate beachfront venue between Azura Beach Resort and Villas Playa Sámara. It is not one of the four Villas Playa Sámara resort dining venues.",
      },
      {
        question: "Is Nikoa Beach Club included in the all-inclusive plan?",
        answer: (
          <>
            <p>
              No. Nikoa Beach Club is an additional-charge dining experience
              and is not part of the resort’s all-inclusive plan. Menu items and
              additional services are charged separately.
            </p>
            <a
              className="text-link"
              href="https://www.nikoabeachclub.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Nikoa Beach Club
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: "experiences",
    label: "Get out there",
    title: "Days with a little more in them",
    intro:
      "Move between the shore, the courts, the resort program, and guided ways to explore Guanacaste.",
    items: [
      {
        question: "What types of experiences are available?",
        answer:
          "Guests can combine beach and ocean experiences, resort activities, court sports, equipment rentals, day tours, wildlife encounters, cultural outings, and wellness activities. The current program varies with weather, season, availability, and operating conditions.",
        defaultOpen: true,
      },
      {
        question: "What is Monkey Tours?",
        answer:
          "Monkey Tours is the independent, on-property tour operator at Villas Playa Sámara. It offers guided experiences in Sámara, Guanacaste, and beyond.",
      },
      {
        question: "Do I need to visit another website to ask about a tour?",
        answer:
          "No. Tour inquiries and lead capture remain within the Villas Playa Sámara website. Guests can contact the resort team or tour desk to review current Monkey Tours options and availability.",
      },
      {
        question: "What coastal activities may be available?",
        answer:
          "Depending on conditions and availability, coastal experiences may include paddleboard or kayak trips toward Isla Chora, snorkeling, surfing, fishing, sunset outings, and seasonal wildlife experiences.",
      },
      {
        question: "Are there activities at the resort as well as off-property tours?",
        answer:
          "Yes. Guests can join in-house activities, spend time on the padel and pickleball courts, and arrange excursions around Guanacaste and Costa Rica. Padel and pickleball are court activities; paddleboards and kayaks are separate water activities.",
      },
      {
        question: "Are tour schedules, prices, and inclusions fixed?",
        answer:
          "No. They can vary by operator, season, weather, and availability. Confirm the current price, departure time, transportation, equipment, inclusions, and cancellation terms before booking.",
      },
    ],
  },
  {
    id: "wellness",
    label: "Move and restore",
    title: "A little space to reset",
    intro:
      "Keep your routine, find your breath, or make time for current Morpho treatments during your stay.",
    items: [
      {
        question: "Does Villas Playa Sámara have a GYM?",
        answer:
          "Yes. The newly completed GYM is an air-conditioned indoor fitness space with large windows, cardio equipment, strength-training machines, free weights, benches, and functional workout areas.",
        defaultOpen: true,
      },
      {
        question: "When is the GYM open?",
        answer:
          "The GYM is currently listed as open 24 hours. Guests can confirm access instructions and any age or access requirements with the resort team during their stay.",
      },
      {
        question: "Is yoga available?",
        answer:
          "Yes. Guided yoga sessions are offered in selected resort spaces and are designed for different experience levels. Instructors, locations, equipment guidance, and schedules may vary, so guests should review the current activities schedule or contact Guest Services.",
      },
      {
        question: "What wellness services are available now?",
        answer:
          "Current wellness offerings include the GYM, guided yoga in selected resort spaces, and Morpho Spa treatments such as massages, specialty massages, body treatments, facials, exfoliations, and wellness packages.",
      },
      {
        question: "Can I book a massage or Morpho treatment now?",
        answer:
          "Yes. Morpho currently offers massage and body-care services. Contact Guest Services to review the current treatment menu, availability, prices, and appointment process.",
      },
      {
        question: "Are the sauna, cold plunge, beauty areas, and retreat pool open?",
        answer:
          "Not yet. These features belong to the expanded Morpho Wellness Retreat under development and must be described as future facilities until their opening is formally confirmed.",
      },
    ],
  },
  {
    id: "destination",
    label: "Beyond the resort",
    title: "Find your way around",
    intro:
      "A few starting points for getting to know Sámara Bay and the Pacific coast around it.",
    items: [
      {
        question: "Is there direct access to the beach?",
        answer:
          "Yes. Villas Playa Sámara is located directly beside Sámara Bay, giving guests convenient access to the beach from the resort.",
        defaultOpen: true,
      },
      {
        question: "What can I explore nearby?",
        answer:
          "Nearby places and experiences include Sámara town, Sámara Bay, Isla Chora, Playa Carrillo, local nature and wildlife, Guanacaste’s Pacific coast, and guided tours and outdoor activities.",
      },
      {
        question: "Is public transportation available?",
        answer:
          "Public bus service is available in the Sámara area. Routes, schedules, travel times, fares, and the location of nearby stops should be reconfirmed before publication.",
      },
      {
        question: "What is the weather like in Sámara?",
        answer:
          "Sámara has a warm tropical climate throughout the year, with distinct dry and rainy seasons. Weather can vary from day to day, particularly during the green season, so guests may wish to check the forecast close to their travel dates.",
      },
      {
        question: "When is the best time to visit?",
        answer:
          "Sámara offers different experiences throughout the year. The drier months are popular for sunny beach days, while the green season brings lush landscapes and a quieter rhythm. The best time depends on the type of trip you are planning.",
      },
    ],
  },
  {
    id: "guest-services",
    label: "Need a hand",
    title: "Here when you need us",
    intro:
      "Guest Services can help connect the details of your stay, before arrival and once you are here.",
    items: [
      {
        question: "Is Wi-Fi available?",
        answer:
          "Wi-Fi internet access is included among the common in-room amenities across the accommodation collection. Guests who need a particular connection setup for work or another essential purpose should confirm their requirements with the resort before arrival.",
        defaultOpen: true,
      },
      {
        question: "Is Guest Services available to help during my stay?",
        answer:
          "Yes. Guest Services can assist with dining information, activities, tours, transportation, wellness appointments, and general questions during your stay.",
      },
      {
        question: "Can the resort help with celebrations or special occasions?",
        answer:
          "The team may be able to assist with selected celebrations and special experiences. Contact Guest Services in advance to discuss current options and availability.",
      },
      {
        question: "How can I contact Villas Playa Sámara?",
        answer: (
          <>
            <p>
              Email <a href="mailto:reserve@villasplayasamara.com">reserve@villasplayasamara.com</a>,
              call <a href="tel:+50641024040">+506 4102 4040</a>, message the
              resort on <a href="https://wa.me/50686598383">WhatsApp at +506 8659-8383</a>,
              or call toll-free at <a href="tel:+18332685858">+1 833 2685 858</a>.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqDirectionContract = `
THESIS: An open reference sheet makes the resort easy to understand; it refuses the dense wall of undifferentiated accordion rows.
OWN-WORLD: VPS forest, sand, lime, white, square edges, fine rules, and an editorial topic rail.
STORY: Visitors orient themselves by topic, open only the questions that matter, and finish with a direct path to Guest Services.
FIRST VIEWPORT: A dark forest hero carries the direct headline on the left and a compact topic index on the right; the first answer begins immediately below.
FORM: Open-reference field guide, fifth grounded structure; seed 91486698.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`.trim();

export function FAQPage() {
  usePageMetadata(
    "Frequently Asked Questions | Villas Playa Sámara",
    "Find answers about rooms and villas, all-inclusive dining, experiences, wellness, beach access, and planning a stay at Villas Playa Sámara.",
  );

  useEffect(() => {
    const contract = document.createComment(faqDirectionContract);
    document.body.insertBefore(contract, document.body.firstChild);

    return () => contract.remove();
  }, []);

  return (
    <div className="site-shell faq-page">
      <Header />

      <main id="main-content">
        <section className="faq-page__hero" aria-labelledby="faq-page-title">
          <div className="content-wrap faq-page__hero-layout">
            <div className="faq-page__hero-copy">
              <h1 id="faq-page-title">
                Questions, <span>answered.</span>
              </h1>
              <p>
                A clearer way to plan your days beside Sámara Bay—from choosing
                your room to finding your next experience.
              </p>
              <div className="faq-page__hero-actions">
                <a className="button-link" href="#faq-content">
                  Browse the answers
                </a>
                <a className="text-link text-link--light" href="/#book">
                  Book your stay
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <nav className="faq-page__hero-index" aria-label="FAQ categories">
              <p>Start with what matters</p>
              {faqSections.slice(0, 4).map((section) => (
                <a href={`#faq-${section.id}`} key={section.id}>
                  <span>{section.label}</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_downward
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="faq-page__content" id="faq-content" aria-labelledby="faq-content-title">
          <div className="content-wrap">
            <header className="faq-page__content-heading">
              <div>
                <h2 className="section-title" id="faq-content-title">
                  Find your way through the stay.
                </h2>
              </div>
              <p className="section-copy">
                Open a topic, then open only the questions you need. Schedules,
                prices, reservation rules, and other operational details can
                change, so Guest Services can always confirm the current program.
              </p>
            </header>

            <div className="faq-page__layout">
              <aside className="faq-page__side-index">
                <p>On this page</p>
                <nav aria-label="All FAQ categories">
                  {faqSections.map((section) => (
                    <a href={`#faq-${section.id}`} key={section.id}>
                      {section.label}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="faq-page__sections">
                {faqSections.map((section) => (
                  <section
                    className="faq-page__section"
                    id={`faq-${section.id}`}
                    key={section.id}
                    aria-labelledby={`faq-${section.id}-title`}
                  >
                    <header className="faq-page__section-heading">
                      <h2 className="subsection-title" id={`faq-${section.id}-title`}>
                        {section.title}
                      </h2>
                      <span>{section.intro}</span>
                    </header>

                    <div className="faq-page__questions">
                      {section.items.map((item) => (
                        <details
                          className="faq-page__question"
                          key={item.question}
                          open={item.defaultOpen}
                        >
                          <summary>
                            <span>{item.question}</span>
                            <span className="material-symbols-outlined" aria-hidden="true">
                              add
                            </span>
                          </summary>
                          <div className="faq-page__answer">{item.answer}</div>
                        </details>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="faq-page__contact" aria-labelledby="faq-contact-title">
          <div className="content-wrap faq-page__contact-layout">
            <div>
              <h2 className="section-title section-title--light" id="faq-contact-title">
                Let’s make the details easy.
              </h2>
            </div>
            <div className="faq-page__contact-copy">
              <p>
                If you have a question that is not covered here, Guest Services
                can help you plan the right room, dining experience, activity, or
                wellness moment for your stay.
              </p>
              <div className="faq-page__contact-actions">
                <a className="button-link" href="mailto:reserve@villasplayasamara.com">
                  Contact Guest Services
                </a>
                <a className="text-link text-link--light" href="/rooms-and-villas">
                  Compare rooms and villas
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
