import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Openscum - Community Scam Reporting Platform",
  description:
    "Protect yourself and others by checking, reporting, and learning about scams. Community-driven fraud prevention.",
  keywords: "scam, fraud, protection, reporting, safety, community",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ef4444",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="openscum" />
        <meta
          http-equiv="Content-Security-Policy"
          content="frame-ancestors 'self' https://www.google.com/"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
