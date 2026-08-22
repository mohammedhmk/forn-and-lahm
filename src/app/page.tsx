import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { Hero } from "@/components/sections/Hero";
import { LocationContact } from "@/components/sections/LocationContact";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <LocationContact />
      <ProductShowcase />
      <ReviewsSection />
      <Footer />
      <FloatingOrderButton />
    </main>
  );
}
