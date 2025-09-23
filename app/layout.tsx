import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Zorica Odavic - Logoterapeut, NLP Kouc i Medijator",
  description: "RFG metoda za oporavak od tuge. Logoterapija, NLP koucing i medijacija. Poverenje i diskrecija na prvom mestu.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  keywords: ["logoterapija", "NLP koucing", "oporavak od tuge", "medijacija", "psihoterapija", "Viktor Frankl", "RFG metoda", "Zorica Odavic"],
  alternates: {
    canonical: "https://www.logoterapeut.rs/",
  },
  openGraph: {
    title: "Zorica Odavic - Logoterapeut, NLP Kouc i Medijator",
    description: "RFG metoda za oporavak od tuge. Logoterapija, NLP koucing i medijacija. Poverenje i diskrecija na prvom mestu.",
    url: "https://www.logoterapeut.rs/",
    siteName: "Zorica Odavic",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zorica Odavic - Logoterapeut, NLP Kouc i Medijator",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorica Odavic - Logoterapeut, NLP Kouc i Medijator",
    description: "RFG metoda za oporavak od tuge. Logoterapija, NLP koucing i medijacija.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
          className={`${geistSans.variable}  antialiased text-muted-foreground bg-muted  text-lg md:text-1xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
