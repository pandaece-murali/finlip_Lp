import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Stock Market Masterclass Tracks & Curriculums",
  description:
    "Explore comprehensive institutional trading courses: Technical Analysis Pro, Options Trading & Greeks, Quant Algo Systems, and Stock Market Starter.",
  alternates: {
    canonical: "https://www.finlipsecurity.com/courses",
  },
  openGraph: {
    title: "All Stock Market Masterclass Tracks | Finlip Security",
    description: "Institutional stock market education with live morning trading room access.",
    url: "https://www.finlipsecurity.com/courses",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
