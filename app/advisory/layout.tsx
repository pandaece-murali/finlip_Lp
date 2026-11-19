import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Strategy & Risk Management",
  description:
    "Institutional risk management frameworks, mathematical position sizing, and capital protection protocols for active derivatives participants.",
  alternates: {
    canonical: "https://www.finlipsecurity.com/advisory",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
