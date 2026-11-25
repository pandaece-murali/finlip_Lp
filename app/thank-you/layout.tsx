import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Confirmed | Finlip Security Academy",
  description:
    "Thank you for booking your seat with Finlip Security Academy. Your Free Live Demo Masterclass pass and syllabus details have been reserved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
