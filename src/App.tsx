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
import { useHomeMotion } from "./hooks/useHomeMotion";
import "./styles/app.css";
import "./styles/home-motion.css";

export function App() {
  useHomeMotion();

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
