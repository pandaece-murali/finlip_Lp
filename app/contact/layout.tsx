import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Admissions Desk & Student Support",
  description:
    "Connect with Finlip Security support desks in Indore and Mumbai. Telephone: +91 731 485 2000. Email: support@finlipsecurity.com.",
  alternates: {
    canonical: "https://www.finlipsecurity.com/contact",
  },
  openGraph: {
    title: "Contact Finlip Security Admissions",
    description: "Connect with our admissions desk across 8 Indian regional languages.",
    url: "https://www.finlipsecurity.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
