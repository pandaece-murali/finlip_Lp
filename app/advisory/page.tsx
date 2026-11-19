"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import LeadModal from "@/components/LeadModal";
import {
  Award,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

export default function AdvisoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Research & Strategy Consultation");

  const openModal = (title?: string) => {
    setModalTitle(title || "Research & Strategy Consultation");
    setModalOpen(true);
  };

  const advisoryServices = [
    {
      id: "equity",
      name: "Equity Cash & Swing Alpha",
      badge: "High Consistency",
      targetInvestor: "Working Professionals & Swing Traders",
      holding: "3 - 15 Trading Days",
      riskReward: "1 : 2.5 Minimum",
      frequency: "10 - 15 Setups / Month",
      description:
        "Curated large-cap and high-momentum mid-cap equity setups based on multi-timeframe breakouts, institutional accumulation volume, and sector rotation.",
      features: [
        "Clear Entry Range, Hard Stop-Loss & 2 Profit Targets",
        "Continuous trailing stop loss SMS & App updates",
        "Weekly sector analysis & institutional flow report",
        "1-on-1 portfolio risk audit with senior market mentor",
      ],
    },
    {
      id: "derivatives",
      name: "Index Derivatives (Nifty & Bank Nifty)",
      badge: "Active Traders",
      targetInvestor: "Experienced Futures & Options Traders",
      holding: "Intraday & Weekly Expiry",
      riskReward: "Strict Defined Risk Spreads",
      frequency: "15 - 20 Setups / Month",
      description:
        "Quantitative options strategies on Nifty 50 and Bank Nifty. Theta capture, short straddles, and credit spreads with automated adjustment rules.",
      features: [
        "Pre-market open interest (OI) & PCR levels at 8:45 AM",
        "Defined-risk hedged options buying & selling setups",
        "Dynamic adjustment alerts during market volatility spikes",
        "Dedicated derivatives desk helpline during trading hours",
      ],
    },
    {
      id: "commodity",
      name: "MCX Bullion & Energy Strategy",
      badge: "Evening Market Desk",
      targetInvestor: "Commodity & Evening Session Traders",
      holding: "Intraday (Evening 5:00 PM - 11:30 PM)",
      riskReward: "1 : 2 Minimum",
      frequency: "12 - 18 Setups / Month",
      description:
        "High-volatility setups in MCX Gold, Silver, Crude Oil, and Natural Gas driven by macroeconomic catalysts, US dollar index, and volume profiling.",
      features: [
        "Key economic data alerts (US CPI, Non-Farm Payrolls, OPEC)",
        "Technical levels with exact stop-loss points in ₹ terms",
        "Real-time alerts directly during high-liquidity evening hours",
        "Risk allocation limits strictly capped per trade",
      ],
    },
    {
      id: "wealth",
      name: "Long-Term Alpha & Multibagger Dossier",
      badge: "Wealth Creation",
      targetInvestor: "HNIs, Family Offices & Long-Term Investors",
      holding: "1 - 3 Years",
      riskReward: "Fundamental Upside Potential",
      frequency: "Quarterly Comprehensive Reports",
      description:
        "Forensic fundamental analysis identifying high ROCE, debt-free, clean governance companies with multi-year tailwinds before they are discovered by large institutions.",
      features: [
        "Comprehensive 30+ page forensic research report per stock",
        "Quarterly earnings update & management commentary track",
        "Asset allocation & sector diversification guidance",
        "Direct quarterly video conference with Head of Research",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar onOpenModal={openModal} />
      <MarketTicker />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" /> NISM Series VIII Certified Mentorship & Market Research
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Institutional Market Research & Strategy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Data-driven equity, derivative, and commodity research designed for traders and investors who prioritize capital preservation and asymmetric risk-to-reward.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openModal("Research & Strategy Consultation")}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Schedule 1-on-1 Strategy Assessment Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* Educational Advisory Notice */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 text-xs text-slate-700 shadow-2xs">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold">Risk Management Policy:</strong> We NEVER provide guaranteed, fixed, or risk-free return promises. All strategies and case studies emphasize strict mathematical position sizing and disciplined risk-to-reward ratios (minimum 1:2).
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Service Offerings */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white border border-slate-200 hover:border-emerald-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 group scroll-mt-28 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {srv.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">NISM Certified Strategy</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {srv.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 my-5 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Holding Period</span>
                      <span className="font-semibold text-slate-800">{srv.holding}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Target R:R</span>
                      <span className="font-semibold text-emerald-700">{srv.riskReward}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Volume</span>
                      <span className="font-semibold text-slate-800">{srv.frequency}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Deliverables & Risk Controls:
                    </span>
                    {srv.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Suitability:</span>
                    <span className="text-xs font-semibold text-slate-700">{srv.targetInvestor}</span>
                  </div>

                  <button
                    onClick={() => openModal(`Strategy Inquiry: ${srv.name}`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
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
