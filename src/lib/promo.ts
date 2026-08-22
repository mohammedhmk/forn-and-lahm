export type PromoPhase = "before" | "active" | "ended";

/**
 * دالة نقية بلا تبعية على React أو الوقت الفعلي — قابلة للاختبار مباشرة
 * بتمرير timestamps ثابتة (انظر خطة التحقق: قبل/أثناء/بعد).
 */
export function computePromoPhase(
  nowMs: number,
  startMs: number,
  endMs: number
): PromoPhase {
  if (nowMs < startMs) return "before";
  if (nowMs >= endMs) return "ended";
  return "active";
}
