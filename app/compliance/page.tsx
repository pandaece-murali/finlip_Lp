"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import {
  Award,
  CheckCircle,
  Mail,
  Phone,
  Building,
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
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <MarketTicker />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" /> Institutional Certifications & Registration Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            NISM Certifications & Exchange Authorisations
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Finlip Security operates with complete transparency under National Institute of Securities Markets (NISM) standards and exchange registrations.
          </p>
        </div>
      </section>

      {/* Official Credentials Box */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Verified Mentor & Institutional Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Lead Faculty</span>
                <span className="font-semibold text-slate-900">Mr. Rahul Rathore</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">NISM Certification No.</span>
                <span className="font-mono font-bold text-emerald-700">2420365732 (Series VIII)</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Exchange Status</span>
                <span className="font-semibold text-slate-900">Authorised Person (NSE & BSE)</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-xs">Quality Accreditation</span>
                <span className="font-semibold text-slate-900">ISO 9001:2015 Quality System</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed space-y-2 pt-2 border-t border-slate-100">
              <p>
                <strong>Training Campus:</strong> 111 P.U. 4, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010.
              </p>
              <p>
                <strong>Corporate Office:</strong> 156-158 J.B. Nagar, Andheri (East), Mumbai, Maharashtra 400099.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Grievance Resolution Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
              STUDENT SUPPORT TRANSPARENCY
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Monthly Student Inquiry & Support Resolution Data
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              All student feedback, doubt sessions, and portal resolution requests are logged and closed within 48 hours.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-600 uppercase text-[11px] font-mono border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Reporting Month</th>
                  <th className="py-3 px-4">Inquiries Received</th>
                  <th className="py-3 px-4">Resolved</th>
                  <th className="py-3 px-4">Pending</th>
                  <th className="py-3 px-4">Avg Resolution Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {complaintData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">{row.month}</td>
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

      {/* Disclaimers */}
      <section className="py-12 bg-white text-xs text-slate-600" id="disclaimer">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Educational Disclaimers & Risk Warning
          </h4>
          <p className="leading-relaxed">
            1. Trading and investments in equity, derivatives, and securities markets are subject to market risks. Stock prices and option premiums fluctuate based on market supply and demand. Past performance in case studies does not guarantee future results.
          </p>
          <p className="leading-relaxed">
            2. Finlip Security is an educational institute delivering structured training, chart reading frameworks, and technical analysis skills. We do NOT provide assured returns, profit sharing, or tip channels.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
