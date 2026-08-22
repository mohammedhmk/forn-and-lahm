// أدوات تتبع Snap Pixel — تُستدعى بأمان دائمًا (no-op) إن لم يُحمَّل
// السكربت بعد أو لم يُضبط NEXT_PUBLIC_SNAP_PIXEL_ID. لا تُوقف أبدًا تنقّل
// المستخدم (لا preventDefault، لا انتظار).

declare global {
  interface Window {
    // نوع ديناميكي من سكربت خارجي (Snap)، لا حزمة تعريفات رسمية له
    snaptr?: (...args: any[]) => void;
  }
}

function trackSnapEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (typeof window.snaptr !== "function") return;
  try {
    window.snaptr("track", eventName, params);
  } catch {
    // تجاهل أي خطأ من السكربت الخارجي — التتبع لا يجب أن يكسر الموقع أبدًا
  }
}

// استخدام الأحداث المخصصة الرسمية للسناب شات مع تمرير المتغيرات القياسية
export function trackCallClick(): void {
  trackSnapEvent("CUSTOM_EVENT_1", {
    description: "call_click",
    item_category: "contact",
  });
}

export function trackDirectionsClick(): void {
  trackSnapEvent("CUSTOM_EVENT_2", {
    description: "directions_click",
    item_category: "directions",
  });
}
