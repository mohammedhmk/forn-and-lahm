import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { Hero } from "@/components/sections/Hero";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BrandStory } from "@/components/sections/BrandStory";
import { LocationContact } from "@/components/sections/LocationContact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <ReviewsSection />
      <BrandStory />
      <LocationContact />
      <Footer />
      <FloatingOrderButton />
    </main>
  );
}
