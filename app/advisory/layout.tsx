import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Strategy & Risk Management",
  description:
    "Institutional risk management frameworks, mathematical position sizing, and capital protection protocols for active derivatives participants.",
  alternates: {
    canonical: "https://finlip.in/advisory",
  },
  openGraph: {
    title: "Market Strategy & Risk Management | Finlip Security",
    description: "Institutional risk management frameworks and capital protection protocols.",
    url: "https://finlip.in/advisory",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
