import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://finlip.in"),
  title: {
    default: "Finlip Security | NISM Certified Stock Market Academy & Live Trading Masterclass",
    template: "%s | Finlip Security",
  },
  description:
    "India's premier institutional stock market academy. Master price action, option Greeks, algorithmic execution, and mathematical risk management with NISM Series VIII certified faculty Rahul Rathore. Live trading room sessions across 8 regional Indian languages.",
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
    "SEBI compliance share market",
    "institutional order flow India",
    "finlip",
    "finlip.in",
    "Finlip Security Academy",
  ],
  authors: [{ name: "Rahul Rathore", url: "https://finlip.in/about" }],
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
    canonical: "https://finlip.in",
    languages: {
      "en-IN": "https://finlip.in",
      "hi-IN": "https://finlip.in/finlip-security-academy",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://finlip.in",
    siteName: "Finlip Security Market Academy",
    title: "Finlip Security | NISM Certified Stock Market Academy & Trading Masterclass",
    description:
      "Transform your trading with institutional math, option Greeks, and live market hours analysis. Mentored by Rahul Rathore (NISM Series VIII Certified).",
    images: [
      {
        url: "https://finlip.in/og-image.jpg",
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
    images: ["https://finlip.in/og-image.jpg"],
    creator: "@finlipsecurity",
  },
  other: {
    "geo.region": "IN-MP, IN-MH",
    "geo.placename": "Indore, Mumbai, India",
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
      // 1. WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://finlip.in/#website",
        "url": "https://finlip.in",
        "name": "Finlip Security",
        "alternateName": ["Finlip Security Academy", "Finlip Market Masterclass", "finlip.in"],
        "description": "Premier institutional stock market trading education and live market hours mentorship in India.",
        "inLanguage": ["en-IN", "hi-IN"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://finlip.in/courses?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      // 2. Main Educational Organization & Financial Service Schema
      {
        "@type": ["EducationalOrganization", "FinancialService"],
        "@id": "https://finlip.in/#organization",
        "name": "Finlip Security Market Academy",
        "alternateName": "Finlip Security",
        "url": "https://finlip.in",
        "logo": "https://finlip.in/logo.png",
        "image": "https://finlip.in/og-image.jpg",
        "description":
          "Finlip Security provides institutional-grade technical analysis, options trading masterclasses, and equity derivatives education mentored by NISM Series VIII certified market practitioners.",
        "telephone": "+91-731-485-2000",
        "email": "finlipsecurity@gmail.com",
        "foundingLocation": "Indore, Madhya Pradesh, India",
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "City", "name": "Indore" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "State", "name": "Madhya Pradesh" },
          { "@type": "State", "name": "Maharashtra" },
        ],
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

      // 3. Local Business (GEO) - Indore Head Campus
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": "https://finlip.in/#indore-campus",
        "name": "Finlip Security Academy - Indore Head Campus",
        "url": "https://finlip.in",
        "image": "https://finlip.in/campus-indore.jpg",
        "telephone": "+91-731-485-2000",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "111 P.U. 4, Scheme No. 54, Vijay Nagar Square",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
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

      // 4. Local Business (GEO) - Mumbai Corporate Center
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": "https://finlip.in/#mumbai-office",
        "name": "Finlip Security - Mumbai Corporate Center",
        "url": "https://finlip.in",
        "image": "https://finlip.in/office-mumbai.jpg",
        "telephone": "+91-22-6854-1100",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Unit 1102, Solitaire Corporate Park 2, Chakala, Andheri (East)",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400093",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.1136,
          "longitude": 72.8697,
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:30",
        },
      },

      // 5. Person Schema (Authority & E-E-A-T)
      {
        "@type": "Person",
        "@id": "https://finlip.in/#rahul-rathore",
        "name": "Rahul Rathore",
        "jobTitle": "Lead Market Faculty & Founder",
        "worksFor": { "@id": "https://finlip.in/#organization" },
        "description":
          "NISM Certified Faculty (Series VIII: Equity Derivatives Cert #2420365732). Registered Authorised Person with National Stock Exchange (NSE) & Bombay Stock Exchange (BSE) with 10+ years of institutional trading experience.",
        "knowsAbout": [
          "Technical Analysis & Price Action Geometry",
          "Options Greeks (Delta, Theta, Vega, Gamma)",
          "Volume Spread Analysis (VSA)",
          "Equity Derivatives Hedging",
          "Algorithmic Trading & Pine Script",
          "Mathematical Position Sizing & Risk Management",
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "NISM Series VIII: Equity Derivatives Certification",
            "credentialCategory": "Regulatory Financial Certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "National Institute of Securities Markets (NISM)",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "NSE & BSE Registered Authorised Person",
            "credentialCategory": "Exchange Market Authorisation",
          },
        ],
      },

      // 6. Core Courses Schema (AEO & Educational Program)
      {
        "@type": "Course",
        "@id": "https://finlip.in/courses#options-mastery",
        "name": "Options Trading & Greeks Mastery",
        "description":
          "Institutional options education covering Delta, Theta, Vega, Gamma, open interest dynamics, and delta-neutral options hedging strategies during live market hours.",
        "provider": { "@id": "https://finlip.in/#organization" },
        "instructor": { "@id": "https://finlip.in/#rahul-rathore" },
        "educationalCredentialAwarded": "Finlip Certified Derivatives Specialist (ISO 9001:2015 Accredited)",
        "inLanguage": ["en", "hi"],
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "onsite"],
          "location": "Live Market Hours Morning Execution Room (9:15 AM - 11:30 AM IST)",
        },
      },
      {
        "@type": "Course",
        "@id": "https://finlip.in/courses#technical-analysis",
        "name": "Technical Analysis Pro Masterclass",
        "description":
          "Advanced chart reading, multi-timeframe price action, smart money accumulation/distribution traps, and institutional risk-to-reward execution.",
        "provider": { "@id": "https://finlip.in/#organization" },
        "instructor": { "@id": "https://finlip.in/#rahul-rathore" },
        "educationalCredentialAwarded": "Finlip Certified Market Technician",
        "inLanguage": ["en", "hi"],
      },

      // 7. AEO FAQPage Schema (Direct Answer Engine Optimization for Gemini, ChatGPT, Perplexity, Copilot)
      {
        "@type": "FAQPage",
        "@id": "https://finlip.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Finlip Security Academy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Finlip Security Academy is an institutional market training institute in India offering live morning market execution room mentorship in Technical Analysis, Options Trading & Greeks, and Algorithmic Systems. It is mentored by NISM Series VIII certified faculty Rahul Rathore.",
            },
          },
          {
            "@type": "Question",
            "name": "Who is Rahul Rathore and what are his qualifications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rahul Rathore is the Lead Mentor and Founder of Finlip Security. He is certified under NISM Series VIII (Equity Derivatives, Certificate No. 2420365732) and is an Authorised Person registered with the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) with over 10 years of professional trading experience.",
            },
          },
          {
            "@type": "Question",
            "name": "Does Finlip Security offer guaranteed returns or stock tips?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Finlip Security does NOT provide stock tips, telegram signals, or guaranteed return schemes. Stock and derivatives trading involve market risks. Finlip is an educational academy focused strictly on independent chart analysis, option hedging, and 1:2+ risk-to-reward mathematical execution.",
            },
          },
          {
            "@type": "Question",
            "name": "How does the Finlip Live Market Execution Room work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike weekend lecture seminars, Finlip students join the live morning execution room (9:15 AM - 11:30 AM IST) during active market trading hours to observe real-time chart setups, option chain dynamics, volatility spikes, and order execution.",
            },
          },
          {
            "@type": "Question",
            "name": "Where are Finlip Security physical campuses located in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Finlip Security operates its central training campus at 111 P.U. 4, Scheme No. 54, Vijay Nagar Square in Indore, Madhya Pradesh 452010, and its corporate center at Unit 1102, Solitaire Corporate Park 2, Chakala, Andheri (East) in Mumbai, Maharashtra 400093.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I register for a free demo session at Finlip Security?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reserve a free demo seat on finlip.in by entering your name and WhatsApp number. Students receive an instant Session Pass and the complimentary 42-page Market Structure Blueprint PDF via WhatsApp.",
            },
          },
        ],
      },

      // 8. Speakable Specification (Voice Search & AI Audio Assistant Optimization)
      {
        "@type": "WebPage",
        "@id": "https://finlip.in/#webpage",
        "url": "https://finlip.in",
        "name": "Finlip Security - Stock Market Academy",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#hero-description", "#about-summary", ".speakable-content"],
        },
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
