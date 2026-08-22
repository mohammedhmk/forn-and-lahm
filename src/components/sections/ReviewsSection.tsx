import { SectionHeader } from "../ui/SectionHeader";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { GOOGLE_RATING } from "@/data/site";

const REVIEWS = [
  {
    id: 1,
    name: "Abdullah tami",
    initial: "A",
    color: "from-[#FF5722] to-[#FF8A65]",
    rating: 5,
    text: "الصدق مشاءالله لذيذ جربت كباب حاشي ساندويتش صغير 10/10 كباب دجاج صغير 10/10 شيش طاووق كانت 6/10 الخدمه كويسه والي يشتغلون عسل وارجع له مره وعشر الله يوفقهم",
    food: "5/5",
    service: "5/5",
    atmosphere: "5/5",
  },
  {
    id: 2,
    name: "azeem akhtar",
    initial: "a",
    color: "from-[#4CAF50] to-[#81C784]",
    rating: 5,
    text: "المشاوي عندهم لذيذه وجوده اللحم واضحه نعيمي والفطائر رائعه والشباب بشوشين ومحترمين",
    food: "5/5",
    service: "5/5",
    atmosphere: "5/5",
  },
  {
    id: 3,
    name: "MR ZH8",
    initial: "M",
    color: "from-[#2196F3] to-[#64B5F6]",
    rating: 5,
    text: "الفطائر لذيذة جربت عكاوي\nصحن المشاوي مشكل ولا غلطة احس نوعية اللحم جودتها ممتازة\nالساندويش جربت شيش طاووق لذيذ مرة والخبز لذيذ معطي إضافة\nالحمص لذيذ والبيتزا مارغريتا أعجبتني\nالجودة والسعر والخدمة ممتازة اتمنى لهم التوفيق والاستمرار على الجودة الله يبارك لهم",
    food: "5/5",
    service: "5/5",
    atmosphere: "5/5",
  }
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden" id="reviews">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="ماذا يقول عملاؤنا"
          subtitle="آراء حقيقية من زبائننا، تعكس شغفنا بتقديم أفضل جودة وطعم"
        />

        <div className="flex items-center justify-center gap-2 -mt-6 mb-10">
          <div className="flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="font-bold text-textPrimary">{GOOGLE_RATING}</span>
            <span className="text-textMutedSmall text-sm">تقييم Google الموثّق</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="relative bg-background rounded-3xl p-7 md:p-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(232,90,23,0.08)] transition-all duration-500 flex flex-col h-full group overflow-hidden"
            >
              {/* Gradient top border accent */}
              <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", review.color)}></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 left-6 opacity-[0.04]">
                <Quote size={80} className="text-white" />
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className={cn("w-13 h-13 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl uppercase shadow-lg", review.color)} style={{width: '52px', height: '52px'}}>
                  {review.initial}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-[16px] leading-tight mb-0.5 group-hover:text-primary transition-colors">{review.name}</h3>
                  {/* Stars inline */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-6 flex-1 relative z-10">
                <p className="text-[14px] leading-[1.8] text-white/60 whitespace-pre-line">
                  {review.text}
                </p>
              </div>

              {/* Metrics Footer - Split into 3 pill badges */}
              <div className="mt-auto pt-5 border-t border-white/5 relative z-10">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col items-center bg-white/[0.03] rounded-xl px-4 py-2.5 flex-1">
                    <span className="text-[10px] text-textMutedSmall font-medium mb-0.5">الطعام</span>
                    <span className="font-bold text-primary text-sm">{review.food}</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/[0.03] rounded-xl px-4 py-2.5 flex-1">
                    <span className="text-[10px] text-textMutedSmall font-medium mb-0.5">الخدمة</span>
                    <span className="font-bold text-primary text-sm">{review.service}</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/[0.03] rounded-xl px-4 py-2.5 flex-1">
                    <span className="text-[10px] text-textMutedSmall font-medium mb-0.5">الأجواء</span>
                    <span className="font-bold text-primary text-sm">{review.atmosphere}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
