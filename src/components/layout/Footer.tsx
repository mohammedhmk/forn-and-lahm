export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="شعار فرن ولحم" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              جذور في التراث، مصنوعة بشغف. مطعم مشاوي وأفران تراثي بروح النار.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-white/40 hover:text-primary transition-colors text-sm">المنيو</a></li>
              <li><a href="#reviews" className="text-white/40 hover:text-primary transition-colors text-sm">آراء العملاء</a></li>
              <li><a href="#story" className="text-white/40 hover:text-primary transition-colors text-sm">قصتنا</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-primary transition-colors text-sm">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">التواصل</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li>حي الصفاحة – الرياض</li>
              <li>
                <a href="tel:0556109892" className="hover:text-primary transition-colors" dir="ltr">
                  0556109892
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fornlahem" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  @fornlahem
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-white/20 text-xs">
          <p>© {new Date().getFullYear()} فرن ولحم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
