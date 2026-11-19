"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  high: string;
}

const initialTickers: TickerItem[] = [
  { symbol: "NIFTY 50", price: "24,852.15", change: "+148.60 (+0.60%)", isPositive: true, high: "24,890.00" },
  { symbol: "BANK NIFTY", price: "52,430.40", change: "+324.80 (+0.62%)", isPositive: true, high: "52,550.00" },
  { symbol: "SENSEX", price: "81,720.80", change: "+490.25 (+0.60%)", isPositive: true, high: "81,850.00" },
  { symbol: "FINNIFTY", price: "24,110.60", change: "+112.45 (+0.47%)", isPositive: true, high: "24,150.00" },
  { symbol: "CRUDE OIL", price: "₹6,324.00", change: "-42.00 (-0.66%)", isPositive: false, high: "₹6,410.00" },
  { symbol: "GOLD MCX", price: "₹76,450.00", change: "+280.00 (+0.37%)", isPositive: true, high: "₹76,600.00" },
  { symbol: "USD / INR", price: "84.38", change: "-0.04 (-0.05%)", isPositive: false, high: "84.45" },
  { symbol: "RELIANCE", price: "₹1,288.40", change: "+18.90 (+1.49%)", isPositive: true, high: "₹1,295.00" },
  { symbol: "HDFC BANK", price: "₹1,784.60", change: "+14.20 (+0.80%)", isPositive: true, high: "₹1,792.00" },
  { symbol: "TCS", price: "₹4,120.50", change: "-12.30 (-0.30%)", isPositive: false, high: "₹4,160.00" },
];

export default function MarketTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(initialTickers);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => {
          if (Math.random() > 0.7) {
            return { ...t };
          }
          return t;
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 text-xs overflow-hidden select-none py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 pr-4 border-r border-slate-200 shrink-0 font-bold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-mono">
            LIVE NSE/BSE
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar flex items-center gap-4 px-4 whitespace-nowrap text-xs">
          {tickers.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <span className="font-semibold text-slate-800">{item.symbol}</span>
              <span className="font-mono text-slate-900 font-medium">{item.price}</span>
              <span
                className={`inline-flex items-center gap-0.5 font-mono text-[11px] font-semibold ${
                  item.isPositive ? "text-emerald-700" : "text-rose-600"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
