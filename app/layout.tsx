import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finlip Security | NISM Certified Stock Market Academy & Trading Masterclass",
  description:
    "Finlip Security provides institutional-grade technical analysis, options trading masterclasses, and equity derivatives education by NISM certified market practitioners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

