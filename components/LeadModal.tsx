"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, User, Phone, Mail, Lock } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTitle?: string;
}

export default function LeadModal({ isOpen, onClose, defaultTitle }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Technical Analysis Pro Masterclass",
    language: "English",
    experience: "Beginner (0-1 yrs)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "Technical Analysis Pro Masterclass",
      language: "English",
      experience: "Beginner (0-1 yrs)",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-900">
        {/* Background subtle color wash */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Registration Confirmed!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="text-emerald-700 font-semibold">{formData.name || "Trader"}</span>! A Finlip Senior Research Mentor will reach out via WhatsApp/Call in your preferred language (<span className="text-slate-900 font-medium">{formData.language}</span>) within 15 minutes.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Selected Program:</span>
                <span className="font-semibold text-emerald-700">{formData.interest}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Registered Phone:</span>
                <span className="font-mono text-slate-900">{formData.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Session Pass:</span>
                <span className="font-mono text-emerald-700 font-bold">FLIP-VIP-PASS-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> SEBI Registered Advisory
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {defaultTitle || "Book Free Demo Masterclass"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Experience institutional live market chart reading, option greeks & setup execution. Zero commitment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">WhatsApp / Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Preferred Language</label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी (Hindi)</option>
                    <option value="Tamil">தமிழ் (Tamil)</option>
                    <option value="Telugu">తెలుగు (Telugu)</option>
                    <option value="Marathi">मराठी (Marathi)</option>
                    <option value="Bengali">বাংলা (Bengali)</option>
                    <option value="Gujarati">ગુજરાતી (Gujarati)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Trading Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  >
                    <option value="Beginner (0-1 yrs)">Beginner (0-1 yrs)</option>
                    <option value="Intermediate (1-3 yrs)">Intermediate (1-3 yrs)</option>
                    <option value="Experienced (3+ yrs)">Experienced (3+ yrs)</option>
                    <option value="Full Time Trader">Full Time Trader</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Area of Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                >
                  <option value="Technical Analysis Pro Masterclass">Technical Analysis Pro Masterclass</option>
                  <option value="Options Trading & Greeks Mastery">Options Trading & Greeks Mastery</option>
                  <option value="Institutional Price Action & Hedging">Institutional Price Action & Hedging</option>
                  <option value="Quantitative & Algorithmic Trading">Quantitative & Algorithmic Trading</option>
                  <option value="SEBI Research Advisory (Equity/Commodity)">SEBI Research Advisory (Equity/Commodity)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl active:scale-98 transition-all shadow-md shadow-emerald-600/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Reserving Your Seat..." : "Reserve Free Demo Pass Now"}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                100% Privacy. No spam. SEBI Compliant confidentiality policy.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
