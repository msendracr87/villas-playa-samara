import type { Accommodation } from "./accommodations";

export type AccommodationFaq = {
  question: string;
  answer: string;
};

const sharedAccommodationFaqs: readonly AccommodationFaq[] = [
  {
    question: "Can I see the layout and additional images?",
    answer:
      "Yes. Select Floor Plan to view the layout and Gallery to see the available images for this accommodation category.",
  },
  {
    question: "What common amenities are included?",
    answer:
      "Common amenities include air conditioning, a ceiling fan, an in-room safe, flat-screen HD TV, Wi-Fi, a mini-fridge, hair dryer, bathroom amenities, and a luggage rack. The features listed above identify any additional amenities specific to this category.",
  },
];

const accommodationFaqsBySlug: Record<
  string,
  readonly AccommodationFaq[]
> = {
  "deluxe-garden-view-king-size-bed": [
    {
      question: "How many guests can stay in this room?",
      answer: "The room has one King bed and sleeps up to two guests.",
    },
    {
      question: "What view and outdoor space does it offer?",
      answer:
        "It looks toward the garden or pool area and includes a terrace or balcony.",
    },
    {
      question: "Does this room have a kitchen?",
      answer:
        "It does not have a full kitchen. It includes a mini-fridge, coffee maker, tableware, and utensils for drinks and light refreshments.",
    },
  ],
  "junior-suite-garden-view": [
    {
      question: "How many guests can stay in this suite?",
      answer:
        "The Junior Suite Garden View sleeps a maximum of four guests. Its standard setup includes one Queen bed, one Single bed, and two Sofa beds.",
    },
    {
      question: "Does the suite include a kitchen and living space?",
      answer:
        "Yes. It includes a fully equipped kitchen together with dining and social space.",
    },
    {
      question: "What view and outdoor space does it offer?",
      answer:
        "The suite looks toward the gardens and includes a private garden-view terrace.",
    },
  ],
  "deluxe-garden-view-two-queen-size-beds": [
    {
      question: "How many guests can stay in this room?",
      answer: "The room has two Queen beds and sleeps up to four guests.",
    },
    {
      question: "What view and outdoor space does it offer?",
      answer:
        "It looks toward the garden or pool area and includes a terrace or balcony.",
    },
    {
      question: "Does this room have a kitchen?",
      answer:
        "It does not have a full kitchen. It includes a mini-fridge, coffee maker, tableware, and utensils for drinks and light refreshments.",
    },
  ],
  "junior-suite-beachfront": [
    {
      question: "How many guests can stay in this suite?",
      answer:
        "The suite sleeps a maximum of four guests and includes one Queen bed, one Single bed, and two Sofa beds.",
    },
    {
      question: "Does the suite have a full kitchen?",
      answer:
        "Yes. It includes a fully equipped kitchen together with dining and social space.",
    },
    {
      question: "What view and outdoor space does it offer?",
      answer:
        "The suite has a beachfront, ocean-facing setting and a terrace overlooking the Pacific.",
    },
  ],
  "two-bedroom-garden-view-villa": [
    {
      question: "What is the bed and bathroom configuration?",
      answer:
        "The villa has one King bed, one Queen bed, and one Twin bed across two bedrooms. Each bedroom has its own private bathroom.",
    },
    {
      question: "How many guests can stay in the villa?",
      answer: "The villa sleeps a maximum of six guests.",
    },
    {
      question: "Does the villa include a kitchen and outdoor space?",
      answer:
        "Yes. It includes a fully equipped kitchen, shared dining and social areas, and a garden-view terrace.",
    },
  ],
  "two-bedroom-beachfront-villa": [
    {
      question: "What is the bed and bathroom configuration?",
      answer:
        "The villa has one King bed, one Queen bed, and one Twin bed across two bedrooms. Each bedroom has its own private bathroom.",
    },
    {
      question: "How many guests can stay in the villa?",
      answer: "The villa sleeps a maximum of six guests.",
    },
    {
      question: "What view and shared spaces does the villa offer?",
      answer:
        "The villa has a beachfront, ocean-facing setting, a beachfront terrace, a fully equipped kitchen, and shared dining and social areas.",
    },
  ],
  "deluxe-ocean-view-king-size-bed": [
    {
      question: "How many guests can stay in this room?",
      answer: "The room has one King bed and sleeps up to two guests.",
    },
    {
      question: "What view and outdoor space does it offer?",
      answer:
        "It offers a beachfront, ocean-facing setting and a spacious beachfront terrace.",
    },
    {
      question: "Does this room have a kitchen?",
      answer:
        "It does not have a full kitchen. It includes a mini-fridge, coffee maker, tableware, and utensils for drinks and light refreshments.",
    },
  ],
  "three-bedroom-beachfront-luxury-villa": [
    {
      question: "How many guests can stay in the villa?",
      answer: "The villa sleeps up to eight guests.",
    },
    {
      question: "What is the bed and bathroom configuration?",
      answer:
        "The three bedrooms include one King bed, two Queen beds, and two Twin beds. The villa has two private bathrooms.",
    },
    {
      question: "What shared spaces are included?",
      answer:
        "The villa includes a fully equipped kitchen, a large social area, and a beachfront terrace with an ocean view.",
    },
  ],
};

export const getAccommodationFaqs = (
  accommodation: Accommodation,
): readonly AccommodationFaq[] => [
  ...(accommodationFaqsBySlug[accommodation.slug] ?? []),
  ...sharedAccommodationFaqs,
];
