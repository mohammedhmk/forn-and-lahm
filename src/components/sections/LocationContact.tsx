import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  ADDRESS_TEXT,
  MAPS_DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_HREF,
} from "@/data/site";
import { CallLink, DirectionsLink } from "../ui/TrackedLinks";
import { MapEmbed } from "./MapEmbed";

export function LocationContact() {
  return (
    <section className="py-16 md:py-24 bg-surface relative" id="contact">
      {/* Decorative (تم استبدال الـ blur بـ radial-gradient) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="تعال زُرنا اليوم"
          subtitle="موقعنا على الخريطة — قريب منك وجاهزين لاستقبالكم"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="glass-light rounded-3xl p-8 gradient-border flex flex-col">
            <h3 className="text-2xl font-bold mb-8 text-gradient">معلومات التواصل</h3>

            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-textMutedSmall text-sm mb-1">رقم الطلب</h4>
                  <a
                    href={PHONE_TEL_HREF}
                    className="text-xl font-bold text-textPrimary hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-textMutedSmall text-sm mb-1">الموقع</h4>
                  <p className="text-lg font-bold text-textPrimary">{ADDRESS_TEXT}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons — الاتصال والاتجاهات أساسيان، واتساب ثانوي */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <CallLink href={PHONE_TEL_HREF}>
                  <Button className="w-full gap-2" size="lg">
                    <Phone size={20} />
                    اتصل الآن
                  </Button>
                </CallLink>
                <DirectionsLink href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-2" size="lg">
                    <Navigation size={20} />
                    الاتجاهات
                  </Button>
                </DirectionsLink>
              </div>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block self-center"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-[#25D366] hover:bg-[#25D366]/10"
                >
                  <MessageCircle size={16} />
                  أو راسلنا عبر واتساب
                </Button>
              </a>
            </div>
          </div>

          {/* خريطة جوجل — لا تُحمَّل فعليًا إلا بعد ضغط المستخدم (أثقل عنصر على الجوال) */}
          <div className="glass-light rounded-3xl overflow-hidden gradient-border min-h-[400px]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
