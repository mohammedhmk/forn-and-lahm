"use client";

import { useEffect, useMemo, useState } from "react";
import { computePromoPhase, type PromoPhase } from "@/lib/promo";

type CountdownState = {
  phase: PromoPhase | null;
  remainingMs: number;
};

/**
 * يبدأ بحالة null عمدًا: الخادم لا يعرض شيئًا، وأول رسم على العميل (قبل
 * تشغيل useEffect) يطابقه تمامًا — هذا يمنع hydration mismatch. الحالة
 * الحقيقية تُحسب فقط داخل useEffect (على العميل حصرًا) ثم تتحدث كل ثانية.
 */
export function usePromoCountdown(
  startISO: string,
  endISO: string
): CountdownState {
  const startMs = useMemo(() => new Date(startISO).getTime(), [startISO]);
  const endMs = useMemo(() => new Date(endISO).getTime(), [endISO]);

  const [state, setState] = useState<CountdownState>({
    phase: null,
    remainingMs: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setState({
        phase: computePromoPhase(now, startMs, endMs),
        remainingMs: Math.max(endMs - now, 0),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [startMs, endMs]);

  return state;
}
