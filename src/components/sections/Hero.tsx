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
    <section className="relative bg-background pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      {/* توهج خلفي خفيف (تم استبدال الـ blur بـ radial-gradient لتحسين الأداء على الجوال) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <p className="text-sm md:text-base font-semibold text-gold tracking-wide mb-5 animate-fade-in">
          فرن ولحم · {NEIGHBORHOOD_TEXT}
        </p>

        {/* بانر العرض — نفس التصميم المستخدم في الحملة الإعلانية، يُعرض كاملاً بدون قص */}
        <div className="w-full max-w-3xl mb-7 animate-fade-in">
          <Image
            src="/images/hero_promo.webp"
            alt="عرض خصم 25% على الفطاير والبيتزا لمدة 3 أيام فقط - فرن ولحم"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

        {phase === "active" && (
          <div className="mb-8 animate-fade-in-up">
            <p className="text-sm text-textMutedSmall mb-3">ينتهي العرض خلال</p>
            <CountdownDigits remainingMs={remainingMs} endISO={PROMO_END_ISO} />
          </div>
        )}

        <h1
          className="text-[30px] md:text-[46px] font-extrabold leading-[1.15] mb-4 max-w-2xl text-textPrimary animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          خصم 25% على الفطاير والبيتزا
        </h1>

        <p
          className="text-[15px] md:text-lg text-textMutedSmall max-w-xl mb-10 leading-[1.7] font-medium animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          جذور في التراث، مصنوعة بشغف — نار حقيقية ونكهة نعيمي أصيلة، طازجة من الفرن كل يوم.
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
            <Button size="lg" className="w-full gap-3 text-lg animate-glow">
              <MapPin size={22} />
              الاتجاهات
            </Button>
          </DirectionsLink>

          <CallLink href={PHONE_TEL_HREF} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full gap-3 text-lg">
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
