import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SupabaseUserProvider } from "@/components/SupabaseUserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Openscum - Community Scam Reporting Platform",
  description:
    "Protect yourself and others by checking, reporting, and learning about scams. Community-driven fraud prevention.",
  keywords: "scam, fraud, protection, reporting, safety, community",
  manifest: "/manifest.json",
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
