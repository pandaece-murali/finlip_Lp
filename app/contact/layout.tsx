import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Admissions Desk & Student Support",
  description:
    "Connect with Finlip Security support desks in Indore and Mumbai. Telephone: +91 731 485 2000. Email: finlipsecurity@gmail.com.",
  alternates: {
    canonical: "https://finlip.in/contact",
  },
  openGraph: {
    title: "Contact Finlip Security Admissions",
    description: "Connect with our admissions desk across 8 Indian regional languages.",
    url: "https://finlip.in/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
