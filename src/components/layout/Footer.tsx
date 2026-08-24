import Image from "next/image";
import {
  ADDRESS_TEXT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from "@/data/site";
import { CallLink } from "../ui/TrackedLinks";

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-optimized.webp"
                alt="شعار فرن ولحم"
                width={112}
                height={112}
                loading="lazy"
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-textMutedSmall max-w-sm text-sm leading-relaxed">
              جذور في التراث، مصنوعة بشغف. مطعم مشاوي وأفران تراثي بروح النار.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#reviews" className="text-textMutedSmall hover:text-primary transition-colors text-sm">آراء العملاء</a></li>
              <li><a href="#contact" className="text-textMutedSmall hover:text-primary transition-colors text-sm">موقعنا وتواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">التواصل</h4>
            <ul className="space-y-3 text-textMutedSmall text-sm">
              <li>{ADDRESS_TEXT}</li>
              <li>
                <CallLink href={PHONE_TEL_HREF} className="hover:text-primary transition-colors" dir="ltr">
                  {PHONE_DISPLAY}
                </CallLink>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" dir="ltr" className="hover:text-primary transition-colors">
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-textMutedSmall text-xs">
          <p>© {new Date().getFullYear()} فرن ولحم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
