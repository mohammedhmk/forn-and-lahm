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
    window.snaptr("track", "CUSTOM_EVENT", { event_name: eventName, ...params });
  } catch {
    // تجاهل أي خطأ من السكربت الخارجي — التتبع لا يجب أن يكسر الموقع أبدًا
  }
}

// TODO: راجع تسمية هذين الحدثين مع إعدادات Custom Events الفعلية في
// Snapchat Ads Manager بعد ربط معرّف البكسل الحقيقي، وعدّلها إن لزم.
export function trackCallClick(): void {
  trackSnapEvent("call_click");
}

export function trackDirectionsClick(): void {
  trackSnapEvent("directions_click");
}
