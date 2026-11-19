import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finlip.in"),
  title: {
    default: "Finlip Security | NISM Certified Stock Market Academy & Trading Masterclass",
    template: "%s | Finlip Security",
  },
  description:
    "India's premier institutional market training academy. Master price action, option Greeks, algorithmic execution, and risk management with NISM Series VIII certified faculty Rahul Rathore. Live trading room sessions across 8 regional Indian languages.",
  keywords: [
    "stock market academy India",
    "NISM certified trading course",
    "options trading and Greeks masterclass",
    "technical analysis training",
    "algorithmic trading systems Pine Script",
    "stock market classes Indore",
    "trading masterclass Mumbai",
    "share market classes Hindi",
    "Rahul Rathore trader",
    "price action volume spread analysis",
    "intraday options hedging",
    "zero tip trading academy",
  ],
  authors: [{ name: "Rahul Rathore", url: "https://www.finlipsecurity.com/about" }],
  creator: "Finlip Security Academy",
  publisher: "Finlip Security",
  applicationName: "Finlip Security Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.finlipsecurity.com",
    languages: {
      "en-IN": "https://www.finlipsecurity.com",
      "hi-IN": "https://www.finlipsecurity.com/finlip-security-academy",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.finlipsecurity.com",
    siteName: "Finlip Security Market Academy",
    title: "Finlip Security | NISM Certified Stock Market Academy & Trading Masterclass",
    description:
      "Transform your trading with institutional math, option Greeks, and live market hours analysis. Mentored by Rahul Rathore (NISM Series VIII Certified).",
    images: [
      {
        url: "https://www.finlipsecurity.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Finlip Security Market Academy - NISM Certified Stock Market Mentorship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finlip Security | NISM Certified Stock Market Academy",
    description:
      "Trade with rules, not emotions. Master technical analysis and option Greeks in live market hours with NISM certified faculty.",
    images: ["https://www.finlipsecurity.com/og-image.jpg"],
    creator: "@finlipsecurity",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Indore, Mumbai",
    "geo.position": "22.7533;75.8937",
    "ICBM": "22.7533, 75.8937",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.finlipsecurity.com/#organization",
        "name": "Finlip Security Market Academy",
        "url": "https://www.finlipsecurity.com",
        "logo": "https://www.finlipsecurity.com/logo.png",
        "description":
          "Finlip Security provides institutional-grade technical analysis, options trading masterclasses, and equity derivatives education by NISM certified market practitioners.",
        "telephone": "+91-731-485-2000",
        "email": "support@finlipsecurity.com",
        "sameAs": [
          "https://twitter.com/finlipsecurity",
          "https://linkedin.com/company/finlipsecurity",
          "https://youtube.com/@finlipsecurity",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "111 P.U. 4, Scheme No. 54, Vijay Nagar Square",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452010",
          "addressCountry": "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.finlipsecurity.com/#indore-campus",
        "name": "Finlip Security Head Campus - Indore",
        "image": "https://www.finlipsecurity.com/campus-indore.jpg",
        "telephone": "+91-731-485-2000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "111 P.U. 4, Scheme No. 54, Vijay Nagar",
          "addressLocality": "Indore",
          "addressRegion": "MP",
          "postalCode": "452010",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.7533,
          "longitude": 75.8937,
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:30",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.finlipsecurity.com/#mumbai-office",
        "name": "Finlip Security Corporate Center - Mumbai",
        "image": "https://www.finlipsecurity.com/office-mumbai.jpg",
        "telephone": "+91-22-6854-1100",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "156-158 J.B. Nagar, Andheri (East)",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "postalCode": "400099",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.1136,
          "longitude": 72.8697,
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.finlipsecurity.com/#rahul-rathore",
        "name": "Rahul Rathore",
        "jobTitle": "Lead Market Faculty & Founder",
        "worksFor": { "@id": "https://www.finlipsecurity.com/#organization" },
        "description":
          "NISM Certified Faculty (Series VIII: Equity Derivatives #2420365732). Registered Authorised Person with National Stock Exchange (NSE) & Bombay Stock Exchange (BSE) with 10+ years of institutional trading experience.",
        "knowsAbout": [
          "Technical Analysis",
          "Options Greeks",
          "Equity Derivatives",
          "Risk Management",
          "Algorithmic Trading",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
