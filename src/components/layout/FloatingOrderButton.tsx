"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DirectionsLink } from "../ui/TrackedLinks";
import { MAPS_DIRECTIONS_URL } from "@/data/site";

export function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DirectionsLink
      href={MAPS_DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden",
        "bg-primary hover:bg-primaryHover text-white font-bold py-3.5 px-8 rounded-full",
        "shadow-[0_8px_30px_rgba(232,90,23,0.4)]",
        "flex items-center gap-2 transition-all duration-300",
        "animate-glow",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <MapPin size={18} />
      <span>الاتجاهات</span>
    </DirectionsLink>
  );
}
