"use client";

import React from "react";
import Link from "next/link";
import { Shield, Phone, Mail, ExternalLink, Award, FileText, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      {/* Top Footer Banner */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">SEBI Regulated</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Reg No: INH000014892. Strict adherence to SEBI research analyst norms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">18+ Years Excellence</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Over 150,000 retail traders & institutional clients mentored across India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Multi-Language Support</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Dedicated student advisors available in 7 major Indian languages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Transparent Audit</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Monthly investor grievance data & complaint audit reports publicly published.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-xs">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                FINLIP <span className="text-emerald-700 font-light">SECURITY</span>
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed pr-6 text-xs">
              Finlip Security is an Indian financial market intelligence firm and premier stock market training academy. We empower retail traders with quantitative price action setups, systematic option Greeks mastery, and SEBI-compliant market advisory.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+917314852000" className="hover:text-emerald-700 font-medium">
                  +91 731 485 2000 / +91 22 6854 1100
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:support@finlipsecurity.com" className="hover:text-emerald-700 font-medium">
                  support@finlipsecurity.com | compliance@finlipsecurity.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Masterclasses
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/courses#technical" className="hover:text-emerald-700 transition-colors">
                  Technical Analysis Pro
                </Link>
              </li>
              <li>
                <Link href="/courses#options" className="hover:text-emerald-700 transition-colors">
                  Options Trading & Greeks
                </Link>
              </li>
              <li>
                <Link href="/courses#priceaction" className="hover:text-emerald-700 transition-colors">
                  Price Action & Volume Spread
                </Link>
              </li>
              <li>
                <Link href="/courses#algo" className="hover:text-emerald-700 transition-colors">
                  Algo & Quantitative Systems
                </Link>
              </li>
              <li>
                <Link href="/courses#beginner" className="hover:text-emerald-700 transition-colors">
                  Free Basics of Stock Market
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Advisory */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Research Advisory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/advisory#equity" className="hover:text-emerald-700 transition-colors">
                  Equity Cash & Swing Alpha
                </Link>
              </li>
              <li>
                <Link href="/advisory#derivatives" className="hover:text-emerald-700 transition-colors">
                  Index Futures & Options
                </Link>
              </li>
              <li>
                <Link href="/advisory#commodity" className="hover:text-emerald-700 transition-colors">
                  MCX Commodity & Bullion
                </Link>
              </li>
              <li>
                <Link href="/advisory#methodology" className="hover:text-emerald-700 transition-colors">
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link href="/advisory#trackrecord" className="hover:text-emerald-700 transition-colors">
                  Historical Performance Log
                </Link>
              </li>
            </ul>
          </div>

          {/* Regulatory & Offices */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Locations & SEBI
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-semibold text-slate-800">Registered Office (Mumbai):</p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  Unit 1102, Solitaire Corporate Park 2, 7th Floor, Chakala, Andheri (East), Mumbai 400093, MH
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Corporate Campus (Indore):</p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  NRK Business Park, 9th Floor, Scheme No. 54, Vijay Nagar Square, Indore 452010, MP
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
                >
                  <span>SEBI Investor Charter & SCORES</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers & SEBI Warning */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-[11px] text-slate-500 space-y-3">
          <p className="font-bold text-slate-700 uppercase tracking-wide">
            Mandatory Regulatory Disclosures:
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-700">Securities Market Risk Warning:</strong> Investment in securities market are subject to market risks. Read all scheme related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-700">No Guaranteed Returns:</strong> Finlip Security strictly prohibits any representative, employee, or agent from promising assured or fixed profit returns. Advisory recommendations are purely research-driven opinions based on technical and quantitative analysis.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Finlip Security Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-600">
              <Link href="/compliance#disclaimer" className="hover:text-emerald-700">
                Disclaimer
              </Link>
              <Link href="/compliance#privacy" className="hover:text-emerald-700">
                Privacy Policy
              </Link>
              <Link href="/compliance#terms" className="hover:text-emerald-700">
                Terms of Service
              </Link>
              <Link href="/compliance#grievance" className="hover:text-emerald-700">
                Grievance Redressal
              </Link>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-700 inline-flex items-center gap-1"
              >
                SCORES Portal <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-700 inline-flex items-center gap-1"
              >
                SMART ODR <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
