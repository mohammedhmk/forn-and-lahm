import { SectionHeader } from "../ui/SectionHeader";

const BRAND_IMAGE = "/images/brand_story.jpg";

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden" id="story">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] gradient-border">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
              <img 
                src={BRAND_IMAGE}
                alt="فرن حطب مشتعل بالنار" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-start">
            <SectionHeader 
              title="جذور في التراث، مصنوعة بشغف" 
              className="mb-6 md:mb-6"
              centered={false}
            />
            
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                في &quot;فرن ولحم&quot;، نؤمن أن الطعم الأصيل يبدأ من النار الحقيقية والمكونات الطازجة. لم نأتِ بجديد، بل أعدنا تقديم التراث بأصالة ودفء.
              </p>
              <p>
                نختار اللحم النعيمي الطازج بعناية فائقة، ونعجن فطائرنا يومياً لنقدم لك مزيجاً لا يُنسى من النكهات. كل طبق يخرج من أفراننا يحمل في طياته شغف حرفي لا يرضى إلا بأعلى درجات الجودة.
              </p>
              <p className="font-bold text-gradient text-xl pt-2">
                لحم نعيمي وفطائر طازجة... نكهة لا تُنسى.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
