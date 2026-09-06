import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Marci Metzger | The Ridge Realty Group - Pahrump Real Estate",
  description: "Explore premier desert golf estates, custom ranches, and scenic community enclaves in Pahrump, Nevada with Marci Metzger at The Ridge Realty Group.",
  keywords: ["Pahrump real estate", "Marci Metzger", "The Ridge Realty Group", "Nevada homes for sale", "desert golf estates", "Pahrump luxury real estate"],
  authors: [{ name: "Marci Metzger" }],
  openGraph: {
    title: "Marci Metzger | The Ridge Realty Group - Pahrump Real Estate",
    description: "Explore premier desert golf estates, custom ranches, and scenic community enclaves in Pahrump, Nevada.",
    url: "https://real-estate-iota-drab-51.vercel.app/", 
    siteName: "Marci Metzger Real Estate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marci Metzger | The Ridge Realty Group - Pahrump Real Estate",
    description: "Explore premier desert golf estates and custom ranches in Pahrump, Nevada.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}