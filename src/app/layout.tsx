import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

// TODO: استبدال بالخط الرسمي عند توفره من العميل
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic", "latin"],
  weight: ['400', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "فرن ولحم | مشاوي، مناقيش، فطائر وبيتزا طازجة – الرياض",
  description: "لحم نعيمي وفطائر طازجة. جذور في التراث، مصنوعة بشغف.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}>
      <body className="min-h-screen font-sans bg-background text-textPrimary">
        {children}
      </body>
    </html>
  );
}
