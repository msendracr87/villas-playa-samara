import gardenKingImageSmall from "../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-king-720.webp";
import gardenKingImageLarge from "../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-king-1440.webp";
import juniorGardenImageSmall from "../../assets/images/optimized/homepage/accommodations/junior-suite-garden-view-720.webp";
import juniorGardenImageLarge from "../../assets/images/optimized/homepage/accommodations/junior-suite-garden-view-1440.webp";
import gardenQueensImageSmall from "../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-two-queen-beds-720.webp";
import gardenQueensImageLarge from "../../assets/images/optimized/homepage/accommodations/deluxe-garden-view-two-queen-beds-1440.webp";
import juniorBeachfrontImageSmall from "../../assets/images/optimized/homepage/accommodations/junior-suite-beachfront-720.webp";
import juniorBeachfrontImageLarge from "../../assets/images/optimized/homepage/accommodations/junior-suite-beachfront-1440.webp";
import gardenVillaImageSmall from "../../assets/images/optimized/homepage/accommodations/two-bedroom-garden-view-villa-720.webp";
import gardenVillaImageLarge from "../../assets/images/optimized/homepage/accommodations/two-bedroom-garden-view-villa-1440.webp";
import beachfrontVillaImageSmall from "../../assets/images/optimized/homepage/accommodations/two-bedroom-beachfront-villa-720.webp";
import beachfrontVillaImageLarge from "../../assets/images/optimized/homepage/accommodations/two-bedroom-beachfront-villa-1440.webp";
import oceanKingImageSmall from "../../assets/images/optimized/homepage/accommodations/deluxe-ocean-view-king-720.webp";
import oceanKingImageLarge from "../../assets/images/optimized/homepage/accommodations/deluxe-ocean-view-king-1440.webp";
import luxuryVillaImageSmall from "../../assets/images/optimized/homepage/accommodations/three-bedroom-beachfront-luxury-villa-720.webp";
import luxuryVillaImageLarge from "../../assets/images/optimized/homepage/accommodations/three-bedroom-beachfront-luxury-villa-1440.webp";

export type Accommodation = {
  slug: string;
  name: string;
  shortName: string;
  note: string;
  category: "Room" | "Suite" | "Villa";
  beds: string;
  sleeps: string;
  view: string;
  outdoorSpace: string;
  homepageMeta: string;
  homepageSummary: string;
  summary: string;
  detail: readonly string[];
  features: readonly string[];
  image: {
    small: string;
    large: string;
  };
  pageTitle: string;
  metaDescription: string;
};

