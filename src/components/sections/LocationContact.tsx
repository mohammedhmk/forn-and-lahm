import { MapPin, Phone, Clock, Instagram, Navigation, MessageCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export function LocationContact() {
  return (
    <section className="py-16 md:py-24 bg-surface relative" id="contact">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="تواصل معنا" 
          subtitle="نسعد بخدمتكم وتلقي طلباتكم واستفساراتكم يومياً"
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
                  <h4 className="font-semibold text-textMuted text-sm mb-1">رقم الطلب</h4>
                  <a href="tel:0556109892" className="text-xl font-bold text-white hover:text-primary transition-colors" dir="ltr">
                    0556109892
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-textMuted text-sm mb-1">الموقع</h4>
                  <p className="text-lg font-bold text-white">
                    حي الصفاحة – الرياض
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-textMuted text-sm mb-1">حسابنا على إنستجرام</h4>
                  <a href="https://instagram.com/fornlahem" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-primary transition-colors">
                    @fornlahem
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
              <a href="tel:0556109892" className="block">
                <Button className="w-full gap-2" size="lg">
                  <Phone size={20} />
                  اتصل الآن للطلب
                </Button>
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/966556109892" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full gap-2 bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-white">
                    <MessageCircle size={18} />
                    واتساب
                  </Button>
                </a>
                <a href="https://maps.app.goo.gl/7Fh5cjxyGCd8qj7Y8" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <Navigation size={18} />
                    الاتجاهات
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="glass-light rounded-3xl overflow-hidden gradient-border min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sar!2ssa!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع فرن ولحم على الخريطة"
              className="w-full h-full"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
