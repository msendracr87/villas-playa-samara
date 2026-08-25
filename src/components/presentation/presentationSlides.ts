import type { ComponentType } from "react";
import {
  Slide01,
  Slide03,
  Slide13,
  Slide21,
  Slide22,
  Slide28,
  type PresentationSlideProps,
} from "./slides/PresentationSlides";
import {
  Slide02,
  Slide04,
  Slide05,
  Slide06,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide19,
  Slide20,
  Slide23,
  Slide24,
  Slide25,
  Slide27,
} from "./slides/AdditionalSlides";

export type PresentationSlideConfig = {
  id: string;
  number: number;
  title: string;
  duration: number;
  component: ComponentType<PresentationSlideProps>;
};

export const presentationTotalSlides = 25;

export const presentationSlides: readonly PresentationSlideConfig[] = [
  {
    id: "opening",
    number: 1,
    title: "Make Yourself at Home by Playa Sámara",
    duration: 20_000,
    component: Slide01,
  },
  {
    id: "resort-overview",
    number: 2,
    title: "A relaxed stay, with room for everyone",
    duration: 20_000,
    component: Slide02,
  },
  {
    id: "accommodations-opener",
    number: 3,
    title: "Find the space that fits your stay",
    duration: 20_000,
    component: Slide03,
  },
  {
    id: "deluxe-garden-view-king",
    number: 4,
    title: "Deluxe Garden View — King-Size Bed",
    duration: 22_000,
    component: Slide04,
  },
  {
    id: "junior-suite-garden-view",
    number: 5,
    title: "Junior Suite Garden View",
    duration: 22_000,
    component: Slide05,
  },
  {
    id: "deluxe-garden-view-queens",
    number: 6,
    title: "Deluxe Garden View — Two Queen-Size Beds",
    duration: 22_000,
    component: Slide06,
  },
  {
    id: "junior-suite-beachfront",
    number: 7,
    title: "Junior Suite Beachfront",
    duration: 22_000,
    component: Slide08,
  },
  {
    id: "two-bedroom-garden-villa",
    number: 8,
    title: "Two-Bedroom Garden View Villa",
    duration: 22_000,
    component: Slide09,
  },
  {
    id: "two-bedroom-beachfront-villa",
    number: 9,
    title: "Two-Bedroom Beachfront Villa",
    duration: 22_000,
    component: Slide10,
  },
  {
    id: "deluxe-ocean-view-king",
    number: 10,
    title: "Deluxe Ocean View — King-Size Bed",
    duration: 22_000,
    component: Slide11,
  },
  {
    id: "three-bedroom-beachfront-villa",
    number: 11,
    title: "Three-Bedroom Beachfront Luxury Villa",
    duration: 22_000,
    component: Slide12,
  },
  {
    id: "dining-opener",
    number: 12,
    title: "Good food, with more ways to enjoy it",
    duration: 20_000,
    component: Slide13,
  },
  {
    id: "arrecife",
    number: 13,
    title: "Arrecife",
    duration: 20_000,
    component: Slide14,
  },
  {
    id: "baja-azul",
    number: 14,
    title: "Baja Azul",
    duration: 20_000,
    component: Slide15,
  },
  {
    id: "trattoria",
    number: 15,
    title: "Trattoria",
    duration: 20_000,
    component: Slide16,
  },
  {
    id: "veranda",
    number: 16,
    title: "Veranda",
    duration: 20_000,
    component: Slide17,
  },
  {
    id: "nikoa-beach-club",
    number: 17,
    title: "Beachfront dining, with its own rhythm",
    duration: 20_000,
    component: Slide19,
  },
  {
    id: "resort-life",
    number: 18,
    title: "Every pace has a place here",
    duration: 20_000,
    component: Slide20,
  },
  {
    id: "gym",
    number: 19,
    title: "Space to keep moving",
    duration: 20_000,
    component: Slide21,
  },
  {
    id: "courts",
    number: 20,
    title: "Padel & Pickleball",
    duration: 20_000,
    component: Slide22,
  },
  {
    id: "wellness",
    number: 21,
    title: "Move, restore, and make time for yourself",
    duration: 22_000,
    component: Slide23,
  },
  {
    id: "monkey-tours",
    number: 22,
    title: "Your gateway to adventure",
    duration: 24_000,
    component: Slide24,
  },
  {
    id: "in-house-activities",
    number: 23,
    title: "Something different every day",
    duration: 22_000,
    component: Slide25,
  },
  {
    id: "future-development",
    number: 24,
    title: "A more expansive resort experience is taking shape",
    duration: 22_000,
    component: Slide27,
  },
  {
    id: "closing",
    number: 25,
    title: "Make yourself at home in Sámara",
    duration: 20_000,
    component: Slide28,
  },
] as const;
