"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import LeadModal from "@/components/LeadModal";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

export default function AdvisoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Advisory Consultation Call");

  const openModal = (title?: string) => {
    setModalTitle(title || "Advisory Consultation Call");
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
      frequency: "10 - 15 Research Calls / Month",
      description:
        "Curated large-cap and high-momentum mid-cap equity setups based on multi-timeframe breakouts, institutional accumulation volume, and sector rotation.",
      features: [
        "Clear Entry Range, Hard Stop-Loss & 2 Profit Targets",
        "Continuous trailing stop loss SMS & App updates",
        "Weekly sector analysis & institutional flow report",
        "1-on-1 portfolio risk audit with senior research analyst",
      ],
    },
    {
      id: "derivatives",
      name: "Index Derivatives (Nifty & Bank Nifty)",
      badge: "Active Traders",
      targetInvestor: "Experienced Futures & Options Traders",
      holding: "Intraday & Weekly Expiry",
      riskReward: "Strict Defined Risk Spreads",
      frequency: "15 - 20 Calls / Month",
      description:
        "Quantitative options strategies on Nifty 50 and Bank Nifty. Theta capture, short straddles, and credit spreads with automated adjustment rules.",
      features: [
        "Pre-market open interest (OI) & PCR levels at 8:45 AM",
        "Defined-risk hedged options buying & selling calls",
        "Dynamic adjustment alerts during market volatility spikes",
        "Dedicated derivatives desk helpline during trading hours",
      ],
    },
    {
      id: "commodity",
      name: "MCX Bullion & Energy Advisory",
      badge: "Evening Market Desk",
      targetInvestor: "Commodity & Evening Session Traders",
      holding: "Intraday (Evening 5:00 PM - 11:30 PM)",
      riskReward: "1 : 2 Minimum",
      frequency: "12 - 18 Calls / Month",
      description:
        "High-volatility research setups in MCX Gold, Silver, Crude Oil, and Natural Gas driven by macroeconomic catalysts, US dollar index, and volume profiling.",
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
            <ShieldCheck className="w-3.5 h-3.5" /> SEBI Registered Research Analyst • INH000014892
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Institutional Research Advisory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Data-driven equity, derivative, and commodity research designed for traders and investors who prioritize capital preservation and asymmetric risk-to-reward.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openModal("Advisory Consultation Desk")}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Schedule 1-on-1 Risk Assessment Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mandatory SEBI Warning Box */}
      <section className="py-6 bg-amber-50/70 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-white border border-amber-300 flex items-start gap-3.5 text-xs text-amber-900 shadow-2xs">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-950 font-bold">Mandatory SEBI Compliance Notice:</strong> Finlip Security strictly adheres to SEBI Regulations. We NEVER provide guaranteed, fixed, or risk-free return promises. Prior to activating any research advisory service, every client MUST undergo mandatory risk profiling and KYC verification in accordance with SEBI norms.
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
                    <span className="text-xs text-slate-500 font-medium">SEBI Regulated Service</span>
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
                    onClick={() => openModal(`Advisory Plan Inquiry: ${srv.name}`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Plan Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" id="methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              THE FINLIP RESEARCH FRAMEWORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Our Quantitative Desk Generates Alpha
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every recommendation passes through a 4-tier institutional filter before reaching your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <span className="text-2xl font-black font-mono text-emerald-600">01</span>
              <h4 className="font-bold text-slate-900 text-base">Macro & Sector Top-Down</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Tracking RBI liquidity, FII/DII net flows, global commodity prices, and leading sector momentum.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <span className="text-2xl font-black font-mono text-teal-600">02</span>
              <h4 className="font-bold text-slate-900 text-base">Quantitative Screening</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Algorithmic screeners filtering 2,000+ NSE stocks for volume surges, relative strength (RS), and volatility contractions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <span className="text-2xl font-black font-mono text-blue-600">03</span>
              <h4 className="font-bold text-slate-900 text-base">Risk-to-Reward Geometry</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Identifying structural invalidation points. If a setup offers less than 1:2 risk-reward, it is immediately discarded.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <span className="text-2xl font-black font-mono text-indigo-600">04</span>
              <h4 className="font-bold text-slate-900 text-base">Dynamic Trailing & Exit</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Continuous trade management. Trailing stop-losses lock in profits systematically as targets are scaled.
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
