import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { RestaurantSchema } from "@/components/seo/RestaurantSchema";
import { SnapPixel } from "@/components/analytics/SnapPixel";

// TODO: استبدال بالخط الرسمي عند توفره من العميل
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic", "latin"],
  weight: ['400', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

// TODO: حدّث metadataBase إذا رُبط نطاق مخصص لاحقًا بدل نطاق vercel.app الحالي
export const metadata: Metadata = {
  metadataBase: new URL("https://forn-and-lahm.vercel.app"),
  title: "فرن ولحم | خصم 25% على الفطاير والبيتزا – حي الصفاحة، الرياض",
  description: "خصم 25% على الفطاير والبيتزا لمدة 3 أيام فقط. لحم نعيمي وفطائر طازجة، جذور في التراث، مصنوعة بشغف — فرن ولحم، حي الصفاحة، الرياض.",
  openGraph: {
    title: "فرن ولحم | خصم 25% على الفطاير والبيتزا",
    description: "لمدة 3 أيام فقط — فرن ولحم، حي الصفاحة، الرياض.",
    images: ["/images/hero_promo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}>
      <body className="min-h-screen font-sans bg-background text-textPrimary">
        <RestaurantSchema />
        {children}
        <SnapPixel />
      </body>
    </html>
  );
}
