type Props = {
  remainingMs: number;
  endISO: string;
};

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

const END_DATE_LABEL = new Intl.DateTimeFormat("ar-SA", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Riyadh",
});

/**
 * عرض تقديمي بحت (بدون أي منطق وقت) — يستقبل remainingMs جاهزًا من
 * usePromoCountdown. أرقام لاتينية (قرار CLAUDE.md قسم 5)، بدون أنيميشن
 * قلب/انزلاق للأرقام تجنبًا لتعقيد prefers-reduced-motion.
 */
export function CountdownDigits({ remainingMs, endISO }: Props) {
  const days = Math.floor(remainingMs / MS_PER_DAY);
  const hours = Math.floor((remainingMs % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((remainingMs % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((remainingMs % MS_PER_MINUTE) / MS_PER_SECOND);

  const endLabel = END_DATE_LABEL.format(new Date(endISO));

  const units = [
    { value: days, label: "يوم" },
    { value: hours, label: "ساعة" },
    { value: minutes, label: "دقيقة" },
    { value: seconds, label: "ثانية" },
  ];

  return (
    <div
      role="timer"
      aria-label={`ينتهي العرض ${endLabel}`}
      className="flex items-center justify-center gap-2 sm:gap-3"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div
            aria-hidden="true"
            className="flex flex-col items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 min-w-[56px] sm:min-w-[64px]"
          >
            <span className="text-xl sm:text-2xl font-extrabold text-textPrimary tabular-nums leading-none">
              {pad2(unit.value)}
            </span>
            <span className="text-[11px] sm:text-xs text-textMutedSmall mt-1">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span aria-hidden="true" className="text-primary font-bold text-lg sm:text-xl -mt-4">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
