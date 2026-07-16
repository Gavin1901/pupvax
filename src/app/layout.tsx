import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 埋点配置
const GA_ID = "G-T8RLFLX5HJ";
const GSC_TOKEN = "";
const ADS_CLIENT = "ca-pub-3256422033020643";

export const metadata: Metadata = {
  metadataBase: new URL("https://pupvax.com"),
  ...(GSC_TOKEN ? { verification: { google: GSC_TOKEN } } : {}),
  title: {
    default: "PupVax - Dog Vaccine Schedule Tracker",
    template: "%s | 2026 Dog Vaccine Tracker",
  },
  description:
    "Free 2026 dog vaccine tracker. Track your dog's shots, deworming & vet visits. Personalized schedules by breed, age & size. Never miss a booster.",
  keywords: [
    "2026 dog vaccine schedule",
    "puppy vaccine schedule 2026",
    "dog deworming schedule",
    "rabies vaccine dog",
    "dhpp vaccine",
    "heartworm prevention",
    "puppy shot calculator",
    "senior dog vaccines",
    "dog titer test",
  ],
  openGraph: {
    title: "PupVax - Dog Vaccine Schedule Tracker",
    description:
      "Free 2026 dog vaccine tracker. Track your dog's shots, deworming & vet visits. Personalized schedules by breed, age & size. Never miss a booster.",
    url: "https://pupvax.com",
    siteName: "PupVax",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  alternates: { canonical: "https://pupvax.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {ADS_CLIENT ? <meta name="google-adsense-account" content={ADS_CLIENT} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PupVax",
              url: "https://pupvax.com"
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-amber-50 font-sans text-stone-900">
        {children}
        <Footer siteName="PupVax" domain="pupvax.com" />
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
        {ADS_CLIENT ? (
          <Script
            id="adsbygoogle"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}


