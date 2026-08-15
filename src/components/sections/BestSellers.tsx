import { MENU_DATA } from "@/data/menu";
import { SectionHeader } from "../ui/SectionHeader";
import { formatPrice } from "@/lib/utils";
import { Badge } from "../ui/Badge";

export function BestSellers() {
  const featuredItems = MENU_DATA.flatMap((cat) => cat.items.filter((item) => item.featured));

  if (featuredItems.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-surface" id="best-sellers">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="من مفضلاتنا" 
          subtitle="أطباق مميزة ننصحك بتجربتها، محضرة بعناية من أفضل المكونات الطازجة."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.slice(0, 4).map((item) => (
            <div key={item.id} className="bg-background rounded-2xl overflow-hidden border border-surface/50 group hover:border-primary/30 transition-colors">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center">
                {/* 
                  // TEMP: صورة بديلة تصميمية، تحتاج استبدال بتصوير احترافي
                */}
                <div className="absolute inset-0 bg-gradient-copper opacity-20"></div>
                <span className="font-bold text-2xl text-textMuted opacity-50 select-none z-10 group-hover:scale-105 transition-transform duration-300">
                  {item.name}
                </span>
                {item.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge variant="flame">مميز</Badge>
                  </div>
                )}
              </div>
              
              <div className="p-5 flex flex-col h-full">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="font-bold text-lg text-primary">
                    {formatPrice(item.sizes[0].price)}
                  </span>
                  {item.sizes.length > 1 && (
                    <span className="text-xs text-textMuted">تبدأ من</span>
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
