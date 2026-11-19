"use client";

import React from "react";
import Link from "next/link";
import { Shield, Phone, Mail, Award, FileText, CheckCircle2 } from "lucide-react";

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
              <h5 className="font-bold text-slate-900 text-sm">NISM Certified</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Series VIII: Equity Derivatives Certified (Cert No: 2420365732).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">NSE & BSE Authorised</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Authorised Person registered on National Stock Exchange & Bombay Stock Exchange.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Multi-Language Training</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Live classes available in English, Hindi, Tamil, Telugu, Marathi, Gujarati & Bengali.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Practical Live Markets</h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time chart reading during live 9:15 AM - 3:30 PM market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-xs">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                FINLIP <span className="text-emerald-700 font-light">SECURITY</span>
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed pr-6 text-xs">
              Finlip Security is an Indian financial market training academy led by NISM Certified Mentor Rahul Rathore. We empower traders with quantitative price action setups, systematic option Greeks mastery, and disciplined risk-to-reward ratios.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+917314852000" className="hover:text-emerald-700 font-medium">
                  +91 731 485 2000 / +91 98260 00000
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:support@finlipsecurity.com" className="hover:text-emerald-700 font-medium">
                  support@finlipsecurity.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Training Programs
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

          {/* Language Batches */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Languages Offered
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>English Masterclass Cohort</li>
              <li>हिन्दी (Hindi) Live Interactive Batch</li>
              <li>தமிழ் (Tamil) Dedicated Mentor Track</li>
              <li>తెలుగు (Telugu) Trading Room</li>
              <li>मराठी (Marathi) Practical Lab</li>
              <li>ગુજરાતી & বাংলা Regional Sessions</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">
              Campus Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-semibold text-slate-800">Indore Training Center:</p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  111 P.U. 4, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Mumbai Center:</p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  156-158 J.B. Nagar, Andheri (East), Mumbai, Maharashtra 400099
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> NISM Certified & Exchange Registered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Disclaimers & Risk Warning */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-[11px] text-slate-500 space-y-3">
          <p className="font-bold text-slate-700 uppercase tracking-wide">
            Educational Disclaimers & Risk Warning:
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-700">Market Risk Warning:</strong> Stock, equity derivatives, futures, and options trading involve substantial risk of capital loss. Past performance discussed in case studies or masterclasses does not guarantee future results.
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-700">Strictly Educational Platform:</strong> Finlip Security is an educational institute providing stock market training and skill development programs. We do NOT provide any guaranteed returns, investment tip advisory, or profit sharing schemes. All participants are advised to practice proper risk management.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Finlip Security. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-600">
              <Link href="/about" className="hover:text-emerald-700">
                About Rahul Rathore
              </Link>
              <Link href="/courses" className="hover:text-emerald-700">
                Courses
              </Link>
              <Link href="/contact" className="hover:text-emerald-700">
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
