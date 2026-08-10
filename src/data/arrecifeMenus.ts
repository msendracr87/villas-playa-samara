import {
  arrecifeMenuVenue,
  getDiningMenuBySlug,
  type DiningMenu,
} from "./diningMenus";

export type ArrecifeMenu = DiningMenu;

export const arrecifeMenus = arrecifeMenuVenue.menus;

export function getArrecifeMenuBySlug(slug: string) {
  return getDiningMenuBySlug(arrecifeMenuVenue, slug);
}
