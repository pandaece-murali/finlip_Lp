"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import LeadModal from "@/components/LeadModal";
import PositionCalculator from "@/components/PositionCalculator";
import FaqSection from "@/components/FaqSection";
import {
  Shield,
  Award,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Users,
  PlayCircle,
  Clock,
  ArrowRight,
  BookOpen,
  Calendar,
  Star,
  Layers,
  BarChart3,
  Globe2,
  ChevronRight,
  FileCheck,
  Headphones,
  Zap,
} from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Book Free Live Masterclass");
  const [selectedCourseTab, setSelectedCourseTab] = useState("all");

  const openLeadModal = (title = "Book Free Live Masterclass") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const courses = [
    {
      id: "technical",
      category: "technical",
      title: "Technical Analysis Pro Masterclass",
      badge: "Most Popular",
      level: "Beginner to Advanced",
      duration: "6 Weeks (Live Interactive)",
      sessions: "24 Live Evening Classes",
      language: "English / Hindi / Tamil",
      description:
        "Master chart patterns, support-resistance geometry, multi-timeframe confirmation, volume spread analysis (VSA), and momentum indicators to capture explosive intraday and swing breakouts.",
      highlights: [
        "Candlestick Geometry & Price Cycles",
        "Volume Spread Analysis (VSA) & Liquidity Pools",
        "RSI Divergences & Supertrend Trailing",
        "Live Market Trading Lab (9:15 AM - 11:30 AM)",
      ],
      nextBatch: "Thursday, 7:30 PM",
      seatsLeft: 8,
    },
    {
      id: "options",
      category: "derivatives",
      title: "Options Trading & Greeks Mastery",
      badge: "High Reward",
      level: "Intermediate to Pro",
      duration: "4 Weeks (Intensive)",
      sessions: "16 Live Market Sessions",
      language: "English / Hindi / Telugu",
      description:
        "Decode Delta, Theta, Vega, and Gamma. Build non-directional hedged option selling systems (Iron Condors, Straddles, Calendar Spreads) with rule-based adjustment mechanics.",
      highlights: [
        "Open Interest (OI) & PCR Real-Time Analysis",
        "Option Greeks & Theta Decay Engineering",
        "Fire-Fighting Adjustments on Expiring Spreads",
        "Zero-Loss Hedging for High Volatility Events",
      ],
      nextBatch: "Saturday, 11:00 AM",
      seatsLeft: 5,
    },
    {
      id: "algo",
      category: "algo",
      title: "Quantitative & Algorithmic Trading Systems",
      badge: "Automated Edge",
      level: "Intermediate to Advanced",
      duration: "5 Weeks",
      sessions: "20 Hands-on Workshops",
      language: "English / Hindi",
      description:
        "Transition from emotional manual clicking to automated quantitative execution. Backtest high-expectancy strategies on TradingView Pine Script & Python with API brokerage execution.",
      highlights: [
        "Backtesting & Walk-Forward Optimization",
        "TradingView Pine Script v5 Strategy Building",
        "Webhooks API Integration with Zerodha/Dhan/Angel",
        "System Drawdown Control & Position Sizing",
      ],
      nextBatch: "Next Monday, 8:00 PM",
      seatsLeft: 11,
    },
    {
      id: "beginner",
      category: "foundation",
      title: "Stock Market Starter Program (100% Free)",
      badge: "Free Certification",
      level: "Zero Experience Needed",
      duration: "1 Week (Self-Paced + 2 Live)",
      sessions: "6 Foundational Modules",
      language: "7 Indian Languages",
      description:
        "Understand market mechanics, NSE/BSE auction process, order types (Limit, SL, SL-M), Demat operations, and risk management fundamentals before risking a single Rupee.",
      highlights: [
        "Demat Account Operations & Settlement Rules",
        "How Stocks, Indices & Derivatives Work",
        "Risk-to-Reward Fundamentals",
        "Complimentary 1-on-1 Portfolio Assessment",
      ],
      nextBatch: "Instant Access Today",
      seatsLeft: 24,
    },
  ];

  const filteredCourses =
    selectedCourseTab === "all"
      ? courses
      : courses.filter((c) => c.category === selectedCourseTab);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      <Navbar onOpenModal={openLeadModal} />
      <MarketTicker />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/70 via-white to-white">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-100/50 via-teal-50/40 to-blue-50/30 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>SEBI Registered Research Analyst • INH000014892</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Trade Indian Markets with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Institutional Precision
                </span>{" "}
                & Mathematical Edge
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Join <strong className="text-slate-900">Finlip Security</strong> — India&apos;s trusted stock market academy and SEBI-regulated financial research firm. Master real-world technical analysis, options Greeks, and systematic risk management taught live by seasoned full-time practitioners.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">Live Market Hours Practice</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">Taught in 7 Indian Languages</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">NISM Certified Mentors</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => openLeadModal("Book Free Live Masterclass")}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Book Free Live Demo Class</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
                >
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <span>Explore All Curricula</span>
                </Link>
              </div>

              {/* Social Proof / Stats Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">18+ Yrs</p>
                  <p className="text-xs text-slate-500 font-medium">Market Research Heritage</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono">150,000+</p>
                  <p className="text-xs text-slate-500 font-medium">Learners Mentored</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">4.8 / 5</p>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="text-slate-600">Verified Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Quick Lead Form (CapitalVia style) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
                      FAST-TRACK ACCESS
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                      Claim Your Free Masterclass Pass
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-200">
                      8 Seats Left
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 my-4 leading-relaxed">
                  Join our upcoming interactive evening masterclass. See live chart readings and institutional options setups without paying a Rupee.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    openLeadModal("Live Masterclass Fast-Track Reservation");
                  }}
                  className="space-y-3.5 text-xs sm:text-sm"
                >
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">WhatsApp Mobile Number</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Language</label>
                      <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600">
                        <option>English</option>
                        <option>हिन्दी (Hindi)</option>
                        <option>தமிழ் (Tamil)</option>
                        <option>తెలుగు (Telugu)</option>
                        <option>मराठी (Marathi)</option>
                        <option>বাংলা (Bengali)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Interest Track</label>
                      <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600">
                        <option>Technical Analysis</option>
                        <option>Options & Greeks</option>
                        <option>Algo Trading</option>
                        <option>SEBI Advisory Call</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Instant Free Registration</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No spam. Strict SEBI compliance & investor privacy.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section: The Finlip Edge */}
      <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              WHY CHOOSE FINLIP SECURITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Engineered for Real Markets, Not Theoretical Textbooks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Unlike generic seminar presenters, Finlip Security blends 18+ years of SEBI-regulated research discipline with hands-on, live-market execution mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 transition-all duration-200 group hover:-translate-y-1 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Live Market Rooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experience setup formation and entry triggers during actual market hours (9:15 AM - 3:30 PM) rather than static historical weekend replays.
              </p>
            </div>

            <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 transition-all duration-200 group hover:-translate-y-1 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">7 Regional Languages</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn complex financial derivatives and market mechanics in your mother tongue: English, Hindi, Tamil, Telugu, Marathi, Bengali, or Gujarati.
              </p>
            </div>

            <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 transition-all duration-200 group hover:-translate-y-1 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mathematical Risk Sizing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protect capital like institutions. Every setup enforces strict 1:2+ risk-to-reward metrics, pre-defined invalidation levels, and zero emotional gambling.
              </p>
            </div>

            <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 transition-all duration-200 group hover:-translate-y-1 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated Mentor Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Get your trading journal reviewed 1-on-1 every Saturday. Continuous doubt clearing and trade debriefs until you achieve consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Courses & Masterclasses */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                ACCREDITED TRAINING CURRICULUM
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Masterclass Tracks
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Choose a structured curriculum mapped directly to your financial goals, trading style, and market experience.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto text-xs font-medium">
              {[
                { label: "All Programs", val: "all" },
                { label: "Technical Analysis", val: "technical" },
                { label: "Options & Greeks", val: "derivatives" },
                { label: "Algo Trading", val: "algo" },
                { label: "Free Foundation", val: "foundation" },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setSelectedCourseTab(tab.val)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCourseTab === tab.val
                      ? "bg-emerald-600 text-white font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-slate-200 hover:border-emerald-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono">
                      {c.badge}
                    </span>
                    <span className="text-xs text-rose-600 font-semibold">
                      {c.seatsLeft} seats remaining
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {c.description}
                  </p>

                  {/* Course Details strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block">Duration</span>
                      <span className="font-semibold text-slate-800">{c.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Schedule</span>
                      <span className="font-semibold text-slate-800">{c.sessions}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-slate-400 block">Languages</span>
                      <span className="font-semibold text-emerald-700">{c.language}</span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Core Syllabus Modules:
                    </span>
                    {c.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Next Live Cohort:</span>
                    <span className="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {c.nextBatch}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => openLeadModal(`Enrollment for ${c.title}`)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                    >
                      Book Free Demo
                    </button>
                    <Link
                      href="/courses"
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                    >
                      Syllabus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-emerald-500 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-all shadow-2xs"
            >
              <span>Explore All 6 Full Certifications & Syllabus PDFs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section: Risk & Position Sizing Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PositionCalculator onOpenModal={() => openLeadModal("Masterclass Risk Management Workshop")} />
        </div>
      </section>

      {/* Research Advisory Spotlight */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200" id="advisory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                INSTITUTIONAL MARKET RESEARCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                SEBI Registered Market Research & Advisory
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For busy executives, HNIs, and full-time traders who demand institutional-grade equity, index, and commodity analysis backed by transparent risk ratios.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Strict Pre-Trade Risk Profiling:</strong> Recommendations tailored strictly according to your verified risk tolerance capacity.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Minimum 1:2 Risk-Reward:</strong> Every recommendation comes with clear entry zones, hard stop-losses, and trailing profit milestones.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Multi-Channel Instant Delivery:</strong> Alerts delivered via dedicated Finlip App, WhatsApp Business alerts, and SMS gateway.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/advisory"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-600/20"
                >
                  View Advisory Packages
                </Link>
                <button
                  onClick={() => openLeadModal("Advisory Consultation Call")}
                  className="px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-xs transition-colors bg-white shadow-2xs"
                >
                  Speak with Research Desk
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 transition-all shadow-2xs">
                <span className="text-xs font-mono text-emerald-700 font-bold block mb-1">
                  EQUITY CASH DESK
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Swing & Positional Alpha</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-momentum mid-cap & large-cap swing setups holding between 3 to 15 trading days. Focus on institutional accumulation patterns.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
                  <span>Holding: 3-15 Days</span>
                  <span className="text-emerald-700 font-bold">1:2.5 Min R:R</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 transition-all shadow-2xs">
                <span className="text-xs font-mono text-teal-700 font-bold block mb-1">
                  DERIVATIVES DESK
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Index Options & Hedging</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defined-risk weekly strategies on Nifty 50 and Bank Nifty. Theta decay setups with systematic fire-fighting rules during expiry days.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
                  <span>Holding: Intraday & Positional</span>
                  <span className="text-teal-700 font-bold">Hedging Included</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 transition-all shadow-2xs">
                <span className="text-xs font-mono text-blue-700 font-bold block mb-1">
                  COMMODITY DESK
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">MCX Bullion & Energy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time technical tracking of MCX Gold, Silver, and Crude Oil driven by global macroeconomic catalysts and volume profile.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
                  <span>Holding: Intraday</span>
                  <span className="text-blue-700 font-bold">Evening Session Active</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 transition-all shadow-2xs">
                <span className="text-xs font-mono text-amber-700 font-bold block mb-1">
                  WEALTH & PORTFOLIO
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Fundamental Multibaggers</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quarterly research dossiers identifying small-cap leaders with robust ROCE, zero debt, strong promoter holding, and clean balance sheets.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
                  <span>Holding: 1-3 Years</span>
                  <span className="text-amber-700 font-bold">Deep Forensic Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Senior Research Mentors */}
      <section className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              LEARN FROM PROVEN PRACTITIONERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Mentored by Certified Market Veterans
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our faculty members are active, certified market practitioners with extensive institutional backgrounds — not theory lecturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center hover:border-emerald-300 transition-all shadow-xs">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 mx-auto mb-4 flex items-center justify-center text-3xl font-black text-white shadow-md">
                NM
              </div>
              <h3 className="text-lg font-bold text-slate-900">Naveen Mishra</h3>
              <p className="text-xs text-emerald-700 font-bold">Head of Market Research</p>
              <p className="text-xs text-slate-500 mt-0.5">MBA (Finance) • NISM Certified • 14+ Yrs Exp</p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Specializes in Price Action Geometry and High Probability Swing Breakouts. Has trained over 45,000 students in live market setups across India.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center hover:border-emerald-300 transition-all shadow-xs">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-700 mx-auto mb-4 flex items-center justify-center text-3xl font-black text-white shadow-md">
                PS
              </div>
              <h3 className="text-lg font-bold text-slate-900">Priya Sundaram</h3>
              <p className="text-xs text-teal-700 font-bold">Chief Derivatives Strategist</p>
              <p className="text-xs text-slate-500 mt-0.5">NISM Series VIII • Ex-Institutional Prop Trader • 11+ Yrs</p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Pioneered Finlip&apos;s non-directional options Greek hedging models and delta-neutral adjustments for high-volatility events.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center hover:border-emerald-300 transition-all shadow-xs">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-600 to-emerald-700 mx-auto mb-4 flex items-center justify-center text-3xl font-black text-white shadow-md">
                RV
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rajesh Verma</h3>
              <p className="text-xs text-cyan-700 font-bold">Lead Quantitative Architect</p>
              <p className="text-xs text-slate-500 mt-0.5">CFA Level III Candidate • Pine Script Specialist • 10+ Yrs</p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Designs algorithmic walk-forward models and API webhook automation connecting TradingView signals to Indian discount brokers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews / Testimonials */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              VERIFIED SUCCESS STORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              What 150,000+ Indian Traders Say
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">
                4.8 / 5 Rating across Google Reviews & Trustpilot
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;I lost nearly ₹2.5 Lakhs blindly buying naked out-of-the-money options from Telegram tip channels. Finlip&apos;s Options Greeks Masterclass taught me how Theta decay really works and how to sell spreads with 1:2.5 risk-reward. Completely changed my trading trajectory.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Anand Kulkarni</h4>
                  <p className="text-[11px] text-slate-500">Software Architect • Pune</p>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Verified Student
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;The best part about Finlip is that classes are offered in regional languages. I attended the Technical Analysis batch in Tamil with mentor Naveen sir. The live morning trading room is worth 10x the course fee alone.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Senthil Murugan</h4>
                  <p className="text-[11px] text-slate-500">Business Owner • Coimbatore</p>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Verified Student
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;As a practicing doctor, I don&apos;t have time to stare at screens all day. Finlip&apos;s Swing Alpha research advisory helped me build a structured, stress-free portfolio with disciplined trailing stop-losses. 100% transparent and SEBI compliant.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Shalini Mehta</h4>
                  <p className="text-[11px] text-slate-500">Cardiologist • New Delhi</p>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Verified Client
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Have Questions? We Have Answers.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about our certifications, advisory compliance, live market rooms, and enrollment process.
            </p>
          </div>

          <FaqSection onOpenModal={() => openLeadModal("Counselor Consultation Call")} />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" /> Next Live Batch Starts Thursday
          </div>

          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Stop Guessing in Volatile Markets. <br />
            <span className="text-emerald-200">Trade with Institutional Rules.</span>
          </h2>

          <p className="text-sm sm:text-base text-emerald-50 max-w-2xl mx-auto">
            Experience our live market analysis and option strategies firsthand. Reserve your free demo seat today and receive our complimentary 42-page Stock Market Starter Blueprint.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openLeadModal("Free Demo Pass - Bottom CTA")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-emerald-950 bg-white hover:bg-emerald-50 shadow-xl shadow-black/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Claim Your Free Demo Pass</span>
            </button>
            <a
              href="tel:+917314852000"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-white bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-600 transition-colors"
            >
              Call Desk: +91 731 485 2000
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Interactive Lead Capture & Demo Booking Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTitle={modalTitle}
      />
    </div>
  );
}
