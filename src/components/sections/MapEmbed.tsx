"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { MAPS_EMBED_SRC } from "@/data/site";

/**
 * الخريطة التفاعلية الحقيقية من جوجل ثقيلة جدًا على الجوال (تحمّل JS + WebGL
 * خاص بها بغض النظر عن حجم صفحتنا). لذلك لا تُحمَّل إطلاقًا إلا بعد ضغط
 * المستخدم فعليًا — واجهة "بطاقة" خفيفة بديلة تُعرض أولاً، وزر "الاتجاهات"
 * الأساسي أعلى الصفحة يفتح خرائط جوجل مباشرة لمن لا يحتاج المعاينة المدمجة.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-3 bg-surface hover:bg-surfaceLight transition-colors text-textMutedSmall"
      >
        <MapPin size={32} className="text-primary" />
        <span className="font-semibold text-textPrimary">اضغط لعرض الخريطة التفاعلية</span>
        <span className="text-sm">موقعنا الحقيقي على خرائط Google</span>
      </button>
    );
  }

  return (
    <iframe
      src={MAPS_EMBED_SRC}
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: "400px" }}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="موقع فرن ولحم على الخريطة"
      className="w-full h-full"
    />
  );
}
