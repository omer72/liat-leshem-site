import type { Metadata } from "next";
import { Heebo, Open_Sans, Playfair_Display, Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://omer72.github.io/liat-leshem-site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ליאת לשם | קריינות ומול מצלמה — Liat Leshem Voice Over & On Camera",
    template: "%s — ליאת לשם",
  },
  description:
    "ליאת לשם — קריינית ושחקנית מול מצלמה. קריינות לטלוויזיה, רדיו, סרטי תדמית, דיבוב, הגשה ומשחק. Liat Leshem — Voice Over Talent & On-Camera Presenter.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "ליאת לשם — Liat Leshem",
    locale: "he_IL",
    images: [{ url: "/assets/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "ליאת לשם",
  alternateName: "Liat Leshem",
  url: siteUrl,
  description:
    "קריינית ושחקנית מול מצלמה — Voice Over Talent & On-Camera Presenter",
  jobTitle: "Voice Over Talent & On-Camera Presenter",
  knowsLanguage: ["he", "en"],
  sameAs: [
    "https://www.youtube.com/user/liatleshem",
    "https://soundcloud.com/liatleshem",
    "https://www.facebook.com/LeshemVoiceOver/",
    "https://www.instagram.com/leshem.liat/",
    "https://www.linkedin.com/in/liatlesh/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${openSans.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppRouterCacheProvider options={{ key: "muirtl" }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
