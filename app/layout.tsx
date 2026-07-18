import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "MASAR | مسار",
    template: "%s | MASAR",
  },

  description:
    "منصة MASAR للنقل الذكي وخدمات نقل السيارات والأثاث داخل المملكة العربية السعودية.",

  keywords: [
    "MASAR",
    "مسار",
    "نقل سيارات",
    "سطحة",
    "نقل أثاث",
    "السعودية",
    "الأحساء",
    "الرياض",
  ],

  authors: [
    {
      name: "MASAR Team",
    },
  ],

  applicationName: "MASAR",

  creator: "MASAR",

  metadataBase: new URL("https://masar.sa"),

  openGraph: {
    title: "MASAR | مسار",
    description:
      "منصة النقل الذكي داخل المملكة العربية السعودية.",
    type: "website",
    locale: "ar_SA",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F8A5F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
    >
      <body
        className={`${cairo.className} antialiased`}
      >
        {/* Saudi Background */}
        <div className="saudi-pattern" />

        {/* Animated Glow */}
        <div className="background-glow" />

        {/* Noise Overlay */}
        <div className="noise-overlay" />

        {/* Main App */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}