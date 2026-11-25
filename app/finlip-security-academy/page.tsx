"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Award,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  User,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote,
  Lock,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function FinlipSecurityLandingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    course: "Options Trading & Greeks Mastery",
    experience: "Beginner (0-1 yrs)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passId, setPassId] = useState("FLIP-PASS-9134");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [highlightForm, setHighlightForm] = useState(false);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialScrollRef.current) {
      const scrollAmount = testimonialScrollRef.current.clientWidth * 0.85;
      testimonialScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isTestimonialHovered) return;
    const interval = setInterval(() => {
      if (testimonialScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          testimonialScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          testimonialScrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);

  const courses = [
    {
      id: "options",
      title: "Options Trading & Greeks Mastery",
      badge: "Highest Enrollment",
      tagline: "Build Non-Directional Monthly Cashflows & Master Hedging",
      duration: "4 Weeks (Intensive)",
      schedule: "16 Live Market Sessions",
      highlights: [
        "Decode Delta, Theta, Vega & Gamma with practical live charts",
        "Open Interest (OI) & Real-Time Option Chain reading",
        "Fire-fighting adjustments when market breaks ranges",
        "Zero-loss hedging mechanics during high volatility expiry days",
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
      initials: "AK",
      course: "Options Trading & Greeks",
      rating: 5,
      review:
        "I was losing money every weekly expiry buying cheap OTM call options. Rahul sir's breakdown of Theta decay and non-directional Iron Condors completely transformed my trading. The live morning trading room is worth everything. Attended the batch in Marathi & English.",
    },
    {
      name: "Suresh Sundaram",
      initials: "SS",
      course: "Technical Analysis Pro",
      rating: 5,
      review:
        "Learning in Tamil made all the difference. Rahul Rathore sir explains complex Volume Spread Analysis in simple practical terms. No fake screenshots, only pure chart logic and strict 1:2 risk-reward frameworks.",
    },
    {
      name: "Dr. Kavita Verma",
      initials: "KV",
      course: "Stock Market Starter + Options",
      rating: 5,
      review:
        "As a medical specialist with zero financial background, I was intimidated by stock markets. Finlip's NISM certified mentorship gave me a structured, calm framework. Their capital safety rules protect my hard-earned savings.",
    },
    {
      name: "Nilesh Patel",
      initials: "NP",
      course: "Price Action & Volume Spread",
      rating: 5,
      review:
        "Very transparent and professional academy. Rahul sir's NISM Series VIII credentials and real market experience show in every session. Gujarati and Hindi support made doubt clearing extremely easy.",
    },
    {
      name: "Pooja Bhattacharya",
      initials: "PB",
      course: "Options Trading & Greeks Mastery",
      rating: 5,
      review:
        "As a CA, I appreciate mathematical rigor. Finlip doesn't sell dreams of overnight wealth. They teach Delta-neutral adjustments and statistical probability. My trade journaling discipline improved 10x.",
    },
    {
      name: "Rajesh Menon",
      initials: "RM",
      course: "Quantitative & Algorithmic Systems",
      rating: 5,
      review:
        "Automating my rule-based strategies through Pine Script and broker APIs removed all emotional hesitation from my trading. Outstanding code walkthroughs and risk automation on cloud VPS.",
    },
    {
      name: "Vikram Singh Rathore",
      initials: "VR",
      course: "Technical Analysis Pro",
      rating: 5,
      review:
        "Before joining Finlip, I had lost significant capital following Telegram tipsters. Rahul sir taught me how institutional operators accumulate and distribute. Now I never enter a trade without a structural stop-loss.",
    },
    {
      name: "Meenakshi Iyer",
      initials: "MI",
      course: "Options Greeks & Volatility",
      rating: 5,
      review:
        "The live market trading sessions between 9:15 AM and 11:30 AM are unmatched. Seeing Rahul sir analyze real-time open interest shifts and implied volatility spikes during live ticks is pure gold.",
    },
    {
      name: "Gaurav Agrawal",
      initials: "GA",
      course: "Price Action Geometry",
      rating: 5,
      review:
        "The support-resistance geometry and multi-timeframe confirmation rules have prevented me from getting trapped in false breakouts. Highly recommended for every serious trader in India.",
    },
    {
      name: "Ananya Sen",
      initials: "AS",
      course: "Stock Market Starter Program",
      rating: 5,
      review:
        "The best foundation for anyone starting from scratch. Clear explanations on order types, Demat management, and compounding equity portfolios with zero jargon.",
    },
  ];

  const faqs = [
    {
      q: "Who is the lead faculty teaching these courses?",
      a: "All core masterclasses are taught and designed by Mr. Rahul Rathore, who is NISM Certified (Series VIII: Equity Derivatives, Cert No: 2420365732) and an Authorised Person registered with both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) with over 10 years of live market experience.",
    },
    {
      q: "In which languages can I attend the live sessions?",
      a: "Classes are available across 8 regional Indian languages: English, हिन्दी (Hindi), தமிழ் (Tamil), తెలుగు (Telugu), मराठी (Marathi), ગુજરાતી (Gujarati), বাংলা (Bengali), and ಕನ್ನಡ (Kannada). You can select your preferred language cohort right on the registration form.",
    },
    {
      q: "I am a complete beginner. Which course should I start with?",
      a: "If you have zero prior market experience, we recommend starting with our 'Stock Market Starter Program' or 'Technical Analysis Pro'. We cover everything from setting up a Demat account and understanding candlestick charts to executing orders with disciplined stop-losses.",
    },
    {
      q: "What happens if I miss a live interactive class?",
      a: "Every single live session is recorded in Full HD and uploaded to the Finlip Student Portal within 2 hours. You get lifetime re-watch access along with session summary PDFs and strategy checklists.",
    },
    {
      q: "Is there practical live market training?",
      a: "Yes. Unlike typical seminar courses that only use weekend slides, our students join the live morning execution room (9:15 AM - 11:30 AM) where setups, support/resistance, option chains, and volatility are analyzed in real time.",
    },
    {
      q: "Do you promise guaranteed profits or daily trading tips?",
      a: "No. Stock and derivatives trading carry market risks. Finlip Security is an educational institute focused on equipping you with independent analytical skills, mathematical position sizing, and strict 1:2+ risk-to-reward frameworks. We do not provide tip channels or guaranteed return schemes.",
    },
    {
      q: "How do I secure my seat for the Free Demo Masterclass?",
      a: "Simply fill out the registration form on this page with your WhatsApp number. Our team will send your confirmed Demo Pass and the 42-page Market Structure Blueprint via WhatsApp within 15 minutes.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let finalPass = "PASS-" + Math.floor(1000 + Math.random() * 9000);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          course: formData.course,
          experience: formData.experience,
          source: "Finlip Security Academy LP",
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.passId) {
          finalPass = data.passId.replace("FLIP-", "");
          setPassId(data.passId);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }

    // Direct instant redirect to Thank You page with candidate details
    router.push(
      `/thank-you?name=${encodeURIComponent(formData.name || "Trader")}&course=${encodeURIComponent(
        formData.course
      )}&city=${encodeURIComponent(formData.city || "India")}&pass=${encodeURIComponent(finalPass)}`
    );
  };

  const scrollToForm = (courseName?: string) => {
    setIsSuccess(false);
    if (courseName) {
      setFormData((prev) => ({ ...prev, course: courseName }));
    }
    const el = document.getElementById("lead-form-section");
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setHighlightForm(true);
      setTimeout(() => setHighlightForm(false), 2400);

      setTimeout(() => {
        const nameInput = document.getElementById("lead-name-input") as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 350);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const lpJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://finlip.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Finlip Security Academy",
            "item": "https://finlip.in/finlip-security-academy",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      },
      {
        "@type": "Course",
        "name": "Options Trading & Greeks Mastery",
        "description": "Decode Delta, Theta, Vega & Gamma with practical live charts, open interest analysis, and zero-loss hedging mechanics.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Finlip Security Market Academy",
          "sameAs": "https://finlip.in",
        },
        "instructor": {
          "@type": "Person",
          "name": "Rahul Rathore",
          "jobTitle": "NISM Series VIII Certified Faculty",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "12400",
          "bestRating": "5",
        },
      },
      {
        "@type": "Course",
        "name": "Technical Analysis Pro Masterclass",
        "description": "Master candlestick geometry, volume profile, institutional accumulation, and live morning market trading.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Finlip Security Market Academy",
          "sameAs": "https://finlip.in",
        },
        "instructor": {
          "@type": "Person",
          "name": "Rahul Rathore",
          "jobTitle": "NISM Series VIII Certified Faculty",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lpJsonLd) }}
      />
      {/* Top Credentials & Emergency Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold text-[11px] border border-emerald-500/30">
            <Award className="w-3.5 h-3.5 text-emerald-400" /> NISM CERTIFIED: Series VIII (Equity Derivatives)
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="text-slate-200">
            Next Live Interactive Cohort Starting This Week
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <button
            type="button"
            onClick={() => scrollToForm()}
            className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
          >
            Claim Free Demo Pass →
          </button>
        </div>
      </div>

      {/* Main Top Header */}
      <header className="border-b border-slate-200 bg-white/95 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/finlip-security-logo-transparent.png"
              alt="Finlip Security Academy"
              width={180}
              height={64}
              priority
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://choiceindia.com/register?refercode=SVBK&source=Q0hPSUNFX0NPTk5FQ1Q="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all cursor-pointer shadow-2xs"
            >
              <span>Open Demat Account</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => scrollToForm()}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
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
                Stop gambling on Telegram tips and emotional hunch trades. Learn structured price action, option Greeks, and mathematical risk management live during market hours — taught by NISM certified faculty.
              </p>

              {/* 3 Core Differentiators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Live Market Trading Room</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Strict 1:2+ Risk:Reward</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-2xs">
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

            {/* Right Column: High-Converting Above-The-Fold Form Container */}
            <div
              className={`lg:col-span-5 scroll-mt-28 transition-all duration-300 ${
                highlightForm
                  ? "scale-[1.02] ring-4 ring-emerald-500 shadow-2xl rounded-3xl"
                  : ""
              }`}
              id="lead-form-section"
            >
              {highlightForm && (
                <div className="mb-2 bg-emerald-600 text-white text-xs font-bold py-1.5 px-4 rounded-xl text-center shadow-lg animate-bounce flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Selected! Fill the form below to claim your free pass</span>
                </div>
              )}
              <div className="bg-white border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden ring-4 ring-emerald-500/10">
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
                      <strong className="text-emerald-700">{formData.course}</strong> has been confirmed. Our mentor team will reach out to you in{" "}
                      <strong className="text-slate-900">{formData.city || "your city"}</strong> on WhatsApp at{" "}
                      <strong className="font-mono text-slate-900">{formData.phone}</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                      <Link
                        href={`/thank-you?name=${encodeURIComponent(formData.name || "Trader")}&course=${encodeURIComponent(formData.course)}&city=${encodeURIComponent(formData.city || "India")}&pass=${encodeURIComponent(passId.replace("FLIP-", ""))}`}
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Official Pass & Next Steps</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
                      >
                        Book Another Seat
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          id="lead-name-input"
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
                          City / Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            placeholder="e.g. Mumbai, Indore, Pune"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                          />
                        </div>
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
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToForm()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                  >
                    <span>Enroll with Mentor Rahul Rathore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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

      {/* Showcase All Courses with No Price - Every CTA scrolls to Form */}
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
              Select any program below to book your free demo session and receive the complete syllabus.
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
                  <span className="text-xs text-slate-500 font-medium">
                    {c.id === "starter" ? "Zero AMC Demat Account Available" : "Admission by Application Only"}
                  </span>

                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    {c.id === "starter" && (
                      <a
                        href="https://choiceindia.com/register?refercode=SVBK&source=Q0hPSUNFX0NPTk5FQ1Q="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <span>Open Demat Account</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => scrollToForm(c.title)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <span>Select & Get Free Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials with Interactive Scroll & Carousel */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                STUDENT RESULTS & REVIEWS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Real Experiences from Everyday Indian Traders
              </h2>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">
                  4.8 / 5 Rating from 12,400+ Mentored Traders Across India
                </span>
              </div>
            </div>

            {/* Scroll Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTestimonials("left")}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center shadow-xs transition-all active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("right")}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center shadow-xs transition-all active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Swipe Guidance Banner */}
          <div className="sm:hidden flex items-center justify-between text-[11px] text-slate-500 mb-3 px-1">
            <span>👈 Swipe left or right to explore</span>
            <span className="text-emerald-700 font-semibold">10 Verified Reviews</span>
          </div>

          {/* Horizontal Scrolling Card Track */}
          <div
            ref={testimonialScrollRef}
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
            onTouchStart={() => setIsTestimonialHovered(true)}
            onTouchEnd={() => setIsTestimonialHovered(false)}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] sm:w-[360px] md:w-[380px] shrink-0 snap-center bg-white border border-slate-200 hover:border-emerald-400 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  {/* Card Top: Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-emerald-300 mb-2 opacity-60" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                {/* Card Bottom: User Details */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {t.name}
                      </h4>
                      <span className="inline-block mt-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        {t.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation Indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  if (testimonialScrollRef.current) {
                    const cardWidth = 360;
                    testimonialScrollRef.current.scrollTo({
                      left: i * cardWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-2.5 h-1.5 rounded-full bg-slate-300 hover:bg-emerald-600 transition-all cursor-pointer"
                aria-label={`Go to testimonial ${i + 1}`}
              />
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
              <h4 className="font-bold text-slate-900 text-base">Vernacular Batches</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Live interactive classes in your native language with zero language barrier to clarify doubts.
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

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have questions about our mentorship or live demo class? Find quick answers below.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <p className="text-sm text-slate-700 font-medium">
              Want to speak with a senior course counselor?
            </p>
            <button
              type="button"
              onClick={() => scrollToForm()}
              className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              <span>Submit Form for Free Callback & Demo Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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
              type="button"
              onClick={() => scrollToForm()}
              className="px-8 py-4 rounded-xl font-bold text-sm text-emerald-950 bg-white hover:bg-emerald-50 shadow-xl shadow-black/10 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
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
          type="button"
          onClick={() => scrollToForm()}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md active:scale-95 transition-all cursor-pointer"
        >
          Book Free Demo
        </button>
      </div>

      {/* Official Broking Partner Demat Section */}
      <section className="py-8 bg-blue-50/70 border-t border-blue-100 text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 font-mono">
              OFFICIAL BROKING PARTNER
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              Ready to Practice Live? Open Your Free Demat Account
            </h3>
            <p className="text-xs text-slate-600">
              Fast paperless account opening with Choice Broking. Quick KYC verification.
            </p>
          </div>
          <a
            href="https://choiceindia.com/register?refercode=SVBK&source=Q0hPSUNFX0NPTk5FQ1Q="
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Open Demat Account</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

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
