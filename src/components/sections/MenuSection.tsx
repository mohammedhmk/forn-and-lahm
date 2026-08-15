"use client";

import { useState } from "react";
import { MENU_DATA } from "@/data/menu";
import { SectionHeader } from "../ui/SectionHeader";
import { formatPrice, cn } from "@/lib/utils";

const CATEGORY_IMAGES: Record<string, string> = {
  "grills": "/images/cat_grills.jpg",
  "kibbeh": "/images/cat_kibbeh.jpg",
  "sandwiches": "/images/cat_sandwiches.jpg",
  "trays": "/images/cat_trays.jpg",
  "manakeesh": "/images/cat_manakeesh.jpg",
  "pastries": "/images/cat_pastries.jpg",
  "pizza": "/images/cat_pizza.jpg",
  "appetizers": "/images/cat_appetizers.jpg",
  "beverages": "/images/cat_beverages.jpg",
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeCat = MENU_DATA[activeCategory];

  return (
    <section className="py-16 md:py-24 bg-background relative" id="menu">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="قائمة الطعام" 
          subtitle="استعرض كل الأقسام واستمتع بالمذاق الأصيل"
        />

        {/* Category Tabs - Horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 -mx-4 px-4">
          {MENU_DATA.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap",
                index === activeCategory
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(232,90,23,0.3)]"
                  : "glass-light text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              {cat.nameAr}
            </button>
          ))}
        </div>

        {/* Category Header with Unique Image */}
        <div key={`header-${activeCat.id}`} className="mb-10 relative rounded-2xl overflow-hidden h-44 md:h-64 flex items-center justify-center group">
          <div className="absolute inset-0 bg-black/50 z-10 transition-colors group-hover:bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>
          
          <img 
            src={CATEGORY_IMAGES[activeCat.id] || CATEGORY_IMAGES["appetizers"]}
            alt={activeCat.nameAr}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          <div className="relative z-20 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              {activeCat.nameAr}
            </h2>
            <p className="text-white/60 text-sm mt-2">{activeCat.items.length} صنف</p>
          </div>
        </div>

        {/* Items Grid - Glassmorphism cards */}
        <div key={`grid-${activeCat.id}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCat.items.map((item, index) => (
            <div 
              key={item.id} 
              className="glass-light rounded-2xl p-5 flex gap-4 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(232,90,23,0.08)] transition-all duration-300 group gradient-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="font-bold text-lg leading-tight text-white group-hover:text-primary transition-colors">{item.name}</h3>
                  {item.calories && (
                    <span className="text-[11px] text-textMuted bg-white/5 px-2 py-0.5 rounded-md whitespace-nowrap font-medium border border-white/10">
                      {item.calories} سعرة
                    </span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  {item.sizes.length === 1 ? (
                    <div className="font-bold text-lg text-primary">
                      {formatPrice(item.sizes[0].price)}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3">
                      {item.sizes.map((size, idx) => (
                        <div key={idx} className="flex flex-col text-sm bg-white/5 px-3 py-1.5 rounded-lg">
                          <span className="text-textMuted text-[11px] font-medium mb-0.5">{size.label}</span>
                          <span className="font-bold text-white leading-none">{formatPrice(size.price)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