export const accommodations: readonly Accommodation[] = [
  {
    slug: "deluxe-garden-view-king-size-bed",
    name: "Deluxe Garden View — King-Size Bed",
    shortName: "Deluxe Garden View King",
    note: "Cozy comfort for two",
    category: "Room",
    beds: "1 King bed",
    sleeps: "2 guests",
    view: "Garden or pool area",
    outdoorSpace: "Terrace or balcony",
    homepageMeta: "King bed · 2 guests · Garden or pool view",
    homepageSummary:
      "A comfortable room for couples or solo travelers, with a terrace or balcony overlooking the garden or pool area.",
    summary:
      "Designed for couples or solo travelers, this comfortable room combines modern amenities with a cozy atmosphere. It is ideal for a relaxing getaway with the convenience of light cooking facilities.",
    detail: [
      "Designed for couples and solo travelers, this welcoming room offers a comfortable place to slow down after a day beside the Pacific. A King bed with premium bedding anchors the space, while air conditioning and a ceiling fan help keep the room comfortable throughout your stay.",
      "A sofa seating area and private terrace or balcony create room to unwind. The mini-fridge, coffee maker, tableware, and utensils provide everyday convenience for drinks and light refreshments.",
    ],
    features: [
      "King bed with premium bedding",
      "Air conditioning",
      "Ceiling fan",
      "Mini-fridge",
      "Coffee maker",
      "Mugs, plates, cups & utensils",
      "Sofa seating area",
      "Private bathroom",
      "Bathroom amenities",
      "Hair dryer",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Luggage rack",
      "Terrace or balcony",
    ],
    image: { small: gardenKingImageSmall, large: gardenKingImageLarge },
    pageTitle: "Deluxe Garden View King Room | Villas Playa Sámara",
    metaDescription:
      "Stay in a Deluxe Garden View room at Villas Playa Sámara with one King bed, space for two guests, convenient amenities, and a terrace or balcony.",
  },
  {
    slug: "junior-suite-garden-view",
    name: "Junior Suite Garden View",
    shortName: "Junior Suite Garden View",
    note: "Spacious villa with nature views",
    category: "Suite",
    beds: "Queen and Single beds, plus 2 Sofa beds",
    sleeps: "Maximum 4 guests",
    view: "Garden view",
    outdoorSpace: "Garden-view terrace",
    homepageMeta: "Flexible beds · Up to 4 guests · Garden view",
    homepageSummary:
      "A garden-view suite with flexible sleeping space, a shared living and dining area, a full kitchen, and a private terrace.",
    summary:
      "Enjoy extra space and the charm of lush tropical surroundings. Perfect for families or friends, this suite offers a comfortable bedroom, a social area, and a fully equipped kitchen for longer stays.",
    detail: [
      "Enjoy extra space and the charm of lush tropical surroundings. Designed for families or friends, this suite combines a comfortable bedroom with a social area where everyone can spend time together.",
      "The standard bedroom includes a Queen bed and a Single bed. Two sofa beds add flexible sleeping space within the suite's four-guest maximum, while the dining table and fully equipped kitchen make shared meals and longer stays more convenient. A garden-view terrace extends the suite into its tropical setting.",
    ],
    features: [
      "Queen bed & Single bed",
      "Two sofa beds",
      "Living area",
      "Dining table",
      "Fully equipped kitchen",
      "Fridge",
      "Microwave",
      "Toaster",
      "Coffee maker",
      "Cookware & utensils",
      "Air conditioning",
      "Ceiling fan",
      "Private bathroom",
      "Bathroom amenities",
      "Hair dryer",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Luggage rack",
      "Garden-view terrace",
    ],
    image: { small: juniorGardenImageSmall, large: juniorGardenImageLarge },
    pageTitle: "Junior Suite Garden View | Villas Playa Sámara",
    metaDescription:
      "Discover a Garden View Junior Suite for up to four guests, with flexible beds, a living area, full kitchen, and private terrace at Villas Playa Sámara.",
  },
  {
    slug: "deluxe-garden-view-two-queen-size-beds",
    name: "Deluxe Garden View — Two Queen-Size Beds",
    shortName: "Deluxe Garden View Queens",
    note: "Comfort for small groups",
    category: "Room",
    beds: "2 Queen beds",
    sleeps: "4 guests",
    view: "Garden or pool area",
    outdoorSpace: "Terrace or balcony",
    homepageMeta: "Two Queen beds · 4 guests · Garden or pool view",
    homepageSummary:
      "A practical room with two Queen beds, light refreshment facilities, a sofa seating area, and an outdoor terrace or balcony.",
    summary:
      "Ideal for friends or families traveling together, this room offers two spacious beds, a small kitchenette, and a welcoming social space to relax after a day at the beach.",
    detail: [
      "Ideal for friends or families traveling together, this room provides two Queen beds and a welcoming place to relax after a day at the beach. Air conditioning and a ceiling fan help keep the room comfortable throughout your stay.",
      "A sofa seating area offers space to unwind, while the mini-fridge, coffee maker, tableware, and utensils make it easy to prepare drinks and light refreshments. A terrace or balcony looks toward the garden or pool area.",
    ],
    features: [
      "Two Queen beds with quality linens",
      "Air conditioning",
      "Ceiling fan",
      "Mini-fridge",
      "Coffee maker",
      "Mugs, plates, cups & utensils",
      "Sofa seating area",
      "Private bathroom",
      "Bathroom amenities",
      "Hair dryer",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Luggage rack",
      "Terrace or balcony",
    ],
    image: { small: gardenQueensImageSmall, large: gardenQueensImageLarge },
    pageTitle: "Deluxe Garden View Two Queen Room | Villas Playa Sámara",
    metaDescription:
      "Stay in a Deluxe Garden View room with two Queen beds, space for four guests, convenient amenities, and a terrace or balcony at Villas Playa Sámara.",
  },
  {
    slug: "junior-suite-beachfront",
    name: "Junior Suite Beachfront",
    shortName: "Junior Suite Beachfront",
    note: "Steps from the sand",
    category: "Suite",
    beds: "Queen and Single beds, plus 2 Sofa beds",
    sleeps: "Maximum 4 guests",
    view: "Beachfront / Ocean view",
    outdoorSpace: "Beachfront terrace",
    homepageMeta: "Flexible beds · Up to 4 guests · Beachfront",
    homepageSummary:
      "A beachfront suite with flexible sleeping space, shared living and dining, a full kitchen, and a terrace facing the Pacific.",
    summary:
      "Wake up to breathtaking Pacific Ocean views and step directly onto the sand. This beachfront villa combines comfort with an unbeatable location, perfect for beach lovers.",
    detail: [
      "Wake up to Pacific Ocean views and enjoy a suite designed around easy beachfront living. The layout gives families or friends a comfortable bedroom, a social area for spending time together, and a terrace overlooking the ocean.",
      "The bedroom includes a Queen bed and a Single bed, while two sofa beds provide flexible sleeping space within the suite's four-guest maximum. A dining table and fully equipped kitchen make the suite convenient for shared meals, longer stays, and unhurried mornings before stepping outside toward the sand.",
    ],
    features: [
      "Queen bed & Single bed",
      "Two sofa beds",
      "Living area",
      "Dining table",
      "Fully equipped kitchen",
      "Fridge",
      "Microwave",
      "Toaster",
      "Coffee maker",
      "Cookware & utensils",
      "Air conditioning",
      "Ceiling fan",
      "Private bathroom",
      "Bathroom amenities",
      "Hair dryer",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Luggage rack",
      "Beachfront terrace with ocean views",
    ],
    image: {
      small: juniorBeachfrontImageSmall,
      large: juniorBeachfrontImageLarge,
    },
    pageTitle: "Junior Suite Beachfront | Villas Playa Sámara",
    metaDescription:
      "Enjoy a Beachfront Junior Suite for up to four guests, with ocean views, flexible beds, a living area, full kitchen, and terrace beside the Pacific.",
  },
  {
    slug: "two-bedroom-garden-view-villa",
    name: "Two Bedroom Garden View Villa",
    shortName: "Two Bedroom Garden Villa",
    note: "A spacious family retreat",
    category: "Villa",
    beds: "King, Queen, and Twin beds",
    sleeps: "Maximum 6 guests",
    view: "Garden view",
    outdoorSpace: "Garden-view terrace",
    homepageMeta: "Two bedrooms · Up to 6 guests · Garden view",
    homepageSummary:
      "A two-bedroom villa with private bathrooms, generous shared living space, a full kitchen, and a tropical garden terrace.",
    summary:
      "A roomy villa surrounded by tropical greenery, perfect for families or groups. Each bedroom has its own private bathroom, and the villa includes a full kitchen and terrace for outdoor relaxation.",
    detail: [
      "Surrounded by tropical greenery, this two-bedroom villa gives families and groups room to stay together while maintaining privacy. The master bedroom includes a King bed, air conditioning, an in-room safe, and a private bathroom. The second bedroom offers a Queen bed, a Twin bed, air conditioning, and its own private bathroom.",
      "A shared social area, dining space, and fully equipped kitchen make it easy to gather between beach days and resort activities. Step onto the garden-view terrace for a quiet place to enjoy the tropical surroundings.",
    ],
    features: [
      "King bed",
      "Queen bed & Twin bed",
      "Two private bathrooms",
      "Living room with sofa seating",
      "Dining area",
      "Fully equipped kitchen",
      "Fridge",
      "Microwave",
      "Toaster",
      "Coffee maker",
      "Cookware & utensils",
      "Air conditioning",
      "Ceiling fan",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Hair dryer",
      "Bathroom amenities",
      "Luggage rack",
      "Garden-view terrace",
    ],
    image: { small: gardenVillaImageSmall, large: gardenVillaImageLarge },
    pageTitle: "Two-Bedroom Garden View Villa | Villas Playa Sámara",
    metaDescription:
      "Explore a two-bedroom Garden View Villa for up to six guests, with two bathrooms, shared living space, a full kitchen, and a tropical terrace.",
  },
  {
    slug: "two-bedroom-beachfront-villa",
    name: "Two Bedroom Beachfront Villa",
    shortName: "Two Bedroom Beachfront Villa",
    note: "An oceanfront family escape",
    category: "Villa",
    beds: "King, Queen, and Twin beds",
    sleeps: "Maximum 6 guests",
    view: "Beachfront / Ocean view",
    outdoorSpace: "Beachfront terrace",
    homepageMeta: "Two bedrooms · Up to 6 guests · Beachfront",
    homepageSummary:
      "A spacious two-bedroom villa with private bathrooms, a full kitchen, and an inviting terrace beside the Pacific.",
    summary:
      "Located right by the Pacific Ocean, this villa offers stunning views and direct beach access. With two bedrooms and private bathrooms, it's ideal for families or groups seeking a seaside stay.",
    detail: [
      "Located beside the Pacific, this two-bedroom villa pairs ocean views and direct beach access with comfortable shared living space. It is designed for families and groups who want to stay close while still enjoying the privacy of separate bedrooms and bathrooms.",
      "The master bedroom includes a King bed, air conditioning, an in-room safe, and a private bathroom. The second bedroom provides a Queen bed, a Twin bed, air conditioning, and its own private bathroom. A fully equipped kitchen and social area make gathering easy, while the beachfront terrace keeps the ocean close throughout the day.",
    ],
    features: [
      "King bed",
      "Queen bed & Twin bed",
      "Two private bathrooms",
      "Living room with sofa seating",
      "Dining area",
      "Fully equipped kitchen",
      "Fridge",
      "Microwave",
      "Toaster",
      "Coffee maker",
      "Cookware & utensils",
      "Air conditioning",
      "Ceiling fan",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Hair dryer",
      "Bathroom amenities",
      "Luggage rack",
      "Beachfront terrace",
    ],
    image: {
      small: beachfrontVillaImageSmall,
      large: beachfrontVillaImageLarge,
    },
    pageTitle: "Two-Bedroom Beachfront Villa | Villas Playa Sámara",
    metaDescription:
      "Stay beside the Pacific in a two-bedroom beachfront villa for up to six guests, with two bathrooms, a full kitchen, shared living space, and terrace.",
  },
  {
    slug: "deluxe-ocean-view-king-size-bed",
    name: "Deluxe Ocean View — King-Size Bed",
    shortName: "Deluxe Ocean View King",
    note: "A romantic ocean hideaway",
    category: "Room",
    beds: "1 King bed",
    sleeps: "2 guests",
    view: "Beachfront / Ocean view",
    outdoorSpace: "Beachfront terrace",
    homepageMeta: "King bed · 2 guests · Ocean view",
    homepageSummary:
      "An intimate ocean-view room for two with everyday refreshment amenities and a spacious beachfront terrace.",
    summary:
      "Perfect for couples, this accommodation offers direct access to the sand and sweeping Pacific Ocean views. Enjoy the privacy of a spacious terrace and a serene atmosphere.",
    detail: [
      "Designed for couples, this Deluxe Ocean View room places the Pacific close to your stay. A King bed, air conditioning, and a ceiling fan create a comfortable place to unwind after a day by the water.",
      "A mini-fridge, coffee maker, tableware, and utensils offer convenience for drinks and light refreshments. The private bathroom, in-room safe, and spacious beachfront terrace complete a relaxed oceanfront escape for two.",
    ],
    features: [
      "King bed",
      "Air conditioning",
      "Ceiling fan",
      "Mini-fridge",
      "Coffee maker",
      "Mugs, plates, cups & utensils",
      "Private bathroom",
      "Bathroom amenities",
      "Hair dryer",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Luggage rack",
      "Beachfront terrace",
    ],
    image: { small: oceanKingImageSmall, large: oceanKingImageLarge },
    pageTitle: "Deluxe Ocean View King Room | Villas Playa Sámara",
    metaDescription:
      "Discover a Deluxe Ocean View room for two with a King bed, everyday amenities, and a private beachfront terrace at Villas Playa Sámara.",
  },
  {
    slug: "three-bedroom-beachfront-luxury-villa",
    name: "Three Bedroom Beachfront Luxury Villa",
    shortName: "Three Bedroom Beachfront Villa",
    note: "A premium oceanfront stay",
    category: "Villa",
    beds: "1 King, 2 Queen, and 2 Twin beds",
    sleeps: "8 guests",
    view: "Beachfront / Ocean view",
    outdoorSpace: "Beachfront terrace",
    homepageMeta: "Three bedrooms · Up to 8 guests · Beachfront",
    homepageSummary:
      "A generous three-bedroom villa with two bathrooms, a full kitchen, and abundant shared space right beside the sand.",
    summary:
      "Our most spacious and luxurious villa is located directly on the sand. With three bedrooms, a full kitchen, and two private bathrooms, it's perfect for larger families or groups who want the best of beachfront living.",
    detail: [
      "Our most spacious beachfront villa is designed for larger families and groups who want to share their time in Sámara without feeling crowded. Located directly by the sand, it combines generous interiors, ocean views, and easy access to the Pacific.",
      "The master bedroom includes a King bed and air conditioning. The second and third bedrooms each provide a Queen bed, a Twin bed, and air conditioning, creating flexible sleeping arrangements for up to eight guests. Two private bathrooms, a fully equipped kitchen, and a large social area make daily routines and shared meals easier. Outside, the beachfront terrace offers a relaxed setting for gathering with the ocean in view.",
    ],
    features: [
      "One King bed",
      "Two Queen beds",
      "Two Twin beds",
      "Two private bathrooms",
      "Large living room with sofa seating",
      "Dining area",
      "Fully equipped kitchen",
      "Fridge",
      "Microwave",
      "Toaster",
      "Coffee maker",
      "Cookware & utensils",
      "Air conditioning",
      "Ceiling fans",
      "In-room safe",
      "Flat-screen HD TV",
      "Wi-Fi internet access",
      "Hair dryer",
      "Bathroom amenities",
      "Luggage rack",
      "Beachfront terrace",
    ],
    image: { small: luxuryVillaImageSmall, large: luxuryVillaImageLarge },
    pageTitle: "Three-Bedroom Beachfront Villa | Villas Playa Sámara",
    metaDescription:
      "Enjoy a spacious three-bedroom beachfront villa for up to eight guests, with ocean views, two bathrooms, a full kitchen, and room to gather.",
  },
] as const;

export const getAccommodationPath = (accommodation: Accommodation) =>
  `/rooms-and-villas/${accommodation.slug}`;

export const getAccommodationBySlug = (slug: string) =>
  accommodations.find((accommodation) => accommodation.slug === slug);
