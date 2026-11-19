"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface NavbarProps {
  onOpenModal?: (title?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Courses & Masterclass",
      href: "/courses",
      hasDropdown: true,
      subItems: [
        {
          title: "Technical Analysis Pro",
          desc: "Price action, indicators, chart geometry",
          href: "/courses#technical",
        },
        {
          title: "Options Trading & Greeks",
          desc: "Theta decay, iron condor, open interest",
          href: "/courses#options",
        },
        {
          title: "Algo & Quant Systems",
          desc: "Automated execution & backtesting",
          href: "/courses#algo",
        },
        {
          title: "Beginner Stock Starter (Free)",
          desc: "Foundational demat & equity basics",
          href: "/courses#beginner",
        },
      ],
    },
    { name: "Research Advisory", href: "/advisory" },
    { name: "About Finlip", href: "/about" },
    { name: "Compliance & SEBI", href: "/compliance" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Regulatory & Emergency Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center text-center md:text-left">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium text-[11px] border border-emerald-500/30">
              <Award className="w-3 h-3 text-emerald-400" /> SEBI REG: INH000014892
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-200 font-medium">Finlip Security Research & Advisory</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400 hidden lg:inline">ISO 9001:2015 Certified Financial Training</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <a
              href="tel:+917314852000"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 731 485 2000</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:support@finlipsecurity.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>support@finlipsecurity.com</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Desk Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  FINLIP
                </span>
                <span className="text-xl font-light tracking-wide text-emerald-600">
                  SECURITY
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">
                Research & Masterclass
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setCoursesDropdown(true)}
                    onMouseLeave={() => setCoursesDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          coursesDropdown ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {coursesDropdown && (
                      <div className="absolute top-full left-0 w-80 pt-2 transition-all duration-150">
                        <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 divide-y divide-slate-100">
                          <div className="pb-2 mb-2">
                            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider px-2">
                              Masterclass Tracks
                            </span>
                          </div>
                          <div className="pt-1 space-y-1">
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/sub"
                              >
                                <div className="text-sm font-semibold text-slate-900 group-hover/sub:text-emerald-600 flex items-center justify-between">
                                  <span>{sub.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:translate-x-1 group-hover/sub:text-emerald-600 transition-all" />
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                  {sub.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <div className="pt-2 mt-2">
                            <Link
                              href="/courses"
                              className="w-full text-center block py-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
                            >
                              View All 6 Programs & Schedules →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenModal && onOpenModal("Free Consultation Call")}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3.5 py-2 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Request Callback
            </button>
            <button
              onClick={() => onOpenModal && onOpenModal("Book Free Live Masterclass")}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal && onOpenModal("Book Free Demo Class")}
              className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow-xs"
            >
              Free Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    pathname === item.href
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-6 space-y-1 mt-1 border-l border-slate-200 ml-3">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm text-slate-600 hover:text-emerald-600"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal("Free Consultation Call");
              }}
              className="w-full py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800 text-center hover:bg-slate-50"
            >
              Request a Callback
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal("Book Free Live Masterclass");
              }}
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center shadow-md shadow-emerald-600/20"
            >
              Book Free Live Demo Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
