import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NISM Certifications & Exchange Authorisations",
  description:
    "Official NISM Series VIII credentials (Cert #2420365732), NSE & BSE Authorised Person affiliations, and student resolution grievance turnaround.",
  alternates: {
    canonical: "https://www.finlipsecurity.com/compliance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
