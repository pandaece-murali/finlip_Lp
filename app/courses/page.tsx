"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import {
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  Download,
  Video,
  Users,
  ArrowRight,
} from "lucide-react";

export default function CoursesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enroll in Masterclass");

  const openModal = (title?: string) => {
    setModalTitle(title || "Enroll in Masterclass");
    setModalOpen(true);
  };

  const courseList = [
    {
      id: "technical",
      title: "Technical Analysis Pro Masterclass",
      tagline: "Decode Chart Geometry, Volume Profile & High Probability Momentum",
      level: "Beginner to Advanced",
      duration: "6 Weeks",
      hours: "36+ Live Interactive Hours",
      batch: "Starts Thursday at 7:30 PM IST",
      languages: ["English", "हिन्दी (Hindi)", "தமிழ் (Tamil)", "తెలుగు (Telugu)"],
      curriculum: [
        {
          week: "Module 1",
          topic: "Foundations of Candlestick Geometry & Price Cycles",
          details:
            "Anatomy of bullish/bearish candles, wick rejections, multi-timeframe fractal behavior, and trend identification using Dow Theory & Market Structure.",
        },
        {
          week: "Module 2",
          topic: "Support, Resistance & Supply-Demand Imbalances",
          details:
            "Spotting institutional accumulation zones, liquidity sweep fakeouts, dynamic moving average confluence, and volume profile value areas.",
        },
        {
          week: "Module 3",
          topic: "Volume Spread Analysis (VSA) & Indicator Confluence",
          details:
            "Identifying smart-money absorption, Wyckoff accumulation vs distribution, RSI multi-timeframe divergence setups, and VWAP bands.",
        },
        {
          week: "Module 4",
          topic: "Live Market Execution Lab (9:15 AM - 11:30 AM)",
          details:
            "Trade execution inside live market hours. Calculating exact position sizing, setting trailing stop-losses, and managing psychological discipline.",
        },
      ],
      tools: ["TradingView Pro", "Chartink Custom Screeners", "Live Option Chain"],
    },
    {
      id: "options",
      title: "Options Trading & Greeks Mastery",
      tagline: "Build Non-Directional Systematic Income & Hedged Expiry Strategies",
      level: "Intermediate to Pro",
      duration: "4 Weeks",
      hours: "24+ Live Interactive Hours",
      batch: "Starts Saturday at 11:00 AM IST",
      languages: ["English", "हिन्दी (Hindi)", "मराठी (Marathi)", "বাংলা (Bengali)"],
      curriculum: [
        {
          week: "Module 1",
          topic: "Option Greeks Demystified: Delta, Theta, Vega & Gamma",
          details:
            "Mathematical mechanics of option pricing, implied volatility (IV) percentiles, theta decay curves, and how time decay benefits premium sellers.",
        },
        {
          week: "Module 2",
          topic: "Open Interest (OI) & Smart Money Positioning",
          details:
            "Reading live option chains on Nifty and Bank Nifty, PCR (Put-Call Ratio), identifying max pain strikes and institutional hedging walls.",
        },
        {
          week: "Module 3",
          topic: "Non-Directional Strategies & Iron Condors",
          details:
            "Designing weekly delta-neutral straddles, strangles, short iron condors, and calendar spreads for sideways and rangy markets.",
        },
        {
          week: "Module 4",
          topic: "Dynamic Fire-Fighting & Expiry Day Adjustments",
          details:
            "Rolling legs, shifting wings, converting credit spreads to iron flies when one side is breached during trending market days.",
        },
      ],
      tools: ["Sensibull", "Opstra Options Analytics", "TradingView"],
    },
    {
      id: "algo",
      title: "Algorithmic & Quantitative Trading Systems",
      tagline: "Rule-Based Backtested Strategies & Automated API Execution",
      level: "Intermediate to Advanced",
      duration: "5 Weeks",
      hours: "30+ Live Interactive Hours",
      batch: "Starts Next Monday at 8:00 PM IST",
      languages: ["English", "हिन्दी (Hindi)"],
      curriculum: [
        {
          week: "Module 1",
          topic: "Quantitative Strategy Formulation & Edge Discovery",
          details:
            "Hypothesis testing, statistical expectancy, maximum drawdown calculation, and mathematical Sharpe / Sortino ratios.",
        },
        {
          week: "Module 2",
          topic: "TradingView Pine Script v5 Mastery",
          details:
            "Writing custom indicators, multi-timeframe strategy scripts, backtesting rules, order execution functions, and parameter optimization.",
        },
        {
          week: "Module 3",
          topic: "Broker API Integrations & Webhook Automation",
          details:
            "Automating trades from TradingView alert webhooks directly into Zerodha Kite, Dhan, Angel One, and Alice Blue with millisecond latency.",
        },
        {
          week: "Module 4",
          topic: "System Risk Automation & Cloud Hosting",
          details:
            "Setting automated kill-switches, daily max-loss limits, and deploying algorithmic bots on cloud VPS instances for uninterrupted 24/7 uptime.",
        },
      ],
      tools: ["Pine Script v5", "Python", "Broker APIs", "AWS Lightsail VPS"],
    },
    {
      id: "beginner",
      title: "Basics of Stock Market (Foundation Course)",
      tagline: "100% Free Complete Beginner Foundation for Aspiring Market Participants",
      level: "Zero Prior Knowledge",
      duration: "1 Week",
      hours: "8 Hours Self-Paced + 2 Live Q&A",
      batch: "Instant Lifetime Access",
      languages: ["English", "हिन्दी", "தமிழ்", "తెలుగు", "मराठी", "বাংলা", "ગુજરાતી"],
      curriculum: [
        {
          week: "Module 1",
          topic: "How Stock Exchanges Work: NSE, BSE & Clearing Houses",
          details:
            "Market timing, primary vs secondary markets, order routing, settlement cycles (T+1), and Demat account operations.",
        },
        {
          week: "Module 2",
          topic: "Order Types, Margins & Trading Terminology",
          details:
            "Limit orders, Market orders, Stop-Loss (SL) and SL-Market, leverage rules, and broker brokerage structures.",
        },
        {
          week: "Module 3",
          topic: "Introduction to Charts, Candlesticks & Price Action",
          details:
            "Reading daily and 15-minute charts, identifying green/red candles, basic support and resistance lines.",
        },
        {
          week: "Module 4",
          topic: "The Golden Rules of Capital Preservation",
          details:
            "Position sizing, avoiding scam tip groups, setting a trading journal, and building a disciplined mindset.",
        },
      ],
      tools: ["Free TradingView Account", "Finlip Trading Journal Excel Sheet"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar onOpenModal={openModal} />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" /> ISO 9001:2015 Certified Curriculum
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Stock Market Masterclasses
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From complete beginner foundation to algorithmic option execution. Learn live during market hours with experienced NISM-certified mentors in 8 Indian languages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Live Interactive Evening Classes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Live Market Hours Trading Room
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Lifetime Portal & Recording Access
            </span>
          </div>
        </div>
      </section>

      {/* Course Detailed Tracks */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {courseList.map((course, idx) => (
            <div
              key={course.id}
              id={course.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden transition-all scroll-mt-28"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-200">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      TRACK 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {course.level}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {course.title}
                  </h2>
                  <p className="text-sm text-emerald-700 font-semibold">
                    {course.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                  <button
                    onClick={() => openModal(`Download Syllabus for ${course.title}`)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Syllabus PDF</span>
                  </button>
                  <button
                    onClick={() => openModal(`Enrollment for ${course.title}`)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                  >
                    Enroll in Next Batch
                  </button>
                </div>
              </div>

              {/* Key Meta Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 py-4 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Duration</span>
                  <span className="font-semibold text-slate-900">{course.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Training Hours</span>
                  <span className="font-semibold text-slate-900">{course.hours}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Next Live Cohort</span>
                  <span className="font-semibold text-emerald-700">{course.batch}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Languages</span>
                  <span className="font-semibold text-slate-900">{course.languages.join(", ")}</span>
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-wider font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Module-by-Module Detailed Curriculum:</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.curriculum.map((mod, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-emerald-700 font-mono font-bold">{mod.week}</span>
                        <span className="text-slate-500">Live Hands-on</span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">{mod.topic}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {mod.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Taught */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Analytical Software Taught:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono text-[11px] shadow-2xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openModal(`Consultant Call for ${course.title}`)}
                  className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1"
                >
                  <span>Request detailed syllabus & sample class link</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Perks */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900">What Every Finlip Student Receives</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete support ecosystem engineered to ensure you don&apos;t just learn, but consistently execute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <Video className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900">Lifetime HD Class Archives</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Re-watch all recordings on the Finlip Mobile & Web App anytime. Access never expires.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <Users className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900">Private Alumni Community</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Collaborate with 150,000+ traders in our moderated live chart discussion rooms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <Award className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900">Certificate of Completion</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                ISO 9001:2015 accredited digital certificate recognized across financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTitle={modalTitle}
      />
    </div>
  );
}
