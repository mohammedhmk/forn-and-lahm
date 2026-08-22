"use client";

import Script from "next/script";

// TODO: أضف معرّف البكسل الحقيقي من Snapchat Ads Manager في NEXT_PUBLIC_SNAP_PIXEL_ID
// (راجع .env.example). بدون هذا المتغيّر لا يُحمَّل أي سكربت إطلاقًا.
const PIXEL_ID = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID || "47df8139-a89b-4b36-a004-3efd6d22db54";

export function SnapPixel() {
  if (!PIXEL_ID) return null;

  return (
    <Script id="snap-pixel" strategy="afterInteractive">
      {`
        (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){
        a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
        a.queue=[];var s='script';var r=t.createElement(s);r.async=!0;
        r.src=n;var u=t.getElementsByTagName(s)[0];
        u.parentNode.insertBefore(r,u);})(window,document,
        'https://sc-static.net/scevent.min.js');

        snaptr('init', '${PIXEL_ID}');
        snaptr('track', 'PAGE_VIEW');
      `}
    </Script>
  );
}
