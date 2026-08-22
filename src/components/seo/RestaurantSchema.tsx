import { MAPS_LAT, MAPS_LNG, PHONE_TEL_HREF } from "@/data/site";

/**
 * Schema.org Restaurant — يتضمن فقط بيانات حقيقية مؤكدة، تحقّقنا منها مباشرة
 * من صفحة العمل التجاري الرسمية على خرائط جوجل. openingHours / url / image
 * مُسقَطة عمدًا (غير معروفة بثقة كافية) بدل اختلاقها، تطبيقًا لقاعدة
 * CLAUDE.md قسم 19. aggregateRating غير مُدرَج لعدم توفر عدد تقييمات مؤكَّد
 * (Schema.org/Google يتطلبان reviewCount أو ratingCount معه).
 */
export function RestaurantSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "فرن ولحم",
    telephone: PHONE_TEL_HREF.replace("tel:0", "+966"),
    servesCuisine: ["مشاوي", "مناقيش", "فطائر", "بيتزا", "مطبخ سعودي"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الأمير عبدالله بن سعود",
      addressLocality: "الرياض",
      addressRegion: "منطقة الرياض",
      postalCode: "51621",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAPS_LAT,
      longitude: MAPS_LNG,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
