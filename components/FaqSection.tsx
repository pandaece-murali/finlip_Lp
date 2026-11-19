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
    category: "Certification & Credibility",
    question: "What certifications does the lead faculty hold?",
    answer:
      "Our lead mentor, Mr. Rahul Rathore, is NISM Certified (Series VIII: Equity Derivatives Continuing Professional Education Program, Cert No: 2420365732) and is an Authorised Person registered with both the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE). We strictly emphasize capital preservation and institutional risk-to-reward ratios.",
  },
  {
    category: "Languages Offered",
    question: "In which languages can I attend the courses?",
    answer:
      "We offer live interactive batches in 8 languages: English, हिन्दी (Hindi), தமிழ் (Tamil), తెలుగు (Telugu), मराठी (Marathi), ગુજરાતી (Gujarati), বাংলা (Bengali), and ಕನ್ನಡ (Kannada). During registration, simply select your preferred language cohort.",
  },
  {
    category: "Beginner Eligibility",
    question: "I am a complete beginner with zero finance background. Can I join?",
    answer:
      "Yes, absolutely. We have a dedicated 'Stock Market Starter' foundation track covering Demat accounts, order types (Limit, Market, Stop-Loss), leverage mechanics, and basic chart reading before moving into advanced technical and option strategies.",
  },
  {
    category: "Missed Classes",
    question: "What happens if I miss a live session?",
    answer:
      "All live interactive classes are recorded in Full HD and uploaded to the Finlip Student Portal within 2 hours with lifetime access, downloadable session PDFs, indicator pine-scripts, and weekend doubt clearing access.",
  },
  {
    category: "Guarantees & Advisory",
    question: "Does Finlip offer guaranteed profits or tips?",
    answer:
      "No. Stock and derivatives trading involves market risk. Finlip Security is an educational institute focused on building independent, disciplined traders through mathematical edge, option Greeks, and strict risk-to-reward frameworks (minimum 1:2). We never promise guaranteed returns.",
  },
  {
    category: "Course Inclusions",
    question: "What is included with course enrollment?",
    answer:
      "You receive live interactive masterclasses, live market hours execution labs (9:15 AM - 11:30 AM), lifetime access to recordings, private student community access, daily pre-market research briefs, and a verified Certificate of Completion.",
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
          Have more questions about curriculum or language cohorts?
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
