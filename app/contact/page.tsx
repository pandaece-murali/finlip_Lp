"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    department: "Masterclass Enrollment",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <MarketTicker />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Headphones className="w-3.5 h-3.5" /> Client Support & Enrollment Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect with Finlip Security
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our training tracks, advisory compliance, or fee structures? Our team is available across 7 Indian regional languages.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Offices */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Contact Desks</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call or write to us directly. Our support lines are active Monday to Saturday from 9:00 AM to 6:30 PM IST.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telephone Support</h4>
                    <p className="text-slate-700 font-mono mt-0.5">+91 731 485 2000 (Central Desk)</p>
                    <p className="text-slate-700 font-mono">+91 22 6854 1100 (Mumbai Office)</p>
                    <span className="text-[11px] text-emerald-700 font-semibold">Lines open 9:00 AM - 6:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Addresses</h4>
                    <p className="text-slate-600 mt-0.5">Admissions: support@finlipsecurity.com</p>
                    <p className="text-slate-600">Compliance: compliance@finlipsecurity.com</p>
                    <p className="text-slate-600">Careers: careers@finlipsecurity.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Corporate Centers</h4>
                    <div className="mt-1 text-slate-700 space-y-2 text-xs">
                      <div>
                        <strong className="text-slate-900">Mumbai Registered Office:</strong>
                        <p className="text-slate-600">
                          Unit 1102, Solitaire Corporate Park 2, Chakala, Andheri (East), Mumbai 400093
                        </p>
                      </div>
                      <div>
                        <strong className="text-slate-900">Indore Corporate Campus:</strong>
                        <p className="text-slate-600">
                          NRK Business Park, 9th Floor, Scheme No. 54, PU-4, Vijay Nagar Square, Indore 452010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-emerald-700 font-semibold">{formData.name}</span>. A senior course advisor will connect with you on WhatsApp / Phone within 2 business hours in <span className="text-slate-900 font-medium">{formData.city || "your city"}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Send Us an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-6">
                      Fill out the form below and our educational advisory desk will call you directly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aditya Verma"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-medium mb-1">
                            Mobile / WhatsApp
                          </label>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="10-digit number"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-700 font-medium mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="aditya@example.com"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-medium mb-1">
                            City / Location
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            placeholder="e.g. Mumbai, Indore, Pune"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-700 font-medium mb-1">
                            Department / Inquiry
                          </label>
                          <select
                            value={formData.department}
                            onChange={(e) =>
                              setFormData({ ...formData, department: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600"
                          >
                            <option value="Masterclass Enrollment">Masterclass Enrollment</option>
                            <option value="Advisory Subscriptions">Advisory Subscriptions</option>
                            <option value="Institutional Corporate Training">Corporate Training</option>
                            <option value="Compliance & Grievance">Compliance & Grievance</option>
                            <option value="Careers & Mentorship">Careers & Mentorship</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-medium mb-1">
                          Message or Question (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your trading experience or questions..."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Transmitting..." : "Submit Inquiry Request"}</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
