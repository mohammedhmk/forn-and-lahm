"use client";

import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { CountdownDigits } from "../ui/CountdownDigits";
import { CallLink, DirectionsLink } from "../ui/TrackedLinks";
import { usePromoCountdown } from "@/hooks/usePromoCountdown";
import {
  GOOGLE_RATING,
  MAPS_DIRECTIONS_URL,
  NEIGHBORHOOD_TEXT,
  PHONE_TEL_HREF,
  PROMO_END_ISO,
  PROMO_START_ISO,
} from "@/data/site";

export function Hero() {
  const { phase, remainingMs } = usePromoCountdown(PROMO_START_ISO, PROMO_END_ISO);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[85vh]">
      {/* صورة الخلفية مع Overlay احترافية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg_new.jpg"
          alt="فرن ولحم - مخبوزات طازجة من الفرن"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* تدرج لوني داكن لدمج الصورة مع خلفية الموقع وجعل النصوص مقروءة */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mt-10">
        <p className="text-sm md:text-base font-semibold text-gold tracking-wide mb-5 animate-fade-in drop-shadow-lg">
          فرن ولحم · {NEIGHBORHOOD_TEXT}
        </p>

        {phase === "active" && (
          <div className="mb-8 animate-fade-in-up bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-2xl">
            <p className="text-sm text-gray-300 mb-3 font-medium">ينتهي العرض خلال</p>
            <CountdownDigits remainingMs={remainingMs} endISO={PROMO_END_ISO} />
          </div>
        )}

        <h1
          className="text-[36px] md:text-[54px] font-extrabold leading-[1.15] mb-4 max-w-2xl text-white drop-shadow-xl animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          من الفرن حارة.. وتفتح النفس
        </h1>

        <p
          className="text-[16px] md:text-xl text-gray-200 max-w-xl mb-10 leading-[1.7] font-medium animate-fade-in-up drop-shadow-md"
          style={{ animationDelay: "0.2s" }}
        >
          شغل على أصوله، نخبز لك فطاير وبيتزا بنكهة النعيمي الأصيلة.. طازجة ويوم بيومه.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <DirectionsLink
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="w-full gap-3 text-lg shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground border-none">
              <MapPin size={22} />
              الاتجاهات
            </Button>
          </DirectionsLink>

          <CallLink href={PHONE_TEL_HREF} className="w-full sm:w-auto">
            <Button size="lg" className="w-full gap-3 text-lg bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all">
              <Phone size={22} />
              اتصل الآن
            </Button>
          </CallLink>
        </div>

        <div
          className="flex items-center gap-1.5 mt-6 text-textMutedSmall text-sm animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Star size={16} className="fill-amber-400 text-amber-400" />
          <span className="font-bold text-textPrimary">{GOOGLE_RATING}</span>
          <span>تقييم عملائنا على خرائط Google</span>
        </div>
      </div>
    </section>
  );
}
