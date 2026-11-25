"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import {
  Shield,
  Building,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" /> 18+ Years of Financial Excellence
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Empowering Indian Traders with Truth, Math & Discipline
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded with a singular mission: to eradicate retail trading gambling and replace it with institutional risk management, structured education, and certified research.
          </p>
        </div>
      </section>

      {/* Core Numbers */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <p className="text-3xl sm:text-4xl font-black font-mono text-slate-900">18+</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Years Market Presence</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <p className="text-3xl sm:text-4xl font-black font-mono text-emerald-700">150,000+</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Learners Mentored</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <p className="text-3xl sm:text-4xl font-black font-mono text-teal-700">7</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Indian Regional Languages</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <p className="text-3xl sm:text-4xl font-black font-mono text-blue-700">100%</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">NISM Certified Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                OUR STORY & MISSION
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Finlip Security Was Built
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 90% of retail participants in the Indian derivatives market suffer losses due to a lack of risk management, chasing deceptive social media tips, and misunderstanding option Greeks.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Finlip Security was established by institutional market practitioners to create an honest ecosystem. We believe that when retail traders are equipped with the same tools as institutional proprietary desks — volume profile, delta hedging, and systematic position sizing — they trade with calmness and mathematical edge.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict zero-guaranteed return policy and transparent risk management.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive learning during live market hours, not post-facto slides.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multilingual instruction bridging the gap for vernacular traders.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Our 4 Core Values</h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-emerald-700 mb-1">1. Integrity Over Hype</h4>
                  <p className="text-slate-600 text-xs">
                    We never show fake screenshot profits or promise luxury lifestyles. We teach statistical probabilities and disciplined trade journaling.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-teal-700 mb-1">2. Mathematical Rigor</h4>
                  <p className="text-slate-600 text-xs">
                    Every trade must have a clear structural stop-loss, pre-calculated position size, and a minimum 1:2 risk-to-reward ratio.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-blue-700 mb-1">3. Investor Protection First</h4>
                  <p className="text-slate-600 text-xs">
                    We enforce strict KYC and risk suitability checks. If a product does not match an investor&apos;s risk tolerance, we do not onboard them.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-indigo-700 mb-1">4. Inclusive Financial Education</h4>
                  <p className="text-slate-600 text-xs">
                    Financial wisdom shouldn&apos;t be restricted to English speakers. We proudly deliver masterclasses in 7 Indian regional languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Mentor Credentials */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  LEAD FACULTY & FOUNDER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Mr. Rahul Rathore
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  National Institute of Securities Markets (NISM) Certified in Equity Derivatives. Registered Authorised Person on both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p>• NISM Certificate No: <strong>2420365732</strong> (Series VIII: Equity Derivatives)</p>
                  <p>• BSE AP Reg No: <strong>AP01329901167642</strong> (Cash & Equity Derivatives)</p>
                  <p>• NSE AP Code: <strong>CM & FO Active</strong> (Ref: 13773/RAHUL)</p>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Training Campus</span>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">Indore Head Campus</h4>
                  <p className="text-slate-600 mt-1">111 P.U. 4, Scheme No. 54, Vijay Nagar, Indore 452010</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Corporate Office</span>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">Mumbai Office</h4>
                  <p className="text-slate-600 mt-1">156-158 J.B. Nagar, Andheri (East), Mumbai 400099</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Presence */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Office Locations</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Visit our corporate campuses or connect with our teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider font-mono">
                <Building className="w-4 h-4" /> Registered Office
              </div>
              <h4 className="text-xl font-bold text-slate-900">Mumbai Campus</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unit 1102, Solitaire Corporate Park 2, 7th Floor, Chakala, Andheri (East), Mumbai, Maharashtra 400093, India
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Phone: +91 22 6854 1100</p>
                <p>Email: finlipsecurity@gmail.com</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider font-mono">
                <Building className="w-4 h-4" /> Corporate Center
              </div>
              <h4 className="text-xl font-bold text-slate-900">Indore Campus</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                NRK Business Park, 9th Floor, B-1, Scheme No. 54, PU-4, Vijay Nagar Square, Indore, Madhya Pradesh 452010, India
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Phone: +91 731 485 2000</p>
                <p>Email: finlipsecurity@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTitle="Schedule Campus / Online Meeting"
      />
    </div>
  );
}
