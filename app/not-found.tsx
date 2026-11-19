import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
        <Shield className="w-8 h-8" />
      </div>
      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
        404 Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
        Market Level Unavailable
      </h1>
      <p className="text-sm text-slate-600 max-w-md mt-2 leading-relaxed">
        The research page, advisory dossier, or masterclass curriculum you are looking for has either moved or is undergoing scheduled updates.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/courses"
          className="px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs transition-colors"
        >
          Browse Masterclasses
        </Link>
      </div>
    </div>
  );
}
