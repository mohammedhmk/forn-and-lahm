"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackCallClick, trackDirectionsClick } from "@/lib/pixel";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

/** رابط اتصال يُطلق حدث تتبع Snap Pixel قبل تنفيذ التنقّل tel: */
export function CallLink({ onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackCallClick();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

/** رابط اتجاهات (خرائط جوجل) يُطلق حدث تتبع Snap Pixel قبل فتح الرابط */
export function DirectionsLink({ onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackDirectionsClick();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
