"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass py-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="شعار فرن ولحم" 
            className={cn(
              "object-contain transition-all duration-300",
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            )}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-white/70 hover:text-primary transition-colors font-semibold text-sm tracking-wide">المنيو</a>
          <a href="#reviews" className="text-white/70 hover:text-primary transition-colors font-semibold text-sm tracking-wide">آراء العملاء</a>
          <a href="#story" className="text-white/70 hover:text-primary transition-colors font-semibold text-sm tracking-wide">قصتنا</a>
          <a href="#contact" className="text-white/70 hover:text-primary transition-colors font-semibold text-sm tracking-wide">تواصل معنا</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:0556109892" className="hidden md:block">
            <Button size="sm" className="gap-2">
              <Phone size={16} />
              اطلب الآن
            </Button>
          </a>
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-fade-in">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold hover:text-primary text-white/80 border-b border-white/5 transition-colors">المنيو</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold hover:text-primary text-white/80 border-b border-white/5 transition-colors">آراء العملاء</a>
          <a href="#story" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold hover:text-primary text-white/80 border-b border-white/5 transition-colors">قصتنا</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold hover:text-primary text-white/80 border-b border-white/5 transition-colors">تواصل معنا</a>
          <a href="tel:0556109892" className="block mt-2" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full gap-2">
              <Phone size={18} />
              اطلب الآن
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
