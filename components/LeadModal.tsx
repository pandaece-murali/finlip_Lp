"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, CheckCircle2, Award, User, Phone, Mail, Lock, MapPin, ArrowRight } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTitle?: string;
  defaultCourse?: string;
}

export default function LeadModal({ isOpen, onClose, defaultTitle, defaultCourse }: LeadModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: defaultCourse || "Technical Analysis Pro Masterclass",
    experience: "Beginner (0-1 yrs)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passId, setPassId] = useState("FLIP-PASS-7842");

  if (!isOpen) return null;

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
          course: formData.interest,
          experience: formData.experience,
          source: defaultTitle || "Lead Modal",
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
        formData.interest
      )}&city=${encodeURIComponent(formData.city || "India")}&pass=${encodeURIComponent(finalPass)}`
    );
    onClose();
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      interest: defaultCourse || "Technical Analysis Pro Masterclass",
      experience: "Beginner (0-1 yrs)",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-900">
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
              Thank you, <span className="text-emerald-700 font-semibold">{formData.name || "Trader"}</span>! A Finlip Senior Mentor will reach out via WhatsApp/Call to connect with you in <span className="text-slate-900 font-medium">{formData.city || "your city"}</span> within 15 minutes.
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
                <span className="text-slate-500">City / Location:</span>
                <span className="font-semibold text-slate-900">{formData.city || "India"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Session Pass:</span>
                <span className="font-mono text-emerald-700 font-bold">{passId}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href={`/thank-you?name=${encodeURIComponent(formData.name || "Trader")}&course=${encodeURIComponent(formData.interest)}&city=${encodeURIComponent(formData.city || "India")}&pass=${encodeURIComponent(passId.replace("FLIP-", ""))}`}
                onClick={handleReset}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20 text-center flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <span>View Full Confirmation Pass</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
                <Award className="w-3.5 h-3.5" /> NISM Series VIII Certified Mentorship
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
                  <label className="block text-slate-700 font-medium mb-1">City / Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Indore, Pune"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                  </div>
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
                <label className="block text-slate-700 font-medium mb-1">Select Program</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                >
                  <option value="Technical Analysis Pro Masterclass">Technical Analysis Pro Masterclass</option>
                  <option value="Options Trading & Greeks Mastery">Options Trading & Greeks Mastery</option>
                  <option value="Price Action & Smart Money Traps">Price Action & Smart Money Traps</option>
                  <option value="Quantitative & Algorithmic Trading">Quantitative & Algorithmic Trading</option>
                  <option value="Stock Market Starter Foundation (Free)">Stock Market Starter Foundation (Free)</option>
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
                100% Privacy. No spam. Direct counselor assistance.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
