import arrecifeALaCarteSource from "../../docs/copy/dining/arrecife/menus/arrecife-a-la-carte-menu.md?raw";
import arrecifeBuffetSource from "../../docs/copy/dining/arrecife/menus/arrecife-daily-themed-buffet.md?raw";
import arrecifeDrinksSource from "../../docs/copy/dining/arrecife/menus/arrecife-drinks-menu.md?raw";
import bajaAzulALaCarteSource from "../../docs/copy/dining/mexican-restaurant/menus/mexican-restaurant-a-la-carte-menu.md?raw";
import bajaAzulDrinksSource from "../../docs/copy/dining/mexican-restaurant/menus/mexican-restaurant-drinks-menu.md?raw";
import bajaAzulSnacksSource from "../../docs/copy/dining/mexican-restaurant/menus/mexican-restaurant-snacks-menu.md?raw";
import trattoriaALaCarteSource from "../../docs/copy/dining/italian-restaurant/menus/italian-restaurant-a-la-carte-menu.md?raw";
import trattoriaDrinksSource from "../../docs/copy/dining/italian-restaurant/menus/italian-restaurant-drinks-and-cocktails-menu.md?raw";
import trattoriaWineSource from "../../docs/copy/dining/italian-restaurant/menus/italian-restaurant-wine-menu.md?raw";
import verandaDrinksSource from "../../docs/copy/dining/sportbar/menus/sport-bar-drinks-and-cocktails-menu.md?raw";
import verandaSnacksSource from "../../docs/copy/dining/sportbar/menus/sport-bar-snacks-and-salty-treats-menu.md?raw";
import arrecifeLogoUrl from "../../assets/svgs/dining/arrecife/arrecife-logo-black-frame.svg";
import bajaAzulLogoUrl from "../../assets/svgs/dining/bajaazul-mexican-restaurant/bajaazul-logo-black-frame.svg";
import trattoriaLogoUrl from "../../assets/svgs/dining/trattoria/Trattoria-logo-black.svg";
import verandaLogoUrl from "../../assets/svgs/dining/veranda-sportbar/veranda-sportclub-logo-black-frame.svg";

export type DiningMenu = {
  slug: string;
  label: string;
  shortLabel: string;
  source: string;
};

export type DiningMenuVenue = {
  slug: "arrecife" | "baja-azul" | "trattoria" | "veranda";
  name: string;
  restaurantPath: string;
  logoUrl: string;
  menus: readonly DiningMenu[];
};

export const arrecifeMenuVenue: DiningMenuVenue = {
  slug: "arrecife",
  name: "Arrecife",
  restaurantPath: "/dining/arrecife",
  logoUrl: arrecifeLogoUrl,
  menus: [
    {
      slug: "a-la-carte",
      label: "À La Carte Menu",
      shortLabel: "À La Carte",
      source: arrecifeALaCarteSource,
    },
    {
      slug: "buffet",
      label: "Daily Themed Buffet",
      shortLabel: "Buffet",
      source: arrecifeBuffetSource,
    },
    {
      slug: "drinks",
      label: "Drinks Menu",
      shortLabel: "Drinks",
      source: arrecifeDrinksSource,
    },
  ],
};

export const bajaAzulMenuVenue: DiningMenuVenue = {
  slug: "baja-azul",
  name: "Baja Azul",
  restaurantPath: "/dining/baja-azul",
  logoUrl: bajaAzulLogoUrl,
  menus: [
    {
      slug: "snacks",
      label: "Snacks Menu",
      shortLabel: "Snacks",
      source: bajaAzulSnacksSource,
    },
    {
      slug: "a-la-carte",
      label: "À La Carte Menu",
      shortLabel: "À La Carte",
      source: bajaAzulALaCarteSource,
    },
    {
      slug: "drinks",
      label: "Drinks Menu",
      shortLabel: "Drinks",
      source: bajaAzulDrinksSource,
    },
  ],
};

export const trattoriaMenuVenue: DiningMenuVenue = {
  slug: "trattoria",
  name: "Trattoria",
  restaurantPath: "/dining/trattoria",
  logoUrl: trattoriaLogoUrl,
  menus: [
    {
      slug: "a-la-carte",
      label: "À La Carte Menu",
      shortLabel: "À La Carte",
      source: trattoriaALaCarteSource,
    },
    {
      slug: "drinks",
      label: "Drinks & Cocktails Menu",
      shortLabel: "Drinks",
      source: trattoriaDrinksSource,
    },
    {
      slug: "wine",
      label: "Wine Menu",
      shortLabel: "Wine",
      source: trattoriaWineSource,
    },
  ],
};

export const verandaMenuVenue: DiningMenuVenue = {
  slug: "veranda",
  name: "Veranda",
  restaurantPath: "/dining/veranda",
  logoUrl: verandaLogoUrl,
  menus: [
    {
      slug: "drinks",
      label: "Drinks & Cocktails Menu",
      shortLabel: "Drinks",
      source: verandaDrinksSource,
    },
    {
      slug: "snacks",
      label: "Snacks & Salty Treats Menu",
      shortLabel: "Snacks",
      source: verandaSnacksSource,
    },
  ],
};

export const diningMenuVenues = [
  arrecifeMenuVenue,
  bajaAzulMenuVenue,
  trattoriaMenuVenue,
  verandaMenuVenue,
] as const;

export function getDiningMenuVenueBySlug(slug: string) {
  return diningMenuVenues.find((venue) => venue.slug === slug);
}

export function getDiningMenuBySlug(venue: DiningMenuVenue, slug: string) {
  return venue.menus.find((menu) => menu.slug === slug);
}
