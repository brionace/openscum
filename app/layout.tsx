import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SupabaseUserProvider } from "@/components/SupabaseUserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Openscum - Report Scams, Check Scam Reports & Stay Safe",
  description:
    "Report, Search, Comment on, Share and Track scams in your area and worldwide. Do not surfer in silence protect yourself and others use the free tools we will be providing you.",
  keywords:
    "report scams online, scam reporting website, check if something is a scam, trending scams near me, report fraud online, scammer database, scam alert platform, global scam reports, search scammer details, community scam warnings, scam, fraud, protection, reporting, safety, community",
  manifest: "/manifest.json",
  openGraph: {
    title: "OpenScum — Expose Scammers, Protect yourself and others",
    description:
      "Report scams, browse scam reports, and learn about trending scams in your area and worldwide. Together, we shine a light on fraud.",
    url: "https://openscum.com",
    siteName: "OpenScum",
    images: [
      {
        url: "/og-image.png", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "OpenScum — Expose Scammers, Protect yourself and others",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

// Next.js 14: move viewport and themeColor to the dedicated export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ef4444",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="openscum" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="frame-ancestors 'self' https://www.google.com/"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <SupabaseUserProvider>
          <div id="app">{children}</div>
        </SupabaseUserProvider>
      </body>
    </html>
  );
}
