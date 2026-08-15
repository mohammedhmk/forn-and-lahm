"use client";

import { Button } from "../ui/Button";
import { MapPin, Phone } from "lucide-react";

const HERO_IMAGE = "/images/hero_main.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/50"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center pt-24 pb-16">
        {/* Logo */}
        <div className="w-36 h-36 md:w-52 md:h-52 rounded-full flex items-center justify-center mb-8 animate-fade-in">
          <img 
            src="/images/logo.png" 
            alt="شعار فرن ولحم" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(232,90,23,0.3)]"
          />
        </div>

        <h1 className="text-[36px] md:text-[60px] font-extrabold leading-[1.1] mb-6 max-w-3xl text-white drop-shadow-lg animate-fade-in-up">
          نار حقيقية...{" "}
          <span className="text-gradient">ونكهة نعيمي أصيلة</span>
        </h1>
        
        <p className="text-[15px] md:text-xl text-gray-300 max-w-xl mb-12 leading-[1.7] font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          من الفرن إلى مائدتك، طازج كل يوم
        </p>

        {/* Two buttons only: Call + Directions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="tel:0556109892" className="w-full sm:w-auto">
            <Button size="lg" className="w-full gap-3 text-lg animate-glow">
              <Phone size={22} />
              اتصل الآن
            </Button>
          </a>
          
          <a href="https://maps.app.goo.gl/7Fh5cjxyGCd8qj7Y8" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full gap-3 text-lg bg-white/5 backdrop-blur-md text-white border-white/15 hover:bg-white/15 hover:border-primary/50 hover:text-white shadow-lg">
              <MapPin size={22} />
              الاتجاهات
            </Button>
          </a>
        </div>


      </div>
    </section>
  );
}
