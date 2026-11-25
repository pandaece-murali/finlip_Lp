import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Founder & Faculty Rahul Rathore",
  description:
    "Learn about Finlip Security's mission, campuses in Indore and Mumbai, and lead mentor Rahul Rathore (NISM Series VIII Certified, NSE & BSE AP).",
  alternates: {
    canonical: "https://finlip.in/about",
  },
  openGraph: {
    title: "About Rahul Rathore & Finlip Security",
    description: "Empowering Indian traders with mathematical risk management and certified mentorship.",
    url: "https://finlip.in/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
