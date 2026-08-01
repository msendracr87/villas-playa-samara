import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { HomeIntro } from "./components/home-intro/HomeIntro";
import { AccommodationsShowcase } from "./components/accommodations-showcase/AccommodationsShowcase";
// import { FamilyExperience } from "./components/family-experience/FamilyExperience";
import { DiningShowcase } from "./components/dining-showcase/DiningShowcase";
import { ExperiencesShowcase } from "./components/experiences-showcase/ExperiencesShowcase";
import { WellnessOverview } from "./components/wellness-overview/WellnessOverview";
import { GalleryPreview } from "./components/gallery-preview/GalleryPreview";
import { BookingCallToAction } from "./components/booking-call-to-action/BookingCallToAction";
import { Footer } from "./components/footer/Footer";
import { AccommodationDetail } from "./components/accommodation-detail/AccommodationDetail";
import { AccommodationsOverview } from "./components/accommodations-overview/AccommodationsOverview";
import { DesignSystemPage } from "./components/design-system/DesignSystemPage";
import { getAccommodationBySlug } from "./data/accommodations";
import { useHomeMotion } from "./hooks/useHomeMotion";
import { usePageMetadata } from "./hooks/usePageMetadata";
import "./styles/app.css";
import "./styles/home-motion.css";

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

  if (path === "/rooms-and-villas") {
    return <AccommodationsOverview />;
  }

  if (path === "/design-system") {
    return <DesignSystemPage />;
  }

  if (path.startsWith("/rooms-and-villas/")) {
    const slug = decodeURIComponent(path.slice("/rooms-and-villas/".length));
    const accommodation = getAccommodationBySlug(slug);

    if (accommodation) {
      return <AccommodationDetail accommodation={accommodation} />;
    }

    return <AccommodationsOverview />;
  }

  return <HomePage />;
}
