"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  Mail,
  User,
  ArrowRight,
  Star,
  Globe2,
  Calendar,
  BookOpen,
  ChevronRight,
  TrendingUp,
  BarChart2,
  Layers,
  Lock,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export default function MetaAdsLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Options Trading & Greeks Mastery",
    language: "Hindi",
    experience: "Beginner (0-1 yrs)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const courses = [
    {
      id: "options",
      title: "Options Trading & Greeks Mastery",
      badge: "Highest Enrollment",
      tagline: "Build Non-Directional Monthly Cashflows & Master Hedging",
      duration: "4 Weeks (Intensive)",
      schedule: "16 Live Market Sessions",
      languages: ["English", "हिन्दी (Hindi)", "தமிழ் (Tamil)", "తెలుగు (Telugu)", "मराठी (Marathi)"],
      highlights: [
        "Decode Delta, Theta, Vega & Gamma with practical examples",
        "Open Interest (OI) & Real-Time Option Chain reading",
        "Fire-fighting adjustments when market breaks ranges",
        "Zero-loss hedging mechanics during high volatility days",
      ],
      nextBatch: "Upcoming Saturday, 11:00 AM IST",
      seatsLeft: 6,
    },
    {
      id: "technical",
      title: "Technical Analysis Pro Masterclass",
      badge: "Core Foundation",
      tagline: "Master Candlestick Geometry, Volume Profile & Smart Breakouts",
      duration: "6 Weeks",
      schedule: "24 Live Evening Classes",
      languages: ["English", "हिन्दी (Hindi)", "தமிழ் (Tamil)", "తెలుగు (Telugu)", "বাংলা (Bengali)"],
      highlights: [
        "Support-resistance geometry and institutional accumulation",
        "Volume Spread Analysis (VSA) to avoid retail bull/bear traps",
        "Multi-timeframe RSI divergences & VWAP trailing",
        "Live Market Trading Lab during morning volatility (9:15 AM - 11:30 AM)",
      ],
      nextBatch: "Upcoming Thursday, 7:30 PM IST",
      seatsLeft: 8,
    },
    {
      id: "algo",
      title: "Algorithmic & Quantitative Trading Systems",
      badge: "Automated Edge",
      tagline: "Rule-Based Backtested Strategies & Direct API Broker Webhooks",
      duration: "5 Weeks",
      schedule: "20 Hands-on Workshops",
      languages: ["English", "हिन्दी (Hindi)"],
      highlights: [
        "TradingView Pine Script v5 strategy scripting & backtesting",
        "Automated order placement via Zerodha, Dhan, Angel One APIs",
        "Risk automation, walk-forward testing & maximum drawdown control",
        "Deploying algorithms on cloud VPS for 100% uptime",
      ],
      nextBatch: "Next Monday, 8:00 PM IST",
      seatsLeft: 9,
    },
    {
      id: "starter",
      title: "Stock Market Starter Program (Foundation)",
      badge: "Free Foundation",
      tagline: "For Absolute Beginners: Demat Basics, Order Types & Capital Safety",
      duration: "1 Week",
      schedule: "Self-Paced + 2 Live Q&A",
      languages: ["English", "हिन्दी", "தமிழ்", "తెలుగు", "मराठी", "ગુજરાતી", "বাংলা", "ಕನ್ನಡ"],
      highlights: [
        "How stock exchanges & order matching engines operate",
        "Limit, Market, Stop-Loss (SL) and SL-M order execution",
        "Risk-to-reward fundamentals before risking single rupee",
        "Complimentary 1-on-1 portfolio risk checkup",
      ],
      nextBatch: "Instant Lifetime Access",
      seatsLeft: 25,
    },
  ];

  const testimonials = [
    {
      name: "Aditya Kulkarni",
      role: "IT Project Lead • Pune",
      course: "Options Trading & Greeks",
      rating: 5,
      review:
        "I was losing money every expiry buying cheap OTM call options. Rahul sir's breakdown of Theta decay and non-directional Iron Condors opened my eyes. The live morning trading room is worth everything. Attended the batch in Marathi & English.",
    },
    {
      name: "Suresh Sundaram",
      role: "Business Owner • Chennai",
      course: "Technical Analysis Pro",
      rating: 5,
      review:
        "Learning in Tamil made all the difference. Rahul Rathore sir explains complex Volume Spread Analysis in simple practical terms. No fake screenshots, only pure chart logic and strict 1:2 risk-reward.",
    },
    {
      name: "Dr. Kavita Verma",
      role: "Healthcare Specialist • Indore",
      course: "Stock Market Starter + Options",
      rating: 5,
      review:
        "As a doctor with zero financial background, I was intimidated by stock markets. Finlip's NISM certified mentorship gave me a structured, calm framework. Their risk management rules protect my hard-earned capital.",
    },
    {
      name: "Nilesh Patel",
      role: "Civil Engineer • Ahmedabad",
      course: "Price Action & Volume Spread",
      rating: 5,
      review:
        "Very transparent and professional academy. Rahul sir's NISM Series VIII credentials and real market experience show in every session. Gujarati and Hindi support made doubt clearing extremely easy.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const scrollToForm = (courseName?: string) => {
    if (courseName) {
      setFormData((prev) => ({ ...prev, course: courseName }));
    }
    const el = document.getElementById("lead-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Notification Announcement */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold text-[11px] border border-emerald-500/30">
            <Award className="w-3.5 h-3.5 text-emerald-400" /> NISM CERTIFIED: Series VIII (Equity Derivatives)
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="text-slate-200">
            Next Live Interactive Batch Commencing This Week in 8 Regional Languages
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <a
            href="tel:+917314852000"
            className="text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" /> Call: +91 731 485 2000
          </a>
        </div>
      </div>

      {/* Main Top Header */}
      <header className="border-b border-slate-200 bg-white/95 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  FINLIP
                </span>
                <span className="text-xl font-light tracking-wide text-emerald-600">
                  SECURITY
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">
                NISM Certified Market Academy
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917314852000?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Finlip%20Stock%20Market%20Courses"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Counselor</span>
            </a>
            <button
              onClick={() => scrollToForm()}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              Claim Free Demo Pass
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Above-The-Fold Form */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High Converting Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mentor: Rahul Rathore (NISM Series VIII Certified)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Master Indian Stock & Options Markets with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Institutional Precision
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Stop gambling on Telegram tips and emotional hunch trades. Learn structured price action, option Greeks, and mathematical risk management live during market hours — taught in your native language.
              </p>

              {/* Languages Highlight Strip */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                  <span>Choose Your Preferred Learning Language:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "English",
                    "हिन्दी (Hindi)",
                    "தமிழ் (Tamil)",
                    "తెలుగు (Telugu)",
                    "मराठी (Marathi)",
                    "ગુજરાતી (Gujarati)",
                    "বাংলা (Bengali)",
                    "ಕನ್ನಡ (Kannada)",
                  ].map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-[11px]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Core Differentiators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Live Market Trading Room</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Strict 1:2+ Risk:Reward</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Lifetime Portal Access</span>
                </div>
              </div>

              {/* Trust Proof Metrics */}
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-black text-slate-900 font-mono">10+ Yrs</p>
                  <p className="text-xs text-slate-500">Market Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-emerald-700 font-mono">150,000+</p>
                  <p className="text-xs text-slate-500">Learners Mentored</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 font-mono">4.8 / 5</p>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>Verified Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Above-The-Fold Form */}
            <div className="lg:col-span-5" id="lead-form-section">
              <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
                      LIMITED BATCH REGISTRATION
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                      Book Free Live Demo Session
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-200">
                    6 Seats Left
                  </span>
                </div>

                <p className="text-xs text-slate-500 my-3 leading-relaxed">
                  Fill in your details below to receive your instant Free Live Demo Pass and Complete Syllabus PDF via WhatsApp.
                </p>

                {isSuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Seat Reserved Successfully!</h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your demo pass for{" "}
                      <strong className="text-emerald-700">{formData.course}</strong> in{" "}
                      <strong className="text-slate-900">{formData.language}</strong> has been confirmed. Our mentor team will contact you on WhatsApp at{" "}
                      <strong className="font-mono text-slate-900">{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          WhatsApp Mobile
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="10-digit number"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rahul@example.com"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Course Language
                        </label>
                        <select
                          value={formData.language}
                          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                        >
                          <option value="Hindi">हिन्दी (Hindi)</option>
                          <option value="English">English</option>
                          <option value="Tamil">தமிழ் (Tamil)</option>
                          <option value="Telugu">తెలుగు (Telugu)</option>
                          <option value="Marathi">मराठी (Marathi)</option>
                          <option value="Gujarati">ગુજરાતી (Gujarati)</option>
                          <option value="Bengali">বাংলা (Bengali)</option>
                          <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Trading Experience
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600"
                        >
                          <option value="Beginner (0-1 yrs)">Beginner (0-1 yrs)</option>
                          <option value="Intermediate (1-3 yrs)">Intermediate (1-3 yrs)</option>
                          <option value="Experienced (3+ yrs)">Experienced (3+ yrs)</option>
                          <option value="Full Time Trader">Full Time Trader</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Select Program</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                      >
                        {courses.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting ? "Securing Demo Seat..." : "Claim Free Live Masterclass Pass"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Privacy. Instant WhatsApp confirmation & syllabus access.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official NISM Certification & Faculty Credentials Proof Section */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center lg:text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Award className="w-4 h-4 text-emerald-600" /> VERIFIED MENTOR CREDENTIALS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Lead Faculty: Rahul Rathore
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  National Institute of Securities Markets (NISM) Certified in Equity Derivatives. Registered Authorised Person with National Stock Exchange (NSE) & Bombay Stock Exchange (BSE).
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p>📍 Campus: 111 P.U. 4, Scheme No. 54, Vijay Nagar, Indore - 452010</p>
                  <p>🏛 Corporate: 156-158 J.B. Nagar, Andheri (East), Mumbai - 400099</p>
                </div>
              </div>

              {/* Certificate Details Card */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1 shadow-2xs">
                  <span className="text-slate-400 block font-mono text-[11px]">NISM Certification</span>
                  <h4 className="font-bold text-slate-900 text-sm">Series VIII: Equity Derivatives</h4>
                  <p className="text-slate-500 text-[11px]">Continuing Professional Education</p>
                  <div className="pt-2">
                    <span className="font-mono text-emerald-700 font-bold block">
                      Cert No: 2420365732
                    </span>
                    <span className="text-[10px] text-slate-400">Valid till Aug 2027</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1 shadow-2xs">
                  <span className="text-slate-400 block font-mono text-[11px]">NSE Registration</span>
                  <h4 className="font-bold text-slate-900 text-sm">Authorised Person (AP)</h4>
                  <p className="text-slate-500 text-[11px]">Cash & Derivatives Segment Active</p>
                  <div className="pt-2">
                    <span className="font-mono text-slate-900 font-bold block">
                      Code: CM & FO Active
                    </span>
                    <span className="text-[10px] text-slate-400">NSE Ref: 13773/RAHUL</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1 shadow-2xs">
                  <span className="text-slate-400 block font-mono text-[11px]">BSE Registration</span>
                  <h4 className="font-bold text-slate-900 text-sm">Certificate of Reg.</h4>
                  <p className="text-slate-500 text-[11px]">Cash and Equity Derivatives</p>
                  <div className="pt-2">
                    <span className="font-mono text-slate-900 font-bold block">
                      Cert No: 167642
                    </span>
                    <span className="text-[10px] text-slate-400">Reg: AP01329901167642</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase All Courses with No Price and High Conversion CTA */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="all-courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              CURRICULUM SUITE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Explore All Finlip Masterclass Tracks
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select the course that matches your experience. All programs include live market sessions, lifetime archives, and verified certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((c) => (
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
                      {c.seatsLeft} seats remaining in cohort
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">
                    {c.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Duration & Schedule</span>
                      <span className="font-semibold text-slate-800">{c.duration}</span>
                      <span className="text-slate-500 block text-[10px]">{c.schedule}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Next Live Batch</span>
                      <span className="font-semibold text-slate-900">{c.nextBatch}</span>
                    </div>
                  </div>

                  {/* Languages Supported */}
                  <div className="mb-4">
                    <span className="text-slate-400 block text-[11px] mb-1 font-medium">
                      Languages Available:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {c.languages.map((l, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Key Syllabus Modules:
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
                  <span className="text-xs text-slate-500">
                    Admission by Application Only
                  </span>

                  <button
                    onClick={() => scrollToForm(c.title)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Select & Get Free Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              STUDENT RESULTS & REVIEWS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Real Experiences from Everyday Indian Traders
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">
                4.8 / 5 Rating from 12,400+ Students Mentored
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                  <span className="inline-block mt-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {t.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn from Rahul Rathore / Finlip */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Sets Finlip Security Apart?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything designed to turn confusion into clarity and disciplined execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-mono text-emerald-700">01</span>
              <h4 className="font-bold text-slate-900 text-base">Live Market Hours</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Learn setup triggers during active 9:15 AM - 3:30 PM volatility, not hypothetical weekend chart replays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-mono text-teal-700">02</span>
              <h4 className="font-bold text-slate-900 text-base">8 Native Languages</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Connect deeply with instructors in Hindi, English, Tamil, Telugu, Marathi, Gujarati, Bengali, or Kannada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-mono text-blue-700">03</span>
              <h4 className="font-bold text-slate-900 text-base">Mathematical Sizing</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Every trade enforces pre-calculated position sizing and strict 1:2+ risk-to-reward ratios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-mono text-indigo-700">04</span>
              <h4 className="font-bold text-slate-900 text-base">Lifetime Re-Attendance</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Re-watch HD recordings on Finlip App anytime. Lifetime access to student community discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom High-Converting Action Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30">
            Admissions Closing Soon for This Week&apos;s Cohort
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Trade with Rules, Not Emotions?
          </h2>
          <p className="text-sm sm:text-base text-emerald-50 max-w-xl mx-auto">
            Book your Free Live Demo Masterclass seat now and receive our 42-page Market Structure Blueprint via WhatsApp.
          </p>
          <div className="pt-2">
            <button
              onClick={() => scrollToForm()}
              className="px-8 py-4 rounded-xl font-bold text-sm text-emerald-950 bg-white hover:bg-emerald-50 shadow-xl shadow-black/10 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Claim Your Free Demo Pass Above</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Bottom Conversion Bar on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-slate-200 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-slate-500 block">Upcoming Live Batch</span>
          <span className="text-xs font-bold text-emerald-700 font-mono">Free Demo Passes Open</span>
        </div>
        <button
          onClick={() => scrollToForm()}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md active:scale-95 transition-all"
        >
          Book Free Demo
        </button>
      </div>

      {/* Simple Clean Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-xs border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-300 font-semibold">
            Finlip Security Market Academy • Mentored by Rahul Rathore (NISM Series VIII Certified)
          </p>
          <p className="text-slate-500">
            Campus: 111 P.U. 4, Scheme No. 54, Vijay Nagar, Indore 452010 | Mumbai: 156-158 J.B. Nagar, Andheri (E), Mumbai 400099
          </p>
          <p className="text-[11px] text-slate-600 pt-2">
            Disclaimer: Stock and derivatives trading carry market risks. We are an educational training academy. We do not provide guaranteed returns or tip advisory.
          </p>
        </div>
      </footer>
    </div>
  );
}
