"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  Award,
  Sparkles,
  Home,
} from "lucide-react";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Trader";
  const course = searchParams.get("course") || "Finlip Live Market Masterclass";
  const city = searchParams.get("city") || "India";
  const rawPass = searchParams.get("pass") || "PASS-8429";
  const passId = rawPass.startsWith("FLIP-") ? rawPass : `FLIP-${rawPass}`;

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Confirmation Hero Card */}
        <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-12 shadow-xl text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Animated Success Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border-2 border-emerald-200 shadow-md">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> ADMISSIONS CONFIRMATION
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Registration Confirmed!
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Welcome aboard, <strong className="text-slate-900">{name}</strong>! Your demo pass for{" "}
            <strong className="text-emerald-700">{course}</strong> has been secured for the upcoming cohort.
          </p>

          {/* Ticket / Confirmation Details Grid */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-left max-w-xl mx-auto space-y-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Session Pass ID:</span>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md border border-emerald-300">
                {passId}
              </span>
            </div>

            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Selected Track:</span>
              <span className="font-bold text-slate-900 text-right">{course}</span>
            </div>

            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Student Region:</span>
              <span className="font-semibold text-slate-900">{city}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Delivery Mode:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> WhatsApp Dispatch Pending (15 mins)
              </span>
            </div>
          </div>
        </div>

        {/* 3-Step What Happens Next Timeline */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              ROADMAP
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              What Happens Next? (3 Simple Steps)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5 relative">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                WhatsApp Confirmation & Blueprint
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check your WhatsApp within 10-15 minutes. We are sending your confirmed joining link and our complimentary 42-page Market Structure Blueprint PDF.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5 relative">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Academic Counselor Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our coordinator will reach out from <strong className="text-slate-900">+91 731 485 2000</strong> to confirm your language preference (English, Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5 relative">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Live Interactive Classroom
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Join Mentor Rahul Rathore live during market hours to observe real-time chart analysis, risk-to-reward frameworks, and institutional setups.
              </p>
            </div>
          </div>
        </div>

        {/* Action Center: Open Demat & Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Demat Account with Choice */}
          <div className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-bold border border-blue-200">
                RECOMMENDED BEFORE CLASS
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Open Your Free Demat Account with Choice
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To practice the live chart setups, order types, and risk management exercises taught during the masterclass, open your zero-fee Demat account with Choice Equity Broking Pvt Ltd.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Zero account opening fees</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Authorised Person referral linked to Mentor</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>5-minute paperless e-KYC onboarding</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="https://choiceindia.com/register?refercode=SVBK&source=Q0hPSUNFX0NPTk5FQ1Q="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Demat Account (Choice)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Student Desk & Direct Assistance */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-bold border border-slate-200">
                DIRECT ADMISSIONS DESK
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Need Immediate Help or Batch Rescheduling?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have specific questions about options syllabus, algorithmic modules, or want to switch your live batch timing? Our academic support desk is open Monday to Saturday from 9:00 AM to 7:00 PM IST.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="tel:+917314852000" className="hover:text-emerald-700 font-semibold">
                    +91 731 485 2000 / +91 98260 00000
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="mailto:finlipsecurity@gmail.com" className="hover:text-emerald-700 font-semibold">
                    finlipsecurity@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+917314852000"
                className="flex-1 py-3 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 text-center transition-all cursor-pointer"
              >
                Call Support Desk
              </a>
              <Link
                href="/courses"
                className="flex-1 py-3 rounded-xl font-bold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center transition-all cursor-pointer"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Mentor & Institute Trust Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Lead Mentor: Rahul Rathore
              </h4>
              <p className="text-xs text-slate-600">
                NISM Series VIII Certified Faculty (Equity Derivatives • Cert No: 2420365732). Registered Authorised Person with NSE & BSE.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="py-24 text-center">
              <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-slate-600">Loading your confirmation details...</p>
            </div>
          }
        >
          <ThankYouInner />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
