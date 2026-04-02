import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://congruent-site.netlify.app",
  ),
  title: {
    default: "Congruent — Clarity drives congruent growth",
    template: "%s — Congruent",
  },
  description:
    "Congruent helps ambitious organisations align strategy with execution — so every decision, team, and system moves in the same direction.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Congruent",
    images: [{ url: "/assets/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Congruent",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://congruent-site.netlify.app",
  description:
    "Congruent helps ambitious organisations align strategy with execution — so every decision, team, and system moves in the same direction.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Principal Place",
    addressLocality: "London",
    postalCode: "EC2A 2BA",
    addressCountry: "GB",
  },
  telephone: "+442079460958",
  email: "hello@congruent.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
