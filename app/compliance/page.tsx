"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import {
  ShieldCheck,
  ExternalLink,
  Award,
} from "lucide-react";

export default function CompliancePage() {
  const complaintData = [
    {
      month: "October 2026",
      carriedForward: 0,
      received: 2,
      resolved: 2,
      pending: 0,
      avgResolutionDays: "2 Days",
    },
    {
      month: "September 2026",
      carriedForward: 0,
      received: 3,
      resolved: 3,
      pending: 0,
      avgResolutionDays: "3 Days",
    },
    {
      month: "August 2026",
      carriedForward: 0,
      received: 1,
      resolved: 1,
      pending: 0,
      avgResolutionDays: "1 Day",
    },
    {
      month: "July 2026",
      carriedForward: 0,
      received: 4,
      resolved: 4,
      pending: 0,
      avgResolutionDays: "2 Days",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <MarketTicker />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Regulatory Compliance Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            SEBI Regulatory Disclosures & Investor Charter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Finlip Security operates with complete regulatory transparency under the regulations of the Securities and Exchange Board of India (SEBI).
          </p>
        </div>
      </section>

      {/* Official Credentials Box */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Registration & Intermediary Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Entity Legal Name</span>
                <span className="font-semibold text-slate-900">Finlip Security Research Limited</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">SEBI Registration Number</span>
                <span className="font-mono font-bold text-emerald-700">INH000014892</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Category</span>
                <span className="font-semibold text-slate-900">Research Analyst & Financial Market Educator</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Quality Accreditation</span>
                <span className="font-semibold text-slate-900">ISO 9001:2015 Certified System</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed space-y-2 pt-2 border-t border-slate-100">
              <p>
                <strong>Principal Officer:</strong> Mr. Naveen Mishra | <strong>Email:</strong> compliance@finlipsecurity.com | <strong>Contact:</strong> +91 731 485 2000
              </p>
              <p>
                <strong>Registered Office:</strong> Unit 1102, Solitaire Corporate Park 2, Chakala, Andheri (East), Mumbai, Maharashtra 400093.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Complaints Audit Table (SEBI Requirement) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              PUBLIC AUDIT REPORT
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Monthly Investor Complaints Audit Data
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              In accordance with SEBI circular SEBI/HO/IMD/DF1/CIR/P/2021/677, client grievances and resolutions are published monthly.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-600 uppercase text-[11px] font-mono border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Reporting Month</th>
                  <th className="py-3 px-4">Carried Forward</th>
                  <th className="py-3 px-4">Received</th>
                  <th className="py-3 px-4">Resolved</th>
                  <th className="py-3 px-4">Pending</th>
                  <th className="py-3 px-4">Avg Resolution Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {complaintData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">{row.month}</td>
                    <td className="py-3 px-4">{row.carriedForward}</td>
                    <td className="py-3 px-4">{row.received}</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{row.resolved}</td>
                    <td className="py-3 px-4">{row.pending}</td>
                    <td className="py-3 px-4 text-slate-600">{row.avgResolutionDays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grievance Redressal Escalation Matrix */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" id="grievance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              GRIEVANCE REDRESSAL MECHANISM
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Investor Escalation Protocol
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              If you have any query, concern, or grievance regarding our research or training services, follow the resolution matrix below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                LEVEL 1 : CUSTOMER SUPPORT
              </span>
              <h4 className="font-bold text-slate-900 text-base">Client Desk Help</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Reach out to our customer resolution desk with your transaction or student ID.
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-600">
                <p>Email: support@finlipsecurity.com</p>
                <p>Phone: +91 731 485 2000</p>
                <p className="text-slate-400 font-medium">TAT: Within 24-48 Working Hours</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-teal-700 px-2 py-0.5 rounded bg-teal-50 border border-teal-200">
                LEVEL 2 : COMPLIANCE OFFICER
              </span>
              <h4 className="font-bold text-slate-900 text-base">Head of Compliance</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                If the query is unresolved after 48 hours, escalate directly to the compliance department.
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-600">
                <p>Email: compliance@finlipsecurity.com</p>
                <p>Attn: Chief Compliance Officer</p>
                <p className="text-slate-400 font-medium">TAT: Within 3 Working Days</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                LEVEL 3 : SEBI SCORES / SMART ODR
              </span>
              <h4 className="font-bold text-slate-900 text-base">Regulatory Portals</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                If unresolved within 30 days, lodge your grievance with SEBI SCORES or SMART ODR.
              </p>
              <div className="pt-2 text-xs space-y-2">
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>SEBI SCORES Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://smartodr.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>SMART ODR Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-12 bg-white text-xs text-slate-600" id="disclaimer">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Standard Regulatory Disclaimers & Risk Warning
          </h4>
          <p className="leading-relaxed">
            1. Registration granted by SEBI, membership of BASL (if applicable), and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <p className="leading-relaxed">
            2. Trading and investments in securities markets are subject to market risk. Prices can fluctuate upwards or downwards. Past performance of any recommendation or strategy does not guarantee future results.
          </p>
          <p className="leading-relaxed">
            3. Neither Finlip Security nor any of its associates, directors, or employees accept any liability for any loss arising from the use of research reports, training materials, or trading ideas shared on our platforms.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
