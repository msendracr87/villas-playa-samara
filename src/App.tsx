import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { HomeIntro } from "./components/home-intro/HomeIntro";
import { AccommodationsShowcase } from "./components/accommodations-showcase/AccommodationsShowcase";
// import { FamilyExperience } from "./components/family-experience/FamilyExperience";
import { DiningShowcase } from "./components/dining-showcase/DiningShowcase";
import { DiningOverview } from "./components/dining-overview/DiningOverview";
import { ArrecifeDetail } from "./components/arrecife-detail/ArrecifeDetail";
import { DiningMenuPage } from "./components/arrecife-menu/ArrecifeMenu";
import { BajaAzulDetail } from "./components/baja-azul-detail/BajaAzulDetail";
import { TrattoriaDetail } from "./components/trattoria-detail/TrattoriaDetail";
import { VerandaDetail } from "./components/veranda-detail/VerandaDetail";
import { ExperiencesShowcase } from "./components/experiences-showcase/ExperiencesShowcase";
import { ExperiencesOverview } from "./components/experiences-overview/ExperiencesOverview";
import { RentalsDetail } from "./components/rentals-detail/RentalsDetail";
import { DayToursDetail } from "./components/day-tours-detail/DayToursDetail";
import { ActivitiesDetail } from "./components/activities-detail/ActivitiesDetail";
import { GymDetail } from "./components/gym-detail/GymDetail";
import { SpaDetail } from "./components/spa-detail/SpaDetail";
import { WellnessPage } from "./components/wellness-page/WellnessPage";
import { WellnessOverview } from "./components/wellness-overview/WellnessOverview";
import { GalleryPreview } from "./components/gallery-preview/GalleryPreview";
import { GalleryPage } from "./components/gallery-page/GalleryPage";
import { BookingCallToAction } from "./components/booking-call-to-action/BookingCallToAction";
import { Footer } from "./components/footer/Footer";
import { AccommodationDetail } from "./components/accommodation-detail/AccommodationDetail";
import { AccommodationsOverview } from "./components/accommodations-overview/AccommodationsOverview";
import { DesignSystemPage } from "./components/design-system/DesignSystemPage";
import { PresentationPage } from "./components/presentation/PresentationPage";
import { NotFoundPage } from "./components/not-found-page/NotFoundPage";
import { ThankYouPage } from "./components/thank-you-page/ThankYouPage";
import { getAccommodationBySlug } from "./data/accommodations";
import {
  arrecifeMenuVenue,
  bajaAzulMenuVenue,
  getDiningMenuBySlug,
  trattoriaMenuVenue,
  verandaMenuVenue,
} from "./data/diningMenus";
import { useHomeMotion } from "./hooks/useHomeMotion";
import { usePageMetadata } from "./hooks/usePageMetadata";
import "./styles/app.css";
import "./styles/home-motion.css";

const decodePathSegment = (segment: string) => {
  try {
    return decodeURIComponent(segment);
  } catch {
    return null;
  }
};

function HomePage() {
  useHomeMotion();
  usePageMetadata("Villas Playa Sámara");

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <Hero />
        <HomeIntro />
        <AccommodationsShowcase />
        {/* <FamilyExperience /> */}
        <DiningShowcase />
        <ExperiencesShowcase />
        <WellnessOverview />
        <GalleryPreview />
        <BookingCallToAction />
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/presentation") {
    return <PresentationPage />;
  }

  if (path === "/thank-you") {
    return <ThankYouPage />;
  }

  if (path === "/rooms-and-villas") {
    return <AccommodationsOverview />;
  }

  if (path === "/dining") {
    return <DiningOverview />;
  }

  if (path === "/experiences") {
    return <ExperiencesOverview />;
  }

  if (path === "/experiences/rentals") {
    return <RentalsDetail />;
  }

  if (path === "/experiences/day-tours") {
    return <DayToursDetail />;
  }

  if (path === "/experiences/activities") {
    return <ActivitiesDetail />;
  }

  if (path === "/wellness/gym") {
    return <GymDetail />;
  }

  if (path === "/wellness/spa") {
    return <SpaDetail />;
  }

  if (path === "/wellness") {
    return <WellnessPage />;
  }

  if (path === "/gallery") {
    return <GalleryPage />;
  }

  if (path === "/dining/arrecife") {
    return <ArrecifeDetail />;
  }

  if (path === "/dining/baja-azul") {
    return <BajaAzulDetail />;
  }

  if (path === "/dining/trattoria") {
    return <TrattoriaDetail />;
  }

  if (path === "/dining/veranda") {
    return <VerandaDetail />;
  }

  if (path.startsWith("/dining/arrecife/menus/")) {
    const slug = decodePathSegment(
      path.slice("/dining/arrecife/menus/".length),
    );
    const menu = slug ? getDiningMenuBySlug(arrecifeMenuVenue, slug) : undefined;

    if (menu) {
      return <DiningMenuPage menu={menu} venue={arrecifeMenuVenue} />;
    }

    return <NotFoundPage />;
  }

  if (path.startsWith("/dining/baja-azul/menus/")) {
    const slug = decodePathSegment(
      path.slice("/dining/baja-azul/menus/".length),
    );
    const menu = slug ? getDiningMenuBySlug(bajaAzulMenuVenue, slug) : undefined;

    if (menu) {
      return <DiningMenuPage menu={menu} venue={bajaAzulMenuVenue} />;
    }

    return <NotFoundPage />;
  }

  if (path.startsWith("/dining/trattoria/menus/")) {
    const slug = decodePathSegment(
      path.slice("/dining/trattoria/menus/".length),
    );
    const menu = slug ? getDiningMenuBySlug(trattoriaMenuVenue, slug) : undefined;

    if (menu) {
      return <DiningMenuPage menu={menu} venue={trattoriaMenuVenue} />;
    }

    return <NotFoundPage />;
  }

  if (path.startsWith("/dining/veranda/menus/")) {
    const slug = decodePathSegment(
      path.slice("/dining/veranda/menus/".length),
    );
    const menu = slug ? getDiningMenuBySlug(verandaMenuVenue, slug) : undefined;

    if (menu) {
      return <DiningMenuPage menu={menu} venue={verandaMenuVenue} />;
    }

    return <NotFoundPage />;
  }

  if (path.startsWith("/dining/")) {
    return <NotFoundPage />;
  }

  if (path === "/design-system") {
    return <DesignSystemPage />;
  }

  if (path.startsWith("/rooms-and-villas/")) {
    const slug = decodePathSegment(path.slice("/rooms-and-villas/".length));
    const accommodation = slug ? getAccommodationBySlug(slug) : undefined;

    if (accommodation) {
      return <AccommodationDetail accommodation={accommodation} />;
    }

    return <NotFoundPage />;
  }

  if (path === "/") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}
