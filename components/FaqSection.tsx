"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: "SEBI & Legitimacy",
    question: "Is Finlip Security registered with SEBI?",
    answer:
      "Yes, Finlip Security is a SEBI Registered entity (Registration No: INH000014892) and strictly complies with the SEBI (Research Analysts) and SEBI (Investment Advisers) Regulations. We do not provide guaranteed or assured returns, and we enforce transparent risk profiling on all recommendations.",
  },
  {
    category: "Education & Masterclass",
    question: "In which languages are the Masterclasses conducted?",
    answer:
      "Our live interactive evening classes and student doubt-clearing sessions are conducted in English, Hindi (हिन्दी), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), and Bengali (বাংলা). You can choose your preferred language cohort during enrollment.",
  },
  {
    category: "Prerequisites",
    question: "I am a complete beginner with zero finance background. Can I join?",
    answer:
      "Absolutely. Our curriculum starts with the 'Basics of Stock Market' foundation track covering Demat accounts, order types (limit, market, stop-loss), margin trading rules, and basic chart mechanics before transitioning into advanced technical and option strategies.",
  },
  {
    category: "Live Sessions",
    question: "What if I miss a live evening class?",
    answer:
      "All live interactive sessions are recorded in Full HD and uploaded to the Finlip Student Portal within 2 hours with lifetime access, downloadable session PDFs, indicator pine-scripts, and weekend doubt clearing access.",
  },
  {
    category: "Advisory & Research",
    question: "How do we receive real-time research alerts during market hours?",
    answer:
      "Verified subscribers receive real-time research calls via our dedicated Finlip mobile application, automated WhatsApp Business alerts, and SMS gateway with clear Entry, Target, and Stop-Loss levels, along with continuous trailing stop updates.",
  },
  {
    category: "Refunds & Guarantees",
    question: "Does Finlip guarantee daily or monthly profits?",
    answer:
      "No. In strict compliance with SEBI regulatory guidelines, Finlip Security never promises guaranteed or risk-free returns. Securities markets carry inherent price risks. We teach and execute disciplined risk-to-reward frameworks (minimum 1:2) so your risk is strictly controlled.",
  },
];

export default function FaqSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 shadow-2xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
        <p className="text-sm text-slate-700 font-medium">
          Have more questions about our syllabus or advisory plans?
        </p>
        <button
          onClick={() => onOpenModal && onOpenModal()}
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-emerald-700 border border-slate-300 font-semibold text-xs transition-colors shadow-2xs"
        >
          Speak with a Senior Course Advisor
        </button>
      </div>
    </div>
  );
}
