import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finlip Security Academy | Free Live Demo Masterclass & Syllabus",
  description:
    "Book your Free Live Demo Session and receive the complete 42-page Market Structure Blueprint via WhatsApp. Mentored by Rahul Rathore (NISM Series VIII Certified).",
  alternates: {
    canonical: "https://finlip.in/finlip-security-academy",
  },
  openGraph: {
    title: "Finlip Security Academy | Free Live Demo Masterclass",
    description:
      "Join the live morning trading room and master option Greeks, price action geometry, and capital safety rules.",
    url: "https://finlip.in/finlip-security-academy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
